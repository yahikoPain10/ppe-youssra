/* =========================================================
   ÉPI v243 — Emplacement des raccourcis clavier dans Ajouter/Modifier unité
   - Ajoute un bloc visible dans « Ajouter unité » pour saisir les raccourcis.
   - Ajoute un gestionnaire dans « Modifier unité » : ajouter / modifier / supprimer.
   - Les raccourcis sauvegardés alimentent le jeu Vrai/Faux de l’espace élève.
========================================================= */
(function(){
  'use strict';

  const STYLE_ID = 'v243-shortcuts-admin-style';
  const STORE_PREFIX = 'epi_v170_unit_content_';
  const SHORTCUT_PREFIX = 'epi_v243_shortcuts_';
  let pendingAdd = null;
  let observerBusy = false;

  function $(sel, root){ return (root || document).querySelector(sel); }
  function $$(sel, root){ return Array.from((root || document).querySelectorAll(sel)); }
  function H(value){
    return String(value == null ? '' : value).replace(/[&<>"']/g, function(m){
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]);
    });
  }
  function readJson(key, fallback){ try{ const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }catch(e){ return fallback; } }
  function writeJson(key, value){ try{ localStorage.setItem(key, JSON.stringify(value)); return true; }catch(e){ console.warn('Stockage raccourcis impossible', e); return false; } }
  function norm(value){ return String(value || '').trim(); }
  function cleanTitle(value){ return String(value || '').replace(/^\s*Unité\s*\d+\s*:\s*/i,'').trim(); }
  function allUnits(){ try{ return Array.isArray(window.UNITS) ? window.UNITS.filter(u => u && u.id && u.hiddenFromStudent !== true) : []; }catch(e){ return []; } }
  function unitById(id){ return allUnits().find(u => String(u.id) === String(id)) || null; }
  function currentEditUnitId(){
    return ($('[data-v235-select]') && $('[data-v235-select]').value) || ($('#v172UnitSelect') && $('#v172UnitSelect').value) || '';
  }

  const DEFAULT_ROWS = [];

  function defaultRowsForUnit(unit){
    return [];
  }

  function normalizeShortcutRows(rows){
    const out = [];
    const seen = new Set();
    (Array.isArray(rows) ? rows : []).forEach(function(r){
      let shortcut = '', action = '';
      if(Array.isArray(r)){ shortcut = r[0]; action = r[1]; }
      else if(r && typeof r === 'object'){
        shortcut = r.shortcut || r.key || r.keys || r.raccourci || '';
        action = r.action || r.function || r.role || r.answer || r.fonction || r.description || '';
      }
      shortcut = norm(shortcut); action = norm(action);
      if(!shortcut || !action) return;
      const k = shortcut.toLowerCase();
      if(seen.has(k)) return;
      seen.add(k);
      out.push({shortcut, action});
    });
    return out;
  }
  function parseShortcutText(text){
    return normalizeShortcutRows(String(text || '').split('\n').map(function(line){
      const s = line.trim();
      if(!s) return null;
      let parts = s.split(/\s*\|\|\s*/);
      if(parts.length < 2) parts = s.split(/\s+[–—-]\s+/);
      if(parts.length < 2) parts = s.split(/\s*:\s*/);
      return {shortcut: parts.shift(), action: parts.join(' - ')};
    }).filter(Boolean));
  }
  function formatShortcutText(rows){
    return normalizeShortcutRows(rows).map(r => r.shortcut + ' || ' + r.action).join('\n');
  }
  function signature(rows){
    return normalizeShortcutRows(rows).map(r => r.shortcut.toLowerCase() + '::' + r.action.toLowerCase()).join('|');
  }
  function isDefaultShortcutList(unit, rows){
    const sig = signature(rows);
    return !!sig && (sig === signature(DEFAULT_ROWS) || sig === signature(defaultRowsForUnit(unit)));
  }
  function contentForUnit(id){ return readJson(STORE_PREFIX + id, {}) || {}; }
  function saveShortcutRows(id, rows){
    id = String(id || '').trim();
    if(!id) return false;
    rows = normalizeShortcutRows(rows);
    writeJson(SHORTCUT_PREFIX + id, rows);
    const saved = contentForUnit(id);
    saved.shortcutItems = rows;
    saved.shortcuts = rows;
    saved.shortcutsConfigured = true;
    writeJson(STORE_PREFIX + id, saved);
    const unit = unitById(id);
    if(unit){ unit.shortcutItems = rows; unit.shortcuts = rows; unit.shortcutsConfigured = true; }
    return true;
  }
  function hasConfiguredShortcuts(unit){
    if(!unit) return false;
    const id = String(unit.id || '');
    if(id && localStorage.getItem(SHORTCUT_PREFIX + id) !== null) return true;
    const saved = contentForUnit(id);
    return saved.shortcutsConfigured === true || unit.shortcutsConfigured === true;
  }
  function rowsForUnit(unit){
    if(!unit) return [];
    const id = String(unit.id || '');
    const isCustom = unit.customUnit === true || /^custom_/i.test(id);
    const fromSpecial = normalizeShortcutRows(readJson(SHORTCUT_PREFIX + id, []));
    const saved = contentForUnit(id);
    const fromSaved = normalizeShortcutRows(saved.shortcutItems || saved.shortcuts || []);
    const fromUnit = normalizeShortcutRows(unit.shortcutItems || unit.shortcuts || []);
    if(isCustom){
      if(saved.shortcutsConfigured === true) return isDefaultShortcutList(unit, fromSaved) ? [] : fromSaved;
      if(unit.shortcutsConfigured === true) return isDefaultShortcutList(unit, fromUnit) ? [] : fromUnit;
      if(fromSaved.length && !isDefaultShortcutList(unit, fromSaved)) return fromSaved;
      if(fromUnit.length && !isDefaultShortcutList(unit, fromUnit)) return fromUnit;
      if(localStorage.getItem(SHORTCUT_PREFIX + id) !== null) return isDefaultShortcutList(unit, fromSpecial) ? [] : fromSpecial;
      return [];
    }
    if(localStorage.getItem(SHORTCUT_PREFIX + id) !== null) return fromSpecial;
    if(fromSpecial.length) return fromSpecial;
    if(saved.shortcutsConfigured === true) return fromSaved;
    if(fromSaved.length) return fromSaved;
    if(unit.shortcutsConfigured === true) return fromUnit;
    if(fromUnit.length) return fromUnit;
    return [];
  }

  window.EPI_V243_SHORTCUTS = {
    getForUnit: function(unit){ return rowsForUnit(unit); },
    isConfigured: function(unit){ return hasConfiguredShortcuts(unit); },
    saveForUnit: function(id, rows){ return saveShortcutRows(id, rows); },
    parse: parseShortcutText,
    format: formatShortcutText
  };

  function installCss(){
    if($("#" + STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
.v243-shortcuts-add-card{display:grid;gap:10px;margin:12px 0;padding:13px;border:1px solid rgba(124,58,237,.25);border-radius:18px;background:#fff;box-shadow:0 8px 20px rgba(76,29,149,.07)}
.v243-shortcuts-add-card h3{margin:0;color:#4c1d95;font-size:1rem}.v243-shortcuts-add-card p{margin:0;color:#64748b;font-size:.88rem;font-weight:750}.v243-shortcuts-add-card textarea{width:100%;box-sizing:border-box;min-height:150px;border:1px solid rgba(124,58,237,.24);border-radius:14px;padding:10px;font:inherit;resize:vertical;background:#fff;color:#0f172a}.v243-shortcuts-add-card code{background:#f5f3ff;border:1px solid #ddd6fe;border-radius:8px;padding:2px 6px;color:#4c1d95;font-weight:900}
.v243-shortcuts-editor .v235-grid{grid-template-columns:1fr!important}.v243-row{display:grid;grid-template-columns:180px 1fr auto;gap:8px;align-items:start}.v243-row input,.v243-row textarea{width:100%;box-sizing:border-box;border:1px solid rgba(124,58,237,.22);border-radius:12px;padding:8px 9px;font:inherit;background:#fff}.v243-row textarea{min-height:48px;resize:vertical}.v243-row .v235-btn{margin-top:0}.v243-toolbar{display:flex;gap:8px;align-items:center;flex-wrap:wrap}.v243-save-state{font-weight:950;color:#047857}.v243-empty-note{background:#fbf7ff;border:1px dashed #c4b5fd;border-radius:14px;padding:10px;color:#5b21b6;font-weight:900}
@media(max-width:760px){.v243-row{grid-template-columns:1fr}.v243-row .v235-btn{width:100%}}
    `;
    document.head.appendChild(style);
  }

  function injectAddSection(){
    const panel = $('[data-v176-panel="add"]');
    if(!panel || $('[data-v243-add-shortcuts]', panel)) return;
    const actions = $('.v194-wizard-actions', panel) || $('.v172-actions', panel);
    if(!actions) return;
    const card = document.createElement('section');
    card.className = 'v243-shortcuts-add-card';
    card.setAttribute('data-v243-add-shortcuts','1');
    card.innerHTML = `
      <div><span class="mini-pill">Jeu raccourcis</span><h3>Raccourcis clavier — jeu Vrai/Faux</h3></div>
      <p>Ajoute seulement les raccourcis que tu veux afficher. Aucun raccourci n’est ajouté automatiquement.</p>
      <label class="v172-field"><span>Format : <code>Ctrl + V || Coller</code></span><textarea id="v243NewShortcuts" placeholder="Ctrl + C || Copier\nCtrl + V || Coller\nCtrl + Z || Annuler"></textarea></label>
    `;
    actions.parentNode.insertBefore(card, actions);
  }

  function cachePendingAdd(){
    const ta = $('#v243NewShortcuts');
    if(!ta) return;
    const title = ($('#v176NewUnitTitle') && $('#v176NewUnitTitle').value) || ($('#v175NewUnitTitle') && $('#v175NewUnitTitle').value) || '';
    pendingAdd = {title: cleanTitle(title), rows: parseShortcutText(ta.value), time: Date.now()};
  }
  function applyPendingAdd(){
    if(!pendingAdd) return;
    const targetTitle = cleanTitle(pendingAdd.title).toLowerCase();
    if(!targetTitle) return;
    const candidates = allUnits().filter(function(u){ return cleanTitle(u.title).toLowerCase() === targetTitle; });
    let unit = candidates[candidates.length - 1] || null;
    if(!unit){
      unit = allUnits().filter(u => String(u.id || '').indexOf('custom_') === 0).sort((a,b) => String(a.id).localeCompare(String(b.id))).pop() || null;
    }
    if(unit){ saveShortcutRows(unit.id, pendingAdd.rows); pendingAdd = null; }
  }

  function shortcutRowHtml(row, index){
    row = row || {};
    return `<article class="v235-card v243-row" data-v243-row>
      <input data-v243-shortcut value="${H(row.shortcut || '')}" placeholder="Ex. Ctrl + V">
      <textarea data-v243-action placeholder="Ex. Coller l’élément copié">${H(row.action || '')}</textarea>
      <button type="button" class="v235-btn danger" data-v243-delete-row>Supprimer</button>
    </article>`;
  }
  function collectEditorRows(section){
    return normalizeShortcutRows($$('[data-v243-row]', section).map(function(row){
      return {shortcut: $('[data-v243-shortcut]', row)?.value || '', action: $('[data-v243-action]', row)?.value || ''};
    }));
  }
  function injectModifySection(){
    const body = $('.v235-body');
    const panel = $('[data-v176-panel="modify"]');
    if(!body || !panel || $('[data-v243-shortcut-editor]', body)) return;
    const id = currentEditUnitId();
    const unit = unitById(id);
    if(!unit) return;
    const rows = rowsForUnit(unit);
    const section = document.createElement('section');
    section.className = 'v235-section v243-shortcuts-editor';
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
      <div class="v243-empty-note">Ces lignes alimentent directement le jeu Vrai/Faux affiché dans l’espace élève.</div>
      <div class="v235-grid" data-v243-list>${rows.map(shortcutRowHtml).join('')}</div>
    `;
    const integration = $$('.v235-section', body).find(s => /situation/i.test(s.textContent || ''));
    if(integration) body.insertBefore(section, integration);
    else body.appendChild(section);
  }

  function saveCurrentEditor(section){
    section = section || $('[data-v243-shortcut-editor]');
    if(!section) return;
    const id = section.getAttribute('data-unit-id') || currentEditUnitId();
    const rows = collectEditorRows(section);
    saveShortcutRows(id, rows);
    const msg = $('[data-v243-save-state]', section);
    if(msg){ msg.textContent = 'Raccourcis enregistrés.'; setTimeout(function(){ if(msg.textContent) msg.textContent = ''; }, 2200); }
    try{ if(typeof renderUnit === 'function') setTimeout(function(){},0); }catch(e){}
  }

  function refresh(){
    if(observerBusy) return;
    observerBusy = true;
    try{ installCss(); injectAddSection(); injectModifySection(); }
    finally{ observerBusy = false; }
  }

  function install(){
    installCss();
    refresh();
    document.addEventListener('input', function(e){
      if(e.target && e.target.id === 'v243NewShortcuts') cachePendingAdd();
    }, true);
    document.addEventListener('mousedown', function(e){
      const t = e.target;
      if(t && (t.closest('[data-v194-add-next]') || t.closest('[data-v176-create-unit]') || t.closest('[data-v175-create-unit]'))) cachePendingAdd();
    }, true);
    document.addEventListener('click', function(e){
      const add = e.target.closest && e.target.closest('[data-v243-add-row]');
      if(add){
        e.preventDefault();
        const section = add.closest('[data-v243-shortcut-editor]');
        const list = $('[data-v243-list]', section);
        if(list) list.insertAdjacentHTML('beforeend', shortcutRowHtml({shortcut:'', action:''}));
        return;
      }
      const del = e.target.closest && e.target.closest('[data-v243-delete-row]');
      if(del){ e.preventDefault(); const row = del.closest('[data-v243-row]'); if(row) row.remove(); return; }
      const save = e.target.closest && e.target.closest('[data-v243-save-shortcuts]');
      if(save){ e.preventDefault(); saveCurrentEditor(save.closest('[data-v243-shortcut-editor]')); return; }
      const maybeCreate = e.target.closest && (e.target.closest('[data-v194-add-next]') || e.target.closest('[data-v176-create-unit]') || e.target.closest('[data-v175-create-unit]'));
      if(maybeCreate){ cachePendingAdd(); setTimeout(applyPendingAdd, 900); setTimeout(applyPendingAdd, 1600); setTimeout(applyPendingAdd, 2600); }
    }, true);
    document.addEventListener('change', function(e){
      if(e.target && e.target.matches('[data-v235-select]')) setTimeout(function(){ injectModifySection(); }, 120);
    }, true);
    try{ new MutationObserver(function(){ setTimeout(refresh, 40); }).observe(document.documentElement, {childList:true, subtree:true}); }catch(e){}
    setTimeout(refresh, 300);
    setTimeout(refresh, 1000);
    setTimeout(function(){ try{ if(typeof renderUnit === 'function' && document.querySelector('.v242-unit-page')) renderUnit(); }catch(e){} }, 600);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
})();
