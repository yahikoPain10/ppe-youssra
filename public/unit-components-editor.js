/* =========================================================
   ÉPI v235 — Modifier unité : gestion réelle des composants
   - supprime l'ancien contenu de « Modifier unité » et le remplace par une seule interface ;
   - affiche réellement les styles : images, audios, exercices ;
   - chaque composant peut être modifié, supprimé, remplacé par Parcourir, ou ajouté ;
   - nettoie la situation d'intégration dans « Ajouter unité » : pas de bouton Supprimer en haut, pas de libellé Consigne.
========================================================= */
(function(){
  'use strict';

  const STORE_PREFIX = 'epi_v170_unit_content_';
  const CUSTOM_KEYS = ['epi_v183_custom_units_visible','epi_v181_custom_units_visible','epi_v175_custom_units'];
  let activeUnitId = '';
  let activeData = null;
  let rendering = false;

  const $ = (s, r=document) => r.querySelector(s);
  const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
  const text = v => String(v == null ? '' : v).trim();
  const esc = v => String(v == null ? '' : v).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));
  const cleanTitle = v => text(v).replace(/^\s*Unité\s*\d+\s*:\s*/i,'').trim();
  const lines = v => Array.isArray(v)
    ? v.map(x => typeof x === 'object' ? text(x.title || x.text || x.name || x.value || '') : text(x)).filter(Boolean)
    : String(v || '').split(/\n|•|;/).map(x => x.trim()).filter(Boolean);
  const keyOf = unit => STORE_PREFIX + String((unit && unit.id) || unit || 'unit');
  function splitChildLine(line){
    const raw = text(line);
    if(!raw) return null;
    let parts = raw.split('||');
    if(parts.length < 2) parts = raw.split(/\s+[–—-]\s+/);
    if(parts.length < 2) return {title:raw, definition:''};
    return {title:text(parts.shift()), definition:text(parts.join(' - '))};
  }
  function normalizeChildren(value){
    const rows = Array.isArray(value) ? value : lines(value);
    return rows.map(item => {
      if(item && typeof item === 'object') return {title:text(item.title || item.name || item.text || item.label || item.value || ''), definition:text(item.definition || item.description || item.detail || '')};
      return splitChildLine(item);
    }).filter(item => item && (item.title || item.definition));
  }
  function childTitles(value){ return normalizeChildren(value).map(item => item.title).filter(Boolean); }
  function childRowsHtml(value){
    const rows = normalizeChildren(value);
    const items = rows.length ? rows : [{title:'', definition:''}];
    return items.map((item, i) => `<article class="v235-child-row" data-v235-child-row>
      <div class="v235-card-head"><strong>Sous-fil ${i+1}</strong><button type="button" class="v235-btn danger" data-v235-remove-child>Supprimer</button></div>
      <label class="v235-field"><span>Nom du sous-fil</span><input data-child-field="title" value="${esc(item.title || '')}" placeholder="Ex. Clavier"></label>
      <label class="v235-field"><span>Définition du sous-fil</span><textarea data-child-field="definition" placeholder="Définition propre à ce sous-fil">${esc(item.definition || '')}</textarea></label>
    </article>`).join('');
  }
  function collectFormChildren(formEl){
    return $$('[data-v235-child-row]', formEl).map(row => ({title:text($('[data-child-field="title"]', row)?.value || ''), definition:text($('[data-child-field="definition"]', row)?.value || '')})).filter(item => item.title || item.definition);
  }
  function childSummary(value){
    const rows = normalizeChildren(value);
    return rows.length ? `<ul>${rows.map(item => `<li><strong>${esc(item.title || 'Sous-fil')}</strong>${item.definition ? ` : ${esc(item.definition)}` : ''}</li>`).join('')}</ul>` : '';
  }
  function sameTitle(a, b){ return cleanTitle(a).toLowerCase() === cleanTitle(b).toLowerCase(); }
  function subtitleTitleAt(index){
    const item = activeData && Array.isArray(activeData.subtitleItems) ? activeData.subtitleItems[Number(index)] : null;
    return item && item.title ? item.title : '';
  }
  function branchSubtitle(branch, subtitles, index){
    const explicit = text(branch && (branch.subtitleTitle || branch.subtitle || branch.lessonTitle || branch.parentTitle || ''));
    if(explicit && (Array.isArray(subtitles) ? subtitles : []).some(sub => sameTitle(sub && sub.title, explicit))) return explicit;
    const title = text(branch && branch.title);
    const found = (Array.isArray(subtitles) ? subtitles : []).find(sub => sameTitle(sub && sub.title, title));
    if(found) return found.title || '';
    return (subtitles[index] && subtitles[index].title) || '';
  }
  function completeBranchesForSubtitles(branches, subtitles){
    const out = Array.isArray(branches) ? branches.slice() : [];
    (Array.isArray(subtitles) ? subtitles : []).forEach((sub, si) => {
      const subtitleTitle = text(sub && sub.title) || `Sous-titre ${si+1}`;
      const exists = out.some((branch, bi) => sameTitle(branchSubtitle(branch, subtitles, bi), subtitleTitle));
      if(exists) return;
      out.push({
        title: subtitleTitle,
        definition: text(sub && (sub.definition || sub.fr || sub.objective || '')),
        example: text(sub && sub.example || ''),
        children: normalizeChildren(sub && sub.children),
        subtitleTitle
      });
    });
    return out;
  }

  function readJson(key, fallback){
    try{ const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }catch(e){ return fallback; }
  }
  function writeJson(key, value){
    try{ localStorage.setItem(key, JSON.stringify(value)); return true; }catch(e){ console.error(e); return false; }
  }
  function baseUnits(){
    try{ if(Array.isArray(window.UNITS)) return window.UNITS; }catch(e){}
    try{ if(typeof UNITS !== 'undefined' && Array.isArray(UNITS)) return UNITS; }catch(e){}
    return [];
  }
  function customUnits(){
    const out = [];
    const seen = new Set();
    CUSTOM_KEYS.forEach(key => {
      const arr = readJson(key, []);
      if(!Array.isArray(arr)) return;
      arr.forEach(u => {
        if(!u || !u.id) return;
        const id = String(u.id);
        if(seen.has(id)) return;
        seen.add(id);
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
    const list = allUnits();
    return list.find(u => String(u.id) === String(id)) || list[0] || null;
  }
  function savedContent(unit){
    const local = readJson(keyOf(unit), null);
    if(local && typeof local === 'object') return local;
    if(unit && unit._v172TeacherContent && typeof unit._v172TeacherContent === 'object') return unit._v172TeacherContent;
    if(unit && unit._v170TeacherContent && typeof unit._v170TeacherContent === 'object') return unit._v170TeacherContent;
    return {};
  }

  function inferMediaKind(src, file, fallback){
    const type = String((file && file.type) || '').toLowerCase();
    if(type.startsWith('image/')) return 'image';
    if(type.startsWith('video/')) return 'video';
    if(type.startsWith('audio/')) return 'audio';
    const s = text(src).toLowerCase();
    if(/^data:image\//.test(s) || /\.(png|jpe?g|gif|webp|svg|bmp)(\?|$)/i.test(s)) return 'image';
    if(/^data:video\//.test(s) || /\.(mp4|webm|mov|ogv|avi|mkv)(\?|$)/i.test(s)) return 'video';
    if(/^data:audio\//.test(s) || /\.(mp3|wav|ogg|m4a|aac)(\?|$)/i.test(s)) return 'audio';
    return fallback || 'media';
  }

  function normalVisual(x, i, subtitle){
    x = x || {};
    const src = text(x.src || x.visualSrc || x.image || x.url || '');
    return {
      title: text(x.title || x.visualTitle || subtitle || `Image ${i+1}`),
      src,
      description: text(x.description || x.visualDescription || x.definition || x.text || ''),
      example: text(x.example || x.visualExample || ''),
      mediaKind: text(x.mediaKind || x.kind) || inferMediaKind(src, null, 'image'),
      subtitleTitle: text(x.subtitleTitle || x.subtitle || x.lessonTitle || subtitle || '')
    };
  }
  function normalAudio(x, i, subtitle){
    x = x || {};
    const src = text(x.src || x.audioSrc || x.file || x.url || '');
    return {
      title: text(x.title || x.audioTitle || subtitle || `Audio ${i+1}`),
      src,
      text: text(x.text || x.audioText || x.definition || x.fr || ''),
      ar: text(x.ar || x.audioAr || ''),
      mediaKind: text(x.mediaKind || x.kind) || inferMediaKind(src, null, 'audio'),
      subtitleTitle: text(x.subtitleTitle || x.subtitle || x.lessonTitle || subtitle || '')
    };
  }
  function normalKine(x, i, subtitle){
    x = x || {};
    return {
      type: text(x.type || x.kineType || x.kind || 'Question directe') || 'Question directe',
      question: text(x.question || x.kineQuestion || x.task || ''),
      options: Array.isArray(x.options) ? x.options.join('\n') : text(x.options || x.kineOptions || x.pairs || x.steps || ''),
      answer: text(x.answer || x.kineAnswer || x.expected || ''),
      correction: text(x.correction || x.kineCorrection || ''),
      subtitleTitle: text(x.subtitleTitle || x.subtitle || x.lessonTitle || subtitle || '')
    };
  }
  function matchBySubtitle(rows, title, idx){
    rows = Array.isArray(rows) ? rows : [];
    const t = cleanTitle(title).toLowerCase();
    const a = rows.filter(x => cleanTitle(x && (x.subtitleTitle || x.subtitle || x.lessonTitle || '')).toLowerCase() === t);
    if(a.length) return a;
    const b = rows.filter(x => cleanTitle(x && (x.title || x.visualTitle || x.audioTitle || '')).toLowerCase() === t);
    if(b.length) return b;
    return rows[idx] ? [rows[idx]] : [];
  }
  function uniqueRows(rows){
    const out = [];
    const seen = new Set();
    (rows || []).forEach(x => {
      const k = [x.title,x.src,x.description,x.text,x.question,x.answer].map(v => text(v).toLowerCase()).join('|');
      if(!k.replace(/\|/g,'').trim()) return;
      if(seen.has(k)) return;
      seen.add(k); out.push(x);
    });
    return out;
  }

  function derive(unit){
    unit = unit || {};
    const s = savedContent(unit);
    const lessons = Array.isArray(s.lessons) && s.lessons.length ? s.lessons : (Array.isArray(unit.lessons) ? unit.lessons : []);
    const flatVisuals = Array.isArray(s.visualItems) ? s.visualItems : (Array.isArray(unit.visualItems) ? unit.visualItems : []);
    const flatAudios = Array.isArray(s.audioItems) ? s.audioItems : (Array.isArray(unit.audioItems) ? unit.audioItems : []);
    const flatKines = Array.isArray(s.kineExercises) ? s.kineExercises : (Array.isArray(s.kineQuestions) ? s.kineQuestions : (Array.isArray(unit.kineExercises) ? unit.kineExercises : []));

    let subtitles = Array.isArray(s.subtitleItems) && s.subtitleItems.length ? s.subtitleItems : [];
    if(!subtitles.length){
      subtitles = lessons.map((l, i) => ({
        title: l.title || `Sous-titre ${i+1}`,
        definition: l.fr || l.objective || '',
        example: Array.isArray(l.fill) ? (l.fill[1] || '') : '',
        children: Array.isArray(l.officialObjectives) ? l.officialObjectives : [],
        visualItems: l.visual && (l.visual.image || l.visual.src) ? [{title:l.title || `Image ${i+1}`, src:l.visual.image || l.visual.src, description:l.fr || l.objective || '', example:''}] : [],
        audioItems: (l.fr || l.ar) ? [{title:l.title || `Audio ${i+1}`, src:'', text:l.fr || l.objective || '', ar:l.ar || ''}] : [],
        kineExercises: []
      }));
    }

    subtitles = subtitles.map((item, i) => {
      const lesson = lessons[i] || {};
      const title = text(item && (item.title || lesson.title)) || `Sous-titre ${i+1}`;
      const visualItems = uniqueRows([].concat(
        (Array.isArray(item.visualItems) ? item.visualItems : []).map((x,j) => normalVisual(x,j,title)),
        matchBySubtitle(flatVisuals, title, i).map((x,j) => normalVisual(x,j,title))
      ));
      const audioItems = uniqueRows([].concat(
        (Array.isArray(item.audioItems) ? item.audioItems : []).map((x,j) => normalAudio(x,j,title)),
        matchBySubtitle(flatAudios, title, i).map((x,j) => normalAudio(x,j,title))
      ));
      let kineExercises = (Array.isArray(item.kineExercises) ? item.kineExercises : []).map((x,j) => normalKine(x,j,title));
      if(!kineExercises.length) kineExercises = matchBySubtitle(flatKines, title, i).map((x,j) => normalKine(x,j,title));
      return {
        title,
        definition: text(item.definition || item.fr || lesson.fr || lesson.objective || ''),
        example: text(item.example || ''),
        children: lines(item.children || item.officialObjectives || ''),
        visualItems,
        audioItems,
        kineExercises
      };
    });

    const dictRaw = Array.isArray(s.dictionary) ? s.dictionary : (Array.isArray(unit.dictionary) ? unit.dictionary : []);
    const dictionary = dictRaw.map(d => Array.isArray(d) ? {term:d[0] || '', value:d[1] || ''} : {term:d.term || d.word || '', value:d.value || d.translation || d.meaning || d.definition || d.ar || ''}).filter(d => text(d.term) || text(d.value));
    const integration = unit.integration || {};
    const taskRaw = Array.isArray(s.integrationTasks) ? s.integrationTasks : (Array.isArray(integration.tasks) ? integration.tasks.map(t => ({task:t, expected:''})) : []);
    const integrationTasks = taskRaw.map(t => typeof t === 'string' ? {task:t, expected:''} : {task:t.task || t.question || '', expected:t.expected || t.correction || ''}).filter(t => text(t.task) || text(t.expected));
    const examRaw = Array.isArray(s.examQuestions) ? s.examQuestions : (Array.isArray(s.exam) ? s.exam : (Array.isArray(unit.exam) ? unit.exam : []));
    const examQuestions = examRaw.map(ex => Array.isArray(ex) ? {question:ex[0] || '', options:Array.isArray(ex[1]) ? ex[1] : [], correct:Number(ex[2] || 0)} : {question:ex.question || '', options:Array.isArray(ex.options) ? ex.options : lines(ex.options || ''), correct:Number(ex.correct || 0)}).filter(ex => text(ex.question));
    const hasSavedBranches = Object.prototype.hasOwnProperty.call(s, 'mindmapBranches');
    const isCustomUnit = unit && (unit.customUnit === true || /^custom_/i.test(String(unit.id || '')));
    const branches = Array.isArray(s.mindmapBranches) && s.mindmapBranches.length ? s.mindmapBranches
      : hasSavedBranches && isCustomUnit ? []
      : Array.isArray(unit.mindmapBranches) && unit.mindmapBranches.length ? unit.mindmapBranches
      : lessons.map((lesson, i) => ({
        title: lesson.title || `Fil ${i+1}`,
        definition: lesson.fr || lesson.objective || lesson.officialFocus || '',
        example: Array.isArray(lesson.fill) ? (lesson.fill[1] || lesson.fill[0] || '') : '',
        children: normalizeChildren(lesson.officialObjectives || []),
        subtitleTitle: lesson.title || `Sous-titre ${i+1}`
      })).filter(b => b.title || b.definition || b.example || normalizeChildren(b.children).length);
    const normalizedBranches = completeBranchesForSubtitles(branches.map((branch, i) => Object.assign({}, branch, {
      children: normalizeChildren(branch.children),
      subtitleTitle: branchSubtitle(branch, subtitles, i)
    })), subtitles);

    return Object.assign({}, s, {
      id: unit.id,
      title: text(s.title || unit.title || ''),
      short: text(s.short || unit.short || ''),
      intro: text(s.intro || unit.intro || ''),
      duration: text(s.duration || unit.duration || ''),
      competence: text(s.competence || unit.competence || ''),
      schoolYear: text(s.schoolYear || unit.schoolYear || '1ac'),
      subtitleItems: subtitles,
      mindmapBranches: normalizedBranches,
      dictionary,
      integrationTitle: text(s.integrationTitle || integration.title || 'Situation d’intégration'),
      scenario: text(s.scenario || integration.scenario || ''),
      integrationTasks,
      examQuestions
    });
  }

  function flatten(c){
    const subtitleItems = Array.isArray(c.subtitleItems) ? c.subtitleItems : [];
    return Object.assign({}, c, {
      subtitleItems,
      mindmapBranches: Array.isArray(c.mindmapBranches) ? c.mindmapBranches : [],
      visualItems: subtitleItems.flatMap(s => (Array.isArray(s.visualItems) ? s.visualItems : []).map(v => Object.assign({}, v, {subtitleTitle:s.title}))),
      audioItems: subtitleItems.flatMap(s => (Array.isArray(s.audioItems) ? s.audioItems : []).map(a => Object.assign({}, a, {subtitleTitle:s.title}))),
      kineExercises: subtitleItems.flatMap(s => (Array.isArray(s.kineExercises) ? s.kineExercises : []).map(k => Object.assign({}, k, {subtitleTitle:s.title}))),
      kineQuestions: subtitleItems.flatMap(s => (Array.isArray(s.kineExercises) ? s.kineExercises : []).map(k => Object.assign({}, k, {subtitleTitle:s.title}))),
      dictionary: Array.isArray(c.dictionary) ? c.dictionary : [],
      integrationTasks: Array.isArray(c.integrationTasks) ? c.integrationTasks : [],
      examQuestions: Array.isArray(c.examQuestions) ? c.examQuestions : [],
      savedAt: new Date().toISOString(),
      savedBy: 'v235-final-composants'
    });
  }
  function save(){
    const u = unitById(activeUnitId);
    if(!u || !activeData) return false;
    return writeJson(keyOf(u), flatten(activeData));
  }

  function mediaPreview(src, label, kind){
    src = text(src);
    if(!src) return `<div class="v235-empty-file">Aucun fichier. Clique sur « Parcourir / remplacer ».</div>`;
    kind = inferMediaKind(src, null, kind || 'image');
    if(kind === 'video') return `<video controls src="${esc(src)}"></video>`;
    if(kind === 'audio') return `<audio controls src="${esc(src)}"></audio>`;
    return `<img src="${esc(src)}" alt="${esc(label || 'image')}" loading="lazy">`;
  }
  function button(label, attrs='', cls=''){
    return `<button type="button" class="v235-btn ${cls}" ${attrs}>${esc(label)}</button>`;
  }
  function actions(type, path){
    return `<div class="v235-actions">${button('Modifier', `data-v235-edit="${esc(type)}" data-path="${esc(path)}"`, 'edit')}${button('Supprimer', `data-v235-del="${esc(type)}" data-path="${esc(path)}"`, 'danger')}</div>`;
  }
  function addButton(type, path='', label='+ Ajouter nouveau'){
    return button(label, `data-v235-add="${esc(type)}" data-path="${esc(path)}"`, 'add');
  }
  function mediaActions(type, path){
    return `<div class="v235-actions">${button('Modifier texte', `data-v235-edit="${esc(type)}" data-path="${esc(path)}"`, 'edit')}${button('Parcourir / remplacer', `data-v235-replace="${esc(type)}" data-path="${esc(path)}"`, 'replace')}${button('Supprimer', `data-v235-del="${esc(type)}" data-path="${esc(path)}"`, 'danger')}</div>`;
  }

  function renderHero(c){
    return `<section class="v235-unit-head">
      <div><span>Modifier unité</span><h2>${esc(c.title || 'Unité')}</h2>${c.short ? `<p>${esc(c.short)}</p>` : ''}${c.intro ? `<p>${esc(c.intro)}</p>` : ''}</div>
      ${button('Modifier titre', 'data-v235-edit="unit" data-path="unit"', 'edit')}
      <div class="v235-slot" data-v235-slot="unit"></div>
    </section>`;
  }
  function renderMindmap(c){
    const rows = Array.isArray(c.mindmapBranches) ? c.mindmapBranches : [];
    const subtitles = Array.isArray(c.subtitleItems) && c.subtitleItems.length ? c.subtitleItems : [{title:'Carte mentale'}];
    const blocks = subtitles.map((sub, si) => {
      const subtitleTitle = sub && sub.title ? sub.title : `Sous-titre ${si+1}`;
      const indexed = rows.map((branch, index) => ({branch, index})).filter(item => sameTitle(branchSubtitle(item.branch, subtitles, item.index), subtitleTitle));
      return `<article class="v235-mindmap-subtitle">
        <div class="v235-subtitle-head"><h3>${esc(subtitleTitle)}</h3>${addButton('branch', `subtitle:${si}`, '+ Ajouter un fil')}</div>
        <div class="v235-grid">${indexed.map(({branch:b,index}) => `<article class="v235-card"><div class="v235-card-head"><strong>${esc(b.title || `Fil ${index+1}`)}</strong>${actions('branch', String(index))}</div>${b.definition ? `<p>${esc(b.definition)}</p>` : ''}${b.example ? `<em>Exemple : ${esc(b.example)}</em>` : ''}${childSummary(b.children)}<div class="v235-slot" data-v235-slot="branch-${index}"></div></article>`).join('') || `<div class="v235-empty">Aucun fil pour ce sous-titre. ${addButton('branch', `subtitle:${si}`, '+ Ajouter un fil')}</div>`}</div>
      </article>`;
    }).join('');
    const orphan = rows.map((branch, index) => ({branch, index})).filter(item => !subtitles.some(sub => sameTitle(branchSubtitle(item.branch, subtitles, item.index), sub && sub.title)));
    const orphanHtml = orphan.length ? `<article class="v235-mindmap-subtitle"><div class="v235-subtitle-head"><h3>Autres fils</h3></div><div class="v235-grid">${orphan.map(({branch:b,index}) => `<article class="v235-card"><div class="v235-card-head"><strong>${esc(b.title || `Fil ${index+1}`)}</strong>${actions('branch', String(index))}</div>${b.definition ? `<p>${esc(b.definition)}</p>` : ''}${b.example ? `<em>Exemple : ${esc(b.example)}</em>` : ''}${childSummary(b.children)}<div class="v235-slot" data-v235-slot="branch-${index}"></div></article>`).join('')}</div></article>` : '';
    return `<section class="v235-section"><div class="v235-section-head"><h3>Carte mentale par sous-titre</h3><span class="v235-hint">Ajoute les fils depuis le sous-titre concerné.</span></div>
      <div class="v235-mindmap-groups">${blocks}${orphanHtml}</div>
      <div class="v235-slot" data-v235-slot="branch-new"></div>
    </section>`;
  }
  function renderVisual(v, si, vi){
    return `<article class="v235-media-card"><div class="v235-card-head"><strong>${esc(v.title || `Support visuel ${vi+1}`)}</strong>${mediaActions('visual', `${si}.${vi}`)}</div><div class="v235-media">${mediaPreview(v.src, v.title, v.mediaKind || 'image')}</div>${v.description ? `<p>${esc(v.description)}</p>` : ''}${v.example ? `<em>${esc(v.example)}</em>` : ''}<div class="v235-slot" data-v235-slot="visual-${si}-${vi}"></div></article>`;
  }
  function renderAudio(a, si, ai){
    return `<article class="v235-media-card"><div class="v235-card-head"><strong>${esc(a.title || `Support auditif ${ai+1}`)}</strong>${mediaActions('audio', `${si}.${ai}`)}</div><div class="v235-media audio">${mediaPreview(a.src, a.title, a.mediaKind || 'audio')}</div>${a.text ? `<p>${esc(a.text)}</p>` : ''}${a.ar ? `<p class="ar">${esc(a.ar)}</p>` : ''}<div class="v235-slot" data-v235-slot="audio-${si}-${ai}"></div></article>`;
  }
  function renderKine(k, si, ki){
    return `<article class="v235-card"><div class="v235-card-head"><strong>${esc(k.type || `Exercice ${ki+1}`)}</strong>${actions('kine', `${si}.${ki}`)}</div>${k.question ? `<p>${esc(k.question)}</p>` : ''}${k.options ? `<pre>${esc(k.options)}</pre>` : ''}${k.answer ? `<em>Réponse : ${esc(k.answer)}</em>` : ''}${k.correction ? `<p>${esc(k.correction)}</p>` : ''}<div class="v235-slot" data-v235-slot="kine-${si}-${ki}"></div></article>`;
  }
  function renderSubtitle(s, si){
    const visuals = Array.isArray(s.visualItems) ? s.visualItems : [];
    const audios = Array.isArray(s.audioItems) ? s.audioItems : [];
    const kines = Array.isArray(s.kineExercises) ? s.kineExercises : [];
    return `<section class="v235-subtitle">
      <div class="v235-subtitle-head"><h3>${esc(s.title || `Sous-titre ${si+1}`)}</h3>${actions('subtitle', String(si))}</div>
      ${s.definition ? `<p class="v235-definition">${esc(s.definition)}</p>` : '<p class="v235-definition muted">Aucune définition.</p>'}
      ${s.example ? `<p><b>Exemple :</b> ${esc(s.example)}</p>` : ''}
      ${lines(s.children).length ? `<ul>${lines(s.children).map(x => `<li>${esc(x)}</li>`).join('')}</ul>` : ''}
      <div class="v235-slot" data-v235-slot="subtitle-${si}"></div>
      <div class="v235-styles">
        <section class="v235-style visual"><div class="v235-style-head"><h4>Style visuel — images et vidéos</h4>${addButton('visual', String(si), '+ Ajouter image / vidéo')}</div><div class="v235-grid">${visuals.map((v,i) => renderVisual(v,si,i)).join('') || `<div class="v235-empty">Aucune image ou vidéo. ${addButton('visual', String(si), '+ Ajouter image / vidéo')}</div>`}</div><div class="v235-slot" data-v235-slot="visual-new-${si}"></div></section>
        <section class="v235-style audio"><div class="v235-style-head"><h4>Style auditif — images, vidéos et audios</h4>${addButton('audio', String(si), '+ Ajouter média')}</div><div class="v235-grid">${audios.map((a,i) => renderAudio(a,si,i)).join('') || `<div class="v235-empty">Aucun média auditif. ${addButton('audio', String(si), '+ Ajouter média')}</div>`}</div><div class="v235-slot" data-v235-slot="audio-new-${si}"></div></section>
        <section class="v235-style kine"><div class="v235-style-head"><h4>Style kinesthésique — exercices affichés</h4>${addButton('kine', String(si), '+ Ajouter exercice')}</div><div class="v235-grid">${kines.map((k,i) => renderKine(k,si,i)).join('') || `<div class="v235-empty">Aucun exercice. ${addButton('kine', String(si), '+ Ajouter exercice')}</div>`}</div><div class="v235-slot" data-v235-slot="kine-new-${si}"></div></section>
      </div>
    </section>`;
  }
  function renderDictionary(c){
    const rows = Array.isArray(c.dictionary) ? c.dictionary : [];
    return `<section class="v235-section"><div class="v235-section-head"><h3>Dictionnaire</h3>${addButton('dict','new','+ Ajouter mot')}</div><div class="v235-grid">${rows.map((d,i) => `<article class="v235-card"><div class="v235-card-head"><strong>${esc(d.term || `Mot ${i+1}`)}</strong>${actions('dict', String(i))}</div><p>${esc(d.value || '')}</p><div class="v235-slot" data-v235-slot="dict-${i}"></div></article>`).join('') || `<div class="v235-empty">Aucun mot. ${addButton('dict','new','+ Ajouter mot')}</div>`}</div><div class="v235-slot" data-v235-slot="dict-new"></div></section>`;
  }
  function renderIntegration(c){
    const rows = Array.isArray(c.integrationTasks) ? c.integrationTasks : [];
    return `<section class="v235-section"><div class="v235-section-head"><h3>${esc(c.integrationTitle || 'Situation d’intégration')}</h3><div class="v235-actions">${button('Modifier situation', 'data-v235-edit="scenario" data-path="scenario"', 'edit')}${addButton('task','new','+ Ajouter question')}</div></div>${c.scenario ? `<p class="v235-definition">${esc(c.scenario)}</p>` : '<p class="v235-definition muted">Aucune situation écrite.</p>'}<div class="v235-slot" data-v235-slot="scenario"></div><div class="v235-grid">${rows.map((t,i) => `<article class="v235-card"><div class="v235-card-head"><strong>Question ${i+1}</strong>${actions('task', String(i))}</div><p>${esc(t.task || '')}</p>${t.expected ? `<em>Réponse attendue : ${esc(t.expected)}</em>` : ''}<div class="v235-slot" data-v235-slot="task-${i}"></div></article>`).join('') || `<div class="v235-empty">Aucune question. ${addButton('task','new','+ Ajouter question')}</div>`}</div><div class="v235-slot" data-v235-slot="task-new"></div></section>`;
  }
  function renderExam(c){
    const rows = Array.isArray(c.examQuestions) ? c.examQuestions : [];
    return `<section class="v235-section"><div class="v235-section-head"><h3>Contrôle final</h3>${addButton('exam','new','+ Ajouter question')}</div><div class="v235-grid">${rows.map((q,i) => `<article class="v235-card"><div class="v235-card-head"><strong>Question ${i+1}</strong>${actions('exam', String(i))}</div><p>${esc(q.question || '')}</p>${Array.isArray(q.options) && q.options.length ? `<ol>${q.options.map(o => `<li>${esc(o)}</li>`).join('')}</ol>` : ''}<div class="v235-slot" data-v235-slot="exam-${i}"></div></article>`).join('') || `<div class="v235-empty">Aucune question. ${addButton('exam','new','+ Ajouter question')}</div>`}</div><div class="v235-slot" data-v235-slot="exam-new"></div></section>`;
  }

  function renderEditor(force=false){
    const panel = $('[data-v176-panel="modify"]');
    if(!panel) return;
    if(!force && panel.querySelector('[data-v235-editor]')) return;
    const unit = unitById(activeUnitId || '');
    if(!unit){ panel.innerHTML = '<section class="v235-editor"><p>Aucune unité trouvée.</p></section>'; return; }
    activeUnitId = String(unit.id);
    activeData = derive(unit);
    rendering = true;
    panel.innerHTML = `<section class="v235-editor" data-v235-editor>
      <div class="v235-toolbar">
        <div><strong>Modifier unité</strong><small>Une seule page : composants réels de l’unité avec supprimer, modifier, parcourir et ajouter.</small></div>
        <select data-v235-select>${allUnits().map(u => `<option value="${esc(u.id)}" ${String(u.id)===String(activeUnitId)?'selected':''}>${esc(cleanTitle(u.title || u.id))}</option>`).join('')}</select>
        ${button('Enregistrer tout', 'data-v235-save', 'save')}
        <span data-v235-message></span>
      </div>
      <div class="v235-alert">Ancien contenu supprimé : cette zone affiche seulement l’unité sélectionnée et ses composants modifiables.</div>
      <main class="v235-body">
        ${renderHero(activeData)}
        ${renderMindmap(activeData)}
        <section class="v235-section"><div class="v235-section-head"><h3>Contenu + trois styles d’apprentissage</h3>${addButton('subtitle','new','+ Ajouter sous-titre')}</div>${activeData.subtitleItems.map(renderSubtitle).join('') || `<div class="v235-empty">Aucun sous-titre. ${addButton('subtitle','new','+ Ajouter sous-titre')}</div>`}<div class="v235-slot" data-v235-slot="subtitle-new"></div></section>
        ${renderDictionary(activeData)}
        ${renderIntegration(activeData)}
        ${renderExam(activeData)}
      </main>
    </section>`;
    rendering = false;
    fixScroll();
  }

  function field(name, label, value='', type='text', accept=''){
    if(type === 'textarea') return `<label class="v235-field"><span>${esc(label)}</span><textarea name="${esc(name)}">${esc(value)}</textarea></label>`;
    if(type === 'file') return `<label class="v235-field"><span>${esc(label)}</span><input name="${esc(name)}" type="file" ${accept ? `accept="${esc(accept)}"` : ''}></label>`;
    if(type === 'select') return `<label class="v235-field"><span>${esc(label)}</span><select name="${esc(name)}">${String(value)}</select></label>`;
    return `<label class="v235-field"><span>${esc(label)}</span><input name="${esc(name)}" value="${esc(value)}"></label>`;
  }
  function form(title, fields, mode, path){
    return `<form class="v235-form" data-v235-form="${esc(mode)}" data-path="${esc(path)}">
      <div class="v235-form-title"><strong>${esc(title)}</strong><button type="button" class="v235-close" data-v235-cancel>×</button></div>
      ${fields.join('')}
      <div class="v235-form-actions">${button('Annuler','data-v235-cancel','light')}<button type="submit" class="v235-btn save">Valider</button></div>
    </form>`;
  }
  function branchForm(title, item, mode, path){
    const it = item || {};
    return `<form class="v235-form" data-v235-form="${esc(mode)}" data-path="${esc(path)}">
      <div class="v235-form-title"><strong>${esc(title)}</strong><button type="button" class="v235-close" data-v235-cancel>×</button></div>
      ${field('title','Fil principal', it.title || '')}
      ${field('definition','Définition', it.definition || '', 'textarea')}
      ${field('example','Exemple', it.example || '', 'textarea')}
      <input type="hidden" name="subtitleTitle" value="${esc(it.subtitleTitle || '')}">
      <section class="v235-children-form">
        <div class="v235-form-title"><strong>Sous-fils avec définition</strong><button type="button" class="v235-btn add" data-v235-add-child>+ Ajouter un sous-fil</button></div>
        <div class="v235-child-list" data-v235-child-list>${childRowsHtml(it.children)}</div>
      </section>
      <div class="v235-form-actions">${button('Annuler','data-v235-cancel','light')}<button type="submit" class="v235-btn save">Valider</button></div>
    </form>`;
  }
  function clearForms(){ $$('.v235-slot').forEach(x => x.innerHTML = ''); }
  function putForm(slot, html){
    clearForms();
    const el = $(`[data-v235-slot="${CSS.escape(slot)}"]`);
    if(!el) return;
    el.innerHTML = html;
    if(!el.closest('[data-v176-panel="modify"]')) el.scrollIntoView({block:'center', behavior:'smooth'});
    const first = $('input,textarea,select', el);
    if(first) setTimeout(()=>{
      try{ first.focus({preventScroll:true}); }
      catch(e){ first.focus(); }
    }, 80);
  }
  function item(type, path){
    const c = activeData || {};
    if(type === 'unit' || type === 'scenario') return c;
    if(type === 'subtitle') return c.subtitleItems[Number(path)] || {};
    if(type === 'branch') return c.mindmapBranches[Number(path)] || {};
    if(type === 'visual'){ const [si,vi] = path.split('.').map(Number); return c.subtitleItems[si]?.visualItems?.[vi] || {}; }
    if(type === 'audio'){ const [si,ai] = path.split('.').map(Number); return c.subtitleItems[si]?.audioItems?.[ai] || {}; }
    if(type === 'kine'){ const [si,ki] = path.split('.').map(Number); return c.subtitleItems[si]?.kineExercises?.[ki] || {}; }
    if(type === 'dict') return c.dictionary[Number(path)] || {};
    if(type === 'task') return c.integrationTasks[Number(path)] || {};
    if(type === 'exam') return c.examQuestions[Number(path)] || {};
    return {};
  }
  function openEdit(type, path, replaceOnly=false){
    const it = item(type, path);
    if(type === 'unit') return putForm('unit', form('Modifier titre et introduction', [field('title','Titre', activeData.title), field('short','Résumé court', activeData.short), field('intro','Introduction', activeData.intro, 'textarea')], 'unit', 'unit'));
    if(type === 'subtitle') return putForm(`subtitle-${path}`, form('Modifier le texte du sous-titre', [field('title','Titre', it.title), field('definition','Définition / explication', it.definition, 'textarea'), field('example','Exemple', it.example, 'textarea'), field('children','Sous-fils / éléments', lines(it.children).join('\n'), 'textarea')], 'subtitle', path));
    if(type === 'branch') return putForm(`branch-${path}`, branchForm('Modifier branche de carte mentale', it, 'branch', path));
    if(type === 'visual') return putForm(`visual-${path.replace('.','-')}`, form(replaceOnly ? 'Parcourir / remplacer image ou vidéo' : 'Modifier image ou vidéo', [field('title','Titre', it.title), field('src','Chemin actuel ou lien', it.src), field('file','Parcourir une image ou une vidéo', '', 'file', 'image/*,video/*,.mp4,.webm,.mov,.m4v,.ogv,.jpg,.jpeg,.png,.webp,.gif'), field('description','Description', it.description, 'textarea'), field('example','Exemple', it.example, 'textarea')], 'visual', path));
    if(type === 'audio') return putForm(`audio-${path.replace('.','-')}`, form(replaceOnly ? 'Parcourir / remplacer média auditif' : 'Modifier média auditif', [field('title','Titre', it.title), field('src','Chemin actuel ou lien', it.src), field('file','Parcourir image / vidéo / audio', '', 'file', 'image/*,video/*,audio/*,.mp3,.wav,.m4a,.aac,.ogg,.mp4,.webm,.mov,.m4v,.ogv,.jpg,.jpeg,.png,.webp,.gif'), field('text','Texte explicatif', it.text, 'textarea'), field('ar','Explication en arabe', it.ar, 'textarea')], 'audio', path));
    if(type === 'kine') return putForm(`kine-${path.replace('.','-')}`, form('Modifier exercice', [field('type','Type d’exercice', it.type), field('question','Question / tâche', it.question, 'textarea'), field('options','Choix / éléments / étapes', it.options, 'textarea'), field('answer','Réponse attendue', it.answer, 'textarea'), field('correction','Correction', it.correction, 'textarea')], 'kine', path));
    if(type === 'dict') return putForm(`dict-${path}`, form('Modifier dictionnaire', [field('term','Mot', it.term), field('value','Traduction / définition', it.value, 'textarea')], 'dict', path));
    if(type === 'scenario') return putForm('scenario', form('Modifier situation d’intégration', [field('integrationTitle','Titre', activeData.integrationTitle), field('scenario','Situation / production', activeData.scenario, 'textarea')], 'scenario', 'scenario'));
    if(type === 'task') return putForm(`task-${path}`, form('Modifier question d’intégration', [field('task','Question / tâche', it.task, 'textarea'), field('expected','Réponse / production attendue', it.expected, 'textarea')], 'task', path));
    if(type === 'exam') return putForm(`exam-${path}`, form('Modifier contrôle final', [field('question','Question', it.question, 'textarea'), field('options','Choix possibles', (it.options || []).join('\n'), 'textarea'), field('correct','Indice bonne réponse : 0, 1, 2...', it.correct || 0)], 'exam', path));
  }
  function openAdd(type, path){
    if(type === 'subtitle') return putForm('subtitle-new', form('Ajouter un sous-titre complet', [field('title','Titre du sous-titre'), field('definition','Définition / explication', '', 'textarea'), field('example','Exemple', '', 'textarea'), field('children','Sous-fils / éléments', '', 'textarea')], 'add-subtitle', 'new'));
    if(type === 'branch'){
      const match = /^subtitle:(\d+)$/i.exec(String(path || ''));
      const subtitleTitle = match ? subtitleTitleAt(match[1]) : '';
      return putForm('branch-new', branchForm('Ajouter branche de carte mentale', {title:'', definition:'', example:'', children:[], subtitleTitle}, 'add-branch', path || 'new'));
    }
    if(type === 'visual') return putForm(`visual-new-${path}`, form('Ajouter image / vidéo visuelle', [field('title','Titre'), field('src','Chemin ou lien image/vidéo'), field('file','Parcourir une image ou une vidéo', '', 'file', 'image/*,video/*,.mp4,.webm,.mov,.m4v,.ogv,.jpg,.jpeg,.png,.webp,.gif'), field('description','Description', '', 'textarea'), field('example','Exemple', '', 'textarea')], 'add-visual', path));
    if(type === 'audio') return putForm(`audio-new-${path}`, form('Ajouter média auditif', [field('title','Titre'), field('src','Chemin ou lien image/vidéo/audio'), field('file','Parcourir image / vidéo / audio', '', 'file', 'image/*,video/*,audio/*,.mp3,.wav,.m4a,.aac,.ogg,.mp4,.webm,.mov,.m4v,.ogv,.jpg,.jpeg,.png,.webp,.gif'), field('text','Texte explicatif', '', 'textarea'), field('ar','Explication en arabe', '', 'textarea')], 'add-audio', path));
    if(type === 'kine') return putForm(`kine-new-${path}`, form('Ajouter exercice kinesthésique', [field('type','Type d’exercice', 'Question directe'), field('question','Question / tâche', '', 'textarea'), field('options','Choix / éléments / étapes', '', 'textarea'), field('answer','Réponse attendue', '', 'textarea'), field('correction','Correction', '', 'textarea')], 'add-kine', path));
    if(type === 'dict') return putForm('dict-new', form('Ajouter mot au dictionnaire', [field('term','Mot'), field('value','Traduction / définition', '', 'textarea')], 'add-dict', 'new'));
    if(type === 'task') return putForm('task-new', form('Ajouter question d’intégration', [field('task','Question / tâche', '', 'textarea'), field('expected','Réponse / production attendue', '', 'textarea')], 'add-task', 'new'));
    if(type === 'exam') return putForm('exam-new', form('Ajouter question contrôle final', [field('question','Question', '', 'textarea'), field('options','Choix possibles', '', 'textarea'), field('correct','Indice bonne réponse : 0, 1, 2...', '0')], 'add-exam', 'new'));
  }

  function remove(type, path){
    if(!activeData) return;
    if(!confirm('Supprimer ce composant ?')) return;
    if(type === 'subtitle') activeData.subtitleItems.splice(Number(path), 1);
    else if(type === 'branch') activeData.mindmapBranches.splice(Number(path), 1);
    else if(type === 'visual'){ const [si,vi] = path.split('.').map(Number); activeData.subtitleItems[si].visualItems.splice(vi, 1); }
    else if(type === 'audio'){ const [si,ai] = path.split('.').map(Number); activeData.subtitleItems[si].audioItems.splice(ai, 1); }
    else if(type === 'kine'){ const [si,ki] = path.split('.').map(Number); activeData.subtitleItems[si].kineExercises.splice(ki, 1); }
    else if(type === 'dict') activeData.dictionary.splice(Number(path), 1);
    else if(type === 'task') activeData.integrationTasks.splice(Number(path), 1);
    else if(type === 'exam') activeData.examQuestions.splice(Number(path), 1);
    save();
    renderEditor(true);
    msg('Composant supprimé.');
  }
  function formValues(f){
    const out = {};
    $$('input,textarea,select', f).forEach(el => { if(el.type !== 'file') out[el.name] = el.value; });
    return out;
  }
  async function uploadFile(file, kind){
    if(!file) return '';
    try{
      const qs = new URLSearchParams({kind:kind || 'media', name:file.name || 'media'});
      const res = await fetch('/api/media/file?' + qs.toString(), {method:'POST', headers:{'Content-Type': file.type || 'application/octet-stream','X-File-Name': encodeURIComponent(file.name || 'media'),'X-Media-Kind': kind || 'media'}, body:file});
      if(res.ok){ const data = await res.json(); if(data && data.url) return data.url; }
    }catch(e){ console.warn('upload media serveur impossible, passage en base64', e); }
    return new Promise((resolve, reject) => { const r = new FileReader(); r.onload = () => resolve(String(r.result || '')); r.onerror = reject; r.readAsDataURL(file); });
  }
  async function onSubmit(formEl){
    const mode = formEl.dataset.v235Form;
    const path = formEl.dataset.path;
    const v = formValues(formEl);
    const file = $('input[type="file"]', formEl)?.files?.[0] || null;
    const mediaKind = inferMediaKind(v.src || '', file, /audio/.test(mode) ? 'audio' : (/visual/.test(mode) ? 'image' : 'media'));
    const uploaded = file ? await uploadFile(file, mediaKind) : '';

    if(mode === 'unit') Object.assign(activeData, {title:v.title, short:v.short, intro:v.intro});
    else if(mode === 'subtitle') Object.assign(activeData.subtitleItems[Number(path)], {title:v.title, definition:v.definition, example:v.example, children:lines(v.children)});
    else if(mode === 'branch') Object.assign(activeData.mindmapBranches[Number(path)], {title:v.title, definition:v.definition, example:v.example, children:collectFormChildren(formEl), subtitleTitle:v.subtitleTitle || (activeData.mindmapBranches[Number(path)] && activeData.mindmapBranches[Number(path)].subtitleTitle) || ''});
    else if(mode === 'visual'){ const [si,vi] = path.split('.').map(Number); const target = activeData.subtitleItems[si].visualItems[vi]; Object.assign(target, {title:v.title, src:uploaded || v.src, description:v.description, example:v.example, mediaKind: uploaded ? mediaKind : inferMediaKind(v.src, null, target.mediaKind || 'image')}); }
    else if(mode === 'audio'){ const [si,ai] = path.split('.').map(Number); const target = activeData.subtitleItems[si].audioItems[ai]; Object.assign(target, {title:v.title, src:uploaded || v.src, text:v.text, ar:v.ar, mediaKind: uploaded ? mediaKind : inferMediaKind(v.src, null, target.mediaKind || 'audio')}); }
    else if(mode === 'kine'){ const [si,ki] = path.split('.').map(Number); Object.assign(activeData.subtitleItems[si].kineExercises[ki], {type:v.type, question:v.question, options:v.options, answer:v.answer, correction:v.correction}); }
    else if(mode === 'dict') Object.assign(activeData.dictionary[Number(path)], {term:v.term, value:v.value});
    else if(mode === 'scenario') Object.assign(activeData, {integrationTitle:v.integrationTitle, scenario:v.scenario});
    else if(mode === 'task') Object.assign(activeData.integrationTasks[Number(path)], {task:v.task, expected:v.expected});
    else if(mode === 'exam') Object.assign(activeData.examQuestions[Number(path)], {question:v.question, options:lines(v.options), correct:Number(v.correct || 0)});
    else if(mode === 'add-subtitle') activeData.subtitleItems.push({title:v.title || 'Nouveau sous-titre', definition:v.definition, example:v.example, children:lines(v.children), visualItems:[], audioItems:[], kineExercises:[]});
    else if(mode === 'add-branch'){
      const match = /^subtitle:(\d+)$/i.exec(String(path || ''));
      const subtitleTitle = v.subtitleTitle || (match ? subtitleTitleAt(match[1]) : '');
      activeData.mindmapBranches.push({title:v.title || 'Nouveau fil', definition:v.definition, example:v.example, children:collectFormChildren(formEl), subtitleTitle});
    }
    else if(mode === 'add-visual') activeData.subtitleItems[Number(path)].visualItems.push({title:v.title || 'Nouveau support visuel', src:uploaded || v.src, description:v.description, example:v.example, mediaKind, subtitleTitle:activeData.subtitleItems[Number(path)].title});
    else if(mode === 'add-audio') activeData.subtitleItems[Number(path)].audioItems.push({title:v.title || 'Nouveau support auditif', src:uploaded || v.src, text:v.text, ar:v.ar, mediaKind, subtitleTitle:activeData.subtitleItems[Number(path)].title});
    else if(mode === 'add-kine') activeData.subtitleItems[Number(path)].kineExercises.push({type:v.type || 'Question directe', question:v.question, options:v.options, answer:v.answer, correction:v.correction, subtitleTitle:activeData.subtitleItems[Number(path)].title});
    else if(mode === 'add-dict') activeData.dictionary.push({term:v.term, value:v.value});
    else if(mode === 'add-task') activeData.integrationTasks.push({task:v.task, expected:v.expected});
    else if(mode === 'add-exam') activeData.examQuestions.push({question:v.question, options:lines(v.options), correct:Number(v.correct || 0)});

    save();
    renderEditor(true);
    msg('Modification enregistrée.');
  }
  function msg(t, ok=true){
    const el = $('[data-v235-message]');
    if(!el) return;
    el.textContent = t;
    el.className = ok ? 'ok' : 'ko';
    setTimeout(() => { if(el.textContent === t) el.textContent = ''; }, 2600);
  }

  function cleanupAddUnit(){
    const addPanel = $('[data-v176-panel="add"]');
    if(!addPanel) return;
    $$('[data-v179-add-section="tasks"] [data-v201-delete-task]', addPanel).forEach(btn => btn.remove());
    $$('[data-v179-add-section="tasks"] .v201-integration-help', addPanel).forEach(p => p.remove());
    $$('[data-v179-add-section="tasks"] .v172-field span', addPanel).forEach(span => {
      const t = text(span.textContent).toLowerCase();
      if(t.includes('consigne')) span.textContent = 'Question / tâche';
    });
  }
  function fixScroll(){
    document.documentElement.style.height = 'auto';
    document.body.style.height = 'auto';
    document.body.style.overflowY = 'auto';
    const app = $('#app'); if(app){ app.style.height = 'auto'; app.style.maxHeight = 'none'; app.style.overflow = 'visible'; }
    $$('.v87-teacher-shell,.v176-teacher-page,[data-v176-panel="modify"]').forEach(el => { el.style.height='auto'; el.style.maxHeight='none'; el.style.overflow='visible'; });
  }
  function injectCss(){
    if($('#v235-css')) return;
    const st = document.createElement('style');
    st.id = 'v235-css';
    st.textContent = `
      body.v235-ready, body.v235-ready #app{height:auto!important;min-height:100vh!important;overflow-y:auto!important;overflow-x:hidden!important;}
      [data-v176-panel="modify"]{display:block!important;height:auto!important;max-height:none!important;overflow:visible!important;}
      [data-v176-panel="add"] [data-v179-add-section="tasks"] [data-v201-delete-task],
      [data-v176-panel="add"] [data-v179-add-section="tasks"] .v201-integration-help{display:none!important;}
      .v87-student-shell{padding:2px!important}.v87-student-topbar{max-width:720px!important;padding:3px 6px!important;margin-bottom:2px!important}.v87-student-main,.v87-student-page,.student-page,.unit-page{max-width:720px!important;padding:2px 4px!important}.v87-student-main .panel,.v87-student-main section.panel,.content-card,.visual-panel,.audio-panel,.kine-panel{padding:5px!important;margin-bottom:4px!important;border-radius:10px!important}.v87-student-main h1{font-size:1.04rem!important}.v87-student-main h2{font-size:.98rem!important}.v87-student-main h3{font-size:.9rem!important}.v87-student-main p,.v87-student-main li{font-size:.84rem!important;line-height:1.25!important}.v87-student-main img{max-height:110px!important}
      .v176-dashboard{gap:15px!important}.v176-dash-card{border-width:4px!important;border-color:rgba(124,58,237,.52)!important;border-radius:22px!important;padding:16px!important}.v176-dash-card small{display:none!important}.v176-dash-card strong{font-size:1.05rem!important;color:#3b0764!important}
      .v235-editor{background:linear-gradient(135deg,#4c1d95 0%,#7c3aed 35%,#ffffff 100%);border-radius:24px;padding:12px;display:grid;gap:10px;min-height:100vh;box-shadow:0 18px 48px rgba(76,29,149,.22)}
      .v235-toolbar{position:sticky;top:8px;z-index:90;background:rgba(255,255,255,.98);border:3px solid rgba(124,58,237,.25);border-radius:20px;padding:10px;display:grid;grid-template-columns:1fr minmax(240px,340px) auto auto;gap:9px;align-items:center;box-shadow:0 12px 30px rgba(76,29,149,.16);backdrop-filter:blur(10px)}
      .v235-toolbar strong{display:block;color:#3b0764;font-size:1.05rem}.v235-toolbar small{display:block;color:#6b5b82;font-weight:800}.v235-toolbar select{width:100%;padding:10px;border-radius:14px;border:1px solid rgba(124,58,237,.25);font-weight:900}.v235-toolbar [data-v235-message]{font-weight:950}.v235-toolbar .ok{color:#047857}.v235-toolbar .ko{color:#b91c1c}
      .v235-alert{background:#fff;border:2px dashed rgba(124,58,237,.35);border-radius:16px;padding:9px 12px;color:#4c1d95;font-weight:950;text-align:center}.v235-body{max-width:1050px;margin:0 auto;display:grid;gap:10px;width:100%}
      .v235-unit-head,.v235-section,.v235-subtitle,.v235-style{background:rgba(255,255,255,.98);border:2px solid rgba(124,58,237,.16);border-radius:20px;padding:10px;box-shadow:0 10px 24px rgba(49,25,90,.08);display:grid;gap:9px}.v235-unit-head{grid-template-columns:1fr auto;align-items:start}.v235-unit-head span{display:inline-flex;background:#f3e8ff;color:#5b21b6;border-radius:999px;padding:4px 8px;font-size:.82rem;font-weight:950}.v235-unit-head h2{margin:.2rem 0;font-size:1.28rem;color:#3b0764;line-height:1.16}.v235-unit-head p,.v235-definition,.v235-card p,.v235-media-card p{margin:0;color:#334155;font-size:.91rem;line-height:1.34}
      .v235-section-head,.v235-subtitle-head,.v235-style-head,.v235-card-head{display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap}.v235-section-head,.v235-subtitle-head,.v235-style-head{background:#faf5ff;border:1px solid rgba(124,58,237,.20);border-radius:15px;padding:8px}.v235-section-head h3,.v235-subtitle-head h3,.v235-style-head h4{margin:0;color:#3b0764;font-size:1rem}.v235-card,.v235-media-card{border:1px solid rgba(124,58,237,.14);border-radius:16px;background:#fff;padding:9px;display:grid;gap:8px}.v235-card strong,.v235-media-card strong{color:#3b0764}.v235-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:8px}.v235-styles{display:grid;grid-template-columns:1fr;gap:9px}.v235-style.visual{border-left:8px solid #7c3aed}.v235-style.audio{border-left:8px solid #9333ea}.v235-style.kine{border-left:8px solid #a855f7}
      .v235-hint{font-size:.84rem;font-weight:900;color:#6b21a8}.v235-mindmap-groups{display:grid;gap:10px}.v235-mindmap-subtitle{display:grid;gap:9px;border:1px solid rgba(124,58,237,.18);border-radius:18px;background:#fff;padding:9px}
      .v235-media{min-height:88px;background:#f8fafc;border:1px dashed rgba(124,58,237,.28);border-radius:14px;display:grid;place-items:center;padding:7px;color:#64748b;font-weight:900}.v235-media img{max-width:100%;max-height:155px;object-fit:contain;border-radius:11px}.v235-media audio{width:100%;min-height:36px}.v235-media video{max-width:100%;max-height:155px;border-radius:11px}.v235-empty,.v235-empty-file{background:#fbf7ff;border:1px dashed rgba(124,58,237,.32);color:#6b21a8;border-radius:13px;padding:8px;font-weight:900;display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap}
      .v235-actions,.v235-form-actions{display:flex;gap:6px;align-items:center;flex-wrap:wrap}.v235-btn{border:0;border-radius:999px;padding:7px 11px;font-weight:950;cursor:pointer;background:#7c3aed;color:#fff;font-size:.83rem;box-shadow:0 8px 16px rgba(124,58,237,.16)}.v235-btn.edit{background:#5b21b6}.v235-btn.add{background:#7c3aed}.v235-btn.replace{background:#6d28d9}.v235-btn.save{background:#16a34a}.v235-btn.danger{background:#fff;color:#be123c;border:1px solid rgba(190,18,60,.30);box-shadow:none}.v235-btn.light{background:#fff;color:#4c1d95;border:1px solid rgba(124,58,237,.25);box-shadow:none}.v235-btn:hover{filter:brightness(.96)}
      .v235-form{margin-top:8px;border:2px solid rgba(124,58,237,.24);background:linear-gradient(180deg,#fff,#fdfaff);border-radius:16px;padding:10px;display:grid;gap:9px;box-shadow:0 12px 28px rgba(76,29,149,.12)}.v235-form-title{display:flex;justify-content:space-between;align-items:center;gap:8px;color:#3b0764}.v235-close{width:30px;height:30px;border:0;border-radius:999px;background:#f3e8ff;color:#6d28d9;font-size:1.25rem;font-weight:1000;cursor:pointer}.v235-field{display:grid;gap:5px}.v235-field span{font-weight:900;color:#4c1d95}.v235-field input,.v235-field textarea,.v235-field select{width:100%;box-sizing:border-box;border:1px solid rgba(124,58,237,.22);border-radius:13px;padding:9px 10px;font:inherit;background:#fff;color:#0f172a}.v235-field textarea{min-height:82px;resize:vertical}.v235-form-actions{justify-content:flex-end}.ar{direction:rtl;text-align:right}.muted{color:#64748b!important}pre{white-space:pre-wrap;background:#f8fafc;border-radius:12px;padding:8px;margin:0}
      .v235-children-form{display:grid;gap:9px;border:1px dashed rgba(124,58,237,.30);border-radius:16px;background:#fbf7ff;padding:10px}.v235-child-list{display:grid;gap:8px}.v235-child-row{border:1px solid rgba(124,58,237,.16);border-radius:14px;background:#fff;padding:9px;display:grid;gap:8px}
      @media(max-width:880px){.v235-toolbar{grid-template-columns:1fr}.v235-unit-head{grid-template-columns:1fr}.v235-grid{grid-template-columns:1fr}.v235-editor{padding:8px;border-radius:18px}.v235-body{max-width:100%}}
      @media(max-width:540px){.v235-btn{width:100%;justify-content:center}.v235-actions{width:100%}.v235-toolbar{top:0;border-radius:0}.v235-section-head,.v235-subtitle-head,.v235-style-head,.v235-card-head{align-items:stretch}.v235-editor{border-radius:0}}
    `;
    document.head.appendChild(st);
  }

  function install(){
    injectCss();
    document.body.classList.add('v235-ready');

    document.addEventListener('click', e => {
      cleanupAddUnit();
      const dash = e.target.closest && e.target.closest('[data-v176-dashboard]');
      if(dash && dash.dataset.v176Dashboard === 'modify'){
        setTimeout(() => renderEditor(true), 60);
        setTimeout(() => renderEditor(true), 260);
      }
      const ed = e.target.closest && e.target.closest('[data-v235-editor]');
      if(!ed) return;
      const cancel = e.target.closest('[data-v235-cancel]');
      if(cancel){ e.preventDefault(); clearForms(); return; }
      const saveBtn = e.target.closest('[data-v235-save]');
      if(saveBtn){ e.preventDefault(); msg(save() ? 'Unité enregistrée.' : 'Erreur enregistrement.', true); return; }
      const add = e.target.closest('[data-v235-add]');
      if(add){ e.preventDefault(); openAdd(add.dataset.v235Add, add.dataset.path || ''); return; }
      const addChild = e.target.closest('[data-v235-add-child]');
      if(addChild){
        e.preventDefault();
        const form = addChild.closest('[data-v235-form]');
        const list = form && $('[data-v235-child-list]', form);
        if(list) list.insertAdjacentHTML('beforeend', childRowsHtml([{title:'', definition:''}]));
        return;
      }
      const removeChild = e.target.closest('[data-v235-remove-child]');
      if(removeChild){
        e.preventDefault();
        const row = removeChild.closest('[data-v235-child-row]');
        if(row) row.remove();
        return;
      }
      const edit = e.target.closest('[data-v235-edit]');
      if(edit){ e.preventDefault(); openEdit(edit.dataset.v235Edit, edit.dataset.path || '', false); return; }
      const repl = e.target.closest('[data-v235-replace]');
      if(repl){ e.preventDefault(); openEdit(repl.dataset.v235Replace, repl.dataset.path || '', true); return; }
      const del = e.target.closest('[data-v235-del]');
      if(del){ e.preventDefault(); remove(del.dataset.v235Del, del.dataset.path || ''); }
    }, true);

    document.addEventListener('change', e => {
      const sel = e.target.closest && e.target.closest('[data-v235-select]');
      if(sel){ activeUnitId = sel.value; renderEditor(true); }
    }, true);

    document.addEventListener('submit', e => {
      const formEl = e.target.closest && e.target.closest('[data-v235-form]');
      if(!formEl) return;
      e.preventDefault();
      onSubmit(formEl).catch(err => { console.error(err); msg('Erreur pendant la modification.', false); });
    }, true);

    const obs = new MutationObserver(() => {
      if(rendering) return;
      cleanupAddUnit();
      const p = $('[data-v176-panel="modify"]');
      if(p && !p.querySelector('[data-v235-editor]')) setTimeout(() => renderEditor(true), 40);
    });
    obs.observe(document.documentElement, {childList:true, subtree:true});
    cleanupAddUnit();
    setTimeout(() => { cleanupAddUnit(); if($('[data-v176-panel="modify"]')) renderEditor(true); }, 500);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
})();
