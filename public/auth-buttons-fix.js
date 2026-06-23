/* =========================================================
   ÉPI v220 — correctif final des boutons d'authentification
   Cause corrigée : la version précédente transformait par erreur les
   boutons submit de connexion en boutons ordinaires.
========================================================= */
(function(){
  'use strict';
  const UNLOCK_KEY = 'epi_v212_teacher_unlocked';
  function q(sel, root){ return (root || document).querySelector(sel); }
  function setSubmitButtons(){
    const studentBtn = q('#loginForm button, #loginForm input[type="submit"]');
    if(studentBtn && studentBtn.tagName === 'BUTTON') studentBtn.type = 'submit';
    const teacherBtn = q('#teacherAuthForm button, #teacherAuthForm input[type="submit"]');
    if(teacherBtn && teacherBtn.tagName === 'BUTTON') teacherBtn.type = 'submit';
  }
  function msg(el, text, ok){
    if(!el) return;
    el.textContent = text;
    el.className = ok ? 'v121-teacher-msg success-msg' : 'v121-teacher-msg error-msg';
  }
  async function verifyTeacherPassword(password){
    const res = await fetch('/api/teacher-auth', {
      method:'POST',
      headers:{'Content-Type':'application/json'},
      body:JSON.stringify({password:String(password || '')})
    });
    let data = null;
    try{ data = await res.json(); }catch(e){}
    return !!(res.ok && data && data.ok);
  }
  async function submitTeacher(form){
    const input = q('#teacherPasswordInput', form) || q('input[name="password"]', form);
    const box = q('#teacherAuthMsg', form) || q('#teacherHomeMsg', form) || document.getElementById('teacherAuthMsg');
    const password = (input && input.value || '').trim();
    if(!password){ msg(box, 'Saisis le mot de passe professeur.', false); return; }
    msg(box, 'Vérification du mot de passe...', true);
    try{
      const ok = await verifyTeacherPassword(password);
      if(!ok){ sessionStorage.removeItem(UNLOCK_KEY); msg(box, 'Mot de passe incorrect.', false); return; }
      sessionStorage.setItem(UNLOCK_KEY, '1');
      msg(box, 'Accès professeur validé.', true);
      setTimeout(() => { if(typeof renderResultsPage === 'function') renderResultsPage(); }, 120);
    }catch(e){
      sessionStorage.removeItem(UNLOCK_KEY);
      msg(box, 'Erreur serveur. Lance le projet avec node server.js.', false);
    }
  }
  function submitStudent(form){
    // Déclenche la logique existante de l'application sans la dupliquer.
    if(form && typeof form.requestSubmit === 'function') form.requestSubmit();
    else if(form) form.dispatchEvent(new Event('submit', {bubbles:true, cancelable:true}));
  }
  function install(){
    setSubmitButtons();
    if(window.__EPI_V220_AUTH_INSTALLED__) return;
    window.__EPI_V220_AUTH_INSTALLED__ = true;
    document.addEventListener('click', function(e){
      const loginForm = e.target.closest && e.target.closest('#loginForm');
      if(loginForm && e.target.closest('button')){
        const btn = e.target.closest('button');
        btn.type = 'submit';
        return;
      }
      const teacherForm = e.target.closest && e.target.closest('#teacherAuthForm');
      if(teacherForm && e.target.closest('button')){
        e.preventDefault(); e.stopPropagation(); if(e.stopImmediatePropagation) e.stopImmediatePropagation();
        submitTeacher(teacherForm);
        return;
      }
    }, true);
    document.addEventListener('submit', function(e){
      const teacherForm = e.target && e.target.closest && e.target.closest('#teacherAuthForm');
      if(!teacherForm) return;
      e.preventDefault(); e.stopPropagation(); if(e.stopImmediatePropagation) e.stopImmediatePropagation();
      submitTeacher(teacherForm);
    }, true);
  }
  function start(){
    install();
    try{ new MutationObserver(setSubmitButtons).observe(document.body, {childList:true, subtree:true}); }catch(e){}
    setInterval(setSubmitButtons, 1000);
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
