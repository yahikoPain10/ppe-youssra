/* ÉPI v211 — tableau de bord centré + retour + panneau pleine page */
(function(){
  'use strict';
  function q(sel, root){ return (root || document).querySelector(sel); }
  function qa(sel, root){ return Array.from((root || document).querySelectorAll(sel)); }
  function applyTeacherLayout(){
    const page = q('.v176-teacher-page');
    if(!page) return;
    const dashboard = q('.v176-dashboard', page);
    const activeCard = q('.v176-dash-card.active', dashboard || page);
    const isOpen = !!activeCard;
    page.classList.toggle('v211-work-mode', isOpen);
    page.classList.toggle('v211-dashboard-mode', !isOpen);
    if(isOpen){
      qa('.v176-panel-head', page).forEach(head => {
        if(head.querySelector('[data-v211-back-dashboard]')) return;
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'btn secondary v211-back-dashboard';
        btn.setAttribute('data-v211-back-dashboard','1');
        btn.setAttribute('data-v176-dashboard','home');
        btn.textContent = '← Retour au tableau de bord';
        head.appendChild(btn);
      });
    }
  }
  function goLanding(){
    try{
      if(typeof clearStudent === 'function') { clearStudent(); return; }
      if(typeof renderLogin === 'function') { renderLogin(); return; }
    }catch(e){}
    location.reload();
  }
  function injectCss(){
    if(document.getElementById('v211-style')) return;
    const st = document.createElement('style');
    st.id = 'v211-style';
    st.textContent = `
      .v176-teacher-page.v211-dashboard-mode{min-height:calc(100vh - 40px);display:grid!important;place-content:center!important;gap:24px!important;padding:28px!important;}
      .v176-teacher-page.v211-dashboard-mode .v176-teacher-hero{max-width:980px;width:100%;justify-self:center;text-align:center;align-items:center;}
      .v176-teacher-page.v211-dashboard-mode .v176-dashboard{max-width:1000px;width:100%;justify-self:center;align-self:center;grid-template-columns:repeat(4,minmax(180px,1fr))!important;}
      .v176-teacher-page.v211-dashboard-mode .v176-panel{display:none!important;}
      .v176-teacher-page.v211-work-mode .v176-dashboard{display:none!important;}
      .v176-teacher-page.v211-work-mode{display:grid!important;gap:18px!important;align-content:start!important;min-height:100vh!important;}
      .v176-teacher-page.v211-work-mode .v176-panel{width:100%!important;max-width:none!important;min-height:calc(100vh - 210px);box-sizing:border-box;}
      .v176-teacher-page.v211-work-mode .v176-form-card{width:100%!important;max-width:none!important;box-sizing:border-box;}
      .v176-panel-head{display:flex;align-items:flex-start;justify-content:space-between;gap:14px;flex-wrap:wrap;}
      .v211-back-dashboard{white-space:nowrap;margin-left:auto;}
      .v211-custom-mindmap .v189-radial-canvas{background:linear-gradient(180deg,#f8fbff,#fff)!important;}
      .v211-custom-mindmap .v189-map-card{overflow:visible!important;}
      .v172-branch-row{border:1px solid rgba(37,99,235,.18)!important;background:linear-gradient(180deg,#fff,#f8fbff)!important;}
      .v172-branch-row .v172-row-head strong::after{content:' — carte mentale';font-weight:800;color:#2563eb;margin-left:6px;font-size:.86rem;}
      @media(max-width:950px){.v176-teacher-page.v211-dashboard-mode .v176-dashboard{grid-template-columns:1fr 1fr!important}.v211-back-dashboard{width:100%;justify-content:center}}
      @media(max-width:620px){.v176-teacher-page.v211-dashboard-mode .v176-dashboard{grid-template-columns:1fr!important}.v176-teacher-page.v211-dashboard-mode{padding:14px!important}}
    `;
    document.head.appendChild(st);
  }
  document.addEventListener('click', function(e){
    const backDash = e.target.closest && e.target.closest('[data-v211-back-dashboard]');
    if(backDash){ /* l'ancien gestionnaire data-v176-dashboard fera le rendu, ici on sécurise seulement */ setTimeout(applyTeacherLayout, 80); return; }
    const landing = e.target.closest && e.target.closest('[data-v87-landing]');
    if(landing){ e.preventDefault(); e.stopPropagation(); if(e.stopImmediatePropagation) e.stopImmediatePropagation(); goLanding(); return; }
    const dash = e.target.closest && e.target.closest('[data-v176-dashboard]');
    if(dash){ setTimeout(applyTeacherLayout, 80); return; }
    const mod = e.target.closest && e.target.closest('[data-v179-mod-section-btn], [data-v179-add-section-btn]');
    if(mod){ setTimeout(applyTeacherLayout, 80); }
  }, true);
  function start(){ injectCss(); applyTeacherLayout(); try{ new MutationObserver(applyTeacherLayout).observe(document.body,{childList:true,subtree:true}); }catch(e){} setInterval(applyTeacherLayout, 1000); }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
