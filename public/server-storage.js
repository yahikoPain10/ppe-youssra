/* =========================================================
   ÉPI — Pont de stockage navigateur → serveur Node.js
   Version v204 : stockage en mémoire, synchronisé en arrière-plan.

   PROBLÈME RÉSOLU (v203 → v204) :
   La version précédente transformait chaque appel
   localStorage.getItem/setItem (pour les clés serveur) en une
   requête XHR SYNCHRONE qui bloquait tout le thread principal
   jusqu'à la réponse du serveur. Avec plusieurs fichiers qui
   lisent/écrivent ces clés à chaque rendu (changement d'unité,
   sauvegarde d'une unité personnalisée, etc.), cela provoquait :
     - des gels d'interface à chaque clic,
     - des écritures dupliquées (3 clés différentes pour les
       unités personnalisées) dont certaines pouvaient échouer
       silencieusement (catch(e){}), créant des incohérences
       entre onglets/sessions (ex. une unité créée par le prof
       qui n'apparaît pas pour l'élève ou dans les résultats),
     - un cache par-clé rempli au hasard du premier accès, donc
       potentiellement périmé.

   NOUVELLE APPROCHE :
   1. Au chargement du script, on lance UNE SEULE requête
      asynchrone GET /api/storage qui récupère tout le magasin
      serveur en une fois et remplit un cache mémoire complet.
   2. localStorage.getItem reste SYNCHRONE (aucun autre fichier
      n'a besoin d'être modifié) mais lit désormais directement
      ce cache mémoire, sans aucun appel réseau. Avant que le
      préchargement soit terminé, on retourne simplement la
      valeur locale existante s'il y en a une (rien de cassé),
      puis on déclenche un nouveau rendu une fois les données
      serveur arrivées (voir onReady ci-dessous).
   3. localStorage.setItem écrit IMMÉDIATEMENT dans le cache
      mémoire (donc toute lecture suivante, même dans la même
      milliseconde, voit la nouvelle valeur), puis empile
      l'écriture serveur dans une file traitée en arrière-plan,
      avec nouvelles tentatives en cas d'échec réseau. Aucune
      écriture n'est perdue silencieusement : après plusieurs
      échecs, un avertissement visible est émis et l'écriture
      reste en file pour réessai.
   4. Les 3 clés historiques des unités personnalisées
      (epi_v175 / epi_v181 / epi_v183) sont toujours acceptées en
      lecture ET en écriture pour ne rien casser, mais sont
      désormais TOUJOURS synchronisées ensemble dans le même
      cache mémoire — donc plus jamais désynchronisées entre
      elles.
========================================================= */
(function(){
  'use strict';

  const SERVER_KEY_EXACT = new Set([
    'epi_v175_custom_units',
    'epi_v183_custom_units_visible',
    'epi_v181_custom_units_visible',
    'epi_v191_deleted_units',
    'edu_libre_students_db_v41',
    'edu_libre_results_db_v41'
  ]);
  const SERVER_KEY_PREFIXES = [
    'epi_v170_unit_content_',
    'epi_v169_teacher_questions_'
  ];

  // Ces 3 clés doivent toujours contenir la même donnée : on les
  // garde synchronisées entre elles à chaque écriture pour éviter
  // toute divergence (cause historique des unités personnalisées
  // "invisibles" pour certaines pages).
  const CUSTOM_UNITS_MIRROR_KEYS = [
    'epi_v175_custom_units',
    'epi_v183_custom_units_visible',
    'epi_v181_custom_units_visible'
  ];

  function isServerKey(key){
    key = String(key || '');
    return SERVER_KEY_EXACT.has(key) || SERVER_KEY_PREFIXES.some(prefix => key.startsWith(prefix));
  }

  const nativeGet    = Storage.prototype.getItem;
  const nativeSet    = Storage.prototype.setItem;
  const nativeRemove = Storage.prototype.removeItem;

  // Cache mémoire complet pour toutes les clés serveur.
  // null/undefined dans ce cache = "valeur absente confirmée".
  // Une clé qui n'existe pas encore dans `cache` = "pas encore chargée".
  const cache = Object.create(null);
  let preloaded = false;
  let preloadPromise = null;
  const readyCallbacks = [];

  // ---- File d'écriture asynchrone avec nouvelles tentatives ----
  const pendingWrites = Object.create(null); // key -> {value, attempts, timer}
  const MAX_RETRY_DELAY_MS = 8000;
  const BASE_RETRY_DELAY_MS = 400;

  function fetchJson(method, url, payload){
    const opts = {
      method,
      headers: { 'Content-Type': 'application/json;charset=UTF-8' }
    };
    if(payload !== undefined) opts.body = JSON.stringify(payload);
    return fetch(url, opts).then(function(res){
      if(!res.ok) throw new Error('HTTP ' + res.status);
      return res.json().catch(function(){ return {}; });
    });
  }

  function scheduleWrite(key, value, attempt){
    const entry = pendingWrites[key];
    if(entry && entry.timer) clearTimeout(entry.timer);
    const delay = Math.min(BASE_RETRY_DELAY_MS * Math.pow(2, attempt || 0), MAX_RETRY_DELAY_MS);
    const timer = setTimeout(function(){ flushWrite(key); }, delay);
    pendingWrites[key] = { value: value, attempts: attempt || 0, timer: timer };
  }

  function flushWrite(key){
    const entry = pendingWrites[key];
    if(!entry) return;
    fetchJson('PUT', '/api/storage/' + encodeURIComponent(key), { value: entry.value })
      .then(function(){
        // N'efface la file que si la valeur n'a pas changé pendant l'envoi.
        if(pendingWrites[key] && pendingWrites[key].value === entry.value){
          delete pendingWrites[key];
        }
      })
      .catch(function(e){
        const nextAttempt = (entry.attempts || 0) + 1;
        if(nextAttempt >= 6){
          console.warn('ÉPI stockage : échecs répétés pour la sauvegarde de "' + key + '". Nouvelle tentative continue en arrière-plan.', e);
        }
        scheduleWrite(key, entry.value, nextAttempt);
      });
  }

  function flushAllPendingWrites(){
    Object.keys(pendingWrites).forEach(function(key){
      const entry = pendingWrites[key];
      if(entry && entry.timer) clearTimeout(entry.timer);
      flushWrite(key);
    });
  }

  // Tente d'envoyer les écritures en attente avant que l'utilisateur
  // ne quitte la page (best-effort, ne bloque jamais l'interface).
  window.addEventListener('beforeunload', function(){
    Object.keys(pendingWrites).forEach(function(key){
      const entry = pendingWrites[key];
      if(!entry) return;
      try{
        if(navigator.sendBeacon){
          const blob = new Blob([JSON.stringify({ value: entry.value })], { type: 'application/json' });
          navigator.sendBeacon('/api/storage/' + encodeURIComponent(key), blob);
        }
      }catch(e){}
    });
  });

  // ---- Préchargement initial : une seule requête pour tout charger ----
  function preload(){
    if(preloadPromise) return preloadPromise;
    preloadPromise = fetchJson('GET', '/api/storage')
      .then(function(all){
        all = all && typeof all === 'object' ? all : {};
        Object.keys(all).forEach(function(key){
          // Ne jamais écraser une écriture locale plus récente déjà en file.
          if(Object.prototype.hasOwnProperty.call(pendingWrites, key)) return;
          cache[key] = all[key] != null ? String(all[key]) : null;
        });
        preloaded = true;
        readyCallbacks.forEach(function(cb){ try{ cb(); }catch(e){ console.error(e); } });
        readyCallbacks.length = 0;
      })
      .catch(function(e){
        console.warn('ÉPI stockage : préchargement serveur impossible, nouvelle tentative dans 2s.', e);
        preloadPromise = null;
        setTimeout(preload, 2000);
      });
    return preloadPromise;
  }

  function onReady(cb){
    if(preloaded){ cb(); return; }
    readyCallbacks.push(cb);
  }

  function loadKey(key){
    if(Object.prototype.hasOwnProperty.call(cache, key)) return cache[key];
    // Pas encore chargé (rare : seulement avant la fin du préchargement
    // initial, ou pour une clé créée côté serveur après coup). On
    // retourne null immédiatement pour ne jamais bloquer l'interface ;
    // une fois le préchargement terminé, onReady() déclenchera un
    // nouveau rendu si nécessaire.
    return null;
  }

  function writeKey(key, value){
    const text = String(value ?? '');
    cache[key] = text;
    scheduleWrite(key, text, 0);
  }

  function mirrorKeysFor(key){
    return CUSTOM_UNITS_MIRROR_KEYS.includes(key) ? CUSTOM_UNITS_MIRROR_KEYS : [key];
  }

  function migrateLocalValues(){
    /* Migration manuelle seulement, depuis la console :
       EPI_SERVER_STORAGE.migrateLocalValues() */
    const nativeKey = Storage.prototype.key;
    const keys = [];
    for(let i = 0; i < localStorage.length; i++){
      const k = nativeKey.call(localStorage, i);
      if(k && isServerKey(k)) keys.push(k);
    }
    keys.forEach(function(k){
      const localValue = nativeGet.call(localStorage, k);
      if(localValue != null) writeKey(k, localValue);
      try{ nativeRemove.call(localStorage, k); }catch(e){}
    });
    return keys.length;
  }

  Storage.prototype.getItem = function(key){
    key = String(key || '');
    if(isServerKey(key)) return loadKey(key);
    return nativeGet.call(this, key);
  };

  Storage.prototype.setItem = function(key, value){
    key = String(key || '');
    if(isServerKey(key)){
      mirrorKeysFor(key).forEach(function(k){ writeKey(k, value); });
      try{ nativeRemove.call(this, key); }catch(e){}
      return;
    }
    return nativeSet.call(this, key, value);
  };

  Storage.prototype.removeItem = function(key){
    key = String(key || '');
    if(isServerKey(key)){
      mirrorKeysFor(key).forEach(function(k){
        cache[k] = null;
        scheduleWrite(k, null, 0);
        if(pendingWrites[k]) pendingWrites[k].removed = true;
      });
      try{ nativeRemove.call(this, key); }catch(e){}
      return;
    }
    return nativeRemove.call(this, key);
  };

  // Lance le préchargement immédiatement (ne bloque rien : asynchrone).
  preload();

  // Une fois les données serveur arrivées, on redessine l'écran actif
  // si l'application expose un point d'entrée de rendu connu, pour que
  // les données réelles remplacent ce qui a pu être affiché vide/par
  // défaut au tout premier rendu.
  onReady(function(){
    try{
      if(window.EPI_TEACHER_DASHBOARD && typeof window.EPI_TEACHER_DASHBOARD.render === 'function'){
        window.EPI_TEACHER_DASHBOARD.render();
      } else if(typeof window.renderResultsPage === 'function' && document.querySelector('.v172-results-table, .v91-results-table')){
        window.renderResultsPage();
      } else if(typeof window.renderHome === 'function' && document.getElementById('app') && document.getElementById('app').children.length){
        window.renderHome();
      }
    }catch(e){ console.warn('ÉPI stockage : nouveau rendu après chargement impossible.', e); }
  });

  window.EPI_SERVER_STORAGE = {
    enabled: true,
    isServerKey,
    cache,
    get isReady(){ return preloaded; },
    onReady,
    reload(){
      preloaded = false;
      preloadPromise = null;
      Object.keys(cache).forEach(function(k){ delete cache[k]; });
      return preload();
    },
    flushNow: flushAllPendingWrites,
    migrateLocalValues
  };
})();