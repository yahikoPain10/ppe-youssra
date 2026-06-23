/* =========================================================
   ÉPI v230 — Version finale demandée
   - ZIP complet : tous les fichiers gardés.
   - Espace élève compact.
   - Espace prof plus fixe, plus simple, moins de détails.
   - Modifier unité : même logique d'affichage que l'espace élève,
     avec uniquement des boutons Ajouter / Supprimer sur les composants.
========================================================= */
(function(){
  'use strict';

  const STORE_PREFIX = 'epi_v170_unit_content_';
  const CUSTOM_KEYS = ['epi_v183_custom_units_visible','epi_v181_custom_units_visible','epi_v175_custom_units'];
  let activeUnitId = '';
  let timer = null;
  let rendering = false;

  const $ = (sel, root) => (root || document).querySelector(sel);
  const $$ = (sel, root) => Array.from((root || document).querySelectorAll(sel));
  const esc = value => String(value == null ? '' : value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
  const text = value => String(value == null ? '' : value).trim();
  const cleanTitle = value => text(value).replace(/^\s*Unité\s*\d+\s*:\s*/i,'').trim();
  const splitLines = value => Array.isArray(value) ? value.map(x => text(typeof x === 'object' ? (x.title || x.name || x.text || '') : x)).filter(Boolean) : String(value || '').split(/\n|•|;/).map(x => x.trim()).filter(Boolean);

  function readJson(key, fallback){ try{ const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }catch(e){ return fallback; } }
  function writeJson(key, value){ localStorage.setItem(key, JSON.stringify(value)); return true; }
  function keyFor(unit){ return STORE_PREFIX + String((unit && unit.id) || unit || 'unit'); }

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
        out.push(Object.assign({customUnit:true}, u));
      });
    });
    return out;
  }
  function allUnits(){
    const out = [];
    const seen = new Set();
    function add(u){
      if(!u || !u.id || u.hiddenFromStudent === true) return;
      const id = String(u.id);
      if(seen.has(id)) return;
      seen.add(id);
      out.push(u);
    }
    baseUnits().forEach(add);
    customUnits().forEach(add);
    return out;
  }
  function unitById(id){
    const rows = allUnits();
    return rows.find(u => String(u.id) === String(id)) || rows[0] || null;
  }
  function saved(unit){
    if(!unit) return {};
    const local = readJson(keyFor(unit), null);
    if(local && typeof local === 'object') return local;
    if(unit._v172TeacherContent && typeof unit._v172TeacherContent === 'object') return unit._v172TeacherContent;
    if(unit._v170TeacherContent && typeof unit._v170TeacherContent === 'object') return unit._v170TeacherContent;
    return {};
  }

  function normalizeVisual(x, i, subtitle){
    x = x || {};
    return {
      title: text(x.title || x.visualTitle || subtitle || `Image ${i+1}`),
      src: text(x.src || x.visualSrc || x.image || ''),
      description: text(x.description || x.visualDescription || x.definition || ''),
      example: text(x.example || x.visualExample || x.action || ''),
      subtitleTitle: text(x.subtitleTitle || x.subtitle || x.lessonTitle || subtitle || '')
    };
  }
  function normalizeAudio(x, i, subtitle){
    x = x || {};
    return {
      title: text(x.title || x.audioTitle || subtitle || `Audio ${i+1}`),
      src: text(x.src || x.audioSrc || ''),
      text: text(x.text || x.audioText || x.definition || ''),
      ar: text(x.ar || x.audioAr || ''),
      subtitleTitle: text(x.subtitleTitle || x.subtitle || x.lessonTitle || subtitle || '')
    };
  }
  function normalizeKine(x, i, subtitle){
    x = x || {};
    return {
      type: text(x.type || x.kineType || 'Question directe') || 'Question directe',
      question: text(x.question || x.kineQuestion || ''),
      options: text(x.options || x.kineOptions || x.pairs || x.steps || ''),
      answer: text(x.answer || x.kineAnswer || ''),
      correction: text(x.correction || x.kineCorrection || ''),
      subtitleTitle: text(x.subtitleTitle || x.subtitle || x.lessonTitle || subtitle || '')
    };
  }
  function sameKey(x){
    return [x && (x.src || ''), x && (x.title || ''), x && (x.text || ''), x && (x.question || ''), x && (x.description || '')].join('|').toLowerCase();
  }
  function mergeRows(a, b){
    const out = [];
    const seen = new Set();
    (a || []).concat(b || []).forEach(x => {
      const key = sameKey(x);
      if(!key.replace(/\|/g,'').trim()) return;
      if(seen.has(key)) return;
      seen.add(key);
      out.push(x);
    });
    return out;
  }
  function matchRows(rows, title, index){
    rows = Array.isArray(rows) ? rows : [];
    const nt = cleanTitle(title).toLowerCase();
    const bySub = rows.filter(x => cleanTitle(x && (x.subtitleTitle || x.subtitle || x.lessonTitle || '')).toLowerCase() === nt);
    if(bySub.length) return bySub;
    const byTitle = rows.filter(x => cleanTitle(x && (x.title || x.visualTitle || x.audioTitle || '')).toLowerCase() === nt);
    if(byTitle.length) return byTitle;
    return rows[index] ? [rows[index]] : [];
  }

  function derive(unit){
    try{
      if(window.EPI_V224_MODIFY_REAL && typeof window.EPI_V224_MODIFY_REAL.derive === 'function'){
        const d = window.EPI_V224_MODIFY_REAL.derive(unit);
        if(d && Array.isArray(d.subtitleItems)) return ensureDerived(unit, d);
      }
    }catch(e){}
    return ensureDerived(unit, null);
  }
  function ensureDerived(unit, base){
    const s = saved(unit);
    const lessons = Array.isArray(s.lessons) && s.lessons.length ? s.lessons : (Array.isArray(unit && unit.lessons) ? unit.lessons : []);
    const flatVisuals = Array.isArray(s.visualItems) ? s.visualItems : [];
    const flatAudios = Array.isArray(s.audioItems) ? s.audioItems : [];
    const flatKines = Array.isArray(s.kineQuestions) ? s.kineQuestions : (Array.isArray(s.kineExercises) ? s.kineExercises : []);
    let subtitleItems = base && Array.isArray(base.subtitleItems) && base.subtitleItems.length ? base.subtitleItems : [];
    if(!subtitleItems.length && Array.isArray(s.subtitleItems) && s.subtitleItems.length) subtitleItems = s.subtitleItems;
    if(!subtitleItems.length) subtitleItems = lessons.map((lesson, i) => ({
      title: lesson.title || `Sous-titre ${i+1}`,
      definition: lesson.fr || lesson.objective || '',
      example: Array.isArray(lesson.fill) ? (lesson.fill[1] || '') : '',
      children: Array.isArray(lesson.officialObjectives) ? lesson.officialObjectives : [],
      visualItems: lesson.visual && lesson.visual.image ? [{title:lesson.title || `Image ${i+1}`, src:lesson.visual.image, description:lesson.fr || lesson.objective || '', example:lesson.visual.example || ''}] : [],
      audioItems: lesson.fr || lesson.ar ? [{title:lesson.title || `Audio ${i+1}`, src:'', text:lesson.fr || lesson.objective || '', ar:lesson.ar || ''}] : [],
      kineExercises: []
    }));
    subtitleItems = subtitleItems.map((item, i) => {
      item = item || {};
      const lesson = lessons[i] || {};
      const title = text(item.title || lesson.title || `Sous-titre ${i+1}`);
      const visualItems = mergeRows((Array.isArray(item.visualItems) ? item.visualItems : []).map((x,j)=>normalizeVisual(x,j,title)), matchRows(flatVisuals, title, i).map((x,j)=>normalizeVisual(x,j,title)));
      const audioItems = mergeRows((Array.isArray(item.audioItems) ? item.audioItems : []).map((x,j)=>normalizeAudio(x,j,title)), matchRows(flatAudios, title, i).map((x,j)=>normalizeAudio(x,j,title)));
      let kineExercises = (Array.isArray(item.kineExercises) ? item.kineExercises : []).map((x,j)=>normalizeKine(x,j,title));
      if(!kineExercises.length) kineExercises = matchRows(flatKines, title, i).map((x,j)=>normalizeKine(x,j,title));
      return {
        title,
        definition:text(item.definition || lesson.fr || lesson.objective || ''),
        example:text(item.example || ''),
        children:splitLines(item.children),
        visualItems,
        audioItems,
        kineExercises
      };
    });
    const mindmapBranches = Array.isArray(s.mindmapBranches) && s.mindmapBranches.length ? s.mindmapBranches : (base && Array.isArray(base.mindmapBranches) && base.mindmapBranches.length ? base.mindmapBranches : subtitleItems.map(x => ({title:x.title, definition:x.definition, example:x.example, children:x.children})));
    const integration = unit && unit.integration || {};
    const examRaw = Array.isArray(s.examQuestions) ? s.examQuestions : (Array.isArray(s.exam) ? s.exam : (Array.isArray(unit && unit.exam) ? unit.exam : []));
    const examQuestions = examRaw.map(ex => Array.isArray(ex) ? {question:ex[0] || '', options:ex[1] || [], correct:ex[2] || 0} : ex).filter(Boolean);
    const dictionaryRaw = Array.isArray(s.dictionary) ? s.dictionary : (Array.isArray(unit && unit.dictionary) ? unit.dictionary : []);
    const dictionary = dictionaryRaw.map(d => Array.isArray(d) ? {term:d[0] || '', value:d[1] || ''} : {term:d.term || d.word || '', value:d.value || d.translation || d.definition || ''});
    const tasksRaw = Array.isArray(s.integrationTasks) ? s.integrationTasks : (Array.isArray(integration.tasks) ? integration.tasks.map(t => ({task:t, expected:''})) : []);
    return Object.assign({}, s, base || {}, {
      title:text((base && base.title) || s.title || unit.title || ''),
      short:text((base && base.short) || s.short || unit.short || ''),
      intro:text((base && base.intro) || s.intro || unit.intro || ''),
      competence:text((base && base.competence) || s.competence || unit.competence || ''),
      duration:text((base && base.duration) || s.duration || unit.duration || ''),
      schoolYear:text((base && base.schoolYear) || s.schoolYear || unit.schoolYear || '1ac'),
      subtitleItems,
      mindmapBranches,
      dictionary,
      scenario:text(s.scenario || s.integrationScenario || integration.scenario || ''),
      integrationTasks:tasksRaw.map(t => typeof t === 'string' ? {task:t, expected:''} : t),
      examQuestions
    });
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
    if(!url) return '<div class="v230-empty">Aucun média</div>';
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
  async function uploadFile(file, forcedKind){
    const kind = forcedKind || fileKind(file);
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

  function buildLessons(items){
    return (items || []).map(item => ({
      title:item.title,
      officialFocus:item.title,
      objective:item.definition,
      fr:item.definition,
      ar:(item.audioItems && item.audioItems[0] && item.audioItems[0].ar) || '',
      officialObjectives:item.children || [],
      visual:{image:(item.visualItems && item.visualItems[0] && item.visualItems[0].src) || '', example:(item.visualItems && item.visualItems[0] && item.visualItems[0].example) || ''},
      fill:[item.example ? `Exemple : ${item.example}` : 'Exemple : ____', item.example || '', [item.example || 'Exemple', item.title || 'Notion', 'Autre exemple']],
      drag:[[item.title || 'Notion', item.definition || 'Définition']],
      order:{title:item.title || 'Ordre', steps:item.children || []}
    }));
  }
  function flattenVisuals(items){ return (items || []).flatMap(s => (s.visualItems || []).map(v => Object.assign({}, v, {subtitleTitle:s.title}))); }
  function flattenAudios(items){ return (items || []).flatMap(s => (s.audioItems || []).map(a => Object.assign({}, a, {subtitleTitle:s.title}))); }
  function flattenKines(items){ return (items || []).flatMap(s => (s.kineExercises || []).map(k => Object.assign({}, k, {subtitleTitle:s.title}))); }
  function saveContent(unit, c, silent){
    const payload = Object.assign({}, saved(unit), c);
    payload.subtitleItems = Array.isArray(payload.subtitleItems) ? payload.subtitleItems : [];
    payload.mindmapBranches = Array.isArray(payload.mindmapBranches) && payload.mindmapBranches.length ? payload.mindmapBranches : payload.subtitleItems.map(s => ({title:s.title, definition:s.definition, example:s.example, children:s.children}));
    payload.lessons = buildLessons(payload.subtitleItems);
    payload.visualItems = flattenVisuals(payload.subtitleItems);
    payload.audioItems = flattenAudios(payload.subtitleItems);
    payload.kineQuestions = flattenKines(payload.subtitleItems);
    payload.exam = payload.examQuestions || [];
    payload.questions = payload.integrationTasks || [];
    writeJson(keyFor(unit), payload);
    try{
      Object.assign(unit, {title:payload.title || unit.title, short:payload.short || unit.short, intro:payload.intro || unit.intro, competence:payload.competence || unit.competence, duration:payload.duration || unit.duration, schoolYear:payload.schoolYear || unit.schoolYear, lessons:payload.lessons, dictionary:payload.dictionary, exam:payload.examQuestions, _v172TeacherContent:payload});
      CUSTOM_KEYS.forEach(key => {
        const rows = readJson(key, []);
        if(Array.isArray(rows)){
          const idx = rows.findIndex(u => u && String(u.id) === String(unit.id));
          if(idx >= 0){ rows[idx] = Object.assign({}, rows[idx], unit, {customUnit:true, hiddenFromStudent:false}); writeJson(key, rows); }
        }
      });
    }catch(e){}
    if(!silent){
      const msg = $('[data-v230-msg]');
      if(msg){ msg.textContent = 'Modifications enregistrées.'; setTimeout(() => { msg.textContent = ''; }, 1700); }
    }
  }

  function selected(){
    const unit = unitById(activeUnitId || $('[data-v230-unit-select]')?.value);
    return {unit, c:derive(unit)};
  }
  function updateContent(mutator){
    const {unit, c} = selected();
    if(!unit) return;
    mutator(c, unit);
    saveContent(unit, c, false);
    renderPanel(unit.id);
  }

  function button(label, attrs, danger){ return `<button type="button" class="v230-btn ${danger ? 'danger' : ''}" ${attrs || ''}>${esc(label)}</button>`; }
  function empty(label){ return `<p class="v230-empty">${esc(label)}</p>`; }
  function titleBlock(label, addAttrs){
    return `<div class="v230-section-head"><h3>${esc(label)}</h3>${addAttrs ? button('Ajouter', addAttrs) : ''}</div>`;
  }
  function renderActions(deleteAttrs){ return `<div class="v230-actions">${button('Supprimer', deleteAttrs, true)}</div>`; }

  function renderMindmap(c){
    const rows = Array.isArray(c.mindmapBranches) && c.mindmapBranches.length ? c.mindmapBranches : (c.subtitleItems || []).map(s => ({title:s.title, definition:s.definition, example:s.example, children:s.children}));
    return `<section class="v230-section v230-mindmap">
      ${titleBlock('Carte mentale', 'data-v230-add="branch"')}
      <div class="v230-map-root">${esc(cleanTitle(c.title) || 'Unité')}</div>
      <div class="v230-map-grid">
        ${rows.map((b,i) => `<article class="v230-map-node"><div><strong>${esc(b.title || `Branche ${i+1}`)}</strong>${renderActions(`data-v230-del="branch" data-index="${i}"`)}</div>${b.definition ? `<p>${esc(b.definition)}</p>` : ''}${b.example ? `<em>Exemple : ${esc(b.example)}</em>` : ''}${splitLines(b.children).length ? `<ul>${splitLines(b.children).map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}</article>`).join('') || empty('Aucune branche')}
      </div>
    </section>`;
  }
  function renderVisual(v, si, vi){
    return `<article class="v230-media-card"><div class="v230-card-top"><strong>${esc(v.title || `Image ${vi+1}`)}</strong>${renderActions(`data-v230-del="visual" data-si="${si}" data-index="${vi}"`)}</div><div class="v230-media-box">${mediaPreview(v.src, v.title)}</div>${v.description ? `<p>${esc(v.description)}</p>` : ''}${v.example ? `<em>${esc(v.example)}</em>` : ''}</article>`;
  }
  function renderAudio(a, si, ai){
    return `<article class="v230-media-card"><div class="v230-card-top"><strong>${esc(a.title || `Audio ${ai+1}`)}</strong>${renderActions(`data-v230-del="audio" data-si="${si}" data-index="${ai}"`)}</div><div class="v230-media-box audio">${mediaPreview(a.src, a.title)}</div>${a.text ? `<p>${esc(a.text)}</p>` : ''}${a.ar ? `<p class="ar">${esc(a.ar)}</p>` : ''}</article>`;
  }
  function renderKine(k, si, ki){
    return `<article class="v230-card"><div class="v230-card-top"><strong>${esc(k.type || `Exercice ${ki+1}`)}</strong>${renderActions(`data-v230-del="kine" data-si="${si}" data-index="${ki}"`)}</div>${k.question ? `<p>${esc(k.question)}</p>` : ''}${k.options ? `<pre>${esc(k.options)}</pre>` : ''}${k.answer ? `<em>Réponse : ${esc(k.answer)}</em>` : ''}${k.correction ? `<p>${esc(k.correction)}</p>` : ''}</article>`;
  }
  function renderSubtitle(s, si){
    const visuals = Array.isArray(s.visualItems) ? s.visualItems : [];
    const audios = Array.isArray(s.audioItems) ? s.audioItems : [];
    const kines = Array.isArray(s.kineExercises) ? s.kineExercises : [];
    return `<article class="v230-subtitle">
      <div class="v230-title-line"><h3>${esc(s.title || `Sous-titre ${si+1}`)}</h3>${renderActions(`data-v230-del="subtitle" data-index="${si}"`)}</div>
      ${s.definition ? `<p class="v230-definition">${esc(s.definition)}</p>` : ''}
      ${s.example ? `<p class="v230-example"><strong>Exemple :</strong> ${esc(s.example)}</p>` : ''}
      ${splitLines(s.children).length ? `<ul class="v230-list">${splitLines(s.children).map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
      <section class="v230-mini"><div class="v230-mini-head"><h4>Style visuel</h4>${button('Ajouter', `data-v230-add="visual" data-si="${si}"`)}</div><div class="v230-grid">${visuals.map((v,i)=>renderVisual(v,si,i)).join('') || empty('Aucune image')}</div></section>
      <section class="v230-mini"><div class="v230-mini-head"><h4>Style auditif</h4>${button('Ajouter', `data-v230-add="audio" data-si="${si}"`)}</div><div class="v230-grid">${audios.map((a,i)=>renderAudio(a,si,i)).join('') || empty('Aucun audio')}</div></section>
      <section class="v230-mini"><div class="v230-mini-head"><h4>Style kinesthésique</h4>${button('Ajouter', `data-v230-add="kine" data-si="${si}"`)}</div><div class="v230-grid">${kines.map((k,i)=>renderKine(k,si,i)).join('') || empty('Aucun exercice')}</div></section>
    </article>`;
  }
  function renderDictionary(c){
    const rows = Array.isArray(c.dictionary) ? c.dictionary : [];
    return `<section class="v230-section">${titleBlock('Dictionnaire', 'data-v230-add="dict"')}<div class="v230-grid">${rows.map((d,i)=>`<article class="v230-card"><div class="v230-card-top"><strong>${esc(d.term || `Mot ${i+1}`)}</strong>${renderActions(`data-v230-del="dict" data-index="${i}"`)}</div><p>${esc(d.value || '')}</p></article>`).join('') || empty('Aucun mot')}</div></section>`;
  }
  function renderIntegration(c){
    const rows = Array.isArray(c.integrationTasks) ? c.integrationTasks : [];
    return `<section class="v230-section">${titleBlock('Situation d’intégration', 'data-v230-add="task"')}${c.scenario ? `<p class="v230-definition">${esc(c.scenario)}</p>` : ''}<div class="v230-grid">${rows.map((t,i)=>`<article class="v230-card"><div class="v230-card-top"><strong>Question ${i+1}</strong>${renderActions(`data-v230-del="task" data-index="${i}"`)}</div><p>${esc(t.task || t.question || '')}</p>${(t.expected || t.correction) ? `<em>${esc(t.expected || t.correction)}</em>` : ''}</article>`).join('') || empty('Aucune question')}</div></section>`;
  }
  function renderExam(c){
    const rows = Array.isArray(c.examQuestions) ? c.examQuestions : [];
    return `<section class="v230-section">${titleBlock('Contrôle final', 'data-v230-add="exam"')}<div class="v230-grid">${rows.map((ex,i)=>`<article class="v230-card"><div class="v230-card-top"><strong>Question ${i+1}</strong>${renderActions(`data-v230-del="exam" data-index="${i}"`)}</div><p>${esc(ex.question || '')}</p>${Array.isArray(ex.options) && ex.options.length ? `<ol>${ex.options.map(op => `<li>${esc(op)}</li>`).join('')}</ol>` : ''}</article>`).join('') || empty('Aucune question')}</div></section>`;
  }
  function renderPage(unit, c){
    return `<div class="v230-modifier" data-v230-modifier data-v224-modify>
      <div class="v230-toolbar"><select data-v230-unit-select>${allUnits().map(u => `<option value="${esc(u.id)}" ${String(u.id)===String(unit.id)?'selected':''}>${esc(cleanTitle(u.title || u.id))}</option>`).join('')}</select><span data-v230-msg></span></div>
      <main class="v230-student-view" data-v230-unit-id="${esc(unit.id)}">
        <section class="v230-hero"><span>Modifier unité</span><h2>${esc(c.title || unit.title || '')}</h2>${c.intro || c.short ? `<p>${esc(c.intro || c.short)}</p>` : ''}</section>
        ${renderMindmap(c)}
        <section class="v230-section">${titleBlock('Contenu de l’unité', 'data-v230-add="subtitle"')}<div class="v230-lessons">${(c.subtitleItems || []).map(renderSubtitle).join('') || empty('Aucun sous-titre')}</div></section>
        ${renderDictionary(c)}
        ${renderIntegration(c)}
        ${renderExam(c)}
      </main>
    </div>`;
  }

  function renderPanel(id){
    if(rendering) return;
    const panel = $('[data-v176-panel="modify"]');
    if(!panel) return;
    const unit = unitById(id || activeUnitId || $('[data-v230-unit-select]')?.value || $('[data-v224-unit]')?.dataset.v224Unit || '');
    if(!unit) return;
    activeUnitId = unit.id;
    rendering = true;
    panel.innerHTML = renderPage(unit, derive(unit));
    rendering = false;
  }
  function schedule(id, delay){ clearTimeout(timer); timer = setTimeout(() => renderPanel(id || activeUnitId), delay == null ? 150 : delay); }

  async function pickAndUpload(kind){
    return new Promise((resolve, reject) => {
      const input = document.createElement('input');
      input.type = 'file';
      input.accept = kind === 'audio' ? 'audio/*,video/mp4,video/webm,video/ogg,video/quicktime,.mp3,.wav,.m4a,.aac,.ogg,.mp4,.webm,.mov' : 'image/*,video/mp4,video/webm,video/ogg,video/quicktime,.png,.jpg,.jpeg,.webp,.svg,.mp4,.webm,.mov';
      input.style.position = 'fixed';
      input.style.left = '-9999px';
      document.body.appendChild(input);
      input.addEventListener('change', async () => {
        const file = input.files && input.files[0];
        input.remove();
        if(!file) return resolve(null);
        try{ resolve({ref:await uploadFile(file, kind === 'audio' ? undefined : undefined), file}); }
        catch(err){ reject(err); }
      }, {once:true});
      input.click();
    });
  }
  function ask(label, def){
    const value = window.prompt(label, def || '');
    return value == null ? null : text(value);
  }
  async function handleAdd(type, btn){
    if(type === 'visual' || type === 'audio'){
      const si = Number(btn.dataset.si || 0);
      const msg = $('[data-v230-msg]'); if(msg) msg.textContent = 'Import du média...';
      try{
        const result = await pickAndUpload(type);
        if(!result) { if(msg) msg.textContent = ''; return; }
        updateContent(c => {
          const s = c.subtitleItems[si]; if(!s) return;
          if(type === 'visual'){
            s.visualItems = Array.isArray(s.visualItems) ? s.visualItems : [];
            s.visualItems.push({title:result.file.name || 'Nouvelle image', src:result.ref, description:'', example:'', subtitleTitle:s.title});
          }else{
            s.audioItems = Array.isArray(s.audioItems) ? s.audioItems : [];
            s.audioItems.push({title:result.file.name || 'Nouvel audio', src:result.ref, text:'', ar:'', subtitleTitle:s.title});
          }
        });
      }catch(err){ console.error(err); alert('Import impossible. Lance node server.js puis réessaie.'); if(msg) msg.textContent = ''; }
      return;
    }
    if(type === 'subtitle'){
      const title = ask('Titre du nouveau sous-titre :', 'Nouveau sous-titre'); if(title == null) return;
      const definition = ask('Définition / contenu :', '');
      updateContent(c => { c.subtitleItems.push({title, definition:definition || '', example:'', children:[], visualItems:[], audioItems:[], kineExercises:[]}); c.mindmapBranches.push({title, definition:definition || '', example:'', children:[]}); });
      return;
    }
    if(type === 'branch'){
      const title = ask('Titre de la nouvelle branche :', 'Nouvelle branche'); if(title == null) return;
      const definition = ask('Définition courte :', '');
      updateContent(c => { c.mindmapBranches.push({title, definition:definition || '', example:'', children:[]}); });
      return;
    }
    if(type === 'kine'){
      const si = Number(btn.dataset.si || 0);
      const question = ask('Question de l’exercice :', ''); if(question == null) return;
      const answer = ask('Réponse / correction courte :', '');
      updateContent(c => { const s = c.subtitleItems[si]; if(!s) return; s.kineExercises = Array.isArray(s.kineExercises) ? s.kineExercises : []; s.kineExercises.push({type:'Question directe', question, options:'', answer:answer || '', correction:'', subtitleTitle:s.title}); });
      return;
    }
    if(type === 'dict'){
      const term = ask('Mot à ajouter :', ''); if(term == null) return;
      const value = ask('Explication / traduction :', '');
      updateContent(c => { c.dictionary.push({term, value:value || ''}); });
      return;
    }
    if(type === 'task'){
      const task = ask('Question de la situation d’intégration :', ''); if(task == null) return;
      const expected = ask('Réponse attendue :', '');
      updateContent(c => { c.integrationTasks.push({task, expected:expected || ''}); });
      return;
    }
    if(type === 'exam'){
      const question = ask('Question du contrôle final :', ''); if(question == null) return;
      updateContent(c => { c.examQuestions.push({question, options:[], correct:0}); });
    }
  }
  function handleDelete(type, btn){
    const i = Number(btn.dataset.index || 0);
    updateContent(c => {
      if(type === 'subtitle') c.subtitleItems.splice(i, 1);
      if(type === 'branch') c.mindmapBranches.splice(i, 1);
      if(type === 'dict') c.dictionary.splice(i, 1);
      if(type === 'task') c.integrationTasks.splice(i, 1);
      if(type === 'exam') c.examQuestions.splice(i, 1);
      if(type === 'visual'){ const s = c.subtitleItems[Number(btn.dataset.si || 0)]; if(s && Array.isArray(s.visualItems)) s.visualItems.splice(i, 1); }
      if(type === 'audio'){ const s = c.subtitleItems[Number(btn.dataset.si || 0)]; if(s && Array.isArray(s.audioItems)) s.audioItems.splice(i, 1); }
      if(type === 'kine'){ const s = c.subtitleItems[Number(btn.dataset.si || 0)]; if(s && Array.isArray(s.kineExercises)) s.kineExercises.splice(i, 1); }
    });
  }

  function injectCss(){
    if($('#v230-style')) return;
    const st = document.createElement('style');
    st.id = 'v230-style';
    st.textContent = `
      /* Espace élève compact */
      .v87-student-shell{background:#f8f5ff!important;}
      .v87-student-topbar{max-width:980px!important;margin:0 auto 8px!important;padding:8px 12px!important;border-radius:16px!important;}
      .v87-student-main,.v87-student-page,.student-page{max-width:980px!important;margin:0 auto!important;padding:10px 12px!important;box-sizing:border-box!important;}
      .v87-student-main .panel,.v87-student-main section.panel{padding:12px!important;border-radius:18px!important;margin-bottom:10px!important;}
      .v87-student-main h1{font-size:clamp(1.35rem,2vw,2rem)!important;line-height:1.12!important;margin:.25rem 0!important;}
      .v87-student-main h2{font-size:clamp(1.15rem,1.7vw,1.55rem)!important;margin:.25rem 0!important;}
      .v87-student-main h3{font-size:clamp(1rem,1.35vw,1.22rem)!important;margin:.2rem 0!important;}
      .v87-student-main p,.v87-student-main li{line-height:1.5!important;}
      .v87-student-main img{max-height:240px!important;object-fit:contain!important;}

      /* Espace prof fixe et simplifié */
      .v87-teacher-shell{background:linear-gradient(180deg,#f5f0ff,#fff)!important;padding:14px!important;overflow-x:hidden!important;}
      .v176-teacher-page,.v172-page{width:min(1080px,100%)!important;max-width:1080px!important;margin:0 auto!important;padding:16px!important;border-radius:22px!important;box-sizing:border-box!important;overflow-x:hidden!important;}
      .v176-teacher-hero{padding:16px!important;border-radius:20px!important;background:linear-gradient(135deg,#5b21b6,#8b5cf6)!important;}
      .v176-teacher-hero h1{font-size:1.55rem!important;margin:.1rem 0!important;}
      .v176-teacher-hero p,.v176-panel-head p,.v176-dash-card small,.v184-units-list-panel .v176-panel-head p{display:none!important;}
      .v176-dashboard{grid-template-columns:repeat(4,minmax(0,1fr))!important;gap:9px!important;}
      .v176-dash-card{padding:11px 12px!important;border-radius:17px!important;min-height:0!important;background:#fff!important;}
      .v176-dash-icon{display:none!important;}
      .v176-dash-card strong{font-size:.98rem!important;color:#3b0764!important;}
      .v176-panel,.v176-form-card,.v184-units-list-panel{padding:13px!important;border-radius:18px!important;box-shadow:0 12px 30px rgba(76,29,149,.10)!important;}

      /* Modifier unité */
      [data-v176-panel="modify"]{padding:0!important;background:transparent!important;border:0!important;box-shadow:none!important;}
      .v230-modifier{background:linear-gradient(135deg,#5b21b6 0%,#7c3aed 36%,#fff 100%);border-radius:24px;padding:14px;box-shadow:0 18px 46px rgba(76,29,149,.20);}
      .v230-toolbar{position:sticky;top:8px;z-index:30;display:flex;gap:10px;align-items:center;justify-content:space-between;background:rgba(255,255,255,.96);border:1px solid rgba(124,58,237,.18);border-radius:16px;padding:9px;box-shadow:0 12px 28px rgba(49,25,90,.13);}
      .v230-toolbar select{min-width:250px;max-width:100%;border:2px solid rgba(124,58,237,.25);border-radius:13px;background:#fff;color:#3b0764;padding:9px 11px;font:inherit;font-weight:900;}
      .v230-toolbar span{color:#047857;font-weight:900;}
      .v230-student-view{display:grid;gap:12px;max-width:980px;margin:0 auto;width:100%;}
      .v230-hero,.v230-section,.v230-subtitle,.v230-mini,.v230-card,.v230-media-card,.v230-map-node{background:rgba(255,255,255,.97);border:1px solid rgba(124,58,237,.12);border-radius:18px;box-shadow:0 10px 26px rgba(49,25,90,.08);}
      .v230-hero{padding:18px;background:linear-gradient(135deg,#6d28d9,#a78bfa);color:#fff;}
      .v230-hero span{display:inline-block;background:rgba(255,255,255,.16);border-radius:999px;padding:5px 9px;font-weight:900;}
      .v230-hero h2{margin:.5rem 0 .25rem;font-size:1.75rem;}.v230-hero p{margin:0;line-height:1.55;}
      .v230-section{padding:13px;display:grid;gap:11px;}
      .v230-section-head,.v230-mini-head,.v230-title-line,.v230-card-top,.v230-map-node>div{display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;}
      .v230-section h3,.v230-mini h4,.v230-title-line h3{margin:0;color:#3b0764;}
      .v230-lessons{display:grid;gap:12px;}.v230-subtitle{padding:13px;display:grid;gap:10px;}.v230-mini{padding:11px;display:grid;gap:9px;background:linear-gradient(180deg,#fff,#fbf8ff);}
      .v230-grid,.v230-map-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:10px;}.v230-card,.v230-media-card,.v230-map-node{padding:11px;display:grid;gap:8px;}
      .v230-map-root{justify-self:center;border-radius:999px;background:#6d28d9;color:#fff;font-weight:1000;padding:13px 22px;text-align:center;box-shadow:0 12px 26px rgba(109,40,217,.24)}
      .v230-definition{background:#faf7ff;border:1px solid rgba(124,58,237,.14);border-radius:14px;padding:10px;line-height:1.6;color:#2e1065;margin:0;}
      .v230-example,.v230-card em,.v230-map-node em{background:#f5f3ff;border-radius:12px;padding:8px 10px;color:#4c1d95;font-style:normal;font-weight:800;margin:0;}
      .v230-list{margin:.2rem 0 .2rem 1.1rem;line-height:1.55;}.v230-card p,.v230-media-card p,.v230-map-node p{margin:0;line-height:1.55;}.v230-card pre{white-space:pre-wrap;background:#fafafa;border:1px solid #eee;border-radius:12px;padding:8px;margin:0;}
      .v230-media-box{min-height:115px;border:1px dashed rgba(124,58,237,.28);border-radius:15px;background:#faf7ff;display:grid;place-items:center;overflow:hidden;padding:8px}.v230-media-box img{max-width:100%;max-height:210px;object-fit:contain;border-radius:12px}.v230-media-box video{width:100%;max-height:220px;border-radius:12px;background:#111827}.v230-media-box audio{width:100%}
      .v230-btn{border:0;border-radius:999px;background:#7c3aed;color:#fff;padding:8px 12px;cursor:pointer;font-weight:950;box-shadow:0 8px 18px rgba(124,58,237,.20);font-size:.9rem}.v230-btn:hover{background:#6d28d9}.v230-btn.danger{background:#fff;color:#be123c;border:1px solid rgba(190,18,60,.22);box-shadow:none}.v230-actions{display:flex;gap:6px;flex-wrap:wrap}.v230-empty{margin:0;border:1px dashed rgba(124,58,237,.24);background:#faf7ff;color:#6b5b82;border-radius:13px;padding:9px;text-align:center;font-weight:850}.ar{direction:rtl;text-align:right;}
      @media(max-width:760px){.v176-dashboard{grid-template-columns:1fr 1fr!important}.v176-teacher-page,.v172-page{padding:10px!important}.v230-toolbar{align-items:stretch;flex-direction:column}.v230-toolbar select{width:100%}.v230-modifier{padding:9px}.v230-grid,.v230-map-grid{grid-template-columns:1fr}.v230-hero h2{font-size:1.35rem}}
    `;
    document.head.appendChild(st);
  }

  document.addEventListener('click', function(e){
    const dash = e.target.closest && e.target.closest('[data-v176-dashboard]');
    if(dash && dash.dataset.v176Dashboard === 'modify') setTimeout(() => schedule(activeUnitId, 220), 120);
    const add = e.target.closest && e.target.closest('[data-v230-add]');
    if(add){ e.preventDefault(); handleAdd(add.dataset.v230Add, add); return; }
    const del = e.target.closest && e.target.closest('[data-v230-del]');
    if(del){ e.preventDefault(); handleDelete(del.dataset.v230Del, del); return; }
  }, true);
  document.addEventListener('change', function(e){
    const sel = e.target.closest && e.target.closest('[data-v230-unit-select]');
    if(sel){ activeUnitId = sel.value; renderPanel(activeUnitId); }
  }, true);

  function start(){
    injectCss();
    schedule('', 600);
    try{
      new MutationObserver(function(){
        const panel = $('[data-v176-panel="modify"]');
        if(panel && !$('.v230-modifier', panel)) schedule(activeUnitId, 260);
      }).observe(document.body, {childList:true, subtree:true});
    }catch(e){}
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();

  window.EPI_V230_FINAL = {renderPanel, derive, saveContent};
})();
