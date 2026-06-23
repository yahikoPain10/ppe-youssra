/* =========================================================
   ÉPI — Performance de chargement
   Objectif : lisser les anciens correctifs sans supprimer leurs fonctions.
========================================================= */
(function(){
  'use strict';

  document.documentElement.classList.add('epi-booting');

  const nativeSetInterval = window.setInterval.bind(window);
  const nativeSetTimeout = window.setTimeout.bind(window);
  const nativeClearTimeout = window.clearTimeout.bind(window);
  const nativeRAF = window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : function(fn){ return nativeSetTimeout(fn, 16); };

  window.requestIdleCallback = window.requestIdleCallback || function(cb){
    return nativeSetTimeout(function(){
      cb({didTimeout:false, timeRemaining:function(){ return 30; }});
    }, 1);
  };

  // Plusieurs anciens fichiers relancent des vérifications chaque seconde.
  // On garde ces vérifications, mais avec une cadence plus légère.
  window.setInterval = function(fn, delay){
    const args = Array.prototype.slice.call(arguments, 2);
    const d = Number(delay) || 0;
    const relaxed = d > 0 && d < 2500 ? 3500 : d;
    return nativeSetInterval(fn, relaxed, ...args);
  };

  // Les MutationObserver successifs peuvent déclencher des calculs trop souvent.
  // On regroupe les mutations dans une seule passe par frame.
  if(window.MutationObserver){
    const NativeMutationObserver = window.MutationObserver;
    window.MutationObserver = function(callback){
      let scheduled = false;
      let pending = [];
      let lastTimer = null;
      const observer = new NativeMutationObserver(function(mutations, obs){
        pending = pending.concat(Array.from(mutations || []));
        if(scheduled) return;
        scheduled = true;
        if(lastTimer) nativeClearTimeout(lastTimer);
        lastTimer = nativeSetTimeout(function(){
          nativeRAF(function(){
            scheduled = false;
            const batch = pending;
            pending = [];
            callback(batch, obs);
          });
        }, 24);
      });
      return observer;
    };
    window.MutationObserver.prototype = NativeMutationObserver.prototype;
  }

  function markReady(){
    document.documentElement.classList.remove('epi-booting');
    document.documentElement.classList.add('epi-ready');
    optimizeMedia(document);
    const loader = document.getElementById('epiLoadingScreen');
    if(loader){
      loader.classList.add('hide');
      nativeSetTimeout(function(){ if(loader && loader.parentNode) loader.parentNode.removeChild(loader); }, 360);
    }
  }

  function optimizeMedia(root){
    try{
      (root || document).querySelectorAll('img').forEach(function(img, index){
        if(!img.hasAttribute('loading')) img.setAttribute('loading', index < 2 ? 'eager' : 'lazy');
        img.setAttribute('decoding', 'async');
      });
      (root || document).querySelectorAll('video,audio').forEach(function(media){
        if(!media.hasAttribute('preload')) media.setAttribute('preload', 'metadata');
      });
    }catch(e){}
  }

  function waitForApp(){
    const app = document.getElementById('app');
    if(app && app.children.length){
      nativeSetTimeout(markReady, 120);
      return;
    }
    nativeSetTimeout(waitForApp, 80);
  }

  if(document.readyState === 'loading'){
    document.addEventListener('DOMContentLoaded', waitForApp, {once:true});
  }else{
    waitForApp();
  }

  try{
    new MutationObserver(function(mutations){
      window.requestIdleCallback(function(){
        mutations.forEach(function(mutation){
          mutation.addedNodes && Array.prototype.forEach.call(mutation.addedNodes, function(node){
            if(node && node.nodeType === 1) optimizeMedia(node);
          });
        });
      });
    }).observe(document.documentElement, {childList:true, subtree:true});
  }catch(e){}

  window.addEventListener('load', function(){
    nativeSetTimeout(markReady, 700);
  }, {once:true});
})();
