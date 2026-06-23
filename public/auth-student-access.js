/* =========================================================
   ÉPI v221 — accès authentification robuste
   - Élève : accès seulement si l'utilisateur est ajouté par le professeur.
   - Professeur : accès uniquement par vérification serveur /api/teacher-auth.
   - Les boutons de connexion restent de vrais boutons submit.
========================================================= */
(function(){
  'use strict';

  const UNLOCK_KEY = 'epi_v212_teacher_unlocked';
  const TEACHER_USERS_KEY = 'epi_teacher_added_users';

  function q(sel, root){ return (root || document).querySelector(sel); }
  function msg(el, text, ok){
    if(!el) return;
    el.textContent = text;
    el.className = ok ? 'v121-teacher-msg success-msg' : 'v121-teacher-msg error-msg';
  }
  function normalizeName(value){
    return String(value || '')
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^A-Za-z0-9]+/g, ' ')
      .trim()
      .toUpperCase()
      .replace(/\s+/g, ' ');
  }
  function teacherUsers(){
    try{
      const rows = JSON.parse(localStorage.getItem(TEACHER_USERS_KEY) || '[]');
      return Array.isArray(rows) ? rows.filter(u => u && (u.nom || u.prenom)) : [];
    }catch(e){ return []; }
  }
  function isTeacherAddedUser(nom, prenom){
    const direct = normalizeName(`${nom || ''} ${prenom || ''}`);
    const reverse = normalizeName(`${prenom || ''} ${nom || ''}`);
    if(!direct || !reverse) return false;
    return teacherUsers().some(function(user){
      const a = normalizeName(`${user.nom || ''} ${user.prenom || ''}`);
      const b = normalizeName(`${user.prenom || ''} ${user.nom || ''}`);
      return a === direct || a === reverse || b === direct || b === reverse;
    });
  }
  function studentError(text){
    const err = q('#loginError') || q('#studentHomeMsg');
    if(err){
      err.textContent = text;
      err.className = 'v121-message error-msg';
    }else{
      alert(text);
    }
  }

  function fixButtonTypes(){
    const loginBtn = q('#loginForm button');
    if(loginBtn) loginBtn.type = 'submit';

    const teacherBtn = q('#teacherAuthForm button');
    if(teacherBtn) teacherBtn.type = 'submit';

    const homeStudentBtn = q('#homeStudentForm button');
    if(homeStudentBtn) homeStudentBtn.type = 'submit';

    const homeTeacherBtn = q('#teacherHomeAccessForm button');
    if(homeTeacherBtn) homeTeacherBtn.type = 'submit';
  }

  function openStudentSpace(nom, prenom){
    nom = String(nom || '').trim();
    prenom = String(prenom || '').trim();

    if(!nom || !prenom){
      studentError('Ressaisis bien votre nom et prénom.');
      return false;
    }

    if(!isTeacherAddedUser(nom, prenom)){
      studentError('Ressaisis bien votre nom et prénom.');
      return false;
    }

    try{
      if(typeof setStudent === 'function') setStudent({nom, prenom, fullName: `${nom} ${prenom}`});
      if(typeof saveStudentToLocalDb === 'function' && typeof getStudent === 'function') saveStudentToLocalDb(getStudent());
      if(typeof state !== 'undefined' && state) state.page = 'units';
      if(typeof render === 'function') render();
      else if(typeof renderHome === 'function') renderHome();
      return true;
    }catch(e){
      const err = q('#loginError') || q('#studentHomeMsg');
      if(err){
        err.textContent = 'Erreur pendant l’ouverture de l’espace élève.';
        err.className = 'v121-message error-msg';
      }
      return false;
    }
  }

  async function verifyTeacherPassword(password){
    const res = await fetch('/api/teacher-auth', {
      method: 'POST',
      headers: {'Content-Type':'application/json'},
      body: JSON.stringify({password: String(password || '')})
    });
    let data = null;
    try{ data = await res.json(); }catch(e){}
    return !!(res.ok && data && data.ok);
  }

  async function openTeacherSpace(password, messageBox){
    password = String(password || '').trim();

    if(!password){
      msg(messageBox, 'Saisis le mot de passe professeur.', false);
      return false;
    }

    msg(messageBox, 'Vérification du mot de passe...', true);

    try{
      const ok = await verifyTeacherPassword(password);
      if(!ok){
        try{ sessionStorage.removeItem(UNLOCK_KEY); }catch(e){}
        msg(messageBox, 'Mot de passe incorrect.', false);
        return false;
      }

      try{ sessionStorage.setItem(UNLOCK_KEY, '1'); }catch(e){}
      msg(messageBox, 'Accès professeur validé.', true);

      setTimeout(function(){
        if(typeof renderResultsPage === 'function') renderResultsPage();
      }, 80);

      return true;
    }catch(e){
      try{ sessionStorage.removeItem(UNLOCK_KEY); }catch(err){}
      msg(messageBox, 'Erreur serveur. Lance le projet avec : node server.js', false);
      return false;
    }
  }

  function handleStudentForm(form){
    const nom = (q('input[name="nom"]', form)?.value || '').trim();
    const prenom = (q('input[name="prenom"]', form)?.value || '').trim();

    if(nom || prenom) return openStudentSpace(nom, prenom);

    const selectedFullName = (q('[name="studentFullName"]', form)?.value || '').trim();
    if(selectedFullName && typeof splitStudentFullName === 'function'){
      const parsed = splitStudentFullName(selectedFullName);
      return openStudentSpace(parsed.nom || '', parsed.prenom || '');
    }

    return openStudentSpace(nom, prenom);
  }

  function handleTeacherForm(form){
    const input = q('#teacherPasswordInput', form) || q('input[name="password"]', form);
    const box = q('#teacherAuthMsg', form) || q('#teacherHomeMsg', form) || q('.home-form-msg-v47', form);
    return openTeacherSpace(input ? input.value : '', box);
  }

  function installAuthHandlers(){
    fixButtonTypes();

    if(window.__EPI_V221_AUTH_ROBUST__) return;
    window.__EPI_V221_AUTH_ROBUST__ = true;

    document.addEventListener('submit', function(e){
      const form = e.target;

      if(form && form.id === 'loginForm'){
        e.preventDefault();
        e.stopPropagation();
        if(e.stopImmediatePropagation) e.stopImmediatePropagation();
        handleStudentForm(form);
        return;
      }

      if(form && form.id === 'homeStudentForm'){
        e.preventDefault();
        e.stopPropagation();
        if(e.stopImmediatePropagation) e.stopImmediatePropagation();
        handleStudentForm(form);
        return;
      }

      if(form && (form.id === 'teacherAuthForm' || form.id === 'teacherHomeAccessForm')){
        e.preventDefault();
        e.stopPropagation();
        if(e.stopImmediatePropagation) e.stopImmediatePropagation();
        handleTeacherForm(form);
        return;
      }
    }, true);

    document.addEventListener('click', function(e){
      const teacherBtn = e.target.closest && e.target.closest('#teacherAuthForm button, #teacherHomeAccessForm button');
      if(teacherBtn){
        e.preventDefault();
        e.stopPropagation();
        if(e.stopImmediatePropagation) e.stopImmediatePropagation();
        const form = teacherBtn.closest('form');
        if(form) handleTeacherForm(form);
        return;
      }

      const studentBtn = e.target.closest && e.target.closest('#loginForm button, #homeStudentForm button');
      if(studentBtn){
        e.preventDefault();
        e.stopPropagation();
        if(e.stopImmediatePropagation) e.stopImmediatePropagation();
        const form = studentBtn.closest('form');
        if(form) handleStudentForm(form);
        return;
      }
    }, true);

    try{
      const oldOpenTeacherArea = typeof openTeacherArea === 'function' ? openTeacherArea : null;
      openTeacherArea = function(){
        try{
          if(sessionStorage.getItem(UNLOCK_KEY) === '1'){
            if(typeof renderResultsPage === 'function') renderResultsPage();
            return;
          }
        }catch(e){}

        if(typeof renderLogin === 'function'){
          renderLogin();
          setTimeout(function(){
            const input = q('#teacherPasswordInput') || q('#teacherHomeAccessForm input[name="password"]');
            if(input) input.focus();
            fixButtonTypes();
          }, 50);
          return;
        }

        if(oldOpenTeacherArea) oldOpenTeacherArea();
      };
    }catch(e){}
  }

  function patchRenderLogin(){
    if(window.__EPI_V221_RENDER_LOGIN_PATCHED__) return;
    window.__EPI_V221_RENDER_LOGIN_PATCHED__ = true;

    try{
      const oldRenderLogin = typeof renderLogin === 'function' ? renderLogin : null;
      if(oldRenderLogin){
        renderLogin = function(){
          oldRenderLogin.apply(this, arguments);
          setTimeout(installAuthHandlers, 30);
        };
      }
    }catch(e){}
  }

  function start(){
    patchRenderLogin();
    installAuthHandlers();
    try{
      new MutationObserver(function(){ fixButtonTypes(); }).observe(document.body, {childList:true, subtree:true});
    }catch(e){}
    setTimeout(fixButtonTypes, 200);
    setTimeout(fixButtonTypes, 800);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();

  window.EPI_V221_AUTH = {openStudentSpace, openTeacherSpace, fixButtonTypes};
})();
