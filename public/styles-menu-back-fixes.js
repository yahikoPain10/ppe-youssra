/* =========================================================
   ÉPI v240 — final demandé
   - chaque style d’apprentissage s’affiche comme une page indépendante ;
   - barre de menu plus mince ;
   - bloc « À propos » de l’authentification légèrement vers la droite ;
   - bouton « Revenir au tableau de bord » dans Modifier unité.
========================================================= */
(function(){
  'use strict';

  const STYLE_ID = 'v240-final-style-menu-retour';

  function q(sel, root){ return (root || document).querySelector(sel); }
  function qa(sel, root){ return Array.from((root || document).querySelectorAll(sel)); }
  function safeHtml(v){
    if(typeof esc === 'function') return esc(v == null ? '' : v);
    return String(v == null ? '' : v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  }
  function st(){
    try{ return (typeof state !== 'undefined') ? state : window.state; }catch(e){ return window.state || {}; }
  }

  function injectCss(){
    if(document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
/* V240 — barre de menu vraiment mince */
.app-shell.v91-shell{padding-top:4px!important;}
header.topbar,
.topbar.v91-topbar,
.v91-topbar,
.v87-student-topbar,
.v144-topbar{
  min-height:42px!important;
  height:auto!important;
  padding:4px 14px!important;
  margin:4px auto 4px!important;
  border-radius:0 0 14px 14px!important;
  max-width:min(1080px, calc(100vw - 90px))!important;
  box-shadow:0 6px 14px rgba(15,23,42,.06)!important;
}
.topbar .brand,
.v91-topbar .brand{gap:7px!important;}
.topbar .brand h1,
.v91-topbar .brand h1{font-size:.98rem!important;line-height:1!important;margin:0!important;}
.topbar .brand p,
.v91-topbar .brand p{display:none!important;}
.logo,
.logo-badge,
.topbar .logo,
.v91-topbar .logo,
.v144-brand-logo{
  width:36px!important;
  height:36px!important;
  min-width:36px!important;
  border-radius:12px!important;
  font-size:16px!important;
}
.logo img,.topbar .logo img,.v91-topbar .logo img{max-width:28px!important;max-height:28px!important;}
.nav-actions{gap:6px!important;}
.nav-actions .btn,
.nav-actions .pill,
.topbar .btn.small,
.v91-topbar .btn.small{
  min-height:28px!important;
  padding:5px 9px!important;
  border-radius:11px!important;
  font-size:.76rem!important;
  line-height:1!important;
}

/* V240 — À propos dans l’authentification : même bordure, légèrement vers la droite */
.v91-entry-card .v91-about-only,
.v93-auth-card .v91-about-only,
.v91-entry-card .v103-about-only,
.v91-entry-card .v100-about-only{
  width:min(430px, 82%)!important;
  margin:12px 0 0 auto!important;
  transform:translateX(8px)!important;
  text-align:center!important;
  justify-content:center!important;
  align-items:center!important;
}
.v91-entry-card .v91-about-only *,
.v93-auth-card .v91-about-only *,
.v91-entry-card .v103-about-only *,
.v91-entry-card .v100-about-only *{text-align:center!important;}

/* V240 — Espace élève : une page claire par style, sans petit bloc compressé */
.v236-unit-page{
  width:min(960px, calc(100vw - 30px))!important;
  max-width:960px!important;
  margin:4px auto 22px!important;
}
.v236-unit-selector{
  position:relative!important;
  top:auto!important;
  max-width:540px!important;
  width:min(540px, calc(100vw - 42px))!important;
  margin:0 auto 8px!important;
  padding:4px 8px!important;
  border-radius:14px!important;
  background:#fff!important;
  box-shadow:0 4px 12px rgba(76,29,149,.06)!important;
}
.v236-select-wrap select{
  height:34px!important;
  min-height:34px!important;
  border-radius:12px!important;
  text-align:center!important;
  text-align-last:center!important;
  font-size:13.5px!important;
}
.v236-content-card,
.v236-unit-page .content-card{
  width:100%!important;
  max-width:920px!important;
  margin:0 auto!important;
  padding:9px!important;
  border-radius:17px!important;
  overflow:visible!important;
}
.v240-lesson-page{
  width:100%!important;
  display:grid!important;
  gap:8px!important;
}
.v240-lesson-head{
  display:flex!important;
  justify-content:space-between!important;
  align-items:center!important;
  gap:10px!important;
  padding:7px 10px!important;
  border:1px solid rgba(96,165,250,.22)!important;
  border-radius:14px!important;
  background:#fff!important;
}
.v240-lesson-head h2{margin:0!important;font-size:1.05rem!important;line-height:1.12!important;color:#111827!important;}
.v240-lesson-head p{margin:2px 0 0!important;font-size:.82rem!important;line-height:1.2!important;color:#475569!important;}
.v240-lesson-head .btn{min-height:27px!important;padding:4px 9px!important;font-size:.76rem!important;border-radius:999px!important;}
.v240-style-tabs{
  display:grid!important;
  grid-template-columns:repeat(3, minmax(0,1fr))!important;
  gap:6px!important;
}
.v240-style-tabs .tab{
  min-height:32px!important;
  padding:6px 8px!important;
  border-radius:12px!important;
  font-size:.82rem!important;
  line-height:1!important;
}
.v240-style-page{
  width:100%!important;
  min-height:calc(100vh - 150px)!important;
  max-height:none!important;
  overflow:visible!important;
  display:block!important;
}
.v240-style-page > .panel,
.v240-style-page .panel,
.v240-style-page .visual-panel,
.v240-style-page .audio-panel,
.v240-style-page .kine-panel,
.v240-style-page .audio-card,
.v240-style-page .logo-kine-games,
.v240-style-page .question,
.v240-style-page .game{
  min-height:auto!important;
  max-height:none!important;
  height:auto!important;
  overflow:visible!important;
  padding:14px!important;
  margin:0 0 10px!important;
  border-radius:18px!important;
}
.v240-style-page img,
.v240-style-page .media-card img,
.v240-style-page .v208-media-image{
  max-height:260px!important;
  object-fit:contain!important;
}
.v240-style-page p,
.v240-style-page li{font-size:.91rem!important;line-height:1.38!important;}
.v240-style-page h3{font-size:1.03rem!important;}
.v236-unit-page .official-box.compact,
.v236-unit-page .learning-path-note,
.v236-unit-page .objective-list,
.v236-unit-page .section-head{display:none!important;}

/* V240 — Modifier unité : bouton retour clair */
.v240-back-dashboard,
.v239-back-dashboard,
.v238-back-dashboard{
  border:1px solid rgba(124,58,237,.25)!important;
  background:#fff!important;
  color:#4c1d95!important;
  border-radius:999px!important;
  padding:7px 12px!important;
  font-weight:950!important;
  cursor:pointer!important;
  white-space:nowrap!important;
  box-shadow:none!important;
}
.v240-back-dashboard:hover,
.v239-back-dashboard:hover,
.v238-back-dashboard:hover{background:#f5f3ff!important;}
.v235-toolbar{grid-template-columns:auto 1fr minmax(260px,520px) auto auto!important;align-items:center!important;}
.v240-back-row{max-width:980px;width:100%;margin:0 auto 8px;display:flex;justify-content:flex-start;}

@media(max-width:820px){
  header.topbar,.topbar.v91-topbar,.v91-topbar{max-width:calc(100vw - 16px)!important;padding:4px 8px!important;}
  .v236-unit-page{width:min(100%, calc(100vw - 10px))!important;}
  .v240-style-tabs{grid-template-columns:1fr!important;}
  .v240-style-page{min-height:auto!important;}
  .v235-toolbar{grid-template-columns:1fr!important;}
  .v240-back-dashboard,.v239-back-dashboard,.v238-back-dashboard{width:100%!important;}
  .v91-entry-card .v91-about-only,.v93-auth-card .v91-about-only{width:100%!important;margin:12px auto 0!important;transform:none!important;}
}
`;
    document.head.appendChild(style);
  }

  function currentTab(){
    const s = st();
    return (s && s.tab) || 'visual';
  }
  function getPanel(lesson, tab){
    try{
      if(tab === 'audio' && typeof audioPanel === 'function') return audioPanel(lesson);
      if(tab === 'kine' && typeof kinePanel === 'function') return kinePanel(lesson);
      if(typeof visualPanel === 'function') return visualPanel(lesson);
    }catch(e){ console.warn('Erreur affichage style', e); }
    return '<section class="panel"><p>Contenu indisponible.</p></section>';
  }

  function installLessonPageOverride(){
    const make = function(unit, lesson){
      const tab = currentTab();
      lesson = lesson || {};
      const title = lesson.title || 'Sous-titre';
      const objective = lesson.objective || '';
      return `<section class="v240-lesson-page" data-v240-lesson-page>
        <div class="v240-lesson-head">
          <div>
            <h2>${safeHtml(title)}</h2>
            ${objective ? `<p><strong>Objectif :</strong> ${safeHtml(objective)}</p>` : ''}
          </div>
          <button class="btn secondary small" data-action="unit-intro">Retour unité</button>
        </div>
        <div class="tabs lesson-tabs-v129 v240-style-tabs" aria-label="Choisir une page de style">
          <button class="tab ${tab === 'visual' ? 'active' : ''}" data-tab="visual">1. Style visuel</button>
          <button class="tab ${tab === 'audio' ? 'active' : ''}" data-tab="audio">2. Style auditif</button>
          <button class="tab ${tab === 'kine' ? 'active' : ''}" data-tab="kine">3. Style kinesthésique</button>
        </div>
        <main class="v240-style-page" data-v240-style-page="${safeHtml(tab)}">
          ${getPanel(lesson, tab)}
        </main>
      </section>`;
    };
    try{ renderLesson = make; }catch(e){}
    window.renderLesson = make;
  }

  function dashboardBack(){
    try{
      const old = q('[data-v176-dashboard="home"]:not([data-v240-back-dashboard]):not([data-v239-back-dashboard]):not([data-v238-back-dashboard])');
      if(old){ old.click(); return; }
    }catch(e){}
    try{
      const page = q('.v176-teacher-page');
      const dash = q('.v176-dashboard');
      const modify = q('[data-v176-panel="modify"]');
      if(page){ page.classList.add('v211-dashboard-mode'); page.classList.remove('v211-work-mode'); }
      if(dash) dash.style.display = '';
      qa('.v176-panel').forEach(p => { if(p !== modify) p.style.display = ''; });
      if(modify) modify.style.display = 'none';
    }catch(e){ console.warn('Retour au tableau de bord impossible', e); }
  }

  function ensureBackButton(){
    const modifyPanel = q('[data-v176-panel="modify"]');
    if(!modifyPanel) return;
    const existing = q('[data-v240-back-dashboard], [data-v239-back-dashboard], [data-v238-back-dashboard]', modifyPanel);
    if(existing){
      existing.textContent = '← Revenir au tableau de bord';
      existing.classList.add('v240-back-dashboard');
      existing.setAttribute('data-v240-back-dashboard','1');
      return;
    }
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'v240-back-dashboard';
    btn.setAttribute('data-v240-back-dashboard','1');
    btn.textContent = '← Revenir au tableau de bord';
    const toolbar = q('.v235-toolbar, .v233-toolbar, .v172-actions', modifyPanel);
    if(toolbar){
      toolbar.insertBefore(btn, toolbar.firstElementChild || null);
    }else{
      const row = document.createElement('div');
      row.className = 'v240-back-row';
      row.appendChild(btn);
      const editor = q('[data-v235-editor], .v235-editor, .v172-card', modifyPanel) || modifyPanel;
      editor.insertBefore(row, editor.firstElementChild || null);
    }
  }

  function install(){
    injectCss();
    installLessonPageOverride();
    ensureBackButton();
    document.addEventListener('click', function(e){
      const back = e.target.closest && e.target.closest('[data-v240-back-dashboard], [data-v239-back-dashboard], [data-v238-back-dashboard]');
      if(back){ e.preventDefault(); e.stopPropagation(); dashboardBack(); return; }
      const tab = e.target.closest && e.target.closest('[data-tab]');
      if(tab){ setTimeout(function(){ const page = q('[data-v240-style-page], [data-v239-style-page]'); if(page) page.scrollIntoView({block:'start', behavior:'smooth'}); }, 80); }
    }, true);
    try{ new MutationObserver(function(){ ensureBackButton(); }).observe(document.documentElement, {childList:true, subtree:true}); }catch(e){}
    setTimeout(ensureBackButton, 250);
    setTimeout(ensureBackButton, 900);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
})();
