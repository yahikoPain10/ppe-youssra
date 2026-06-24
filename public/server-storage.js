/* =========================================================
   ÉPI — Pont de stockage navigateur → serveur Node.js
   Version v210 : préchargement groupé au démarrage +
   écriture asynchrone + cache permanent (jamais d'allers-
   retours réseau répétés pour la même clé).
========================================================= */
(function(){
  'use strict';

  /* ----------------------------------------------------------
     Clés gérées côté serveur (Drive)
     Toutes les autres restent dans localStorage du navigateur.
  ---------------------------------------------------------- */
  const SERVER_KEY_EXACT = new Set([
    'epi_v175_custom_units',
    'epi_v183_custom_units_visible',
    'epi_v181_custom_units_visible',
    'epi_v191_deleted_units',
    'edu_libre_students_db_v41',
    'edu_libre_results_db_v41',
    'epi_teacher_added_users',
    'epi_integration_submissions'
  ]);

  // Keys that hold structural data (unit stubs, deleted list) must NEVER be
  // debounced — a rapid sequence of writes must all reach the server in order,
  // not collapse into the last one (which could be an empty array overwriting
  // a just-created unit).
  const IMMEDIATE_WRITE_KEYS = new Set([
    'epi_v175_custom_units',
    'epi_v183_custom_units_visible',
    'epi_v181_custom_units_visible',
    'epi_v191_deleted_units'
  ]);
  const SERVER_KEY_PREFIXES = [
    'epi_v170_unit_content_',
    'epi_v169_teacher_questions_'
  ];
  function isServerKey(key){
    key = String(key || '');
    return SERVER_KEY_EXACT.has(key) ||
           SERVER_KEY_PREFIXES.some(p => key.startsWith(p));
  }

  /* ----------------------------------------------------------
     Cache en mémoire — source de vérité pour tous les reads.
     null  = clé inexistante sur le serveur (ne pas re-fetcher)
     false = clé pas encore chargée (premier accès lazy)
     string = valeur connue
  ---------------------------------------------------------- */
  const cache = Object.create(null);   // key → string | null
  let preloadDone = false;
  let preloadPromise = null;

  /* ----------------------------------------------------------
     File d'attente pour les écritures asynchrones.
     On écrit dans le cache immédiatement et on envoie en fond.
  ---------------------------------------------------------- */
  const writeQueue = Object.create(null); // key → {value, timer}
  const WRITE_DEBOUNCE_MS = 400;

  /* ----------------------------------------------------------
     HTTP helpers
  ---------------------------------------------------------- */
  function fetchJson(method, url, body){
    return fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json;charset=UTF-8' },
      body: body !== undefined ? JSON.stringify(body) : undefined
    }).then(r => r.ok ? r.json() : Promise.reject(new Error('HTTP ' + r.status)));
  }

  /* ----------------------------------------------------------
     Préchargement groupé : un seul GET /api/storage au démarrage
     Remplit le cache pour TOUTES les clés connues d'un coup.
  ---------------------------------------------------------- */
  function preloadAll(){
    if(preloadPromise) return preloadPromise;
    preloadPromise = fetchJson('GET', '/api/storage').then(store => {
      if(store && typeof store === 'object'){
        // Marquer toutes les clés connues comme chargées
        SERVER_KEY_EXACT.forEach(k => {
          cache[k] = Object.prototype.hasOwnProperty.call(store, k)
            ? String(store[k] ?? '')
            : null;
        });
        // Charger aussi les clés préfixées présentes dans le store
        Object.keys(store).forEach(k => {
          if(SERVER_KEY_PREFIXES.some(p => k.startsWith(p))){
            cache[k] = String(store[k] ?? '');
          }
        });
      }
      preloadDone = true;
    }).catch(err => {
      console.warn('ÉPI: préchargement storage échoué', err);
      preloadDone = true; // continuer en mode dégradé
    });
    return preloadPromise;
  }

  /* ----------------------------------------------------------
     Lecture synchrone depuis le cache (jamais de XHR bloquant)
     Si la clé n'est pas encore dans le cache : retourne null
     et déclenche un chargement asynchrone pour la prochaine fois.
  ---------------------------------------------------------- */
  function readFromCache(key){
    if(Object.prototype.hasOwnProperty.call(cache, key)){
      return cache[key]; // null = absent, string = valeur
    }
    // Clé pas encore vue (préfixe dynamique) → charger en fond
    cache[key] = null; // optimisme : on suppose absent jusqu'à réponse
    fetchJson('GET', '/api/storage/' + encodeURIComponent(key))
      .then(data => {
        cache[key] = (data && data.value != null) ? String(data.value) : null;
      })
      .catch(() => { /* reste null */ });
    return null;
  }

  /* ----------------------------------------------------------
     Écriture asynchrone avec debounce.
     Le cache est mis à jour immédiatement ; l'appel réseau
     est envoyé après WRITE_DEBOUNCE_MS ms sans nouvelle écriture
     sur la même clé (utile pour les sauvegardes fréquentes).
  ---------------------------------------------------------- */
  function scheduleWrite(key, value){
    cache[key] = value;

    if(IMMEDIATE_WRITE_KEYS.has(key)){
      // Structural keys: cancel any pending debounce and write immediately.
      // This prevents a rapid persist([]) from overwriting a just-created unit stub.
      if(writeQueue[key]){ clearTimeout(writeQueue[key].timer); delete writeQueue[key]; }
      fetchJson('PUT', '/api/storage/' + encodeURIComponent(key), { value })
        .catch(err => console.warn('ÉPI: écriture immédiate échouée pour', key, err));
      return;
    }

    if(writeQueue[key]) clearTimeout(writeQueue[key].timer);
    writeQueue[key] = {
      value,
      timer: setTimeout(() => {
        const val = writeQueue[key] ? writeQueue[key].value : value;
        delete writeQueue[key];
        fetchJson('PUT', '/api/storage/' + encodeURIComponent(key), { value: val })
          .catch(err => console.warn('ÉPI: écriture échouée pour', key, err));
      }, WRITE_DEBOUNCE_MS)
    };
  }

  function scheduleDelete(key){
    cache[key] = null; // marquer comme absent dans le cache
    if(writeQueue[key]){ clearTimeout(writeQueue[key].timer); delete writeQueue[key]; }
    fetchJson('DELETE', '/api/storage/' + encodeURIComponent(key))
      .catch(err => console.warn('ÉPI: suppression échouée pour', key, err));
  }

  /* ----------------------------------------------------------
     Interception localStorage
  ---------------------------------------------------------- */
  const nativeGet    = Storage.prototype.getItem;
  const nativeSet    = Storage.prototype.setItem;
  const nativeRemove = Storage.prototype.removeItem;

  Storage.prototype.getItem = function(key){
    key = String(key || '');
    if(isServerKey(key)) return readFromCache(key);
    return nativeGet.call(this, key);
  };

  Storage.prototype.setItem = function(key, value){
    key = String(key || '');
    if(isServerKey(key)){
      const text = String(value ?? '');
      scheduleWrite(key, text);
      // Nettoyer d'éventuels résidus dans localStorage
      try{ nativeRemove.call(this, key); }catch(e){}
      return;
    }
    return nativeSet.call(this, key, value);
  };

  Storage.prototype.removeItem = function(key){
    key = String(key || '');
    if(isServerKey(key)){
      scheduleDelete(key);
      try{ nativeRemove.call(this, key); }catch(e){}
      return;
    }
    return nativeRemove.call(this, key);
  };

  /* ----------------------------------------------------------
     API publique
  ---------------------------------------------------------- */
  window.EPI_SERVER_STORAGE = {
    enabled: true,
    isServerKey,
    cache,
    /** Lance le préchargement manuellement (appelé automatiquement ci-dessous) */
    preload: preloadAll,
    /** Vide le cache et recharge tout depuis le serveur */
    reload(){
      Object.keys(cache).forEach(k => delete cache[k]);
      preloadPromise = null;
      preloadDone = false;
      return preloadAll();
    },
    /** Migration manuelle depuis l'ancien localStorage (console: EPI_SERVER_STORAGE.migrateLocalValues()) */
    migrateLocalValues(){
      const nativeKey = Storage.prototype.key;
      const keys = [];
      for(let i = 0; i < localStorage.length; i++){
        const k = nativeKey.call(localStorage, i);
        if(k && isServerKey(k)) keys.push(k);
      }
      keys.forEach(k => {
        const localValue = nativeGet.call(localStorage, k);
        if(localValue != null){
          scheduleWrite(k, String(localValue));
        }
        try{ nativeRemove.call(localStorage, k); }catch(e){}
      });
      return keys.length;
    }
  };

  /* ----------------------------------------------------------
     Démarrer le préchargement immédiatement (avant app.js)
  ---------------------------------------------------------- */
  preloadAll();

})();