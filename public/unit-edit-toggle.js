/* =========================================================
   ÉPI v225 — Bouton clair : Afficher / Modifier
   - Ne touche pas à Ajouter unité.
   - Dans Modifier unité :
     * Afficher l’unité : montre le contenu réel.
     * Modifier le contenu : montre le formulaire.
========================================================= */
(function(){
  'use strict';

  function q(sel, root){ return (root || document).querySelector(sel); }
  function qa(sel, root){ return Array.from((root || document).querySelectorAll(sel)); }

  function ensureDisplayControls(){
    const modify = q('[data-v224-modify]');
    const main = q('[data-v224-content]');
    if(!modify || !main) return;

    if(q('[data-v225-display-controls]', modify)) return;

    const preview = q('[data-v224-preview]', main);
    const forms = q('[data-v224-edit-forms]', main);
    if(!preview || !forms) return;

    const bar = document.createElement('div');
    bar.className = 'v225-display-controls';
    bar.setAttribute('data-v225-display-controls','1');
    bar.innerHTML = `
      <button type="button" class="active" data-v225-show="preview">Afficher l’unité</button>
      <button type="button" data-v225-show="forms">Modifier le contenu</button>
      <button type="button" data-v225-show="both">Afficher + modifier</button>
    `;

    main.insertBefore(bar, main.firstChild);
    showMode('preview');
  }

  function showMode(mode){
    const main = q('[data-v224-content]');
    if(!main) return;

    const preview = q('[data-v224-preview]', main);
    const forms = q('[data-v224-edit-forms]', main);
    if(!preview || !forms) return;

    if(mode === 'preview'){
      preview.hidden = false;
      forms.hidden = true;
    }else if(mode === 'forms'){
      preview.hidden = true;
      forms.hidden = false;
    }else{
      preview.hidden = false;
      forms.hidden = false;
    }

    qa('[data-v225-show]', main).forEach(btn => {
      btn.classList.toggle('active', btn.dataset.v225Show === mode);
    });
  }

  function injectCss(){
    if(q('#v225-style')) return;
    const st = document.createElement('style');
    st.id = 'v225-style';
    st.textContent = `
      .v225-display-controls{
        position:sticky;
        top:10px;
        z-index:20;
        display:flex;
        gap:10px;
        flex-wrap:wrap;
        align-items:center;
        background:rgba(255,255,255,.96);
        border:1px solid rgba(15,23,42,.10);
        border-radius:22px;
        padding:12px;
        box-shadow:0 12px 30px rgba(15,23,42,.10);
        backdrop-filter:blur(10px);
      }
      .v225-display-controls button{
        border:1px solid rgba(37,99,235,.18);
        background:#fff;
        color:#1d4ed8;
        border-radius:999px;
        padding:10px 16px;
        cursor:pointer;
        font-weight:900;
      }
      .v225-display-controls button.active{
        background:#2563eb;
        color:white;
        border-color:#2563eb;
        box-shadow:0 10px 22px rgba(37,99,235,.22);
      }
      [data-v224-preview][hidden],
      [data-v224-edit-forms][hidden]{
        display:none!important;
      }
    `;
    document.head.appendChild(st);
  }

  function start(){
    injectCss();
    setTimeout(ensureDisplayControls, 150);
    try{
      new MutationObserver(function(){ setTimeout(ensureDisplayControls, 80); })
        .observe(document.body, {childList:true, subtree:true});
    }catch(e){}
  }

  document.addEventListener('click', function(e){
    const btn = e.target.closest && e.target.closest('[data-v225-show]');
    if(btn){
      e.preventDefault();
      showMode(btn.dataset.v225Show || 'preview');
      return;
    }

    const unitBtn = e.target.closest && e.target.closest('[data-v224-unit]');
    if(unitBtn){
      setTimeout(function(){
        ensureDisplayControls();
        showMode('preview');
      }, 160);
    }

    const dash = e.target.closest && e.target.closest('[data-v176-dashboard]');
    if(dash && dash.dataset.v176Dashboard === 'modify'){
      setTimeout(function(){
        ensureDisplayControls();
        showMode('preview');
      }, 250);
    }
  }, true);

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();

  window.EPI_V225_DISPLAY = {ensureDisplayControls, showMode};
})();