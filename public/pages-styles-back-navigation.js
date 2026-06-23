/* =========================================================
   ÉPI v239 — corrections finales demandées
   1) Espace élève : chaque style d’apprentissage est rendu comme une page claire.
   2) Barre de menu plus mince.
   3) Bloc « À propos » de l’authentification déplacé légèrement vers la droite.
   4) Modifier unité : bouton « Revenir au tableau de bord » toujours visible.
========================================================= */
(function(){
  'use strict';

  const STYLE_ID = 'v239-final-pages-style';

  function q(sel, root){ return (root || document).querySelector(sel); }
  function qa(sel, root){ return Array.from((root || document).querySelectorAll(sel)); }
  function escapeHtml(value){
    if(typeof esc === 'function') return esc(value == null ? '' : value);
    return String(value == null ? '' : value).replace(/[&<>"']/g, function(c){
      return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c];
    });
  }

  function injectCss(){
    if(document.getElementById(STYLE_ID)) return;
    const st = document.createElement('style');
    st.id = STYLE_ID;
    st.textContent = `
/* =========================================================
   V239 — barre de menu plus mince
========================================================= */
.app-shell{padding-top:8px !important;}
.topbar,
.v114-topbar,
.v119-topbar,
.v121-topbar,
.v144-topbar,
.fix-topbar,
.v87-student-topbar,
.v91-topbar,
.v94-topbar{
  min-height:48px !important;
  padding:6px 16px !important;
  border-radius:0 0 16px 16px !important;
  box-shadow:0 6px 16px rgba(15,23,42,.06) !important;
}
.v144-topbar{min-height:52px !important;}
.topbar .brand,
.v114-topbar .brand,
.v119-topbar .brand,
.v121-topbar .brand,
.v144-brand{gap:8px !important;}
.logo,
.logo-badge,
.v144-brand-logo,
.v58-logo,
.fix-logo-card,
.v87-student-brand .v87-logo{
  width:42px !important;
  height:42px !important;
  min-width:42px !important;
  border-radius:14px !important;
  font-size:18px !important;
}
.topbar .brand h1,
.v121-topbar .brand h1,
.v119-topbar .brand h1,
.v114-topbar .brand h1{font-size:1rem !important;line-height:1.05 !important;}
.topbar .brand p,
.v121-topbar .brand p,
.v119-topbar .brand p,
.v114-topbar .brand p{font-size:.72rem !important;margin-top:0 !important;}
.nav-actions{gap:7px !important;}
.nav-actions .btn,
.nav-actions .pill,
.topbar .btn.small{
  padding:6px 10px !important;
  min-height:30px !important;
  border-radius:12px !important;
  font-size:.78rem !important;
}

/* =========================================================
   V239 — bloc À propos : gardé près du centre, légèrement vers la droite
========================================================= */
.v121-about,
.v121-about.v146-about,
.v120-about,
.v119-about-auth{
  left:55% !important;
  right:auto !important;
  bottom:14px !important;
  transform:translateX(-50%) !important;
  width:min(430px, calc(100vw - 34px)) !important;
  max-width:430px !important;
  text-align:center !important;
  justify-content:center !important;
  align-items:center !important;
  border-radius:20px !important;
}
.v121-about *,
.v121-about.v146-about *,
.v120-about *,
.v119-about-auth *{text-align:center !important;}

/* =========================================================
   V239 — espace élève : styles comme pages lisibles, pas petits blocs
========================================================= */
.v236-unit-page{
  width:min(980px, calc(100vw - 32px)) !important;
  max-width:980px !important;
  margin:6px auto 24px !important;
  padding:0 !important;
}
.v236-unit-selector{
  position:relative !important;
  top:auto !important;
  z-index:15 !important;
  width:min(560px, calc(100vw - 40px)) !important;
  max-width:560px !important;
  margin:0 auto 8px !important;
  padding:5px 8px !important;
  border-radius:15px !important;
  background:#fff !important;
  border:1px solid rgba(124,58,237,.22) !important;
  box-shadow:0 4px 12px rgba(76,29,149,.07) !important;
}
.v236-select-wrap select{
  height:34px !important;
  min-height:34px !important;
  border-radius:12px !important;
  text-align:center !important;
  text-align-last:center !important;
  font-size:13.5px !important;
}
.v236-content-card,
.v236-unit-page .content-card{
  width:100% !important;
  max-width:940px !important;
  margin:0 auto !important;
  padding:10px !important;
  border-radius:18px !important;
  overflow:visible !important;
}
.v239-lesson-page{
  display:grid !important;
  gap:8px !important;
  width:100% !important;
}
.v239-lesson-mini-head{
  display:flex !important;
  align-items:center !important;
  justify-content:space-between !important;
  gap:10px !important;
  padding:7px 9px !important;
  border:1px solid rgba(59,130,246,.18) !important;
  border-radius:14px !important;
  background:#fff !important;
}
.v239-lesson-mini-head h2{
  margin:0 !important;
  font-size:1.05rem !important;
  line-height:1.12 !important;
  color:#111827 !important;
}
.v239-lesson-mini-head p{
  margin:2px 0 0 !important;
  font-size:.82rem !important;
  line-height:1.18 !important;
  color:#475569 !important;
}
.v239-lesson-mini-head .btn{
  padding:5px 9px !important;
  min-height:28px !important;
  border-radius:999px !important;
  font-size:.78rem !important;
}
.v239-style-nav{
  display:grid !important;
  grid-template-columns:repeat(3, minmax(0,1fr)) !important;
  gap:6px !important;
  margin:0 !important;
}
.v239-style-nav .tab{
  min-height:34px !important;
  padding:6px 8px !important;
  border-radius:12px !important;
  font-size:.82rem !important;
  line-height:1.1 !important;
}
.v239-current-style-page{
  width:100% !important;
  min-height:calc(100vh - 170px) !important;
  display:block !important;
  overflow:visible !important;
}
.v239-current-style-page > .panel,
.v239-current-style-page .visual-panel,
.v239-current-style-page .audio-panel,
.v239-current-style-page .kine-panel,
.v239-current-style-page .audio-card{
  min-height:calc(100vh - 190px) !important;
  height:auto !important;
  max-height:none !important;
  overflow:visible !important;
  padding:14px !important;
  margin:0 !important;
  border-radius:18px !important;
}
.v239-current-style-page .style-header,
.v239-current-style-page .clean-style-header,
.v239-current-style-page .logo-style-header{
  margin-bottom:10px !important;
  padding:8px 10px !important;
  border-radius:14px !important;
}
.v239-current-style-page .style-header h3,
.v239-current-style-page h3{
  font-size:1.02rem !important;
  line-height:1.15 !important;
}
.v239-current-style-page p,
.v239-current-style-page li{
  font-size:.9rem !important;
  line-height:1.35 !important;
}
.v239-current-style-page img,
.v239-current-style-page .v208-media-image,
.v239-current-style-page .media-card img{
  max-height:240px !important;
  object-fit:contain !important;
}
.v239-current-style-page audio{min-height:34px !important;}
.v236-unit-page .official-box.compact,
.v236-unit-page .learning-path-note,
.v236-unit-page .objective-list{display:none !important;}
.v236-unit-page .section-head{display:none !important;}

/* éviter les petits conteneurs à scroll dans les styles */
.v236-unit-page .panel,
.v236-unit-page section.panel,
.v236-unit-page .visual-panel,
.v236-unit-page .audio-panel,
.v236-unit-page .kine-panel,
.v236-unit-page .game,
.v236-unit-page .question,
.v236-unit-page .media-card,
.v236-unit-page .logo-kine-games,
.v236-unit-page .v60-logo-topic-list,
.v236-unit-page .kine-fill-list{
  max-height:none !important;
  overflow:visible !important;
}

/* =========================================================
   V239 — Modifier unité : bouton retour sûr et visible
========================================================= */
.v239-back-dashboard{
  border:1px solid rgba(124,58,237,.25) !important;
  background:#fff !important;
  color:#4c1d95 !important;
  border-radius:999px !important;
  padding:7px 11px !important;
  font-weight:950 !important;
  cursor:pointer !important;
  box-shadow:none !important;
  white-space:nowrap !important;
}
.v239-back-dashboard:hover{background:#f5f3ff !important;}
.v235-toolbar{
  grid-template-columns:auto 1fr minmax(260px,520px) auto auto !important;
  align-items:center !important;
  gap:8px !important;
}
.v235-toolbar strong{white-space:nowrap !important;}

@media(max-width:820px){
  .topbar,.v114-topbar,.v119-topbar,.v121-topbar,.v144-topbar{padding:6px 10px !important;}
  .v236-unit-page{width:min(100%, calc(100vw - 12px)) !important;}
  .v236-content-card,.v236-unit-page .content-card{padding:7px !important;}
  .v239-style-nav{grid-template-columns:1fr !important;}
  .v239-current-style-page,
  .v239-current-style-page > .panel,
  .v239-current-style-page .visual-panel,
  .v239-current-style-page .audio-panel,
  .v239-current-style-page .kine-panel{min-height:auto !important;}
  .v235-toolbar{grid-template-columns:1fr !important;}
  .v239-back-dashboard{width:100% !important;}
  .v121-about,.v121-about.v146-about,.v120-about,.v119-about-auth{left:50% !important;width:min(410px, calc(100vw - 24px)) !important;}
}
`;
    document.head.appendChild(st);
  }

  function currentTab(){
    try{ return ((typeof state !== 'undefined' ? state : window.state).tab || 'visual'); }catch(e){ return 'visual'; }
  }

  function stylePanelFor(lesson, tab){
    if(tab === 'audio' && typeof audioPanel === 'function') return audioPanel(lesson);
    if(tab === 'kine' && typeof kinePanel === 'function') return kinePanel(lesson);
    if(typeof visualPanel === 'function') return visualPanel(lesson);
    return '<section class="panel"><p>Contenu indisponible.</p></section>';
  }

  function installRenderLessonOverride(){
    if(window.__v239LessonOverrideInstalled) return;
    window.__v239LessonOverrideInstalled = true;

    const make = function(unit, lesson){
      const tab = currentTab();
      lesson = lesson || {};
      unit = unit || {};
      const activeLabel = tab === 'audio' ? 'Style auditif' : tab === 'kine' ? 'Style kinesthésique' : 'Style visuel';
      return `<section class="v239-lesson-page" data-v239-lesson-page>
        <div class="v239-lesson-mini-head">
          <div>
            <h2>${escapeHtml(lesson.title || 'Sous-titre')}</h2>
            ${lesson.objective ? `<p><strong>Objectif :</strong> ${escapeHtml(lesson.objective)}</p>` : ''}
          </div>
          <button class="btn secondary small" data-action="unit-intro">Retour unité</button>
        </div>
        <div class="tabs lesson-tabs-v129 v239-style-nav" aria-label="Choisir le style d’apprentissage">
          <button class="tab ${tab==='visual'?'active':''}" data-tab="visual">1. Style visuel</button>
          <button class="tab ${tab==='audio'?'active':''}" data-tab="audio">2. Style auditif</button>
          <button class="tab ${tab==='kine'?'active':''}" data-tab="kine">3. Style kinesthésique</button>
        </div>
        <main class="v239-current-style-page" data-v239-style-page="${escapeHtml(tab)}" aria-label="${escapeHtml(activeLabel)}">
          ${stylePanelFor(lesson, tab)}
        </main>
      </section>`;
    };

    try{ renderLesson = make; }catch(e){}
    window.renderLesson = make;
  }

  function addBackButton(){
    qa('.v235-toolbar, .v233-toolbar').forEach(function(toolbar){
      if(toolbar.querySelector('[data-v239-back-dashboard]')) return;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'v239-back-dashboard';
      btn.setAttribute('data-v239-back-dashboard','1');
      btn.textContent = '← Revenir au tableau de bord';
      toolbar.insertBefore(btn, toolbar.firstElementChild || null);
    });
  }

  function goTeacherDashboard(){
    try{
      // Le bouton Accueil professeur existe déjà dans le tableau de bord : on le réutilise si possible.
      const oldHome = q('[data-v176-dashboard="home"]:not([data-v238-back-dashboard]):not([data-v239-back-dashboard])');
      if(oldHome){ oldHome.click(); return; }
    }catch(e){}
    try{
      const page = q('.v176-teacher-page');
      if(page){
        page.classList.add('v211-dashboard-mode');
        page.classList.remove('v211-work-mode');
      }
      qa('.v176-panel').forEach(function(p){ p.style.display = ''; });
      const dash = q('.v176-dashboard');
      if(dash) dash.style.display = '';
      const modifyPanel = q('[data-v176-panel="modify"]');
      if(modifyPanel) modifyPanel.style.display = 'none';
    }catch(e){ console.warn('Retour tableau de bord impossible', e); }
  }

  function scrollStylePageIntoView(){
    const el = q('[data-v239-style-page]') || q('.v236-content-card');
    if(!el) return;
    try{ el.scrollIntoView({block:'start', behavior:'smooth'}); }catch(e){ el.scrollIntoView(); }
  }

  function install(){
    injectCss();
    installRenderLessonOverride();
    addBackButton();

    document.addEventListener('click', function(e){
      const back = e.target.closest && e.target.closest('[data-v239-back-dashboard]');
      if(back){ e.preventDefault(); e.stopPropagation(); goTeacherDashboard(); return; }
      const tab = e.target.closest && e.target.closest('[data-tab]');
      if(tab){ setTimeout(scrollStylePageIntoView, 80); }
    }, true);

    try{
      new MutationObserver(function(){ addBackButton(); }).observe(document.documentElement, {childList:true, subtree:true});
    }catch(e){}
    setTimeout(addBackButton, 300);
    setTimeout(addBackButton, 1000);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
})();
