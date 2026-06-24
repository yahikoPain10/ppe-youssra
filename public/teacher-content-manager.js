/* =========================================================
   ÉPI — Espace enseignant organisé (v190)
   Objectif : gérer tout le contenu depuis l’espace prof.
   - Carte mentale : ajouter / modifier / supprimer des branches.
   - Style visuel : ajouter / supprimer des images.
   - Style auditif : ajouter / supprimer des audios ou textes à écouter.
   - Style kinesthésique : ajouter / supprimer des questions.
   - Situation d’intégration : situation réelle + tâches pratiques.
========================================================= */
(function(){
  'use strict';

  const STORE_PREFIX = 'epi_v170_unit_content_';
  const CUSTOM_UNITS_KEY = 'epi_v175_custom_units';
  const DELETED_UNITS_KEY = 'epi_v191_deleted_units';
  const TEACHER_USERS_KEY = 'epi_teacher_added_users';
  const INTEGRATION_FILES_KEY = 'epi_integration_submissions';
  const DEFAULT_UNITS = (typeof UNITS !== 'undefined' && Array.isArray(UNITS)) ? JSON.parse(JSON.stringify(UNITS)) : [];
  let activeUnitId = '';
  let activeTab = 'general';
  let activeSubtitleIndex = 0;
  let showAddUnitForm = false;
  let activePanel = 'home';
  const ADD_SECTIONS = ['general','subtitles','mindmap','dictionary','scenario','tasks','exam'];

  function $(sel, root){ return (root || document).querySelector(sel); }
  function $all(sel, root){ return Array.from((root || document).querySelectorAll(sel)); }
  function html(value){
    const text = value == null ? '' : String(value);
    if(typeof esc === 'function') return esc(text);
    return text.replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
  }
  function attr(value){ return html(value); }
  function cleanTitle(value){ return String(value || '').replace(/^\s*Unité\s*\d+\s*:\s*/i,'').trim(); }
  function readJson(key, fallback){
    try{ const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }catch(e){ return fallback; }
  }
  function writeJson(key, value){
    try{ localStorage.setItem(key, JSON.stringify(value)); return true; }
    catch(e){ console.error('ÉPI stockage impossible pour', key, e); return false; }
  }
  function keyFor(unit){ return STORE_PREFIX + (unit && unit.id ? unit.id : 'unit'); }
  function deletedUnitIds(){
    const rows = readJson(DELETED_UNITS_KEY, []);
    return Array.isArray(rows) ? rows.filter(Boolean).map(String) : [];
  }
  function isDeletedUnit(id){ return deletedUnitIds().includes(String(id || '')); }
  function rememberDeletedUnit(id){
    const value = String(id || '').trim();
    if(!value) return;
    const rows = deletedUnitIds();
    if(!rows.includes(value)) rows.push(value);
    writeJson(DELETED_UNITS_KEY, rows);
  }
  function forgetDeletedUnit(id){
    const value = String(id || '').trim();
    if(!value) return;
    writeJson(DELETED_UNITS_KEY, deletedUnitIds().filter(x => x !== value));
  }
  function units(){
    if(typeof UNITS === 'undefined' || !Array.isArray(UNITS)) return [];
    const deleted = new Set(deletedUnitIds());
    return UNITS.filter(u => u && u.id && !deleted.has(String(u.id)) && u.hiddenFromStudent !== true);
  }
  function unitById(id){ return units().find(u => u.id === id) || units()[0] || null; }
  function originalUnit(id){ return DEFAULT_UNITS.find(u => u && u.id === id) || null; }
  function clone(value){ return JSON.parse(JSON.stringify(value == null ? null : value)); }
  function linesToArray(text){ return String(text || '').split('\n').map(x => x.trim()).filter(Boolean); }
  function arrayToLines(arr){ return (arr || []).map(x => String(x || '')).join('\n'); }
  function splitChildLine(line){
    const text = String(line || '').trim();
    if(!text) return null;
    let parts = text.split('||');
    if(parts.length < 2) parts = text.split(/\s+[–—-]\s+/);
    if(parts.length < 2) return {title:text, definition:''};
    return {title:String(parts.shift() || '').trim(), definition:String(parts.join(' - ') || '').trim()};
  }
  function normalizeMindmapChildren(value){
    const rows = Array.isArray(value) ? value : linesToArray(value);
    return rows.map(item => {
      if(item && typeof item === 'object'){
        return {
          title: String(item.title || item.name || item.text || item.label || '').trim(),
          definition: String(item.definition || item.description || item.value || item.detail || '').trim()
        };
      }
      return splitChildLine(item);
    }).filter(item => item && (item.title || item.definition));
  }
  function childTitles(value){
    return normalizeMindmapChildren(value).map(item => item.title).filter(Boolean);
  }
  function childDetailsText(value){
    const rows = normalizeMindmapChildren(value);
    return rows.map(item => item.definition ? `${item.title} : ${item.definition}` : item.title).join(' • ');
  }
  function childDetailsHtml(value){
    const rows = normalizeMindmapChildren(value);
    if(!rows.length) return '<p>Aucun sous-fil indiqué</p>';
    return `<ul class="v207-child-details">${rows.map(item => `<li><strong>${html(item.title || 'Sous-fil')}</strong>${item.definition ? `<span>${html(item.definition)}</span>` : ''}</li>`).join('')}</ul>`;
  }



  function defaultLessonPayload(name){
    const title = String(name || 'Nouveau sous-titre').trim() || 'Nouveau sous-titre';
    return {
      title,
      competence: '',
      officialFocus: title,
      objective: '',
      officialObjectives: [],
      visualType: 'diagram',
      visual: { image:'', example:'', steps:[] },
      fr: '',
      ar: '',
      fill: ['Exemple : ____', '', ['Exemple 1','Exemple 2','Exemple 3']],
      drag: [[title, '']],
      order: { title, steps: [] }
    };
  }
  function makeDefaultUnit(data){
    const baseTitle = String((data && data.title) || 'Nouvelle unité').trim() || 'Nouvelle unité';
    const idSeed = baseTitle.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').replace(/[^a-z0-9]+/g,'_').replace(/^_|_$/g,'').slice(0,24) || 'unite';
    const subtitle = 'Sous-titre 1';
    return {
      id: `custom_${idSeed}_${Date.now()}`,
      icon: '',
      title: baseTitle,
      short: (data && data.short) || 'Nouvelle unité personnalisée',
      color: 'blue',
      competence: (data && data.competence) || '',
      duration: (data && data.duration) || '6 h',
      officialResources: [subtitle],
      intro: (data && data.intro) || 'Décris ici l’objectif général de cette nouvelle unité.',
      dictionary: [],
      lessons: [defaultLessonPayload(subtitle)],
      integration: {
        title: 'Situation de production',
        scenario: 'Décris ici une situation réelle qui mobilise les apprentissages de cette unité.',
        tasks: ['Réaliser une activité liée à cette unité.'],
        questions: []
      },
      exam: [['Question 1', ['Choix 1', 'Choix 2', 'Choix 3', 'Choix 4'], 0]],
      schoolYear: (data && data.schoolYear) || '1ac',
      customUnit: true,
      hiddenFromStudent: false
    };
  }
  function readCustomUnits(){
    const rows = readJson(CUSTOM_UNITS_KEY, []);
    return Array.isArray(rows) ? rows : [];
  }
  function persistCustomUnits(){
    if(typeof UNITS === 'undefined' || !Array.isArray(UNITS)) return;
    const deleted = new Set(deletedUnitIds());
    const rows = UNITS.filter(u => u && u.customUnit && !deleted.has(String(u.id))).map(u => Object.assign({}, clone(u), {hiddenFromStudent:false, customUnit:true}));
    writeJson(CUSTOM_UNITS_KEY, rows);
    writeJson('epi_v183_custom_units_visible', rows);
    writeJson('epi_v181_custom_units_visible', rows);
    try{ window.EPI_SESSION_CUSTOM_UNITS_V183 = rows; }catch(e){}
    if(window.EPI_CUSTOM_UNITS_V183 && typeof window.EPI_CUSTOM_UNITS_V183.sync === 'function'){
      try{ window.EPI_CUSTOM_UNITS_V183.sync(); }catch(e){}
    }
  }
  function ensureCustomUnits(){
    if(typeof UNITS === 'undefined' || !Array.isArray(UNITS)) return;
    const deleted = new Set(deletedUnitIds());
    readCustomUnits().forEach(u => {
      if(!u || !u.id || deleted.has(String(u.id))) return;
      if(u.customUnit) u.hiddenFromStudent = false;
      const existing = UNITS.find(x => x && x.id === u.id);
      if(existing) Object.assign(existing, u, {hiddenFromStudent:false, customUnit:true});
      else UNITS.push(u);
    });
  }
  function pickByTitleOrIndex(list, title, index){
    const rows = Array.isArray(list) ? list : [];
    const name = String(title || '').trim().toLowerCase();
    if(name){
      const exact = rows.find(item => String((item && (item.title || item[0])) || '').trim().toLowerCase() === name);
      if(exact) return exact;
    }
    return rows[index] || null;
  }
  function subtitleItemsFromContent(unit, saved){
    if(saved && Array.isArray(saved.subtitleItems) && saved.subtitleItems.length) return saved.subtitleItems;
    const lessonRows = Array.isArray(saved && saved.lessons) && saved.lessons.length ? saved.lessons : (Array.isArray(unit && unit.lessons) ? unit.lessons : []);
    const branches = branchesFromLessons(unit, saved);
    const visuals = visualItemsFromUnit(unit, saved);
    const audios = audioItemsFromUnit(unit, saved);
    const kines = kineQuestionsFromUnit(unit, saved);
    const count = Math.max(lessonRows.length, branches.length, visuals.length, audios.length, kines.length, 1);
    return Array.from({length: count}, (_, i) => {
      const lesson = lessonRows[i] || {};
      const branch = pickByTitleOrIndex(branches, lesson.title || lesson.officialFocus || lesson.title, i) || {};
      const visual = pickByTitleOrIndex(visuals, lesson.title || branch.title, i) || {};
      const audio = pickByTitleOrIndex(audios, lesson.title || branch.title, i) || {};
      const kine = kines[i] || {};
      const children = childTitles(branch.children).join('\n');
      return {
        title: (lesson.title || branch.title || `Sous-titre ${i+1}`).trim(),
        definition: lesson.fr || lesson.objective || branch.definition || '',
        example: branch.example || (Array.isArray(lesson.fill) ? String(lesson.fill[1] || lesson.fill[0] || '') : ''),
        children,
        visualTitle: visual.title || lesson.title || branch.title || `Image ${i+1}`,
        visualSrc: visual.src || (lesson.visual && lesson.visual.image) || '',
        visualDescription: visual.description || lesson.fr || lesson.objective || '',
        visualExample: visual.example || (lesson.visual && lesson.visual.example) || '',
        audioTitle: audio.title || lesson.title || branch.title || `Audio ${i+1}`,
        audioSrc: audio.src || '',
        audioText: audio.text || lesson.fr || lesson.objective || '',
        audioAr: audio.ar || lesson.ar || '',
        kineType: kine.type || 'Question directe',
        kineQuestion: kine.question || `Réalise une activité liée à « ${lesson.title || branch.title || `Sous-titre ${i+1}`} ».`,
        kineAnswer: kine.answer || '',
        kineCorrection: kine.correction || lesson.fr || lesson.objective || ''
      };
    });
  }
  function firstOrBlank(list){ return Array.isArray(list) && list.length ? list[0] : {}; }
  function normalizeVisualList(item){
    const list = Array.isArray(item && item.visualItems) ? item.visualItems : [];
    if(list.length) return list.map((x,i)=>({title:String((x&&x.title)||`Image ${i+1}`).trim(), src:String((x&&x.src)||'').trim(), description:String((x&&x.description)||'').trim(), example:String((x&&x.example)||'').trim(), action:String((x&&x.action)||'').trim(), remember:String((x&&x.remember)||'').trim()}));
    const single = {title:String((item&&item.visualTitle)||'').trim(), src:String((item&&item.visualSrc)||'').trim(), description:String((item&&item.visualDescription)||'').trim(), example:String((item&&item.visualExample)||'').trim(), action:String((item&&item.visualAction)||'').trim(), remember:String((item&&item.visualRemember)||'').trim()};
    return (single.title || single.src || single.description || single.example || single.action || single.remember) ? [single] : [];
  }
  function normalizeAudioList(item){
    const list = Array.isArray(item && item.audioItems) ? item.audioItems : [];
    // v207 : le style auditif peut contenir du texte ET un média audio/vidéo optionnel.
    // On garde uniquement une référence serveur courte (epi-media:audio:... / epi-media:video:...), jamais du base64.
    if(list.length) return list.map((x,i)=>({
      title:String((x&&x.title)||`Texte audio ${i+1}`).trim(),
      src:String((x&&x.src)||'').trim(),
      text:String((x&&x.text)||'').trim(),
      ar:String((x&&x.ar)||'').trim()
    }));
    const single = {
      title:String((item&&item.audioTitle)||'').trim(),
      src:String((item&&item.audioSrc)||'').trim(),
      text:String((item&&item.audioText)||'').trim(),
      ar:String((item&&item.audioAr)||'').trim()
    };
    return (single.title || single.src || single.text || single.ar) ? [single] : [];
  }
  function normalizeKineList(item){
    const list = Array.isArray(item && item.kineExercises) ? item.kineExercises : [];
    if(list.length) return list.map((x,i)=>({type:String((x&&x.type)||'Question directe').trim()||'Question directe', question:String((x&&x.question)||'').trim(), options:String((x&&x.options)||'').trim(), pairs:String((x&&x.pairs)||'').trim(), steps:String((x&&x.steps)||'').trim(), answer:String((x&&x.answer)||'').trim(), correction:String((x&&x.correction)||'').trim()}));
    const single = {type:String((item&&item.kineType)||'Question directe').trim()||'Question directe', question:String((item&&item.kineQuestion)||'').trim(), options:String((item&&item.kineOptions)||'').trim(), pairs:String((item&&item.kinePairs)||'').trim(), steps:String((item&&item.kineSteps)||'').trim(), answer:String((item&&item.kineAnswer)||'').trim(), correction:String((item&&item.kineCorrection)||'').trim()};
    return (single.question || single.answer || single.correction || single.options || single.pairs || single.steps) ? [single] : [];
  }
  function subtitleItemsToDerived(items, previousLessons){
    const prev = Array.isArray(previousLessons) ? previousLessons : [];
    const cleanItems = (Array.isArray(items) ? items : []).map((item, i) => {
      const visuals = normalizeVisualList(item);
      const audios = normalizeAudioList(item);
      const kines = normalizeKineList(item);
      const v0 = firstOrBlank(visuals), a0 = firstOrBlank(audios), k0 = firstOrBlank(kines);
      return {
        title: String((item && item.title) || `Sous-titre ${i+1}`).trim() || `Sous-titre ${i+1}`,
        definition: String((item && item.definition) || '').trim(),
        example: String((item && item.example) || '').trim(),
        children: linesToArray(item && item.children || ''),
        visualItems: visuals,
        audioItems: audios,
        kineExercises: kines,
        visualTitle: v0.title || '', visualSrc: v0.src || '', visualDescription: v0.description || '', visualExample: v0.example || '', visualAction: v0.action || '', visualRemember: v0.remember || '',
        audioTitle: a0.title || '', audioSrc: a0.src || '', audioText: a0.text || '', audioAr: a0.ar || '',
        kineType: k0.type || 'Question directe', kineQuestion: k0.question || '', kineOptions: k0.options || '', kinePairs: k0.pairs || '', kineSteps: k0.steps || '', kineAnswer: k0.answer || '', kineCorrection: k0.correction || ''
      };
    }).filter(x => x.title || x.definition || x.example || x.children.length || x.visualItems.length || x.audioItems.length || x.kineExercises.length);
    const lessons = cleanItems.map((item, i) => Object.assign({}, prev[i] || defaultLessonPayload(item.title), {
      title: item.title,
      officialFocus: item.title,
      objective: item.definition,
      fr: item.definition,
      ar: item.audioAr || ((prev[i] || {}).ar || ''),
      officialObjectives: childTitles(item.children),
      visual: Object.assign({}, ((prev[i] || {}).visual || {}), { image: item.visualSrc, example: item.visualExample }),
      fill: [item.example ? `Exemple : ${item.example}` : 'Exemple : ____', item.example || '', [item.example || 'Exemple 1', item.title, 'Exemple 3']],
      drag: [[item.title, item.definition || '']],
      order: Object.assign({}, ((prev[i] || {}).order || {}), { title: item.title, steps: childTitles(item.children).length ? childTitles(item.children).slice(0,4) : (((prev[i] || {}).order || {}).steps || []) })
    }));
    return {
      subtitleItems: cleanItems,
      lessons,
      visualItems: cleanItems.flatMap(item => item.visualItems.map(v => ({ title:v.title || item.title, src:v.src, description:v.description || item.definition, example:v.example, action:v.action || '', remember:v.remember || '' }))).filter(x => x.title || x.src || x.description || x.example || x.action || x.remember),
      audioItems: cleanItems.flatMap(item => item.audioItems.map(a => ({ title:a.title || item.title, src:a.src || '', text:a.text || item.definition, ar:a.ar }))).filter(x => x.title || x.src || x.text || x.ar),
      kineQuestions: cleanItems.flatMap(item => item.kineExercises.map(k => ({ type:k.type, question:k.question || `Réalise une activité liée à « ${item.title} ».`, options:k.options, pairs:k.pairs, steps:k.steps, answer:k.answer, correction:k.correction || item.definition }))).filter(x => x.question || x.answer || x.correction || x.options || x.pairs || x.steps),
      officialResources: cleanItems.map(item => item.title).filter(Boolean)
    };
  }

  function getBaseQuestions(unit){
    const lib = (window.EPI_CONTENT_LIBRARY && window.EPI_CONTENT_LIBRARY.v169) || {};
    let kind = 'default';
    if(window.EPI_DYNAMIC_CONTENT_V170 && typeof window.EPI_DYNAMIC_CONTENT_V170.kindOf === 'function'){
      kind = window.EPI_DYNAMIC_CONTENT_V170.kindOf(unit);
    }else{
      const t = [unit && unit.id, unit && unit.title, unit && unit.short, unit && unit.intro].filter(Boolean).join(' ').toLowerCase();
      if(t.includes('tableur') || t.includes('excel')) kind = 'tableur';
      else if(t.includes('logo') || t.includes('tortue')) kind = 'logo';
      else if(t.includes('système informatique') || t.includes('materiel') || t.includes('matériel')) kind = 'systeme';
      else if(t.includes('exploitation') || t.includes('bureau') || t.includes('fichier')) kind = 'os';
    }
    return ((lib[kind] || lib.default || {}).questions || []).map(q => ({task:q.task || '', expected:q.expected || ''}));
  }
  function getBaseScenario(unit){
    const lib = (window.EPI_CONTENT_LIBRARY && window.EPI_CONTENT_LIBRARY.v169) || {};
    let kind = 'default';
    if(window.EPI_DYNAMIC_CONTENT_V170 && typeof window.EPI_DYNAMIC_CONTENT_V170.kindOf === 'function') kind = window.EPI_DYNAMIC_CONTENT_V170.kindOf(unit);
    const base = (lib[kind] || lib.default || {});
    return (unit && unit.integration && unit.integration.scenario) || base.scenario || unit.intro || '';
  }
  function examplesFromContent(saved){
    const out = saved && saved.mindmapExamples && typeof saved.mindmapExamples === 'object' ? saved.mindmapExamples : {};
    return out || {};
  }
  function branchesFromLessons(unit, saved){
    if(saved && Array.isArray(saved.mindmapBranches) && saved.mindmapBranches.length) return saved.mindmapBranches;
    return [];
  }
  function sameBranchTitle(a, b){
    return cleanTitle(a).toLowerCase() === cleanTitle(b).toLowerCase();
  }
  function completeBranchesForSubtitles(branches, subtitles){
    const out = Array.isArray(branches) ? branches.slice() : [];
    (Array.isArray(subtitles) ? subtitles : []).forEach((sub, i) => {
      const title = String((sub && sub.title) || `Sous-titre ${i+1}`).trim();
      const exists = out.some((branch, index) => {
        const explicit = String((branch && (branch.subtitleTitle || branch.subtitle || branch.lessonTitle || branch.parentTitle)) || '').trim();
        const fallback = String((branch && branch.title) || '').trim() || String((subtitles[index] && subtitles[index].title) || '').trim();
        return sameBranchTitle(explicit || fallback, title);
      });
      if(exists) return;
      out.push({
        title,
        definition: String((sub && (sub.definition || sub.fr || sub.objective)) || '').trim(),
        example: String((sub && sub.example) || '').trim(),
        children: normalizeMindmapChildren(sub && sub.children),
        subtitleTitle: title
      });
    });
    return out;
  }
  function visualItemsFromUnit(unit, saved){
    if(saved && Array.isArray(saved.visualItems)) return saved.visualItems;
    const out = [];
    const lessons = Array.isArray(unit && unit.lessons) ? unit.lessons : [];
    lessons.forEach(lesson => {
      if(typeof visualMediaForLesson === 'function'){
        try{
          (visualMediaForLesson(lesson) || []).forEach(m => {
            if(!m || !m.src) return;
            out.push({
              title: m.title || lesson.title || 'Image',
              src: m.src,
              description: m.caption || m.alt || `Image liée à ${lesson.title || 'la leçon'}`,
              example: m.example || ''
            });
          });
        }catch(e){}
      }
      if(lesson && lesson.visual && lesson.visual.image){
        out.push({title: lesson.title || 'Image', src: lesson.visual.image, description: lesson.fr || lesson.objective || '', example: lesson.visual.example || ''});
      }
    });
    const seen = new Set();
    return out.filter(item => {
      const k = String(item.src || '') + '|' + String(item.title || '');
      if(seen.has(k)) return false;
      seen.add(k);
      return true;
    }).slice(0, 18);
  }
  function audioItemsFromUnit(unit, saved){
    if(saved && Array.isArray(saved.audioItems)) return saved.audioItems;
    const lessons = Array.isArray(unit && unit.lessons) ? unit.lessons : [];
    return lessons.map((lesson, index) => ({
      title: lesson.title || `Audio ${index + 1}`,
      text: lesson.fr || lesson.objective || lesson.officialFocus || '',
      ar: lesson.ar || '',
      src: ''
    })).filter(a => a.title || a.text).slice(0, 12);
  }
  const MEDIA_REF_PREFIX = 'epi-media:';
  const MEDIA_DB_NAME = 'epi_teacher_media_v201';
  const MEDIA_STORE_NAME = 'media';
  let mediaHydrateTimer = null;
  function isMediaRef(src){ return String(src || '').trim().startsWith(MEDIA_REF_PREFIX); }
  function mediaRefKind(src){
    const parts = String(src || '').trim().split(':');
    return parts.length >= 3 ? parts[1] : '';
  }
  function mediaRefId(src){
    const parts = String(src || '').trim().split(':');
    return parts.slice(2).join(':');
  }
  function openMediaDb(callback){
    if(!('indexedDB' in window)){ callback(null); return; }
    const req = indexedDB.open(MEDIA_DB_NAME, 1);
    req.onupgradeneeded = function(){
      const db = req.result;
      if(!db.objectStoreNames.contains(MEDIA_STORE_NAME)) db.createObjectStore(MEDIA_STORE_NAME, {keyPath:'id'});
    };
    req.onsuccess = function(){ callback(req.result); };
    req.onerror = function(){ callback(null); };
  }
  function saveMediaDataUrl(file, rawDataUrl, kind, callback){
    const safeKind = kind || ((file.type || '').startsWith('video/') ? 'video' : ((file.type || '').startsWith('audio/') ? 'audio' : 'image'));
    const dataType = ((String(rawDataUrl || '').match(/^data:([^;,]+)/) || [])[1]) || file.type || '';
    // Priorité au serveur Node.js : on garde seulement une référence courte dans les unités.
    if(window.EPI_SERVER_STORAGE && window.EPI_SERVER_STORAGE.enabled){
      fetch('/api/media', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body: JSON.stringify({kind:safeKind, type:dataType, name:file.name || 'media', data:rawDataUrl})
      }).then(r => r.ok ? r.json() : Promise.reject(new Error('HTTP ' + r.status)))
        .then(data => {
          if(data && data.id) callback(`${MEDIA_REF_PREFIX}${safeKind}:${data.id}`);
          else callback(rawDataUrl);
        })
        .catch(err => {
          console.error('Sauvegarde média serveur impossible, fallback IndexedDB', err);
          saveMediaDataUrlIndexedDb(file, rawDataUrl, safeKind, callback);
        });
      return;
    }
    saveMediaDataUrlIndexedDb(file, rawDataUrl, safeKind, callback);
  }
  function saveMediaFileDirect(file, kind, callback){
    const safeKind = kind || ((file.type || '').startsWith('video/') ? 'video' : ((file.type || '').startsWith('audio/') ? 'audio' : 'media'));
    const maxVideo = 500 * 1024 * 1024; // 500 Mo : limite technique locale pour éviter le crash navigateur/serveur.
    const maxAudio = 80 * 1024 * 1024;
    const name = String(file && file.name || 'media');
    const type = String(file && file.type || '').toLowerCase();
    if(safeKind === 'video'){
      const okVideo = type.startsWith('video/') || /\.(mp4|webm|ogv|ogg|mov)$/i.test(name);
      if(!okVideo){ alert('Format vidéo non accepté. Utilise de préférence MP4 ou WebM.'); callback(''); return; }
      if(file.size > maxVideo){ alert('Vidéo trop lourde : limite conseillée 500 Mo. Compresse la vidéo ou utilise une vidéo plus courte.'); callback(''); return; }
    }
    if(safeKind === 'audio' && file.size > maxAudio){ alert('Audio trop lourd : limite conseillée 80 Mo.'); callback(''); return; }
    if(window.EPI_SERVER_STORAGE && window.EPI_SERVER_STORAGE.enabled && window.fetch){
      fetch('/api/media-file?kind=' + encodeURIComponent(safeKind), {
        method:'POST',
        headers:{
          'Content-Type': file.type || 'application/octet-stream',
          'X-File-Name': encodeURIComponent(file.name || 'media'),
          'X-Media-Kind': safeKind
        },
        body:file
      }).then(r => r.ok ? r.json() : Promise.reject(new Error('HTTP ' + r.status)))
        .then(data => {
          if(data && data.id) callback(`${MEDIA_REF_PREFIX}${safeKind}:${data.id}`);
          else { alert('Le serveur n’a pas renvoyé de référence média.'); callback(''); }
        })
        .catch(err => {
          console.error('Envoi média direct impossible', err);
          alert('Import du média impossible. Ouvre l’application avec le serveur local puis réessaie.');
          callback('');
        });
      return;
    }
    alert('Pour ajouter une vidéo ou un audio, ouvre l’application avec le serveur local puis réessaie.');
    callback('');
  }
  function readFileAsOptimizedDataUrlFallback(file, callback){
    const reader = new FileReader();
    reader.onload = function(){ callback(reader.result); };
    reader.readAsDataURL(file);
  }
  function saveMediaDataUrlIndexedDb(file, rawDataUrl, kind, callback){
    const safeKind = kind || ((file.type || '').startsWith('video/') ? 'video' : ((file.type || '').startsWith('audio/') ? 'audio' : 'image'));
    const id = `${safeKind}_${Date.now()}_${Math.random().toString(16).slice(2)}`;
    openMediaDb(function(db){
      if(!db){ callback(rawDataUrl); return; }
      const tx = db.transaction(MEDIA_STORE_NAME, 'readwrite');
      const store = tx.objectStore(MEDIA_STORE_NAME);
      const item = {id, kind:safeKind, type:file.type || '', name:file.name || 'media', data:rawDataUrl, savedAt:new Date().toISOString()};
      const req = store.put(item);
      req.onsuccess = function(){ callback(`${MEDIA_REF_PREFIX}${safeKind}:${id}`); };
      req.onerror = function(){ callback(rawDataUrl); };
    });
  }
  function loadMediaRef(src, callback){
    const id = mediaRefId(src);
    if(!id){ callback(''); return; }
    // Nouveau : les médias enregistrés sur le serveur sont servis par URL.
    if(window.EPI_SERVER_STORAGE && window.EPI_SERVER_STORAGE.enabled){
      callback('/api/media/' + encodeURIComponent(id));
      return;
    }
    openMediaDb(function(db){
      if(!db){ callback(''); return; }
      const tx = db.transaction(MEDIA_STORE_NAME, 'readonly');
      const req = tx.objectStore(MEDIA_STORE_NAME).get(id);
      req.onsuccess = function(){ callback((req.result && req.result.data) || ''); };
      req.onerror = function(){ callback(''); };
    });
  }
  function hydrateMediaRefs(root){
    const scope = root && root.querySelectorAll ? root : document;
    $all('[data-epi-media-src]', scope).forEach(el => {
      const ref = el.getAttribute('data-epi-media-src') || '';
      if(!isMediaRef(ref) || el.dataset.epiMediaHydrated === '1') return;
      el.dataset.epiMediaHydrated = '1';
      loadMediaRef(ref, function(data){
        if(data){ el.setAttribute('src', data); try{ el.load && el.load(); }catch(e){} }
        else if(el.tagName === 'IMG'){ el.replaceWith(document.createTextNode('Média introuvable. Réimporte le fichier.')); }
      });
    });
  }
  function scheduleMediaHydrate(){
    clearTimeout(mediaHydrateTimer);
    mediaHydrateTimer = setTimeout(function(){ hydrateMediaRefs(document); }, 60);
  }
  function isVideoSource(src){
    const value = String(src || '').trim();
    return mediaRefKind(value) === 'video' || /^data:video\//i.test(value) || /\.(mp4|webm|ogg|mov)(\?|#|$)/i.test(value);
  }
  function isAudioSource(src){
    const value = String(src || '').trim();
    return mediaRefKind(value) === 'audio' || /^data:audio\//i.test(value) || /\.(mp3|wav|ogg|m4a|aac)(\?|#|$)/i.test(value);
  }
  function imagePreviewTag(src, title){
    const value = String(src || '').trim();
    if(!value) return '<span>Aperçu image/vidéo après import</span>';
    if(isVideoSource(value)){
      if(isMediaRef(value)){
        scheduleMediaHydrate();
        return `<video class="v205-visual-video" controls preload="metadata" data-epi-media-src="${attr(value)}" title="${attr(title || 'Vidéo')}"></video>`;
      }
      return `<video class="v205-visual-video" controls preload="metadata" src="${attr(value)}" title="${attr(title || 'Vidéo')}"></video>`;
    }
    if(isMediaRef(value)) return `<img loading="lazy" data-epi-media-src="${attr(value)}" alt="${attr(title || 'Image')}">`;
    return `<img loading="lazy" src="${attr(value)}" alt="${attr(title || 'Image')}">`;
  }
  function mediaControlTag(src, title){
    const value = String(src || '').trim();
    if(!value) return '';
    const tag = isVideoSource(value) ? 'video' : 'audio';
    const label = title || (tag === 'video' ? 'Vidéo' : 'Audio');
    if(isMediaRef(value)){
      scheduleMediaHydrate();
      return tag === 'video'
        ? `<video class="v194-audio-video" controls data-epi-media-src="${attr(value)}" title="${attr(label)}"></video>`
        : `<audio controls data-epi-media-src="${attr(value)}" title="${attr(label)}"></audio>`;
    }
    return tag === 'video'
      ? `<video class="v194-audio-video" controls src="${attr(value)}" title="${attr(label)}"></video>`
      : `<audio controls src="${attr(value)}" title="${attr(label)}"></audio>`;
  }

  function kineQuestionsFromUnit(unit, saved){
    if(saved && Array.isArray(saved.kineQuestions)) return saved.kineQuestions;
    const out = [];
    const lessons = Array.isArray(unit && unit.lessons) ? unit.lessons : [];
    lessons.forEach((lesson, index) => {
      if(Array.isArray(lesson.fill) && lesson.fill[0]){
        out.push({type:'Compléter', question: lesson.fill[0], answer: lesson.fill[1] || '', correction: lesson.fill[1] || ''});
      }else if(lesson.title){
        out.push({type:'Question directe', question:`Réalise une activité pratique liée à « ${cleanTitle(lesson.title)} ».`, answer:'', correction: lesson.fr || lesson.objective || ''});
      }
      if(Array.isArray(lesson.drag)){
        lesson.drag.slice(0,2).forEach(pair => {
          if(Array.isArray(pair) && pair[0]) out.push({type:'Association', question:`Associe « ${pair[0]} » à sa bonne définition.`, answer: pair[1] || '', correction: pair[1] || ''});
        });
      }
    });
    return out.slice(0, 14);
  }
  function integrationTasksFromUnit(unit, saved){
    if(saved && Array.isArray(saved.integrationTasks)) return saved.integrationTasks;
    if(saved && Array.isArray(saved.questions)) return saved.questions.map(q => ({task:q.task || q.question || '', expected:q.expected || q.correction || ''}));
    return getBaseQuestions(unit);
  }
  function normalizeExamQuestions(list){
    return (Array.isArray(list) ? list : []).map((q, i) => {
      if(Array.isArray(q)){
        const options = Array.isArray(q[1]) ? q[1].map(x => String(x || '')) : [];
        return [String(q[0] || `Question ${i + 1}`), options, Number.isFinite(Number(q[2])) ? Number(q[2]) : 0];
      }
      const options = Array.isArray(q && q.options) ? q.options.map(x => String(x || '')) : [q && q.option1, q && q.option2, q && q.option3, q && q.option4].filter(x => x != null).map(x => String(x || ''));
      const correct = Number.isFinite(Number(q && q.correct)) ? Number(q.correct) : Number.isFinite(Number(q && q.correctIndex)) ? Number(q.correctIndex) : 0;
      return [String((q && (q.question || q.title)) || `Question ${i + 1}`), options, correct];
    }).filter(q => q[0] || (q[1] && q[1].length));
  }
  function examQuestionsFromUnit(unit, saved){
    if(saved && Array.isArray(saved.examQuestions)) return normalizeExamQuestions(saved.examQuestions);
    if(saved && Array.isArray(saved.exam)) return normalizeExamQuestions(saved.exam);
    return normalizeExamQuestions(unit && unit.exam);
  }
  function fullContent(unit){
    const saved = readJson(keyFor(unit), {}) || {};
    const subtitleItems = subtitleItemsFromContent(unit, saved);
    const mindmapBranches = completeBranchesForSubtitles(branchesFromLessons(unit, saved), subtitleItems);
    return Object.assign({}, saved, {
      title: saved.title || (unit && unit.title) || '',
      intro: typeof saved.intro === 'string' ? saved.intro : ((unit && unit.intro) || ''),
      short: typeof saved.short === 'string' ? saved.short : ((unit && unit.short) || ''),
      competence: typeof saved.competence === 'string' ? saved.competence : ((unit && unit.competence) || ''),
      duration: typeof saved.duration === 'string' ? saved.duration : ((unit && unit.duration) || ''),
      schoolYear: saved.schoolYear || (unit && unit.schoolYear) || '1ac',
      officialResources: Array.isArray(saved.officialResources) ? saved.officialResources : (Array.isArray(unit && unit.officialResources) ? unit.officialResources : []),
      dictionary: Array.isArray(saved.dictionary) ? saved.dictionary : (Array.isArray(unit && unit.dictionary) ? unit.dictionary : []),
      scenario: saved.scenario || saved.integrationScenario || getBaseScenario(unit),
      mindmapBranches,
      visualItems: visualItemsFromUnit(unit, saved),
      audioItems: audioItemsFromUnit(unit, saved),
      kineQuestions: kineQuestionsFromUnit(unit, saved),
      integrationTasks: integrationTasksFromUnit(unit, saved),
      examQuestions: examQuestionsFromUnit(unit, saved),
      subtitleItems
    });
  }
  function branchesToLessons(branches, previousLessons){
    const prev = Array.isArray(previousLessons) ? previousLessons : [];
    return (branches || []).map((b, i) => Object.assign({}, prev[i] || {}, {
      title: b.title || `Branche ${i+1}`,
      officialFocus: b.title || `Branche ${i+1}`,
      objective: b.definition || '',
      fr: b.definition || '',
      officialObjectives: childTitles(b.children),
      fill: [b.example ? `Exemple : ${b.example}` : `La notion principale est ____.`, b.title || '', [b.title || '', 'Autre notion', 'Exemple']],
      drag: [[b.title || `Branche ${i+1}`, b.definition || '']]
    }));
  }
  function saveContent(unit, content){
    const existing = readJson(keyFor(unit), {}) || {};
    const merged = Object.assign({}, existing, content);
    if(Array.isArray(merged.subtitleItems)){
      Object.assign(merged, subtitleItemsToDerived(merged.subtitleItems, Array.isArray(unit && unit.lessons) ? unit.lessons : []));
    }
    if(Array.isArray(merged.mindmapBranches)){
      merged.mindmapExamples = {};
      merged.mindmapBranches.forEach(b => { if(b && b.title) merged.mindmapExamples[b.title] = b.example || ''; });
      if(!Array.isArray(merged.subtitleItems) || !merged.subtitleItems.length){
        merged.lessons = branchesToLessons(merged.mindmapBranches, Array.isArray(unit && unit.lessons) ? unit.lessons : []);
      }
    }
    if(Array.isArray(merged.integrationTasks)){
      merged.questions = merged.integrationTasks.map(t => ({task:t.task || '', expected:t.expected || ''}));
    }
    if(Array.isArray(merged.examQuestions)){
      merged.examQuestions = normalizeExamQuestions(merged.examQuestions);
      merged.exam = merged.examQuestions;
    }
    if(merged.scenario) merged.integrationScenario = merged.scenario;
    const ok = writeJson(keyFor(unit), merged);
    if(!ok) return false;
    applyContentToUnits();
    if(unit && unit.customUnit) persistCustomUnits();
    return true;
  }
  function applyContentToUnits(){
    // L’espace élève garde le contenu original pour les unités existantes.
    // Pour les unités ajoutées par le professeur, le contenu saisi construit réellement l’unité.
    units().forEach(unit => {
      const saved = readJson(keyFor(unit), null);
      if(saved && typeof saved === 'object') unit._v172TeacherContent = saved;
      if(unit && unit.customUnit){
        unit.hiddenFromStudent = false;
        if(saved && typeof saved === 'object'){
          if(saved.title) unit.title = saved.title;
          if(typeof saved.short === 'string') unit.short = saved.short;
          if(typeof saved.intro === 'string') unit.intro = saved.intro;
          if(typeof saved.competence === 'string') unit.competence = saved.competence;
          if(typeof saved.duration === 'string') unit.duration = saved.duration;
          if(typeof saved.schoolYear === 'string') unit.schoolYear = saved.schoolYear;
          if(Array.isArray(saved.officialResources)) unit.officialResources = saved.officialResources;
          if(Array.isArray(saved.dictionary)) unit.dictionary = saved.dictionary;
          if(Array.isArray(saved.lessons)) unit.lessons = saved.lessons.map(x => Object.assign({}, x));
          if(Array.isArray(saved.examQuestions)) unit.exam = normalizeExamQuestions(saved.examQuestions);
          else if(Array.isArray(saved.exam)) unit.exam = normalizeExamQuestions(saved.exam);
          if(saved.scenario || saved.integrationScenario || Array.isArray(saved.integrationTasks)){
            unit.integration = Object.assign({}, unit.integration || {}, {
              title: (unit.integration && unit.integration.title) || 'Situation d’intégration',
              scenario: saved.scenario || saved.integrationScenario || (unit.integration && unit.integration.scenario) || '',
              tasks: Array.isArray(saved.integrationTasks) ? saved.integrationTasks.map(t => t.task || t.question || '').filter(Boolean) : ((unit.integration && unit.integration.tasks) || []),
              questions: Array.isArray(saved.integrationTasks) ? saved.integrationTasks.map(t => [t.task || t.question || '', t.expected || t.correction || '']) : ((unit.integration && unit.integration.questions) || [])
            });
          }
        }
      }
    });
    persistCustomUnits();
  }

  function rowsResults(){
    if(typeof getAllTeacherRows === 'function') return getAllTeacherRows();
    if(typeof getResults === 'function') return getResults().map(r=>({
      nom:r.nom || '', prenom:r.prenom || '', unite:r.unite || '', note:r.note_finale ?? r.note ?? '', bonus:Number(r.bonus)>0 || r.bonus === 'Avec bonus' || Number(r.note_finale ?? r.note ?? r.score ?? r.noteFinale ?? 0) > 10 ? 'Avec bonus' : 'Sans bonus', date:r.date || r.createdAt || ''
    }));
    return [];
  }
  function teacherShell(content){
    if(typeof v87TeacherShell === 'function') return v87TeacherShell(content);
    return `<main class="v87-teacher-shell">${content}</main>`;
  }
  function resultsTable(){
    const rows = rowsResults();
    return `<section class="v172-card v172-results">
      <div class="v172-card-head"><div><span class="mini-pill">Résultats</span><h2>Tableau des notes</h2></div><button type="button" class="btn secondary" data-v87-export="1">Exporter les notes</button></div>
      <div class="v172-table-wrap"><table class="v91-results-table v172-results-table"><thead><tr><th>N°</th><th>Nom</th><th>Prénom</th><th>Unité</th><th>Note /20</th><th>Bonus</th><th>Date</th></tr></thead><tbody>
      ${rows.length ? rows.map((r,i)=>`<tr><td>${i+1}</td><td>${html(r.nom)}</td><td>${html(r.prenom)}</td><td>${html(r.unite)}</td><td class="v91-note-cell">${html(r.note)}</td><td><span class="v91-bonus ${r.bonus === 'Avec bonus' ? 'ok' : ''}">${html(r.bonus)}</span></td><td>${html(String(r.date || '').slice(0,10))}</td></tr>`).join('') : `<tr><td colspan="7" class="v91-empty">Aucune note enregistrée pour le moment.</td></tr>`}
      </tbody></table></div>
    </section>`;
  }

  function selectUnitHtml(id){
    return `<label class="v172-field v172-unit-select"><span>Choisir l’unité à modifier</span><select id="v172UnitSelect">${units().map(u => `<option value="${attr(u.id)}" ${u.id === id ? 'selected' : ''}>${html(u.title)}</option>`).join('')}</select></label>`;
  }
  function tabsHtml(tab){
    const tabs = [
      ['general','1. Général'],
      ['dictionary','2. Dictionnaire'],
      ['subtitles','3. Sous-titres'],
      ['mindmap','4. Carte mentale'],
      ['visual','5. Visuel'],
      ['audio','6. Auditif'],
      ['kine','7. Kinesthésique'],
      ['integration','8. Intégration'],
      ['exam','9. Contrôle final'],
      ['json','JSON avancé']
    ];
    return `<div class="v172-tabs">${tabs.map(([id,label]) => `<button type="button" class="v172-tab ${id===tab?'active':''}" data-v172-tab="${id}">${label}</button>`).join('')}</div>`;
  }
  function dynamicPreview(unit){
    const c = fullContent(unit);
    const firstBranch = c.mindmapBranches[0] || {title:'Carte mentale', definition:'Ajoutez une branche.', example:''};
    const firstQuestion = c.integrationTasks[0] || {task:'Ajoutez une tâche pratique.', expected:''};
    const firstDict = c.dictionary[0] || ['Ajoutez un mot', ''];
    const firstExam = c.examQuestions[0] || ['Ajoutez une question de contrôle final', [], 0];
    return `<section class="v172-card v172-preview">
      <div class="v172-card-head"><div><span class="mini-pill">Aperçu professeur</span><h2>Prévisualisation rapide</h2><p>Ce bloc reste dans l’espace enseignant. Il montre le contenu préparé pour l’unité sélectionnée.</p></div></div>
      <div class="v172-preview-grid">
        <article><strong>Carte mentale</strong><span>${c.mindmapBranches.length} branche(s)</span><p>${html(firstBranch.title)} — ${html(firstBranch.definition)}</p></article>
        <article><strong>Style visuel</strong><span>${c.visualItems.length} média(s)</span><p>${c.visualItems[0] ? html(c.visualItems[0].title) : 'Aucun média personnalisé.'}</p></article>
        <article><strong>Style auditif</strong><span>${c.audioItems.length} texte(s) audio</span><p>${c.audioItems[0] ? html(c.audioItems[0].title) : 'Aucun texte audio personnalisé.'}</p></article>
        <article><strong>Kinesthésique</strong><span>${c.kineQuestions.length} question(s)</span><p>${c.kineQuestions[0] ? html(c.kineQuestions[0].question) : 'Aucune question personnalisée.'}</p></article>
        <article><strong>Dictionnaire</strong><span>${c.dictionary.length} mot(s)</span><p>${html(firstDict[0])} — ${html(firstDict[1] || 'Traduction à compléter')}</p></article>
        <article><strong>Contrôle final</strong><span>${c.examQuestions.length} question(s)</span><p>${html(firstExam[0])}</p></article>
      </div>
      <article class="v172-scenario-preview"><strong>Situation réelle :</strong><p>${html(c.scenario)}</p><strong>Première tâche :</strong><p>${html(firstQuestion.task)}</p></article>
    </section>`;
  }
  function unitStats(unit){
    const c = fullContent(unit);
    return {
      branches: (c.mindmapBranches || []).length,
      images: (c.visualItems || []).length,
      audios: (c.audioItems || []).length,
      questions: (c.kineQuestions || []).length,
      tasks: (c.integrationTasks || []).length,
      dictionary: (c.dictionary || []).length,
      exam: (c.examQuestions || []).length
    };
  }
  function allUnitsDashboard(activeId){
    const cards = units().map((unit, index) => {
      const st = unitStats(unit);
      const active = unit.id === activeId;
      return `<article class="v173-unit-card ${active ? 'active' : ''}">
        <div class="v173-unit-number">U${index + 1}</div>
        <div class="v173-unit-body">
          <div class="v175-unit-title-row"><h3>${html(cleanTitle(unit.title || `Unité ${index + 1}`))}</h3>${unit.customUnit ? '<span class="mini-pill">Personnalisée</span>' : ''}</div>
          <p>${html(unit.short || unit.intro || 'Unité du programme.')}</p>
          <div class="v173-unit-stats">
            <span>${st.branches} branche(s)</span>
            <span>${st.images} image(s)</span>
            <span>${st.audios} audio(s)</span>
            <span>${st.questions} question(s)</span>
            <span>${st.dictionary} mot(s)</span>
            <span>${st.exam} contrôle</span>
            <span>${st.tasks} tâche(s)</span>
          </div>
          <button type="button" class="btn small ${active ? '' : 'secondary'}" data-v172-unit-card="${attr(unit.id)}">${active ? 'Unité ouverte' : 'Modifier cette unité'}</button>
        </div>
      </article>`;
    }).join('');
    const unitForm = showAddUnitForm ? `<article class="v175-unit-creator"><div class="v172-card-head"><div><span class="mini-pill">Nouvelle unité</span><h3>Créer une unité personnalisée</h3><p>Ajoute une nouvelle unité avec un titre, un résumé et un premier sous-titre modifiable.</p></div></div><div class="v172-grid-2"><label class="v172-field"><span>Titre de l’unité</span><input id="v175NewUnitTitle" placeholder="Ex. Réseau informatique"></label><label class="v172-field"><span>Résumé court</span><input id="v175NewUnitShort" placeholder="Ex. Réseau, sécurité, partage"></label><label class="v172-field"><span>Volume horaire</span><input id="v175NewUnitDuration" value="6 h"></label><label class="v172-field"><span>Compétence</span><input id="v175NewUnitCompetence" placeholder="Ex. C13"></label></div><label class="v172-field"><span>Description générale</span><textarea id="v175NewUnitIntro" rows="4" placeholder="Décris brièvement l’unité..."></textarea></label><div class="v172-actions"><button type="button" class="btn" data-v175-create-unit>Créer l’unité</button><button type="button" class="btn secondary" data-v175-show-unit-form>Annuler</button></div></article>` : '';
    return `<section class="v172-card v173-all-units-card">
      <div class="v172-card-head"><div><span class="mini-pill">Gestion des unités</span><h2>Gestion professionnelle des unités</h2><p>Cette partie rassemble toutes les unités. Tu peux maintenant ajouter une unité personnalisée et ouvrir rapidement chaque contenu à modifier.</p></div><button type="button" class="btn secondary" data-v175-show-unit-form>${showAddUnitForm ? 'Fermer le formulaire' : '+ Ajouter une unité'}</button></div>
      ${unitForm}
      <div class="v173-units-grid">${cards}</div>
    </section>`;
  }
  function helpBox(text){ return `<p class="v172-help">${html(text)}</p>`; }

  function generalEditor(unit, c){
    return `<div class="v172-editor-body" data-v172-editor="general">
      ${helpBox('Cette section modifie les informations générales de l’unité.')}
      <div class="v172-grid-2">
        <label class="v172-field"><span>Titre de l’unité</span><input id="v172Title" value="${attr(c.title)}"></label>
        <label class="v172-field"><span>Résumé court</span><input id="v172Short" value="${attr(c.short)}"></label>
        <label class="v172-field"><span>Compétence</span><input id="v172Competence" value="${attr(c.competence)}"></label>
        <label class="v172-field"><span>Volume horaire</span><input id="v172Duration" value="${attr(c.duration)}"></label>
      </div>
      <label class="v172-field"><span>Introduction / description</span><textarea id="v172Intro" rows="4">${html(c.intro)}</textarea></label>
      <label class="v172-field"><span>Ressources / titres officiels — une ligne par élément</span><textarea id="v172Resources" rows="7">${html(arrayToLines(c.officialResources))}</textarea></label>
    </div>`;
  }
  function dictionaryRow(pair, i){
    const term = Array.isArray(pair) ? pair[0] : (pair && (pair.term || pair.word)) || '';
    const translation = Array.isArray(pair) ? pair[1] : (pair && (pair.translation || pair.meaning || pair.ar)) || '';
    return `<article class="v172-row v174-dictionary-row" data-v172-row="dictionary">
      <div class="v172-row-head"><strong>Mot ${i+1}</strong><button type="button" class="v172-delete" data-v172-delete-row>Supprimer</button></div>
      <div class="v172-grid-2">
        <label class="v172-field"><span>Terme / notion en français</span><input data-field="term" value="${attr(term)}" placeholder="Ex. Classeur"></label>
        <label class="v172-field"><span>Traduction / signification</span><input data-field="translation" value="${attr(translation)}" placeholder="Ex. مصنف"></label>
      </div>
    </article>`;
  }
  function dictionaryEditor(unit, c){
    return `<div class="v172-editor-body" data-v172-editor="dictionary">
      ${helpBox('Dictionnaire de l’unité : ajoute, modifie ou supprime les mots qui apparaissent dans le jeu dictionnaire de l’espace élève.')}
      <div class="v172-list" id="v172DictionaryRows">${(c.dictionary || []).map(dictionaryRow).join('')}</div>
      <button type="button" class="btn secondary" data-v172-add="dictionary">+ Ajouter un mot</button>
    </div>`;
  }

  function subtitleNav(items){
    return `<div class="v190-subtitle-select-row"><label class="v172-field"><span>Liste déroulante des sous-titres</span><select id="v190SubtitleSelect">${items.map((item, index) => `<option value="${index}" ${index===activeSubtitleIndex?'selected':''}>${html(item.title || `Sous-titre ${index+1}`)}</option>`).join('')}</select></label><button type="button" class="btn secondary" data-v190-open-subtitle>Ouvrir / Modifier</button><button type="button" class="btn secondary" data-v175-add-subtitle>+ Ajouter un sous-titre</button></div>`;
  }
  function childTextareaValue(value){
    return Array.isArray(value) ? value.join('\n') : String(value || '');
  }
  function mindmapChildrenEditor(value, fieldMode){
    const fieldAttr = fieldMode === 'add' ? 'data-add-field="children"' : 'id="v175SubtitleChildren"';
    return `<details class="v190-dropdown v192-mindmap-prof" open>
      <summary>Carte mentale — fils du sous-titre</summary>
      <div class="v192-mindmap-prof-box">
        <div><span class="mini-pill">Carte mentale</span><h4>Fils / sous-branches</h4><p>Ajoute les fils qui apparaîtront autour du nœud de la carte mentale.</p></div>
        <label class="v172-field"><span>Fils — une ligne par fils</span><textarea ${fieldAttr} rows="4" placeholder="Fils 1&#10;Fils 2&#10;Fils 3">${html(childTextareaValue(value))}</textarea></label>
        <button type="button" class="btn secondary v192-add-child-btn" data-v192-add-child-line>+ Ajouter un fils</button>
      </div>
    </details>`;
  }
  function visualMultiRow(item, i){
    const data = item || {};
    const isVid = isVideoSource(data.src || '');
    return `<article class="v190-repeat-row" data-v190-visual-row>
      <div class="v172-row-head"><strong>Média visuel ${i+1}</strong><button type="button" class="v172-delete" data-v190-remove-row>Supprimer</button></div>
      <label class="v172-field"><span>Titre du média</span><input data-field="title" value="${attr(data.title || '')}" placeholder="Titre de l’image ou de la vidéo"></label>
      <input type="hidden" data-field="src" value="${attr(data.src || '')}">
      <div class="v192-image-preview v205-media-preview">${imagePreviewTag(data.src, data.title || (isVid ? 'Vidéo' : 'Image'))}</div>
      <div class="v186-browse-wrap"><span class="v186-browse-title">Image ou vidéo depuis l’ordinateur</span><label class="v186-browse-btn">Parcourir média<input type="file" accept="image/*,video/*,.mp4,.webm,.mov,.m4v,.ogv,.jpg,.jpeg,.png,.webp,.gif" data-v181-add-file="src"></label><small data-v190-file-name>${data.src ? (isVid ? 'Vidéo choisie' : 'Image choisie') : 'Aucun fichier choisi'}</small></div>
      <p class="v205-video-help">Formats conseillés : MP4 ou WebM. Le fichier sera enregistré avec l’unité.</p>
      <label class="v172-field"><span>Définition / légende visuelle</span><textarea data-field="description" rows="3">${html(data.description || '')}</textarea></label>
      <label class="v172-field"><span>Exemple visuel</span><textarea data-field="example" rows="3" placeholder="Exemple à lire quand l’élève clique sur l’image ou la vidéo">${html(data.example || '')}</textarea></label>
      <label class="v172-field"><span>Action à réaliser</span><textarea data-field="action" rows="2" placeholder="Exemple : Observe l’image puis refais la même manipulation.">${html(data.action || '')}</textarea></label>
      <label class="v172-field"><span>À retenir</span><textarea data-field="remember" rows="2" placeholder="Idée importante que l’élève doit mémoriser.">${html(data.remember || '')}</textarea></label>
    </article>`;
  }
  function audioMultiRow(item, i){
    const data = item || {};
    return `<article class="v190-repeat-row v207-audio-media-row" data-v190-audio-row>
      <div class="v172-row-head"><strong>Audio / vidéo ${i+1}</strong><button type="button" class="v172-delete" data-v190-remove-row>Supprimer</button></div>
      <label class="v172-field"><span>Titre de la narration</span><input data-field="title" value="${attr(data.title || '')}" placeholder="Ex. Définition de la notion"></label>
      <input type="hidden" data-field="src" value="${attr(data.src || '')}">
      <div class="v194-media-preview v207-audio-media-preview">${data.src ? mediaControlTag(data.src, data.title || 'Média auditif') : '<span>Aucun fichier audio/vidéo choisi</span>'}</div>
      <div class="v186-browse-wrap"><span class="v186-browse-title">Importer audio, vidéo ou image depuis l’ordinateur</span><label class="v186-browse-btn">Parcourir média<input type="file" accept="audio/*,video/*,image/*,.mp3,.wav,.m4a,.aac,.ogg,.mp4,.webm,.mov,.m4v,.ogv,.jpg,.jpeg,.png,.webp,.gif" data-v181-add-file="src"></label><small data-v190-file-name>${data.src ? 'Média choisi' : 'Aucun fichier choisi'}</small></div>
      <div class="v204-audio-note">Tu peux écrire un texte à lire automatiquement ou ajouter un fichier média. Le fichier reste sur le serveur.</div>
      <label class="v172-field"><span>Texte à écouter en français</span><textarea data-field="text" rows="5" placeholder="Écris ici le texte qui sera lu à haute voix...">${html(data.text || '')}</textarea></label>
      <label class="v172-field"><span>Texte à écouter en arabe</span><textarea data-field="ar" rows="4" placeholder="اكتب هنا النص الذي سيُقرأ صوتيا...">${html(data.ar || '')}</textarea></label>
    </article>`;
  }
  function kineMultiRow(item, i){
    const data = item || {};
    const type = data.type || 'Question directe';
    return `<article class="v190-repeat-row v190-kine-row" data-v190-kine-row>
      <div class="v172-row-head"><strong>Exercice ${i+1}</strong><button type="button" class="v172-delete" data-v190-remove-row>Supprimer</button></div>
      <div class="v172-grid-2"><label class="v172-field"><span>Type d’exercice</span><select data-field="type"><option ${type==='Question directe'?'selected':''}>Question directe</option><option ${type==='QCM'?'selected':''}>QCM</option><option ${type==='Compléter'?'selected':''}>Compléter</option><option ${type==='Association'?'selected':''}>Association</option><option ${type==='Ordre logique'?'selected':''}>Ordre logique</option><option ${type==='Tâche pratique'?'selected':''}>Tâche pratique</option></select></label><label class="v172-field"><span>Réponse courte attendue</span><input data-field="answer" value="${attr(data.answer || '')}"></label></div>
      <label class="v172-field"><span>Question / consigne</span><textarea data-field="question" rows="3" placeholder="Question directe, phrase à compléter ou consigne pratique...">${html(data.question || '')}</textarea></label>
      <label class="v172-field"><span>Choix QCM — un choix par ligne</span><textarea data-field="options" rows="3" placeholder="Choix 1&#10;Choix 2&#10;Choix 3">${html(data.options || '')}</textarea></label>
      <label class="v172-field"><span>Association — format : notion || définition</span><textarea data-field="pairs" rows="3" placeholder="Mot 1 || Définition 1&#10;Mot 2 || Définition 2">${html(data.pairs || '')}</textarea></label>
      <label class="v172-field"><span>Ordre logique — une étape par ligne</span><textarea data-field="steps" rows="3" placeholder="Étape 1&#10;Étape 2&#10;Étape 3">${html(data.steps || '')}</textarea></label>
      <label class="v172-field"><span>Correction / production attendue</span><textarea data-field="correction" rows="3">${html(data.correction || '')}</textarea></label>
    </article>`;
  }
  function subtitleRow(item, i){
    const visuals = normalizeVisualList(item);
    const audios = normalizeAudioList(item);
    const kines = normalizeKineList(item);
    return `<article class="v172-row v175-subtitle-row v190-subtitle-editor" data-v175-subtitle-editor>
      <div class="v172-row-head"><strong>Sous-titre ${i+1} : ${html(item.title || '')}</strong><button type="button" class="v172-delete" data-v175-delete-subtitle>Supprimer ce sous-titre</button></div>
      <label class="v172-field"><span>Nom du sous-titre</span><input id="v175SubtitleTitle" value="${attr(item.title)}"></label>
      <label class="v172-field"><span>Contenu / définition</span><textarea id="v175SubtitleDefinition" rows="4">${html(item.definition)}</textarea></label>
      <details class="v190-dropdown" open><summary>Style visuel — images ou vidéos</summary><div class="v190-repeat-list" data-v190-visual-list>${(visuals.length?visuals:[{}]).map(visualMultiRow).join('')}</div><button type="button" class="btn secondary" data-v190-add-visual>+ Ajouter une image / vidéo</button></details>
      <details class="v190-dropdown"><summary>Style auditif — texte lu automatiquement</summary><div class="v190-repeat-list" data-v190-audio-list>${(audios.length?audios:[{}]).map(audioMultiRow).join('')}</div><button type="button" class="btn secondary" data-v190-add-audio>+ Ajouter audio / vidéo</button></details>
      <details class="v190-dropdown"><summary>Style kinesthésique — plusieurs exercices</summary><div class="v190-repeat-list" data-v190-kine-list>${(kines.length?kines:[{}]).map(kineMultiRow).join('')}</div><button type="button" class="btn secondary" data-v190-add-kine>+ Ajouter un exercice</button></details>
    </article>`;
  }
  function subtitleEditor(unit, c){
    const items = Array.isArray(c.subtitleItems) && c.subtitleItems.length ? c.subtitleItems : [subtitleItemsFromContent(unit, {})[0]];
    if(activeSubtitleIndex >= items.length) activeSubtitleIndex = items.length - 1;
    if(activeSubtitleIndex < 0) activeSubtitleIndex = 0;
    const current = items[activeSubtitleIndex] || items[0];
    return `<div class="v172-editor-body" data-v172-editor="subtitles">
      ${helpBox('Choisis d’abord le nom du sous-titre dans la liste déroulante, puis clique sur Ouvrir / Modifier. Les informations sont organisées en volets déroulants et chaque sous-titre peut contenir plusieurs images, audios et exercices.')}
      ${subtitleNav(items)}
      <div data-v190-subtitle-interface>${subtitleRow(current, activeSubtitleIndex)}</div>
    </div>`;
  }

  function examRow(q, i){
    const question = Array.isArray(q) ? (q[0] || '') : ((q && (q.question || q.title)) || '');
    const opts = Array.isArray(q) ? (Array.isArray(q[1]) ? q[1].slice() : []) : (Array.isArray(q && q.options) ? q.options.slice() : []);
    while(opts.length < 4) opts.push('');
    const correct = Array.isArray(q) ? Number(q[2] || 0) : Number((q && (q.correct ?? q.correctIndex)) || 0);
    return `<article class="v172-row v174-exam-row" data-v172-row="exam">
      <div class="v172-row-head"><strong>Question ${i+1}</strong><button type="button" class="v172-delete" data-v172-delete-row>Supprimer</button></div>
      <label class="v172-field"><span>Question du contrôle final</span><textarea data-field="question" rows="3">${html(question)}</textarea></label>
      <div class="v172-grid-2 v174-options-grid">
        ${opts.slice(0,4).map((op, idx) => `<label class="v172-field"><span>Choix ${idx+1}</span><input data-field="option" value="${attr(op)}"></label>`).join('')}
      </div>
      <label class="v172-field v174-correct-field"><span>Bonne réponse</span><select data-field="correct">
        ${[0,1,2,3].map(idx => `<option value="${idx}" ${idx === correct ? 'selected' : ''}>Choix ${idx+1}</option>`).join('')}
      </select></label>
    </article>`;
  }
  function examEditor(unit, c){
    return `<div class="v172-editor-body" data-v172-editor="exam">
      ${helpBox('Contrôle final de l’unité : modifie les questions, les choix et la bonne réponse. Ces questions apparaissent dans l’espace élève à la fin de l’unité.')}
      <div class="v172-list" id="v172ExamQuestions">${(c.examQuestions || []).map(examRow).join('')}</div>
      <button type="button" class="btn secondary" data-v172-add="exam">+ Ajouter une question</button>
    </div>`;
  }
  function childRow(item, i){
    const data = item || {};
    return `<article class="v172-child-row epi-mindmap-child-row" data-v172-child-row>
      <div class="v172-row-head"><strong>Sous-fil ${i+1}</strong><button type="button" class="v172-delete" data-v192-remove-child-line>Supprimer</button></div>
      <div class="v172-grid-2">
        <label class="v172-field"><span>Nom du sous-fil</span><input data-child-field="title" value="${attr(data.title || '')}" placeholder="Ex. Clavier"></label>
        <label class="v172-field"><span>Définition du sous-fil</span><textarea data-child-field="definition" rows="2" placeholder="Définition propre à ce sous-fil">${html(data.definition || '')}</textarea></label>
      </div>
    </article>`;
  }
  function branchRow(b, i){
    const children = normalizeMindmapChildren(b && b.children);
    return `<article class="v172-row v172-branch-row epi-mindmap-form-card" data-v172-row="branch">
      <div class="v172-row-head epi-mindmap-form-head"><strong>Branche de carte mentale ${i+1}</strong><button type="button" class="v172-delete" data-v172-delete-row>×</button></div>
      <label class="v172-field"><span>Fil principal</span><input data-field="title" value="${attr(b.title)}" placeholder="Ex. Les périphériques"></label>
      <label class="v172-field"><span>Définition</span><textarea data-field="definition" rows="3" placeholder="Définition courte de la branche">${html(b.definition)}</textarea></label>
      <label class="v172-field"><span>Exemple</span><textarea data-field="example" rows="3" placeholder="Ex. Le clavier est un périphérique d’entrée.">${html(b.example)}</textarea></label>
      <div class="epi-mindmap-children-form">
        <div class="v176-section-title"><span>+</span><h3>Sous-fils avec définition</h3></div>
        <p class="v172-help">Ajoute chaque sous-fil séparément avec sa propre définition.</p>
        <div class="v172-list epi-mindmap-child-list" data-v172-child-list>${(children.length ? children : [{title:'', definition:''}]).map(childRow).join('')}</div>
        <div class="v172-actions epi-mindmap-form-actions"><button type="button" class="btn secondary v192-add-child-btn" data-v192-add-child-line>+ Ajouter un sous-fil</button></div>
      </div>
    </article>`;
  }
  function mindmapEditor(unit, c){
    return `<div class="v172-editor-body" data-v172-editor="mindmap">
      ${helpBox('Ici tu organises la carte mentale avec un nœud central et des branches sur les côtés : ajoute, modifie ou supprime les branches, les définitions et les exemples.')}
      <div class="v172-list" id="v172Branches">${(c.mindmapBranches || []).map(branchRow).join('')}</div>
      <button type="button" class="btn secondary" data-v172-add="branch">+ Ajouter une branche</button>
    </div>`;
  }
  function visualRow(item, i){
    item = item || {};
    const isVid = isVideoSource(item.src || '');
    return `<article class="v172-row v172-visual-row" data-v172-row="visual">
      <div class="v172-row-head"><strong>Média visuel ${i+1}</strong><button type="button" class="v172-delete" data-v172-delete-row>Supprimer</button></div>
      <div class="v172-media-row">
        <div class="v172-preview-box v205-media-preview">${item.src ? imagePreviewTag(item.src, item.title || (isVid ? 'Vidéo' : 'Image')) : '<span>Aperçu image/vidéo</span>'}</div>
        <div class="v172-media-fields">
          <label class="v172-field"><span>Titre du média</span><input data-field="title" value="${attr(item.title)}"></label>
          <label class="v172-field"><span>Chemin ou URL du média</span><input data-field="src" value="${attr(item.src)}" placeholder="/api/media/... ou URL"></label>
          <label class="v172-field"><span>Importer une image ou une vidéo depuis l’ordinateur</span><input type="file" accept="image/*,video/*,.mp4,.webm,.mov,.m4v,.ogv,.jpg,.jpeg,.png,.webp,.gif" data-v172-file="media"></label>
          <p class="v205-video-help">Vidéo acceptée : MP4/WebM/OGG. Elle est enregistrée côté serveur et l’élève la lit en streaming.</p>
        </div>
      </div>
      <label class="v172-field"><span>Définition / description du média</span><textarea data-field="description" rows="3">${html(item.description)}</textarea></label>
      <label class="v172-field"><span>Exemple / action à faire</span><textarea data-field="example" rows="3">${html(item.example)}</textarea></label>
    </article>`;
  }
  function visualEditor(unit, c){
    return `<div class="v172-editor-body" data-v172-editor="visual">
      ${helpBox('Style visuel : ajoute des images ou des vidéos. Les médias restent associés à l’unité.')}
      <div class="v172-list" id="v172VisualItems">${(c.visualItems || []).map(visualRow).join('')}</div>
      <button type="button" class="btn secondary" data-v172-add="visual">+ Ajouter une image / vidéo</button>
    </div>`;
  }
  function audioRow(item, i){
    item = item || {};
    return `<article class="v172-row v172-audio-row v207-audio-media-row" data-v172-row="audio">
      <div class="v172-row-head"><strong>Audio / vidéo ${i+1}</strong><button type="button" class="v172-delete" data-v172-delete-row>Supprimer</button></div>
      <label class="v172-field"><span>Titre de la narration</span><input data-field="title" value="${attr(item.title || '')}" placeholder="Ex. Définition de la notion"></label>
      <input type="hidden" data-field="src" value="${attr(item.src || '')}">
      <div class="v194-media-preview v207-audio-media-preview">${item.src ? mediaControlTag(item.src, item.title || 'Média auditif') : '<span>Aucun fichier audio/vidéo choisi</span>'}</div>
      <div class="v186-browse-wrap"><span class="v186-browse-title">Importer audio, vidéo ou image depuis l’ordinateur</span><label class="v186-browse-btn">Parcourir média<input type="file" accept="audio/*,video/*,image/*,.mp3,.wav,.m4a,.aac,.ogg,.mp4,.webm,.mov,.m4v,.ogv,.jpg,.jpeg,.png,.webp,.gif" data-v172-file="audio"></label><small data-v190-file-name>${item.src ? 'Média choisi' : 'Aucun fichier choisi'}</small></div>
      <div class="v204-audio-note">Tu peux ajouter un média ou écrire un texte lu automatiquement. Le fichier sera enregistré avec l’unité.</div>
      <label class="v172-field"><span>Texte à écouter en français</span><textarea data-field="text" rows="5" placeholder="Écris le texte qui sera lu à haute voix...">${html(item.text || '')}</textarea></label>
      <label class="v172-field"><span>Texte à écouter en arabe</span><textarea data-field="ar" rows="4" placeholder="اكتب النص العربي الذي سيُقرأ صوتيا...">${html(item.ar || '')}</textarea></label>
    </article>`;
  }
  function audioEditor(unit, c){
    return `<div class="v172-editor-body" data-v172-editor="audio">
      ${helpBox('Style auditif : écris un texte à lire automatiquement ou importe un média audio, vidéo ou image.')}
      <div class="v172-list" id="v172AudioItems">${(c.audioItems || []).map(audioRow).join('')}</div>
      <button type="button" class="btn secondary" data-v172-add="audio">+ Ajouter audio / vidéo</button>
    </div>`;
  }
  function kineRow(item, i){
    return `<article class="v172-row v172-kine-row" data-v172-row="kine">
      <div class="v172-row-head"><strong>Question ${i+1}</strong><button type="button" class="v172-delete" data-v172-delete-row>Supprimer</button></div>
      <div class="v172-grid-2">
        <label class="v172-field"><span>Type</span><select data-field="type"><option ${item.type==='Question directe'?'selected':''}>Question directe</option><option ${item.type==='Compléter'?'selected':''}>Compléter</option><option ${item.type==='Association'?'selected':''}>Association</option><option ${item.type==='Ordre logique'?'selected':''}>Ordre logique</option><option ${item.type==='Tâche pratique'?'selected':''}>Tâche pratique</option></select></label>
        <label class="v172-field"><span>Réponse courte / mot attendu</span><input data-field="answer" value="${attr(item.answer)}"></label>
      </div>
      <label class="v172-field"><span>Question ou consigne</span><textarea data-field="question" rows="3">${html(item.question)}</textarea></label>
      <label class="v172-field"><span>Correction / production attendue</span><textarea data-field="correction" rows="3">${html(item.correction)}</textarea></label>
    </article>`;
  }
  function kineEditor(unit, c){
    return `<div class="v172-editor-body" data-v172-editor="kine">
      ${helpBox('Style kinesthésique : ajoute ou supprime les questions pratiques liées à la manipulation et à l’action.')}
      <div class="v172-list" id="v172KineQuestions">${(c.kineQuestions || []).map(kineRow).join('')}</div>
      <button type="button" class="btn secondary" data-v172-add="kine">+ Ajouter une question</button>
    </div>`;
  }
  function integrationRow(item, i){
    return `<article class="v172-row v172-task-row" data-v172-row="task">
      <div class="v172-row-head"><strong>Tâche ${i+1}</strong><button type="button" class="v172-delete" data-v172-delete-row>Supprimer</button></div>
      <label class="v172-field"><span>Question directe / tâche pratique</span><textarea data-field="task" rows="3">${html(item.task)}</textarea></label>
      <label class="v172-field"><span>Production attendue</span><textarea data-field="expected" rows="3">${html(item.expected)}</textarea></label>
    </article>`;
  }
  function integrationEditor(unit, c){
    return `<div class="v172-editor-body" data-v172-editor="integration">
      ${helpBox('Situation d’intégration : écris une situation réelle, puis ajoute des questions directes et pratiques qui couvrent toute l’unité.')}
      <label class="v172-field"><span>Situation réelle</span><textarea id="v172Scenario" rows="5">${html(c.scenario)}</textarea></label>
      <div class="v172-list" id="v172IntegrationTasks">${(c.integrationTasks || []).map(integrationRow).join('')}</div>
      <button type="button" class="btn secondary" data-v172-add="task">+ Ajouter une tâche</button>
    </div>`;
  }
  function jsonEditor(unit, c){
    return `<div class="v172-editor-body" data-v172-editor="json">
      ${helpBox('Éditeur avancé : modifie directement toutes les données de l’unité. À utiliser avec attention.')}
      <textarea id="v172Json" rows="22" class="v172-json">${html(JSON.stringify(c, null, 2))}</textarea>
    </div>`;
  }
  function editorBody(unit, tab){
    const c = fullContent(unit);
    if(tab === 'dictionary') return dictionaryEditor(unit, c);
    if(tab === 'subtitles') return subtitleEditor(unit, c);
    if(tab === 'mindmap') return mindmapEditor(unit, c);
    if(tab === 'visual') return visualEditor(unit, c);
    if(tab === 'audio') return audioEditor(unit, c);
    if(tab === 'kine') return kineEditor(unit, c);
    if(tab === 'integration') return integrationEditor(unit, c);
    if(tab === 'exam') return examEditor(unit, c);
    if(tab === 'json') return jsonEditor(unit, c);
    return generalEditor(unit, c);
  }
  function editorCard(unit, tab){
    return `<section class="v172-card v172-editor-card" data-v172-manager="1" data-v172-active-tab="${attr(tab)}">
      <div class="v172-card-head"><div><span class="mini-pill">Mode enseignant</span><h2>Modifier tout le contenu de chaque unité</h2><p>L’édition est organisée par partie pour chaque unité : informations générales, dictionnaire, sous-titres, carte mentale, styles visuel/auditif/kinesthésique, situation d’intégration et contrôle final.</p></div></div>
      ${selectUnitHtml(unit.id)}
      ${tabsHtml(tab)}
      ${editorBody(unit, tab)}
      <div class="v172-actions">
        <button type="button" class="btn" data-v172-save>Enregistrer cette partie</button>
        <button type="button" class="btn secondary" data-v172-reset>Restaurer cette unité</button>
        <button type="button" class="btn ghost" data-v87-landing="1">Retour à l’accueil</button>
      </div>
      <p class="v172-message" id="v172Message" aria-live="polite"></p>
    </section>`;
  }


  function teacherDashboardCards(panel){
    const actions = [
      ['notes', 'Notes', 'Consulter et exporter les notes des élèves.'],
      ['integrationFiles', 'Fichiers situation d’intégration', 'Voir les documents envoyés par les élèves.'],
      ['add', 'Ajouter unité', 'Créer une unité avec sous-titres, images, audios et exercices.'],
      ['modify', 'Modifier unité', 'Choisir une unité puis modifier chaque sous-titre.'],
      ['units', 'Liste des unités', 'Afficher la liste avec Modifier et Supprimer.'],
      ['addUser', 'Ajouter utilisateur', 'Nom et prénom.'],
      ['listUsers', 'Voir la liste des utilisateurs', 'Afficher les utilisateurs ajoutés.'],
      ['changePassword', 'Changer mot de passe prof', 'Modifier le mot de passe professeur.']
    ];
    return `<section class="v176-dashboard v190-dashboard-no-icons">
      ${actions.map(([id,title,desc]) => `<button type="button" class="v176-dash-card ${panel===id?'active':''}" data-v176-dashboard="${id}">
        <strong>${html(title)}</strong>
        <small>${html(desc)}</small>
      </button>`).join('')}
    </section>`;
  }

  function notesDashboardPanel(){
    return `<section class="v176-panel" data-v176-panel="notes">
      <div class="v176-panel-head"><span class="mini-pill">Notes</span><h2>Tableau des notes</h2><p>Cette partie affiche les notes enregistrées et permet l’exportation.</p></div>
      ${resultsTable()}
    </section>`;
  }

  function integrationFiles(){
    const rows = readJson(INTEGRATION_FILES_KEY, []);
    return Array.isArray(rows) ? rows.filter(row => row && (row.fileName || row.url || row.mediaId)) : [];
  }
  function saveIntegrationFiles(rows){
    return writeJson(INTEGRATION_FILES_KEY, Array.isArray(rows) ? rows : []);
  }
  function integrationFilesDashboardPanel(){
    const rows = integrationFiles().slice().sort((a,b) => String(b.createdAt || '').localeCompare(String(a.createdAt || '')));
    const body = rows.map((row, index) => {
      const url = row.url || (row.mediaId ? `/api/media/${encodeURIComponent(row.mediaId)}` : '');
      const student = `${row.prenom || ''} ${row.nom || ''}`.trim() || 'Élève';
      return `<tr>
        <td>${index + 1}</td>
        <td><strong>${html(student)}</strong></td>
        <td>${html(row.unitTitle || row.unite || '')}</td>
        <td><strong>${html(row.fileName || 'Document')}</strong><small>${html(row.type || '')}</small></td>
        <td>${html(row.createdAt ? new Date(row.createdAt).toLocaleString('fr-FR') : '')}</td>
        <td><div class="v185-row-actions">${url ? `<a class="btn small secondary" href="${attr(url)}" target="_blank" rel="noopener">Ouvrir</a>` : ''}<button type="button" class="btn small danger" data-epi-delete-integration-file="${attr(row.id || row.mediaId || '')}">Supprimer</button></div></td>
      </tr>`;
    }).join('');
    return `<section class="v176-panel" data-v176-panel="integrationFiles">
      <div class="v176-panel-head"><span class="mini-pill">Documents</span><h2>Fichiers situation d’intégration</h2><p>Les documents importés par les élèves depuis la situation d’intégration apparaissent ici.</p></div>
      <article class="v176-form-card">
        <div class="v184-units-table-wrap"><table class="v184-units-table"><thead><tr><th>N°</th><th>Élève</th><th>Unité</th><th>Fichier</th><th>Date</th><th>Action</th></tr></thead><tbody>${body || '<tr><td colspan="6">Aucun fichier envoyé pour le moment.</td></tr>'}</tbody></table></div>
      </article>
    </section>`;
  }

  function teacherUsers(){
    const rows = readJson(TEACHER_USERS_KEY, []);
    return Array.isArray(rows) ? rows.filter(u => u && (u.nom || u.prenom)) : [];
  }
  function saveTeacherUsers(rows){
    return writeJson(TEACHER_USERS_KEY, Array.isArray(rows) ? rows : []);
  }
  function addUserDashboardPanel(){
    return `<section class="v176-panel" data-v176-panel="addUser">
      <div class="v176-panel-head"><span class="mini-pill">Utilisateurs</span><h2>Ajouter utilisateur</h2><p>Ajoute un utilisateur avec son nom et son prénom. Il sera visible dans la liste des utilisateurs ajoutés.</p></div>
      <article class="v176-form-card">
        <div class="v172-grid-2">
          <label class="v172-field"><span>Nom</span><input id="epiUserNom" placeholder="Nom"></label>
          <label class="v172-field"><span>Prénom</span><input id="epiUserPrenom" placeholder="Prénom"></label>
        </div>
        <div class="v172-actions">
          <button type="button" class="btn" data-epi-save-user>Ajouter utilisateur</button>
          <button type="button" class="btn secondary" data-v176-dashboard="listUsers">Voir la liste</button>
        </div>
        <p class="v172-message" id="epiUserMsg" aria-live="polite"></p>
      </article>
    </section>`;
  }
  function listUsersDashboardPanel(){
    const rows = teacherUsers();
    const body = rows.map((user, index) => `<tr>
      <td>${index + 1}</td>
      <td><strong>${html(user.nom || '')}</strong></td>
      <td>${html(user.prenom || '')}</td>
      <td>${html(user.createdAt ? new Date(user.createdAt).toLocaleDateString('fr-FR') : '')}</td>
      <td><button type="button" class="btn small danger" data-epi-delete-user="${index}">Supprimer</button></td>
    </tr>`).join('');
    return `<section class="v176-panel" data-v176-panel="listUsers">
      <div class="v176-panel-head"><span class="mini-pill">Utilisateurs</span><h2>Liste des utilisateurs ajoutés</h2><p>Cette liste affiche les utilisateurs ajoutés depuis l’espace professeur.</p></div>
      <article class="v176-form-card">
        <div class="v172-actions"><button type="button" class="btn secondary" data-v176-dashboard="addUser">+ Ajouter utilisateur</button></div>
        <div class="v184-units-table-wrap"><table class="v184-units-table"><thead><tr><th>N°</th><th>Nom</th><th>Prénom</th><th>Date</th><th>Action</th></tr></thead><tbody>${body || '<tr><td colspan="5">Aucun utilisateur ajouté.</td></tr>'}</tbody></table></div>
      </article>
    </section>`;
  }

  function changePasswordDashboardPanel(){
    return `<section class="v176-panel" data-v176-panel="changePassword">
      <div class="v176-panel-head"><span class="mini-pill">Sécurité</span><h2>Changer mot de passe prof</h2><p>Modifie le mot de passe utilisé pour ouvrir l’espace professeur.</p></div>
      <article class="v176-form-card">
        <div class="v172-grid-2">
          <label class="v172-field"><span>Ancien mot de passe</span><input id="epiOldProfPassword" type="password" autocomplete="current-password"></label>
          <label class="v172-field"><span>Nouveau mot de passe</span><input id="epiNewProfPassword" type="password" autocomplete="new-password"></label>
          <label class="v172-field"><span>Confirmer le nouveau mot de passe</span><input id="epiConfirmProfPassword" type="password" autocomplete="new-password"></label>
        </div>
        <div class="v172-actions">
          <button type="button" class="btn" data-epi-change-prof-password>Enregistrer mot de passe</button>
          <button type="button" class="btn secondary" data-v176-dashboard="home">Revenir au tableau de bord</button>
        </div>
        <p class="v172-message" id="epiPasswordMsg" aria-live="polite"></p>
      </article>
    </section>`;
  }


  function countUnitElements(unit){
    const lessons = Array.isArray(unit && unit.lessons) ? unit.lessons : [];
    const hasVisual = lessons.some(l => (l && l.visual && (l.visual.image || l.visual.steps)) || (l && l.visualType)) || Array.isArray(unit && unit.visualItems);
    const hasAudio = lessons.some(l => l && (l.fr || l.ar || l.audioText)) || Array.isArray(unit && unit.audioItems);
    const hasKine = lessons.some(l => l && (Array.isArray(l.fill) || Array.isArray(l.drag) || l.order)) || Array.isArray(unit && unit.kineQuestions);
    return {
      subtitles: lessons.length,
      branches: lessons.filter(l => Array.isArray(l.officialObjectives) && l.officialObjectives.length).length,
      visual: hasVisual ? 1 : 0,
      file: hasVisual ? 1 : 0,
      audio: hasAudio ? 1 : 0,
      kine: hasKine ? 1 : 0,
      dictionary: Array.isArray(unit && unit.dictionary) ? unit.dictionary.length : 0,
      scenario: unit && unit.integration && unit.integration.scenario ? 1 : 0,
      tasks: unit && unit.integration && Array.isArray(unit.integration.tasks) ? unit.integration.tasks.length : 0,
      qcm: Array.isArray(unit && unit.exam) ? unit.exam.length : 0
    };
  }
  function studentElementsComparisonHtml(){
    const baseUnits = units().filter(u => u && !u.customUnit);
    const totals = baseUnits.reduce((acc, unit) => {
      const c = countUnitElements(unit);
      Object.keys(c).forEach(k => acc[k] = (acc[k] || 0) + c[k]);
      return acc;
    }, {});
    const rows = [
      ['Sous-titre + contenu', 'subtitle', totals.subtitles || 0, 'Nom du sous-titre, définition, exemple, sous-fils'],
      ['Carte mentale', 'subtitle', totals.branches || 0, 'Branches saisies manuellement'],
      ['Image / fichier', 'visual', totals.file || 0, 'Choisir depuis ordinateur ou écrire un chemin/URL'],
      ['Texte audio', 'audio', totals.audio || 0, 'Texte lu par la synthèse vocale, sans fichier lourd'],
      ['Activité pratique', 'kine', totals.kine || 0, 'Question kinesthésique, réponse et correction'],
      ['Dictionnaire', 'dictionary', totals.dictionary || 0, 'Mot et traduction/signification'],
      ['Situation réelle', 'scenario', totals.scenario || 0, 'Contexte de production'],
      ['Questions d’intégration', 'tasks', totals.tasks || 0, 'Question + production attendue'],
      ['QCM / contrôle final', 'exam', totals.qcm || 0, 'Question, choix et bonne réponse']
    ];
    return `<div class="v183-comparison"><div class="v183-comparison-head"><span class="mini-pill">Comparaison</span><h4>Éléments trouvés dans les unités actuelles de l’espace élève</h4></div><div class="v183-comparison-table-wrap"><table class="v183-comparison-table"><thead><tr><th>Type d’élément</th><th>Présence</th><th>Action</th></tr></thead><tbody>${rows.map(([label,type,count,desc]) => `<tr><td><strong>${html(label)}</strong><small>${html(desc)}</small></td><td>${count ? `${count} élément(s)` : 'À compléter'}</td><td><button type="button" data-v181-type="${attr(type)}">Ajouter</button></td></tr>`).join('')}</tbody></table></div></div>`;
  }

  function addUnitDashboardPanel(){
    return `<section class="v176-panel" data-v176-panel="add">
      <div class="v176-panel-head"><span class="mini-pill">Ajouter unité</span><h2>Créer une nouvelle unité complète</h2><p>L’ajout est organisé avec des boutons. Clique sur chaque bouton pour afficher la partie à remplir. Chaque sous-titre possède ses propres contenus et ses trois styles.</p></div>
      <article class="v176-form-card v180-accordion-card">
        <!-- v200 : blocs de raccourcis supprimés pour afficher directement l’interface de saisie. -->
        <section class="v176-add-section v179-add-section" data-v179-add-section="general"><div class="v176-section-title"><span>1</span><h3>Informations générales de l’unité</h3></div><div class="v172-grid-2">
          <label class="v172-field"><span>Année scolaire</span><select id="v176NewUnitYear"><option value="1ac">1ère année</option><option value="2ac">2ème année</option><option value="3ac">3ème année</option></select></label>
          <label class="v172-field"><span>Nom de l’unité</span><input id="v176NewUnitTitle" placeholder="Ex. Réseau informatique"></label>
          <label class="v172-field"><span>Résumé court</span><input id="v176NewUnitShort" placeholder="Ex. Réseau, sécurité, partage"></label>
          <label class="v172-field"><span>Volume horaire</span><input id="v176NewUnitDuration" value="6 h"></label>
          <label class="v172-field"><span>Compétence</span><input id="v176NewUnitCompetence" placeholder="Ex. C13"></label>
        </div>
        <label class="v172-field"><span>Description générale de l’unité</span><textarea id="v176NewUnitIntro" rows="4" placeholder="Écris l’objectif général de l’unité..."></textarea></label></section>

        <section class="v176-add-section v179-add-section" data-v179-add-section="subtitles" hidden><div class="v176-section-title"><span>2</span><h3>Sous-titres et contenus des trois styles</h3></div><p class="v172-help">Clique sur « + Ajouter un sous-titre ». Une fiche complète apparaît avec le contenu, les sous-fils, le style visuel, le style auditif et le style kinesthésique.</p><div class="v176-add-subtitles" id="v176AddSubtitles"></div><button type="button" class="btn secondary" data-v176-add-subtitle-row>+ Ajouter un autre sous-titre</button></section>

        <section class="v176-add-section v179-add-section" data-v179-add-section="mindmap" hidden><div class="v176-section-title"><span>3</span><h3>Formulaire spécial de carte mentale</h3></div><p class="v172-help">Remplis manuellement les fils de la carte mentale : aucun fil, définition ou sous-fil n’est généré automatiquement.</p><div class="v172-list" id="v172Branches">${branchRow({title:'', definition:'', example:'', children:[]}, 0)}</div><button type="button" class="btn secondary" data-v172-add="branch">+ Ajouter un fil principal</button></section>

        <section class="v176-add-section v179-add-section" data-v179-add-section="dictionary" hidden><div class="v176-section-title"><span>4</span><h3>Dictionnaire</h3></div><label class="v172-field"><span>Dictionnaire — format : mot || traduction</span><textarea id="v176NewDictionary" rows="8" placeholder="Mot 1 || Traduction 1&#10;Mot 2 || Traduction 2"></textarea></label></section>

        <section class="v176-add-section v179-add-section" data-v179-add-section="scenario" hidden><div class="v176-section-title"><span>4</span><h3>Situation réelle / production</h3></div><label class="v172-field"><span>Situation réelle / production</span><textarea id="v176NewScenario" rows="8" placeholder="Situation d’intégration de l’unité..."></textarea></label></section>

        <section class="v176-add-section v179-add-section" data-v179-add-section="tasks" hidden><div class="v176-section-title"><span>5</span><h3>Formulaire clair de situation d’intégration</h3></div><p class="v172-help v201-integration-help">Ajoute chaque question séparément : à gauche la consigne donnée à l’élève, à droite la production ou réponse attendue. Ce formulaire remplace le format ancien avec les signes ||.</p><div class="v201-task-list" id="v176NewIntegrationTasks">${integrationCardRows([], 'new')}</div><button type="button" class="btn secondary" data-v201-add-task="new">+ Ajouter une question d’intégration</button><textarea id="v176NewTasks" hidden></textarea></section>

        <section class="v176-add-section v179-add-section" data-v179-add-section="exam" hidden><div class="v176-section-title"><span>6</span><h3>Contrôle final</h3></div><label class="v172-field"><span>Contrôle final — format : question || choix1 | choix2 | choix3 | choix4 || numéro bonne réponse</span><textarea id="v176NewExam" rows="8" placeholder="Question 1 || Choix 1 | Choix 2 | Choix 3 | Choix 4 || 1"></textarea></label></section>

        <div class="v194-wizard-actions">
          <button type="button" class="btn secondary" data-v194-add-prev disabled>← Précédent</button>
          <button type="button" class="btn" data-v194-add-next>Suivant →</button>
          <button type="button" class="btn ghost" data-v176-dashboard="home">Annuler</button>
        </div>
        <p class="v172-message v194-create-message" id="v176CreateMsg" aria-live="polite"></p>
      </article>
    </section>`;
  }

  function modifyUnitDashboardPanel(unit){
    const c = fullContent(unit);
    activeTab = 'subtitles';
    return `<section class="v176-panel" data-v176-panel="modify">
      <div class="v176-panel-head"><span class="mini-pill">Modifier unité</span><h2>Modifier l’unité complète</h2><p>Les parties de l’unité sont organisées sous forme de boutons. Clique sur une partie pour afficher son contenu. Dans « Sous-titres », les noms apparaissent d’abord, puis tu ouvres le sous-titre à modifier.</p></div>
      <article class="v176-form-card v176-unit-edit-card v179-accordion-card">
        <nav class="v179-section-buttons" aria-label="Parties à modifier">
          <button type="button" class="v179-section-btn active" data-v179-mod-section-btn="general">Informations générales</button>
          <button type="button" class="v179-section-btn" data-v179-mod-section-btn="subtitles">Sous-titres + 3 styles</button>
          <button type="button" class="v179-section-btn" data-v179-mod-section-btn="mindmap">Carte mentale</button>
          <button type="button" class="v179-section-btn" data-v179-mod-section-btn="dictionary">Dictionnaire</button>
          <button type="button" class="v179-section-btn" data-v179-mod-section-btn="scenario">Situation réelle</button>
          <button type="button" class="v179-section-btn" data-v179-mod-section-btn="tasks">Questions d’intégration</button>
          <button type="button" class="v179-section-btn" data-v179-mod-section-btn="exam">Contrôle final</button>
        </nav>

        <section class="v176-add-section v179-mod-section" data-v179-mod-section="general"><div class="v176-section-title"><span>1</span><h3>Informations générales</h3></div><div class="v172-grid-2">
          ${selectUnitHtml(unit.id)}
          <label class="v172-field"><span>Année scolaire</span><select id="v176EditUnitYear"><option value="1ac" ${(c.schoolYear||unit.schoolYear||'1ac')==='1ac'?'selected':''}>1ère année</option><option value="2ac" ${(c.schoolYear||unit.schoolYear||'1ac')==='2ac'?'selected':''}>2ème année</option><option value="3ac" ${(c.schoolYear||unit.schoolYear||'1ac')==='3ac'?'selected':''}>3ème année</option></select></label>
          <label class="v172-field"><span>Nom de l’unité</span><input id="v176EditUnitTitle" value="${attr(c.title)}"></label>
          <label class="v172-field"><span>Résumé court</span><input id="v176EditUnitShort" value="${attr(c.short)}"></label>
          <label class="v172-field"><span>Volume horaire</span><input id="v176EditUnitDuration" value="${attr(c.duration)}"></label>
          <label class="v172-field"><span>Compétence</span><input id="v176EditUnitCompetence" value="${attr(c.competence)}"></label>
        </div><label class="v172-field"><span>Description générale</span><textarea id="v176EditUnitIntro" rows="4">${html(c.intro)}</textarea></label></section>

        <section class="v176-add-section v179-mod-section" data-v179-mod-section="subtitles" hidden><div class="v176-section-title"><span>2</span><h3>Sous-titres et trois styles</h3></div>${subtitleEditor(unit, c)}<div class="v172-actions"><button type="button" class="btn secondary" data-v175-add-subtitle>+ Ajouter un sous-titre</button></div></section>

        <section class="v176-add-section v179-mod-section" data-v179-mod-section="mindmap" hidden><div class="v176-section-title"><span>3</span><h3>Formulaire spécial de carte mentale</h3></div><p class="v172-help">Ce formulaire crée uniquement la carte mentale saisie manuellement : un nœud central, des fils, des sous-fils, une définition et un exemple au clic.</p>${mindmapEditor(unit, c)}</section>

        <section class="v176-add-section v179-mod-section" data-v179-mod-section="dictionary" hidden><div class="v176-section-title"><span>4</span><h3>Dictionnaire</h3></div><label class="v172-field"><span>Dictionnaire — format : mot || traduction</span><textarea id="v176EditDictionary" rows="8">${html(dictionaryToText(c.dictionary))}</textarea></label></section>

        <section class="v176-add-section v179-mod-section" data-v179-mod-section="scenario" hidden><div class="v176-section-title"><span>4</span><h3>Situation réelle / production</h3></div><label class="v172-field"><span>Situation réelle / production</span><textarea id="v176EditScenario" rows="8">${html(c.scenario || '')}</textarea></label></section>

        <section class="v176-add-section v179-mod-section" data-v179-mod-section="tasks" hidden><div class="v176-section-title"><span>5</span><h3>Formulaire clair de situation d’intégration</h3></div><p class="v172-help v201-integration-help">Modifie les questions une par une. Chaque ligne possède une consigne visible pour l’élève et une production attendue pour la correction.</p><div class="v201-task-list" id="v176EditIntegrationTasks">${integrationCardRows(c.integrationTasks, 'edit')}</div><button type="button" class="btn secondary" data-v201-add-task="edit">+ Ajouter une question d’intégration</button><textarea id="v176EditTasks" hidden>${html(tasksToText(c.integrationTasks))}</textarea></section>

        <section class="v176-add-section v179-mod-section" data-v179-mod-section="exam" hidden><div class="v176-section-title"><span>6</span><h3>Contrôle final</h3></div><label class="v172-field"><span>Contrôle final — format : question || choix1 | choix2 | choix3 | choix4 || numéro bonne réponse</span><textarea id="v176EditExam" rows="8">${html(examToText(c.examQuestions))}</textarea></label></section>

        <div class="v172-actions">
          <button type="button" class="btn" data-v176-save-modify>Enregistrer les modifications</button>
        </div>
        <p class="v172-message" id="v176ModifyMsg" aria-live="polite"></p>
      </article>
    </section>`;
  }

  function yearLabel(value){
    const map = { '1ac':'1ère année', '2ac':'2ème année', '3ac':'3ème année' };
    return map[String(value || '1ac')] || '1ère année';
  }
  function dashboardUnitsList(){
    const rows = units().map((unit, index) => {
      const c = fullContent(unit);
      const subtitles = (c.subtitleItems || c.mindmapBranches || []).length;
      const deleteBtn = `<button type="button" class="btn small danger v191-delete-unit-btn" data-v185-delete-unit="${attr(unit.id)}">Supprimer</button>`;
      return `<tr class="${unit.customUnit ? 'custom' : 'programme'}">
        <td><span class="v184-unit-index">U${index + 1}</span></td>
        <td><strong>${html(cleanTitle(unit.title || `Unité ${index+1}`))}</strong><small>${html(unit.short || unit.intro || 'Unité disponible.')}</small></td>
        <td>${html(yearLabel(unit.schoolYear || c.schoolYear || '1ac'))}</td>
        <td>${unit.customUnit ? '<span class="mini-pill">Ajoutée</span>' : '<span class="mini-pill">Programme</span>'}</td>
        <td>${subtitles} sous-titre(s)</td>
        <td><div class="v185-row-actions"><button type="button" class="btn small secondary" data-v180-open-unit="${attr(unit.id)}">Modifier</button>${deleteBtn}</div></td>
      </tr>`;
    }).join('');
    return `<section class="v184-units-list-panel">
      <div class="v176-panel-head"><span class="mini-pill">Liste des unités</span><h2>Unités disponibles</h2><p>La liste des unités apparaît seulement après clic sur « Liste des unités ». Chaque ligne contient Modifier et Supprimer. Une unité supprimée disparaît aussi de l’espace élève.</p></div>
      <div class="v184-units-table-wrap"><table class="v184-units-table"><thead><tr><th>N°</th><th>Unité</th><th>Année</th><th>Type</th><th>Sous-titres</th><th>Action</th></tr></thead><tbody>${rows || '<tr><td colspan="6">Aucune unité disponible.</td></tr>'}</tbody></table></div>
    </section>`;
  }
  function emptyDashboardPanel(){
    return `<section class="v176-panel">
      <div class="v176-panel-head"><span class="mini-pill">Tableau de bord</span><h2>Choisis une action</h2><p>Utilise les trois boutons : Notes, Ajouter unité ou Modifier unité.</p></div>
    </section>`;
  }

  function dashboardPanelHtml(unit){
    if(activePanel === 'notes') return notesDashboardPanel();
    if(activePanel === 'integrationFiles') return integrationFilesDashboardPanel();
    if(activePanel === 'add') return addUnitDashboardPanel();
    if(activePanel === 'modify') return modifyUnitDashboardPanel(unit);
    if(activePanel === 'units') return dashboardUnitsList();
    if(activePanel === 'addUser') return addUserDashboardPanel();
    if(activePanel === 'listUsers') return listUsersDashboardPanel();
    if(activePanel === 'changePassword') return changePasswordDashboardPanel();
    return emptyDashboardPanel();
  }

  function renderTeacherArea(id, tab){
    const unit = unitById(id) || units()[0];
    if(!unit) return;
    activeUnitId = unit.id;
    if(tab) activeTab = tab;
    const app = document.getElementById('app');
    if(!app) return;
    app.innerHTML = teacherShell(`<section class="v172-page v176-teacher-page">
      <header class="v172-hero v176-teacher-hero"><div><span class="mini-pill">Espace prof</span><h1>Tableau de bord professeur</h1><p>Gestion professionnelle : notes, ajout, modification et suppression synchronisée avec l’espace élève.</p></div><button type="button" class="btn secondary" data-v87-landing="1">Retour</button></header>
      ${teacherDashboardCards(activePanel)}
      ${dashboardPanelHtml(unit)}
    </section>`);
  }

  window.EPI_TEACHER_DASHBOARD = {
    open(panel, id, tab){
      activePanel = panel || 'home';
      if(activePanel === 'modify') activeTab = tab || 'subtitles';
      else if(tab) activeTab = tab;
      renderTeacherArea(id || $('#v172UnitSelect')?.value || activeUnitId || (units()[0] && units()[0].id), activeTab);
    },
    render(id, tab){
      renderTeacherArea(id || activeUnitId || (units()[0] && units()[0].id), tab || activeTab);
    }
  };


  function collectVisualMulti(scope){
    return $all('[data-v190-visual-row]', scope).map((row, i) => {
      const src = $('[data-field="src"]', row)?.value || '';
      return {
        title: $('[data-field="title"]', row)?.value.trim() || `Média ${i+1}`,
        src,
        kind: isVideoSource(src) ? 'video' : 'image',
        description: $('[data-field="description"]', row)?.value || '',
        example: $('[data-field="example"]', row)?.value || '',
        action: $('[data-field="action"]', row)?.value || '',
        remember: $('[data-field="remember"]', row)?.value || ''
      };
    }).filter(x => x.title || x.src || x.description || x.example);
  }
  function collectAudioMulti(scope){
    return $all('[data-v190-audio-row]', scope).map((row, i) => ({
      title: $('[data-field="title"]', row)?.value.trim() || `Audio ${i+1}`,
      src: $('[data-field="src"]', row)?.value.trim() || '',
      text: $('[data-field="text"]', row)?.value || '',
      ar: $('[data-field="ar"]', row)?.value || ''
    })).filter(x => x.title || x.src || x.text || x.ar);
  }
  function collectKineMulti(scope){
    return $all('[data-v190-kine-row]', scope).map((row, i) => ({
      type: $('[data-field="type"]', row)?.value || 'Question directe',
      question: $('[data-field="question"]', row)?.value || '',
      options: $('[data-field="options"]', row)?.value || '',
      pairs: $('[data-field="pairs"]', row)?.value || '',
      steps: $('[data-field="steps"]', row)?.value || '',
      answer: $('[data-field="answer"]', row)?.value || '',
      correction: $('[data-field="correction"]', row)?.value || ''
    })).filter(x => x.question || x.options || x.pairs || x.steps || x.answer || x.correction);
  }
  function collectActiveSubtitle(){
    const editor = $('[data-v175-subtitle-editor]') || document;
    const visualItems = collectVisualMulti(editor);
    const audioItems = collectAudioMulti(editor);
    const kineExercises = collectKineMulti(editor);
    const v0 = visualItems[0] || {}, a0 = audioItems[0] || {}, k0 = kineExercises[0] || {};
    return {
      title: $('#v175SubtitleTitle')?.value.trim() || `Sous-titre ${activeSubtitleIndex + 1}`,
      definition: $('#v175SubtitleDefinition')?.value || '',
      example: $('#v175SubtitleExample')?.value || '',
      children: $('#v175SubtitleChildren')?.value || '',
      visualItems, audioItems, kineExercises,
      visualTitle: v0.title || '', visualSrc: v0.src || '', visualDescription: v0.description || '', visualExample: v0.example || '', visualAction: v0.action || '', visualRemember: v0.remember || '',
      audioTitle: a0.title || '', audioSrc: a0.src || '', audioText: a0.text || '', audioAr: a0.ar || '',
      kineType: k0.type || 'Question directe', kineQuestion: k0.question || '', kineOptions: k0.options || '', kinePairs: k0.pairs || '', kineSteps: k0.steps || '', kineAnswer: k0.answer || '', kineCorrection: k0.correction || ''
    };
  }
  function collectBranchRows(){
    return $all('[data-v172-row="branch"]').map(row => ({
      title: $('[data-field="title"]', row)?.value.trim() || '',
      definition: $('[data-field="definition"]', row)?.value.trim() || '',
      example: $('[data-field="example"]', row)?.value.trim() || '',
      children: $all('[data-v172-child-row]', row).map(child => ({
        title: $('[data-child-field="title"]', child)?.value.trim() || '',
        definition: $('[data-child-field="definition"]', child)?.value.trim() || ''
      })).filter(child => child.title || child.definition)
    })).filter(x => x.title || x.definition || x.example || x.children.length);
  }
  function collectVisualRows(){
    return $all('[data-v172-row="visual"]').map(row => {
      const src = $('[data-field="src"]', row)?.value.trim() || '';
      return {
        title: $('[data-field="title"]', row)?.value.trim() || '',
        src,
        kind: isVideoSource(src) ? 'video' : 'image',
        description: $('[data-field="description"]', row)?.value.trim() || '',
        example: $('[data-field="example"]', row)?.value.trim() || ''
      };
    }).filter(x => x.title || x.src || x.description || x.example);
  }
  function collectAudioRows(){
    return $all('[data-v172-row="audio"]').map(row => ({
      title: $('[data-field="title"]', row)?.value.trim() || '',
      src: $('[data-field="src"]', row)?.value.trim() || '',
      text: $('[data-field="text"]', row)?.value.trim() || '',
      ar: $('[data-field="ar"]', row)?.value.trim() || ''
    })).filter(x => x.title || x.src || x.text || x.ar);
  }
  function collectDictionaryRows(){
    return $all('[data-v172-row="dictionary"]').map(row => ([
      $('[data-field="term"]', row)?.value.trim() || '',
      $('[data-field="translation"]', row)?.value.trim() || ''
    ])).filter(p => p[0] || p[1]);
  }
  function collectKineRows(){
    return $all('[data-v172-row="kine"]').map(row => ({
      type: $('[data-field="type"]', row)?.value || 'Question directe',
      question: $('[data-field="question"]', row)?.value.trim() || '',
      answer: $('[data-field="answer"]', row)?.value.trim() || '',
      correction: $('[data-field="correction"]', row)?.value.trim() || ''
    })).filter(x => x.question || x.answer || x.correction);
  }
  function collectTaskRows(){
    return $all('[data-v172-row="task"]').map(row => ({
      task: $('[data-field="task"]', row)?.value.trim() || '',
      expected: $('[data-field="expected"]', row)?.value.trim() || ''
    })).filter(x => x.task || x.expected);
  }
  function collectExamRows(){
    return normalizeExamQuestions($all('[data-v172-row="exam"]').map(row => {
      const options = $all('[data-field="option"]', row).map(input => input.value.trim()).filter(Boolean);
      return [
        $('[data-field="question"]', row)?.value.trim() || '',
        options,
        Number($('[data-field="correct"]', row)?.value || 0)
      ];
    }).filter(q => q[0] || (q[1] && q[1].length)));
  }
  function collectDictionary(text){
    return linesToArray(text).map(line => {
      const parts = line.split('||').map(x => x.trim());
      return [parts[0] || '', parts.slice(1).join(' || ') || ''];
    }).filter(p => p[0]);
  }

  function dictionaryToText(list){
    return (Array.isArray(list) ? list : []).map(pair => {
      if(Array.isArray(pair)) return `${pair[0] || ''} || ${pair[1] || ''}`;
      return `${(pair && (pair.term || pair.word)) || ''} || ${(pair && (pair.translation || pair.meaning || pair.ar)) || ''}`;
    }).filter(line => line.replace(/\|/g,'').trim()).join('\n');
  }
  function tasksToText(list){
    return (Array.isArray(list) ? list : []).map(item => `${item.task || item.question || ''} || ${item.expected || item.correction || ''}`).filter(line => line.replace(/\|/g,'').trim()).join('\n');
  }
  function textToTasks(text){
    return linesToArray(text).map(line => {
      const parts = line.split('||').map(x => x.trim());
      return {task: parts[0] || '', expected: parts.slice(1).join(' || ') || ''};
    }).filter(x => x.task || x.expected);
  }
  function integrationCardRows(list, mode){
    const rows = Array.isArray(list) && list.length ? list : [{task:'', expected:''}];
    return rows.map((item, i) => integrationCardRow(item, i, mode)).join('');
  }
  function integrationCardRow(item, i, mode){
    const data = item || {};
    return `<article class="v201-task-card" data-v201-task-row="${attr(mode || '')}">
      <div class="v172-row-head"><strong>Question ${i+1}</strong><button type="button" class="v172-delete" data-v201-delete-task>Supprimer</button></div>
      <label class="v172-field"><span>Consigne / question visible pour l’élève</span><textarea data-field="task" rows="3" placeholder="Ex. À partir de la situation, réalise...">${html(data.task || data.question || '')}</textarea></label>
      <label class="v172-field"><span>Réponse ou production attendue</span><textarea data-field="expected" rows="3" placeholder="Ex. L’élève doit produire...">${html(data.expected || data.correction || '')}</textarea></label>
    </article>`;
  }
  function collectIntegrationCardRows(rootSelector){
    const root = rootSelector ? $(rootSelector) : document;
    const rows = root ? $all('[data-v201-task-row]', root) : [];
    return rows.map(row => ({
      task: $('[data-field="task"]', row)?.value.trim() || '',
      expected: $('[data-field="expected"]', row)?.value.trim() || ''
    })).filter(x => x.task || x.expected);
  }

  function examToText(list){
    return normalizeExamQuestions(list).map(q => `${q[0] || ''} || ${(q[1] || []).join(' | ')} || ${(Number(q[2]) || 0) + 1}`).join('\n');
  }
  function textToExam(text){
    return normalizeExamQuestions(linesToArray(text).map((line, i) => {
      const parts = line.split('||').map(x => x.trim());
      const options = (parts[1] || '').split('|').map(x => x.trim()).filter(Boolean);
      while(options.length < 4) options.push(`Choix ${options.length + 1}`);
      const correct = Math.max(0, Math.min(3, (parseInt(parts[2] || '1', 10) || 1) - 1));
      return [parts[0] || `Question ${i+1}`, options.slice(0,4), correct];
    }));
  }
  function emptySubtitleItem(index){
    return {
      title:`Sous-titre ${index + 1}`,
      definition:'',
      example:'',
      children:'',
      visualTitle:'',
      visualSrc:'',
      visualDescription:'',
      visualExample:'',
      audioTitle:'',
      audioSrc:'',
      audioText:'',
      audioAr:'',
      kineType:'Question directe',
      kineQuestion:'',
      kineAnswer:'',
      kineCorrection:''
    };
  }
  function addSubtitleDraftRow(item, i){
    const data = Object.assign(emptySubtitleItem(i), item || {});
    const visuals = normalizeVisualList(data);
    const audios = normalizeAudioList(data);
    const kines = normalizeKineList(data);
    return `<article class="v176-add-subtitle-card v190-subtitle-draft" data-v176-subtitle-draft>
      <div class="v172-row-head"><strong>Sous-titre ${i+1}</strong><button type="button" class="v172-delete" data-v176-delete-subtitle-row>Supprimer</button></div>
      <label class="v172-field"><span>Nom du sous-titre</span><input data-add-field="title" value="${attr(data.title)}" placeholder="Ex. Notion de réseau"></label>
      <label class="v172-field"><span>Contenu / définition du sous-titre</span><textarea data-add-field="definition" rows="4" placeholder="Définition expliquée de façon simple...">${html(data.definition)}</textarea></label>
      <details class="v190-dropdown" open><summary>Style visuel — images ou vidéos</summary><div class="v190-repeat-list" data-v190-visual-list>${(visuals.length?visuals:[{}]).map(visualMultiRow).join('')}</div><button type="button" class="btn secondary" data-v190-add-visual>+ Ajouter une image / vidéo</button></details>
      <details class="v190-dropdown"><summary>Style auditif — texte lu automatiquement</summary><div class="v190-repeat-list" data-v190-audio-list>${(audios.length?audios:[{}]).map(audioMultiRow).join('')}</div><button type="button" class="btn secondary" data-v190-add-audio>+ Ajouter audio / vidéo</button></details>
      <details class="v190-dropdown"><summary>Style kinesthésique — plusieurs exercices</summary><div class="v190-repeat-list" data-v190-kine-list>${(kines.length?kines:[{}]).map(kineMultiRow).join('')}</div><button type="button" class="btn secondary" data-v190-add-kine>+ Ajouter un exercice</button></details>
    </article>`;
  }
  function collectAddSubtitleRows(){
    return $all('[data-v176-subtitle-draft]').map((row, i) => {
      const visualItems = collectVisualMulti(row);
      const audioItems = collectAudioMulti(row);
      const kineExercises = collectKineMulti(row);
      const v0 = visualItems[0] || {}, a0 = audioItems[0] || {}, k0 = kineExercises[0] || {};
      return {
        title: $('[data-add-field="title"]', row)?.value.trim() || `Sous-titre ${i+1}`,
        definition: $('[data-add-field="definition"]', row)?.value || '',
        example: $('[data-add-field="example"]', row)?.value || '',
        children: $('[data-add-field="children"]', row)?.value || '',
        visualItems, audioItems, kineExercises,
        visualTitle: v0.title || '', visualSrc: v0.src || '', visualDescription: v0.description || '', visualExample: v0.example || '', visualAction: v0.action || '', visualRemember: v0.remember || '',
        audioTitle: a0.title || '', audioSrc: a0.src || '', audioText: a0.text || '', audioAr: a0.ar || '',
        kineType: k0.type || 'Question directe', kineQuestion: k0.question || '', kineOptions: k0.options || '', kinePairs: k0.pairs || '', kineSteps: k0.steps || '', kineAnswer: k0.answer || '', kineCorrection: k0.correction || ''
      };
    }).filter(x => x.title || x.definition || x.example || x.visualItems.length || x.audioItems.length || x.kineExercises.length);
  }
  function saveActive(){
    const unit = unitById($('#v172UnitSelect')?.value || activeUnitId);
    const msg = $('#v172Message');
    if(!unit) return;
    let payload = {};
    try{
      if(activeTab === 'general'){
        payload = {
          title: $('#v172Title')?.value.trim() || unit.title || '',
          short: $('#v172Short')?.value.trim() || '',
          competence: $('#v172Competence')?.value.trim() || '',
          duration: $('#v172Duration')?.value.trim() || '',
          intro: $('#v172Intro')?.value || '',
          officialResources: linesToArray($('#v172Resources')?.value || '')
        };
      }else if(activeTab === 'dictionary'){
        payload = {dictionary: collectDictionaryRows()};
      }else if(activeTab === 'subtitles'){
        const existingItems = fullContent(unit).subtitleItems || [];
        existingItems[activeSubtitleIndex] = collectActiveSubtitle();
        payload = {subtitleItems: existingItems};
      }else if(activeTab === 'mindmap'){
        payload = {mindmapBranches: collectBranchRows()};
      }else if(activeTab === 'visual'){
        payload = {visualItems: collectVisualRows()};
      }else if(activeTab === 'audio'){
        payload = {audioItems: collectAudioRows()};
      }else if(activeTab === 'kine'){
        payload = {kineQuestions: collectKineRows()};
      }else if(activeTab === 'integration'){
        payload = {scenario: $('#v172Scenario')?.value || '', integrationTasks: collectTaskRows()};
      }else if(activeTab === 'exam'){
        payload = {examQuestions: collectExamRows()};
      }else if(activeTab === 'json'){
        const parsed = JSON.parse($('#v172Json')?.value || '{}');
        writeJson(keyFor(unit), parsed);
        applyContentToUnits();
        if(msg){ msg.className='v172-message ok'; msg.textContent='JSON enregistré avec succès.'; }
        setTimeout(()=>renderTeacherArea(unit.id, activeTab), 500);
        return;
      }
      if(saveContent(unit, payload) === false) throw new Error('storage');
      if(msg){ msg.className='v172-message ok'; msg.textContent='Modification enregistrée avec succès.'; }
      setTimeout(()=>renderTeacherArea(unit.id, activeTab), 500);
    }catch(e){
      if(msg){ msg.className='v172-message ko'; msg.textContent='Erreur : vérifie les données saisies.'; }
    }
  }
  function saveModifyPanel(){
    const unit = unitById($('#v172UnitSelect')?.value || activeUnitId);
    const msg = $('#v176ModifyMsg');
    if(!unit) return;
    const items = (fullContent(unit).subtitleItems || []).slice();
    if(document.querySelector('[data-v175-subtitle-editor]')) items[activeSubtitleIndex] = collectActiveSubtitle();
    const payload = {
      title: $('#v176EditUnitTitle')?.value.trim() || unit.title || '',
      short: $('#v176EditUnitShort')?.value.trim() || '',
      duration: $('#v176EditUnitDuration')?.value.trim() || '',
      competence: $('#v176EditUnitCompetence')?.value.trim() || '',
      intro: $('#v176EditUnitIntro')?.value || '',
      schoolYear: $('#v176EditUnitYear')?.value || unit.schoolYear || '1ac',
      subtitleItems: items,
      mindmapBranches: collectBranchRows(),
      dictionary: collectDictionary($('#v176EditDictionary')?.value || ''),
      scenario: $('#v176EditScenario')?.value || '',
      integrationTasks: collectIntegrationCardRows('#v176EditIntegrationTasks').length ? collectIntegrationCardRows('#v176EditIntegrationTasks') : textToTasks($('#v176EditTasks')?.value || ''),
      examQuestions: textToExam($('#v176EditExam')?.value || '')
    };
    if(saveContent(unit, payload) === false){
      if(msg){ msg.className = 'v172-message ko'; msg.textContent = 'Erreur : stockage plein. Les audios/vidéos sont maintenant sauvegardés dans IndexedDB ; réimporte le média puis réessaie.'; }
      return;
    }
    if(msg){ msg.className = 'v172-message ok'; msg.textContent = 'Modifications enregistrées.'; }
    setTimeout(()=>renderTeacherArea(unit.id, 'subtitles'), 500);
  }

  function resetUnit(){
    const unit = unitById($('#v172UnitSelect')?.value || activeUnitId);
    if(!unit) return;
    localStorage.removeItem(keyFor(unit));
    const original = originalUnit(unit.id);
    if(original){
      Object.keys(unit).forEach(k => delete unit[k]);
      Object.assign(unit, clone(original));
    }
    applyContentToUnits();
    renderTeacherArea(unit.id, activeTab);
  }
  function appendRow(type){
    if(type === 'dictionary') $('#v172DictionaryRows')?.insertAdjacentHTML('beforeend', dictionaryRow(['Nouveau mot',''], $all('[data-v172-row="dictionary"]').length));
    if(type === 'subtitle'){
      const unit = unitById($('#v172UnitSelect')?.value || activeUnitId);
      const content = fullContent(unit);
      const items = Array.isArray(content.subtitleItems) ? content.subtitleItems.slice() : [];
      items.push({title:`Sous-titre ${items.length + 1}`, definition:'', example:'', children:'', visualTitle:'', visualSrc:'', visualDescription:'', visualExample:'', audioTitle:'', audioSrc:'', audioText:'', audioAr:'', kineType:'Question directe', kineQuestion:'', kineAnswer:'', kineCorrection:''});
      activeSubtitleIndex = items.length - 1;
      saveContent(unit, {subtitleItems: items});
      renderTeacherArea(unit.id, 'subtitles');
      return;
    }
    if(type === 'branch') $('#v172Branches')?.insertAdjacentHTML('beforeend', branchRow({title:'Nouvelle branche', definition:'', example:'', children:[]}, $all('[data-v172-row="branch"]').length));
    if(type === 'visual') $('#v172VisualItems')?.insertAdjacentHTML('beforeend', visualRow({title:'Nouveau média', src:'', description:'', example:''}, $all('[data-v172-row="visual"]').length));
    if(type === 'audio') $('#v172AudioItems')?.insertAdjacentHTML('beforeend', audioRow({title:'Nouvel audio', src:'', text:'', ar:''}, $all('[data-v172-row="audio"]').length));
    if(type === 'kine') $('#v172KineQuestions')?.insertAdjacentHTML('beforeend', kineRow({type:'Question directe', question:'', answer:'', correction:''}, $all('[data-v172-row="kine"]').length));
    if(type === 'task') $('#v172IntegrationTasks')?.insertAdjacentHTML('beforeend', integrationRow({task:'', expected:''}, $all('[data-v172-row="task"]').length));
    if(type === 'exam') $('#v172ExamQuestions')?.insertAdjacentHTML('beforeend', examRow(['Nouvelle question',['Choix 1','Choix 2','Choix 3','Choix 4'],0], $all('[data-v172-row="exam"]').length));
  }


  function showUnitCreateStatus(success, text){
    const msg = $('#v176CreateMsg');
    const message = String(text || '').trim();
    if(msg){
      msg.className = success ? 'v172-message ok v194-create-message' : 'v172-message ko v194-create-message';
      msg.textContent = message;
      try{ msg.scrollIntoView({behavior:'smooth', block:'center'}); }catch(e){}
    }
    let toast = document.getElementById('v194CreateStatusToast');
    if(!toast){
      toast = document.createElement('div');
      toast.id = 'v194CreateStatusToast';
      toast.setAttribute('role','status');
      toast.setAttribute('aria-live','polite');
      document.body.appendChild(toast);
    }
    toast.className = success ? 'v194-create-toast ok show' : 'v194-create-toast ko show';
    toast.innerHTML = `<strong>${success ? 'Succès' : 'Erreur'}</strong><span>${html(message)}</span>`;
    clearTimeout(window.__epiV194ToastTimer);
    window.__epiV194ToastTimer = setTimeout(() => { toast.classList.remove('show'); }, success ? 6500 : 9000);
  }

  function ensureUnitVisibleForStudent(unit){
    if(!unit || !unit.id) return false;
    unit.customUnit = true;
    unit.hiddenFromStudent = false;
    forgetDeletedUnit(unit.id);
    if(typeof UNITS !== 'undefined' && Array.isArray(UNITS)){
      const existing = UNITS.find(u => u && u.id === unit.id);
      if(existing) Object.assign(existing, unit, {customUnit:true, hiddenFromStudent:false});
      else UNITS.push(unit);
    }
    const keys = [CUSTOM_UNITS_KEY, 'epi_v183_custom_units_visible', 'epi_v181_custom_units_visible'];
    let storageOk = true;
    keys.forEach(key => {
      const current = readJson(key, []);
      const rows = Array.isArray(current) ? current.filter(u => u && u.id !== unit.id) : [];
      rows.push(Object.assign({}, clone(unit), {customUnit:true, hiddenFromStudent:false}));
      if(writeJson(key, rows) === false) storageOk = false;
    });
    try{ window.EPI_SESSION_CUSTOM_UNITS_V183 = readJson('epi_v183_custom_units_visible', []); }catch(e){}
    try{
      if(window.EPI_CUSTOM_UNITS_V183 && typeof window.EPI_CUSTOM_UNITS_V183.sync === 'function') window.EPI_CUSTOM_UNITS_V183.sync();
    }catch(e){}
    try{ ensureCustomUnits(); }catch(e){}
    try{ applyContentToUnits(); }catch(e){}
    let inTeacherList = false;
    let inStudentList = false;
    try{ inTeacherList = units().some(u => u && u.id === unit.id && u.hiddenFromStudent !== true); }catch(e){}
    try{
      if(window.EPI_V191_UNITS && typeof window.EPI_V191_UNITS.visibleUnits === 'function'){
        inStudentList = window.EPI_V191_UNITS.visibleUnits().some(u => u && u.id === unit.id && u.hiddenFromStudent !== true);
      }else{
        inStudentList = inTeacherList;
      }
    }catch(e){ inStudentList = inTeacherList; }
    return !!(storageOk && inTeacherList && inStudentList && !isDeletedUnit(unit.id));
  }

  function createUnitFromForm(){
    const title = $('#v176NewUnitTitle')?.value.trim() || $('#v175NewUnitTitle')?.value.trim() || '';
    const msg = $('#v176CreateMsg');
    if(msg){ msg.className = 'v172-message v194-create-message'; msg.textContent = ''; }
    if(!title){ showUnitCreateStatus(false, 'Erreur : ajoute d’abord le nom de l’unité.'); return false; }
    let subtitleItems = collectAddSubtitleRows();
    if(!subtitleItems.length){
      subtitleItems = [Object.assign(emptySubtitleItem(0), {
        title: 'Sous-titre 1',
        definition: $('#v176NewUnitIntro')?.value.trim() || '',
        visualTitle: 'Style visuel',
        audioTitle: 'Style auditif',
        kineQuestion: 'Activité pratique à compléter'
      })];
    }
    const unit = makeDefaultUnit({
      title,
      short: $('#v176NewUnitShort')?.value.trim() || '',
      duration: $('#v176NewUnitDuration')?.value.trim() || '6 h',
      competence: $('#v176NewUnitCompetence')?.value.trim() || '',
      intro: $('#v176NewUnitIntro')?.value.trim() || '',
      schoolYear: $('#v176NewUnitYear')?.value || '1ac'
    });
    unit.hiddenFromStudent = false;
    if(!UNITS.some(u => u && u.id === unit.id)) UNITS.push(unit);
    const savedOk = saveContent(unit, {
      title,
      short: $('#v176NewUnitShort')?.value.trim() || '',
      duration: $('#v176NewUnitDuration')?.value.trim() || '6 h',
      competence: $('#v176NewUnitCompetence')?.value.trim() || '',
      intro: $('#v176NewUnitIntro')?.value.trim() || '',
      schoolYear: $('#v176NewUnitYear')?.value || '1ac',
      subtitleItems,
      mindmapBranches: collectBranchRows(),
      dictionary: collectDictionary($('#v176NewDictionary')?.value || ''),
      scenario: $('#v176NewScenario')?.value || $('#v176NewUnitIntro')?.value || '',
      integrationTasks: collectIntegrationCardRows('#v176NewIntegrationTasks').length ? collectIntegrationCardRows('#v176NewIntegrationTasks') : textToTasks($('#v176NewTasks')?.value || ''),
      examQuestions: textToExam($('#v176NewExam')?.value || '')
    });
    if(savedOk === false){
      showUnitCreateStatus(false, 'Erreur : stockage plein. Les images sont compressées et les audios/vidéos sont stockés séparément ; réimporte le média puis réessaie.');
      return false;
    }
    persistCustomUnits();
    try{
      const rows = (readJson('epi_v183_custom_units_visible', []) || []).filter(u => u && u.id !== unit.id);
      rows.push(Object.assign({}, clone(unit), {customUnit:true, hiddenFromStudent:false, schoolYear: unit.schoolYear || ($('#v176NewUnitYear')?.value || '1ac')}));
      writeJson('epi_v183_custom_units_visible', rows);
      writeJson('epi_v181_custom_units_visible', rows);
      writeJson(CUSTOM_UNITS_KEY, rows);
      if(window.EPI_CUSTOM_UNITS_V183 && typeof window.EPI_CUSTOM_UNITS_V183.sync === 'function') window.EPI_CUSTOM_UNITS_V183.sync();
    }catch(e){}
    const syncOk = ensureUnitVisibleForStudent(unit);
    if(syncOk){
      showAddUnitForm = false;
      activePanel = 'modify';
      activeUnitId = unit.id;
      activeSubtitleIndex = 0;
      showUnitCreateStatus(true, 'Unité ajoutée avec succès. Elle apparaît maintenant dans l’espace élève.');
      setTimeout(()=>renderTeacherArea(unit.id, 'subtitles'), 1200);
    }else{
      showUnitCreateStatus(false, 'Erreur : l’unité n’apparaît pas dans l’espace élève. Vérifie que le stockage du navigateur n’est pas plein, puis réessaie.');
    }
    return syncOk;
  }
  function deleteActiveSubtitle(){
    const unit = unitById($('#v172UnitSelect')?.value || activeUnitId);
    if(!unit) return;
    const items = (fullContent(unit).subtitleItems || []).slice();
    if(items.length <= 1){
      items[0] = {title:'Sous-titre 1', definition:'', example:'', children:'', visualTitle:'', visualSrc:'', visualDescription:'', visualExample:'', audioTitle:'', audioSrc:'', audioText:'', audioAr:'', kineType:'Question directe', kineQuestion:'', kineAnswer:'', kineCorrection:''};
      activeSubtitleIndex = 0;
    }else{
      items.splice(activeSubtitleIndex, 1);
      if(activeSubtitleIndex >= items.length) activeSubtitleIndex = items.length - 1;
    }
    saveContent(unit, {subtitleItems: items});
    renderTeacherArea(unit.id, 'subtitles');
  }

  function deleteUnit(unitId){
    const unit = unitById(unitId) || (Array.isArray(UNITS) ? UNITS.find(u => u && u.id === unitId) : null);
    if(!unit || !unit.id) return;
    const label = cleanTitle(unit.title || unit.id);
    if(!confirm(`Voulez-vous vraiment supprimer l’unité « ${label} » ? Elle ne paraîtra plus dans l’espace élève.`)) return;
    try{ localStorage.removeItem(keyFor(unit)); }catch(e){}
    rememberDeletedUnit(unit.id);
    try{
      ['epi_v175_custom_units','epi_v183_custom_units_visible','epi_v181_custom_units_visible'].forEach(key => {
        const arr = readJson(key, []).filter(u => u && u.id !== unit.id);
        writeJson(key, arr);
      });
      if(unit.customUnit) persistCustomUnits();
    }catch(e){}
    const index = Array.isArray(UNITS) ? UNITS.findIndex(u => u && u.id === unit.id) : -1;
    if(index >= 0) UNITS.splice(index, 1);
    if(typeof state !== 'undefined' && state && state.unitId === unit.id){
      state.unitId = (units()[0] && units()[0].id) || '';
      state.page = 'intro';
      state.lessonIndex = 0;
    }
    activePanel = 'units';
    activeUnitId = (units()[0] && units()[0].id) || '';
    try{
      if(window.EPI_CUSTOM_UNITS_V183 && typeof window.EPI_CUSTOM_UNITS_V183.sync === 'function') window.EPI_CUSTOM_UNITS_V183.sync();
    }catch(e){}
    renderTeacherArea(activeUnitId, 'general');
  }
  function handleFileInput(input){
    const file = input.files && input.files[0];
    if(!file) return;
    const row = input.closest('[data-v172-row]');
    const srcInput = row && $('[data-field="src"]', row);
    readFileAsOptimizedDataUrl(file, function(result){
      if(!result) return;
      if(srcInput) srcInput.value = result;
      const preview = row && $('.v172-preview-box', row);
      if(preview && (input.dataset.v172File === 'image' || input.dataset.v172File === 'media')) preview.innerHTML = imagePreviewTag(result, file.name || 'Aperçu');
      hydrateMediaRefs(row || document);
      if(input.dataset.v172File === 'audio'){
        const preview = row && row.querySelector('.v194-media-preview');
        if(preview) preview.innerHTML = mediaControlTag(result, file.name);
        else row.insertAdjacentHTML('beforeend', mediaControlTag(result, file.name));
        hydrateMediaRefs(row || document);
      }
    });
  }

  function findUnitForLesson(lesson){
    // v207 : priorité à l’unité actuellement ouverte. Avant, la recherche par titre pouvait
    // récupérer une ancienne unité si deux sous-titres avaient le même nom.
    try{
      if(typeof state !== 'undefined' && state && state.unitId){
        const current = units().find(u => u && u.id === state.unitId);
        if(current && Array.isArray(current.lessons) && current.lessons.some(l => l === lesson || (l && lesson && l.title === lesson.title))) return current;
      }
    }catch(e){}
    if(!lesson) return null;
    return units().find(unit => Array.isArray(unit.lessons) && unit.lessons.some(l => l === lesson || (l && lesson && l.title === lesson.title))) || null;
  }
  function renderCustomMindmap(unit, content){
    const root = cleanTitle((content && content.title) || (unit && unit.title) || 'Unité');
    const branches = Array.isArray(content && content.mindmapBranches) ? content.mindmapBranches : [];
    if(!branches.length) return '';
    const first = branches[0] || {};
    const cards = branches.map((branch, index) => {
      const children = normalizeMindmapChildren(branch.children);
      return `<button type="button" class="v207-map-branch ${index===0?'active':''}" data-v173-branch-title="${attr(branch.title || `Branche ${index+1}`)}" data-v173-branch-definition="${attr(branch.definition || '')}" data-v173-branch-example="${attr(branch.example || '')}" data-v175-branch-children="${attr(childDetailsText(children))}" data-v175-branch-children-html="${attr(childDetailsHtml(children))}"><strong>${html(branch.title || `Branche ${index+1}`)}</strong>${branch.definition ? `<span>${html(branch.definition)}</span>` : ''}${children.length ? `<em>${children.map(item => html(item.title || '')).join(' • ')}</em>` : ''}</button>`;
    }).join('');
    return `<article class="v207-mindmap" data-v173-student-mindmap>
      <div class="v207-map-detail v173-student-map-detail" id="v173StudentMapDetail"><div class="v157-selected-branch">Sous-titre : ${html(first.title || root)}</div><h4>${html(first.title || root)}</h4><p><strong>Définition :</strong> ${html(first.definition || '')}</p><p><strong>Exemple :</strong> ${html(first.example || '')}</p><div><strong>Sous-fils :</strong>${childDetailsHtml(first.children)}</div></div>
      <div class="v207-map-core"><div class="v207-map-root">${html(root)}<span>Nœud central</span></div><div class="v207-map-branches">${cards}</div></div>
    </article>`;
  }
  function visualItemsForDisplayedLesson(unit, lesson, content){
    const lessonTitle = cleanTitle(lesson && lesson.title || '');
    const subtitleItems = Array.isArray(content && content.subtitleItems) ? content.subtitleItems : [];
    let found = subtitleItems.find(item => cleanTitle(item && item.title || '').toLowerCase() === lessonTitle.toLowerCase());
    if(!found && unit && Array.isArray(unit.lessons)){
      const idx = unit.lessons.findIndex(l => l === lesson || cleanTitle(l && l.title || '').toLowerCase() === lessonTitle.toLowerCase());
      if(idx >= 0) found = subtitleItems[idx];
    }
    const local = normalizeVisualList(found || {});
    return local.length ? local : (content.visualItems || []);
  }
  function audioItemsForDisplayedLesson(unit, lesson, content){
    const lessonTitle = cleanTitle(lesson && lesson.title || '');
    const subtitleItems = Array.isArray(content && content.subtitleItems) ? content.subtitleItems : [];
    let found = subtitleItems.find(item => cleanTitle(item && item.title || '').toLowerCase() === lessonTitle.toLowerCase());
    if(!found && unit && Array.isArray(unit.lessons)){
      const idx = unit.lessons.findIndex(l => l === lesson || cleanTitle(l && l.title || '').toLowerCase() === lessonTitle.toLowerCase());
      if(idx >= 0) found = subtitleItems[idx];
    }
    const local = normalizeAudioList(found || {});
    return local.length ? local : (content.audioItems || []);
  }

  function renderCustomVisual(unit, lesson, content){
    const items = visualItemsForDisplayedLesson(unit, lesson, content);
    const cards = items.map((item, i) => {
      const label = isVideoSource(item.src || '') ? 'Vidéo' : 'Image';
      return `<figure class="media-card image-description-card v172-student-visual-card clickable-visual-card" data-clickable-visual tabindex="0" role="button" aria-expanded="false">
        <div class="visual-definition-top"><span>${label} ${i+1}</span><strong>${html(item.title || label)}</strong><p>${html(item.description || '')}</p></div>
        ${item.src ? `<div class="visual-click-zone">${imagePreviewTag(item.src, item.title || label)}<span class="visual-click-hint">Lire l’exemple</span></div>` : ''}
        <div class="visual-example-box" aria-hidden="true"><h5>Exemple / action</h5><p>${html(item.example || 'Exemple à compléter dans l’espace enseignant.')}</p></div>
      </figure>`;
    }).join('');
    const mindmap = renderCustomMindmap(unit, content);
    return `<section class="panel visual-panel v172-student-custom"><div class="visual-layout"><div class="style-header clean-style-header"><div><span class="mini-pill">Style visuel</span><h3>${html(lesson && lesson.title || unit.title)}</h3></div><p class="subtle">Contenu visuel personnalisé depuis l’espace enseignant.</p></div><div class="visual-gallery image-only-grid clickable-visual-grid">${cards || '<p class="subtle">Aucun média personnalisé.</p>'}</div>${mindmap}</div></section>`;
  }
  function renderCustomAudio(unit, lesson, content){
    const items = audioItemsForDisplayedLesson(unit, lesson, content);
    const cards = items.map((item, i) => {
      const media = item.src ? `<div class="v207-student-audio-media">${mediaControlTag(item.src, item.title || 'Média auditif')}</div>` : '';
      const text = item.text || '';
      const ar = item.ar || '';
      return `<article class="v172-audio-student-card v207-audio-student-card"><span class="mini-pill">Audio ${i+1}</span><h4>${html(item.title || 'Audio')}</h4>${media}<p class="v204-audio-script">${html(text || ar || 'Aucun texte écrit. Utilise le lecteur média ci-dessus si un fichier a été ajouté.')}</p><div class="audio-row"><button class="btn small" data-speak="fr" data-text="${attr(text || item.title || '')}">▶ Écouter le texte FR</button><button class="btn green small" data-speak="ar" data-text="${attr(ar || text || item.title || '')}">▶ استمع للنص</button><button class="btn ghost small stop-audio-btn" data-action="stop-speech">■ Arrêter</button></div></article>`;
    }).join('');
    const allText = items.map(x => x.text || '').filter(Boolean).join(' ');
    const allAr = items.map(x => x.ar || x.text || '').filter(Boolean).join(' ');
    return `<section class="panel audio-card v172-student-custom"><div class="style-header clean-style-header"><div><span class="mini-pill">Style auditif</span><h3>${html(lesson && lesson.title || unit.title)}</h3></div><p class="subtle">Texte lu par synthèse vocale + possibilité de lecteur audio/vidéo stocké sur le serveur.</p></div><div class="audio-row master-audio-row"><button class="btn" data-speak="fr" data-text="${attr(allText)}">▶ Tout écouter FR</button><button class="btn green" data-speak="ar" data-text="${attr(allAr)}">▶ Tout écouter AR</button><button class="btn ghost small stop-audio-btn" data-action="stop-speech">■ Arrêter</button></div><div class="v172-audio-student-grid">${cards || '<p class="subtle">Aucun contenu auditif personnalisé.</p>'}</div></section>`;
  }
  function renderCustomKine(unit, lesson, content){
    const items = content.kineQuestions || [];
    const cards = items.map((item, i) => `<article class="game v172-kine-student-card"><span class="mini-pill">${html(item.type || 'Question')} ${i+1}</span><h4>${html(item.question || 'Question')}</h4><div class="v172-kine-answer" hidden><strong>Correction :</strong><p>${html(item.correction || item.answer || 'Correction à compléter.')}</p></div><button type="button" class="btn secondary" data-v172-reveal>Afficher la correction</button></article>`).join('');
    return `<section class="panel kine-panel v172-student-custom"><div class="style-header clean-style-header"><div><span class="mini-pill">Style kinesthésique</span><h3>${html(lesson && lesson.title || unit.title)}</h3></div><p class="subtle">Questions personnalisées depuis l’espace enseignant.</p></div><div class="v172-kine-student-grid">${cards || '<p class="subtle">Aucune question personnalisée.</p>'}</div></section>`;
  }
  function patchStudentPanels(){
    if(window.__v172PanelsPatched) return;
    window.__v172PanelsPatched = true;
    const prevVisual = (typeof visualPanel === 'function') ? visualPanel : null;
    const prevAudio = (typeof audioPanel === 'function') ? audioPanel : null;
    const prevKine = (typeof kinePanel === 'function') ? kinePanel : null;
    if(prevVisual){
      visualPanel = function(lesson){
        const unit = findUnitForLesson(lesson);
        const saved = unit ? readJson(keyFor(unit), null) : null;
        if(unit && saved && (Array.isArray(saved.visualItems) || Array.isArray(saved.mindmapBranches) || Array.isArray(saved.subtitleItems))) return renderCustomVisual(unit, lesson, fullContent(unit));
        return prevVisual(lesson);
      };
    }
    if(prevAudio){
      audioPanel = function(lesson){
        const unit = findUnitForLesson(lesson);
        const saved = unit ? readJson(keyFor(unit), null) : null;
        if(unit && saved && (Array.isArray(saved.audioItems) || Array.isArray(saved.subtitleItems))) return renderCustomAudio(unit, lesson, fullContent(unit));
        return prevAudio(lesson);
      };
    }
    if(prevKine){
      kinePanel = function(lesson){
        const unit = findUnitForLesson(lesson);
        const saved = unit ? readJson(keyFor(unit), null) : null;
        if(unit && unit.customUnit && saved && Array.isArray(saved.kineQuestions)) return renderCustomKine(unit, lesson, fullContent(unit));
        return prevKine(lesson);
      };
    }
  }

  function injectStyle(){
    if(document.getElementById('v172-style')) return;
    const style = document.createElement('style');
    style.id = 'v172-style';
    style.textContent = `
      .v172-page{display:grid;gap:18px;padding:22px}.v172-hero,.v172-card{background:rgba(255,255,255,.94);border:1px solid rgba(15,23,42,.08);border-radius:24px;padding:18px;box-shadow:0 18px 42px rgba(15,23,42,.08)}
      .v172-hero,.v172-card-head{display:flex;justify-content:space-between;gap:14px;align-items:flex-start;flex-wrap:wrap}.v172-hero h1,.v172-card h2{margin:.25rem 0}.v172-card-head p,.v172-help,.v172-scenario-preview p{color:#64748b;line-height:1.55}.v172-table-wrap{overflow:auto;border-radius:18px;border:1px solid rgba(15,23,42,.08);margin-top:12px}.v172-results-table{min-width:760px;width:100%}
      .v172-preview-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:12px;margin-top:12px}.v172-preview-grid article,.v172-scenario-preview{border:1px solid rgba(15,23,42,.08);border-radius:18px;background:#fff;padding:14px}.v172-preview-grid strong,.v172-preview-grid span{display:block}.v172-preview-grid span{color:#2563eb;font-weight:900;margin:.25rem 0}
      .v172-unit-select{max-width:620px}.v172-field{display:grid;gap:7px;font-weight:850;color:#1e3a8a}.v172-field input,.v172-field select,.v172-field textarea{width:100%;box-sizing:border-box;border:1px solid rgba(15,23,42,.16);border-radius:15px;padding:11px 12px;font:inherit;line-height:1.5;background:#fff;color:#0f172a}.v172-field textarea{resize:vertical}.v172-grid-2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}.v172-tabs{display:flex;gap:8px;flex-wrap:wrap;margin:14px 0}.v172-tab{border:1px solid rgba(37,99,235,.22);background:#fff;border-radius:999px;padding:10px 13px;font-weight:900;cursor:pointer}.v172-tab.active{background:linear-gradient(135deg,rgba(59,130,246,.18),rgba(16,185,129,.12));border-color:rgba(37,99,235,.55)}
      .v172-editor-body{display:grid;gap:14px}.v172-list{display:grid;gap:12px}.v172-row{border:1px solid rgba(15,23,42,.09);border-radius:20px;padding:14px;background:#fff;box-shadow:0 10px 24px rgba(15,23,42,.05)}.v172-row-head{display:flex;justify-content:space-between;align-items:center;gap:10px;margin-bottom:10px}.v172-delete{border:0;background:#fee2e2;color:#991b1b;border-radius:999px;padding:8px 12px;font-weight:900;cursor:pointer}.v172-actions{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:14px}.v172-message{font-weight:900}.v172-message.ok{color:#047857}.v172-message.ko{color:#b91c1c}.v172-json{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;font-size:.92rem}
      .epi-mindmap-children-form{display:grid;gap:10px;border:1px dashed rgba(124,58,237,.28);border-radius:18px;background:linear-gradient(180deg,#fbf7ff,#ffffff);padding:12px;margin-top:8px}.epi-mindmap-child-row{border:1px solid rgba(124,58,237,.16);border-radius:16px;background:#fff;padding:11px;box-shadow:0 8px 18px rgba(76,29,149,.05)}.v207-child-details{display:grid;gap:7px;margin:8px 0 0;padding-left:18px}.v207-child-details li strong{display:block;color:#1e1b4b}.v207-child-details li span{display:block;color:#475569;line-height:1.45}
      .v172-media-row{display:grid;grid-template-columns:180px 1fr;gap:12px}.v172-preview-box{min-height:130px;border-radius:18px;background:rgba(59,130,246,.06);border:1px dashed rgba(59,130,246,.35);display:grid;place-items:center;text-align:center;overflow:hidden}.v172-preview-box img{width:100%;height:100%;object-fit:contain}.v172-media-fields{display:grid;gap:10px}.v172-audio-row audio,.v172-audio-student-card audio{width:100%;margin:8px 0}.v172-audio-student-grid,.v172-kine-student-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:12px}.v172-audio-student-card,.v172-kine-student-card{border:1px solid rgba(15,23,42,.08);border-radius:18px;background:#fff;padding:14px}.v172-kine-answer{border-radius:14px;background:rgba(16,185,129,.08);border:1px solid rgba(16,185,129,.18);padding:10px;margin:10px 0}
      .v175-unit-title-row{display:flex;align-items:center;justify-content:space-between;gap:10px}.v175-unit-creator,.v175-style-block{border:1px solid rgba(15,23,42,.08);border-radius:22px;background:linear-gradient(180deg,#ffffff,#f8fbff);padding:16px;box-shadow:0 12px 28px rgba(15,23,42,.05);margin-bottom:12px}.v175-style-title{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}.v175-style-title h4{margin:.25rem 0}.v175-subtitle-nav{display:flex;flex-wrap:wrap;gap:10px}.v175-subtitle-chip{border:1px solid rgba(37,99,235,.18);background:#fff;border-radius:999px;padding:10px 14px;font-weight:900;cursor:pointer;box-shadow:0 10px 22px rgba(37,99,235,.08)}.v175-subtitle-chip.active{background:linear-gradient(135deg,#dbeafe,#dcfce7);border-color:rgba(37,99,235,.4);color:#1e3a8a}.v175-subtitle-row{background:linear-gradient(180deg,#ffffff,#f9fbff)}
      .v175-student-mindmap{display:grid;gap:16px;margin-top:16px}.v175-mindmap-stage{position:relative;max-width:860px;min-height:590px;margin:0 auto;border-radius:28px;padding:12px;background:radial-gradient(circle at center,rgba(219,234,254,.9),rgba(255,255,255,.95) 55%,rgba(240,249,255,.95));border:1px solid rgba(59,130,246,.16);box-shadow:inset 0 1px 0 rgba(255,255,255,.7),0 18px 42px rgba(30,64,175,.08)}.v178-mindmap-stage{max-width:740px;min-height:500px;padding:10px;background:radial-gradient(circle at center,rgba(219,234,254,.75),rgba(255,255,255,.96) 60%,rgba(239,246,255,.95));border:1px solid rgba(96,165,250,.22)}.v175-mindmap-svg{position:absolute;inset:0;width:100%;height:100%}.v175-branches-lines path{fill:none;stroke:#60a5fa;stroke-width:2.1;opacity:.92;stroke-linecap:round}.v175-mindmap-center{position:absolute;left:50%;top:50%;transform:translate(-50%,-50%);width:168px;min-height:168px;border-radius:999px;background:linear-gradient(135deg,#2563eb,#1d4ed8);color:#fff;display:grid;place-items:center;text-align:center;box-shadow:0 18px 42px rgba(37,99,235,.28);padding:18px;z-index:2}.v178-mindmap-center{width:126px;min-height:126px;padding:12px;box-shadow:0 14px 34px rgba(37,99,235,.26)}.v175-center-title{display:block;font-weight:900;font-size:1.05rem;line-height:1.35}.v175-mindmap-center small{display:block;opacity:.92;margin-top:8px}
      .v175-mindmap-node{position:absolute;z-index:3;border:1px solid rgba(59,130,246,.18);background:#fff;border-radius:18px;padding:8px 10px;text-align:left;box-shadow:0 12px 28px rgba(15,23,42,.08);cursor:pointer;transition:transform .18s ease, box-shadow .18s ease, border-color .18s ease}.v175-mindmap-node strong{display:block;color:#0f172a;font-size:.82rem;line-height:1.28}.v175-node-sub{display:block;color:#475569;font-size:.70rem;margin-top:5px;line-height:1.28}.v175-mindmap-node:hover,.v175-mindmap-node.active{transform:translateY(-2px) scale(1.01);border-color:#2563eb;box-shadow:0 16px 38px rgba(37,99,235,.18)}

      .v176-teacher-page{display:grid;gap:18px}.v176-dashboard{display:grid;grid-template-columns:repeat(4,minmax(180px,1fr));gap:16px}.v176-dash-card{border:1px solid rgba(37,99,235,.16);background:linear-gradient(180deg,#fff,#f8fbff);border-radius:24px;padding:18px;text-align:left;cursor:pointer;box-shadow:0 18px 38px rgba(15,23,42,.07);display:grid;gap:9px;transition:transform .18s ease,box-shadow .18s ease,border-color .18s ease}.v176-dash-card:hover,.v176-dash-card.active{transform:translateY(-2px);border-color:rgba(37,99,235,.45);box-shadow:0 22px 46px rgba(37,99,235,.12)}.v176-dash-icon{width:48px;height:48px;border-radius:16px;display:grid;place-items:center;background:linear-gradient(135deg,#2563eb,#4f46e5);color:#fff;font-weight:1000;box-shadow:0 14px 28px rgba(37,99,235,.22)}.v176-dash-card strong{font-size:1.15rem;color:#0f172a}.v176-dash-card small{color:#64748b;line-height:1.5}.v176-panel,.v176-form-card{background:rgba(255,255,255,.96);border:1px solid rgba(15,23,42,.08);border-radius:26px;padding:18px;box-shadow:0 18px 42px rgba(15,23,42,.07)}.v176-panel-head{margin-bottom:14px}.v176-panel-head h2{margin:.25rem 0;color:#0f172a}.v176-panel-head p{margin:.25rem 0;color:#64748b;line-height:1.55}.v176-style-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin-top:12px}.v176-welcome-panel{min-height:160px;display:grid;place-items:center;text-align:center}.v176-unit-edit-card .v175-subtitle-nav{padding:12px;border-radius:18px;background:rgba(59,130,246,.06);border:1px solid rgba(59,130,246,.10)}.v176-unit-edit-card .v175-style-block{margin-top:12px}.v176-add-section{border:1px solid rgba(15,23,42,.08);background:linear-gradient(180deg,#fff,#f8fbff);border-radius:24px;padding:16px;margin:14px 0;display:grid;gap:12px}.v176-section-title{display:flex;align-items:center;gap:12px}.v176-section-title span{width:34px;height:34px;border-radius:12px;background:linear-gradient(135deg,#2563eb,#4f46e5);color:#fff;display:grid;place-items:center;font-weight:1000;box-shadow:0 12px 24px rgba(37,99,235,.18)}.v176-section-title h3{margin:0;color:#0f172a}.v176-add-subtitles{display:grid;gap:16px}.v176-add-subtitle-card{border:1px solid rgba(37,99,235,.13);background:#fff;border-radius:22px;padding:16px;box-shadow:0 12px 30px rgba(15,23,42,.06)}.v176-subtitle-styles{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:14px;margin-top:12px}.v176-add-subtitle-card .v175-style-block{margin:0;background:linear-gradient(180deg,#ffffff,#fbfdff)}.v186-browse-wrap{display:grid;gap:8px;border:1px dashed rgba(37,99,235,.35);border-radius:16px;background:linear-gradient(180deg,#f8fbff,#ffffff);padding:10px 12px;margin:8px 0}.v186-browse-title{font-weight:900;color:#1e3a8a}.v186-browse-btn{display:inline-flex;align-items:center;justify-content:center;gap:8px;width:max-content;max-width:100%;border:1px solid rgba(37,99,235,.28);border-radius:999px;background:linear-gradient(135deg,#2563eb,#4f46e5);color:#fff;padding:10px 14px;font-weight:1000;cursor:pointer;box-shadow:0 12px 24px rgba(37,99,235,.18)}.v186-browse-btn input{display:none}.v186-browse-wrap small{color:#64748b;line-height:1.35}.v186-browse-wrap.selected{border-color:rgba(16,185,129,.45);background:linear-gradient(180deg,#ecfdf5,#ffffff)}.v187-kine-builder{gap:12px}.v187-kine-form{border:1px solid rgba(15,23,42,.08);border-radius:16px;background:#fff;padding:10px;display:grid;gap:8px;margin-top:8px}.v187-kine-form h5{margin:0;color:#0f172a;font-size:.98rem}.v187-kine-form .v172-grid-2{gap:8px}
      .v184-units-list-panel{background:rgba(255,255,255,.96);border:1px solid rgba(15,23,42,.08);border-radius:26px;padding:18px;box-shadow:0 18px 42px rgba(15,23,42,.07)}.v184-units-table-wrap{overflow:auto;border-radius:18px;border:1px solid rgba(15,23,42,.08);background:#fff}.v184-units-table{width:100%;border-collapse:collapse;min-width:900px}.v184-units-table th,.v184-units-table td{padding:12px 14px;border-bottom:1px solid rgba(15,23,42,.08);text-align:left;vertical-align:middle}.v184-units-table th{background:linear-gradient(180deg,#f8fbff,#eef6ff);color:#1e3a8a;font-weight:1000}.v184-units-table tr.custom{background:linear-gradient(90deg,rgba(219,234,254,.55),rgba(255,255,255,.98))}.v184-units-table strong{display:block;color:#0f172a}.v184-units-table small{display:block;color:#64748b;line-height:1.35;margin-top:4px}.v184-unit-index{width:38px;height:38px;border-radius:14px;display:grid;place-items:center;background:linear-gradient(135deg,#2563eb,#4f46e5);color:#fff;font-weight:1000;box-shadow:0 12px 24px rgba(37,99,235,.18)}.v181-type-box{display:grid;gap:12px;border:1px solid rgba(14,165,233,.18);border-radius:22px;background:linear-gradient(180deg,#f0f9ff,#ffffff);padding:14px;margin:12px 0}.v181-type-box h3{margin:.25rem 0;color:#0f172a}.v181-type-box p{margin:.25rem 0;color:#64748b;line-height:1.5}.v181-type-buttons{display:flex;flex-wrap:wrap;gap:9px}.v181-type-buttons button,.v183-comparison-table button{border:1px solid rgba(14,165,233,.28);background:#fff;color:#075985;border-radius:999px;padding:9px 12px;font-weight:1000;cursor:pointer;box-shadow:0 10px 20px rgba(14,165,233,.08)}.v181-type-buttons button:hover,.v183-comparison-table button:hover{background:linear-gradient(135deg,#e0f2fe,#ecfdf5);border-color:rgba(14,165,233,.55)}.v183-comparison{display:none!important}.v183-comparison-head h4{margin:.25rem 0;color:#0f172a}.v183-comparison-table-wrap{overflow:auto;border-radius:14px;border:1px solid rgba(15,23,42,.08)}.v183-comparison-table{width:100%;border-collapse:collapse;min-width:720px}.v183-comparison-table th,.v183-comparison-table td{padding:10px 12px;border-bottom:1px solid rgba(15,23,42,.08);text-align:left;vertical-align:top}.v183-comparison-table th{background:#f8fafc;color:#1e3a8a}.v183-comparison-table small{display:block;color:#64748b;margin-top:4px;line-height:1.35}.v180-units-list{display:grid;grid-template-columns:repeat(auto-fit,minmax(240px,1fr));gap:12px;margin-top:14px}.v180-unit-mini-card{border:1px solid rgba(15,23,42,.08);border-radius:20px;background:linear-gradient(180deg,#fff,#f8fbff);padding:14px;display:grid;gap:12px;box-shadow:0 12px 28px rgba(15,23,42,.06)}.v180-unit-mini-card.custom{border-color:rgba(37,99,235,.24);background:linear-gradient(180deg,#eff6ff,#ffffff)}.v180-unit-mini-card h3{margin:.3rem 0;color:#0f172a}.v180-unit-mini-card p{margin:0;color:#64748b;line-height:1.45}.v179-accordion-card{display:grid;gap:14px}.v179-section-buttons{display:flex;flex-wrap:wrap;gap:10px;padding:12px;border:1px solid rgba(37,99,235,.12);background:linear-gradient(180deg,#f8fbff,#ffffff);border-radius:22px;box-shadow:inset 0 1px 0 rgba(255,255,255,.8)}.v179-section-btn{border:1px solid rgba(37,99,235,.22);background:#fff;color:#1e3a8a;border-radius:999px;padding:10px 14px;font-weight:1000;cursor:pointer;box-shadow:0 10px 22px rgba(37,99,235,.06);transition:transform .16s ease,box-shadow .16s ease,background .16s ease}.v179-section-btn:hover,.v179-section-btn.active{transform:translateY(-1px);background:linear-gradient(135deg,#dbeafe,#ecfdf5);border-color:rgba(37,99,235,.46);box-shadow:0 14px 28px rgba(37,99,235,.12)}.v179-section-btn.add-subtitle{background:linear-gradient(135deg,#2563eb,#4f46e5);color:#fff;border-color:transparent}.v179-add-section[hidden],.v179-mod-section[hidden]{display:none!important}.v179-add-section,.v179-mod-section{animation:v179Fade .18s ease both}@keyframes v179Fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}

      @media(max-width:920px){.v175-mindmap-stage,.v178-mindmap-stage{max-width:100%;min-height:720px}.v175-mindmap-center{width:150px;min-height:150px}.v178-mindmap-center{width:128px;min-height:128px}.v176-dashboard,.v176-style-grid,.v176-subtitle-styles{grid-template-columns:1fr}}
      @media(max-width:760px){.v172-page{padding:12px}.v172-grid-2,.v172-media-row{grid-template-columns:1fr}.v172-actions .btn{width:100%;justify-content:center}.v175-mindmap-stage,.v178-mindmap-stage{min-height:860px}.v175-mindmap-node{width:126px!important}.v176-dash-card{padding:15px}}
    `;
    document.head.appendChild(style);
  }

  ensureCustomUnits();
  injectStyle();
  applyContentToUnits();
  // L’espace élève n’est plus modifié par le gestionnaire professeur.

  renderResultsPage = function(){ renderTeacherArea(activeUnitId || (units()[0] && units()[0].id), activeTab || 'general'); };

  function showAccordionSection(kind, name){
    const sectionSel = kind === 'add' ? '[data-v179-add-section]' : '[data-v179-mod-section]';
    const btnSel = kind === 'add' ? '[data-v179-add-section-btn]' : '[data-v179-mod-section-btn]';
    const attrName = kind === 'add' ? 'v179AddSection' : 'v179ModSection';
    const btnAttr = kind === 'add' ? 'v179AddSectionBtn' : 'v179ModSectionBtn';
    document.querySelectorAll(sectionSel).forEach(section => { section.hidden = section.dataset[attrName] !== name; });
    document.querySelectorAll(btnSel).forEach(btn => { btn.classList.toggle('active', btn.dataset[btnAttr] === name); });
    if(kind === 'add') updateAddWizardButtons(name);
  }
  function currentAddSection(){
    const active = document.querySelector('[data-v179-add-section]:not([hidden])');
    return active ? active.dataset.v179AddSection : 'general';
  }
  function updateAddWizardButtons(name){
    const current = name || currentAddSection();
    const index = Math.max(0, ADD_SECTIONS.indexOf(current));
    const prevBtn = document.querySelector('[data-v194-add-prev]');
    const nextBtn = document.querySelector('[data-v194-add-next]');
    if(prevBtn) prevBtn.disabled = index <= 0;
    if(nextBtn) nextBtn.textContent = index >= ADD_SECTIONS.length - 1 ? 'Enregistrer l’unité' : 'Suivant →';
    document.querySelectorAll('[data-v194-step-pill]').forEach((pill) => {
      const step = pill.dataset.v194StepPill;
      const stepIndex = ADD_SECTIONS.indexOf(step);
      pill.classList.toggle('active', step === current);
      pill.classList.toggle('done', stepIndex >= 0 && stepIndex < index);
    });
  }
  function moveAddWizard(direction){
    const current = currentAddSection();
    const index = Math.max(0, ADD_SECTIONS.indexOf(current));
    if(direction > 0 && index >= ADD_SECTIONS.length - 1){ createUnitFromForm(); return; }
    const nextIndex = Math.max(0, Math.min(ADD_SECTIONS.length - 1, index + direction));
    showAccordionSection('add', ADD_SECTIONS[nextIndex]);
  }
  function addDraftSubtitleAndShow(){
    showAccordionSection('add', 'subtitles');
    const list = $('#v176AddSubtitles');
    if(!list) return;
    const i = $all('[data-v176-subtitle-draft]').length;
    list.insertAdjacentHTML('beforeend', addSubtitleDraftRow(emptySubtitleItem(i), i));
  }


  function readFileAsOptimizedDataUrl(file, callback){
    if(!file) return;
    const type = file.type || '';
    // Audio/vidéo : envoi direct au serveur, sans conversion base64 dans le navigateur.
    if(type.startsWith('audio/') || type.startsWith('video/')){
      saveMediaFileDirect(file, type.startsWith('video/') ? 'video' : 'audio', callback);
      return;
    }
    const reader = new FileReader();
    reader.onload = function(){
      const raw = reader.result;
      if(!type.startsWith('image/')){ callback(raw); return; }
      const img = new Image();
      img.onload = function(){
        const maxW = 1200, maxH = 900;
        const ratio = Math.min(1, maxW / Math.max(img.width, 1), maxH / Math.max(img.height, 1));
        const canvas = document.createElement('canvas');
        canvas.width = Math.max(1, Math.round(img.width * ratio));
        canvas.height = Math.max(1, Math.round(img.height * ratio));
        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        const optimized = canvas.toDataURL('image/jpeg', .82);
        // Image : sauvegarde serveur + référence courte dans le contenu.
        saveMediaDataUrl(file, optimized, 'image', callback);
      };
      img.onerror = function(){ saveMediaDataUrl(file, raw, 'image', callback); };
      img.src = raw;
    };
    reader.readAsDataURL(file);
  }

  function handleAddUnitFileInput(input){
    const file = input.files && input.files[0];
    if(!file) return;
    const row = input.closest('[data-v190-visual-row], [data-v190-audio-row], [data-v176-subtitle-draft], [data-v175-subtitle-editor]');
    const targetName = input.getAttribute('data-v181-add-file');
    const target = row && targetName ? (row.querySelector(`[data-field="${targetName}"]`) || row.querySelector(`[data-add-field="${targetName}"]`)) : null;
    if(!target) return;
    readFileAsOptimizedDataUrl(file, function(result){
      if(!result) return;
      target.value = result;
      const box = input.closest('.v186-browse-wrap');
      if(box){ const small = box.querySelector('[data-v190-file-name]') || box.querySelector('small'); if(small) small.textContent = 'Fichier choisi : ' + file.name; box.classList.add('selected'); }
      const imagePreview = row && row.querySelector('.v192-image-preview');
      if(imagePreview && ((file.type || '').startsWith('image/') || (file.type || '').startsWith('video/'))) imagePreview.innerHTML = imagePreviewTag(result, file.name || 'Aperçu');
      hydrateMediaRefs(row || document);
      const mediaPreview = row && row.querySelector('.v194-media-preview');
      if(mediaPreview && ((file.type || '').startsWith('audio/') || (file.type || '').startsWith('video/'))) mediaPreview.innerHTML = mediaControlTag(result, file.name);
      hydrateMediaRefs(row || document);
    });
  }
  function openAddUnitType(type){
    const map = {subtitle:'subtitles', visual:'subtitles', audio:'subtitles', kine:'subtitles', dictionary:'dictionary', scenario:'scenario', tasks:'tasks', exam:'exam'};
    const section = map[type] || 'general';
    showAccordionSection('add', section);
    if(['subtitle','visual','audio','kine'].includes(type) && !$('[data-v176-subtitle-draft]')) addDraftSubtitleAndShow();
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function(){ hydrateMediaRefs(document); });
  else hydrateMediaRefs(document);
  try{
    const obs = new MutationObserver(function(){ scheduleMediaHydrate(); });
    if(document.body) obs.observe(document.body, {childList:true, subtree:true});
    else document.addEventListener('DOMContentLoaded', function(){ obs.observe(document.body, {childList:true, subtree:true}); });
  }catch(e){}

  document.addEventListener('change', function(e){
    const unitSelect = e.target.closest && e.target.closest('#v172UnitSelect');
    if(unitSelect){ renderTeacherArea(unitSelect.value, activeTab); return; }
    const subtitleSelect = e.target.closest && e.target.closest('#v190SubtitleSelect');
    if(subtitleSelect){ activeSubtitleIndex = Number(subtitleSelect.value || 0); return; }
    const addFileInput = e.target.closest && e.target.closest('[data-v181-add-file]');
    if(addFileInput){ handleAddUnitFileInput(addFileInput); return; }
    const fileInput = e.target.closest && e.target.closest('[data-v172-file]');
    if(fileInput){ handleFileInput(fileInput); return; }
  }, true);
  document.addEventListener('click', function(e){
    const openSubtitleBtn = e.target.closest && e.target.closest('[data-v190-open-subtitle]');
    if(openSubtitleBtn){ e.preventDefault(); const select = $('#v190SubtitleSelect'); activeSubtitleIndex = Number(select?.value || 0); renderTeacherArea($('#v172UnitSelect')?.value || activeUnitId, 'subtitles'); return; }
    const addTask201 = e.target.closest && e.target.closest('[data-v201-add-task]');
    if(addTask201){
      e.preventDefault();
      const mode = addTask201.dataset.v201AddTask || 'new';
      const list = mode === 'edit' ? $('#v176EditIntegrationTasks') : $('#v176NewIntegrationTasks');
      if(list) list.insertAdjacentHTML('beforeend', integrationCardRow({}, $all('[data-v201-task-row]', list).length, mode));
      return;
    }
    const deleteTask201 = e.target.closest && e.target.closest('[data-v201-delete-task]');
    if(deleteTask201){
      e.preventDefault();
      const list = deleteTask201.closest('.v201-task-list');
      const rows = list ? $all('[data-v201-task-row]', list) : [];
      if(rows.length > 1) deleteTask201.closest('[data-v201-task-row]')?.remove();
      else {
        const row = deleteTask201.closest('[data-v201-task-row]');
        if(row){ row.querySelectorAll('textarea,input').forEach(el => el.value = ''); }
      }
      return;
    }
    const addChildLine = e.target.closest && e.target.closest('[data-v192-add-child-line]');
    if(addChildLine){
      e.preventDefault();
      const holder = addChildLine.closest('[data-v176-subtitle-draft], [data-v175-subtitle-editor], [data-v172-row]') || document;
      const list = holder.querySelector('[data-v172-child-list]');
      if(list){
        list.insertAdjacentHTML('beforeend', childRow({title:'', definition:''}, $all('[data-v172-child-row]', list).length));
        return;
      }
      const textarea = holder.querySelector('#v175SubtitleChildren, [data-add-field="children"], [data-field="children"]');
      if(textarea){
        const current = textarea.value.trim();
        textarea.value = current ? current + '\nNouveau fils' : 'Nouveau fils';
        textarea.focus();
      }
      return;
    }
    const removeChildLine = e.target.closest && e.target.closest('[data-v192-remove-child-line]');
    if(removeChildLine){
      e.preventDefault();
      const row = removeChildLine.closest('[data-v172-child-row]');
      if(row) row.remove();
      return;
    }
    const addVisual190 = e.target.closest && e.target.closest('[data-v190-add-visual]');
    if(addVisual190){ e.preventDefault(); const list = addVisual190.parentElement.querySelector('[data-v190-visual-list]'); if(list) list.insertAdjacentHTML('beforeend', visualMultiRow({}, $all('[data-v190-visual-row]', list).length)); return; }
    const addAudio190 = e.target.closest && e.target.closest('[data-v190-add-audio]');
    if(addAudio190){ e.preventDefault(); const list = addAudio190.parentElement.querySelector('[data-v190-audio-list]'); if(list) list.insertAdjacentHTML('beforeend', audioMultiRow({}, $all('[data-v190-audio-row]', list).length)); return; }
    const addKine190 = e.target.closest && e.target.closest('[data-v190-add-kine]');
    if(addKine190){ e.preventDefault(); const list = addKine190.parentElement.querySelector('[data-v190-kine-list]'); if(list) list.insertAdjacentHTML('beforeend', kineMultiRow({}, $all('[data-v190-kine-row]', list).length)); return; }
    const removeRow190 = e.target.closest && e.target.closest('[data-v190-remove-row]');
    if(removeRow190){ e.preventDefault(); const row = removeRow190.closest('[data-v190-visual-row], [data-v190-audio-row], [data-v190-kine-row]'); if(row) row.remove(); return; }
    const typeBtn181 = e.target.closest && e.target.closest('[data-v181-type]');
    if(typeBtn181){ e.preventDefault(); openAddUnitType(typeBtn181.dataset.v181Type || 'general'); return; }
    const openMiniUnit = e.target.closest && e.target.closest('[data-v180-open-unit]');
    if(openMiniUnit){ e.preventDefault(); activeUnitId = openMiniUnit.dataset.v180OpenUnit || activeUnitId; activePanel = 'modify'; activeTab = 'subtitles'; renderTeacherArea(activeUnitId, 'subtitles'); return; }
    const deleteUnitBtn = e.target.closest && e.target.closest('[data-v185-delete-unit]');
    if(deleteUnitBtn){ e.preventDefault(); deleteUnit(deleteUnitBtn.dataset.v185DeleteUnit || ''); return; }
    const saveUserBtn = e.target.closest && e.target.closest('[data-epi-save-user]');
    if(saveUserBtn){
      e.preventDefault();
      const nom = $('#epiUserNom')?.value.trim() || '';
      const prenom = $('#epiUserPrenom')?.value.trim() || '';
      const msg = $('#epiUserMsg');
      if(!nom || !prenom){
        if(msg){ msg.className = 'v172-message ko'; msg.textContent = 'Erreur : écris le nom et le prénom.'; }
        return;
      }
      const rows = teacherUsers();
      rows.push({nom, prenom, createdAt:new Date().toISOString()});
      if(saveTeacherUsers(rows)){
        if(msg){ msg.className = 'v172-message ok'; msg.textContent = 'Utilisateur ajouté avec succès.'; }
        const nomInput = $('#epiUserNom'); const prenomInput = $('#epiUserPrenom');
        if(nomInput) nomInput.value = '';
        if(prenomInput) prenomInput.value = '';
      }else if(msg){
        msg.className = 'v172-message ko';
        msg.textContent = 'Erreur : impossible d’enregistrer cet utilisateur.';
      }
      return;
    }
    const deleteUserBtn = e.target.closest && e.target.closest('[data-epi-delete-user]');
    if(deleteUserBtn){
      e.preventDefault();
      const index = Number(deleteUserBtn.getAttribute('data-epi-delete-user'));
      const rows = teacherUsers();
      if(Number.isFinite(index) && rows[index]){
        rows.splice(index, 1);
        saveTeacherUsers(rows);
        renderTeacherArea(activeUnitId || (units()[0] && units()[0].id), activeTab);
      }
      return;
    }
    const changePasswordBtn = e.target.closest && e.target.closest('[data-epi-change-prof-password]');
    if(changePasswordBtn){
      e.preventDefault();
      const oldPassword = $('#epiOldProfPassword')?.value || '';
      const newPassword = $('#epiNewProfPassword')?.value || '';
      const confirmPassword = $('#epiConfirmProfPassword')?.value || '';
      const msg = $('#epiPasswordMsg');
      const show = (ok, text) => {
        if(msg){ msg.className = 'v172-message ' + (ok ? 'ok' : 'ko'); msg.textContent = text; }
      };
      if(!oldPassword || !newPassword || !confirmPassword){ show(false, 'Erreur : remplis les trois champs.'); return; }
      if(newPassword.length < 4){ show(false, 'Erreur : le nouveau mot de passe doit contenir au moins 4 caractères.'); return; }
      if(newPassword !== confirmPassword){ show(false, 'Erreur : les deux nouveaux mots de passe ne sont pas identiques.'); return; }
      changePasswordBtn.disabled = true;
      show(true, 'Enregistrement en cours...');
      fetch('/api/teacher-password', {
        method:'POST',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({oldPassword, newPassword})
      }).then(async response => {
        let data = {};
        try{ data = await response.json(); }catch(err){}
        if(!response.ok || !data.ok) throw new Error(data.error || 'Impossible de changer le mot de passe.');
        ['epiOldProfPassword','epiNewProfPassword','epiConfirmProfPassword'].forEach(id => { const input = $('#' + id); if(input) input.value = ''; });
        show(true, 'Mot de passe professeur modifié avec succès.');
      }).catch(err => {
        show(false, err && err.message ? err.message : 'Erreur : impossible de changer le mot de passe.');
      }).finally(() => {
        changePasswordBtn.disabled = false;
      });
      return;
    }
    const dashBtn = e.target.closest && e.target.closest('[data-v176-dashboard]');
    if(dashBtn){
      e.preventDefault();
      activePanel = dashBtn.dataset.v176Dashboard || 'home';
      if(activePanel === 'modify') activeTab = 'subtitles';
      renderTeacherArea($('#v172UnitSelect')?.value || activeUnitId || (units()[0] && units()[0].id), activeTab);
      return;
    }
    const deleteIntegrationFile = e.target.closest && e.target.closest('[data-epi-delete-integration-file]');
    if(deleteIntegrationFile){
      e.preventDefault();
      const id = deleteIntegrationFile.getAttribute('data-epi-delete-integration-file') || '';
      saveIntegrationFiles(integrationFiles().filter(row => String(row.id || row.mediaId || '') !== String(id)));
      activePanel = 'integrationFiles';
      renderTeacherArea($('#v172UnitSelect')?.value || activeUnitId || (units()[0] && units()[0].id), activeTab);
      return;
    }
    const addPrevBtn = e.target.closest && e.target.closest('[data-v194-add-prev]');
    if(addPrevBtn){ e.preventDefault(); moveAddWizard(-1); return; }
    const addNextBtn = e.target.closest && e.target.closest('[data-v194-add-next]');
    if(addNextBtn){ e.preventDefault(); moveAddWizard(1); return; }
    const addSectionBtn = e.target.closest && e.target.closest('[data-v179-add-section-btn]');
    if(addSectionBtn){ e.preventDefault(); showAccordionSection('add', addSectionBtn.dataset.v179AddSectionBtn || 'general'); return; }
    const modSectionBtn = e.target.closest && e.target.closest('[data-v179-mod-section-btn]');
    if(modSectionBtn){ e.preventDefault(); showAccordionSection('mod', modSectionBtn.dataset.v179ModSectionBtn || 'general'); return; }
    const createUnitBtn176 = e.target.closest && e.target.closest('[data-v176-create-unit]');
    if(createUnitBtn176){ e.preventDefault(); createUnitFromForm(); return; }
    const saveModifyBtn = e.target.closest && e.target.closest('[data-v176-save-modify]');
    if(saveModifyBtn){ e.preventDefault(); saveModifyPanel(); return; }
    const addSubtitleRowBtn176 = e.target.closest && e.target.closest('[data-v176-add-subtitle-row]');
    if(addSubtitleRowBtn176){ e.preventDefault(); addDraftSubtitleAndShow(); return; }
    const deleteSubtitleRowBtn176 = e.target.closest && e.target.closest('[data-v176-delete-subtitle-row]');
    if(deleteSubtitleRowBtn176){ e.preventDefault(); const rows = $all('[data-v176-subtitle-draft]'); if(rows.length > 1){ deleteSubtitleRowBtn176.closest('[data-v176-subtitle-draft]')?.remove(); } else if(rows.length === 1){ rows[0].remove(); } return; }
    const unitCard = e.target.closest && e.target.closest('[data-v172-unit-card]');
    if(unitCard){ e.preventDefault(); activeUnitId = unitCard.dataset.v172UnitCard || activeUnitId; renderTeacherArea(activeUnitId, activeTab || 'general'); return; }
    const showFormBtn = e.target.closest && e.target.closest('[data-v175-show-unit-form]');
    if(showFormBtn){ e.preventDefault(); showAddUnitForm = !showAddUnitForm; renderTeacherArea($('#v172UnitSelect')?.value || activeUnitId || (units()[0] && units()[0].id), activeTab || 'general'); return; }
    const createUnitBtn = e.target.closest && e.target.closest('[data-v175-create-unit]');
    if(createUnitBtn){ e.preventDefault(); createUnitFromForm(); return; }
    const subtitleTabBtn = e.target.closest && e.target.closest('[data-v175-subtitle-index]');
    if(subtitleTabBtn){ e.preventDefault(); activeSubtitleIndex = Number(subtitleTabBtn.dataset.v175SubtitleIndex || 0); renderTeacherArea($('#v172UnitSelect')?.value || activeUnitId, 'subtitles'); return; }
    const addSubtitleBtn = e.target.closest && e.target.closest('[data-v175-add-subtitle]');
    if(addSubtitleBtn){ e.preventDefault(); appendRow('subtitle'); return; }
    const deleteSubtitleBtn = e.target.closest && e.target.closest('[data-v175-delete-subtitle]');
    if(deleteSubtitleBtn){ e.preventDefault(); deleteActiveSubtitle(); return; }
    const studentBranch = e.target.closest && e.target.closest('[data-v173-branch-title]');
    if(studentBranch){
      const map = studentBranch.closest('[data-v173-student-mindmap]');
      const box = map && map.querySelector('#v173StudentMapDetail');
      if(box){
        box.innerHTML = `<h4>${html(studentBranch.dataset.v173BranchTitle || '')}</h4><p><strong>Définition :</strong> ${html(studentBranch.dataset.v173BranchDefinition || '')}</p><p><strong>Exemple :</strong> ${html(studentBranch.dataset.v173BranchExample || '')}</p><div><strong>Sous-fils :</strong>${studentBranch.dataset.v175BranchChildrenHtml || '<p>Aucun sous-fil indiqué</p>'}</div>`;
        map.querySelectorAll('[data-v173-branch-title]').forEach(btn => btn.classList.remove('active'));
        studentBranch.classList.add('active');
      }
      return;
    }
    const tabBtn = e.target.closest && e.target.closest('[data-v172-tab]');
    if(tabBtn){ e.preventDefault(); activeTab = tabBtn.dataset.v172Tab || 'general'; renderTeacherArea($('#v172UnitSelect')?.value || activeUnitId, activeTab); return; }
    const addBtn = e.target.closest && e.target.closest('[data-v172-add]');
    if(addBtn){ e.preventDefault(); appendRow(addBtn.dataset.v172Add); return; }
    const delBtn = e.target.closest && e.target.closest('[data-v172-delete-row]');
    if(delBtn){ e.preventDefault(); const row = delBtn.closest('[data-v172-row]'); if(row) row.remove(); return; }
    const saveBtn = e.target.closest && e.target.closest('[data-v172-save]');
    if(saveBtn){ e.preventDefault(); saveActive(); return; }
    const resetBtn = e.target.closest && e.target.closest('[data-v172-reset]');
    if(resetBtn){ e.preventDefault(); resetUnit(); return; }
    const reveal = e.target.closest && e.target.closest('[data-v172-reveal]');
    if(reveal){ e.preventDefault(); const box = reveal.closest('.v172-kine-student-card')?.querySelector('.v172-kine-answer'); if(box){ box.hidden = !box.hidden; reveal.textContent = box.hidden ? 'Afficher la correction' : 'Masquer la correction'; } return; }
  }, true);
})();

/* =========================================================
   V191 — Synchronisation ajout/suppression + centrage cartes mentales + style prof
   - Les unités supprimées depuis l’espace professeur sont masquées côté élève.
   - Les unités ajoutées sont intégrées au tableau de bord élève selon l’année scolaire.
   - Les cartes mentales de l’espace élève sont centrées et plus stables.
========================================================= */
(function(){
  'use strict';
  const DELETED_UNITS_KEY = 'epi_v191_deleted_units';
  const CUSTOM_KEYS = ['epi_v175_custom_units','epi_v183_custom_units_visible','epi_v181_custom_units_visible'];
  function globalUnits(){ return (typeof UNITS !== 'undefined' && Array.isArray(UNITS)) ? UNITS : (Array.isArray(window.UNITS) ? window.UNITS : []); }
  function h(value){
    if(typeof esc === 'function') return esc(value ?? '');
    return String(value ?? '').replace(/[&<>"']/g, m => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]));
  }
  function readJson(key, fallback){
    try{ const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }catch(e){ return fallback; }
  }
  function deletedIds(){ const rows = readJson(DELETED_UNITS_KEY, []); return Array.isArray(rows) ? rows.map(String) : []; }
  function isDeleted(id){ return deletedIds().includes(String(id || '')); }
  function cleanTitle(title){ return String(title || '').replace(/^\s*Unité\s*\d+\s*:\s*/i, '').trim(); }
  function ensureCustomUnitsInGlobal(){
    const allUnitsRef = globalUnits();
    if(!Array.isArray(allUnitsRef) || !allUnitsRef.length) return;
    const deleted = new Set(deletedIds());
    const rows = [];
    CUSTOM_KEYS.forEach(key => {
      const list = readJson(key, []);
      if(Array.isArray(list)) list.forEach(u => { if(u && u.id && !deleted.has(String(u.id))) rows.push(u); });
    });
    rows.forEach(u => {
      if(!u || !u.id || deleted.has(String(u.id))) return;
      u.customUnit = true;
      u.hiddenFromStudent = false;
      const existing = allUnitsRef.find(x => x && x.id === u.id);
      if(existing) Object.assign(existing, u, {customUnit:true, hiddenFromStudent:false});
      else allUnitsRef.push(u);
    });
  }
  function visibleUnits(){
    ensureCustomUnitsInGlobal();
    const allUnitsRef = globalUnits();
    if(!Array.isArray(allUnitsRef)) return [];
    const deleted = new Set(deletedIds());
    const seen = new Set();
    return allUnitsRef.filter(u => {
      if(!u || !u.id || deleted.has(String(u.id)) || u.hiddenFromStudent === true) return false;
      if(seen.has(String(u.id))) return false;
      seen.add(String(u.id));
      return true;
    });
  }
  function unitById(id){ return visibleUnits().find(u => u && u.id === id) || visibleUnits()[0] || null; }
  window.EPI_V191_UNITS = {visibleUnits, isDeleted, ensureCustomUnitsInGlobal};

  if(typeof currentUnit === 'function'){
    currentUnit = function(){
      const found = unitById(typeof state !== 'undefined' && state ? state.unitId : '');
      if(found) return found;
      const first = visibleUnits()[0] || globalUnits().find(u => u && !isDeleted(u.id)) || null;
      if(typeof state !== 'undefined' && state && first) state.unitId = first.id;
      return first;
    };
  }

  const BASE_GROUPS = [
    { key:'1ac', label:'1ère année collégiale', ids:['v124_1ac_systeme','v124_1ac_os'] },
    { key:'2ac', label:'2ème année collégiale', ids:['u3_tableur','u4_logo'] },
    { key:'3ac', label:'3ème année collégiale', ids:[] }
  ];
  function unitYear(unit){
    const y = String(unit && (unit.schoolYear || unit.level || '') || '1ac').toLowerCase();
    if(y.includes('3')) return '3ac';
    if(y.includes('2')) return '2ac';
    return '1ac';
  }
  function groupUnits(group){
    const all = visibleUnits();
    const base = group.ids.map(id => all.find(u => u && u.id === id)).filter(Boolean);
    const custom = all.filter(u => u && u.customUnit && unitYear(u) === group.key && !base.some(b => b.id === u.id));
    if(group.key === '1ac'){
      const extras = all.filter(u => u && u.customUnit && !['2ac','3ac'].includes(unitYear(u)) && !custom.some(c => c.id === u.id));
      custom.push(...extras);
    }
    return [...base, ...custom];
  }
  function unitTile(unit, index, groupKey){
    const custom = unit && unit.customUnit ? '<em>Ajoutée</em>' : '';
    return `<button type="button" class="v164-unit-tile v191-unit-tile v164-${h(groupKey)} ${unit.customUnit ? 'v191-custom-unit' : ''}" data-unit="${h(unit.id)}" data-v164-level="${h(groupKey)}">
      <span class="v164-unit-index">Unité ${index + 1}</span>
      <strong>${h(cleanTitle(unit.title))}</strong>${custom}
    </button>`;
  }
  function dashboardRows(){
    const rows = BASE_GROUPS.map(group => {
      const items = groupUnits(group);
      if(!items.length && group.key === '3ac') return '';
      return `<tr class="v164-dashboard-row v191-dashboard-row"><th scope="row"><span class="v164-level-badge">${h(group.label)}</span></th><td><div class="v164-unit-list v191-unit-list">${items.map((u,i)=>unitTile(u,i,group.key)).join('')}</div></td></tr>`;
    }).filter(Boolean).join('');
    return rows || '<tr><td colspan="2">Aucune unité disponible.</td></tr>';
  }
  const previousRenderHome = (typeof renderHome === 'function') ? renderHome : null;
  renderHome = function(){
    if(typeof v124EnsureFirstYearUnits === 'function') v124EnsureFirstYearUnits();
    ensureCustomUnitsInGlobal();
    if(typeof state !== 'undefined' && state) state.selectedLevel = null;
    const app = document.getElementById('app');
    if(!app){ if(previousRenderHome) previousRenderHome(); return; }
    app.innerHTML = appShell(`<main class="v164-dashboard-page v191-dashboard-page">
      <section class="v164-dashboard-hero v191-dashboard-hero">
        <span class="mini-pill">Tableau de bord</span>
        <h1>ÉPI — Informatique collégiale</h1>
      </section>
      <section class="v164-dashboard-card v191-dashboard-card" aria-label="Tableau de bord des niveaux scolaires et unités">
        <table class="v164-dashboard-table v191-dashboard-table"><thead><tr><th>Niveau scolaire</th><th>Unités</th></tr></thead><tbody>${dashboardRows()}</tbody></table>
      </section>
    </main>`);
  };
  const previousRenderUnit = (typeof renderUnit === 'function') ? renderUnit : null;
  if(previousRenderUnit){
    renderUnit = function(){
      ensureCustomUnitsInGlobal();
      if(typeof state !== 'undefined' && state && state.unitId && isDeleted(state.unitId)){
        const first = visibleUnits()[0];
        if(first){ state.unitId = first.id; state.page = 'intro'; state.lessonIndex = 0; }
        else { renderHome(); return; }
      }
      return previousRenderUnit.apply(this, arguments);
    };
  }

  function injectV191Style(){
    if(document.getElementById('v191-style')) return;
    const style = document.createElement('style');
    style.id = 'v191-style';
    style.textContent = `
      .visual-layout .mindmap-sheet,.v89-mindmap-panel,.v91-mindmap-panel,.v98-mindmap-panel,.v175-student-mindmap,.v187-map-card{display:grid!important;justify-items:center!important;text-align:center!important;width:100%;box-sizing:border-box;}
      .visual-mindmap,.v175-mindmap-stage,.v178-mindmap-stage,.v187-radial-canvas{margin-left:auto!important;margin-right:auto!important;}
      .v187-map-card{border:1px solid rgba(59,130,246,.16);border-radius:28px;padding:18px;background:linear-gradient(180deg,rgba(255,255,255,.96),rgba(239,246,255,.88));box-shadow:0 20px 48px rgba(30,64,175,.10);overflow:hidden;}
      .v187-radial-canvas{position:relative;width:min(100%,var(--v187-w,880px));height:var(--v187-h,560px);max-width:100%;border-radius:28px;background:radial-gradient(circle at center,rgba(219,234,254,.86),rgba(255,255,255,.94) 56%,rgba(240,249,255,.96));border:1px solid rgba(96,165,250,.20);box-shadow:inset 0 1px 0 rgba(255,255,255,.84);}
      .v187-map-svg{position:absolute;inset:0;width:100%;height:100%;pointer-events:none;}
      .v187-center-node{position:absolute;left:50%;top:calc(50% + 18px);transform:translate(-50%,-50%);z-index:2;width:154px;min-height:154px;border-radius:999px;display:grid;place-items:center;text-align:center;padding:18px;background:linear-gradient(135deg,#2563eb,#4f46e5);color:#fff;font-weight:1000;box-shadow:0 18px 44px rgba(37,99,235,.28);line-height:1.2;}
      .v187-center-node span{display:block;font-size:.72rem;font-weight:800;opacity:.9;margin-top:7px;}
      .v187-map-node{position:absolute!important;z-index:3;text-align:left;}
      .v187-link{fill:none;stroke-width:2.4;stroke:#60a5fa;opacity:.86;stroke-linecap:round;}
      .v187-arrow-fill{fill:#60a5fa;}
      @media(max-width:840px){.v187-radial-canvas{height:720px;}.v187-map-node{width:150px!important;font-size:.85rem;}.v187-center-node{width:132px;min-height:132px;font-size:.9rem;}}
      @media(max-width:620px){.v187-radial-canvas{height:820px;}.v187-map-node{width:132px!important;min-height:84px!important;}}

      .v176-teacher-page,.v172-page{background:linear-gradient(135deg,#f8fbff 0%,#eef6ff 45%,#f8fafc 100%);border-radius:30px;}
      .v176-teacher-hero{position:relative;overflow:hidden;background:linear-gradient(135deg,rgba(30,64,175,.98),rgba(37,99,235,.92),rgba(14,165,233,.78))!important;color:#fff!important;border:0!important;box-shadow:0 24px 60px rgba(30,64,175,.22)!important;}
      .v176-teacher-hero:after{content:"";position:absolute;right:-70px;top:-90px;width:260px;height:260px;border-radius:999px;background:rgba(255,255,255,.15);}
      .v176-teacher-hero h1,.v176-teacher-hero p{color:#fff!important;}
      .v176-teacher-hero .mini-pill{background:rgba(255,255,255,.18);color:#fff;border-color:rgba(255,255,255,.28);}
      .v176-dashboard{gap:18px!important;}
      .v176-dash-card{position:relative;overflow:hidden;background:linear-gradient(180deg,#ffffff,#f6fbff)!important;border:1px solid rgba(37,99,235,.18)!important;box-shadow:0 18px 40px rgba(15,23,42,.08)!important;}
      .v176-dash-card:before{content:"";position:absolute;inset:0 0 auto 0;height:4px;background:linear-gradient(90deg,#2563eb,#14b8a6,#8b5cf6);opacity:.8;}
      .v176-dash-card.active{background:linear-gradient(180deg,#eff6ff,#ffffff)!important;border-color:rgba(37,99,235,.44)!important;}
      .v176-panel,.v176-form-card,.v184-units-list-panel{backdrop-filter:blur(10px);border:1px solid rgba(37,99,235,.12)!important;box-shadow:0 22px 54px rgba(15,23,42,.08)!important;}
      .v184-units-table tr:hover{background:rgba(219,234,254,.35);}
      .v185-row-actions{display:flex;gap:8px;align-items:center;flex-wrap:wrap;}
      .v191-delete-unit-btn,.btn.danger,.v172-delete{background:linear-gradient(135deg,#ef4444,#dc2626)!important;color:#fff!important;border-color:transparent!important;box-shadow:0 12px 26px rgba(220,38,38,.18)!important;}
      .v191-delete-unit-btn:hover,.btn.danger:hover,.v172-delete:hover{transform:translateY(-1px);filter:brightness(1.03);}
      .v191-unit-tile em{display:inline-block;margin-top:8px;font-style:normal;font-size:.72rem;font-weight:900;color:#2563eb;background:#dbeafe;border-radius:999px;padding:4px 9px;}
      .v192-image-preview{min-height:150px;border:1px dashed rgba(37,99,235,.32);border-radius:18px;background:linear-gradient(180deg,#f8fbff,#ffffff);display:grid;place-items:center;overflow:hidden;color:#64748b;font-weight:900;text-align:center;padding:8px;}
      .v192-image-preview img{max-width:100%;max-height:230px;object-fit:contain;border-radius:14px;box-shadow:0 10px 24px rgba(15,23,42,.08);}
      .v192-mindmap-prof{border-color:rgba(124,58,237,.22)!important;background:linear-gradient(180deg,#faf5ff,#ffffff)!important;margin-top:10px;}
      .v192-mindmap-prof>summary{color:#5b21b6;font-weight:1000;}
      .v192-mindmap-prof-box{display:grid;gap:12px;border:1px solid rgba(124,58,237,.12);border-radius:18px;padding:14px;background:rgba(255,255,255,.82);}
      .v192-mindmap-prof-box h4{margin:.25rem 0;color:#0f172a}.v192-mindmap-prof-box p{margin:.2rem 0;color:#64748b;line-height:1.45}.v192-add-child-btn{width:max-content;max-width:100%;}
      .v194-wizard-progress{display:flex;flex-wrap:wrap;gap:8px;margin:12px 0 6px;padding:10px;border-radius:20px;background:linear-gradient(180deg,#f8fbff,#ffffff);border:1px solid rgba(37,99,235,.12)}
      .v194-wizard-progress span{display:inline-flex;align-items:center;gap:6px;border:1px solid rgba(37,99,235,.16);background:#fff;color:#1e3a8a;border-radius:999px;padding:8px 11px;font-weight:1000;font-size:.88rem;box-shadow:0 8px 18px rgba(37,99,235,.06)}
      .v194-wizard-progress span.active{background:linear-gradient(135deg,#2563eb,#4f46e5);color:#fff;border-color:transparent;box-shadow:0 12px 28px rgba(37,99,235,.20)}
      .v194-wizard-progress span.done{background:linear-gradient(135deg,#dcfce7,#ecfdf5);color:#047857;border-color:rgba(16,185,129,.28)}
      .v194-wizard-actions{display:flex;gap:10px;align-items:center;flex-wrap:wrap;margin-top:16px;padding:12px;border-radius:20px;background:linear-gradient(180deg,#f8fbff,#ffffff);border:1px solid rgba(37,99,235,.12)}
      .v194-wizard-actions .btn[disabled]{opacity:.48;cursor:not-allowed;transform:none!important;filter:grayscale(.3)}
      .v194-create-message{padding:12px 14px;border-radius:16px;background:#fff;border:1px solid rgba(15,23,42,.08);box-shadow:0 10px 24px rgba(15,23,42,.06)}
      .v194-create-message.ok{background:#ecfdf5!important;border-color:rgba(16,185,129,.35)!important;color:#047857!important}
      .v194-create-message.ko{background:#fef2f2!important;border-color:rgba(239,68,68,.35)!important;color:#b91c1c!important}
      .v194-create-toast{position:fixed;right:22px;bottom:22px;z-index:99999;display:grid;gap:4px;width:min(420px,calc(100vw - 36px));padding:16px 18px;border-radius:22px;background:#fff;border:1px solid rgba(15,23,42,.12);box-shadow:0 24px 70px rgba(15,23,42,.24);transform:translateY(18px);opacity:0;pointer-events:none;transition:.25s ease;font-weight:900}
      .v194-create-toast.show{transform:translateY(0);opacity:1}
      .v194-create-toast strong{font-size:1rem}.v194-create-toast span{font-size:.92rem;line-height:1.45;color:#334155}
      .v194-create-toast.ok{border-color:rgba(16,185,129,.34);background:linear-gradient(180deg,#ecfdf5,#ffffff)}
      .v194-create-toast.ok strong{color:#047857}.v194-create-toast.ko{border-color:rgba(239,68,68,.34);background:linear-gradient(180deg,#fef2f2,#ffffff)}
      .v194-create-toast.ko strong{color:#b91c1c}
      .v194-media-preview{min-height:70px;border:1px dashed rgba(37,99,235,.28);border-radius:16px;background:linear-gradient(180deg,#f8fbff,#ffffff);display:grid;place-items:center;overflow:hidden;color:#64748b;font-weight:900;text-align:center;padding:8px;margin:8px 0}
      .v201-integration-help{border-left:4px solid #2563eb;background:linear-gradient(180deg,#eff6ff,#ffffff);padding:12px 14px;border-radius:16px;}
      .v201-task-list{display:grid;gap:14px;margin:12px 0;}
      .v201-task-card{border:1px solid rgba(37,99,235,.16);border-radius:20px;background:linear-gradient(180deg,#ffffff,#f8fbff);padding:14px;box-shadow:0 12px 28px rgba(15,23,42,.06);}
      .v201-task-card .v172-row-head{margin-bottom:10px;}
      .v201-task-card textarea{min-height:86px;}
      [data-epi-media-src]{background:linear-gradient(180deg,#f8fbff,#ffffff);}
      .v194-media-preview audio,.v172-audio-student-card audio{width:100%;max-width:100%}
      .v194-media-preview video,.v172-audio-student-card video,.v194-audio-video{width:100%;max-height:300px;border-radius:14px;background:#0f172a;box-shadow:0 10px 24px rgba(15,23,42,.12)}
      .v204-audio-note{padding:10px 12px;border-radius:12px;background:#ecfeff;border:1px solid #bae6fd;color:#155e75;font-size:.92rem;line-height:1.45;margin:8px 0 12px}
      .v204-audio-script{background:#f8fafc;border:1px solid #e2e8f0;border-radius:12px;padding:12px;line-height:1.65}
      img[data-epi-media-src], .v172-student-visual-card img, .v192-image-preview img{max-width:100%;height:auto;content-visibility:auto;contain-intrinsic-size:480px 320px}

      .v205-media-preview video,.v205-visual-video{width:100%;max-width:100%;max-height:360px;border-radius:16px;background:#0f172a;box-shadow:0 12px 30px rgba(15,23,42,.14)}
      .v205-video-help{margin:0;color:#64748b;font-size:.9rem;line-height:1.45;background:rgba(59,130,246,.06);border:1px solid rgba(59,130,246,.14);border-radius:12px;padding:8px 10px}

      .v207-mindmap{display:grid;gap:16px;margin-top:18px;border:1px solid rgba(59,130,246,.16);border-radius:28px;padding:18px;background:linear-gradient(180deg,#ffffff,#f8fbff);box-shadow:0 18px 42px rgba(30,64,175,.08)}
      .v207-map-detail{border:1px solid rgba(37,99,235,.16);border-radius:20px;background:#fff;padding:14px;box-shadow:0 10px 24px rgba(15,23,42,.06)}
      .v207-map-core{display:grid;gap:18px;align-items:center;justify-items:center}
      .v207-map-root{min-width:190px;max-width:360px;border-radius:999px;background:linear-gradient(135deg,#2563eb,#4f46e5);color:#fff;font-weight:1000;text-align:center;padding:18px 22px;box-shadow:0 16px 38px rgba(37,99,235,.24)}
      .v207-map-root span{display:block;font-size:.76rem;opacity:.9;margin-top:6px}
      .v207-map-branches{display:grid;grid-template-columns:repeat(auto-fit,minmax(190px,1fr));gap:14px;width:100%}
      .v207-map-branch{border:1px solid rgba(37,99,235,.16);border-radius:20px;background:#fff;padding:14px;text-align:left;box-shadow:0 10px 24px rgba(15,23,42,.06);cursor:pointer;min-height:112px}
      .v207-map-branch strong{display:block;color:#0f172a;margin-bottom:7px}.v207-map-branch span{display:block;color:#475569;line-height:1.45}.v207-map-branch em{display:block;margin-top:8px;color:#2563eb;font-style:normal;font-weight:800;font-size:.86rem}.v207-map-branch.active,.v207-map-branch:hover{border-color:#2563eb;background:#eff6ff}
      .v207-audio-media-preview audio,.v207-student-audio-media audio{width:100%}.v207-audio-media-preview video,.v207-student-audio-media video{width:100%;max-height:360px;border-radius:16px;background:#0f172a;box-shadow:0 12px 28px rgba(15,23,42,.14)}

    `;
    document.head.appendChild(style);
  }
  injectV191Style();
  if(typeof renderLogin === 'function') renderLogin();
})();
