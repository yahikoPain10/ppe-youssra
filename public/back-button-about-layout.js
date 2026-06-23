/* =========================================================
   ÉPI v238 — Dernières corrections demandées
   1) Modifier unité : bouton « Revenir au tableau de bord ».
   2) Espace élève : marges réglées, contenu des styles plus visible sans scroll inutile.
   3) Authentification : bloc « À propos » centré en bas, avec son style/bordure conservés.
========================================================= */
(function(){
  'use strict';

  const STYLE_ID = 'v238-final-style';

  function q(sel, root){ return (root || document).querySelector(sel); }
  function qa(sel, root){ return Array.from((root || document).querySelectorAll(sel)); }

  function injectCss(){
    if(document.getElementById(STYLE_ID)) return;
    const st = document.createElement('style');
    st.id = STYLE_ID;
    st.textContent = `
/* =========================================================
   V238 — AUTHENTIFICATION : À propos centré, pas à droite
========================================================= */
.v121-about,
.v121-about.v146-about,
.v120-about,
.v119-about-auth{
  left:50% !important;
  right:auto !important;
  bottom:14px !important;
  transform:translateX(-50%) !important;
  width:min(430px, calc(100vw - 32px)) !important;
  max-width:430px !important;
  text-align:center !important;
  justify-content:center !important;
  align-items:center !important;
}
.v121-about *,
.v121-about.v146-about *,
.v120-about *,
.v119-about-auth *{
  text-align:center !important;
}

/* =========================================================
   V238 — ESPACE ÉLÈVE : moins de marges + styles visibles
   Objectif : éviter de scroller juste pour voir le style visuel/auditif/kinesthésique.
========================================================= */
.v236-unit-page{
  width:min(960px, calc(100vw - 24px)) !important;
  max-width:960px !important;
  margin:4px auto 12px !important;
  padding:0 !important;
}
.v236-unit-selector{
  position:relative !important;
  top:auto !important;
  z-index:20 !important;
  max-width:520px !important;
  width:min(520px, calc(100vw - 32px)) !important;
  margin:0 auto 6px !important;
  padding:5px 8px !important;
  border-radius:14px !important;
  background:#fff !important;
  box-shadow:0 5px 14px rgba(76,29,149,.07) !important;
}
.v236-unit-selector-title,
.v236-select-wrap span{
  display:none !important;
}
.v236-select-wrap{
  width:100% !important;
  max-width:500px !important;
  margin:0 auto !important;
}
.v236-select-wrap select{
  min-height:34px !important;
  height:34px !important;
  padding:0 12px !important;
  border-radius:12px !important;
  font-size:13.5px !important;
  font-weight:900 !important;
  text-align:center !important;
  text-align-last:center !important;
}
.v236-content-card,
.v236-unit-page .content-card,
.v236-unit-page .fix-content-card{
  width:100% !important;
  max-width:940px !important;
  margin:0 auto !important;
  padding:6px !important;
  border-radius:14px !important;
  height:auto !important;
  min-height:0 !important;
  max-height:none !important;
  overflow:visible !important;
}
.v236-unit-page .section-head{
  padding:6px 8px !important;
  margin:0 0 5px !important;
  border-radius:12px !important;
  gap:6px !important;
}
.v236-unit-page .section-head h2{
  font-size:1rem !important;
  line-height:1.12 !important;
  margin:0 !important;
}
.v236-unit-page .section-head p{
  font-size:.82rem !important;
  line-height:1.2 !important;
  margin:2px 0 0 !important;
}
.v236-unit-page .section-head .btn,
.v236-unit-page .btn.small{
  padding:5px 9px !important;
  min-height:0 !important;
  border-radius:999px !important;
  font-size:.78rem !important;
}
.v236-unit-page .official-box.compact{
  padding:5px 7px !important;
  margin:0 0 5px !important;
  border-radius:12px !important;
}
.v236-unit-page .official-box.compact h4{
  display:none !important;
}
.v236-unit-page .official-box.compact p{
  margin:0 !important;
  font-size:.78rem !important;
  line-height:1.14 !important;
}
.v236-unit-page .objective-list{
  display:none !important;
}
.v236-unit-page .tabs,
.v236-unit-page .lesson-tabs-v129{
  display:grid !important;
  grid-template-columns:repeat(3, minmax(0,1fr)) !important;
  gap:5px !important;
  margin:0 0 5px !important;
  padding:0 !important;
}
.v236-unit-page .tab{
  min-height:32px !important;
  padding:5px 6px !important;
  border-radius:11px !important;
  font-size:.78rem !important;
  line-height:1.12 !important;
}
.v236-unit-page .learning-path-note{
  display:none !important;
}
.v236-unit-page .visual-panel,
.v236-unit-page .audio-panel,
.v236-unit-page .kine-panel,
.v236-unit-page .teacher-sheet,
.v236-unit-page section.panel,
.v236-unit-page .panel,
.v236-unit-page .official-box,
.v236-unit-page .visual-note,
.v236-unit-page .audio-card,
.v236-unit-page .kine-card,
.v236-unit-page .question-card,
.v236-unit-page .v208-visual-card,
.v236-unit-page .v208-audio-card,
.v236-unit-page .v208-integration-task{
  padding:6px !important;
  margin:0 0 5px !important;
  border-radius:12px !important;
  height:auto !important;
  min-height:0 !important;
  max-height:none !important;
  overflow:visible !important;
}
.v236-unit-page h1{font-size:1.05rem !important;line-height:1.1 !important;margin:0 0 4px !important;}
.v236-unit-page h2{font-size:.98rem !important;line-height:1.12 !important;margin:0 0 4px !important;}
.v236-unit-page h3{font-size:.9rem !important;line-height:1.12 !important;margin:0 0 4px !important;}
.v236-unit-page h4{font-size:.84rem !important;line-height:1.12 !important;margin:0 0 3px !important;}
.v236-unit-page p,
.v236-unit-page li,
.v236-unit-page small,
.v236-unit-page .visual-note,
.v236-unit-page .v208-definition,
.v236-unit-page .v208-audio-text,
.v236-unit-page .v208-example{
  font-size:.82rem !important;
  line-height:1.2 !important;
  margin-top:2px !important;
  margin-bottom:2px !important;
}
.v236-unit-page ul,
.v236-unit-page ol{
  margin-top:3px !important;
  margin-bottom:3px !important;
  padding-left:1rem !important;
}
.v236-unit-page img,
.v236-unit-page .v208-media-image,
.v236-unit-page .v210-visual-click-zone img,
.v236-unit-page .v209-visual-click-zone img{
  max-height:180px !important;
  object-fit:contain !important;
}
.v236-unit-page video,
.v236-unit-page .v208-media-video,
.v236-unit-page .v210-visual-click-zone video,
.v236-unit-page .v209-visual-click-zone video{
  max-height:210px !important;
}
.v236-unit-page audio,
.v236-unit-page .v208-media-audio{
  min-height:30px !important;
}
.v236-unit-page .v208-media-box,
.v236-unit-page .v233-media,
.v236-unit-page .v235-media{
  min-height:70px !important;
  padding:5px !important;
  border-radius:11px !important;
}
.v236-unit-page .v208-visual-grid,
.v236-unit-page .v208-audio-grid,
.v236-unit-page .question-grid,
.v236-unit-page .cards-grid{
  gap:6px !important;
}

/* =========================================================
   V238 — MODIFIER UNITÉ : bouton retour visible
========================================================= */
.v238-back-dashboard{
  border:1px solid rgba(124,58,237,.25) !important;
  background:#fff !important;
  color:#4c1d95 !important;
  border-radius:999px !important;
  padding:8px 12px !important;
  font-weight:950 !important;
  cursor:pointer !important;
  box-shadow:none !important;
  white-space:nowrap !important;
}
.v238-back-dashboard:hover{background:#f5f3ff !important;}
.v235-toolbar,.v233-toolbar{
  gap:7px !important;
  align-items:center !important;
}
.v235-toolbar{
  grid-template-columns:auto 1fr minmax(230px,420px) auto auto !important;
}
.v235-toolbar strong{white-space:nowrap !important;}
.v233-toolbar{
  grid-template-columns:auto 1fr minmax(230px,360px) auto auto auto !important;
}
@media(max-width:820px){
  .v236-unit-page{width:min(100%, calc(100vw - 10px)) !important;margin-top:2px !important;}
  .v236-content-card,.v236-unit-page .content-card{padding:5px !important;}
  .v236-unit-page .tabs,.v236-unit-page .lesson-tabs-v129{grid-template-columns:1fr !important;}
  .v235-toolbar,.v233-toolbar{grid-template-columns:1fr !important;}
  .v238-back-dashboard{width:100% !important;text-align:center !important;}
}
`;
    document.head.appendChild(st);
  }

  function addBackButton(){
    // Nouvelle interface v237/v235
    qa('.v235-toolbar').forEach(toolbar => {
      if(toolbar.querySelector('[data-v238-back-dashboard]')) return;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'v238-back-dashboard';
      btn.setAttribute('data-v238-back-dashboard','1');
      btn.setAttribute('data-v176-dashboard','home');
      btn.textContent = '← Revenir au tableau de bord';
      toolbar.insertBefore(btn, toolbar.firstElementChild || null);
    });
    // Ancienne interface de sécurité v233, au cas où elle apparaît encore
    qa('.v233-toolbar').forEach(toolbar => {
      if(toolbar.querySelector('[data-v238-back-dashboard]')) return;
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'v238-back-dashboard';
      btn.setAttribute('data-v238-back-dashboard','1');
      btn.setAttribute('data-v176-dashboard','home');
      btn.textContent = '← Revenir au tableau de bord';
      toolbar.insertBefore(btn, toolbar.firstElementChild || null);
    });
  }

  function goDashboard(){
    try{
      const page = q('.v176-teacher-page');
      qa('.v176-dash-card.active', page || document).forEach(x => x.classList.remove('active'));
      if(page){
        page.classList.add('v211-dashboard-mode');
        page.classList.remove('v211-work-mode');
      }
      const homeBtn = q('[data-v176-dashboard="home"]');
      if(homeBtn && !homeBtn.matches('[data-v238-back-dashboard]')){
        homeBtn.click();
        return;
      }
      const dash = q('.v176-dashboard');
      if(dash) dash.style.display = '';
      qa('.v176-panel').forEach(p => { p.style.display = ''; });
    }catch(e){
      console.warn('Retour tableau de bord : fallback', e);
    }
  }

  function install(){
    injectCss();
    addBackButton();
    document.addEventListener('click', function(e){
      const btn = e.target.closest && e.target.closest('[data-v238-back-dashboard]');
      if(!btn) return;
      // Laisser aussi les anciens gestionnaires data-v176-dashboard agir, puis sécuriser.
      setTimeout(goDashboard, 40);
      setTimeout(goDashboard, 160);
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
