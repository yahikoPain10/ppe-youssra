/* =========================================================
   ÉPI v224 — Modifier unité : affichage réel complet
   - Interface "Ajouter unité" non touchée.
   - Dans "Modifier unité", un clic sur une unité affiche :
     1) l’aperçu réel de l’unité comme dans l’espace élève ;
     2) le formulaire complet de modification de toutes les parties.
========================================================= */
(function(){
  'use strict';

  const STORE_PREFIX = 'epi_v170_unit_content_';
  const CUSTOM_UNITS_KEY = 'epi_v175_custom_units';
  let activeId = '';
  let renderLock = false;
  let timer = null;

  function q(sel, root){ return (root || document).querySelector(sel); }
  function qa(sel, root){ return Array.from((root || document).querySelectorAll(sel)); }
  function h(value){
    return String(value == null ? '' : value).replace(/[&<>"']/g, ch => ({
      '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'
    }[ch]));
  }
  function cleanTitle(value){ return String(value || '').replace(/^\s*Unité\s*\d+\s*:\s*/i,'').trim(); }
  function norm(value){ return cleanTitle(value).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').trim(); }
  function lines(value){ return String(value || '').split('\n').map(x => x.trim()).filter(Boolean); }
  function readJson(key, fallback){ try{ const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }catch(e){ return fallback; } }
  function writeJson(key, value){ localStorage.setItem(key, JSON.stringify(value)); return true; }
  function keyFor(id){ return STORE_PREFIX + String(id || 'unit'); }

  function allUnits(){
    try{
      if(typeof UNITS === 'undefined' || !Array.isArray(UNITS)) return [];
      return UNITS.filter(u => u && u.id && u.hiddenFromStudent !== true);
    }catch(e){ return []; }
  }
  function unitById(id){
    const rows = allUnits();
    return rows.find(u => String(u.id) === String(id)) || rows[0] || null;
  }
  function saved(unit){
    if(!unit) return {};
    const direct = readJson(keyFor(unit.id), null);
    if(direct && typeof direct === 'object') return direct;
    if(unit._v172TeacherContent && typeof unit._v172TeacherContent === 'object') return unit._v172TeacherContent;
    if(unit._v170TeacherContent && typeof unit._v170TeacherContent === 'object') return unit._v170TeacherContent;
    return {};
  }

  function mediaUrl(src){
    const v = String(src || '').trim();
    if(v.startsWith('epi-media:')){
      const parts = v.split(':');
      return '/api/media/' + encodeURIComponent(parts.slice(2).join(':'));
    }
    return v;
  }
  function mediaKind(src){
    const v = String(src || '').toLowerCase();
    if(!v) return '';
    if(v.startsWith('epi-media:video:') || /^data:video\//.test(v) || /\.(mp4|webm|ogg|ogv|mov|m4v)(\?|#|$)/.test(v)) return 'video';
    if(v.startsWith('epi-media:audio:') || /^data:audio\//.test(v) || /\.(mp3|wav|ogg|m4a|aac)(\?|#|$)/.test(v)) return 'audio';
    return 'image';
  }
  function mediaPreview(src, title){
    const url = mediaUrl(src);
    const kind = mediaKind(src);
    if(!url) return '<span class="v224-empty">Aucun média</span>';
    if(kind === 'video') return `<video controls preload="metadata" src="${h(url)}" title="${h(title || 'Vidéo')}"></video>`;
    if(kind === 'audio') return `<audio controls preload="metadata" src="${h(url)}" title="${h(title || 'Audio')}"></audio>`;
    return `<img loading="lazy" src="${h(url)}" alt="${h(title || 'Image')}">`;
  }

  function normalizeVisual(x, i, subtitle){
    x = x || {};
    return {
      title: String(x.title || x.visualTitle || subtitle || `Média ${i+1}`).trim(),
      src: String(x.src || x.visualSrc || '').trim(),
      description: String(x.description || x.visualDescription || x.definition || '').trim(),
      example: String(x.example || x.visualExample || '').trim(),
      action: String(x.action || x.visualAction || '').trim(),
      remember: String(x.remember || x.visualRemember || '').trim(),
      subtitleTitle: String(x.subtitleTitle || x.subtitle || x.lessonTitle || subtitle || '').trim()
    };
  }
  function normalizeAudio(x, i, subtitle){
    x = x || {};
    return {
      title: String(x.title || x.audioTitle || subtitle || `Support auditif ${i+1}`).trim(),
      src: String(x.src || x.audioSrc || '').trim(),
      text: String(x.text || x.audioText || x.definition || '').trim(),
      ar: String(x.ar || x.audioAr || '').trim(),
      subtitleTitle: String(x.subtitleTitle || x.subtitle || x.lessonTitle || subtitle || '').trim()
    };
  }
  function normalizeKine(x){
    x = x || {};
    return {
      type: String(x.type || x.kineType || 'Question directe').trim() || 'Question directe',
      question: String(x.question || x.kineQuestion || '').trim(),
      options: String(x.options || x.kineOptions || '').trim(),
      pairs: String(x.pairs || x.kinePairs || '').trim(),
      steps: String(x.steps || x.kineSteps || '').trim(),
      answer: String(x.answer || x.kineAnswer || '').trim(),
      correction: String(x.correction || x.kineCorrection || '').trim(),
      subtitleTitle: String(x.subtitleTitle || x.subtitle || x.lessonTitle || '').trim()
    };
  }

  function matchRows(rows, title, index){
    rows = Array.isArray(rows) ? rows : [];
    const t = norm(title);
    const explicit = rows.filter(x => {
      const st = norm(x && (x.subtitleTitle || x.subtitle || x.lessonTitle || ''));
      return st && t && st === t;
    });
    if(explicit.length) return explicit;
    const byTitle = rows.filter(x => {
      const xt = norm(x && (x.title || x.visualTitle || x.audioTitle || ''));
      return xt && t && xt === t;
    });
    if(byTitle.length) return byTitle;
    return rows[index] ? [rows[index]] : [];
  }
  function mergeRows(a, b){
    const out = [];
    const seen = new Set();
    (a || []).concat(b || []).forEach(x => {
      const key = [x.src || '', x.title || '', x.text || '', x.question || '', x.description || '', x.example || ''].join('|').toLowerCase();
      if(!key.replace(/\|/g,'').trim()) return;
      if(seen.has(key)) return;
      seen.add(key);
      out.push(x);
    });
    return out;
  }

  function derive(unit){
    const s = saved(unit);
    const lessons = Array.isArray(s.lessons) && s.lessons.length ? s.lessons : (Array.isArray(unit && unit.lessons) ? unit.lessons : []);
    const branches = Array.isArray(s.mindmapBranches) ? s.mindmapBranches : [];
    const flatVisuals = Array.isArray(s.visualItems) ? s.visualItems : [];
    const flatAudios = Array.isArray(s.audioItems) ? s.audioItems : [];
    const flatKines = Array.isArray(s.kineQuestions) ? s.kineQuestions : (Array.isArray(s.kineExercises) ? s.kineExercises : []);

    let subtitles = [];
    if(Array.isArray(s.subtitleItems) && s.subtitleItems.length){
      subtitles = s.subtitleItems.map((item, i) => {
        item = item || {};
        const lesson = lessons[i] || {};
        const branch = branches[i] || {};
        const title = String(item.title || lesson.title || branch.title || `Sous-titre ${i+1}`).trim();

        let visuals = Array.isArray(item.visualItems) ? item.visualItems.map((x,j)=>normalizeVisual(x,j,title)) : [];
        let audios = Array.isArray(item.audioItems) ? item.audioItems.map((x,j)=>normalizeAudio(x,j,title)) : [];
        let kines = Array.isArray(item.kineExercises) ? item.kineExercises.map(normalizeKine) : [];

        visuals = mergeRows(visuals, matchRows(flatVisuals, title, i).map((x,j)=>normalizeVisual(x,j,title)));
        audios = mergeRows(audios, matchRows(flatAudios, title, i).map((x,j)=>normalizeAudio(x,j,title)));
        if(!kines.length) kines = matchRows(flatKines, title, i).map(normalizeKine);

        const oneVisual = normalizeVisual(item, 0, title);
        if(oneVisual.src || oneVisual.description || oneVisual.example || oneVisual.action || oneVisual.remember) visuals = mergeRows(visuals, [oneVisual]);

        const oneAudio = normalizeAudio(item, 0, title);
        if(oneAudio.src || oneAudio.text || oneAudio.ar) audios = mergeRows(audios, [oneAudio]);

        const oneKine = normalizeKine(item);
        if(!kines.length && (oneKine.question || oneKine.options || oneKine.pairs || oneKine.steps || oneKine.answer || oneKine.correction)) kines = [oneKine];

        return {
          title,
          definition: String(item.definition || lesson.fr || lesson.objective || branch.definition || '').trim(),
          example: String(item.example || branch.example || '').trim(),
          children: Array.isArray(item.children) ? item.children.join('\n') : String(item.children || (Array.isArray(branch.children) ? branch.children.join('\n') : '') || '').trim(),
          visualItems: visuals,
          audioItems: audios,
          kineExercises: kines
        };
      });
    }else{
      const count = Math.max(lessons.length, branches.length, flatVisuals.length, flatAudios.length, flatKines.length, 1);
      subtitles = Array.from({length: count}, (_, i) => {
        const lesson = lessons[i] || {};
        const branch = branches[i] || {};
        const title = String(lesson.title || branch.title || `Sous-titre ${i+1}`).trim();
        const childRows = Array.isArray(branch.children) ? branch.children : (Array.isArray(lesson.officialObjectives) ? lesson.officialObjectives : lines(branch.children || ''));
        return {
          title,
          definition: String(lesson.fr || lesson.objective || branch.definition || '').trim(),
          example: String(branch.example || (Array.isArray(lesson.fill) ? (lesson.fill[1] || lesson.fill[0] || '') : '')).trim(),
          children: childRows.join('\n'),
          visualItems: matchRows(flatVisuals, title, i).map((x,j)=>normalizeVisual(x,j,title)),
          audioItems: matchRows(flatAudios, title, i).map((x,j)=>normalizeAudio(x,j,title)),
          kineExercises: matchRows(flatKines, title, i).map(normalizeKine)
        };
      });
    }

    let dictionary = Array.isArray(s.dictionary) ? s.dictionary : (Array.isArray(unit && unit.dictionary) ? unit.dictionary : []);
    dictionary = dictionary.map(row => Array.isArray(row) ? {term: row[0] || '', value: row[1] || ''} : {term: row.term || row.word || '', value: row.value || row.translation || row.definition || ''});

    let tasks = [];
    if(Array.isArray(s.integrationTasks)) tasks = s.integrationTasks;
    else if(Array.isArray(s.questions)) tasks = s.questions.map(x => Array.isArray(x) ? {task:x[0] || '', expected:x[1] || ''} : {task:x.task || x.question || '', expected:x.expected || x.correction || ''});
    else if(unit && unit.integration && Array.isArray(unit.integration.questions)) tasks = unit.integration.questions.map(x => Array.isArray(x) ? {task:x[0] || '', expected:x[1] || ''} : {task:x.task || x.question || '', expected:x.expected || x.correction || ''});
    else if(unit && unit.integration && Array.isArray(unit.integration.tasks)) tasks = unit.integration.tasks.map(x => ({task:String(x || ''), expected:''}));

    let exam = Array.isArray(s.examQuestions) ? s.examQuestions : (Array.isArray(s.exam) ? s.exam : (Array.isArray(unit && unit.exam) ? unit.exam : []));
    exam = exam.map(q => {
      const question = Array.isArray(q) ? (q[0] || '') : (q.question || q.title || '');
      const options = Array.isArray(q) ? (Array.isArray(q[1]) ? q[1].slice() : []) : (Array.isArray(q.options) ? q.options.slice() : []);
      while(options.length < 4) options.push('');
      const correct = Array.isArray(q) ? Number(q[2] || 0) : Number(q.correct ?? q.correctIndex ?? 0);
      return {question, options:options.slice(0,4), correct:Math.max(0, Math.min(3, correct || 0))};
    });

    const scenario = s.scenario || s.integrationScenario || (unit && unit.integration && unit.integration.scenario) || '';

    return Object.assign({}, s, {
      title: s.title || (unit && unit.title) || '',
      short: s.short || (unit && unit.short) || '',
      intro: typeof s.intro === 'string' ? s.intro : ((unit && unit.intro) || ''),
      competence: s.competence || (unit && unit.competence) || '',
      duration: s.duration || (unit && unit.duration) || '',
      schoolYear: s.schoolYear || (unit && unit.schoolYear) || '1ac',
      lessons: lessons,
      subtitleItems: subtitles,
      mindmapBranches: branches.length ? branches : subtitles.map(x => ({title:x.title, definition:x.definition, example:x.example, children:lines(x.children)})),
      dictionary,
      scenario,
      integrationTasks: tasks,
      examQuestions: exam
    });
  }

  function cloneUnitForPreview(unit, c){
    const clone = Object.assign({}, unit);
    clone.title = c.title || clone.title;
    clone.short = c.short || clone.short;
    clone.intro = c.intro || clone.intro;
    clone.competence = c.competence || clone.competence;
    clone.duration = c.duration || clone.duration;
    clone.schoolYear = c.schoolYear || clone.schoolYear;
    clone.dictionary = c.dictionary.map(x => [x.term, x.value]);
    clone.lessons = (c.lessons && c.lessons.length ? c.lessons : c.subtitleItems.map(s => ({
      title:s.title,
      officialFocus:s.title,
      objective:s.definition,
      fr:s.definition,
      ar:(s.audioItems[0] && s.audioItems[0].ar) || '',
      officialObjectives:lines(s.children),
      visual:{image:(s.visualItems[0] && s.visualItems[0].src) || '', example:(s.visualItems[0] && s.visualItems[0].example) || ''},
      fill:[s.example ? `Exemple : ${s.example}` : 'Exemple : ____', s.example || '', [s.example || 'Exemple', s.title, 'Autre exemple']],
      drag:[[s.title, s.definition || '']]
    })));
    clone.integration = Object.assign({}, unit.integration || {}, {
      scenario:c.scenario || '',
      questions:c.integrationTasks.map(t => [t.task || t.question || '', t.expected || t.correction || '']),
      tasks:c.integrationTasks.map(t => t.task || t.question || '').filter(Boolean)
    });
    clone.exam = c.examQuestions.map(x => [x.question, x.options, x.correct]);
    clone._v172TeacherContent = saved(unit);
    return clone;
  }

  function safeRender(title, callback){
    try{
      const html = callback();
      if(!html) return '';
      return `<section class="v224-real-block"><h4>${h(title)}</h4><div class="v224-real-html">${html}</div></section>`;
    }catch(e){
      return `<section class="v224-real-block"><h4>${h(title)}</h4><p class="v224-empty-text">Impossible d’afficher cette partie automatiquement.</p></section>`;
    }
  }

  function renderRealPreview(unit, c){
    const u = cloneUnitForPreview(unit, c);
    let lessonHtml = '';
    (u.lessons || []).forEach((lesson, i) => {
      lessonHtml += `<article class="v224-real-lesson">
        <h4>${h(i+1)}. ${h(lesson.title || 'Sous-titre')}</h4>
        ${safeRender('Style visuel', () => typeof visualPanel === 'function' ? visualPanel(lesson) : '')}
        ${safeRender('Style auditif', () => typeof audioPanel === 'function' ? audioPanel(lesson) : '')}
        ${safeRender('Style kinesthésique', () => typeof kinePanel === 'function' ? kinePanel(lesson) : '')}
      </article>`;
    });

    return `<section class="v224-preview" data-v224-preview>
      <header><span>Aperçu réel</span><h3>Contenu affiché comme dans l’espace élève</h3></header>
      <p class="v224-note">Cette zone permet de vérifier que l’unité est complète avant modification : cours, styles, dictionnaire, intégration et contrôle.</p>
      <div class="v224-real-unit">
        <h3>${h(c.title || unit.title)}</h3>
        <p>${h(c.intro || '')}</p>
      </div>
      ${lessonHtml}
      ${safeRender('Dictionnaire', () => typeof renderDictionary === 'function' ? renderDictionary(u) : '')}
      ${safeRender('Situation d’intégration', () => typeof renderIntegration === 'function' ? renderIntegration(u) : '')}
      ${safeRender('Contrôle final', () => typeof renderExam === 'function' ? renderExam(u) : '')}
    </section>`;
  }

  function input(name, value, placeholder){ return `<input data-field="${h(name)}" value="${h(value)}" placeholder="${h(placeholder || '')}">`; }
  function textarea(name, value, rows, placeholder){ return `<textarea data-field="${h(name)}" rows="${rows || 3}" placeholder="${h(placeholder || '')}">${h(value)}</textarea>`; }

  function renderUnitList(activeId){
    return `<aside class="v224-unit-list">
      <h3>Unités</h3>
      <p>Choisir une unité pour afficher tout son contenu.</p>
      ${allUnits().map((u,i)=>`<button type="button" class="v224-unit-btn ${String(u.id)===String(activeId)?'active':''}" data-v224-unit="${h(u.id)}">
        <span>Unité ${i+1}</span><strong>${h(u.title || '')}</strong><small>${h(u.short || '')}</small>
      </button>`).join('')}
    </aside>`;
  }

  function renderGeneral(c){
    return `<section class="v224-edit-section">
      <header><span>01</span><h3>Informations générales</h3></header>
      <div class="v224-grid2">
        <label>Année scolaire
          <select data-field="schoolYear">
            <option value="1ac" ${c.schoolYear==='1ac'?'selected':''}>1ère année</option>
            <option value="2ac" ${c.schoolYear==='2ac'?'selected':''}>2ème année</option>
            <option value="3ac" ${c.schoolYear==='3ac'?'selected':''}>3ème année</option>
          </select>
        </label>
        <label>Nom de l’unité ${input('title', c.title)}</label>
        <label>Résumé court ${input('short', c.short)}</label>
        <label>Volume horaire ${input('duration', c.duration)}</label>
        <label>Compétence ${input('competence', c.competence)}</label>
      </div>
      <label>Description générale ${textarea('intro', c.intro, 4)}</label>
    </section>`;
  }

  function renderVisualRow(v, i){
    return `<article class="v224-media-row" data-v224-visual-row data-v190-visual-row>
      <div class="v224-row-head"><strong>Image / vidéo ${i+1}</strong><button type="button" data-v224-remove-row>Supprimer</button></div>
      <div class="v224-media-grid">
        <div class="v224-mini-preview">${mediaPreview(v.src, v.title)}</div>
        <div class="v224-fields">
          <label>Titre ${input('title', v.title)}</label>
          <label>Référence média ${input('src', v.src)}</label>
          <label>Parcourir image / vidéo <input type="file" accept="image/*,video/mp4,video/webm,video/ogg" data-v181-add-file="src"></label>
        </div>
      </div>
      <label>Définition / légende ${textarea('description', v.description, 3)}</label>
      <label>Exemple ${textarea('example', v.example, 3)}</label>
      <div class="v224-grid2">
        <label>Action ${textarea('action', v.action, 2)}</label>
        <label>À retenir ${textarea('remember', v.remember, 2)}</label>
      </div>
    </article>`;
  }
  function renderAudioRow(a, i){
    return `<article class="v224-media-row" data-v224-audio-row data-v190-audio-row>
      <div class="v224-row-head"><strong>Audio / vidéo ${i+1}</strong><button type="button" data-v224-remove-row>Supprimer</button></div>
      <label>Titre ${input('title', a.title)}</label>
      <input type="hidden" data-field="src" value="${h(a.src)}">
      <div class="v224-mini-preview v194-media-preview">${mediaPreview(a.src, a.title)}</div>
      <label>Parcourir audio / vidéo <input type="file" accept="audio/*,video/mp4,video/webm,video/ogg,video/quicktime,.mp3,.wav,.m4a,.ogg,.mp4,.webm,.mov" data-v181-add-file="src"></label>
      <label>Texte français ${textarea('text', a.text, 4)}</label>
      <label>Texte arabe ${textarea('ar', a.ar, 3)}</label>
    </article>`;
  }
  function renderKineRow(k, i){
    const types = ['Question directe','QCM','Compléter','Association','Ordre logique','Tâche pratique'];
    return `<article class="v224-kine-row" data-v224-kine-row>
      <div class="v224-row-head"><strong>Exercice ${i+1}</strong><button type="button" data-v224-remove-row>Supprimer</button></div>
      <div class="v224-grid2">
        <label>Type <select data-field="type">${types.map(t=>`<option ${k.type===t?'selected':''}>${h(t)}</option>`).join('')}</select></label>
        <label>Réponse courte ${input('answer', k.answer)}</label>
      </div>
      <label>Question / consigne ${textarea('question', k.question, 3)}</label>
      <label>Choix QCM ${textarea('options', k.options, 3)}</label>
      <label>Association ${textarea('pairs', k.pairs, 3)}</label>
      <label>Ordre logique ${textarea('steps', k.steps, 3)}</label>
      <label>Correction simple ${textarea('correction', k.correction, 3)}</label>
    </article>`;
  }

  function renderSubtitle(s, i){
    return `<article class="v224-subtitle" data-v224-subtitle>
      <div class="v224-row-head"><strong>Sous-titre ${i+1}</strong><button type="button" data-v224-remove-subtitle>Supprimer</button></div>
      <div class="v224-grid2">
        <label>Nom ${input('title', s.title)}</label>
        <label>Exemple clé ${input('example', s.example)}</label>
      </div>
      <label>Définition ${textarea('definition', s.definition, 4)}</label>
      <label>Fils de carte mentale ${textarea('children', s.children, 4)}</label>
      <div class="v224-style-card"><h4>Style visuel</h4><div data-v224-visual-list>${(s.visualItems || []).map(renderVisualRow).join('') || '<p class="v224-empty-text">Aucun média visuel.</p>'}</div><button type="button" data-v224-add-visual>Ajouter image / vidéo</button></div>
      <div class="v224-style-card"><h4>Style auditif</h4><div data-v224-audio-list>${(s.audioItems || []).map(renderAudioRow).join('') || '<p class="v224-empty-text">Aucun support auditif.</p>'}</div><button type="button" data-v224-add-audio>Ajouter audio / vidéo</button></div>
      <div class="v224-style-card"><h4>Style kinesthésique</h4><div data-v224-kine-list>${(s.kineExercises || []).map(renderKineRow).join('') || '<p class="v224-empty-text">Aucun exercice.</p>'}</div><button type="button" data-v224-add-kine>Ajouter exercice</button></div>
    </article>`;
  }

  function renderSubtitles(c){
    return `<section class="v224-edit-section">
      <header><span>02</span><h3>Sous-titres et styles</h3></header>
      <p class="v224-note">Tous les médias et exercices récupérés pour chaque sous-titre sont affichés ici.</p>
      <div data-v224-subtitle-list>${c.subtitleItems.map(renderSubtitle).join('')}</div>
      <button type="button" data-v224-add-subtitle>Ajouter sous-titre</button>
    </section>`;
  }

  function renderDictionary(c){
    const rows = c.dictionary.length ? c.dictionary : [{term:'',value:''}];
    return `<section class="v224-edit-section">
      <header><span>03</span><h3>Dictionnaire</h3></header>
      <div data-v224-dictionary-list>${rows.map((r,i)=>`<article class="v224-simple-row" data-v224-dict-row><div class="v224-row-head"><strong>Terme ${i+1}</strong><button type="button" data-v224-remove-row>Supprimer</button></div><div class="v224-grid2"><label>Mot ${input('term', r.term)}</label><label>Traduction / définition ${input('value', r.value)}</label></div></article>`).join('')}</div>
      <button type="button" data-v224-add-dict>Ajouter terme</button>
    </section>`;
  }

  function renderMindmap(c){
    const rows = c.mindmapBranches.length ? c.mindmapBranches : c.subtitleItems.map(s => ({title:s.title, definition:s.definition, example:s.example, children:lines(s.children)}));
    return `<section class="v224-edit-section">
      <header><span>04</span><h3>Carte mentale</h3></header>
      <div data-v224-branch-list>${rows.map((b,i)=>`<article class="v224-simple-row" data-v224-branch-row><div class="v224-row-head"><strong>Branche ${i+1}</strong><button type="button" data-v224-remove-row>Supprimer</button></div><div class="v224-grid2"><label>Fil principal ${input('title', b.title || '')}</label><label>Exemple ${input('example', b.example || '')}</label></div><label>Définition ${textarea('definition', b.definition || '', 3)}</label><label>Sous-fils ${textarea('children', Array.isArray(b.children) ? b.children.join('\n') : (b.children || ''), 4)}</label></article>`).join('')}</div>
      <button type="button" data-v224-add-branch>Ajouter branche</button>
    </section>`;
  }

  function renderIntegrationEdit(c){
    const rows = c.integrationTasks.length ? c.integrationTasks : [{task:'',expected:''}];
    return `<section class="v224-edit-section">
      <header><span>05</span><h3>Situation d’intégration</h3></header>
      <label>Situation / production ${textarea('scenario', c.scenario || '', 5)}</label>
      <div data-v224-task-list>${rows.map((t,i)=>`<article class="v224-simple-row" data-v224-task-row><div class="v224-row-head"><strong>Question ${i+1}</strong><button type="button" data-v224-remove-row>Supprimer</button></div><label>Question / tâche ${textarea('task', t.task || t.question || '', 3)}</label><label>Production attendue ${textarea('expected', t.expected || t.correction || '', 3)}</label></article>`).join('')}</div>
      <button type="button" data-v224-add-task>Ajouter question</button>
    </section>`;
  }

  function renderExamEdit(c){
    const rows = c.examQuestions.length ? c.examQuestions : [{question:'',options:['','','',''],correct:0}];
    return `<section class="v224-edit-section">
      <header><span>06</span><h3>Contrôle final</h3></header>
      <div data-v224-exam-list>${rows.map((ex,i)=>`<article class="v224-simple-row" data-v224-exam-row><div class="v224-row-head"><strong>Question ${i+1}</strong><button type="button" data-v224-remove-row>Supprimer</button></div><label>Question ${textarea('question', ex.question || '', 3)}</label><div class="v224-grid2">${(ex.options || ['', '', '', '']).slice(0,4).map((op,idx)=>`<label>Choix ${idx+1} <input data-field="option" value="${h(op)}"></label>`).join('')}</div><label>Bonne réponse <select data-field="correct">${[0,1,2,3].map(idx => `<option value="${idx}" ${Number(ex.correct)===idx?'selected':''}>Choix ${idx+1}</option>`).join('')}</select></label></article>`).join('')}</div>
      <button type="button" data-v224-add-exam>Ajouter question</button>
    </section>`;
  }

  function renderEditForms(c){
    return `<section class="v224-edit-forms" data-v224-edit-forms>
      <header><span>Formulaire complet</span><h3>Modifier toutes les parties de l’unité</h3></header>
      ${renderGeneral(c)}
      ${renderSubtitles(c)}
      ${renderDictionary(c)}
      ${renderMindmap(c)}
      ${renderIntegrationEdit(c)}
      ${renderExamEdit(c)}
      <div class="v224-save-bar"><button type="button" class="btn" data-v224-save>Enregistrer tout le contenu</button><p id="v224Msg" class="v172-message" aria-live="polite"></p></div>
    </section>`;
  }

  function renderModifyPanel(id){
    if(renderLock) return;
    const panel = q('[data-v176-panel="modify"]');
    if(!panel) return;
    const unit = unitById(id || activeId || q('#v172UnitSelect')?.value || (allUnits()[0] && allUnits()[0].id));
    if(!unit) return;
    activeId = unit.id;
    const c = derive(unit);

    renderLock = true;
    panel.innerHTML = `<div class="v224-modify" data-v224-modify>
      <div class="v224-header"><div><span class="mini-pill">Modifier unité</span><h2>Affichage complet de l’unité</h2><p>L’unité sélectionnée apparaît d’abord comme elle est dans l’espace élève, puis le formulaire complet permet de modifier chaque partie.</p></div></div>
      <div class="v224-layout">
        ${renderUnitList(unit.id)}
        <main class="v224-main" data-v224-content data-v224-unit-id="${h(unit.id)}">
          ${renderRealPreview(unit, c)}
          ${renderEditForms(c)}
        </main>
      </div>
    </div>`;
    renderLock = false;
  }

  function collectField(root, name){ return q(`[data-field="${name}"]`, root)?.value || ''; }

  function collectSubtitles(){
    return qa('[data-v224-subtitle]').map((row,i) => {
      const title = collectField(row,'title').trim() || `Sous-titre ${i+1}`;

      const visualItems = qa('[data-v224-visual-row]', row).map((vr,j)=>Object.assign(normalizeVisual({
        title:collectField(vr,'title'), src:collectField(vr,'src'), description:collectField(vr,'description'),
        example:collectField(vr,'example'), action:collectField(vr,'action'), remember:collectField(vr,'remember')
      }, j, title), {subtitleTitle:title})).filter(x => x.title || x.src || x.description || x.example || x.action || x.remember);

      const audioItems = qa('[data-v224-audio-row]', row).map((ar,j)=>Object.assign(normalizeAudio({
        title:collectField(ar,'title'), src:collectField(ar,'src'), text:collectField(ar,'text'), ar:collectField(ar,'ar')
      }, j, title), {subtitleTitle:title})).filter(x => x.title || x.src || x.text || x.ar);

      const kineExercises = qa('[data-v224-kine-row]', row).map(kr=>Object.assign(normalizeKine({
        type:collectField(kr,'type'), question:collectField(kr,'question'), options:collectField(kr,'options'),
        pairs:collectField(kr,'pairs'), steps:collectField(kr,'steps'), answer:collectField(kr,'answer'), correction:collectField(kr,'correction')
      }), {subtitleTitle:title})).filter(x => x.question || x.options || x.pairs || x.steps || x.answer || x.correction);

      const v0 = visualItems[0] || {};
      const a0 = audioItems[0] || {};
      const k0 = kineExercises[0] || {};

      return {
        title, definition:collectField(row,'definition'), example:collectField(row,'example'), children:lines(collectField(row,'children')),
        visualItems, audioItems, kineExercises,
        visualTitle:v0.title || '', visualSrc:v0.src || '', visualDescription:v0.description || '', visualExample:v0.example || '', visualAction:v0.action || '', visualRemember:v0.remember || '',
        audioTitle:a0.title || '', audioSrc:a0.src || '', audioText:a0.text || '', audioAr:a0.ar || '',
        kineType:k0.type || 'Question directe', kineQuestion:k0.question || '', kineOptions:k0.options || '', kinePairs:k0.pairs || '', kineSteps:k0.steps || '', kineAnswer:k0.answer || '', kineCorrection:k0.correction || ''
      };
    });
  }

  function collectDictionary(){ return qa('[data-v224-dict-row]').map(row => [collectField(row,'term'), collectField(row,'value')]).filter(x => x[0] || x[1]); }
  function collectBranches(){ return qa('[data-v224-branch-row]').map((row,i)=>({title:collectField(row,'title') || `Branche ${i+1}`, definition:collectField(row,'definition'), example:collectField(row,'example'), children:lines(collectField(row,'children'))})).filter(x => x.title || x.definition || x.example || x.children.length); }
  function collectTasks(){ return qa('[data-v224-task-row]').map(row=>({task:collectField(row,'task'), expected:collectField(row,'expected')})).filter(x => x.task || x.expected); }
  function collectExam(){
    return qa('[data-v224-exam-row]').map(row => {
      const opts = qa('[data-field="option"]', row).map(x => x.value || '');
      while(opts.length < 4) opts.push('');
      return [collectField(row,'question'), opts.slice(0,4), Number(collectField(row,'correct') || 0)];
    }).filter(x => x[0] || x[1].some(Boolean));
  }

  function buildLessons(items){
    return items.map(item => ({
      title:item.title, officialFocus:item.title, objective:item.definition, fr:item.definition,
      ar:item.audioAr || '', officialObjectives:Array.isArray(item.children) ? item.children : lines(item.children),
      visual:{image:item.visualSrc || '', example:item.visualExample || ''},
      fill:[item.example ? `Exemple : ${item.example}` : 'Exemple : ____', item.example || '', [item.example || 'Exemple', item.title, 'Autre exemple']],
      drag:[[item.title, item.definition || '']]
    }));
  }

  function saveAll(){
    const content = q('[data-v224-content]');
    if(!content) return;
    const unit = unitById(content.dataset.v224UnitId);
    if(!unit) return;
    const old = saved(unit);
    const subtitles = collectSubtitles();
    const branches = collectBranches();
    const tasks = collectTasks();
    const exam = collectExam();

    const payload = Object.assign({}, old, {
      title:collectField(content,'title') || unit.title || '',
      short:collectField(content,'short') || '',
      intro:collectField(content,'intro') || '',
      competence:collectField(content,'competence') || '',
      duration:collectField(content,'duration') || '',
      schoolYear:collectField(content,'schoolYear') || unit.schoolYear || '1ac',
      subtitleItems:subtitles,
      lessons:buildLessons(subtitles),
      visualItems:subtitles.flatMap(s => (s.visualItems || []).map(v => Object.assign({}, v, {subtitleTitle:s.title}))),
      audioItems:subtitles.flatMap(s => (s.audioItems || []).map(a => Object.assign({}, a, {subtitleTitle:s.title}))),
      kineQuestions:subtitles.flatMap(s => (s.kineExercises || []).map(k => Object.assign({}, k, {subtitleTitle:s.title}))),
      mindmapBranches:branches.length ? branches : subtitles.map(s => ({title:s.title, definition:s.definition, example:s.example, children:s.children})),
      dictionary:collectDictionary(),
      scenario:collectField(content,'scenario') || '',
      integrationScenario:collectField(content,'scenario') || '',
      integrationTasks:tasks,
      questions:tasks.map(t => ({task:t.task, expected:t.expected})),
      examQuestions:exam,
      exam:exam
    });

    writeJson(keyFor(unit.id), payload);

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
        unit.exam = payload.examQuestions || unit.exam;
        unit.dictionary = payload.dictionary || unit.dictionary;
        const rows = readJson(CUSTOM_UNITS_KEY, []);
        if(Array.isArray(rows)){
          const idx = rows.findIndex(u => u && u.id === unit.id);
          if(idx >= 0) rows[idx] = Object.assign({}, unit); else rows.push(Object.assign({}, unit));
          writeJson(CUSTOM_UNITS_KEY, rows);
        }
      }
    }catch(e){}

    const msg = q('#v224Msg');
    if(msg){ msg.className = 'v172-message ok'; msg.textContent = 'Tout le contenu de cette unité a été enregistré.'; }
  }

  function addRow(type, btn){
    if(type === 'subtitle'){
      const list = q('[data-v224-subtitle-list]');
      list.insertAdjacentHTML('beforeend', renderSubtitle({title:`Sous-titre ${qa('[data-v224-subtitle]', list).length+1}`,definition:'',example:'',children:'',visualItems:[],audioItems:[],kineExercises:[]}, qa('[data-v224-subtitle]', list).length));
      return;
    }
    if(type === 'visual'){
      const list = btn.closest('.v224-style-card').querySelector('[data-v224-visual-list]');
      list.querySelector('.v224-empty-text')?.remove();
      list.insertAdjacentHTML('beforeend', renderVisualRow(normalizeVisual({}, qa('[data-v224-visual-row]', list).length, ''), qa('[data-v224-visual-row]', list).length));
      return;
    }
    if(type === 'audio'){
      const list = btn.closest('.v224-style-card').querySelector('[data-v224-audio-list]');
      list.querySelector('.v224-empty-text')?.remove();
      list.insertAdjacentHTML('beforeend', renderAudioRow(normalizeAudio({}, qa('[data-v224-audio-row]', list).length, ''), qa('[data-v224-audio-row]', list).length));
      return;
    }
    if(type === 'kine'){
      const list = btn.closest('.v224-style-card').querySelector('[data-v224-kine-list]');
      list.querySelector('.v224-empty-text')?.remove();
      list.insertAdjacentHTML('beforeend', renderKineRow(normalizeKine({}), qa('[data-v224-kine-row]', list).length));
      return;
    }
    if(type === 'dict'){
      q('[data-v224-dictionary-list]').insertAdjacentHTML('beforeend', `<article class="v224-simple-row" data-v224-dict-row><div class="v224-row-head"><strong>Terme</strong><button type="button" data-v224-remove-row>Supprimer</button></div><div class="v224-grid2"><label>Mot ${input('term','')}</label><label>Traduction / définition ${input('value','')}</label></div></article>`);
      return;
    }
    if(type === 'branch'){
      q('[data-v224-branch-list]').insertAdjacentHTML('beforeend', `<article class="v224-simple-row" data-v224-branch-row><div class="v224-row-head"><strong>Branche</strong><button type="button" data-v224-remove-row>Supprimer</button></div><div class="v224-grid2"><label>Fil principal ${input('title','')}</label><label>Exemple ${input('example','')}</label></div><label>Définition ${textarea('definition','',3)}</label><label>Sous-fils ${textarea('children','',4)}</label></article>`);
      return;
    }
    if(type === 'task'){
      q('[data-v224-task-list]').insertAdjacentHTML('beforeend', `<article class="v224-simple-row" data-v224-task-row><div class="v224-row-head"><strong>Question</strong><button type="button" data-v224-remove-row>Supprimer</button></div><label>Question / tâche ${textarea('task','',3)}</label><label>Production attendue ${textarea('expected','',3)}</label></article>`);
      return;
    }
    if(type === 'exam'){
      q('[data-v224-exam-list]').insertAdjacentHTML('beforeend', `<article class="v224-simple-row" data-v224-exam-row><div class="v224-row-head"><strong>Question</strong><button type="button" data-v224-remove-row>Supprimer</button></div><label>Question ${textarea('question','',3)}</label><div class="v224-grid2">${[0,1,2,3].map(i=>`<label>Choix ${i+1} <input data-field="option" value=""></label>`).join('')}</div><label>Bonne réponse <select data-field="correct">${[0,1,2,3].map(i=>`<option value="${i}">Choix ${i+1}</option>`).join('')}</select></label></article>`);
    }
  }

  function css(){
    if(q('#v224-style')) return;
    const st = document.createElement('style');
    st.id = 'v224-style';
    st.textContent = `
      .v224-modify{display:grid;gap:20px}
      .v224-header,.v224-preview,.v224-edit-forms,.v224-edit-section,.v224-unit-list,.v224-subtitle,.v224-simple-row,.v224-media-row,.v224-kine-row{background:#fff;border:1px solid rgba(15,23,42,.10);border-radius:24px;box-shadow:0 14px 34px rgba(15,23,42,.08)}
      .v224-header{padding:22px}.v224-header h2{margin:.25rem 0;color:#0f172a}.v224-header p{margin:0;line-height:1.65;color:#475569;font-weight:650}
      .v224-layout{display:grid;grid-template-columns:300px minmax(0,1fr);gap:20px;align-items:start}
      .v224-unit-list{position:sticky;top:18px;padding:18px;display:grid;gap:12px}
      .v224-unit-list h3{margin:0;color:#0f172a}.v224-unit-list p{margin:0;color:#64748b;line-height:1.5;font-weight:650}
      .v224-unit-btn{display:grid;text-align:left;gap:5px;border:1px solid rgba(37,99,235,.14);background:#f8fafc;border-radius:18px;padding:13px;cursor:pointer;color:#0f172a}
      .v224-unit-btn span{font-weight:900;color:#2563eb;font-size:.82rem}.v224-unit-btn strong{font-size:.96rem}.v224-unit-btn small{color:#64748b;line-height:1.35}
      .v224-unit-btn.active{background:#eff6ff;border-color:rgba(37,99,235,.35);box-shadow:0 10px 26px rgba(37,99,235,.12)}
      .v224-main{display:grid;gap:20px}
      .v224-preview{padding:20px;display:grid;gap:16px}.v224-preview>header,.v224-edit-forms>header,.v224-edit-section>header{display:flex;align-items:center;gap:12px;border-bottom:1px solid rgba(15,23,42,.08);padding-bottom:12px}
      .v224-preview>header span,.v224-edit-forms>header span,.v224-edit-section>header span{display:inline-flex;border-radius:999px;background:#dbeafe;color:#1d4ed8;font-weight:950;padding:8px 12px}
      .v224-preview h3,.v224-edit-forms h3,.v224-edit-section h3{margin:0;color:#0f172a}
      .v224-note{background:#eff6ff;border:1px solid rgba(37,99,235,.18);color:#1e3a8a;border-radius:18px;padding:13px 16px;font-weight:750;line-height:1.65;margin:0}
      .v224-real-unit{background:linear-gradient(135deg,#1e3a8a,#2563eb);border-radius:22px;color:#fff;padding:18px}.v224-real-unit h3{margin:0 0 8px;color:#fff}.v224-real-unit p{margin:0;line-height:1.6}
      .v224-real-lesson,.v224-real-block{border:1px solid rgba(15,23,42,.10);border-radius:20px;padding:16px;background:#f8fafc;display:grid;gap:12px}
      .v224-real-block h4,.v224-real-lesson h4{margin:0;color:#1e3a8a}.v224-real-html .panel{box-shadow:none!important;margin:0!important}.v224-real-html{overflow:auto}
      .v224-edit-forms{padding:20px;display:grid;gap:18px}.v224-edit-section{padding:20px;display:grid;gap:14px}
      .v224-grid2{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
      .v224-edit-section label,.v224-subtitle label,.v224-simple-row label,.v224-media-row label,.v224-kine-row label{display:grid;gap:7px;font-weight:850;color:#1f2937}
      .v224-edit-section input,.v224-edit-section textarea,.v224-edit-section select,.v224-subtitle input,.v224-subtitle textarea,.v224-subtitle select,.v224-simple-row input,.v224-simple-row textarea,.v224-simple-row select,.v224-media-row input,.v224-media-row textarea,.v224-kine-row input,.v224-kine-row textarea,.v224-kine-row select{width:100%;box-sizing:border-box;border:1px solid rgba(15,23,42,.14);border-radius:16px;padding:11px 12px;background:#fff;color:#0f172a;font:inherit}
      .v224-subtitle,.v224-simple-row,.v224-media-row,.v224-kine-row{padding:16px;margin:12px 0}
      .v224-row-head{display:flex;align-items:center;justify-content:space-between;gap:12px;flex-wrap:wrap}.v224-row-head strong{color:#0f172a}
      .v224-style-card{border:1px solid rgba(37,99,235,.14);background:linear-gradient(180deg,#f8fbff,#fff);border-radius:22px;padding:16px;display:grid;gap:12px}.v224-style-card h4{margin:0;color:#1e3a8a}
      .v224-media-grid{display:grid;grid-template-columns:minmax(230px,340px) 1fr;gap:14px;align-items:start}.v224-fields{display:grid;gap:12px}
      .v224-mini-preview{min-height:130px;border:1px dashed rgba(37,99,235,.25);background:#f8fafc;border-radius:18px;padding:10px;display:grid;place-items:center;color:#64748b;font-weight:850}
      .v224-mini-preview img{max-width:100%;max-height:260px;object-fit:contain;border-radius:14px}.v224-mini-preview video{width:100%;max-height:280px;border-radius:14px;background:#0f172a}.v224-mini-preview audio{width:100%}
      .v224-empty-text{margin:0;background:#f8fafc;border:1px dashed rgba(15,23,42,.14);border-radius:16px;padding:14px;color:#64748b;font-weight:750}
      .v224-edit-forms button,.v224-unit-btn{font-weight:900}.v224-edit-forms button:not(.btn){border-radius:999px;border:1px solid rgba(37,99,235,.18);background:#fff;color:#1d4ed8;padding:9px 14px;cursor:pointer}
      .v224-row-head button{color:#991b1b!important;border-color:rgba(153,27,27,.18)!important}
      .v224-save-bar{position:sticky;bottom:14px;background:rgba(255,255,255,.94);backdrop-filter:blur(10px);border:1px solid rgba(15,23,42,.10);border-radius:24px;padding:14px;box-shadow:0 14px 34px rgba(15,23,42,.12);display:flex;align-items:center;gap:16px;flex-wrap:wrap}
      @media(max-width:980px){.v224-layout{grid-template-columns:1fr}.v224-unit-list{position:static}.v224-grid2,.v224-media-grid{grid-template-columns:1fr}}
    `;
    document.head.appendChild(st);
  }

  function scheduleRender(){
    clearTimeout(timer);
    timer = setTimeout(() => {
      css();
      if(q('[data-v176-panel="modify"]')) renderModifyPanel(activeId);
    }, 120);
  }

  document.addEventListener('click', function(e){
    const dash = e.target.closest && e.target.closest('[data-v176-dashboard]');
    if(dash && dash.dataset.v176Dashboard === 'modify'){ setTimeout(scheduleRender, 80); return; }

    const unitBtn = e.target.closest && e.target.closest('[data-v224-unit]');
    if(unitBtn){ e.preventDefault(); activeId = unitBtn.dataset.v224Unit; renderModifyPanel(activeId); return; }

    const save = e.target.closest && e.target.closest('[data-v224-save]');
    if(save){ e.preventDefault(); saveAll(); return; }

    const rem = e.target.closest && e.target.closest('[data-v224-remove-row]');
    if(rem){ e.preventDefault(); rem.closest('[data-v224-visual-row],[data-v224-audio-row],[data-v224-kine-row],[data-v224-dict-row],[data-v224-branch-row],[data-v224-task-row],[data-v224-exam-row]')?.remove(); return; }

    const remSub = e.target.closest && e.target.closest('[data-v224-remove-subtitle]');
    if(remSub){ e.preventDefault(); if(qa('[data-v224-subtitle]').length > 1) remSub.closest('[data-v224-subtitle]')?.remove(); return; }

    if(e.target.closest && e.target.closest('[data-v224-add-subtitle]')){ e.preventDefault(); addRow('subtitle', e.target); return; }
    if(e.target.closest && e.target.closest('[data-v224-add-visual]')){ e.preventDefault(); addRow('visual', e.target); return; }
    if(e.target.closest && e.target.closest('[data-v224-add-audio]')){ e.preventDefault(); addRow('audio', e.target); return; }
    if(e.target.closest && e.target.closest('[data-v224-add-kine]')){ e.preventDefault(); addRow('kine', e.target); return; }
    if(e.target.closest && e.target.closest('[data-v224-add-dict]')){ e.preventDefault(); addRow('dict', e.target); return; }
    if(e.target.closest && e.target.closest('[data-v224-add-branch]')){ e.preventDefault(); addRow('branch', e.target); return; }
    if(e.target.closest && e.target.closest('[data-v224-add-task]')){ e.preventDefault(); addRow('task', e.target); return; }
    if(e.target.closest && e.target.closest('[data-v224-add-exam]')){ e.preventDefault(); addRow('exam', e.target); return; }
  }, true);

  document.addEventListener('change', function(e){
    if(e.target && e.target.matches && e.target.matches('input[type="file"]')){
      setTimeout(() => {
        const row = e.target.closest('[data-v224-visual-row],[data-v224-audio-row]');
        if(row){
          const preview = q('.v224-mini-preview', row);
          if(preview) preview.innerHTML = mediaPreview(collectField(row,'src'), collectField(row,'title'));
        }
      }, 700);
    }
  }, true);

  function start(){
    css();
    scheduleRender();
    try{
      new MutationObserver(function(){
        const p = q('[data-v176-panel="modify"]');
        if(p && !q('[data-v224-modify]', p)) scheduleRender();
      }).observe(document.body, {childList:true, subtree:true});
    }catch(e){}
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();

  window.EPI_V224_MODIFY_REAL = {renderModifyPanel, derive, saveAll};
})();