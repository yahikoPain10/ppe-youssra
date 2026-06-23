/* =========================================================
   ÉPI v231 — Version finale demandée
   - Espace élève encore plus compact.
   - Espace prof fixe avec tableau de bord aux bordures larges.
   - Modifier unité : même contenu que l'espace élève, mais chaque
     composant possède Modifier / Supprimer / Ajouter un autre.
   - Les trois styles sont toujours visibles : image, audio, exercices.
   - Les ajouts ouvrent de vrais formulaires proches de "Ajouter unité".
========================================================= */
(function(){
  'use strict';

  const STORE_PREFIX = 'epi_v170_unit_content_';
  const CUSTOM_KEYS = ['epi_v183_custom_units_visible','epi_v181_custom_units_visible','epi_v175_custom_units'];
  let activeUnitId = '';
  let timer = null;
  let modalOpen = false;

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const esc = value => String(value == null ? '' : value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
  const text = value => String(value == null ? '' : value).trim();
  const splitLines = value => Array.isArray(value) ? value.map(x => text(x)).filter(Boolean) : String(value || '').split(/\n|•/).map(x => x.trim()).filter(Boolean);
  const cleanTitle = value => text(value).replace(/^\s*Unité\s*\d+\s*:\s*/i,'').trim();

  function readJson(key, fallback){ try{ const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }catch(e){ return fallback; } }
  function writeJson(key, value){ try{ localStorage.setItem(key, JSON.stringify(value)); return true; }catch(e){ console.error(e); return false; } }

  function baseUnits(){
    try{ if(Array.isArray(window.UNITS)) return window.UNITS; }catch(e){}
    try{ if(typeof UNITS !== 'undefined' && Array.isArray(UNITS)) return UNITS; }catch(e){}
    return [];
  }
  function customUnits(){
    const out = [];
    const seen = new Set();
    CUSTOM_KEYS.forEach(key => {
      const rows = readJson(key, []);
      if(Array.isArray(rows)) rows.forEach(u => {
        if(!u || !u.id || seen.has(String(u.id))) return;
        seen.add(String(u.id));
        out.push(Object.assign({customUnit:true, hiddenFromStudent:false}, u));
      });
    });
    return out;
  }
  function allUnits(){
    const out = [];
    const seen = new Set();
    baseUnits().concat(customUnits()).forEach(u => {
      if(!u || !u.id || u.hiddenFromStudent === true) return;
      const id = String(u.id);
      if(seen.has(id)) return;
      seen.add(id);
      out.push(u);
    });
    return out;
  }
  function unitById(id){
    const rows = allUnits();
    return rows.find(u => String(u.id) === String(id)) || rows[0] || null;
  }
  function derive(unit){
    if(window.EPI_V230_FINAL && typeof window.EPI_V230_FINAL.derive === 'function'){
      try{ return window.EPI_V230_FINAL.derive(unit); }catch(e){ console.warn(e); }
    }
    return Object.assign({}, unit || {}, {subtitleItems:[]});
  }
  function saveContent(unit, c, silent){
    if(window.EPI_V230_FINAL && typeof window.EPI_V230_FINAL.saveContent === 'function'){
      try{ return window.EPI_V230_FINAL.saveContent(unit, c, silent === true); }catch(e){ console.warn(e); }
    }
    if(unit && unit.id) writeJson(STORE_PREFIX + unit.id, c);
  }
  function selected(){
    const unit = unitById(activeUnitId || $('[data-v231-unit-select]')?.value || '');
    return {unit, c:normalizeContent(derive(unit))};
  }
  function normalizeContent(c){
    c = Object.assign({}, c || {});
    c.subtitleItems = Array.isArray(c.subtitleItems) ? c.subtitleItems : [];
    c.subtitleItems = c.subtitleItems.map((s, i) => normalizeSubtitle(s, i));
    c.mindmapBranches = Array.isArray(c.mindmapBranches) && c.mindmapBranches.length ? c.mindmapBranches : c.subtitleItems.map(s => ({title:s.title, definition:s.definition, example:s.example, children:s.children || []}));
    c.dictionary = Array.isArray(c.dictionary) ? c.dictionary : [];
    c.integrationTasks = Array.isArray(c.integrationTasks) ? c.integrationTasks : [];
    c.examQuestions = Array.isArray(c.examQuestions) ? c.examQuestions : [];
    return c;
  }
  function normalizeSubtitle(s, i){
    s = Object.assign({}, s || {});
    s.title = text(s.title || `Sous-titre ${i+1}`);
    s.definition = text(s.definition || '');
    s.example = text(s.example || '');
    s.children = splitLines(s.children);
    s.visualItems = Array.isArray(s.visualItems) ? s.visualItems.map((x,j)=>normalizeVisual(x,j,s.title)) : [];
    s.audioItems = Array.isArray(s.audioItems) ? s.audioItems.map((x,j)=>normalizeAudio(x,j,s.title)) : [];
    s.kineExercises = Array.isArray(s.kineExercises) ? s.kineExercises.map((x,j)=>normalizeKine(x,j,s.title)) : [];
    return s;
  }
  function normalizeVisual(v, i, subtitle){
    v = v || {};
    return {title:text(v.title || v.visualTitle || `Image ${i+1}`), src:text(v.src || v.visualSrc || ''), description:text(v.description || v.visualDescription || ''), example:text(v.example || v.visualExample || ''), subtitleTitle:subtitle || text(v.subtitleTitle || '')};
  }
  function normalizeAudio(a, i, subtitle){
    a = a || {};
    return {title:text(a.title || a.audioTitle || `Audio ${i+1}`), src:text(a.src || a.audioSrc || ''), text:text(a.text || a.audioText || ''), ar:text(a.ar || a.audioAr || ''), subtitleTitle:subtitle || text(a.subtitleTitle || '')};
  }
  function normalizeKine(k, i, subtitle){
    k = k || {};
    return {type:text(k.type || k.kineType || `Exercice ${i+1}`), question:text(k.question || k.kineQuestion || ''), options:text(Array.isArray(k.options) ? k.options.join('\n') : (k.options || k.kineOptions || '')), answer:text(k.answer || k.kineAnswer || ''), correction:text(k.correction || k.kineCorrection || ''), subtitleTitle:subtitle || text(k.subtitleTitle || '')};
  }
  function commit(mutator){
    const {unit, c} = selected();
    if(!unit) return;
    mutator(c, unit);
    const normalized = normalizeContent(c);
    normalized.mindmapBranches = Array.isArray(normalized.mindmapBranches) ? normalized.mindmapBranches : [];
    saveContent(unit, normalized, false);
    renderPanel(unit.id);
  }

  function mediaId(ref){ return String(ref || '').split(':').slice(2).join(':'); }
  function mediaUrl(src){
    const v = text(src);
    if(!v) return '';
    if(v.startsWith('epi-media:')) return '/api/media/' + encodeURIComponent(mediaId(v));
    return v;
  }
  function mediaKind(src){
    const v = text(src).toLowerCase();
    if(v.startsWith('epi-media:audio:') || /^data:audio\//.test(v) || /\.(mp3|wav|ogg|m4a|aac)(\?|#|$)/.test(v)) return 'audio';
    if(v.startsWith('epi-media:video:') || /^data:video\//.test(v) || /\.(mp4|webm|ogg|ogv|mov|m4v)(\?|#|$)/.test(v)) return 'video';
    return 'image';
  }
  function mediaPreview(src, title){
    const url = mediaUrl(src);
    if(!url) return '<div class="v231-no-media">Aucun média ajouté</div>';
    const kind = mediaKind(src);
    if(kind === 'audio') return `<audio controls preload="metadata" src="${esc(url)}" title="${esc(title || 'Audio')}"></audio>`;
    if(kind === 'video') return `<video controls preload="metadata" src="${esc(url)}" title="${esc(title || 'Vidéo')}"></video>`;
    return `<img loading="lazy" src="${esc(url)}" alt="${esc(title || 'Image')}">`;
  }
  function fileKind(file){
    const type = String(file && file.type || '').toLowerCase();
    const name = String(file && file.name || '').toLowerCase();
    if(type.startsWith('video/') || /\.(mp4|webm|ogv|ogg|mov|m4v)$/i.test(name)) return 'video';
    if(type.startsWith('audio/') || /\.(mp3|wav|ogg|m4a|aac)$/i.test(name)) return 'audio';
    return 'image';
  }
  async function uploadFile(file, preferredKind){
    const kind = preferredKind === 'audio' || preferredKind === 'image' ? fileKind(file) : fileKind(file);
    const response = await fetch('/api/media-file?kind=' + encodeURIComponent(kind), {
      method:'POST',
      headers:{'Content-Type': file.type || 'application/octet-stream','X-File-Name': encodeURIComponent(file.name || 'media'),'X-Media-Kind': kind},
      body:file
    });
    if(!response.ok) throw new Error('Erreur import média HTTP ' + response.status);
    const data = await response.json();
    if(!data || !data.id) throw new Error('Média non enregistré.');
    return `epi-media:${kind}:${data.id}`;
  }

  function btn(label, attrs, kind){ return `<button type="button" class="v231-btn ${kind || ''}" ${attrs || ''}>${esc(label)}</button>`; }
  function actions(editAttrs, delAttrs){ return `<div class="v231-actions">${editAttrs ? btn('Modifier', editAttrs, 'edit') : ''}${delAttrs ? btn('Supprimer', delAttrs, 'danger') : ''}</div>`; }
  function addBtn(type, extra){ return btn('Ajouter un autre', `data-v231-add="${esc(type)}" ${extra || ''}`, 'add'); }
  function emptyAdd(label, type, extra){ return `<div class="v231-empty"><span>${esc(label)}</span>${addBtn(type, extra)}</div>`; }

  function renderHero(unit, c){
    return `<section class="v231-hero">
      <div><span>Modifier unité</span><h2>${esc(c.title || unit.title || '')}</h2>${c.intro || c.short ? `<p>${esc(c.intro || c.short)}</p>` : ''}</div>
      ${actions(`data-v231-edit="unit"`, '')}
    </section>`;
  }
  function renderMindmap(c){
    const rows = Array.isArray(c.mindmapBranches) && c.mindmapBranches.length ? c.mindmapBranches : c.subtitleItems.map(s => ({title:s.title, definition:s.definition, example:s.example, children:s.children}));
    return `<section class="v231-section v231-mindmap">
      <div class="v231-head"><h3>Carte mentale</h3>${addBtn('branch')}</div>
      <div class="v231-map-root">${esc(cleanTitle(c.title) || 'Unité')}</div>
      <div class="v231-map-grid">
        ${rows.map((b,i)=>`<article class="v231-map-node"><div class="v231-card-top"><strong>${esc(b.title || `Branche ${i+1}`)}</strong>${actions(`data-v231-edit="branch" data-index="${i}"`, `data-v231-del="branch" data-index="${i}"`)}</div>${b.definition ? `<p>${esc(b.definition)}</p>` : ''}${b.example ? `<em>Exemple : ${esc(b.example)}</em>` : ''}${splitLines(b.children).length ? `<ul>${splitLines(b.children).map(x=>`<li>${esc(x)}</li>`).join('')}</ul>` : ''}</article>`).join('') || emptyAdd('Aucune branche dans la carte mentale.', 'branch')}
      </div>
    </section>`;
  }
  function renderVisual(v, si, vi){
    return `<article class="v231-media-card"><div class="v231-card-top"><strong>${esc(v.title || `Image ${vi+1}`)}</strong>${actions(`data-v231-edit="visual" data-si="${si}" data-index="${vi}"`, `data-v231-del="visual" data-si="${si}" data-index="${vi}"`)}</div><div class="v231-media-box">${mediaPreview(v.src, v.title)}</div>${v.description ? `<p>${esc(v.description)}</p>` : ''}${v.example ? `<em>${esc(v.example)}</em>` : ''}</article>`;
  }
  function renderAudio(a, si, ai){
    return `<article class="v231-media-card"><div class="v231-card-top"><strong>${esc(a.title || `Audio ${ai+1}`)}</strong>${actions(`data-v231-edit="audio" data-si="${si}" data-index="${ai}"`, `data-v231-del="audio" data-si="${si}" data-index="${ai}"`)}</div><div class="v231-media-box audio">${mediaPreview(a.src, a.title)}</div>${a.text ? `<p>${esc(a.text)}</p>` : ''}${a.ar ? `<p class="ar">${esc(a.ar)}</p>` : ''}</article>`;
  }
  function renderKine(k, si, ki){
    return `<article class="v231-card"><div class="v231-card-top"><strong>${esc(k.type || `Exercice ${ki+1}`)}</strong>${actions(`data-v231-edit="kine" data-si="${si}" data-index="${ki}"`, `data-v231-del="kine" data-si="${si}" data-index="${ki}"`)}</div>${k.question ? `<p>${esc(k.question)}</p>` : ''}${k.options ? `<pre>${esc(k.options)}</pre>` : ''}${k.answer ? `<em>Réponse : ${esc(k.answer)}</em>` : ''}${k.correction ? `<p>${esc(k.correction)}</p>` : ''}</article>`;
  }
  function renderSubtitle(s, si){
    const visuals = Array.isArray(s.visualItems) ? s.visualItems : [];
    const audios = Array.isArray(s.audioItems) ? s.audioItems : [];
    const kines = Array.isArray(s.kineExercises) ? s.kineExercises : [];
    return `<article class="v231-subtitle">
      <div class="v231-title-line"><h3>${esc(s.title || `Sous-titre ${si+1}`)}</h3>${actions(`data-v231-edit="subtitle" data-index="${si}"`, `data-v231-del="subtitle" data-index="${si}"`)}</div>
      ${s.definition ? `<p class="v231-definition">${esc(s.definition)}</p>` : '<p class="v231-definition muted">Aucune définition.</p>'}
      ${s.example ? `<p class="v231-example"><strong>Exemple :</strong> ${esc(s.example)}</p>` : ''}
      ${splitLines(s.children).length ? `<ul class="v231-list">${splitLines(s.children).map(x=>`<li>${esc(x)}</li>`).join('')}</ul>` : ''}
      <section class="v231-style-block visual"><div class="v231-mini-head"><h4>Style visuel — images</h4>${addBtn('visual', `data-si="${si}"`)}</div><div class="v231-grid">${visuals.map((v,i)=>renderVisual(v,si,i)).join('') || emptyAdd('Aucune image. Ajoute une image comme dans Ajouter unité.', 'visual', `data-si="${si}"`)}</div></section>
      <section class="v231-style-block audio"><div class="v231-mini-head"><h4>Style auditif — audios</h4>${addBtn('audio', `data-si="${si}"`)}</div><div class="v231-grid">${audios.map((a,i)=>renderAudio(a,si,i)).join('') || emptyAdd('Aucun audio. Ajoute un audio comme dans Ajouter unité.', 'audio', `data-si="${si}"`)}</div></section>
      <section class="v231-style-block kine"><div class="v231-mini-head"><h4>Style kinesthésique — exercices</h4>${addBtn('kine', `data-si="${si}"`)}</div><div class="v231-grid">${kines.map((k,i)=>renderKine(k,si,i)).join('') || emptyAdd('Aucun exercice. Ajoute une question comme dans Ajouter unité.', 'kine', `data-si="${si}"`)}</div></section>
    </article>`;
  }
  function renderDictionary(c){
    const rows = Array.isArray(c.dictionary) ? c.dictionary : [];
    return `<section class="v231-section"><div class="v231-head"><h3>Dictionnaire</h3>${addBtn('dict')}</div><div class="v231-grid">${rows.map((d,i)=>`<article class="v231-card"><div class="v231-card-top"><strong>${esc(d.term || `Mot ${i+1}`)}</strong>${actions(`data-v231-edit="dict" data-index="${i}"`, `data-v231-del="dict" data-index="${i}"`)}</div><p>${esc(d.value || d.definition || '')}</p></article>`).join('') || emptyAdd('Aucun mot dans le dictionnaire.', 'dict')}</div></section>`;
  }
  function renderIntegration(c){
    const rows = Array.isArray(c.integrationTasks) ? c.integrationTasks : [];
    return `<section class="v231-section"><div class="v231-head"><h3>Situation d’intégration</h3><div class="v231-actions">${btn('Modifier la situation', 'data-v231-edit="scenario"', 'edit')}${addBtn('task')}</div></div>${c.scenario ? `<p class="v231-definition">${esc(c.scenario)}</p>` : '<p class="v231-definition muted">Aucune situation écrite.</p>'}<div class="v231-grid">${rows.map((t,i)=>`<article class="v231-card"><div class="v231-card-top"><strong>Question ${i+1}</strong>${actions(`data-v231-edit="task" data-index="${i}"`, `data-v231-del="task" data-index="${i}"`)}</div><p>${esc(t.task || t.question || '')}</p>${(t.expected || t.correction) ? `<em>${esc(t.expected || t.correction)}</em>` : ''}</article>`).join('') || emptyAdd('Aucune question dans la situation.', 'task')}</div></section>`;
  }
  function renderExam(c){
    const rows = Array.isArray(c.examQuestions) ? c.examQuestions : [];
    return `<section class="v231-section"><div class="v231-head"><h3>Contrôle final</h3>${addBtn('exam')}</div><div class="v231-grid">${rows.map((ex,i)=>`<article class="v231-card"><div class="v231-card-top"><strong>Question ${i+1}</strong>${actions(`data-v231-edit="exam" data-index="${i}"`, `data-v231-del="exam" data-index="${i}"`)}</div><p>${esc(ex.question || '')}</p>${Array.isArray(ex.options) && ex.options.length ? `<ol>${ex.options.map(op=>`<li>${esc(op)}</li>`).join('')}</ol>` : ''}</article>`).join('') || emptyAdd('Aucune question dans le contrôle final.', 'exam')}</div></section>`;
  }
  function renderPage(unit, c){
    return `<div class="v230-modifier v231-modifier" data-v231-modifier>
      <div class="v231-toolbar"><select data-v231-unit-select>${allUnits().map(u=>`<option value="${esc(u.id)}" ${String(u.id)===String(unit.id)?'selected':''}>${esc(cleanTitle(u.title || u.id))}</option>`).join('')}</select><span data-v231-msg></span></div>
      <main class="v231-student-view" data-v231-unit-id="${esc(unit.id)}">
        ${renderHero(unit, c)}
        ${renderMindmap(c)}
        <section class="v231-section"><div class="v231-head"><h3>Contenu de l’unité</h3>${addBtn('subtitle')}</div><div class="v231-lessons">${c.subtitleItems.map(renderSubtitle).join('') || emptyAdd('Aucun sous-titre. Ajoute le premier sous-titre avec les trois styles.', 'subtitle')}</div></section>
        ${renderDictionary(c)}
        ${renderIntegration(c)}
        ${renderExam(c)}
      </main>
    </div>`;
  }

  function fieldHtml(f){
    const v = f.value == null ? '' : String(f.value);
    if(f.type === 'textarea') return `<label class="v231-field"><span>${esc(f.label)}</span><textarea name="${esc(f.name)}" rows="${f.rows || 4}" placeholder="${esc(f.placeholder || '')}">${esc(v)}</textarea>${f.help?`<small>${esc(f.help)}</small>`:''}</label>`;
    if(f.type === 'file') return `<label class="v231-field"><span>${esc(f.label)}</span><input name="${esc(f.name)}" type="file" accept="${esc(f.accept || '')}">${f.help?`<small>${esc(f.help)}</small>`:''}</label>`;
    if(f.type === 'select') return `<label class="v231-field"><span>${esc(f.label)}</span><select name="${esc(f.name)}">${(f.options||[]).map(op=>`<option value="${esc(op.value)}" ${String(op.value)===String(v)?'selected':''}>${esc(op.label)}</option>`).join('')}</select>${f.help?`<small>${esc(f.help)}</small>`:''}</label>`;
    return `<label class="v231-field"><span>${esc(f.label)}</span><input name="${esc(f.name)}" type="text" value="${esc(v)}" placeholder="${esc(f.placeholder || '')}">${f.help?`<small>${esc(f.help)}</small>`:''}</label>`;
  }
  function openForm(title, fields, onSubmit){
    closeModal();
    modalOpen = true;
    const overlay = document.createElement('div');
    overlay.className = 'v231-modal';
    overlay.innerHTML = `<div class="v231-modal-card" role="dialog" aria-modal="true">
      <div class="v231-modal-head"><h3>${esc(title)}</h3><button type="button" class="v231-close" data-v231-close>×</button></div>
      <form data-v231-form>${fields.map(fieldHtml).join('')}<div class="v231-modal-actions"><button type="button" class="v231-btn light" data-v231-close>Annuler</button><button type="submit" class="v231-btn add">Enregistrer</button></div></form>
    </div>`;
    document.body.appendChild(overlay);
    overlay.addEventListener('click', e => { if(e.target === overlay || e.target.closest('[data-v231-close]')) closeModal(); });
    overlay.querySelector('form').addEventListener('submit', async e => {
      e.preventDefault();
      const submit = overlay.querySelector('button[type="submit"]');
      submit.disabled = true;
      submit.textContent = 'Enregistrement...';
      const fd = new FormData(e.currentTarget);
      const values = {};
      const files = {};
      fields.forEach(f => {
        if(f.type === 'file') files[f.name] = e.currentTarget.elements[f.name]?.files?.[0] || null;
        else values[f.name] = text(fd.get(f.name));
      });
      try{ await onSubmit(values, files); closeModal(); }
      catch(err){ console.error(err); alert('Modification impossible. Vérifie que le serveur est lancé avec node server.js.'); submit.disabled = false; submit.textContent = 'Enregistrer'; }
    });
    const first = overlay.querySelector('input,textarea,select');
    if(first) setTimeout(()=>first.focus(), 30);
  }
  function closeModal(){ $$('.v231-modal').forEach(x => x.remove()); modalOpen = false; }

  function editUnit(){
    const {unit, c} = selected(); if(!unit) return;
    openForm('Modifier les informations générales', [
      {name:'title', label:'Titre de l’unité', value:c.title || unit.title || ''},
      {name:'short', label:'Description courte', type:'textarea', rows:2, value:c.short || unit.short || ''},
      {name:'intro', label:'Introduction affichée', type:'textarea', rows:4, value:c.intro || unit.intro || ''},
      {name:'competence', label:'Compétence', type:'textarea', rows:2, value:c.competence || ''},
      {name:'duration', label:'Durée', value:c.duration || ''}
    ], values => commit(c => Object.assign(c, values)));
  }
  function editSubtitle(index){
    const {c} = selected(); const s = c.subtitleItems[index] || normalizeSubtitle({}, index);
    openForm('Modifier le sous-titre', [
      {name:'title', label:'Titre du sous-titre', value:s.title},
      {name:'definition', label:'Définition / contenu du cours', type:'textarea', rows:5, value:s.definition},
      {name:'example', label:'Exemple', type:'textarea', rows:3, value:s.example},
      {name:'children', label:'Sous-idées / branches secondaires', type:'textarea', rows:4, value:splitLines(s.children).join('\n'), help:'Une idée par ligne.'}
    ], values => commit(c => { const row = c.subtitleItems[index] || {}; c.subtitleItems[index] = Object.assign(row, values, {children:splitLines(values.children)}); c.mindmapBranches = c.subtitleItems.map(x => ({title:x.title, definition:x.definition, example:x.example, children:x.children || []})); }));
  }
  function editBranch(index){
    const {c} = selected(); const b = (c.mindmapBranches || [])[index] || {};
    openForm('Modifier une branche de carte mentale', [
      {name:'title', label:'Titre de la branche', value:b.title || ''},
      {name:'definition', label:'Définition courte', type:'textarea', rows:4, value:b.definition || ''},
      {name:'example', label:'Exemple', type:'textarea', rows:2, value:b.example || ''},
      {name:'children', label:'Sous-branches', type:'textarea', rows:4, value:splitLines(b.children).join('\n')}
    ], values => commit(c => { c.mindmapBranches[index] = Object.assign({}, b, values, {children:splitLines(values.children)}); }));
  }
  function visualFields(v){
    return [
      {name:'title', label:'Titre de l’image', value:v.title || ''},
      {name:'description', label:'Description / explication de l’image', type:'textarea', rows:4, value:v.description || ''},
      {name:'example', label:'Exemple lié à l’image', type:'textarea', rows:3, value:v.example || ''},
      {name:'media', label:'Parcourir une nouvelle image ou vidéo', type:'file', accept:'image/*,video/mp4,video/webm,video/ogg,video/quicktime,.png,.jpg,.jpeg,.webp,.svg,.mp4,.webm,.mov', help:'Laisse vide pour garder l’ancien média.'}
    ];
  }
  function audioFields(a){
    return [
      {name:'title', label:'Titre de l’audio', value:a.title || ''},
      {name:'text', label:'Texte / explication audio', type:'textarea', rows:5, value:a.text || ''},
      {name:'ar', label:'Explication en arabe si nécessaire', type:'textarea', rows:3, value:a.ar || ''},
      {name:'media', label:'Parcourir un nouveau fichier audio ou vidéo', type:'file', accept:'audio/*,video/mp4,video/webm,video/ogg,video/quicktime,.mp3,.wav,.m4a,.aac,.ogg,.mp4,.webm,.mov', help:'Laisse vide pour garder l’ancien média.'}
    ];
  }
  function kineFields(k){
    return [
      {name:'type', label:'Type d’exercice', value:k.type || 'Question directe'},
      {name:'question', label:'Question / consigne', type:'textarea', rows:4, value:k.question || ''},
      {name:'options', label:'Choix / éléments / propositions', type:'textarea', rows:4, value:k.options || '', help:'Un choix ou élément par ligne si nécessaire.'},
      {name:'answer', label:'Réponse attendue', type:'textarea', rows:2, value:k.answer || ''},
      {name:'correction', label:'Correction / explication', type:'textarea', rows:4, value:k.correction || ''}
    ];
  }
  function editVisual(si, index){
    const {c} = selected(); const s = c.subtitleItems[si]; if(!s) return; const v = s.visualItems[index] || {};
    openForm('Modifier le style visuel', visualFields(v), async (values, files) => {
      let src = v.src || '';
      if(files.media) src = await uploadFile(files.media, 'image');
      commit(c => { const s = c.subtitleItems[si]; if(!s) return; s.visualItems[index] = Object.assign({}, v, values, {src, subtitleTitle:s.title}); });
    });
  }
  function editAudio(si, index){
    const {c} = selected(); const s = c.subtitleItems[si]; if(!s) return; const a = s.audioItems[index] || {};
    openForm('Modifier le style auditif', audioFields(a), async (values, files) => {
      let src = a.src || '';
      if(files.media) src = await uploadFile(files.media, 'audio');
      commit(c => { const s = c.subtitleItems[si]; if(!s) return; s.audioItems[index] = Object.assign({}, a, values, {src, subtitleTitle:s.title}); });
    });
  }
  function editKine(si, index){
    const {c} = selected(); const s = c.subtitleItems[si]; if(!s) return; const k = s.kineExercises[index] || {};
    openForm('Modifier le style kinesthésique', kineFields(k), values => commit(c => { const s = c.subtitleItems[si]; if(!s) return; s.kineExercises[index] = Object.assign({}, k, values, {subtitleTitle:s.title}); }));
  }
  function editDict(index){
    const {c} = selected(); const d = c.dictionary[index] || {};
    openForm('Modifier le dictionnaire', [
      {name:'term', label:'Mot / terme', value:d.term || ''},
      {name:'value', label:'Définition / traduction', type:'textarea', rows:4, value:d.value || d.definition || ''}
    ], values => commit(c => { c.dictionary[index] = values; }));
  }
  function editScenario(){
    const {c} = selected();
    openForm('Modifier la situation d’intégration', [
      {name:'scenario', label:'Situation / contexte', type:'textarea', rows:6, value:c.scenario || ''}
    ], values => commit(c => { c.scenario = values.scenario; }));
  }
  function editTask(index){
    const {c} = selected(); const t = c.integrationTasks[index] || {};
    openForm('Modifier une question de situation', [
      {name:'task', label:'Question / tâche', type:'textarea', rows:4, value:t.task || t.question || ''},
      {name:'expected', label:'Réponse attendue', type:'textarea', rows:3, value:t.expected || t.correction || ''}
    ], values => commit(c => { c.integrationTasks[index] = values; }));
  }
  function editExam(index){
    const {c} = selected(); const ex = c.examQuestions[index] || {};
    openForm('Modifier une question du contrôle final', [
      {name:'question', label:'Question', type:'textarea', rows:4, value:ex.question || ''},
      {name:'options', label:'Choix de réponse', type:'textarea', rows:4, value:Array.isArray(ex.options) ? ex.options.join('\n') : ''},
      {name:'correct', label:'Numéro de la bonne réponse', value:String((Number(ex.correct || 0) + 1) || 1)}
    ], values => commit(c => { c.examQuestions[index] = {question:values.question, options:splitLines(values.options), correct:Math.max(0, Number(values.correct || 1) - 1)}; }));
  }

  function handleAdd(type, btnEl){
    if(type === 'subtitle') return openForm('Ajouter un sous-titre complet', [
      {name:'title', label:'Titre du sous-titre', value:'Nouveau sous-titre'},
      {name:'definition', label:'Définition / contenu du cours', type:'textarea', rows:5, value:''},
      {name:'example', label:'Exemple', type:'textarea', rows:3, value:''},
      {name:'children', label:'Sous-idées / branches secondaires', type:'textarea', rows:4, value:'', help:'Une idée par ligne.'}
    ], values => commit(c => { const row = {title:values.title, definition:values.definition, example:values.example, children:splitLines(values.children), visualItems:[], audioItems:[], kineExercises:[]}; c.subtitleItems.push(row); c.mindmapBranches.push({title:row.title, definition:row.definition, example:row.example, children:row.children}); }));
    if(type === 'branch') return openForm('Ajouter une branche de carte mentale', [
      {name:'title', label:'Titre de la branche', value:'Nouvelle branche'},
      {name:'definition', label:'Définition courte', type:'textarea', rows:4, value:''},
      {name:'example', label:'Exemple', type:'textarea', rows:2, value:''},
      {name:'children', label:'Sous-branches', type:'textarea', rows:4, value:''}
    ], values => commit(c => { c.mindmapBranches.push({title:values.title, definition:values.definition, example:values.example, children:splitLines(values.children)}); }));
    if(type === 'visual'){
      const si = Number(btnEl.dataset.si || 0);
      return openForm('Ajouter une image au style visuel', visualFields({title:'Nouvelle image'}), async (values, files) => {
        let src = '';
        if(files.media) src = await uploadFile(files.media, 'image');
        commit(c => { const s = c.subtitleItems[si]; if(!s) return; s.visualItems = Array.isArray(s.visualItems) ? s.visualItems : []; s.visualItems.push(Object.assign(values, {src, subtitleTitle:s.title})); });
      });
    }
    if(type === 'audio'){
      const si = Number(btnEl.dataset.si || 0);
      return openForm('Ajouter un audio au style auditif', audioFields({title:'Nouvel audio'}), async (values, files) => {
        let src = '';
        if(files.media) src = await uploadFile(files.media, 'audio');
        commit(c => { const s = c.subtitleItems[si]; if(!s) return; s.audioItems = Array.isArray(s.audioItems) ? s.audioItems : []; s.audioItems.push(Object.assign(values, {src, subtitleTitle:s.title})); });
      });
    }
    if(type === 'kine'){
      const si = Number(btnEl.dataset.si || 0);
      return openForm('Ajouter un exercice au style kinesthésique', kineFields({type:'Question directe'}), values => commit(c => { const s = c.subtitleItems[si]; if(!s) return; s.kineExercises = Array.isArray(s.kineExercises) ? s.kineExercises : []; s.kineExercises.push(Object.assign(values, {subtitleTitle:s.title})); }));
    }
    if(type === 'dict') return openForm('Ajouter un mot au dictionnaire', [
      {name:'term', label:'Mot / terme', value:''},
      {name:'value', label:'Définition / traduction', type:'textarea', rows:4, value:''}
    ], values => commit(c => { c.dictionary.push(values); }));
    if(type === 'task') return openForm('Ajouter une question à la situation', [
      {name:'task', label:'Question / tâche', type:'textarea', rows:4, value:''},
      {name:'expected', label:'Réponse attendue', type:'textarea', rows:3, value:''}
    ], values => commit(c => { c.integrationTasks.push(values); }));
    if(type === 'exam') return openForm('Ajouter une question au contrôle final', [
      {name:'question', label:'Question', type:'textarea', rows:4, value:''},
      {name:'options', label:'Choix de réponse', type:'textarea', rows:4, value:''},
      {name:'correct', label:'Numéro de la bonne réponse', value:'1'}
    ], values => commit(c => { c.examQuestions.push({question:values.question, options:splitLines(values.options), correct:Math.max(0, Number(values.correct || 1) - 1)}); }));
  }
  function handleEdit(type, btnEl){
    const i = Number(btnEl.dataset.index || 0);
    if(type === 'unit') return editUnit();
    if(type === 'subtitle') return editSubtitle(i);
    if(type === 'branch') return editBranch(i);
    if(type === 'visual') return editVisual(Number(btnEl.dataset.si || 0), i);
    if(type === 'audio') return editAudio(Number(btnEl.dataset.si || 0), i);
    if(type === 'kine') return editKine(Number(btnEl.dataset.si || 0), i);
    if(type === 'dict') return editDict(i);
    if(type === 'scenario') return editScenario();
    if(type === 'task') return editTask(i);
    if(type === 'exam') return editExam(i);
  }
  function handleDelete(type, btnEl){
    const i = Number(btnEl.dataset.index || 0);
    if(!window.confirm('Supprimer cet élément ?')) return;
    commit(c => {
      if(type === 'subtitle'){ c.subtitleItems.splice(i,1); c.mindmapBranches = c.subtitleItems.map(s => ({title:s.title, definition:s.definition, example:s.example, children:s.children || []})); }
      if(type === 'branch') c.mindmapBranches.splice(i,1);
      if(type === 'dict') c.dictionary.splice(i,1);
      if(type === 'task') c.integrationTasks.splice(i,1);
      if(type === 'exam') c.examQuestions.splice(i,1);
      if(type === 'visual'){ const s = c.subtitleItems[Number(btnEl.dataset.si || 0)]; if(s && Array.isArray(s.visualItems)) s.visualItems.splice(i,1); }
      if(type === 'audio'){ const s = c.subtitleItems[Number(btnEl.dataset.si || 0)]; if(s && Array.isArray(s.audioItems)) s.audioItems.splice(i,1); }
      if(type === 'kine'){ const s = c.subtitleItems[Number(btnEl.dataset.si || 0)]; if(s && Array.isArray(s.kineExercises)) s.kineExercises.splice(i,1); }
    });
  }

  function renderPanel(id){
    if(modalOpen) return;
    const panel = $('[data-v176-panel="modify"]');
    if(!panel) return;
    const unit = unitById(id || activeUnitId || $('[data-v231-unit-select]')?.value || $('[data-v230-unit-select]')?.value || '');
    if(!unit) return;
    activeUnitId = unit.id;
    panel.innerHTML = renderPage(unit, normalizeContent(derive(unit)));
  }
  function schedule(id, delay){ clearTimeout(timer); timer = setTimeout(() => renderPanel(id || activeUnitId), delay == null ? 220 : delay); }

  function injectCss(){
    if($('#v231-style')) return;
    const st = document.createElement('style');
    st.id = 'v231-style';
    st.textContent = `
      /* Élève encore plus compact */
      .v87-student-shell{background:#fbf8ff!important;padding:6px!important;}
      .v87-student-topbar{max-width:860px!important;margin:0 auto 5px!important;padding:6px 9px!important;border-radius:14px!important;min-height:0!important;}
      .v87-student-brand h1{font-size:1.05rem!important;margin:0!important}.v87-student-brand p{display:none!important}.v87-student-nav{gap:5px!important}.v87-user-pill,.v87-soft-btn,.v87-danger-btn{padding:6px 9px!important;font-size:.82rem!important;border-radius:999px!important;}
      .v87-student-main,.v87-student-page,.student-page,.unit-page{max-width:860px!important;margin:0 auto!important;padding:5px 8px!important;box-sizing:border-box!important;}
      .v87-student-main .panel,.v87-student-main section.panel,.content-card,.teacher-sheet,.visual-panel,.audio-panel,.kine-panel{padding:8px!important;border-radius:15px!important;margin-bottom:7px!important;box-shadow:0 8px 20px rgba(76,29,149,.07)!important;}
      .v87-student-main h1{font-size:clamp(1.15rem,1.7vw,1.65rem)!important;line-height:1.08!important;margin:.15rem 0!important;}
      .v87-student-main h2{font-size:clamp(1.02rem,1.45vw,1.32rem)!important;margin:.15rem 0!important;}.v87-student-main h3{font-size:clamp(.95rem,1.2vw,1.12rem)!important;margin:.12rem 0!important;}
      .v87-student-main p,.v87-student-main li{line-height:1.42!important;font-size:.94rem!important;margin:.25rem 0!important;}.v87-student-main img{max-height:175px!important;object-fit:contain!important;}.v87-student-main .tabs,.v87-student-main .visual-steps,.v87-student-main .course-points{gap:7px!important;}
      .v87-map-panel,.v91-mindmap-panel,.mindmap-sheet{padding:8px!important}.v88-tree-wrap{max-height:360px!important;overflow:auto!important;}

      /* Espace prof fixe + tableau de bord aux bordures larges */
      .v87-teacher-shell{background:linear-gradient(180deg,#f3e8ff,#fff)!important;padding:12px!important;overflow-x:hidden!important;}
      .v176-teacher-page,.v172-page,.v89-teacher-page,.v91-teacher-page{width:min(1180px,100%)!important;max-width:1180px!important;margin:0 auto!important;padding:15px!important;border-radius:22px!important;box-sizing:border-box!important;overflow-x:hidden!important;}
      .v176-dashboard{grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:12px!important;width:100%!important;}
      .v176-dash-card{border:4px solid rgba(124,58,237,.75)!important;outline:2px solid rgba(255,255,255,.95)!important;outline-offset:-7px!important;padding:14px 13px!important;border-radius:22px!important;background:linear-gradient(180deg,#fff,#faf5ff)!important;min-height:74px!important;box-shadow:0 16px 34px rgba(76,29,149,.13)!important;}
      .v176-dash-card.active,.v176-dash-card:hover{border-color:#5b21b6!important;box-shadow:0 20px 42px rgba(91,33,182,.22)!important;transform:translateY(-1px)!important;}
      .v176-dash-card strong{font-size:1.05rem!important;color:#3b0764!important;}.v176-dash-card small,.v176-panel-head p{display:none!important;}.v176-dash-icon{display:none!important;}
      .v176-panel,.v176-form-card,.v184-units-list-panel{padding:14px!important;border-radius:20px!important;border:2px solid rgba(124,58,237,.18)!important;box-shadow:0 14px 34px rgba(76,29,149,.10)!important;}
      .v176-teacher-hero{padding:15px!important;border-radius:20px!important;background:linear-gradient(135deg,#4c1d95,#8b5cf6)!important;}.v176-teacher-hero h1{font-size:1.55rem!important;margin:.1rem 0!important;}.v176-teacher-hero p{display:none!important;}

      /* Modifier unité final */
      [data-v176-panel="modify"]{padding:0!important;background:transparent!important;border:0!important;box-shadow:none!important;}
      .v231-modifier{background:linear-gradient(135deg,#4c1d95 0%,#7c3aed 42%,#ffffff 100%);border-radius:24px;padding:12px;box-shadow:0 18px 46px rgba(76,29,149,.20);}
      .v231-toolbar{position:sticky;top:8px;z-index:30;display:flex;align-items:center;justify-content:space-between;gap:10px;background:rgba(255,255,255,.97);border:2px solid rgba(124,58,237,.22);border-radius:16px;padding:8px 10px;box-shadow:0 12px 28px rgba(49,25,90,.13);}
      .v231-toolbar select{min-width:260px;max-width:100%;border:2px solid rgba(124,58,237,.35);border-radius:13px;background:#fff;color:#3b0764;padding:8px 10px;font:inherit;font-weight:950;}.v231-toolbar span{font-weight:900;color:#047857;}
      .v231-student-view{display:grid;gap:10px;max-width:980px;margin:0 auto;width:100%;}.v231-hero,.v231-section,.v231-subtitle,.v231-style-block,.v231-card,.v231-media-card,.v231-map-node{background:rgba(255,255,255,.98);border:1px solid rgba(124,58,237,.14);border-radius:17px;box-shadow:0 10px 24px rgba(49,25,90,.075);}
      .v231-hero{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;padding:14px;background:linear-gradient(135deg,#5b21b6,#a78bfa);color:#fff;}.v231-hero span{display:inline-block;background:rgba(255,255,255,.18);border-radius:999px;padding:4px 8px;font-weight:950}.v231-hero h2{font-size:1.55rem;margin:.35rem 0 .15rem}.v231-hero p{margin:0;line-height:1.45;}
      .v231-section{padding:11px;display:grid;gap:9px}.v231-head,.v231-mini-head,.v231-title-line,.v231-card-top{display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap}.v231-head h3,.v231-title-line h3,.v231-mini-head h4{margin:0;color:#3b0764;}.v231-lessons{display:grid;gap:10px}.v231-subtitle{padding:11px;display:grid;gap:8px}.v231-style-block{padding:10px;display:grid;gap:8px;background:linear-gradient(180deg,#fff,#fbf7ff)}
      .v231-grid,.v231-map-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(215px,1fr));gap:8px}.v231-card,.v231-media-card,.v231-map-node{padding:10px;display:grid;gap:7px}.v231-map-root{justify-self:center;border-radius:999px;background:#6d28d9;color:#fff;font-weight:1000;padding:10px 18px;text-align:center;box-shadow:0 10px 22px rgba(109,40,217,.22)}
      .v231-definition{background:#faf5ff;border:1px solid rgba(124,58,237,.14);border-radius:13px;padding:9px;line-height:1.5;color:#2e1065;margin:0}.v231-definition.muted{color:#75608b}.v231-example,.v231-card em,.v231-map-node em{background:#f3e8ff;border-radius:11px;padding:7px 9px;color:#4c1d95;font-style:normal;font-weight:850;margin:0}.v231-list{margin:.1rem 0 .1rem 1.05rem;line-height:1.45}.v231-card p,.v231-media-card p,.v231-map-node p{margin:0;line-height:1.45}.v231-card pre{white-space:pre-wrap;background:#fafafa;border:1px solid #eee;border-radius:11px;padding:7px;margin:0;}
      .v231-media-box{min-height:100px;border:1px dashed rgba(124,58,237,.30);border-radius:14px;background:#faf7ff;display:grid;place-items:center;overflow:hidden;padding:7px}.v231-media-box img{max-width:100%;max-height:185px;object-fit:contain;border-radius:10px}.v231-media-box video{width:100%;max-height:190px;border-radius:10px;background:#111827}.v231-media-box audio{width:100%}.v231-no-media{font-weight:850;color:#7c688d;text-align:center;}
      .v231-btn{border:0;border-radius:999px;background:#7c3aed;color:#fff;padding:7px 11px;cursor:pointer;font-weight:950;box-shadow:0 8px 18px rgba(124,58,237,.18);font-size:.86rem}.v231-btn:hover{background:#6d28d9}.v231-btn.edit{background:#5b21b6}.v231-btn.add{background:#7c3aed}.v231-btn.danger{background:#fff;color:#be123c;border:1px solid rgba(190,18,60,.25);box-shadow:none}.v231-btn.light{background:#fff;color:#4c1d95;border:1px solid rgba(124,58,237,.22);box-shadow:none}.v231-actions{display:flex;gap:6px;flex-wrap:wrap;align-items:center}.v231-empty{grid-column:1/-1;margin:0;border:1px dashed rgba(124,58,237,.27);background:#fbf7ff;color:#6b5b82;border-radius:13px;padding:9px;display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap;font-weight:850}.ar{direction:rtl;text-align:right;}
      .v231-modal{position:fixed;inset:0;z-index:99999;background:rgba(30,14,54,.55);display:grid;place-items:center;padding:18px}.v231-modal-card{width:min(680px,100%);max-height:92vh;overflow:auto;background:#fff;border-radius:24px;border:3px solid rgba(124,58,237,.35);box-shadow:0 24px 70px rgba(15,23,42,.30);}.v231-modal-head{position:sticky;top:0;background:linear-gradient(135deg,#5b21b6,#8b5cf6);color:#fff;padding:14px 16px;display:flex;justify-content:space-between;align-items:center;gap:10px;z-index:1}.v231-modal-head h3{margin:0;font-size:1.15rem}.v231-close{border:0;background:rgba(255,255,255,.18);color:#fff;border-radius:999px;width:34px;height:34px;font-size:24px;cursor:pointer}.v231-modal form{padding:15px;display:grid;gap:11px}.v231-field{display:grid;gap:6px}.v231-field span{font-weight:950;color:#3b0764}.v231-field input,.v231-field textarea,.v231-field select{width:100%;box-sizing:border-box;border:2px solid rgba(124,58,237,.22);border-radius:14px;padding:10px 12px;font:inherit;background:#fff;color:#1f1433}.v231-field textarea{resize:vertical}.v231-field small{color:#6b5b82;line-height:1.35}.v231-modal-actions{display:flex;justify-content:flex-end;gap:8px;flex-wrap:wrap;padding-top:4px}
      @media(max-width:820px){.v176-dashboard{grid-template-columns:1fr 1fr!important}.v231-toolbar,.v231-hero{align-items:stretch;flex-direction:column}.v231-toolbar select{width:100%;min-width:0}.v231-grid,.v231-map-grid{grid-template-columns:1fr}.v231-modifier{padding:8px}.v231-hero h2{font-size:1.3rem}}
    `;
    document.head.appendChild(st);
  }

  document.addEventListener('click', function(e){
    const add = e.target.closest && e.target.closest('[data-v231-add]');
    if(add){ e.preventDefault(); e.stopPropagation(); handleAdd(add.dataset.v231Add, add); return; }
    const edit = e.target.closest && e.target.closest('[data-v231-edit]');
    if(edit){ e.preventDefault(); e.stopPropagation(); handleEdit(edit.dataset.v231Edit, edit); return; }
    const del = e.target.closest && e.target.closest('[data-v231-del]');
    if(del){ e.preventDefault(); e.stopPropagation(); handleDelete(del.dataset.v231Del, del); return; }
    const dash = e.target.closest && e.target.closest('[data-v176-dashboard]');
    if(dash && dash.dataset.v176Dashboard === 'modify') schedule(activeUnitId, 450);
  }, true);
  document.addEventListener('change', function(e){
    const sel = e.target.closest && e.target.closest('[data-v231-unit-select]');
    if(sel){ activeUnitId = sel.value; renderPanel(activeUnitId); }
  }, true);

  function start(){
    injectCss();
    schedule('', 850);
    try{
      new MutationObserver(function(){
        const panel = $('[data-v176-panel="modify"]');
        if(panel && !$('.v231-modifier', panel) && !modalOpen) schedule(activeUnitId, 320);
      }).observe(document.body, {childList:true, subtree:true});
    }catch(e){}
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
  window.EPI_V231_FINAL = {renderPanel, derive, saveContent};
})();
