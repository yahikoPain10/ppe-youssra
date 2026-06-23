/* =========================================================
   ÉPI v219 — dernière vérification prudente
   Objectifs :
   1) Boutons stables et lisibles, sans icônes décoratives.
   2) Design plus professionnel sans modifier le contenu pédagogique.
   3) Modification fiable des unités : visuel, auditif et kinesthésique
      de l’unité sélectionnée apparaissent dans des formulaires propres.
========================================================= */
(function(){
  'use strict';

  const STORE_PREFIX = 'epi_v170_unit_content_';
  const CUSTOM_UNITS_KEY = 'epi_v175_custom_units';
  let patchTimer = null;

  function q(sel, root){ return (root || document).querySelector(sel); }
  function qa(sel, root){ return Array.from((root || document).querySelectorAll(sel)); }
  function h(value){
    return String(value == null ? '' : value).replace(/[&<>"']/g, ch => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
    }[ch]));
  }
  function cleanTitle(value){ return String(value || '').replace(/^\s*Unité\s*\d+\s*:\s*/i,'').trim(); }
  function lines(value){ return String(value || '').split('\n').map(x => x.trim()).filter(Boolean); }
  function listUnits(){
    try{ return (typeof UNITS !== 'undefined' && Array.isArray(UNITS)) ? UNITS.filter(u => u && u.id && u.hiddenFromStudent !== true) : []; }
    catch(e){ return []; }
  }
  function unitById(id){
    const rows = listUnits();
    return rows.find(u => String(u.id) === String(id)) || rows[0] || null;
  }
  function readJson(key, fallback){
    try{ const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }
    catch(e){ return fallback; }
  }
  function writeJson(key, value){
    localStorage.setItem(key, JSON.stringify(value));
    return true;
  }
  function contentKey(id){ return STORE_PREFIX + String(id || 'unit'); }
  function mediaKind(src){
    const v = String(src || '').toLowerCase();
    if(v.startsWith('epi-media:video:') || /^data:video\//.test(v) || /\.(mp4|webm|ogg|ogv|mov|m4v)(\?|#|$)/.test(v)) return 'video';
    if(v.startsWith('epi-media:audio:') || /^data:audio\//.test(v) || /\.(mp3|wav|ogg|m4a|aac)(\?|#|$)/.test(v)) return 'audio';
    return v ? 'image' : '';
  }
  function mediaUrl(src){
    const v = String(src || '').trim();
    if(v.startsWith('epi-media:')){
      const parts = v.split(':');
      return '/api/media/' + encodeURIComponent(parts.slice(2).join(':'));
    }
    return v;
  }
  function mediaPreview(src, title){
    const url = mediaUrl(src);
    const kind = mediaKind(src);
    if(!url) return '<span class="v219-empty">Aucun média choisi</span>';
    if(kind === 'video') return `<video controls preload="metadata" src="${h(url)}" title="${h(title || 'Vidéo')}"></video>`;
    if(kind === 'audio') return `<audio controls preload="metadata" src="${h(url)}" title="${h(title || 'Audio')}"></audio>`;
    return `<img loading="lazy" src="${h(url)}" alt="${h(title || 'Image')}">`;
  }

  function savedContent(unit){
    if(!unit) return {};
    const saved = readJson(contentKey(unit.id), null);
    if(saved && typeof saved === 'object') return saved;
    if(unit._v172TeacherContent && typeof unit._v172TeacherContent === 'object') return unit._v172TeacherContent;
    if(unit._v170TeacherContent && typeof unit._v170TeacherContent === 'object') return unit._v170TeacherContent;
    return {};
  }
  function normalizeVisual(x, i, fallback){
    x = x || {};
    return {
      title: String(x.title || x.visualTitle || fallback || `Média ${i+1}`).trim(),
      src: String(x.src || x.visualSrc || '').trim(),
      description: String(x.description || x.visualDescription || x.definition || '').trim(),
      example: String(x.example || x.visualExample || '').trim(),
      action: String(x.action || x.visualAction || '').trim(),
      remember: String(x.remember || x.visualRemember || '').trim()
    };
  }
  function normalizeAudio(x, i, fallback){
    x = x || {};
    return {
      title: String(x.title || x.audioTitle || fallback || `Audio ${i+1}`).trim(),
      src: String(x.src || x.audioSrc || '').trim(),
      text: String(x.text || x.audioText || x.definition || '').trim(),
      ar: String(x.ar || x.audioAr || '').trim()
    };
  }
  function normalizeKine(x, i){
    x = x || {};
    return {
      type: String(x.type || x.kineType || 'Question directe').trim() || 'Question directe',
      question: String(x.question || x.kineQuestion || '').trim(),
      options: String(x.options || x.kineOptions || '').trim(),
      pairs: String(x.pairs || x.kinePairs || '').trim(),
      steps: String(x.steps || x.kineSteps || '').trim(),
      answer: String(x.answer || x.kineAnswer || '').trim(),
      correction: String(x.correction || x.kineCorrection || '').trim()
    };
  }
  function byTitleOrIndex(rows, title, index){
    if(!Array.isArray(rows)) return null;
    const t = cleanTitle(title).toLowerCase();
    if(t){
      const found = rows.find(r => cleanTitle(r && (r.title || r.visualTitle || r.audioTitle || r.question || '')).toLowerCase() === t);
      if(found) return found;
    }
    return rows[index] || null;
  }
  function deriveContent(unit){
    const saved = savedContent(unit);
    const lessons = Array.isArray(saved.lessons) && saved.lessons.length ? saved.lessons : (Array.isArray(unit && unit.lessons) ? unit.lessons : []);
    const branches = Array.isArray(saved.mindmapBranches) ? saved.mindmapBranches : [];
    const visuals = Array.isArray(saved.visualItems) ? saved.visualItems : [];
    const audios = Array.isArray(saved.audioItems) ? saved.audioItems : [];
    const kines = Array.isArray(saved.kineQuestions) ? saved.kineQuestions : (Array.isArray(saved.kineExercises) ? saved.kineExercises : []);
    let subtitles = Array.isArray(saved.subtitleItems) && saved.subtitleItems.length ? saved.subtitleItems.map((s,i) => {
      const title = String(s.title || (lessons[i] && lessons[i].title) || `Sous-titre ${i+1}`).trim();
      const visList = Array.isArray(s.visualItems) && s.visualItems.length ? s.visualItems.map((x,j)=>normalizeVisual(x,j,title)) : [normalizeVisual(s,0,title)].filter(x => x.title || x.src || x.description || x.example || x.action || x.remember);
      const audList = Array.isArray(s.audioItems) && s.audioItems.length ? s.audioItems.map((x,j)=>normalizeAudio(x,j,title)) : [normalizeAudio(s,0,title)].filter(x => x.title || x.src || x.text || x.ar);
      const kinList = Array.isArray(s.kineExercises) && s.kineExercises.length ? s.kineExercises.map(normalizeKine) : [normalizeKine(s,0)].filter(x => x.question || x.options || x.pairs || x.steps || x.answer || x.correction);
      return {
        title,
        definition: String(s.definition || (lessons[i] && (lessons[i].fr || lessons[i].objective)) || '').trim(),
        example: String(s.example || '').trim(),
        children: Array.isArray(s.children) ? s.children.join('\n') : String(s.children || '').trim(),
        visualItems: visList,
        audioItems: audList,
        kineExercises: kinList
      };
    }) : [];
    if(!subtitles.length){
      const count = Math.max(lessons.length, branches.length, visuals.length, audios.length, kines.length, 1);
      subtitles = Array.from({length: count}, (_, i) => {
        const lesson = lessons[i] || {};
        const title = String(lesson.title || (branches[i] && branches[i].title) || `Sous-titre ${i+1}`).trim();
        const branch = byTitleOrIndex(branches, title, i) || {};
        const visual = byTitleOrIndex(visuals, title, i);
        const audio = byTitleOrIndex(audios, title, i);
        const kine = kines[i] || {};
        const childRows = Array.isArray(branch.children) ? branch.children : lines(branch.children || '');
        return {
          title,
          definition: String(lesson.fr || lesson.objective || branch.definition || '').trim(),
          example: String(branch.example || (Array.isArray(lesson.fill) ? (lesson.fill[1] || lesson.fill[0] || '') : '')).trim(),
          children: childRows.join('\n'),
          visualItems: visual ? [normalizeVisual(visual,0,title)] : [],
          audioItems: audio ? [normalizeAudio(audio,0,title)] : [],
          kineExercises: kine && (kine.question || kine.answer || kine.correction || kine.options || kine.pairs || kine.steps) ? [normalizeKine(kine,0)] : []
        };
      });
    }
    return Object.assign({}, saved, {
      title: saved.title || (unit && unit.title) || '',
      short: saved.short || (unit && unit.short) || '',
      intro: typeof saved.intro === 'string' ? saved.intro : ((unit && unit.intro) || ''),
      competence: saved.competence || (unit && unit.competence) || '',
      duration: saved.duration || (unit && unit.duration) || '',
      schoolYear: saved.schoolYear || (unit && unit.schoolYear) || '1ac',
      subtitleItems: subtitles
    });
  }

  function visualRow(item){
    return `<article class="v219-repeat-row" data-v219-visual-row data-v190-visual-row>
      <div class="v219-row-head"><strong>Média visuel</strong><button type="button" class="v219-small-danger" data-v219-remove-row>Supprimer</button></div>
      <div class="v219-media-grid">
        <div class="v219-preview">${mediaPreview(item.src, item.title)}</div>
        <div class="v219-fields">
          <label><span>Titre du média</span><input data-field="title" value="${h(item.title)}"></label>
          <label><span>Référence du média</span><input data-field="src" value="${h(item.src)}" placeholder="URL ou média serveur"></label>
          <label><span>Importer une image ou une vidéo</span><input type="file" accept="image/*,video/mp4,video/webm,video/ogg" data-v181-add-file="src"></label>
        </div>
      </div>
      <label><span>Définition / légende</span><textarea data-field="description" rows="3">${h(item.description)}</textarea></label>
      <label><span>Exemple cliquable</span><textarea data-field="example" rows="3">${h(item.example)}</textarea></label>
      <div class="v219-grid2">
        <label><span>Action à réaliser</span><textarea data-field="action" rows="2">${h(item.action)}</textarea></label>
        <label><span>À retenir</span><textarea data-field="remember" rows="2">${h(item.remember)}</textarea></label>
      </div>
    </article>`;
  }
  function audioRow(item){
    return `<article class="v219-repeat-row" data-v219-audio-row data-v190-audio-row>
      <div class="v219-row-head"><strong>Support auditif</strong><button type="button" class="v219-small-danger" data-v219-remove-row>Supprimer</button></div>
      <label><span>Titre de la narration</span><input data-field="title" value="${h(item.title)}"></label>
      <input type="hidden" data-field="src" value="${h(item.src)}">
      <div class="v219-preview v194-media-preview">${mediaPreview(item.src, item.title)}</div>
      <label><span>Importer un audio ou une vidéo</span><input type="file" accept="audio/*,video/mp4,video/webm,video/ogg,video/quicktime,.mp3,.wav,.m4a,.ogg,.mp4,.webm,.mov" data-v181-add-file="src"></label>
      <label><span>Texte à lire en français</span><textarea data-field="text" rows="4">${h(item.text)}</textarea></label>
      <label><span>Texte à lire en arabe</span><textarea data-field="ar" rows="3">${h(item.ar)}</textarea></label>
    </article>`;
  }
  function kineRow(item){
    const types = ['Question directe','QCM','Compléter','Association','Ordre logique','Tâche pratique'];
    return `<article class="v219-repeat-row" data-v219-kine-row data-v190-kine-row>
      <div class="v219-row-head"><strong>Exercice</strong><button type="button" class="v219-small-danger" data-v219-remove-row>Supprimer</button></div>
      <div class="v219-grid2">
        <label><span>Type d’exercice</span><select data-field="type">${types.map(t=>`<option ${t===item.type?'selected':''}>${h(t)}</option>`).join('')}</select></label>
        <label><span>Réponse courte attendue</span><input data-field="answer" value="${h(item.answer)}"></label>
      </div>
      <label><span>Question ou consigne</span><textarea data-field="question" rows="3">${h(item.question)}</textarea></label>
      <label><span>Choix du QCM</span><textarea data-field="options" rows="3" placeholder="Un choix par ligne">${h(item.options)}</textarea></label>
      <label><span>Association</span><textarea data-field="pairs" rows="3" placeholder="notion || définition">${h(item.pairs)}</textarea></label>
      <label><span>Ordre logique</span><textarea data-field="steps" rows="3" placeholder="Une étape par ligne">${h(item.steps)}</textarea></label>
      <label><span>Correction simple</span><textarea data-field="correction" rows="3">${h(item.correction)}</textarea></label>
    </article>`;
  }
  function subtitleBlock(item, index){
    const visuals = item.visualItems && item.visualItems.length ? item.visualItems : [normalizeVisual({},0,item.title)];
    const audios = item.audioItems && item.audioItems.length ? item.audioItems : [normalizeAudio({},0,item.title)];
    const kines = item.kineExercises && item.kineExercises.length ? item.kineExercises : [normalizeKine({},0)];
    return `<article class="v219-subtitle-block" data-v219-subtitle>
      <header class="v219-subtitle-head"><div><span>Sous-titre ${index+1}</span><h3>${h(item.title || `Sous-titre ${index+1}`)}</h3></div><button type="button" class="v219-small-danger" data-v219-remove-subtitle>Supprimer ce sous-titre</button></header>
      <label><span>Nom du sous-titre</span><input data-field="title" value="${h(item.title)}"></label>
      <label><span>Définition du sous-titre</span><textarea data-field="definition" rows="4">${h(item.definition)}</textarea></label>
      <details open><summary>Style visuel</summary><div class="v219-list" data-v219-visual-list>${visuals.map(visualRow).join('')}</div><button type="button" class="btn secondary" data-v219-add-visual>Ajouter une image ou une vidéo</button></details>
      <details open><summary>Style auditif</summary><div class="v219-list" data-v219-audio-list>${audios.map(audioRow).join('')}</div><button type="button" class="btn secondary" data-v219-add-audio>Ajouter un support auditif</button></details>
      <details open><summary>Style kinesthésique</summary><div class="v219-list" data-v219-kine-list>${kines.map(kineRow).join('')}</div><button type="button" class="btn secondary" data-v219-add-kine>Ajouter un exercice</button></details>
    </article>`;
  }

  function renderModifyStyles(){
    const panel = q('[data-v176-panel="modify"]');
    const section = q('[data-v179-mod-section="subtitles"]', panel || document);
    const select = q('#v172UnitSelect');
    if(!panel || !section || !select) return;
    const unit = unitById(select.value);
    if(!unit) return;
    const content = deriveContent(unit);
    const marker = unit.id + '|' + JSON.stringify((content.subtitleItems || []).map(x => [x.title, (x.visualItems||[]).length, (x.audioItems||[]).length, (x.kineExercises||[]).length]));
    if(section.dataset.v219Rendered === marker && q('[data-v219-styles-editor]', section)) return;
    section.dataset.v219Rendered = marker;
    const blocks = (content.subtitleItems || []).map(subtitleBlock).join('');
    section.innerHTML = `<div class="v176-section-title v219-section-title"><span>2</span><h3>Modification fiable des sous-titres et des trois styles</h3></div>
      <p class="v219-note">Le contenu affiché ici appartient uniquement à l’unité sélectionnée. Les styles visuel, auditif et kinesthésique sont modifiables dans des formulaires séparés.</p>
      <div data-v219-styles-editor>${blocks || subtitleBlock({title:'Sous-titre 1',definition:'',example:'',children:'',visualItems:[],audioItems:[],kineExercises:[]},0)}</div>
      <button type="button" class="btn secondary" data-v219-add-subtitle>Ajouter un sous-titre</button>`;
    const save = q('[data-v176-save-modify]', panel);
    if(save){
      save.removeAttribute('data-v176-save-modify');
      save.setAttribute('data-v219-save-modify','1');
      save.textContent = 'Enregistrer les modifications';
    }
    cleanButtons(panel);
  }
  function collectField(root, name){ return q(`[data-field="${name}"]`, root)?.value || ''; }
  function collectVisual(root){
    return qa('[data-v219-visual-row]', root).map(row => normalizeVisual({
      title: collectField(row,'title'), src: collectField(row,'src'), description: collectField(row,'description'),
      example: collectField(row,'example'), action: collectField(row,'action'), remember: collectField(row,'remember')
    },0,'')).filter(x => x.title || x.src || x.description || x.example || x.action || x.remember);
  }
  function collectAudio(root){
    return qa('[data-v219-audio-row]', root).map(row => normalizeAudio({
      title: collectField(row,'title'), src: collectField(row,'src'), text: collectField(row,'text'), ar: collectField(row,'ar')
    },0,'')).filter(x => x.title || x.src || x.text || x.ar);
  }
  function collectKine(root){
    return qa('[data-v219-kine-row]', root).map(row => normalizeKine({
      type: collectField(row,'type'), question: collectField(row,'question'), options: collectField(row,'options'),
      pairs: collectField(row,'pairs'), steps: collectField(row,'steps'), answer: collectField(row,'answer'), correction: collectField(row,'correction')
    },0)).filter(x => x.question || x.options || x.pairs || x.steps || x.answer || x.correction);
  }
  function collectSubtitles(){
    return qa('[data-v219-subtitle]').map((row, i) => {
      const visualItems = collectVisual(row);
      const audioItems = collectAudio(row);
      const kineExercises = collectKine(row);
      const v0 = visualItems[0] || {}, a0 = audioItems[0] || {}, k0 = kineExercises[0] || {};
      return {
        title: collectField(row,'title').trim() || `Sous-titre ${i+1}`,
        definition: collectField(row,'definition'),
        example: collectField(row,'example'),
        children: lines(collectField(row,'children')),
        visualItems, audioItems, kineExercises,
        visualTitle: v0.title || '', visualSrc: v0.src || '', visualDescription: v0.description || '', visualExample: v0.example || '', visualAction: v0.action || '', visualRemember: v0.remember || '',
        audioTitle: a0.title || '', audioSrc: a0.src || '', audioText: a0.text || '', audioAr: a0.ar || '',
        kineType: k0.type || 'Question directe', kineQuestion: k0.question || '', kineOptions: k0.options || '', kinePairs: k0.pairs || '', kineSteps: k0.steps || '', kineAnswer: k0.answer || '', kineCorrection: k0.correction || ''
      };
    }).filter(x => x.title || x.definition || x.example || x.visualItems.length || x.audioItems.length || x.kineExercises.length);
  }
  function deriveFromSubtitles(items, unit){
    const lessons = items.map((item) => ({
      title: item.title,
      officialFocus: item.title,
      objective: item.definition,
      fr: item.definition,
      ar: item.audioAr || '',
      officialObjectives: Array.isArray(item.children) ? item.children : lines(item.children),
      visual: { image: item.visualSrc || '', example: item.visualExample || '' },
      fill: [item.example ? `Exemple : ${item.example}` : 'Exemple : ____', item.example || '', [item.example || 'Exemple', item.title, 'Autre exemple']],
      drag: [[item.title, item.definition || '']]
    }));
    return {
      subtitleItems: items,
      lessons,
      mindmapBranches: items.map(item => ({title:item.title, definition:item.definition, example:item.example, children:item.children})),
      visualItems: items.flatMap(item => (item.visualItems || []).map(v => Object.assign({subtitleTitle:item.title}, v))),
      audioItems: items.flatMap(item => (item.audioItems || []).map(a => Object.assign({subtitleTitle:item.title}, a))),
      kineQuestions: items.flatMap(item => (item.kineExercises || []).map(k => Object.assign({subtitleTitle:item.title}, k))),
      officialResources: items.map(x => x.title).filter(Boolean)
    };
  }
  function saveModify(){
    const select = q('#v172UnitSelect');
    const unit = unitById(select && select.value);
    if(!unit) return;
    const existing = savedContent(unit);
    const subtitles = collectSubtitles();
    const payload = Object.assign({}, existing, deriveFromSubtitles(subtitles, unit), {
      title: q('#v176EditUnitTitle')?.value.trim() || existing.title || unit.title || '',
      short: q('#v176EditUnitShort')?.value.trim() || '',
      duration: q('#v176EditUnitDuration')?.value.trim() || '',
      competence: q('#v176EditUnitCompetence')?.value.trim() || '',
      intro: q('#v176EditUnitIntro')?.value || '',
      schoolYear: q('#v176EditUnitYear')?.value || existing.schoolYear || unit.schoolYear || '1ac'
    });
    const dict = q('#v176EditDictionary')?.value;
    if(dict != null) payload.dictionary = dict.split('\n').map(line => line.split('||').map(x => x.trim())).filter(pair => pair[0]);
    const scenario = q('#v176EditScenario')?.value;
    if(scenario != null){ payload.scenario = scenario; payload.integrationScenario = scenario; }
    const tasksText = q('#v176EditTasks')?.value;
    if(tasksText != null && tasksText.trim()){
      payload.integrationTasks = tasksText.split('\n').map(line => {
        const parts = line.split('||').map(x => x.trim());
        return {task: parts[0] || '', expected: parts[1] || ''};
      }).filter(x => x.task);
    }
    const examText = q('#v176EditExam')?.value;
    if(examText != null && examText.trim()){
      payload.examQuestions = examText.split('\n').map(line => {
        const parts = line.split('||').map(x => x.trim());
        const opts = (parts[1] || '').split('|').map(x => x.trim()).filter(Boolean);
        while(opts.length < 4) opts.push('');
        const correct = Math.max(0, Math.min(3, Number(parts[2] || 1) - 1));
        return [parts[0] || '', opts.slice(0,4), correct];
      }).filter(x => x[0]);
      payload.exam = payload.examQuestions;
    }
    writeJson(contentKey(unit.id), payload);
    try{
      unit._v172TeacherContent = payload;
      if(unit.customUnit){
        unit.title = payload.title || unit.title;
        unit.short = payload.short || unit.short;
        unit.intro = payload.intro || unit.intro;
        unit.competence = payload.competence || unit.competence;
        unit.duration = payload.duration || unit.duration;
        unit.schoolYear = payload.schoolYear || unit.schoolYear;
        unit.lessons = payload.lessons || unit.lessons;
        const rows = readJson(CUSTOM_UNITS_KEY, []);
        if(Array.isArray(rows)){
          const idx = rows.findIndex(u => u && u.id === unit.id);
          const cleanUnit = Object.assign({}, unit);
          if(idx >= 0) rows[idx] = cleanUnit; else rows.push(cleanUnit);
          writeJson(CUSTOM_UNITS_KEY, rows);
        }
      }
    }catch(e){}
    const msg = q('#v176ModifyMsg');
    if(msg){ msg.className = 'v172-message ok'; msg.textContent = 'Modifications enregistrées avec succès.'; }
    renderModifyStyles();
  }

  function addSubtitle(){
    const list = q('[data-v219-styles-editor]');
    if(!list) return;
    const i = qa('[data-v219-subtitle]', list).length;
    list.insertAdjacentHTML('beforeend', subtitleBlock({title:`Sous-titre ${i+1}`,definition:'',example:'',children:'',visualItems:[],audioItems:[],kineExercises:[]}, i));
    cleanButtons(list);
  }

  function cleanButtons(root){
    qa('button', root || document).forEach(btn => {
      if(!btn.closest('#loginForm,#teacherAuthForm') && btn.getAttribute('type') !== 'submit') btn.type = 'button';
      if(btn.dataset.v219Cleaned === '1') return;
      let txt = (btn.textContent || '').replace(/[▶■←→➜➡⬅🔒🔓✅❌⭐✨📌📦🧠🎧🎬🖼️]/g,'').replace(/\s+/g,' ').trim();
      txt = txt.replace(/^\+\s*/,'Ajouter ');
      txt = txt.replace(/^Ajouter Ajouter/i,'Ajouter');
      txt = txt.replace(/^Précédent$/i,'Étape précédente').replace(/^Suivant$/i,'Étape suivante');
      if(txt) btn.textContent = txt;
      btn.dataset.v219Cleaned = '1';
    });
  }
  function addProfessionalCss(){
    if(q('#v219-style')) return;
    const st = document.createElement('style');
    st.id = 'v219-style';
    st.textContent = `
      :root{--v219-radius:22px;--v219-border:rgba(15,23,42,.10);--v219-shadow:0 18px 45px rgba(15,23,42,.10);}
      #v206-badge,#v208-badge,.v216-badge,.v214-badge,.v215-badge,[id*="badge"]{display:none!important;}
      body{background:linear-gradient(180deg,#f8fafc 0%,#eef4ff 100%)!important;}
      #app main,.app-shell,.student-shell,.v87-teacher-shell,.v91-page,.lesson-page,.unit-page,.v172-page{width:min(96vw,1480px)!important;max-width:1480px!important;margin-left:auto!important;margin-right:auto!important;}
      .lesson-content,.unit-content,.panel,.visual-panel,.audio-card,.kine-panel,.v172-card,.v176-panel,.v176-form-card{border-radius:var(--v219-radius)!important;border:1px solid var(--v219-border)!important;box-shadow:var(--v219-shadow)!important;}
      .panel,.visual-panel,.audio-card,.kine-panel{padding:clamp(22px,3vw,42px)!important;}
      .course-main,.lesson-main,.content-area{gap:24px!important;}
      button,.btn{border-radius:999px!important;font-weight:850!important;letter-spacing:.01em!important;transition:transform .16s ease, box-shadow .16s ease, background .16s ease!important;}
      button:hover,.btn:hover{transform:translateY(-1px)!important;box-shadow:0 12px 26px rgba(15,23,42,.14)!important;}
      button:focus-visible,.btn:focus-visible,input:focus,textarea:focus,select:focus{outline:3px solid rgba(37,99,235,.28)!important;outline-offset:2px!important;}
      .v219-section-title{margin-bottom:14px!important;}
      .v219-note{background:#eff6ff;border:1px solid rgba(37,99,235,.16);color:#1e3a8a;border-radius:18px;padding:14px 16px;line-height:1.65;font-weight:750;}
      .v219-subtitle-block{background:#fff;border:1px solid rgba(15,23,42,.10);border-radius:26px;padding:20px;margin:18px 0;box-shadow:0 14px 34px rgba(15,23,42,.08);}
      .v219-subtitle-head,.v219-row-head{display:flex;align-items:flex-start;justify-content:space-between;gap:12px;margin-bottom:12px;}
      .v219-subtitle-head span{display:inline-flex;background:#dbeafe;color:#1d4ed8;border-radius:999px;padding:5px 10px;font-weight:900;font-size:.82rem;}
      .v219-subtitle-head h3{margin:.35rem 0 0;color:#0f172a;}
      .v219-grid2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;}
      .v219-subtitle-block label,.v219-repeat-row label{display:grid;gap:7px;font-weight:850;color:#1f2937;}
      .v219-subtitle-block input,.v219-subtitle-block textarea,.v219-subtitle-block select,.v219-repeat-row input,.v219-repeat-row textarea,.v219-repeat-row select{width:100%;box-sizing:border-box;border:1px solid rgba(15,23,42,.14);border-radius:16px;padding:11px 12px;background:#fff;color:#0f172a;font:inherit;}
      .v219-subtitle-block details{border:1px solid rgba(37,99,235,.14);border-radius:22px;padding:14px;background:linear-gradient(180deg,#f8fbff,#fff);margin-top:16px;}
      .v219-subtitle-block summary{cursor:pointer;font-weight:950;color:#1e3a8a;list-style:none;}
      .v219-list{display:grid;gap:14px;margin-top:14px;}
      .v219-repeat-row{background:#fff;border:1px solid rgba(15,23,42,.10);border-radius:20px;padding:15px;display:grid;gap:12px;}
      .v219-media-grid{display:grid;grid-template-columns:minmax(220px,330px) 1fr;gap:14px;align-items:start;}
      .v219-preview{min-height:130px;border:1px dashed rgba(37,99,235,.26);background:#f8fafc;border-radius:18px;padding:10px;display:grid;place-items:center;color:#64748b;font-weight:850;}
      .v219-preview img{max-width:100%;max-height:240px;object-fit:contain;border-radius:14px;}
      .v219-preview video{width:100%;max-height:260px;border-radius:14px;background:#0f172a;}
      .v219-preview audio{width:100%;}
      .v219-fields{display:grid;gap:12px;}
      .v219-small-danger{background:#fff!important;color:#991b1b!important;border:1px solid rgba(153,27,27,.18)!important;padding:8px 12px!important;}
      .v176-panel-head p,.style-header p,.subtle{line-height:1.65!important;}
      @media(max-width:860px){.v219-grid2,.v219-media-grid{grid-template-columns:1fr}.v219-subtitle-head,.v219-row-head{display:grid}.panel,.visual-panel,.audio-card,.kine-panel{padding:20px!important;}}
    `;
    document.head.appendChild(st);
  }

  function patchButtonsAndDesign(){ cleanButtons(document); addProfessionalCss(); }
  function schedulePatch(){
    clearTimeout(patchTimer);
    patchTimer = setTimeout(() => { patchButtonsAndDesign(); renderModifyStyles(); }, 120);
  }

  document.addEventListener('click', function(e){
    const addSub = e.target.closest && e.target.closest('[data-v219-add-subtitle]');
    if(addSub){ e.preventDefault(); e.stopPropagation(); if(e.stopImmediatePropagation) e.stopImmediatePropagation(); addSubtitle(); return; }
    const addVisual = e.target.closest && e.target.closest('[data-v219-add-visual]');
    if(addVisual){ e.preventDefault(); const list = addVisual.closest('details')?.querySelector('[data-v219-visual-list]'); if(list) list.insertAdjacentHTML('beforeend', visualRow(normalizeVisual({},0,''))); cleanButtons(list); return; }
    const addAudio = e.target.closest && e.target.closest('[data-v219-add-audio]');
    if(addAudio){ e.preventDefault(); const list = addAudio.closest('details')?.querySelector('[data-v219-audio-list]'); if(list) list.insertAdjacentHTML('beforeend', audioRow(normalizeAudio({},0,''))); cleanButtons(list); return; }
    const addKine = e.target.closest && e.target.closest('[data-v219-add-kine]');
    if(addKine){ e.preventDefault(); const list = addKine.closest('details')?.querySelector('[data-v219-kine-list]'); if(list) list.insertAdjacentHTML('beforeend', kineRow(normalizeKine({},0))); cleanButtons(list); return; }
    const remove = e.target.closest && e.target.closest('[data-v219-remove-row]');
    if(remove){ e.preventDefault(); const row = remove.closest('[data-v219-visual-row],[data-v219-audio-row],[data-v219-kine-row]'); if(row) row.remove(); return; }
    const removeSub = e.target.closest && e.target.closest('[data-v219-remove-subtitle]');
    if(removeSub){ e.preventDefault(); const rows = qa('[data-v219-subtitle]'); if(rows.length > 1) removeSub.closest('[data-v219-subtitle]')?.remove(); return; }
    const save = e.target.closest && e.target.closest('[data-v219-save-modify]');
    if(save){ e.preventDefault(); e.stopPropagation(); if(e.stopImmediatePropagation) e.stopImmediatePropagation(); saveModify(); return; }
    if(e.target.closest && (e.target.closest('[data-v176-dashboard]') || e.target.closest('[data-v179-mod-section-btn]') || e.target.closest('[data-v190-open-subtitle]'))){ schedulePatch(); }
  }, true);

  document.addEventListener('change', function(e){
    if(e.target && e.target.matches && e.target.matches('#v172UnitSelect')) schedulePatch();
    if(e.target && e.target.matches && e.target.matches('input[type="file"]')) setTimeout(schedulePatch, 500);
  }, true);

  function start(){
    addProfessionalCss();
    schedulePatch();
    try{
      new MutationObserver(schedulePatch).observe(document.body, {childList:true, subtree:true});
    }catch(e){}
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();

  window.EPI_V219_FINAL = { deriveContent, renderModifyStyles, saveModify };
})();
