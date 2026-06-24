/* =========================================================
   ÉPI — Pont de stockage navigateur → serveur Node.js
   Version v203 : stockage serveur paresseux pour éviter de charger
   tout storage.json et les anciennes données lourdes au démarrage.
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
  function isServerKey(key){
    key = String(key || '');
    return SERVER_KEY_EXACT.has(key) || SERVER_KEY_PREFIXES.some(prefix => key.startsWith(prefix));
  }
  const nativeGet = Storage.prototype.getItem;
  const nativeSet = Storage.prototype.setItem;
  const nativeRemove = Storage.prototype.removeItem;
  const cache = Object.create(null);

  function syncRequest(method, url, payload){
    const xhr = new XMLHttpRequest();
    xhr.open(method, url, false);
    xhr.setRequestHeader('Content-Type', 'application/json;charset=UTF-8');
    xhr.send(payload === undefined ? null : JSON.stringify(payload));
    if(xhr.status >= 200 && xhr.status < 300){
      try{ return JSON.parse(xhr.responseText || '{}'); }catch(e){ return {}; }
    }
    throw new Error('HTTP ' + xhr.status);
  }
  function loadKey(key){
    key = String(key || '');
    if(Object.prototype.hasOwnProperty.call(cache, key)) return cache[key];
    try{
      const data = syncRequest('GET', '/api/storage/' + encodeURIComponent(key));
      const value = data && data.value != null ? String(data.value) : null;
      if(value != null) cache[key] = value;
      return value;
    }catch(e){
      console.warn('Serveur ÉPI inaccessible pour la clé', key, e);
      return null;
    }
  }
  function migrateLocalValues(){
    /* Migration manuelle seulement : évite le crash si l’ancien localStorage contient
       de très grands médias en base64. Pour l’exécuter depuis la console :
       EPI_SERVER_STORAGE.migrateLocalValues()
    */
    const nativeKey = Storage.prototype.key;
    const keys = [];
    for(let i=0; i<localStorage.length; i++){
      const k = nativeKey.call(localStorage, i);
      if(k && isServerKey(k)) keys.push(k);
    }
    keys.forEach(k => {
      const localValue = nativeGet.call(localStorage, k);
      if(localValue != null){
        cache[k] = String(localValue);
        try{ syncRequest('PUT', '/api/storage/' + encodeURIComponent(k), {value: cache[k]}); }catch(e){}
      }
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
      const text = String(value ?? '');
      syncRequest('PUT', '/api/storage/' + encodeURIComponent(key), {value:text});
      cache[key] = text;
      try{ nativeRemove.call(this, key); }catch(e){}
      return;
    }
    return nativeSet.call(this, key, value);
  };
  Storage.prototype.removeItem = function(key){
    key = String(key || '');
    if(isServerKey(key)){
      delete cache[key];
      try{ syncRequest('DELETE', '/api/storage/' + encodeURIComponent(key)); }catch(e){}
      try{ nativeRemove.call(this, key); }catch(e){}
      return;
    }
    return nativeRemove.call(this, key);
  };
  window.EPI_SERVER_STORAGE = {
    enabled: true,
    isServerKey,
    cache,
    reload(){ Object.keys(cache).forEach(k => delete cache[k]); },
    migrateLocalValues
  };
})();
