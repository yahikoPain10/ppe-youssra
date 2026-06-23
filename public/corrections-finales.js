/* =========================================================
   ÉPI — Corrections finales demandées
   - images élève affichées clairement une après l'autre ;
   - jeu raccourcis sans tableau de résumé ;
   - bloc raccourcis placé après dictionnaire ;
   - bouton Modifier unité rendu robuste.
========================================================= */
(function(){
  'use strict';

  const STYLE_ID = 'epi-final-corrections-css';
  let suppressModifyScrollUntil = 0;
  let scrollPatchInstalled = false;

  function $(sel, root){ return (root || document).querySelector(sel); }
  function $$(sel, root){ return Array.from((root || document).querySelectorAll(sel)); }

  function injectCss(){
    if(document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
/* Images élève : une image lisible par ligne */
.v236-unit-page .visual-gallery,
.v242-unit-page .visual-gallery,
.v244-current-style .visual-gallery,
.v244-current-style .image-only-grid,
.v244-current-style .clickable-visual-grid,
.visual-panel .visual-gallery,
.visual-panel .image-only-grid,
.visual-panel .clickable-visual-grid,
.v148-gallery,
.v154-gallery,
.v102-visual-gallery,
.v103-visual-gallery{
  display:grid!important;
  grid-template-columns:1fr!important;
  gap:18px!important;
  width:100%!important;
}
.visual-panel .media-card,
.visual-panel figure,
.v208-visual-card,
.v148-gallery > *,
.v154-gallery > *,
.v102-visual-gallery > *,
.v103-visual-gallery > *{
  width:100%!important;
  max-width:980px!important;
  margin-left:auto!important;
  margin-right:auto!important;
}
.visual-panel img,
.visual-panel .v208-media-image,
.visual-panel .visual-click-zone img,
.visual-panel .v210-visual-click-zone img,
.v244-current-style img,
.v244-current-style .v208-media-image{
  display:block!important;
  width:auto!important;
  max-width:100%!important;
  max-height:520px!important;
  object-fit:contain!important;
  margin:0 auto!important;
  border-radius:16px!important;
}
.visual-panel video,
.visual-panel .v208-media-video{
  display:block!important;
  width:100%!important;
  max-height:520px!important;
  object-fit:contain!important;
  margin:0 auto!important;
  border-radius:16px!important;
}

/* Jeu raccourcis : garder uniquement le jeu, pas la banque/tableau résumé */
.v242-shortcuts-page .v242-bank,
.v242-shortcuts-page .v242-table-wrap{
  display:none!important;
}
.v242-shortcuts-head p{
  display:none!important;
}

/* Raccourcis dans l'espace professeur : section distincte après dictionnaire */
.v243-shortcuts-add-card,
.v243-shortcuts-editor{
  border:2px solid rgba(109,40,217,.22)!important;
  box-shadow:0 12px 28px rgba(76,29,149,.08)!important;
}
.epi-single-back{
  display:inline-flex!important;
  align-items:center!important;
  justify-content:center!important;
  border:1px solid rgba(109,40,217,.28)!important;
  background:#fff!important;
  color:#4c1d95!important;
  border-radius:999px!important;
  padding:8px 13px!important;
  font-weight:1000!important;
  cursor:pointer!important;
  order:2!important;
}
.epi-back-duplicate-hidden{
  display:none!important;
  visibility:hidden!important;
  pointer-events:none!important;
}
.epi-back-marker{
  display:none!important;
  visibility:hidden!important;
  pointer-events:none!important;
  width:0!important;
  height:0!important;
  overflow:hidden!important;
}
[data-v176-panel="modify"] button[data-v238-back-dashboard]:not(.epi-single-back),
[data-v176-panel="modify"] button[data-v239-back-dashboard]:not(.epi-single-back),
[data-v176-panel="modify"] button[data-v240-back-dashboard]:not(.epi-single-back),
[data-v176-panel="modify"] button[data-v244-back-dashboard]:not(.epi-single-back){
  display:none!important;
  visibility:hidden!important;
  pointer-events:none!important;
}
.epi-mindmap-form-card{
  display:grid!important;
  gap:10px!important;
  padding:12px!important;
  border:2px solid rgba(124,58,237,.18)!important;
  border-radius:18px!important;
  background:#fff!important;
  box-shadow:0 10px 24px rgba(76,29,149,.08)!important;
}
.epi-mindmap-form-head{
  align-items:center!important;
  background:transparent!important;
  padding:0!important;
}
.epi-mindmap-form-head strong{
  color:#3b0764!important;
  font-size:1rem!important;
}
.epi-mindmap-form-head .v172-delete{
  width:32px!important;
  height:32px!important;
  border-radius:999px!important;
  display:grid!important;
  place-items:center!important;
  background:#f3e8ff!important;
  color:#6d28d9!important;
  border:0!important;
  font-size:1.2rem!important;
}
.epi-mindmap-form-card .v172-field{
  display:grid!important;
  gap:6px!important;
}
.epi-mindmap-form-card .v172-field span{
  color:#4c1d95!important;
  font-weight:1000!important;
}
.epi-mindmap-form-card input,
.epi-mindmap-form-card textarea{
  border:1px solid #d7ddea!important;
  border-radius:14px!important;
  padding:10px 12px!important;
}
.epi-mindmap-form-actions{
  justify-content:flex-end!important;
  padding-top:0!important;
}
.v176-dashboard{grid-template-columns:repeat(auto-fit,minmax(190px,1fr))!important;}
[data-v176-panel="modify"] [data-v176-save-modify],
[data-v176-panel="modify"] [data-v235-save],
[data-v176-panel="modify"] [data-v233-save],
[data-v176-panel="modify"] [data-v231-save]{white-space:nowrap!important;}
[data-v176-panel="modify"]{
  overflow:visible!important;
  scroll-margin-top:0!important;
  contain:layout!important;
}
[data-v176-panel="modify"] .v176-form-card,
[data-v176-panel="modify"] .v176-unit-edit-card,
[data-v176-panel="modify"] .v235-editor{
  max-width:1180px!important;
  margin-left:auto!important;
  margin-right:auto!important;
  transform:none!important;
  transition:none!important;
}
[data-v176-panel="modify"] .v172-actions,
[data-v176-panel="modify"] .v235-toolbar,
[data-v176-panel="modify"] .v233-toolbar,
[data-v176-panel="modify"] .v231-toolbar{
  position:relative!important;
  top:auto!important;
  display:flex!important;
  align-items:center!important;
  flex-wrap:wrap!important;
  gap:10px!important;
  min-height:44px!important;
  transform:none!important;
  transition:none!important;
}
[data-v176-panel="modify"] .v179-section-buttons{
  position:relative!important;
  top:auto!important;
  display:flex!important;
  flex-wrap:wrap!important;
  transform:none!important;
  transition:none!important;
}
[data-v176-panel="modify"] .v176-add-section,
[data-v176-panel="modify"] .v179-mod-section,
[data-v176-panel="modify"] .v235-section{
  transform:none!important;
  transition:none!important;
  scroll-margin-top:12px!important;
}
[data-v176-panel="modify"] *{scroll-behavior:auto!important;}
[data-v176-panel="modify"] .epi-modify-top-actions{
  min-height:48px!important;
  padding:8px 0!important;
  border:0!important;
  background:transparent!important;
}
.v176-dash-card:hover,
.v176-dash-card.active{transform:none!important;}
.epi-save-unit-top{
  background:linear-gradient(135deg,#16a34a,#22c55e)!important;
  color:#fff!important;
  border:0!important;
  box-shadow:0 10px 22px rgba(22,163,74,.18)!important;
}
.v242-shortcuts-page{
  gap:16px!important;
  max-width:1040px!important;
  margin:0 auto!important;
}
.v242-shortcuts-head{
  border:0!important;
  border-radius:24px!important;
  padding:18px!important;
  background:linear-gradient(135deg,#4c1d95,#7c3aed)!important;
  color:#fff!important;
  box-shadow:0 18px 40px rgba(76,29,149,.18)!important;
}
.v242-shortcuts-head h2{color:#fff!important;font-size:1.35rem!important;}
.v242-shortcuts-head .mini-pill{background:rgba(255,255,255,.18)!important;color:#fff!important;}
.v242-game{
  display:grid!important;
  grid-template-columns:repeat(auto-fit,minmax(280px,1fr))!important;
  gap:14px!important;
}
.v242-question{
  border:1px solid rgba(124,58,237,.14)!important;
  border-radius:22px!important;
  padding:16px!important;
  box-shadow:0 14px 32px rgba(49,25,90,.08)!important;
  background:linear-gradient(180deg,#fff,#fbf7ff)!important;
}
.v242-question-head span{
  background:#ede9fe!important;
  color:#5b21b6!important;
  border-radius:999px!important;
  padding:5px 9px!important;
}
.v242-choice{
  min-width:92px!important;
  border-radius:14px!important;
  padding:9px 14px!important;
}
.v242-actions{
  border-radius:20px!important;
  box-shadow:0 14px 30px rgba(49,25,90,.10)!important;
}
`;
    document.head.appendChild(style);
  }

  function inModifyPanel(node){
    return !!(node && node.closest && node.closest('[data-v176-panel="modify"]'));
  }

  function startModifyStabilization(duration){
    suppressModifyScrollUntil = Math.max(suppressModifyScrollUntil, Date.now() + (duration || 1800));
    setTimeout(cleanupBackButtons, 20);
    setTimeout(cleanupBackButtons, 120);
    setTimeout(cleanupBackButtons, 420);
    setTimeout(cleanupBackButtons, 900);
  }

  function installScrollPatch(){
    if(scrollPatchInstalled || !window.Element || !window.Element.prototype) return;
    const original = window.Element.prototype.scrollIntoView;
    if(typeof original !== 'function') return;
    scrollPatchInstalled = true;
    window.Element.prototype.scrollIntoView = function(arg){
      try{
        if(Date.now() < suppressModifyScrollUntil && $('[data-v176-panel="modify"]')){
          return;
        }
        if(inModifyPanel(this) && arg && typeof arg === 'object' && arg.behavior === 'smooth'){
          return original.call(this, Object.assign({}, arg, {behavior:'auto'}));
        }
      }catch(e){}
      return original.apply(this, arguments);
    };
  }

  function moveAfter(node, target){
    if(!node || !target || !target.parentNode) return false;
    if(target.nextSibling === node) return true;
    target.parentNode.insertBefore(node, target.nextSibling);
    return true;
  }

  function normalizeShortcutPlacement(){
    const addPanel = $('[data-v176-panel="add"]');
    if(addPanel){
      const cards = $$('[data-v243-add-shortcuts]', addPanel);
      const card = cards[0];
      cards.slice(1).forEach(node => node.remove());
      const dictionary = $('[data-v179-add-section="dictionary"]', addPanel);
      if(card && dictionary && card.parentNode !== dictionary) dictionary.appendChild(card);
    }

    const modifyPanel = $('[data-v176-panel="modify"]');
    if(modifyPanel){
      const editors = $$('[data-v243-shortcut-editor]', modifyPanel);
      const editor = editors[0];
      editors.slice(1).forEach(node => node.remove());
      const dictionarySection = $('[data-v179-mod-section="dictionary"]', modifyPanel);
      if(editor && dictionarySection && editor.parentNode !== dictionarySection){
        dictionarySection.appendChild(editor);
        return;
      }
      const body = $('.v235-body', modifyPanel);
      if(editor && body){
        const sections = $$('.v235-section', body);
        const dictionary = sections.find(section => {
          const h = $('h3', section);
          return h && /dictionnaire/i.test(h.textContent || '');
        });
        if(dictionary) moveAfter(editor, dictionary);
      }
    }
  }

  function ensureShortcutGameOnly(){
    $$('.v242-shortcuts-page .v242-bank').forEach(el => el.remove());
  }

  function reorderStudentSelector(){
    const select = $('[data-v242-unit-part], #v242UnitPartSelect');
    if(!select) return;
    const shortcuts = Array.from(select.options).find(o => o.value === 'shortcuts');
    const dictionary = Array.from(select.options).find(o => o.value === 'dictionary');
    if(shortcuts && dictionary && dictionary.nextSibling !== shortcuts){
      select.insertBefore(shortcuts, dictionary.nextSibling);
    }
  }

  function unitById(id){
    try{ return (Array.isArray(window.UNITS) ? window.UNITS : []).find(u => String(u && u.id) === String(id)) || null; }catch(e){ return null; }
  }
  function teacherUsers(){
    try{
      const rows = JSON.parse(localStorage.getItem('epi_teacher_added_users') || '[]');
      return Array.isArray(rows) ? rows.filter(u => u && (u.nom || u.prenom)) : [];
    }catch(e){ return []; }
  }
  function syncStudentAuthOptions(){
    const selects = $$('[name="studentFullName"]');
    if(!selects.length) return;
    const users = teacherUsers();
    const safe = v => String(v == null ? '' : v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    const options = users.length
      ? users.map(u => `<option value="${safe((u.nom || '') + ' ' + (u.prenom || ''))}">${safe((u.nom || '') + ' ' + (u.prenom || ''))}</option>`).join('')
      : '<option value="">Aucun utilisateur ajouté par le professeur</option>';
    selects.forEach(select => { select.innerHTML = options; });
  }
  function visibleUnits(){
    try{ return (Array.isArray(window.UNITS) ? window.UNITS : []).filter(u => u && u.id && u.hiddenFromStudent !== true); }catch(e){ return []; }
  }
  function currentModifyUnitId(){
    return ($('[data-v235-select]') && $('[data-v235-select]').value) || ($('#v172UnitSelect') && $('#v172UnitSelect').value) || (visibleUnits()[0] && visibleUnits()[0].id) || '';
  }
  function defaultShortcutRows(){
    return [
      {shortcut:'Ctrl + C', action:'Copier l’élément sélectionné'},
      {shortcut:'Ctrl + V', action:'Coller l’élément copié'},
      {shortcut:'Ctrl + X', action:'Couper l’élément sélectionné'},
      {shortcut:'Ctrl + Z', action:'Annuler la dernière action'},
      {shortcut:'Ctrl + A', action:'Tout sélectionner'},
      {shortcut:'Ctrl + S', action:'Enregistrer le travail'},
      {shortcut:'Ctrl + P', action:'Imprimer'},
      {shortcut:'Alt + Tab', action:'Changer de fenêtre'}
    ];
  }
  function shortcutRowsForUnit(id){
    const unit = unitById(id);
    try{
      if(window.EPI_V243_SHORTCUTS && typeof window.EPI_V243_SHORTCUTS.getForUnit === 'function'){
        const rows = window.EPI_V243_SHORTCUTS.getForUnit(unit) || [];
        const configured = typeof window.EPI_V243_SHORTCUTS.isConfigured === 'function' && window.EPI_V243_SHORTCUTS.isConfigured(unit);
        if(configured) return rows;
        if(Array.isArray(rows) && rows.length) return rows;
      }
    }catch(e){}
    if(unit && (unit.customUnit === true || /^custom_/i.test(String(id || unit.id || '')))) return [];
    return defaultShortcutRows();
  }
  function shortcutRowHtml(row){
    const safe = v => String(v == null ? '' : v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    return `<article class="v235-card v243-row" data-v243-row>
      <input data-v243-shortcut value="${safe(row.shortcut || '')}" placeholder="Ex. Ctrl + V">
      <textarea data-v243-action placeholder="Ex. Coller l’élément copié">${safe(row.action || '')}</textarea>
      <button type="button" class="v235-btn danger" data-v243-delete-row>Supprimer</button>
    </article>`;
  }
  function ensureTrueFalseInModify(){
    const panel = $('[data-v176-panel="modify"]');
    if(!panel) return;
    const id = currentModifyUnitId();
    const existing = $('[data-v243-shortcut-editor]', panel);
    if(existing){
      if(String(existing.getAttribute('data-unit-id') || '') === String(id)){
        normalizeShortcutPlacement();
        return;
      }
      existing.remove();
    }
    const rows = shortcutRowsForUnit(id);
    const section = document.createElement('section');
    section.className = 'v235-section v243-shortcuts-editor v176-add-section';
    section.setAttribute('data-v243-shortcut-editor','1');
    section.setAttribute('data-unit-id', id);
    section.innerHTML = `
      <div class="v235-section-head">
        <h3>Raccourcis clavier — jeu Vrai/Faux</h3>
        <div class="v243-toolbar">
          <button type="button" class="v235-btn add" data-v243-add-row>+ Ajouter raccourci</button>
          <button type="button" class="v235-btn save" data-v243-save-shortcuts>Enregistrer raccourcis</button>
          <span class="v243-save-state" data-v243-save-state></span>
        </div>
      </div>
      <div class="v243-empty-note">Ces raccourcis alimentent le jeu Vrai/Faux de l’espace élève pour cette unité.</div>
      <div class="v235-grid" data-v243-list>${rows.map(shortcutRowHtml).join('')}</div>`;
    const dictionaryPanel = $('[data-v179-mod-section="dictionary"]', panel);
    if(dictionaryPanel) dictionaryPanel.appendChild(section);
    else{
      const body = $('.v235-body', panel);
      if(!body) return;
      const dictionary = $$('.v235-section', body).find(sectionNode => /dictionnaire/i.test((sectionNode.querySelector('h3') || sectionNode).textContent || ''));
      if(dictionary) moveAfter(section, dictionary);
      else body.appendChild(section);
    }
  }
  function ensureTrueFalseInAdd(){
    const panel = $('[data-v176-panel="add"]');
    if(!panel) return;
    const cards = $$('[data-v243-add-shortcuts]', panel);
    let card = cards[0] || null;
    cards.slice(1).forEach(node => node.remove());
    const dictionary = $('[data-v179-add-section="dictionary"]', panel);
    const actions = $('.v194-wizard-actions', panel) || $('.v172-actions', panel);
    if(!card && dictionary){
      card = document.createElement('section');
      card.className = 'v243-shortcuts-add-card';
      card.setAttribute('data-v243-add-shortcuts','1');
      card.innerHTML = `<div><span class="mini-pill">Jeu Vrai/Faux</span><h3>Raccourcis clavier — jeu Vrai/Faux</h3></div>
        <p>Ajoute les raccourcis utiles. Le jeu Vrai/Faux sera construit automatiquement dans l’espace élève.</p>
        <label class="v172-field"><span>Format : Ctrl + V || Coller</span><textarea id="v243NewShortcuts" placeholder="Ctrl + C || Copier&#10;Ctrl + V || Coller"></textarea></label>`;
      dictionary.appendChild(card);
    }
    if(card && dictionary && card.parentNode !== dictionary) dictionary.appendChild(card);
    if(card && !dictionary && actions && card.parentNode !== actions.parentNode) actions.parentNode.insertBefore(card, actions);
  }
  function cleanupBackButtons(){
    const panel = $('[data-v176-panel="modify"]');
    if(!panel) return;
    const buttons = $$('button', panel);
    const candidates = buttons.filter(btn => {
      const text = (btn.textContent || '').toLowerCase();
      return btn.hasAttribute('data-v244-back-dashboard') ||
        btn.hasAttribute('data-v240-back-dashboard') ||
        btn.hasAttribute('data-v239-back-dashboard') ||
        btn.hasAttribute('data-v238-back-dashboard') ||
        btn.hasAttribute('data-epi-single-back') ||
        /revenir au tableau de bord|retour au tableau de bord|revenir en arrière/.test(text);
    });
    let keep = candidates.find(btn => btn.hasAttribute('data-epi-single-back')) ||
      candidates.find(btn => btn.hasAttribute('data-v244-back-dashboard')) ||
      candidates.find(btn => btn.hasAttribute('data-v240-back-dashboard')) ||
      candidates[0] || null;
    if(!keep){
      keep = document.createElement('button');
      keep.type = 'button';
    }
    keep.type = 'button';
    keep.textContent = 'Revenir en arrière';
    keep.className = 'btn secondary epi-single-back';
    keep.setAttribute('data-epi-single-back','1');
    keep.setAttribute('data-v176-dashboard','home');
    keep.removeAttribute('data-v244-back-dashboard');
    keep.removeAttribute('data-v240-back-dashboard');
    keep.removeAttribute('data-v239-back-dashboard');
    keep.removeAttribute('data-v238-back-dashboard');
    candidates.forEach(btn => {
      if(btn === keep) return;
      btn.classList.add('epi-back-duplicate-hidden');
      btn.remove();
    });
    const save = $('[data-v235-save], [data-v176-save-modify], [data-v233-save], [data-v231-save]', panel);
    const row = save && save.closest('.v235-toolbar,.v172-actions,.v233-toolbar,.v231-toolbar');
    if(row){
      if(keep.parentNode !== row) row.insertBefore(keep, save);
      else if(save && keep.nextElementSibling !== save) row.insertBefore(keep, save);
      ensureBackMarkers(row);
    }else if(!keep.parentNode){
      const top = $('.epi-modify-top-actions', panel) || $('.v172-actions', panel) || panel;
      if(top === panel) panel.insertBefore(keep, panel.firstChild);
      else top.insertBefore(keep, top.firstElementChild || null);
      ensureBackMarkers(top === panel ? panel : top);
    }
  }

  function ensureBackMarkers(root){
    if(!root) return;
    let marker = $('[data-epi-back-marker]', root);
    if(!marker){
      marker = document.createElement('span');
      marker.className = 'epi-back-marker';
      marker.setAttribute('data-epi-back-marker','1');
      marker.setAttribute('aria-hidden','true');
      root.appendChild(marker);
    }
    marker.setAttribute('data-v244-back-dashboard','1');
    marker.setAttribute('data-v240-back-dashboard','1');
    marker.setAttribute('data-v239-back-dashboard','1');
    marker.setAttribute('data-v238-back-dashboard','1');
  }
  function cleanupModifySaveButtons(){
    const panel = $('[data-v176-panel="modify"]');
    if(!panel) return;
    const saves = $$('[data-v235-save], [data-v176-save-modify], [data-v233-save], [data-v231-save]', panel);
    if(!saves.length) return;
    const keep = saves.find(btn => btn.closest('.v235-toolbar,.v233-toolbar,.v231-toolbar')) || saves[0];
    keep.textContent = 'Enregistrer unité';
    keep.classList.add('epi-save-unit-top');
    saves.forEach(btn => { if(btn !== keep) btn.remove(); });

    let top = keep.closest('.v235-toolbar,.v233-toolbar,.v231-toolbar');
    if(!top){
      top = document.createElement('div');
      top.className = 'v172-actions epi-modify-top-actions';
      const card = $('.v176-form-card', panel) || panel;
      card.insertBefore(top, card.firstElementChild || null);
    }
    if(keep.parentNode !== top) top.insertBefore(keep, top.firstElementChild || null);
  }

  function openTeacherPanel(panelName){
    let panel = $(`[data-v176-panel="${panelName}"]`);
    if(!panel && window.EPI_TEACHER_DASHBOARD && typeof window.EPI_TEACHER_DASHBOARD.open === 'function'){
      window.EPI_TEACHER_DASHBOARD.open(panelName, null, panelName === 'modify' ? 'subtitles' : undefined);
      panel = $(`[data-v176-panel="${panelName}"]`);
    }
    if(!panel) return;
    $$('.v176-panel').forEach(p => {
      p.style.display = p === panel ? 'block' : 'none';
      if(p === panel){
        p.hidden = false;
        p.style.maxHeight = 'none';
        p.style.overflow = 'visible';
      }
    });
    $$('.v176-dash-card').forEach(card => {
      card.classList.toggle('active', card.getAttribute('data-v176-dashboard') === panelName);
    });
    if(panelName === 'modify'){
      startModifyStabilization(2200);
      const hasEditor = $('[data-v235-editor], .v235-editor, .v176-unit-edit-card', panel);
      if(!hasEditor){
        if(window.EPI_TEACHER_DASHBOARD && typeof window.EPI_TEACHER_DASHBOARD.open === 'function'){
          window.EPI_TEACHER_DASHBOARD.open('modify', null, 'subtitles');
          panel = $('[data-v176-panel="modify"]') || panel;
        }else{
          const current = $('[data-v176-dashboard="modify"]');
          if(current && !current.__epiFinalRetried){
            current.__epiFinalRetried = true;
            setTimeout(() => current.dispatchEvent(new MouseEvent('click', {bubbles:true, cancelable:true})), 40);
          }
        }
      }
      const editor = $('[data-v235-editor], .v235-editor, .v176-unit-edit-card', panel) || panel;
      setTimeout(() => {
        normalizeShortcutPlacement();
        cleanupBackButtons();
        try{
          if(Date.now() >= suppressModifyScrollUntil) editor.scrollIntoView({block:'start', behavior:'auto'});
        }catch(e){}
      }, 120);
    }
  }

  function openAccessPanel(){
    if(window.EPI_V216_ACCESS && typeof window.EPI_V216_ACCESS.renderAccessPanel === 'function'){
      window.EPI_V216_ACCESS.renderAccessPanel();
      const panel = $('#v216AccessPanel');
      if(panel){
        panel.hidden = false;
        panel.style.display = 'block';
        panel.style.maxHeight = 'none';
        panel.style.overflow = 'visible';
        try{ panel.scrollIntoView({block:'start', behavior:'smooth'}); }catch(e){}
      }
      return true;
    }
    return false;
  }

  function openTeacherAccess(){
    try{
      if(sessionStorage.getItem('epi_v212_teacher_unlocked') === '1'){
        if(window.EPI_TEACHER_DASHBOARD && typeof window.EPI_TEACHER_DASHBOARD.open === 'function'){
          window.EPI_TEACHER_DASHBOARD.open('home');
          return true;
        }
      }
    }catch(e){}
    if(typeof renderLogin === 'function'){
      renderLogin();
      setTimeout(function(){
        const input = $('#teacherPasswordInput') || $('#teacherHomeAccessForm input[name="password"]');
        if(input) input.focus();
      }, 50);
      return true;
    }
    if(typeof openTeacherArea === 'function'){
      openTeacherArea();
      return true;
    }
    return false;
  }

  function handleDirectOpen(e){
      const action = e.target.closest && e.target.closest('[data-action]');
      if(action && action.getAttribute('data-action') === 'teacher'){
        e.preventDefault();
        e.stopPropagation();
        if(e.stopImmediatePropagation) e.stopImmediatePropagation();
        openTeacherAccess();
        return;
      }

      const access = e.target.closest && e.target.closest('[data-v216-access-control]');
      if(access){
        e.preventDefault();
        e.stopPropagation();
        if(e.stopImmediatePropagation) e.stopImmediatePropagation();
        openAccessPanel();
        return;
      }

      const accessBack = e.target.closest && e.target.closest('[data-v216-dashboard-back]');
      if(accessBack && window.EPI_V216_ACCESS && typeof window.EPI_V216_ACCESS.closeAccessPanel === 'function'){
        e.preventDefault();
        e.stopPropagation();
        if(e.stopImmediatePropagation) e.stopImmediatePropagation();
        window.EPI_V216_ACCESS.closeAccessPanel();
        return;
      }

      const dash = e.target.closest && e.target.closest('[data-v176-dashboard]');
      if(dash){
        const name = dash.getAttribute('data-v176-dashboard');
        if(name === 'home'){
          e.preventDefault();
          e.stopPropagation();
          if(e.stopImmediatePropagation) e.stopImmediatePropagation();
          if(window.EPI_TEACHER_DASHBOARD && typeof window.EPI_TEACHER_DASHBOARD.open === 'function'){
            window.EPI_TEACHER_DASHBOARD.open('home');
          }
          return;
        }
        if(name === 'modify' || name === 'units' || name === 'addUser' || name === 'listUsers' || name === 'changePassword' || name === 'integrationFiles'){
          e.preventDefault();
          e.stopPropagation();
          if(e.stopImmediatePropagation) e.stopImmediatePropagation();
          if(name === 'modify') startModifyStabilization(2400);
          if(window.EPI_TEACHER_DASHBOARD && typeof window.EPI_TEACHER_DASHBOARD.open === 'function'){
            window.EPI_TEACHER_DASHBOARD.open(name, null, name === 'modify' ? 'subtitles' : undefined);
          }
          setTimeout(() => openTeacherPanel(name), 40);
          setTimeout(normalizeShortcutPlacement, 160);
          return;
        }
        if(name === 'add' || name === 'modify'){
          setTimeout(() => openTeacherPanel(name), 160);
          setTimeout(normalizeShortcutPlacement, 260);
          setTimeout(normalizeShortcutPlacement, 700);
        }
      }
  }

  function installEvents(){
    document.addEventListener('pointerdown', function(e){
      const target = e.target.closest && e.target.closest('[data-action="teacher"], [data-v216-access-control], [data-v176-dashboard="home"], [data-v176-dashboard="modify"], [data-v176-dashboard="units"], [data-v176-dashboard="addUser"], [data-v176-dashboard="listUsers"], [data-v176-dashboard="changePassword"], [data-v176-dashboard="integrationFiles"]');
      if(target) handleDirectOpen(e);
    }, true);

    document.addEventListener('click', handleDirectOpen, true);

    document.addEventListener('change', function(e){
      if(e.target && e.target.matches('[data-v235-select], [data-v242-unit-part], #v242UnitPartSelect')){
        setTimeout(refresh, 120);
      }
    }, true);
  }

  function refresh(){
    injectCss();
    installScrollPatch();
    normalizeShortcutPlacement();
    ensureTrueFalseInAdd();
    ensureTrueFalseInModify();
    cleanupModifySaveButtons();
    cleanupBackButtons();
    ensureShortcutGameOnly();
    reorderStudentSelector();
    syncStudentAuthOptions();
  }

  function install(){
    refresh();
    installEvents();
    try{
      new MutationObserver(function(){ setTimeout(refresh, 40); }).observe(document.documentElement, {childList:true, subtree:true});
    }catch(e){}
    setTimeout(refresh, 300);
    setTimeout(refresh, 900);
    setTimeout(refresh, 1800);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
})();
