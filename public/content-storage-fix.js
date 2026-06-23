/* ÉPI v212 — sortie authentification + cartes mentales multiples + nettoyage interface */
(function(){
  'use strict';
  const CONTENT_PREFIX = 'epi_v170_unit_content_';
  const UNLOCK_KEY = 'epi_v212_teacher_unlocked';
  const PENDING_EXTRA_KEY = 'epi_v212_pending_extra_mindmaps';

  function q(sel, root){ return (root || document).querySelector(sel); }
  function qa(sel, root){ return Array.from((root || document).querySelectorAll(sel)); }
  function h(value){ return String(value == null ? '' : value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch])); }
  function readJson(key, fallback){ try{ const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }catch(e){ return fallback; } }
  function writeJson(key, value){ try{ localStorage.setItem(key, JSON.stringify(value)); return true; }catch(e){ console.warn('v212 storage', e); return false; } }
  function contentKey(id){ return CONTENT_PREFIX + (id || 'unit'); }
  function units(){ return (typeof UNITS !== 'undefined' && Array.isArray(UNITS)) ? UNITS : (Array.isArray(window.UNITS) ? window.UNITS : []); }
  function cleanTitle(value){ return String(value || '').replace(/^\s*Unité\s*\d+\s*:\s*/i,'').trim(); }
  function currentUnitId(){
    const sel = q('#v172UnitSelect');
    if(sel && sel.value) return sel.value;
    try{ if(typeof state !== 'undefined' && state && state.unitId) return state.unitId; }catch(e){}
    const first = units()[0]; return first && first.id || '';
  }
  function currentContent(){ const id = currentUnitId(); return readJson(contentKey(id), {}) || {}; }
  function currentTitle(){
    const t = q('#v176NewUnitTitle') || q('#v176EditUnitTitle') || q('#v172Title');
    return t ? t.value.trim() : '';
  }
  function lines(value){ return String(value || '').split('\n').map(x => x.trim()).filter(Boolean); }

  function ensureAuthenticatedBeforeTeacher(){
    const oldRender = (typeof renderResultsPage === 'function') ? renderResultsPage : null;
    if(!oldRender || window.__EPI_V212_AUTH_PATCHED__) return;
    window.__EPI_V212_AUTH_PATCHED__ = true;
    renderResultsPage = function(){
      if(sessionStorage.getItem(UNLOCK_KEY) === '1') return oldRender.apply(this, arguments);
      // Si l’appel vient d’un formulaire déjà rempli correctement, on valide.
      const input = q('#teacherPasswordInput');
      const pwd = input ? String(input.value || '').trim() : '';
      try{
        if(pwd && typeof PROF_PASSWORD !== 'undefined' && pwd === PROF_PASSWORD){
          sessionStorage.setItem(UNLOCK_KEY, '1');
          return oldRender.apply(this, arguments);
        }
      }catch(e){}
      alert('Accès professeur verrouillé. Entrez d’abord le mot de passe.');
      if(typeof renderLogin === 'function') renderLogin();
    };
    const oldOpen = (typeof openTeacherArea === 'function') ? openTeacherArea : null;
    if(oldOpen){
      openTeacherArea = function(){
        const code = prompt('Espace professeur — entrez le mot de passe :');
        if(code === null) return;
        try{
          if(typeof PROF_PASSWORD !== 'undefined' && code === PROF_PASSWORD){
            sessionStorage.setItem(UNLOCK_KEY, '1');
            return oldRender ? oldRender() : oldOpen.apply(this, arguments);
          }
        }catch(e){}
        alert('Mot de passe incorrect. Accès refusé.');
      };
    }
  }

  function authExit(){
    try{ sessionStorage.removeItem(UNLOCK_KEY); sessionStorage.removeItem(PENDING_EXTRA_KEY); }catch(e){}
    try{ if(typeof stopAllAudio === 'function') stopAllAudio(); }catch(e){}
    try{ if(typeof clearStudent === 'function') clearStudent(); }catch(e){}
    if(typeof renderLogin === 'function') renderLogin(); else location.reload();
  }

  function patchTeacherHeader(){
    const hero = q('.v176-teacher-hero');
    if(!hero) return;
    // Supprimer le bouton Retour défectueux.
    qa('button', hero).forEach(btn => {
      const label = (btn.textContent || '').trim().toLowerCase();
      if(btn.hasAttribute('data-v87-landing') || label === 'retour') btn.remove();
    });
    if(!q('[data-v212-auth-exit]', hero)){
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'btn secondary v212-auth-exit';
      btn.setAttribute('data-v212-auth-exit','1');
      btn.textContent = 'Sortir vers authentification';
      hero.appendChild(btn);
    }
  }

  function removeUselessAddSentence(){
    qa('.v176-panel[data-v176-panel="add"] .v176-panel-head p, .v176-panel-head p').forEach(p => {
      const txt = (p.textContent || '').trim();
      if(txt.includes('L’ajout est organisé') || txt.includes('L\u2019ajout est organisé')) p.remove();
    });
  }

  function branchEditor(branch, idx){
    branch = branch || {};
    const kids = Array.isArray(branch.children) ? branch.children.join('\n') : (branch.children || '');
    return `<article class="v212-extra-branch" data-v212-extra-branch>
      <div class="v212-branch-head"><strong>Fil ${idx+1}</strong><button type="button" class="v172-delete" data-v212-delete-branch>Supprimer</button></div>
      <div class="v172-grid-2">
        <label class="v172-field"><span>Nom du fil principal</span><input data-v212-field="title" value="${h(branch.title || '')}" placeholder="Ex. Les périphériques"></label>
        <label class="v172-field"><span>Exemple au clic</span><input data-v212-field="example" value="${h(branch.example || '')}" placeholder="Ex. Le clavier est un périphérique d’entrée."></label>
      </div>
      <label class="v172-field"><span>Définition du fil</span><textarea data-v212-field="definition" rows="2" placeholder="Définition courte">${h(branch.definition || '')}</textarea></label>
      <label class="v172-field"><span>Sous-fils — une ligne par sous-fil</span><textarea data-v212-field="children" rows="3" placeholder="Sous-fil 1&#10;Sous-fil 2">${h(kids)}</textarea></label>
    </article>`;
  }
  function mapEditor(map, idx){
    map = map || {};
    const branches = Array.isArray(map.branches) && map.branches.length ? map.branches : [{title:'', definition:'', example:'', children:[]}];
    return `<article class="v212-extra-map" data-v212-extra-map>
      <div class="v212-map-head"><div><span class="mini-pill">Carte mentale ${idx+2}</span><h4>Autre carte mentale</h4></div><button type="button" class="v172-delete" data-v212-delete-map>Supprimer cette carte</button></div>
      <label class="v172-field"><span>Nœud central de cette carte</span><input data-v212-map-title value="${h(map.title || '')}" placeholder="Ex. Types de périphériques"></label>
      <div class="v212-extra-branches">${branches.map(branchEditor).join('')}</div>
      <button type="button" class="btn secondary" data-v212-add-extra-branch>+ Ajouter un fil dans cette carte</button>
    </article>`;
  }
  function extraMapsEditorHtml(maps){
    maps = Array.isArray(maps) ? maps : [];
    return `<section class="v212-extra-mindmaps" data-v212-extra-mindmaps>
      <div class="v172-card-head v212-extra-head"><div><span class="mini-pill">Cartes mentales supplémentaires</span><h3>Créer une autre carte mentale</h3><p>Chaque carte possède son nœud central, ses fils principaux, ses définitions, ses exemples et ses sous-fils.</p></div></div>
      <div class="v212-extra-map-list">${maps.map(mapEditor).join('')}</div>
      <button type="button" class="btn" data-v212-add-map>+ Créer une autre carte mentale</button>
    </section>`;
  }
  function patchMindmapEditor(){
    const editor = q('[data-v172-editor="mindmap"]') || q('[data-v179-add-section="mindmap"]');
    if(!editor || q('[data-v212-extra-mindmaps]', editor)) return;
    const content = currentContent();
    const maps = Array.isArray(content.extraMindmaps) ? content.extraMindmaps : [];
    const anchor = q('#v172Branches', editor) || editor;
    anchor.insertAdjacentHTML('afterend', extraMapsEditorHtml(maps));
  }
  function collectExtraMaps(root){
    return qa('[data-v212-extra-map]', root || document).map(map => ({
      title: (q('[data-v212-map-title]', map)?.value || '').trim(),
      branches: qa('[data-v212-extra-branch]', map).map(row => ({
        title: (q('[data-v212-field="title"]', row)?.value || '').trim(),
        definition: (q('[data-v212-field="definition"]', row)?.value || '').trim(),
        example: (q('[data-v212-field="example"]', row)?.value || '').trim(),
        children: lines(q('[data-v212-field="children"]', row)?.value || '')
      })).filter(b => b.title || b.definition || b.example || (b.children && b.children.length))
    })).filter(m => m.title || (m.branches && m.branches.length));
  }
  function saveExtraMapsToUnit(unitId, maps){
    if(!unitId) return false;
    const key = contentKey(unitId);
    const content = readJson(key, {}) || {};
    content.extraMindmaps = maps;
    const ok = writeJson(key, content);
    try{
      const unit = units().find(u => u && u.id === unitId);
      if(unit){ unit._v172TeacherContent = content; unit._v170TeacherContent = content; }
    }catch(e){}
    return ok;
  }
  function saveVisibleExtraMaps(){
    const maps = collectExtraMaps(document);
    if(!maps.length) return;
    const id = currentUnitId();
    saveExtraMapsToUnit(id, maps);
  }
  function rememberPendingExtraMaps(){
    const maps = collectExtraMaps(document);
    if(!maps.length) return;
    const title = currentTitle();
    sessionStorage.setItem(PENDING_EXTRA_KEY, JSON.stringify({title, maps, time:Date.now()}));
  }
  function applyPendingExtraMaps(){
    const raw = sessionStorage.getItem(PENDING_EXTRA_KEY);
    if(!raw) return;
    let pending = null;
    try{ pending = JSON.parse(raw); }catch(e){ pending = null; }
    if(!pending || !Array.isArray(pending.maps) || !pending.maps.length) return;
    const targetTitle = cleanTitle(pending.title).toLowerCase();
    const candidates = units().filter(u => u && u.id && (!targetTitle || cleanTitle(u.title).toLowerCase() === targetTitle));
    const unit = candidates[candidates.length - 1];
    if(unit){
      saveExtraMapsToUnit(unit.id, pending.maps);
      sessionStorage.removeItem(PENDING_EXTRA_KEY);
    }
  }

  function extraMapStudentHtml(map, idx){
    const root = cleanTitle(map.title || `Carte mentale ${idx+2}`);
    const branches = Array.isArray(map.branches) ? map.branches : [];
    const first = branches[0] || {};
    const firstKids = Array.isArray(first.children) ? first.children : lines(first.children || '');
    const detail = [first.example ? `Exemple : ${first.example}` : '', firstKids.length ? `Sous-fils : ${firstKids.join(' • ')}` : ''].filter(Boolean).join(' — ') || 'Clique sur un fil pour afficher les détails.';
    const nodes = branches.map((b,i) => {
      const kids = Array.isArray(b.children) ? b.children : lines(b.children || '');
      const d = [b.example ? `Exemple : ${b.example}` : '', kids.length ? `Sous-fils : ${kids.join(' • ')}` : ''].filter(Boolean).join(' — ') || 'Exemple à compléter.';
      return `<button type="button" class="map-node ${i===0?'active':''}" data-v212-map-node data-title="${h(b.title || `Fil ${i+1}`)}" data-definition="${h(b.definition || 'Définition à compléter.')}" data-example="${h(d)}">${h(b.title || `Fil ${i+1}`)}</button>`;
    }).join('');
    return `<article class="teacher-sheet mindmap-sheet v212-student-extra-map" data-v212-student-map><div class="sheet-title"><span class="mini-pill">Fiche mentale interactive</span><h3>${h(root)}</h3></div><div class="visual-note">Clique sur chaque fil principal pour afficher sa définition et son exemple.</div><div class="visual-mindmap"><div class="map-center">${h(root)}</div><div class="map-nodes">${nodes}</div></div><div class="definition-box v212-map-definition"><h4>${h(first.title || root)}</h4><p>${h(first.definition || 'Définition à compléter.')}</p><p class="ar">${h(detail)}</p></div></article>`;
  }
  function injectExtraMindmapsStudent(){
    if(!q('.visual-panel') || q('[data-v212-extra-injected]')) return;
    let unitId = '';
    try{ if(typeof state !== 'undefined' && state && state.unitId) unitId = state.unitId; }catch(e){}
    if(!unitId) return;
    const content = readJson(contentKey(unitId), {}) || {};
    const maps = Array.isArray(content.extraMindmaps) ? content.extraMindmaps : [];
    if(!maps.length) return;
    const layout = q('.visual-panel .visual-layout') || q('.visual-panel');
    if(!layout) return;
    const holder = document.createElement('div');
    holder.setAttribute('data-v212-extra-injected','1');
    holder.className = 'v212-student-extra-holder';
    holder.innerHTML = maps.map(extraMapStudentHtml).join('');
    layout.appendChild(holder);
  }

  function injectCss(){
    if(q('#v212-style')) return;
    const st = document.createElement('style');
    st.id = 'v212-style';
    st.textContent = `
      .v176-teacher-hero .v212-auth-exit{position:relative;z-index:3;margin-left:auto;white-space:nowrap;background:#fff!important;color:#1d4ed8!important;border-color:rgba(255,255,255,.70)!important;box-shadow:0 12px 28px rgba(15,23,42,.16)!important}
      .v212-extra-mindmaps{border:1px solid rgba(124,58,237,.18);border-radius:24px;padding:16px;margin:16px 0;background:linear-gradient(180deg,#faf5ff,#fff);display:grid;gap:14px}
      .v212-extra-head{margin:0!important}.v212-extra-head p{color:#64748b;line-height:1.5;margin:.25rem 0 0!important}
      .v212-extra-map{border:1px solid rgba(37,99,235,.15);border-radius:22px;padding:14px;background:#fff;box-shadow:0 12px 28px rgba(15,23,42,.06);display:grid;gap:12px;margin:12px 0}
      .v212-map-head,.v212-branch-head{display:flex;justify-content:space-between;gap:10px;align-items:center;flex-wrap:wrap}.v212-map-head h4{margin:.25rem 0;color:#0f172a}.v212-extra-branches{display:grid;gap:12px}.v212-extra-branch{border:1px dashed rgba(37,99,235,.20);border-radius:18px;padding:12px;background:#f8fbff;display:grid;gap:10px}
      .v212-student-extra-holder{display:grid;gap:18px}.v212-student-extra-map{margin-top:18px}.v212-student-extra-map .definition-box .ar{color:#0f766e;font-style:normal}.v212-student-extra-map .map-node{cursor:pointer}
      @media(max-width:760px){.v176-teacher-hero .v212-auth-exit{width:100%;justify-content:center;margin-left:0}.v212-map-head,.v212-branch-head{align-items:flex-start}}
    `;
    document.head.appendChild(st);
  }

  document.addEventListener('submit', function(e){
    const form = e.target && e.target.closest && e.target.closest('#teacherAuthForm');
    if(!form) return;
    const pwd = q('#teacherPasswordInput', form)?.value || '';
    try{ if(typeof PROF_PASSWORD !== 'undefined' && pwd.trim() === PROF_PASSWORD) sessionStorage.setItem(UNLOCK_KEY, '1'); }catch(err){}
  }, true);

  document.addEventListener('click', function(e){
    const exit = e.target.closest && e.target.closest('[data-v212-auth-exit]');
    if(exit){ e.preventDefault(); e.stopPropagation(); if(e.stopImmediatePropagation) e.stopImmediatePropagation(); authExit(); return; }
    const addMap = e.target.closest && e.target.closest('[data-v212-add-map]');
    if(addMap){ e.preventDefault(); const list = q('.v212-extra-map-list', addMap.closest('[data-v212-extra-mindmaps]')); if(list) list.insertAdjacentHTML('beforeend', mapEditor({title:'', branches:[{title:'',definition:'',example:'',children:[]}]}, qa('[data-v212-extra-map]', list).length)); return; }
    const delMap = e.target.closest && e.target.closest('[data-v212-delete-map]');
    if(delMap){ e.preventDefault(); delMap.closest('[data-v212-extra-map]')?.remove(); return; }
    const addBranch = e.target.closest && e.target.closest('[data-v212-add-extra-branch]');
    if(addBranch){ e.preventDefault(); const map = addBranch.closest('[data-v212-extra-map]'); const list = q('.v212-extra-branches', map); if(list) list.insertAdjacentHTML('beforeend', branchEditor({title:'',definition:'',example:'',children:[]}, qa('[data-v212-extra-branch]', list).length)); return; }
    const delBranch = e.target.closest && e.target.closest('[data-v212-delete-branch]');
    if(delBranch){ e.preventDefault(); delBranch.closest('[data-v212-extra-branch]')?.remove(); return; }
    const save = e.target.closest && e.target.closest('[data-v172-save], [data-v176-save-modify]');
    if(save){ setTimeout(saveVisibleExtraMaps, 120); return; }
    const create = e.target.closest && e.target.closest('[data-v176-create-unit]');
    if(create){ rememberPendingExtraMaps(); setTimeout(applyPendingExtraMaps, 350); setTimeout(applyPendingExtraMaps, 900); return; }
    const node = e.target.closest && e.target.closest('[data-v212-map-node]');
    if(node){
      e.preventDefault();
      const map = node.closest('[data-v212-student-map]');
      qa('[data-v212-map-node]', map).forEach(n => n.classList.remove('active'));
      node.classList.add('active');
      const box = q('.v212-map-definition', map);
      if(box) box.innerHTML = `<h4>${h(node.dataset.title || '')}</h4><p>${h(node.dataset.definition || '')}</p><p class="ar">${h(node.dataset.example || '')}</p>`;
      return;
    }
  }, true);

  function tick(){
    ensureAuthenticatedBeforeTeacher();
    patchTeacherHeader();
    removeUselessAddSentence();
    patchMindmapEditor();
    applyPendingExtraMaps();
    injectExtraMindmapsStudent();
  }
  function start(){
    injectCss(); tick();
    try{ new MutationObserver(tick).observe(document.body,{childList:true,subtree:true}); }catch(e){}
    setInterval(tick, 1000);
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
