/* =========================================================
   ÉPI v232 — Correctif final de l'espace Modifier contenu
   Objectif : éviter la page bloquée/inaccessible et organiser clairement
   la modification de l'unité comme une vue élève modifiable.
========================================================= */
(function(){
  'use strict';
  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));

  function injectCss(){
    if($('#v232-modifier-layout-css')) return;
    const st = document.createElement('style');
    st.id = 'v232-modifier-layout-css';
    st.textContent = `
      html,body,#app{min-height:100%!important;height:auto!important;overflow-y:auto!important;overflow-x:hidden!important;}
      body.v232-modifier-open{background:#faf5ff!important;}

      /* La page prof ne doit plus rester bloquée/fixée */
      .v87-teacher-shell,
      .v172-page,
      .v176-teacher-page,
      .v176-panel,
      [data-v176-panel="modify"],
      .v230-modifier,
      .v231-modifier{
        position:relative!important;
        height:auto!important;
        min-height:0!important;
        max-height:none!important;
        overflow:visible!important;
        transform:none!important;
      }
      .v87-teacher-shell{padding:10px!important;display:block!important;}
      .v176-teacher-page{width:min(1240px,100%)!important;max-width:1240px!important;display:grid!important;gap:12px!important;}
      .v176-panel[data-v176-panel="modify"]{padding:0!important;margin:0!important;}

      /* Tableau de bord prof plus lisible */
      .v176-dashboard{grid-template-columns:repeat(4,minmax(145px,1fr))!important;gap:12px!important;align-items:stretch!important;}
      .v176-dash-card{border-width:5px!important;border-color:rgba(124,58,237,.76)!important;min-height:64px!important;padding:12px!important;}
      .v176-dash-card strong{font-size:1rem!important;line-height:1.2!important;}

      /* Modifier contenu : organisation générale */
      .v231-modifier{
        background:linear-gradient(135deg,#4c1d95 0%,#7c3aed 34%,#f8f4ff 100%)!important;
        border-radius:24px!important;
        padding:10px!important;
        display:grid!important;
        gap:10px!important;
        box-shadow:0 18px 46px rgba(76,29,149,.22)!important;
        isolation:isolate!important;
      }
      .v232-modifier-help{
        background:rgba(255,255,255,.97)!important;
        border:2px solid rgba(124,58,237,.22)!important;
        border-radius:18px!important;
        padding:10px!important;
        display:grid!important;
        gap:8px!important;
        box-shadow:0 12px 26px rgba(49,25,90,.10)!important;
      }
      .v232-help-title{display:flex!important;align-items:center!important;justify-content:space-between!important;gap:8px!important;flex-wrap:wrap!important;}
      .v232-help-title strong{color:#3b0764!important;font-size:1rem!important;}
      .v232-help-title span{font-weight:900!important;color:#6d28d9!important;background:#f3e8ff!important;border-radius:999px!important;padding:5px 9px!important;font-size:.82rem!important;}
      .v232-steps{display:grid!important;grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:7px!important;}
      .v232-step{border:1px solid rgba(124,58,237,.16)!important;border-radius:14px!important;background:#fff!important;padding:8px!important;color:#3b0764!important;font-weight:850!important;line-height:1.35!important;font-size:.86rem!important;}
      .v232-step b{display:inline-grid!important;place-items:center!important;width:22px!important;height:22px!important;border-radius:999px!important;background:#7c3aed!important;color:#fff!important;margin-right:5px!important;}

      .v231-toolbar{
        position:relative!important;
        top:auto!important;
        z-index:5!important;
        margin:0!important;
        padding:8px!important;
        border-radius:16px!important;
        display:grid!important;
        grid-template-columns:minmax(230px,1fr) auto!important;
        align-items:center!important;
      }
      .v231-toolbar::after{content:'Page modifiable : chaque bloc contient Modifier / Supprimer / Ajouter';font-weight:900;color:#5b21b6;background:#f3e8ff;border-radius:999px;padding:6px 10px;font-size:.82rem;}
      .v231-toolbar select{width:100%!important;min-width:0!important;}
      .v231-student-view{max-width:1080px!important;margin:0 auto!important;gap:9px!important;}

      /* Éviter les grandes hauteurs et donner une lecture stable */
      .v231-hero{padding:12px!important;border-radius:18px!important;}
      .v231-hero h2{font-size:1.32rem!important;line-height:1.18!important;margin:.18rem 0!important;}
      .v231-hero p{font-size:.92rem!important;line-height:1.42!important;}
      .v231-section,.v231-subtitle,.v231-style-block{padding:9px!important;border-radius:17px!important;}
      .v231-section{gap:8px!important;}
      .v231-subtitle{border:2px solid rgba(124,58,237,.16)!important;background:linear-gradient(180deg,#fff,#fdfaff)!important;}
      .v231-title-line{background:#faf5ff!important;border:1px solid rgba(124,58,237,.14)!important;border-radius:14px!important;padding:7px 8px!important;}
      .v231-title-line h3,.v231-head h3,.v231-mini-head h4{font-size:1rem!important;line-height:1.25!important;}
      .v231-definition,.v231-example,.v231-list,.v231-card p,.v231-media-card p,.v231-map-node p{font-size:.92rem!important;line-height:1.42!important;}

      /* Les trois styles sont rangés en blocs obligatoires */
      .v231-style-block.visual{border-left:7px solid #7c3aed!important;}
      .v231-style-block.audio{border-left:7px solid #9333ea!important;}
      .v231-style-block.kine{border-left:7px solid #a855f7!important;}
      .v231-mini-head{background:#fff!important;border:1px dashed rgba(124,58,237,.20)!important;border-radius:13px!important;padding:7px 8px!important;}
      .v231-grid,.v231-map-grid{grid-template-columns:repeat(auto-fit,minmax(240px,1fr))!important;gap:8px!important;}
      .v231-card,.v231-media-card,.v231-map-node{padding:9px!important;border-radius:15px!important;}
      .v231-media-box{min-height:86px!important;padding:6px!important;}
      .v231-media-box img{max-height:150px!important;}
      .v231-media-box video{max-height:150px!important;}
      .v231-media-box audio{min-height:36px!important;}

      /* Boutons visibles, sans couvrir le contenu */
      .v231-actions{gap:5px!important;}
      .v231-btn{padding:6px 10px!important;font-size:.82rem!important;box-shadow:none!important;white-space:nowrap!important;}
      .v231-btn.edit{background:#5b21b6!important;color:#fff!important;}
      .v231-btn.add{background:#7c3aed!important;color:#fff!important;}
      .v231-btn.danger{background:#fff!important;color:#b91c1c!important;border:1px solid rgba(185,28,28,.28)!important;}
      .v231-empty{padding:8px!important;font-size:.88rem!important;}

      /* Fenêtre de modification accessible et scrollable */
      .v231-modal{align-items:start!important;place-items:start center!important;overflow-y:auto!important;padding:18px 12px 32px!important;}
      .v231-modal-card{max-height:none!important;min-height:0!important;overflow:visible!important;width:min(760px,100%)!important;margin:0 auto!important;}
      .v231-modal form{display:grid!important;gap:10px!important;}
      .v231-modal-head{position:sticky!important;top:0!important;border-radius:21px 21px 0 0!important;}
      .v231-field textarea{min-height:86px!important;max-height:280px!important;overflow:auto!important;}

      /* Espace élève encore plus minimisé sans casser l'affichage */
      .v87-student-shell{padding:4px!important;}
      .v87-student-topbar{max-width:820px!important;padding:5px 8px!important;margin-bottom:4px!important;}
      .v87-student-main,.v87-student-page,.student-page,.unit-page{max-width:820px!important;padding:4px 6px!important;}
      .v87-student-main .panel,.v87-student-main section.panel,.content-card,.visual-panel,.audio-panel,.kine-panel{padding:7px!important;margin-bottom:6px!important;border-radius:13px!important;}
      .v87-student-main h1{font-size:1.18rem!important;}
      .v87-student-main h2{font-size:1.04rem!important;}
      .v87-student-main h3{font-size:.96rem!important;}
      .v87-student-main p,.v87-student-main li{font-size:.9rem!important;line-height:1.36!important;}
      .v87-student-main img{max-height:145px!important;}

      @media(max-width:900px){
        .v176-dashboard{grid-template-columns:1fr 1fr!important;}
        .v232-steps{grid-template-columns:1fr 1fr!important;}
        .v231-toolbar{grid-template-columns:1fr!important;}
        .v231-toolbar::after{border-radius:12px;text-align:center;}
      }
      @media(max-width:560px){
        .v176-dashboard,.v232-steps,.v231-grid,.v231-map-grid{grid-template-columns:1fr!important;}
        .v87-teacher-shell{padding:6px!important;}
        .v231-modifier{padding:7px!important;border-radius:18px!important;}
      }
    `;
    document.head.appendChild(st);
  }

  function addHelp(panel){
    if(!panel || $('.v232-modifier-help', panel)) return;
    const modifier = $('.v231-modifier', panel);
    if(!modifier) return;
    const help = document.createElement('section');
    help.className = 'v232-modifier-help';
    help.innerHTML = `
      <div class="v232-help-title"><strong>Modifier contenu — organisation finale</strong><span>Affichage élève + actions</span></div>
      <div class="v232-steps">
        <div class="v232-step"><b>1</b>Choisis l’unité dans la liste.</div>
        <div class="v232-step"><b>2</b>Clique sur <strong>Modifier</strong> pour ouvrir le texte.</div>
        <div class="v232-step"><b>3</b>Chaque style affiche images, audios et exercices.</div>
        <div class="v232-step"><b>4</b>Utilise <strong>Ajouter</strong> ou <strong>Supprimer</strong> sur chaque bloc.</div>
      </div>`;
    const toolbar = $('.v231-toolbar', modifier);
    if(toolbar) toolbar.insertAdjacentElement('afterend', help);
    else modifier.prepend(help);
  }

  function forceVisible(){
    const panel = $('[data-v176-panel="modify"]');
    if(!panel) { document.body.classList.remove('v232-modifier-open'); return; }
    document.body.classList.add('v232-modifier-open');
    addHelp(panel);
    // Enlever les hauteurs héritées qui bloquent souvent la lecture de la page.
    [document.documentElement, document.body, $('#app'), $('.v87-teacher-shell'), $('.v176-teacher-page'), panel, $('.v231-modifier', panel)].forEach(el => {
      if(!el) return;
      el.style.height = 'auto';
      el.style.maxHeight = 'none';
      el.style.overflowY = el === document.body || el === document.documentElement ? 'auto' : 'visible';
      el.style.overflowX = 'hidden';
    });
  }

  function start(){
    injectCss();
    setTimeout(forceVisible, 500);
    document.addEventListener('click', function(e){
      const dash = e.target.closest && e.target.closest('[data-v176-dashboard]');
      if(dash && dash.dataset.v176Dashboard === 'modify'){
        setTimeout(() => { forceVisible(); window.scrollTo({top:0, behavior:'smooth'}); }, 700);
      }
      if(e.target.closest && (e.target.closest('[data-v231-add]') || e.target.closest('[data-v231-edit]') || e.target.closest('[data-v231-del]'))){
        setTimeout(forceVisible, 250);
      }
    }, true);
    document.addEventListener('change', function(e){
      if(e.target.closest && e.target.closest('[data-v231-unit-select]')) setTimeout(forceVisible, 250);
    }, true);
    try{
      new MutationObserver(function(){ setTimeout(forceVisible, 80); }).observe(document.body, {childList:true, subtree:true});
    }catch(e){}
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
