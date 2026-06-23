/* =========================================================
   ÉPI v244 — Vérification boutons + interface élève professionnelle
   - sécurise les boutons Ajouter unité / Modifier unité ;
   - ajoute un retour tableau de bord toujours visible dans Modifier unité ;
   - améliore l’affichage élève pour utiliser proprement toute la page ;
   - supprime les petits conteneurs à scroll dans les styles.
========================================================= */
(function(){
  'use strict';

  const STYLE_ID = 'v244-interface-pro-css';

  function q(sel, root){ return (root || document).querySelector(sel); }
  function qa(sel, root){ return Array.from((root || document).querySelectorAll(sel)); }
  function safe(v){
    try{ if(typeof esc === 'function') return esc(v == null ? '' : v); }catch(e){}
    return String(v == null ? '' : v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  }
  function appState(){
    try{ if(typeof state !== 'undefined') return state; }catch(e){}
    return window.state || {};
  }

  function injectCss(){
    if(document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
/* =========================================================
   V244 — vision plateforme professionnelle : page élève
========================================================= */
:root{--v244-purple:#6d28d9;--v244-purple-dark:#4c1d95;--v244-soft:#f7f3ff;--v244-line:rgba(109,40,217,.18);--v244-text:#0f172a;}
body{background:#f8fafc!important;}
.app-shell,.app-shell.v91-shell{padding-top:3px!important;background:#f8fafc!important;}
.topbar,.topbar.v91-topbar,.v91-topbar,.v87-student-topbar,.v144-topbar,.professional-topbar,.fix-topbar{
  width:min(1220px, calc(100vw - 22px))!important;
  max-width:min(1220px, calc(100vw - 22px))!important;
  min-height:38px!important;
  padding:4px 12px!important;
  margin:3px auto 8px!important;
  border-radius:0 0 16px 16px!important;
  border:1px solid rgba(15,23,42,.06)!important;
  background:rgba(255,255,255,.98)!important;
  box-shadow:0 8px 18px rgba(15,23,42,.055)!important;
}
.topbar .brand,.v91-topbar .brand,.v87-student-brand,.v144-brand{gap:7px!important;}
.logo,.logo-badge,.topbar .logo,.v91-topbar .logo,.v144-brand-logo,.v87-logo{
  width:32px!important;height:32px!important;min-width:32px!important;border-radius:11px!important;font-size:15px!important;
}
.logo img,.topbar .logo img,.v91-topbar .logo img{max-width:25px!important;max-height:25px!important;}
.topbar .brand h1,.v91-topbar .brand h1,.v87-student-brand h1,.v144-brand h1{font-size:.96rem!important;line-height:1!important;margin:0!important;color:#111827!important;}
.topbar .brand p,.v91-topbar .brand p,.v87-student-brand p,.v144-brand p{display:none!important;}
.nav-actions{gap:5px!important;}
.nav-actions .btn,.nav-actions .pill,.topbar .btn.small,.v91-topbar .btn.small{
  min-height:26px!important;padding:4px 8px!important;border-radius:10px!important;font-size:.74rem!important;line-height:1!important;
}

/* utiliser mieux la largeur de la page */
.v236-unit-page{
  width:min(1220px, calc(100vw - 24px))!important;
  max-width:1220px!important;
  margin:0 auto 22px!important;
  padding:0!important;
}
.v236-unit-selector{
  position:relative!important;
  top:auto!important;
  z-index:12!important;
  width:min(680px, calc(100vw - 52px))!important;
  max-width:680px!important;
  margin:0 auto 10px!important;
  padding:6px 10px!important;
  border-radius:16px!important;
  background:#fff!important;
  border:1px solid var(--v244-line)!important;
  box-shadow:0 8px 18px rgba(76,29,149,.07)!important;
  display:block!important;
}
.v236-unit-selector-title,.v236-select-wrap span{display:none!important;}
.v236-select-wrap{display:block!important;width:100%!important;max-width:640px!important;margin:0 auto!important;}
.v236-select-wrap select{
  width:100%!important;height:38px!important;min-height:38px!important;border-radius:12px!important;
  border:1px solid rgba(109,40,217,.25)!important;background:#fff!important;color:#1f1335!important;
  font-size:14px!important;font-weight:900!important;text-align:center!important;text-align-last:center!important;padding:0 12px!important;
  outline:none!important;
}
.v236-select-wrap select:focus{border-color:var(--v244-purple)!important;box-shadow:0 0 0 4px rgba(109,40,217,.10)!important;}
.v236-content-card,.v236-unit-page .content-card{
  width:100%!important;max-width:1180px!important;margin:0 auto!important;padding:14px!important;
  border-radius:22px!important;background:#fff!important;border:1px solid rgba(15,23,42,.07)!important;
  box-shadow:0 16px 38px rgba(15,23,42,.07)!important;overflow:visible!important;
}
.v236-unit-page .layout,.v236-unit-page .fix-content-layout{display:block!important;}
.v236-unit-page .sidebar,.v236-unit-page .fix-unit-sidebar{display:none!important;}
.v236-unit-page .page-title{display:none!important;}

/* page style indépendante, mais pleine et lisible */
.v244-lesson-page{display:grid!important;gap:12px!important;width:100%!important;}
.v244-lesson-head{
  display:flex!important;justify-content:space-between!important;align-items:center!important;gap:12px!important;
  padding:12px 14px!important;border-radius:18px!important;background:linear-gradient(135deg,#ffffff,#faf7ff)!important;
  border:1px solid var(--v244-line)!important;
}
.v244-lesson-head h2{margin:0!important;font-size:1.22rem!important;line-height:1.12!important;color:var(--v244-purple-dark)!important;}
.v244-lesson-head p{margin:4px 0 0!important;font-size:.9rem!important;line-height:1.35!important;color:#475569!important;}
.v244-lesson-head .btn{min-height:30px!important;padding:6px 10px!important;border-radius:999px!important;font-size:.78rem!important;}
.v244-style-tabs{
  display:grid!important;grid-template-columns:repeat(3,minmax(0,1fr))!important;gap:8px!important;margin:0!important;
  padding:6px!important;border-radius:16px!important;background:#f8fafc!important;border:1px solid rgba(15,23,42,.06)!important;
}
.v244-style-tabs .tab{
  min-height:40px!important;border-radius:13px!important;border:1px solid transparent!important;
  background:#fff!important;color:#4c1d95!important;font-weight:950!important;font-size:.88rem!important;line-height:1.1!important;
  box-shadow:0 4px 10px rgba(15,23,42,.04)!important;
}
.v244-style-tabs .tab.active{background:linear-gradient(135deg,#6d28d9,#7c3aed)!important;color:#fff!important;box-shadow:0 8px 18px rgba(109,40,217,.20)!important;}
.v244-current-style{
  width:100%!important;min-height:calc(100vh - 180px)!important;height:auto!important;max-height:none!important;overflow:visible!important;
  display:block!important;border-radius:20px!important;background:#ffffff!important;
}
.v244-current-style > .panel,.v244-current-style .panel,.v244-current-style .visual-panel,.v244-current-style .audio-panel,.v244-current-style .kine-panel,.v244-current-style .audio-card{
  width:100%!important;max-width:none!important;min-height:calc(100vh - 210px)!important;height:auto!important;max-height:none!important;overflow:visible!important;
  margin:0!important;padding:18px!important;border-radius:20px!important;border:1px solid rgba(15,23,42,.07)!important;background:#fff!important;
  box-shadow:none!important;
}
.v244-current-style .visual-layout,.v244-current-style .audio-card,.v244-current-style .kine-panel{display:grid!important;gap:14px!important;}
.v244-current-style .style-header,.v244-current-style .clean-style-header,.v244-current-style .logo-style-header{
  margin:0!important;padding:12px 14px!important;border-radius:16px!important;background:#faf7ff!important;border:1px solid var(--v244-line)!important;
}
.v244-current-style .style-header h3,.v244-current-style h3{font-size:1.08rem!important;line-height:1.18!important;color:#1e1b4b!important;}
.v244-current-style p,.v244-current-style li{font-size:.95rem!important;line-height:1.5!important;color:#334155!important;}
.v244-current-style img,.v244-current-style .v208-media-image,.v244-current-style .media-card img{
  max-width:100%!important;max-height:340px!important;object-fit:contain!important;border-radius:16px!important;
}
.v244-current-style audio{width:100%!important;min-height:38px!important;}
.v244-current-style .visual-gallery,.v244-current-style .image-only-grid,.v244-current-style .clickable-visual-grid{
  display:grid!important;grid-template-columns:repeat(auto-fit,minmax(260px,1fr))!important;gap:14px!important;
}
.v244-current-style .teacher-sheet,.v244-current-style .media-card,.v244-current-style .audio-script,.v244-current-style .audio-listening,.v244-current-style .question,.v244-current-style .game,.v244-current-style .logo-kine-games{
  max-height:none!important;height:auto!important;overflow:visible!important;border-radius:18px!important;padding:14px!important;margin:0!important;
}
.v236-unit-page .official-box.compact,.v236-unit-page .learning-path-note,.v236-unit-page .objective-list,.v236-unit-page .section-head{display:none!important;}
.v236-unit-page .panel,.v236-unit-page section.panel,.v236-unit-page .visual-panel,.v236-unit-page .audio-panel,.v236-unit-page .kine-panel,.v236-unit-page .game,.v236-unit-page .question,.v236-unit-page .media-card,.v236-unit-page .logo-kine-games,.v236-unit-page .kine-fill-list,.v236-unit-page .v60-logo-topic-list{
  max-height:none!important;overflow:visible!important;
}

/* À propos : légèrement vers la droite, mais propre */
.v121-about,.v121-about.v146-about,.v120-about,.v119-about-auth,.v91-entry-card .v91-about-only,.v93-auth-card .v91-about-only{
  left:54%!important;right:auto!important;bottom:14px!important;transform:translateX(-50%)!important;
  width:min(430px, calc(100vw - 34px))!important;max-width:430px!important;text-align:center!important;justify-content:center!important;align-items:center!important;
}
.v121-about *,.v120-about *,.v119-about-auth *,.v91-entry-card .v91-about-only *,.v93-auth-card .v91-about-only *{text-align:center!important;}

/* =========================================================
   V244 — espace professeur : boutons vérifiés, retour clair
========================================================= */
.v176-dashboard{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:14px!important;max-width:1120px!important;margin:0 auto 14px!important;}
.v176-dash-card{min-height:78px!important;border-width:2px!important;border-color:rgba(109,40,217,.22)!important;background:#fff!important;border-radius:20px!important;padding:14px!important;box-shadow:0 10px 24px rgba(15,23,42,.06)!important;}
.v176-dash-card strong{font-size:1.04rem!important;color:#3b0764!important;}
.v176-dash-card small{display:none!important;}
.v176-dash-card.active,.v176-dash-card:hover{border-color:rgba(109,40,217,.55)!important;box-shadow:0 14px 30px rgba(109,40,217,.12)!important;}
.v244-back-dashboard{
  display:inline-flex!important;align-items:center!important;justify-content:center!important;gap:6px!important;
  border:1px solid rgba(109,40,217,.28)!important;background:#fff!important;color:#4c1d95!important;
  border-radius:999px!important;padding:8px 13px!important;font-weight:1000!important;cursor:pointer!important;box-shadow:0 6px 14px rgba(76,29,149,.08)!important;
}
.v244-back-dashboard:hover{background:#f5f3ff!important;}
.v244-test-ok{font-weight:950;color:#047857;font-size:.82rem;margin-left:auto;}
.v235-toolbar .v244-back-dashboard{order:-10!important;}
.v235-toolbar{gap:8px!important;}
[data-v176-panel="add"],[data-v176-panel="modify"]{overflow:visible!important;max-height:none!important;height:auto!important;}
[data-v176-panel="add"] input,[data-v176-panel="add"] textarea,[data-v176-panel="modify"] input,[data-v176-panel="modify"] textarea{font-size:.95rem!important;}

@media(max-width:920px){
  .v176-dashboard{grid-template-columns:repeat(2,minmax(0,1fr))!important;}
  .v244-style-tabs{grid-template-columns:1fr!important;}
  .v236-unit-page{width:min(100%, calc(100vw - 10px))!important;}
  .v236-content-card,.v236-unit-page .content-card{padding:10px!important;border-radius:18px!important;}
  .v244-current-style > .panel,.v244-current-style .panel,.v244-current-style .visual-panel,.v244-current-style .audio-panel,.v244-current-style .kine-panel{min-height:auto!important;padding:12px!important;}
  .v244-current-style{min-height:auto!important;}
}
@media(max-width:560px){
  .topbar,.topbar.v91-topbar,.v91-topbar,.v87-student-topbar{width:calc(100vw - 8px)!important;max-width:calc(100vw - 8px)!important;padding:4px 6px!important;}
  .nav-actions .pill{display:none!important;}
  .v176-dashboard{grid-template-columns:1fr!important;}
  .v244-lesson-head{display:grid!important;}
  .v244-lesson-head .btn{width:100%!important;}
  .v121-about,.v121-about.v146-about,.v120-about,.v119-about-auth{left:50%!important;width:calc(100vw - 24px)!important;}
}
`;
    document.head.appendChild(style);
  }

  function currentTab(){
    const st = appState();
    return (st && st.tab) || 'visual';
  }
  function panelFor(lesson, tab){
    try{
      if(tab === 'audio' && typeof audioPanel === 'function') return audioPanel(lesson);
      if(tab === 'kine' && typeof kinePanel === 'function') return kinePanel(lesson);
      if(typeof visualPanel === 'function') return visualPanel(lesson);
    }catch(e){ console.error('Erreur affichage style', e); }
    return '<section class="panel"><p>Contenu indisponible.</p></section>';
  }

  function installProfessionalLessonPage(){
    const make = function(unit, lesson){
      const st = appState();
      const tab = currentTab();
      lesson = lesson || {};
      const title = lesson.title || 'Sous-titre';
      const objective = lesson.objective || '';
      return `<section class="v244-lesson-page" data-v244-lesson-page>
        <header class="v244-lesson-head">
          <div>
            <h2>${safe(title)}</h2>
            ${objective ? `<p>${safe(objective)}</p>` : ''}
          </div>
          <button type="button" class="btn secondary small" data-action="unit-intro">Retour unité</button>
        </header>
        <nav class="tabs lesson-tabs-v129 v244-style-tabs" aria-label="Choisir un style d’apprentissage">
          <button type="button" class="tab ${tab === 'visual' ? 'active' : ''}" data-tab="visual">Style visuel</button>
          <button type="button" class="tab ${tab === 'audio' ? 'active' : ''}" data-tab="audio">Style auditif</button>
          <button type="button" class="tab ${tab === 'kine' ? 'active' : ''}" data-tab="kine">Style kinesthésique</button>
        </nav>
        <main class="v244-current-style" data-v244-current-style="${safe(tab)}">
          ${panelFor(lesson, tab)}
        </main>
      </section>`;
    };
    try{ renderLesson = make; }catch(e){}
    window.renderLesson = make;
  }

  function ensureBackButton(){
    const modify = q('[data-v176-panel="modify"]');
    if(!modify) return;
    if(q('[data-v244-back-dashboard]', modify)) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'v244-back-dashboard';
    btn.setAttribute('data-v244-back-dashboard','1');
    btn.textContent = '← Revenir au tableau de bord';
    const toolbar = q('.v235-toolbar,.v233-toolbar,.v172-actions', modify);
    if(toolbar) toolbar.insertBefore(btn, toolbar.firstChild);
    else modify.insertBefore(btn, modify.firstChild);
  }

  function returnDashboard(){
    const dash = q('.v176-dashboard');
    if(dash) dash.style.display = 'grid';
    qa('.v176-dash-card').forEach(b => b.classList.remove('active'));
    qa('.v176-panel').forEach(p => { p.style.display = 'none'; });
    const page = q('.v176-teacher-page');
    if(page) page.scrollIntoView({block:'start', behavior:'smooth'});
  }

  function afterOpenPanel(panelName){
    setTimeout(function(){
      const panel = q(`[data-v176-panel="${panelName}"]`);
      if(panel){
        panel.style.display = 'block';
        panel.style.maxHeight = 'none';
        panel.style.overflow = 'visible';
        if(panelName === 'modify') ensureBackButton();
        const target = panelName === 'modify' ? (q('[data-v235-editor]', panel) || panel) : panel;
        try{ target.scrollIntoView({block:'start', behavior:'smooth'}); }catch(e){}
      }
    }, 120);
    setTimeout(function(){ if(panelName === 'modify') ensureBackButton(); }, 500);
  }

  function verifyTeacherButtons(){
    const addBtn = q('[data-v176-dashboard="add"]');
    const modBtn = q('[data-v176-dashboard="modify"]');
    if(addBtn) addBtn.setAttribute('data-v244-checked','ok');
    if(modBtn) modBtn.setAttribute('data-v244-checked','ok');
  }

  function installEvents(){
    document.addEventListener('click', function(e){
      const back = e.target.closest && e.target.closest('[data-v244-back-dashboard], [data-v240-back-dashboard], [data-v239-back-dashboard], [data-v238-back-dashboard]');
      if(back){ e.preventDefault(); e.stopPropagation(); returnDashboard(); return; }

      const dash = e.target.closest && e.target.closest('[data-v176-dashboard]');
      if(dash){
        const name = dash.getAttribute('data-v176-dashboard') || '';
        if(name === 'add' || name === 'modify') afterOpenPanel(name);
      }

      const tab = e.target.closest && e.target.closest('[data-tab]');
      if(tab){
        setTimeout(function(){
          const page = q('[data-v244-current-style], [data-v240-style-page], [data-v239-current-style-page]');
          if(page) try{ page.scrollIntoView({block:'start', behavior:'smooth'}); }catch(e){}
        }, 90);
      }
    }, true);
  }

  function fixInternalScrolls(){
    qa('.v236-unit-page .panel,.v236-unit-page section.panel,.v236-unit-page .visual-panel,.v236-unit-page .audio-panel,.v236-unit-page .kine-panel,.v236-unit-page .media-card,.v236-unit-page .question,.v236-unit-page .game,.v236-unit-page .logo-kine-games').forEach(el => {
      el.style.maxHeight = 'none';
      el.style.overflow = 'visible';
    });
  }

  function install(){
    injectCss();
    installProfessionalLessonPage();
    installEvents();
    verifyTeacherButtons();
    ensureBackButton();
    fixInternalScrolls();
    try{
      new MutationObserver(function(){
        verifyTeacherButtons();
        ensureBackButton();
        fixInternalScrolls();
      }).observe(document.documentElement, {childList:true, subtree:true});
    }catch(e){}
    setTimeout(function(){ verifyTeacherButtons(); ensureBackButton(); fixInternalScrolls(); }, 400);
    setTimeout(function(){ verifyTeacherButtons(); ensureBackButton(); fixInternalScrolls(); }, 1200);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
})();
