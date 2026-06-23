/* =========================================================
   ÉPI v233 — Modifier unité : interface unique et propre
   Objectif : une seule page, pas plusieurs interfaces.
   - affiche l'unité dans une vue proche de l'espace élève ;
   - les trois styles sont toujours visibles : images, audios, exercices ;
   - chaque composant possède Modifier / Supprimer / Ajouter ;
   - les formulaires s'ouvrent dans la même page, sous le composant choisi ;
   - correction du scroll et de la stabilité de la page.
========================================================= */
(function(){
  'use strict';

  const STORE_PREFIX = 'epi_v170_unit_content_';
  const CUSTOM_KEYS = ['epi_v183_custom_units_visible','epi_v181_custom_units_visible','epi_v175_custom_units'];
  let activeUnitId = '';
  let activeData = null;
  let busy = false;

  const $ = (sel, root=document) => root.querySelector(sel);
  const $$ = (sel, root=document) => Array.from(root.querySelectorAll(sel));
  const txt = v => String(v == null ? '' : v).trim();
  const esc = v => String(v == null ? '' : v).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
  const cleanTitle = v => txt(v).replace(/^\s*Unité\s*\d+\s*:\s*/i,'').trim();
  const splitLines = v => Array.isArray(v) ? v.map(x => txt(typeof x === 'object' ? (x.title || x.text || x.name || '') : x)).filter(Boolean) : String(v || '').split(/\n|•|;/).map(x => x.trim()).filter(Boolean);
  const isMedia = src => /^(data:|https?:|\.\/|\/|assets\/|blob:)/i.test(txt(src));

  function readJson(key, fallback){ try{ const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }catch(e){ return fallback; } }
  function writeJson(key, value){ try{ localStorage.setItem(key, JSON.stringify(value)); return true; }catch(e){ console.error(e); return false; } }
  function unitKey(unit){ return STORE_PREFIX + String((unit && unit.id) || unit || 'unit'); }

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
      if(!Array.isArray(rows)) return;
      rows.forEach(u => {
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
      seen.add(id); out.push(u);
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
    const local = readJson(unitKey(unit), null);
    if(local && typeof local === 'object') return local;
    if(unit && unit._v172TeacherContent && typeof unit._v172TeacherContent === 'object') return unit._v172TeacherContent;
    if(unit && unit._v170TeacherContent && typeof unit._v170TeacherContent === 'object') return unit._v170TeacherContent;
    return {};
  }

  function normalizeVisual(x, i, subtitle){
    x = x || {};
    return {
      title: txt(x.title || x.visualTitle || subtitle || `Image ${i+1}`),
      src: txt(x.src || x.visualSrc || x.image || ''),
      description: txt(x.description || x.visualDescription || x.definition || ''),
      example: txt(x.example || x.visualExample || ''),
      subtitleTitle: txt(x.subtitleTitle || x.subtitle || x.lessonTitle || subtitle || '')
    };
  }
  function normalizeAudio(x, i, subtitle){
    x = x || {};
    return {
      title: txt(x.title || x.audioTitle || subtitle || `Audio ${i+1}`),
      src: txt(x.src || x.audioSrc || x.file || ''),
      text: txt(x.text || x.audioText || x.definition || ''),
      ar: txt(x.ar || x.audioAr || ''),
      subtitleTitle: txt(x.subtitleTitle || x.subtitle || x.lessonTitle || subtitle || '')
    };
  }
  function normalizeKine(x, i, subtitle){
    x = x || {};
    return {
      type: txt(x.type || x.kineType || 'Question directe') || 'Question directe',
      question: txt(x.question || x.kineQuestion || x.task || ''),
      options: Array.isArray(x.options) ? x.options.join('\n') : txt(x.options || x.kineOptions || x.pairs || x.steps || ''),
      answer: txt(x.answer || x.kineAnswer || x.expected || ''),
      correction: txt(x.correction || x.kineCorrection || ''),
      subtitleTitle: txt(x.subtitleTitle || x.subtitle || x.lessonTitle || subtitle || '')
    };
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
  function mergeUnique(rows){
    const out = [];
    const seen = new Set();
    (rows || []).forEach(x => {
      const key = [x.title,x.src,x.text,x.question,x.description].map(v=>txt(v).toLowerCase()).join('|');
      if(!key.replace(/\|/g,'').trim()) return;
      if(seen.has(key)) return;
      seen.add(key); out.push(x);
    });
    return out;
  }

  function derive(unit){
    unit = unit || {};
    const s = saved(unit);
    const lessons = Array.isArray(s.lessons) && s.lessons.length ? s.lessons : (Array.isArray(unit.lessons) ? unit.lessons : []);
    const flatVisuals = Array.isArray(s.visualItems) ? s.visualItems : [];
    const flatAudios = Array.isArray(s.audioItems) ? s.audioItems : [];
    const flatKines = Array.isArray(s.kineExercises) ? s.kineExercises : (Array.isArray(s.kineQuestions) ? s.kineQuestions : []);
    let subtitleItems = Array.isArray(s.subtitleItems) && s.subtitleItems.length ? s.subtitleItems : [];

    if(!subtitleItems.length){
      subtitleItems = lessons.map((lesson, i) => ({
        title: lesson.title || `Sous-titre ${i+1}`,
        definition: lesson.fr || lesson.objective || '',
        example: Array.isArray(lesson.fill) ? (lesson.fill[1] || '') : '',
        children: Array.isArray(lesson.officialObjectives) ? lesson.officialObjectives : [],
        visualItems: lesson.visual && (lesson.visual.image || lesson.visual.src) ? [{title:lesson.title || `Image ${i+1}`, src:lesson.visual.image || lesson.visual.src, description:lesson.fr || lesson.objective || '', example:''}] : [],
        audioItems: lesson.fr || lesson.ar ? [{title:lesson.title || `Audio ${i+1}`, src:'', text:lesson.fr || lesson.objective || '', ar:lesson.ar || ''}] : [],
        kineExercises: []
      }));
    }

    subtitleItems = subtitleItems.map((item, i) => {
      item = item || {};
      const lesson = lessons[i] || {};
      const title = txt(item.title || lesson.title || `Sous-titre ${i+1}`);
      const visualItems = mergeUnique([].concat(
        (Array.isArray(item.visualItems) ? item.visualItems : []).map((x,j)=>normalizeVisual(x,j,title)),
        matchRows(flatVisuals, title, i).map((x,j)=>normalizeVisual(x,j,title))
      ));
      const audioItems = mergeUnique([].concat(
        (Array.isArray(item.audioItems) ? item.audioItems : []).map((x,j)=>normalizeAudio(x,j,title)),
        matchRows(flatAudios, title, i).map((x,j)=>normalizeAudio(x,j,title))
      ));
      let kineExercises = (Array.isArray(item.kineExercises) ? item.kineExercises : []).map((x,j)=>normalizeKine(x,j,title));
      if(!kineExercises.length) kineExercises = matchRows(flatKines, title, i).map((x,j)=>normalizeKine(x,j,title));
      return {
        title,
        definition: txt(item.definition || item.fr || lesson.fr || lesson.objective || ''),
        example: txt(item.example || ''),
        children: splitLines(item.children || item.officialObjectives || lesson.officialObjectives || ''),
        visualItems,
        audioItems,
        kineExercises
      };
    });

    const integration = unit.integration || {};
    const dictionaryRaw = Array.isArray(s.dictionary) ? s.dictionary : (Array.isArray(unit.dictionary) ? unit.dictionary : []);
    const dictionary = dictionaryRaw.map(d => Array.isArray(d) ? {term:d[0] || '', value:d[1] || ''} : {term:d.term || d.word || '', value:d.value || d.translation || d.definition || ''}).filter(d => txt(d.term) || txt(d.value));
    const examRaw = Array.isArray(s.examQuestions) ? s.examQuestions : (Array.isArray(s.exam) ? s.exam : (Array.isArray(unit.exam) ? unit.exam : []));
    const examQuestions = examRaw.map(ex => Array.isArray(ex) ? {question:ex[0] || '', options:Array.isArray(ex[1]) ? ex[1] : [], correct:Number(ex[2] || 0)} : {question:ex.question || '', options:Array.isArray(ex.options) ? ex.options : splitLines(ex.options || ''), correct:Number(ex.correct || 0)}).filter(ex => txt(ex.question));
    const taskRaw = Array.isArray(s.integrationTasks) ? s.integrationTasks : (Array.isArray(integration.tasks) ? integration.tasks.map(t => ({task:t, expected:''})) : []);
    const integrationTasks = taskRaw.map(t => typeof t === 'string' ? {task:t, expected:''} : {task:t.task || t.question || '', expected:t.expected || t.correction || ''}).filter(t => txt(t.task) || txt(t.expected));
    const mindmapBranches = Array.isArray(s.mindmapBranches) && s.mindmapBranches.length ? s.mindmapBranches : subtitleItems.map(x => ({title:x.title, definition:x.definition, example:x.example, children:x.children}));

    return Object.assign({}, s, {
      id: unit.id,
      title: txt(s.title || unit.title || ''),
      short: txt(s.short || unit.short || ''),
      intro: txt(s.intro || unit.intro || ''),
      competence: txt(s.competence || unit.competence || ''),
      duration: txt(s.duration || unit.duration || ''),
      subtitleItems,
      mindmapBranches,
      dictionary,
      integrationTitle: txt(s.integrationTitle || integration.title || 'Situation d’intégration'),
      scenario: txt(s.scenario || integration.scenario || ''),
      integrationTasks,
      examQuestions
    });
  }

  function flattenForSave(c){
    const subtitleItems = Array.isArray(c.subtitleItems) ? c.subtitleItems : [];
    return Object.assign({}, c, {
      subtitleItems,
      mindmapBranches: Array.isArray(c.mindmapBranches) ? c.mindmapBranches : [],
      visualItems: subtitleItems.flatMap(s => (s.visualItems || []).map(v => Object.assign({}, v, {subtitleTitle:s.title}))),
      audioItems: subtitleItems.flatMap(s => (s.audioItems || []).map(a => Object.assign({}, a, {subtitleTitle:s.title}))),
      kineExercises: subtitleItems.flatMap(s => (s.kineExercises || []).map(k => Object.assign({}, k, {subtitleTitle:s.title}))),
      kineQuestions: subtitleItems.flatMap(s => (s.kineExercises || []).map(k => Object.assign({}, k, {subtitleTitle:s.title}))),
      dictionary: Array.isArray(c.dictionary) ? c.dictionary : [],
      integrationTasks: Array.isArray(c.integrationTasks) ? c.integrationTasks : [],
      examQuestions: Array.isArray(c.examQuestions) ? c.examQuestions : [],
      savedAt: new Date().toISOString(),
      savedBy: 'v233-interface-unique'
    });
  }
  function saveData(){
    const unit = unitById(activeUnitId);
    if(!unit || !activeData) return false;
    return writeJson(unitKey(unit), flattenForSave(activeData));
  }
  function message(msg, ok=true){
    const el = $('[data-v233-msg]');
    if(!el) return;
    el.textContent = msg;
    el.className = ok ? 'ok' : 'ko';
    setTimeout(()=>{ if(el.textContent === msg) el.textContent=''; }, 2600);
  }

  function mediaPreview(src, label){
    src = txt(src);
    if(!src) return `<div class="v233-empty-media">Aucun fichier choisi</div>`;
    if(/^data:audio\//i.test(src) || /\.(mp3|wav|ogg|m4a)(\?|$)/i.test(src)) return `<audio controls src="${esc(src)}"></audio>`;
    if(/^data:video\//i.test(src) || /\.(mp4|webm|mov)(\?|$)/i.test(src)) return `<video controls src="${esc(src)}"></video>`;
    return `<img src="${esc(src)}" alt="${esc(label || 'image')}" loading="lazy">`;
  }
  function btn(label, attrs='', kind=''){ return `<button type="button" class="v233-btn ${kind}" ${attrs}>${esc(label)}</button>`; }
  function actions(type, path){
    return `<div class="v233-actions">${btn('Modifier', `data-v233-edit="${esc(type)}" data-path="${esc(path)}"`, 'edit')}${btn('Supprimer', `data-v233-del="${esc(type)}" data-path="${esc(path)}"`, 'danger')}</div>`;
  }
  function addBtn(type, path=''){ return btn('+ Ajouter', `data-v233-add="${esc(type)}" data-path="${esc(path)}"`, 'add'); }

  function renderHero(c){
    return `<section class="v233-hero">
      <div><span>Modifier l’unité</span><h2>${esc(c.title)}</h2>${c.short ? `<p>${esc(c.short)}</p>` : ''}${c.intro ? `<p>${esc(c.intro)}</p>` : ''}</div>
      <div class="v233-actions">${btn('Modifier titre / introduction', 'data-v233-edit="unit" data-path="unit"', 'edit')}</div>
      <div class="v233-form-slot" data-v233-slot="unit"></div>
    </section>`;
  }
  function renderMindmap(c){
    const rows = Array.isArray(c.mindmapBranches) ? c.mindmapBranches : [];
    return `<section class="v233-section">
      <div class="v233-head"><h3>Carte mentale</h3>${addBtn('branch','mindmapBranches')}</div>
      <div class="v233-grid mindmap">
        ${rows.map((b,i)=>`<article class="v233-card">
          <div class="v233-card-head"><strong>${esc(b.title || `Branche ${i+1}`)}</strong>${actions('branch', String(i))}</div>
          ${b.definition ? `<p>${esc(b.definition)}</p>` : ''}${b.example ? `<em>Exemple : ${esc(b.example)}</em>` : ''}
          ${splitLines(b.children).length ? `<ul>${splitLines(b.children).map(x=>`<li>${esc(x)}</li>`).join('')}</ul>` : ''}
          <div class="v233-form-slot" data-v233-slot="branch-${i}"></div>
        </article>`).join('') || `<div class="v233-empty">Aucune branche. ${addBtn('branch','mindmapBranches')}</div>`}
      </div>
      <div class="v233-form-slot" data-v233-slot="branch-new"></div>
    </section>`;
  }
  function renderVisual(v, si, vi){
    return `<article class="v233-media-card">
      <div class="v233-card-head"><strong>${esc(v.title || `Image ${vi+1}`)}</strong>${actions('visual', `${si}.${vi}`)}</div>
      <div class="v233-media">${mediaPreview(v.src, v.title)}</div>
      ${v.description ? `<p>${esc(v.description)}</p>` : ''}${v.example ? `<em>${esc(v.example)}</em>` : ''}
      <div class="v233-form-slot" data-v233-slot="visual-${si}-${vi}"></div>
    </article>`;
  }
  function renderAudio(a, si, ai){
    return `<article class="v233-media-card">
      <div class="v233-card-head"><strong>${esc(a.title || `Audio ${ai+1}`)}</strong>${actions('audio', `${si}.${ai}`)}</div>
      <div class="v233-media audio">${mediaPreview(a.src, a.title)}</div>
      ${a.text ? `<p>${esc(a.text)}</p>` : ''}${a.ar ? `<p class="ar">${esc(a.ar)}</p>` : ''}
      <div class="v233-form-slot" data-v233-slot="audio-${si}-${ai}"></div>
    </article>`;
  }
  function renderKine(k, si, ki){
    return `<article class="v233-card">
      <div class="v233-card-head"><strong>${esc(k.type || `Exercice ${ki+1}`)}</strong>${actions('kine', `${si}.${ki}`)}</div>
      ${k.question ? `<p>${esc(k.question)}</p>` : ''}${k.options ? `<pre>${esc(k.options)}</pre>` : ''}${k.answer ? `<em>Réponse : ${esc(k.answer)}</em>` : ''}${k.correction ? `<p>${esc(k.correction)}</p>` : ''}
      <div class="v233-form-slot" data-v233-slot="kine-${si}-${ki}"></div>
    </article>`;
  }
  function renderSubtitle(s, si){
    const visuals = Array.isArray(s.visualItems) ? s.visualItems : [];
    const audios = Array.isArray(s.audioItems) ? s.audioItems : [];
    const kines = Array.isArray(s.kineExercises) ? s.kineExercises : [];
    return `<section class="v233-subtitle">
      <div class="v233-title-line"><h3>${esc(s.title || `Sous-titre ${si+1}`)}</h3>${actions('subtitle', String(si))}</div>
      ${s.definition ? `<p class="v233-definition">${esc(s.definition)}</p>` : '<p class="v233-definition muted">Aucune définition.</p>'}
      ${s.example ? `<p class="v233-example"><b>Exemple :</b> ${esc(s.example)}</p>` : ''}
      ${splitLines(s.children).length ? `<ul>${splitLines(s.children).map(x=>`<li>${esc(x)}</li>`).join('')}</ul>` : ''}
      <div class="v233-form-slot" data-v233-slot="subtitle-${si}"></div>
      <div class="v233-three-styles">
        <div class="v233-style visual"><div class="v233-mini-head"><h4>Style visuel — images</h4>${addBtn('visual', String(si))}</div><div class="v233-grid">${visuals.map((v,i)=>renderVisual(v,si,i)).join('') || `<div class="v233-empty">Aucune image. ${addBtn('visual', String(si))}</div>`}</div><div class="v233-form-slot" data-v233-slot="visual-new-${si}"></div></div>
        <div class="v233-style audio"><div class="v233-mini-head"><h4>Style auditif — audios</h4>${addBtn('audio', String(si))}</div><div class="v233-grid">${audios.map((a,i)=>renderAudio(a,si,i)).join('') || `<div class="v233-empty">Aucun audio. ${addBtn('audio', String(si))}</div>`}</div><div class="v233-form-slot" data-v233-slot="audio-new-${si}"></div></div>
        <div class="v233-style kine"><div class="v233-mini-head"><h4>Style kinesthésique — exercices</h4>${addBtn('kine', String(si))}</div><div class="v233-grid">${kines.map((k,i)=>renderKine(k,si,i)).join('') || `<div class="v233-empty">Aucun exercice. ${addBtn('kine', String(si))}</div>`}</div><div class="v233-form-slot" data-v233-slot="kine-new-${si}"></div></div>
      </div>
    </section>`;
  }
  function renderDictionary(c){
    const rows = Array.isArray(c.dictionary) ? c.dictionary : [];
    return `<section class="v233-section"><div class="v233-head"><h3>Dictionnaire</h3>${addBtn('dict','dict')}</div><div class="v233-grid">${rows.map((d,i)=>`<article class="v233-card"><div class="v233-card-head"><strong>${esc(d.term || `Mot ${i+1}`)}</strong>${actions('dict', String(i))}</div><p>${esc(d.value || '')}</p><div class="v233-form-slot" data-v233-slot="dict-${i}"></div></article>`).join('') || `<div class="v233-empty">Aucun mot. ${addBtn('dict','dict')}</div>`}</div><div class="v233-form-slot" data-v233-slot="dict-new"></div></section>`;
  }
  function renderIntegration(c){
    const rows = Array.isArray(c.integrationTasks) ? c.integrationTasks : [];
    return `<section class="v233-section"><div class="v233-head"><h3>${esc(c.integrationTitle || 'Situation d’intégration')}</h3><div class="v233-actions">${btn('Modifier situation', 'data-v233-edit="scenario" data-path="scenario"', 'edit')}${addBtn('task','task')}</div></div>${c.scenario ? `<p class="v233-definition">${esc(c.scenario)}</p>` : '<p class="v233-definition muted">Aucune situation écrite.</p>'}<div class="v233-form-slot" data-v233-slot="scenario"></div><div class="v233-grid">${rows.map((t,i)=>`<article class="v233-card"><div class="v233-card-head"><strong>Question ${i+1}</strong>${actions('task', String(i))}</div><p>${esc(t.task || '')}</p>${t.expected ? `<em>${esc(t.expected)}</em>` : ''}<div class="v233-form-slot" data-v233-slot="task-${i}"></div></article>`).join('') || `<div class="v233-empty">Aucune question. ${addBtn('task','task')}</div>`}</div><div class="v233-form-slot" data-v233-slot="task-new"></div></section>`;
  }
  function renderExam(c){
    const rows = Array.isArray(c.examQuestions) ? c.examQuestions : [];
    return `<section class="v233-section"><div class="v233-head"><h3>Contrôle final</h3>${addBtn('exam','exam')}</div><div class="v233-grid">${rows.map((ex,i)=>`<article class="v233-card"><div class="v233-card-head"><strong>Question ${i+1}</strong>${actions('exam', String(i))}</div><p>${esc(ex.question || '')}</p>${Array.isArray(ex.options) && ex.options.length ? `<ol>${ex.options.map(op=>`<li>${esc(op)}</li>`).join('')}</ol>` : ''}<div class="v233-form-slot" data-v233-slot="exam-${i}"></div></article>`).join('') || `<div class="v233-empty">Aucune question. ${addBtn('exam','exam')}</div>`}</div><div class="v233-form-slot" data-v233-slot="exam-new"></div></section>`;
  }

  function renderEditor(id){
    const panel = $('[data-v176-panel="modify"]');
    if(!panel) return;
    const unit = unitById(id || activeUnitId || '');
    if(!unit){ panel.innerHTML = '<section class="v233-editor"><p>Aucune unité trouvée.</p></section>'; return; }
    activeUnitId = String(unit.id);
    activeData = derive(unit);
    panel.innerHTML = `<section class="v233-editor" data-v233-editor>
      <div class="v233-toolbar">
        <div><strong>Modifier unité — une seule interface</strong><small>Choisis l’unité, puis modifie chaque composant dans la même page.</small></div>
        <select data-v233-unit-select>${allUnits().map(u => `<option value="${esc(u.id)}" ${String(u.id)===String(activeUnitId)?'selected':''}>${esc(cleanTitle(u.title || u.id))}</option>`).join('')}</select>
        <button type="button" class="v233-btn light" data-v233-scroll-top>Haut</button>
        <button type="button" class="v233-btn save" data-v233-save>Enregistrer tout</button>
        <span data-v233-msg></span>
      </div>
      <div class="v233-note">Cette page ne doit afficher qu’une seule unité. Les formulaires s’ouvrent directement sous le bloc choisi, sans ouvrir plusieurs pages.</div>
      <main class="v233-student-like">
        ${renderHero(activeData)}
        ${renderMindmap(activeData)}
        <section class="v233-section"><div class="v233-head"><h3>Contenu de l’unité</h3>${addBtn('subtitle','subtitle')}</div>${activeData.subtitleItems.map(renderSubtitle).join('') || '<p class="v233-empty">Aucun sous-titre.</p>'}<div class="v233-form-slot" data-v233-slot="subtitle-new"></div></section>
        ${renderDictionary(activeData)}
        ${renderIntegration(activeData)}
        ${renderExam(activeData)}
      </main>
    </section>`;
    fixScroll();
  }

  function field(name, label, value='', type='text'){
    if(type === 'textarea') return `<label class="v233-field"><span>${esc(label)}</span><textarea name="${esc(name)}">${esc(value)}</textarea></label>`;
    if(type === 'file') return `<label class="v233-field"><span>${esc(label)}</span><input name="${esc(name)}" type="file" accept="image/*,audio/*,video/*"></label>`;
    return `<label class="v233-field"><span>${esc(label)}</span><input name="${esc(name)}" value="${esc(value)}"></label>`;
  }
  function formHtml(title, fields, mode, path){
    return `<form class="v233-inline-form" data-v233-form="${esc(mode)}" data-path="${esc(path)}">
      <div class="v233-form-title"><strong>${esc(title)}</strong><button type="button" class="v233-x" data-v233-cancel>×</button></div>
      ${fields.join('')}
      <div class="v233-form-actions"><button type="button" class="v233-btn light" data-v233-cancel>Annuler</button><button type="submit" class="v233-btn save">Valider</button></div>
    </form>`;
  }
  function closeForms(){ $$('.v233-form-slot').forEach(el => el.innerHTML = ''); }
  function placeForm(slotName, html){
    closeForms();
    const slot = $(`[data-v233-slot="${CSS.escape(slotName)}"]`);
    if(!slot) return;
    slot.innerHTML = html;
    slot.scrollIntoView({block:'center', behavior:'smooth'});
    const first = $('input,textarea,select', slot);
    if(first) setTimeout(()=>first.focus(), 80);
  }
  function getItem(type, path){
    const c = activeData;
    if(!c) return null;
    if(type === 'unit') return c;
    if(type === 'subtitle') return c.subtitleItems[Number(path)];
    if(type === 'branch') return c.mindmapBranches[Number(path)];
    if(type === 'visual'){ const [si,vi] = path.split('.').map(Number); return c.subtitleItems[si]?.visualItems?.[vi]; }
    if(type === 'audio'){ const [si,ai] = path.split('.').map(Number); return c.subtitleItems[si]?.audioItems?.[ai]; }
    if(type === 'kine'){ const [si,ki] = path.split('.').map(Number); return c.subtitleItems[si]?.kineExercises?.[ki]; }
    if(type === 'dict') return c.dictionary[Number(path)];
    if(type === 'task') return c.integrationTasks[Number(path)];
    if(type === 'exam') return c.examQuestions[Number(path)];
    if(type === 'scenario') return c;
    return null;
  }
  function showEdit(type, path){
    const item = getItem(type, path) || {};
    if(type === 'unit') return placeForm('unit', formHtml('Modifier le titre et l’introduction', [field('title','Titre', activeData.title), field('short','Résumé court', activeData.short), field('intro','Introduction', activeData.intro, 'textarea')], 'unit', 'unit'));
    if(type === 'subtitle') return placeForm(`subtitle-${path}`, formHtml('Modifier le sous-titre', [field('title','Titre du sous-titre', item.title), field('definition','Définition / explication', item.definition, 'textarea'), field('example','Exemple', item.example, 'textarea'), field('children','Sous-fils / éléments de carte mentale', splitLines(item.children).join('\n'), 'textarea')], 'subtitle', path));
    if(type === 'branch') return placeForm(`branch-${path}`, formHtml('Modifier la branche de la carte mentale', [field('title','Fil principal', item.title), field('definition','Définition', item.definition, 'textarea'), field('example','Exemple', item.example, 'textarea'), field('children','Sous-fils', splitLines(item.children).join('\n'), 'textarea')], 'branch', path));
    if(type === 'visual') return placeForm(`visual-${path.replace('.', '-')}`, formHtml('Modifier image / support visuel', [field('title','Titre', item.title), field('src','Chemin ou lien du média', item.src), field('file','Parcourir un autre fichier', '', 'file'), field('description','Description', item.description, 'textarea'), field('example','Exemple', item.example, 'textarea')], 'visual', path));
    if(type === 'audio') return placeForm(`audio-${path.replace('.', '-')}`, formHtml('Modifier audio', [field('title','Titre', item.title), field('src','Chemin ou lien audio', item.src), field('file','Parcourir un autre fichier', '', 'file'), field('text','Texte explicatif', item.text, 'textarea'), field('ar','Explication en arabe', item.ar, 'textarea')], 'audio', path));
    if(type === 'kine') return placeForm(`kine-${path.replace('.', '-')}`, formHtml('Modifier exercice', [field('type','Type d’exercice', item.type), field('question','Question / consigne', item.question, 'textarea'), field('options','Choix / éléments / étapes', item.options, 'textarea'), field('answer','Réponse attendue', item.answer, 'textarea'), field('correction','Correction', item.correction, 'textarea')], 'kine', path));
    if(type === 'dict') return placeForm(`dict-${path}`, formHtml('Modifier mot du dictionnaire', [field('term','Mot', item.term), field('value','Traduction / définition', item.value, 'textarea')], 'dict', path));
    if(type === 'scenario') return placeForm('scenario', formHtml('Modifier la situation d’intégration', [field('integrationTitle','Titre', activeData.integrationTitle), field('scenario','Situation', activeData.scenario, 'textarea')], 'scenario', 'scenario'));
    if(type === 'task') return placeForm(`task-${path}`, formHtml('Modifier question d’intégration', [field('task','Question / tâche', item.task, 'textarea'), field('expected','Production attendue', item.expected, 'textarea')], 'task', path));
    if(type === 'exam') return placeForm(`exam-${path}`, formHtml('Modifier question du contrôle final', [field('question','Question', item.question, 'textarea'), field('options','Choix possibles', (item.options || []).join('\n'), 'textarea'), field('correct','Numéro de la bonne réponse (0, 1, 2...)', item.correct || 0)], 'exam', path));
  }
  function showAdd(type, path){
    if(type === 'subtitle') return placeForm('subtitle-new', formHtml('Ajouter un sous-titre', [field('title','Titre du sous-titre'), field('definition','Définition / explication', '', 'textarea'), field('example','Exemple', '', 'textarea'), field('children','Sous-fils / éléments', '', 'textarea')], 'add-subtitle', 'new'));
    if(type === 'branch') return placeForm('branch-new', formHtml('Ajouter branche de carte mentale', [field('title','Fil principal'), field('definition','Définition', '', 'textarea'), field('example','Exemple', '', 'textarea'), field('children','Sous-fils', '', 'textarea')], 'add-branch', 'new'));
    if(type === 'visual') return placeForm(`visual-new-${path}`, formHtml('Ajouter image / support visuel', [field('title','Titre'), field('src','Chemin ou lien du média'), field('file','Parcourir un fichier', '', 'file'), field('description','Description', '', 'textarea'), field('example','Exemple', '', 'textarea')], 'add-visual', path));
    if(type === 'audio') return placeForm(`audio-new-${path}`, formHtml('Ajouter audio', [field('title','Titre'), field('src','Chemin ou lien audio'), field('file','Parcourir un fichier', '', 'file'), field('text','Texte explicatif', '', 'textarea'), field('ar','Explication en arabe', '', 'textarea')], 'add-audio', path));
    if(type === 'kine') return placeForm(`kine-new-${path}`, formHtml('Ajouter exercice', [field('type','Type d’exercice', 'Question directe'), field('question','Question / consigne', '', 'textarea'), field('options','Choix / éléments / étapes', '', 'textarea'), field('answer','Réponse attendue', '', 'textarea'), field('correction','Correction', '', 'textarea')], 'add-kine', path));
    if(type === 'dict') return placeForm('dict-new', formHtml('Ajouter mot au dictionnaire', [field('term','Mot'), field('value','Traduction / définition', '', 'textarea')], 'add-dict', 'new'));
    if(type === 'task') return placeForm('task-new', formHtml('Ajouter question d’intégration', [field('task','Question / tâche', '', 'textarea'), field('expected','Production attendue', '', 'textarea')], 'add-task', 'new'));
    if(type === 'exam') return placeForm('exam-new', formHtml('Ajouter question du contrôle final', [field('question','Question', '', 'textarea'), field('options','Choix possibles', '', 'textarea'), field('correct','Numéro de la bonne réponse (0, 1, 2...)', '0')], 'add-exam', 'new'));
  }
  function removeItem(type, path){
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
    saveData();
    rerenderKeep();
    message('Composant supprimé.');
  }
  function formValues(form){
    const data = {};
    $$('input,textarea,select', form).forEach(el => { if(el.type !== 'file') data[el.name] = el.value; });
    return data;
  }
  function fileToDataUrl(file){
    return new Promise((resolve, reject) => {
      if(!file) return resolve('');
      const reader = new FileReader();
      reader.onload = () => resolve(String(reader.result || ''));
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  }
  async function handleSubmit(form){
    const mode = form.dataset.v233Form;
    const path = form.dataset.path;
    const v = formValues(form);
    const fileInput = $('input[type="file"]', form);
    const dataUrl = fileInput && fileInput.files && fileInput.files[0] ? await fileToDataUrl(fileInput.files[0]) : '';
    if(mode === 'unit') Object.assign(activeData, {title:v.title, short:v.short, intro:v.intro});
    else if(mode === 'subtitle') Object.assign(activeData.subtitleItems[Number(path)], {title:v.title, definition:v.definition, example:v.example, children:splitLines(v.children)});
    else if(mode === 'branch') Object.assign(activeData.mindmapBranches[Number(path)], {title:v.title, definition:v.definition, example:v.example, children:splitLines(v.children)});
    else if(mode === 'visual'){ const [si,vi] = path.split('.').map(Number); Object.assign(activeData.subtitleItems[si].visualItems[vi], {title:v.title, src:dataUrl || v.src, description:v.description, example:v.example}); }
    else if(mode === 'audio'){ const [si,ai] = path.split('.').map(Number); Object.assign(activeData.subtitleItems[si].audioItems[ai], {title:v.title, src:dataUrl || v.src, text:v.text, ar:v.ar}); }
    else if(mode === 'kine'){ const [si,ki] = path.split('.').map(Number); Object.assign(activeData.subtitleItems[si].kineExercises[ki], {type:v.type, question:v.question, options:v.options, answer:v.answer, correction:v.correction}); }
    else if(mode === 'dict') Object.assign(activeData.dictionary[Number(path)], {term:v.term, value:v.value});
    else if(mode === 'scenario') Object.assign(activeData, {integrationTitle:v.integrationTitle, scenario:v.scenario});
    else if(mode === 'task') Object.assign(activeData.integrationTasks[Number(path)], {task:v.task, expected:v.expected});
    else if(mode === 'exam') Object.assign(activeData.examQuestions[Number(path)], {question:v.question, options:splitLines(v.options), correct:Number(v.correct || 0)});
    else if(mode === 'add-subtitle') activeData.subtitleItems.push({title:v.title || 'Nouveau sous-titre', definition:v.definition, example:v.example, children:splitLines(v.children), visualItems:[], audioItems:[], kineExercises:[]});
    else if(mode === 'add-branch') activeData.mindmapBranches.push({title:v.title || 'Nouvelle branche', definition:v.definition, example:v.example, children:splitLines(v.children)});
    else if(mode === 'add-visual') activeData.subtitleItems[Number(path)].visualItems.push({title:v.title || 'Nouvelle image', src:dataUrl || v.src, description:v.description, example:v.example, subtitleTitle:activeData.subtitleItems[Number(path)].title});
    else if(mode === 'add-audio') activeData.subtitleItems[Number(path)].audioItems.push({title:v.title || 'Nouvel audio', src:dataUrl || v.src, text:v.text, ar:v.ar, subtitleTitle:activeData.subtitleItems[Number(path)].title});
    else if(mode === 'add-kine') activeData.subtitleItems[Number(path)].kineExercises.push({type:v.type || 'Question directe', question:v.question, options:v.options, answer:v.answer, correction:v.correction, subtitleTitle:activeData.subtitleItems[Number(path)].title});
    else if(mode === 'add-dict') activeData.dictionary.push({term:v.term, value:v.value});
    else if(mode === 'add-task') activeData.integrationTasks.push({task:v.task, expected:v.expected});
    else if(mode === 'add-exam') activeData.examQuestions.push({question:v.question, options:splitLines(v.options), correct:Number(v.correct || 0)});
    saveData();
    rerenderKeep();
    message('Modification enregistrée.');
  }

  function rerenderKeep(){
    const y = window.scrollY;
    renderEditor(activeUnitId);
    setTimeout(()=>window.scrollTo(0, y), 20);
  }
  function fixScroll(){
    document.documentElement.style.height = 'auto';
    document.body.style.height = 'auto';
    document.body.style.overflowY = 'auto';
    const app = $('#app'); if(app){ app.style.height='auto'; app.style.maxHeight='none'; app.style.overflow='visible'; }
    $$('.v87-teacher-shell,.v176-teacher-page,[data-v176-panel="modify"]').forEach(el => { el.style.height='auto'; el.style.maxHeight='none'; el.style.overflow='visible'; });
  }

  function injectCss(){
    if($('#v233-css')) return;
    const st = document.createElement('style');
    st.id = 'v233-css';
    st.textContent = `
      body.v233-open, body.v233-open #app{height:auto!important;min-height:100vh!important;overflow-y:auto!important;overflow-x:hidden!important;}
      .v87-student-shell{padding:3px!important}.v87-student-topbar{max-width:760px!important;padding:4px 7px!important;margin-bottom:3px!important}.v87-student-main,.v87-student-page,.student-page,.unit-page{max-width:760px!important;padding:3px 5px!important}.v87-student-main .panel,.v87-student-main section.panel,.content-card,.visual-panel,.audio-panel,.kine-panel{padding:6px!important;margin-bottom:5px!important;border-radius:12px!important}.v87-student-main h1{font-size:1.1rem!important}.v87-student-main h2{font-size:1rem!important}.v87-student-main h3{font-size:.94rem!important}.v87-student-main p,.v87-student-main li{font-size:.88rem!important;line-height:1.32!important}.v87-student-main img{max-height:125px!important}
      .v172-page,.v176-teacher-page{max-width:1180px!important;margin:0 auto!important;width:100%!important}.v176-dashboard{gap:14px!important}.v176-dash-card{border-width:3px!important;border-color:rgba(124,58,237,.45)!important;padding:15px!important;border-radius:22px!important}.v176-dash-card small{display:none!important}.v176-dash-card strong{font-size:1rem!important}.v176-dash-icon{background:linear-gradient(135deg,#6d28d9,#a855f7)!important}
      [data-v176-panel="modify"]{height:auto!important;max-height:none!important;overflow:visible!important;display:block!important}.v233-editor{background:linear-gradient(135deg,#4c1d95 0%,#7c3aed 32%,#ffffff 100%);border-radius:24px;padding:12px;display:grid;gap:10px;box-shadow:0 18px 46px rgba(76,29,149,.22);min-height:100vh}.v233-toolbar{position:sticky;top:8px;z-index:40;background:rgba(255,255,255,.96);border:2px solid rgba(124,58,237,.25);border-radius:20px;padding:10px;display:grid;grid-template-columns:1fr minmax(230px,320px) auto auto auto;gap:8px;align-items:center;box-shadow:0 12px 28px rgba(76,29,149,.14);backdrop-filter:blur(10px)}.v233-toolbar strong{display:block;color:#3b0764}.v233-toolbar small{display:block;color:#6b5b82;font-weight:800}.v233-toolbar select{width:100%;padding:10px;border-radius:14px;border:1px solid rgba(124,58,237,.25);font-weight:900}.v233-toolbar [data-v233-msg]{font-weight:950}.v233-toolbar [data-v233-msg].ok{color:#047857}.v233-toolbar [data-v233-msg].ko{color:#b91c1c}.v233-note{background:#fff;border:1px dashed rgba(124,58,237,.35);border-radius:16px;padding:9px 12px;color:#4c1d95;font-weight:900;text-align:center}.v233-student-like{max-width:1030px;margin:0 auto;display:grid;gap:10px;width:100%}.v233-hero,.v233-section,.v233-subtitle,.v233-style{background:rgba(255,255,255,.97);border:2px solid rgba(124,58,237,.14);border-radius:20px;padding:10px;box-shadow:0 10px 24px rgba(49,25,90,.08);display:grid;gap:9px}.v233-hero{grid-template-columns:1fr auto;align-items:start}.v233-hero span{display:inline-flex;background:#f3e8ff;color:#5b21b6;border-radius:999px;padding:4px 8px;font-size:.82rem;font-weight:950}.v233-hero h2{margin:.2rem 0;font-size:1.32rem;color:#3b0764;line-height:1.18}.v233-hero p,.v233-definition,.v233-example,.v233-card p,.v233-media-card p{margin:0;color:#334155;font-size:.92rem;line-height:1.38}.v233-head,.v233-title-line,.v233-card-head,.v233-mini-head{display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap}.v233-head,.v233-title-line,.v233-mini-head{background:#faf5ff;border:1px solid rgba(124,58,237,.18);border-radius:15px;padding:8px}.v233-head h3,.v233-title-line h3,.v233-mini-head h4{margin:0;color:#3b0764;font-size:1rem}.v233-card,.v233-media-card{border:1px solid rgba(124,58,237,.13);border-radius:16px;background:#fff;padding:9px;display:grid;gap:8px}.v233-card strong,.v233-media-card strong{color:#3b0764}.v233-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:8px}.v233-grid.mindmap{grid-template-columns:repeat(auto-fit,minmax(210px,1fr))}.v233-three-styles{display:grid;grid-template-columns:1fr;gap:9px}.v233-style.visual{border-left:7px solid #7c3aed}.v233-style.audio{border-left:7px solid #9333ea}.v233-style.kine{border-left:7px solid #a855f7}.v233-media{min-height:82px;background:#f8fafc;border:1px dashed rgba(124,58,237,.25);border-radius:14px;display:grid;place-items:center;padding:7px;color:#64748b;font-weight:900}.v233-media img{max-width:100%;max-height:145px;object-fit:contain;border-radius:11px}.v233-media video{max-width:100%;max-height:145px;border-radius:11px}.v233-media audio{width:100%;min-height:36px}.v233-empty,.v233-empty-media{background:#fbf7ff;border:1px dashed rgba(124,58,237,.28);color:#6b21a8;border-radius:13px;padding:8px;font-weight:900;display:flex;align-items:center;justify-content:space-between;gap:8px;flex-wrap:wrap}.v233-actions,.v233-form-actions{display:flex;gap:6px;align-items:center;flex-wrap:wrap}.v233-btn{border:0;border-radius:999px;padding:7px 11px;font-weight:950;cursor:pointer;background:#7c3aed;color:#fff;font-size:.83rem;box-shadow:0 8px 16px rgba(124,58,237,.16)}.v233-btn:hover{filter:brightness(.96)}.v233-btn.edit{background:#5b21b6}.v233-btn.add{background:#7c3aed}.v233-btn.save{background:#16a34a}.v233-btn.danger{background:#fff;color:#be123c;border:1px solid rgba(190,18,60,.30);box-shadow:none}.v233-btn.light{background:#fff;color:#4c1d95;border:1px solid rgba(124,58,237,.25);box-shadow:none}.v233-inline-form{margin-top:8px;border:2px solid rgba(124,58,237,.22);background:linear-gradient(180deg,#fff,#fdfaff);border-radius:16px;padding:10px;display:grid;gap:9px;box-shadow:0 12px 28px rgba(76,29,149,.12)}.v233-form-title{display:flex;justify-content:space-between;align-items:center;gap:8px;color:#3b0764}.v233-x{width:30px;height:30px;border:0;border-radius:999px;background:#f3e8ff;color:#6d28d9;font-size:1.25rem;font-weight:1000;cursor:pointer}.v233-field{display:grid;gap:5px}.v233-field span{font-weight:900;color:#4c1d95}.v233-field input,.v233-field textarea,.v233-field select{width:100%;box-sizing:border-box;border:1px solid rgba(124,58,237,.22);border-radius:13px;padding:9px 10px;font:inherit;background:#fff;color:#0f172a}.v233-field textarea{min-height:82px;resize:vertical}.v233-form-actions{justify-content:flex-end}.ar{direction:rtl;text-align:right}pre{white-space:pre-wrap;background:#f8fafc;border-radius:12px;padding:8px;margin:0}.muted{color:#64748b!important}
      @media(max-width:860px){.v233-toolbar{grid-template-columns:1fr}.v233-hero{grid-template-columns:1fr}.v233-grid{grid-template-columns:1fr}.v176-dashboard{grid-template-columns:1fr 1fr!important}.v233-editor{padding:8px;border-radius:18px}.v233-student-like{max-width:100%}}
      @media(max-width:540px){.v176-dashboard{grid-template-columns:1fr!important}.v233-btn{width:100%;justify-content:center}.v233-actions{width:100%}.v233-toolbar{top:0;border-radius:0}.v233-head,.v233-title-line,.v233-card-head,.v233-mini-head{align-items:stretch}.v233-editor{border-radius:0}}
    `;
    document.head.appendChild(st);
  }

  function isModifyPanelVisible(){ return !!$('[data-v176-panel="modify"]'); }
  function scheduleRender(delay=120){
    if(busy) return;
    busy = true;
    setTimeout(() => { busy = false; if(isModifyPanelVisible()){ document.body.classList.add('v233-open'); if(!$('[data-v233-editor]')) renderEditor(activeUnitId); else fixScroll(); } }, delay);
  }
  function installEvents(){
    document.addEventListener('click', e => {
      const dash = e.target.closest && e.target.closest('[data-v176-dashboard]');
      if(dash && dash.dataset.v176Dashboard === 'modify'){ activeUnitId = activeUnitId || ''; scheduleRender(180); return; }
      const editor = e.target.closest && e.target.closest('[data-v233-editor]');
      if(!editor) return;
      const cancel = e.target.closest('[data-v233-cancel]');
      if(cancel){ e.preventDefault(); closeForms(); return; }
      const top = e.target.closest('[data-v233-scroll-top]');
      if(top){ e.preventDefault(); editor.scrollIntoView({block:'start', behavior:'smooth'}); return; }
      const save = e.target.closest('[data-v233-save]');
      if(save){ e.preventDefault(); const ok = saveData(); message(ok ? 'Unité enregistrée.' : 'Erreur d’enregistrement.', ok); return; }
      const add = e.target.closest('[data-v233-add]');
      if(add){ e.preventDefault(); showAdd(add.dataset.v233Add, add.dataset.path || ''); return; }
      const edit = e.target.closest('[data-v233-edit]');
      if(edit){ e.preventDefault(); showEdit(edit.dataset.v233Edit, edit.dataset.path || ''); return; }
      const del = e.target.closest('[data-v233-del]');
      if(del){ e.preventDefault(); removeItem(del.dataset.v233Del, del.dataset.path || ''); return; }
    }, true);
    document.addEventListener('change', e => {
      const sel = e.target.closest && e.target.closest('[data-v233-unit-select]');
      if(sel){ activeUnitId = sel.value; renderEditor(activeUnitId); }
    }, true);
    document.addEventListener('submit', e => {
      const form = e.target.closest && e.target.closest('[data-v233-form]');
      if(form){ e.preventDefault(); handleSubmit(form).catch(err => { console.error(err); message('Erreur dans le formulaire.', false); }); }
    }, true);
    try{
      new MutationObserver(() => {
        const panel = $('[data-v176-panel="modify"]');
        if(panel && !$('[data-v233-editor]', panel)) scheduleRender(160);
      }).observe(document.body, {childList:true, subtree:true});
    }catch(e){}
  }
  function start(){
    injectCss();
    installEvents();
    setTimeout(scheduleRender, 500);
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
