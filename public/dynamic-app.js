/* =========================================================
   ÉPI — Couche dynamique finale (v169)
   Ajouts : données séparées, navigation dynamique, carte mentale
   interactive, questions pratiques une par une, productions attendues,
   suivi local de progression et mode enseignant local.
========================================================= */
(function(){
  'use strict';
  const V169 = 'v170-dynamique-sans-edition-eleve';
  const LIB = (window.EPI_CONTENT_LIBRARY && window.EPI_CONTENT_LIBRARY.v169) || {};
  const PROGRESS_KEY = 'epi_v169_dynamic_progress';
  const TEACHER_KEY_PREFIX = 'epi_v169_teacher_questions_';
  const UNIT_CONTENT_KEY_PREFIX = 'epi_v170_unit_content_';
  const SECTION_KEY_PREFIX = 'epi_v169_active_section_';
  const QUESTION_KEY_PREFIX = 'epi_v169_active_question_';
  const TEACHER_UNLOCK_KEY = 'epi_v169_teacher_unlocked';
  const teacherPassword = (typeof PROF_PASSWORD !== 'undefined' && PROF_PASSWORD) ? PROF_PASSWORD : 'EduLibre2026';

  function qs(sel, root){ return (root || document).querySelector(sel); }
  function qsa(sel, root){ return Array.from((root || document).querySelectorAll(sel)); }
  function safeEsc(value){
    if(typeof esc === 'function') return esc(value == null ? '' : String(value));
    return String(value == null ? '' : value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
  }
  function clean(value){ return String(value || '').replace(/^\s*Unité\s*\d+\s*:\s*/i,'').trim(); }
  function getUnit(){ return (typeof currentUnit === 'function') ? currentUnit() : (typeof UNITS !== 'undefined' ? UNITS[0] : null); }
  function getLessons(unit){ return Array.isArray(unit && unit.lessons) ? unit.lessons : []; }
  function lowerUnitText(unit){ return [unit && unit.id, unit && unit.title, unit && unit.short, unit && unit.intro].filter(Boolean).join(' ').toLowerCase(); }
  function kindOf(unit){
    const t = lowerUnitText(unit);
    if(t.includes('tableur') || t.includes('excel') || t.includes('classeur') || t.includes('graphique')) return 'tableur';
    if(t.includes('logo') || t.includes('tortue') || t.includes('programme') || t.includes('programmation')) return 'logo';
    if(t.includes('système informatique') || t.includes('materiel') || t.includes('matériel') || t.includes('périph')) return 'systeme';
    if(t.includes('système d’exploitation') || t.includes('exploitation') || t.includes('bureau') || t.includes('fichier') || t.includes('dossier')) return 'os';
    return 'default';
  }
  function baseData(unit){
    const base = LIB[kindOf(unit)] || LIB.default || {scenario:'', questions:[], mindmapExamples:{}};
    const custom = customUnitContent(unit) || {};
    return Object.assign({}, base, custom, {
      scenario: custom.scenario || custom.integrationScenario || base.scenario || '',
      questions: Array.isArray(custom.questions) && custom.questions.length ? custom.questions : base.questions || [],
      mindmapExamples: Object.assign({}, base.mindmapExamples || {}, custom.mindmapExamples || {})
    });
  }
  function readJson(key, fallback){
    try{ const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }catch(e){ return fallback; }
  }
  function writeJson(key, value){ localStorage.setItem(key, JSON.stringify(value)); }
  function unitContentKey(unit){ return UNIT_CONTENT_KEY_PREFIX + (unit && unit.id ? unit.id : 'unit'); }
  function customUnitContent(unit){ return readJson(unitContentKey(unit), null); }
  function applyContentOverrides(){
    try{
      if(!Array.isArray(UNITS)) return;
      UNITS.forEach(unit => {
        if(!unit || !unit.id) return;
        const custom = customUnitContent(unit);
        if(!custom || typeof custom !== 'object') return;
        if(typeof custom.title === 'string' && custom.title.trim()) unit.title = custom.title.trim();
        if(typeof custom.intro === 'string') unit.intro = custom.intro;
        ['short','color','competence','duration'].forEach(key => { if(typeof custom[key] === 'string') unit[key] = custom[key]; });
        if(Array.isArray(custom.officialResources)) unit.officialResources = custom.officialResources;
        if(Array.isArray(custom.dictionary)) unit.dictionary = custom.dictionary;
        if(Array.isArray(custom.exam)) unit.exam = custom.exam;
        if(custom.integration && typeof custom.integration === 'object') unit.integration = Object.assign({}, unit.integration || {}, custom.integration);
        if(Array.isArray(custom.lessons)){
          const current = Array.isArray(unit.lessons) ? unit.lessons : [];
          unit.lessons = custom.lessons.map((lesson, index) => Object.assign({}, current[index] || {}, lesson || {}));
        }
        if(typeof custom.integrationScenario === 'string' || typeof custom.scenario === 'string'){
          unit.integration = Object.assign({}, unit.integration || {}, { scenario: custom.integrationScenario || custom.scenario });
        }
        unit._v170TeacherContent = custom;
      });
    }catch(e){}
  }
  function readProgress(){ return readJson(PROGRESS_KEY, {}); }
  function writeProgress(data){ writeJson(PROGRESS_KEY, data); }
  function unitProgress(unit){
    const all = readProgress();
    const id = unit && unit.id ? unit.id : 'unit';
    const p = all[id] || {done:{}, visited:{}, updated:null};
    p.done = p.done || {}; p.visited = p.visited || {};
    return p;
  }
  function saveUnitProgress(unit, p){
    const all = readProgress();
    const id = unit && unit.id ? unit.id : 'unit';
    p.updated = new Date().toISOString();
    all[id] = p;
    writeProgress(all);
  }
  function teacherQuestionsKey(unit){ return TEACHER_KEY_PREFIX + (unit && unit.id ? unit.id : 'unit'); }
  function parseTeacherLines(text){
    return String(text || '').split('\n').map(line => line.trim()).filter(Boolean).map(line => {
      const parts = line.split('||');
      return { task: (parts[0] || '').trim(), expected: (parts.slice(1).join('||') || 'Production attendue à préciser.').trim() };
    }).filter(q => q.task);
  }
  function teacherQuestions(unit){ return readJson(teacherQuestionsKey(unit), null); }
  function questionsFor(unit){
    const customContent = customUnitContent(unit);
    if(customContent && Array.isArray(customContent.questions) && customContent.questions.length) return customContent.questions;
    const custom = teacherQuestions(unit);
    if(Array.isArray(custom) && custom.length) return custom;
    const data = baseData(unit);
    if(Array.isArray(data.questions) && data.questions.length) return data.questions;
    return getLessons(unit).map((lesson, i)=>({
      task: `Réalise une tâche pratique liée à la notion « ${clean(lesson.title || 'Notion ' + (i+1))} ».`,
      expected: `La production montre que l’élève sait appliquer la notion « ${clean(lesson.title || 'Notion ' + (i+1))} » dans une action concrète.`
    }));
  }
  function scenarioFor(unit){
    const data = baseData(unit);
    if(data.scenario) return data.scenario;
    return (unit && unit.integration && unit.integration.scenario) || (unit && unit.intro) || 'Situation réelle liée à l’unité.';
  }
  function activeSection(unit){ return localStorage.getItem(SECTION_KEY_PREFIX + unit.id) || 'mindmap'; }
  function setActiveSection(unit, section){ localStorage.setItem(SECTION_KEY_PREFIX + unit.id, section); }
  function activeQuestionIndex(unit, total){
    const raw = Number(localStorage.getItem(QUESTION_KEY_PREFIX + unit.id) || 0);
    return Math.max(0, Math.min(total - 1, isFinite(raw) ? raw : 0));
  }
  function setActiveQuestionIndex(unit, index){ localStorage.setItem(QUESTION_KEY_PREFIX + unit.id, String(index)); }
  function mindmapItems(unit){
    const data = baseData(unit);
    const examples = data.mindmapExamples || {};
    const lessons = getLessons(unit);
    let items = lessons.map((lesson, index) => {
      const title = clean(lesson.title || `Notion ${index + 1}`);
      return {
        title,
        definition: lesson.fr || lesson.objective || lesson.officialFocus || 'Notion importante de l’unité.',
        example: examples[title] || (Array.isArray(lesson.fill) && lesson.fill[0] ? `Exemple : ${lesson.fill[0]}` : `Exemple pratique lié à « ${title} ».`),
        children: (lesson.officialObjectives || []).slice(0,3)
      };
    });
    if(!items.length){
      items = Object.keys(examples).map(title => ({title, definition:'Notion importante de l’unité.', example:examples[title], children:[]}));
    }
    return items;
  }
  function completion(unit){
    const questions = questionsFor(unit);
    const p = unitProgress(unit);
    const done = questions.filter((_, i) => p.done && p.done[i]).length;
    const total = questions.length || 1;
    return {done, total, percent: Math.round((done / total) * 100)};
  }
  function progressBar(unit){
    const c = completion(unit);
    return `<div class="v169-progress-wrap" aria-label="Progression">
      <div class="v169-progress-top"><strong>Progression pratique</strong><span>${c.done}/${c.total} — ${c.percent}%</span></div>
      <div class="v169-progress"><span style="width:${c.percent}%"></span></div>
    </div>`;
  }
  function renderDynamicHeader(unit, section){
    const tabs = [
      ['mindmap','Carte mentale'],
      ['questions','Questions pratiques'],
      ['integration','Situation réelle']
    ];
    return `<div class="section-head v169-head">
      <div>
        <span class="mini-pill">Activités dynamiques</span>
        <h2>Activités dynamiques — ${safeEsc(clean(unit.title || 'Unité'))}</h2>
        <p>Le contenu se charge selon l’unité : carte mentale interactive, questions pratiques, productions attendues et suivi local.</p>
      </div>
      <span class="pill">${V169}</span>
    </div>
    <div class="v169-dynamic-tabs">${tabs.map(([id,label]) => `<button type="button" class="v169-dtab ${section===id?'active':''}" data-v169-section="${id}">${label}</button>`).join('')}</div>
    ${progressBar(unit)}`;
  }
  function renderMindmap(unit){
    const items = mindmapItems(unit);
    const first = items[0] || {title:'Notion', definition:'', example:'', children:[]};
    return `<section class="v169-panel v169-mindmap" data-v169-mindmap="1">
      <div class="v169-map-center"><strong>${safeEsc(clean(unit.title || 'Unité'))}</strong><span>clique sur une branche</span></div>
      <div class="v169-map-branches">
        ${items.map((item, index) => `<button type="button" class="v169-map-node ${index===0?'active':''}" data-v169-node="${index}" data-title="${safeEsc(item.title)}" data-definition="${safeEsc(item.definition)}" data-example="${safeEsc(item.example)}" data-children="${safeEsc((item.children || []).join('||'))}">
          <strong>${safeEsc(item.title)}</strong>
          ${(item.children || []).length ? `<small>${safeEsc(item.children[0])}</small>` : '<small>Définition + exemple</small>'}
        </button>`).join('')}
      </div>
      <article class="v169-map-detail" id="v169MapDetail">
        <h3>${safeEsc(first.title)}</h3>
        <p><strong>Définition :</strong> ${safeEsc(first.definition)}</p>
        <p><strong>Exemple :</strong> ${safeEsc(first.example)}</p>
        ${(first.children || []).length ? `<ul>${first.children.map(c => `<li>${safeEsc(c)}</li>`).join('')}</ul>` : ''}
      </article>
    </section>`;
  }
  function renderQuestionCarousel(unit){
    const questions = questionsFor(unit);
    const total = questions.length;
    const i = activeQuestionIndex(unit, total);
    const q = questions[i] || {task:'Aucune question disponible.', expected:'Ajoutez des questions depuis le mode enseignant.'};
    const p = unitProgress(unit);
    const done = !!(p.done && p.done[i]);
    return `<section class="v169-panel v169-carousel" data-v169-carousel="1" data-total="${total}">
      <div class="v169-card-head"><span class="mini-pill">Question ${i+1}/${total}</span><strong>${done ? 'Réalisée' : 'À réaliser'}</strong></div>
      <h3>Question pratique</h3>
      <p class="v169-task">${safeEsc(q.task)}</p>
      <div class="v169-expected" hidden><strong>Production attendue :</strong><p>${safeEsc(q.expected)}</p></div>
      <div class="v169-actions">
        <button type="button" class="btn secondary" data-v169-prev ${i<=0?'disabled':''}>Précédente</button>
        <button type="button" class="btn secondary" data-v169-next ${i>=total-1?'disabled':''}>Suivante</button>
        <button type="button" class="btn" data-v169-show-expected>Afficher la production attendue</button>
        <button type="button" class="btn ${done?'ghost':'secondary'}" data-v169-mark-done="${i}">${done?'Marquer non réalisée':'Marquer réalisée'}</button>
      </div>
      <div class="v169-question-list">
        ${questions.map((item, index) => `<button type="button" class="v169-mini-q ${index===i?'active':''} ${p.done && p.done[index]?'done':''}" data-v169-goto-q="${index}">${index+1}</button>`).join('')}
      </div>
    </section>`;
  }
  function renderDynamicIntegrationContent(unit){
    const questions = questionsFor(unit);
    const p = unitProgress(unit);
    return `<section class="v169-integration-page">
      <article class="v169-panel v169-real-context">
        <h3>1) Situation réelle</h3>
        <p>${safeEsc(scenarioFor(unit))}</p>
      </article>
      <article class="v169-panel">
        <h3>2) Tâches pratiques à réaliser</h3>
        <p class="subtle">L’élève réalise les tâches sur l’ordinateur, oralement ou sur cahier. Il n’y a pas d’espace pour écrire dans l’application.</p>
        <div class="v169-task-grid">
          ${questions.map((q, i) => `<div class="v169-task-card ${p.done && p.done[i]?'done':''}">
            <div><span class="mini-pill">Tâche ${i+1}</span>${p.done && p.done[i] ? '<strong class="v169-done-label">Réalisée</strong>' : ''}</div>
            <p>${safeEsc(q.task)}</p>
            <div class="v169-expected" hidden><strong>Production attendue :</strong><p>${safeEsc(q.expected)}</p></div>
            <button type="button" class="btn small secondary" data-v169-show-one="${i}">Afficher la production attendue</button>
          </div>`).join('')}
        </div>
      </article>
      <div class="v169-actions"><button type="button" class="btn" data-v169-show-all>Afficher toutes les productions attendues</button></div>
    </section>`;
  }
  function renderTeacherEditor(unit){
    const unlocked = sessionStorage.getItem(TEACHER_UNLOCK_KEY) === '1';
    const questions = questionsFor(unit);
    const textarea = questions.map(q => `${q.task} || ${q.expected}`).join('\n');
    if(!unlocked){
      return `<section class="v169-panel v169-teacher">
        <h3>Mode enseignant local</h3>
        <p>Ce mode permet de modifier les questions pratiques de cette unité sur cet ordinateur.</p>
        <div class="v169-inline-form">
          <input type="password" id="v169TeacherPassword" placeholder="Mot de passe enseignant">
          <button type="button" class="btn" data-v169-unlock-teacher>Déverrouiller</button>
        </div>
        <p id="v169TeacherMsg" class="v169-msg"></p>
      </section>`;
    }
    return `<section class="v169-panel v169-teacher">
      <h3>Modifier les questions pratiques</h3>
      <p class="subtle">Une ligne = une question. Utilise le séparateur <strong>||</strong> entre la consigne et la production attendue.</p>
      <textarea id="v169TeacherQuestions" rows="12">${safeEsc(textarea)}</textarea>
      <div class="v169-actions">
        <button type="button" class="btn" data-v169-save-teacher>Enregistrer les modifications</button>
        <button type="button" class="btn secondary" data-v169-reset-teacher>Revenir aux questions par défaut</button>
      </div>
      <p id="v169TeacherMsg" class="v169-msg"></p>
    </section>`;
  }
  function renderDynamicPage(unit){
    const rawSection = activeSection(unit);
    const section = ['mindmap','questions','integration'].includes(rawSection) ? rawSection : 'mindmap';
    const body = section === 'mindmap' ? renderMindmap(unit)
      : section === 'questions' ? renderQuestionCarousel(unit)
      : renderDynamicIntegrationContent(unit);
    return `<section class="v169-dynamic-page" data-v169-page="1">${renderDynamicHeader(unit, section)}${body}</section>`;
  }
  function renderDynamicIntegration(unit){
    return `<section class="v169-dynamic-page v169-integration-only" data-v169-page="1">
      <div class="section-head v169-head">
        <div>
          <span class="mini-pill">Situation d’intégration dynamique</span>
          <h2>Situation d’intégration — ${safeEsc(clean(unit.title || 'Unité'))}</h2>
          <p>Situation réelle avec questions pratiques, sans zone de réponse dans l’application.</p>
        </div>
        <span class="pill">Pratique</span>
      </div>
      ${progressBar(unit)}
      ${renderDynamicIntegrationContent(unit)}
    </section>`;
  }
  function injectStyle(){
    if(document.getElementById('v169-dynamic-style')) return;
    const style = document.createElement('style');
    style.id = 'v169-dynamic-style';
    style.textContent = `
      .v169-dynamic-page{display:grid;gap:18px;}
      .v169-head{align-items:flex-start;}
      .v169-dynamic-tabs{display:flex;gap:10px;flex-wrap:wrap;margin:4px 0 2px;}
      .v169-dtab{border:1px solid rgba(59,130,246,.25);background:rgba(255,255,255,.78);border-radius:999px;padding:10px 14px;font-weight:800;cursor:pointer;box-shadow:0 8px 22px rgba(15,23,42,.07);}
      .v169-dtab.active{background:linear-gradient(135deg, rgba(59,130,246,.18), rgba(14,165,233,.14));border-color:rgba(59,130,246,.55);}
      .v169-progress-wrap{background:rgba(255,255,255,.82);border:1px solid rgba(15,23,42,.08);border-radius:18px;padding:13px 15px;box-shadow:0 10px 28px rgba(15,23,42,.06);}
      .v169-progress-top{display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;margin-bottom:10px;}
      .v169-progress{height:12px;background:rgba(148,163,184,.22);border-radius:999px;overflow:hidden;}
      .v169-progress span{display:block;height:100%;background:linear-gradient(90deg, rgba(59,130,246,.7), rgba(16,185,129,.75));border-radius:999px;}
      .v169-panel{background:rgba(255,255,255,.9);border:1px solid rgba(15,23,42,.08);border-radius:24px;padding:18px;box-shadow:0 14px 40px rgba(15,23,42,.08);}
      .v169-mindmap{display:grid;grid-template-columns:minmax(160px,220px) 1fr;gap:16px;align-items:start;}
      .v169-map-center{min-height:150px;border-radius:24px;background:linear-gradient(135deg, rgba(99,102,241,.14), rgba(14,165,233,.12));display:grid;place-items:center;text-align:center;padding:18px;border:1px dashed rgba(59,130,246,.45);}
      .v169-map-center strong{display:block;font-size:1.15rem;}.v169-map-center span{display:block;color:#64748b;margin-top:6px;}
      .v169-map-branches{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:12px;}
      .v169-map-node{text-align:left;border:1px solid rgba(59,130,246,.20);background:#fff;border-radius:18px;padding:13px 14px;cursor:pointer;transition:.18s;}
      .v169-map-node:hover,.v169-map-node.active{transform:translateY(-2px);border-color:rgba(59,130,246,.6);box-shadow:0 12px 26px rgba(59,130,246,.12);}
      .v169-map-node strong,.v169-map-node small{display:block;}.v169-map-node small{color:#64748b;margin-top:5px;line-height:1.35;}
      .v169-map-detail{grid-column:1/-1;border-radius:20px;background:rgba(14,165,233,.08);border:1px solid rgba(14,165,233,.22);padding:16px;}
      .v169-carousel{display:grid;gap:14px;}.v169-card-head{display:flex;justify-content:space-between;align-items:center;gap:12px;flex-wrap:wrap;}.v169-task{font-size:1.08rem;line-height:1.75;}
      .v169-actions{display:flex;gap:10px;flex-wrap:wrap;align-items:center;}.v169-question-list{display:flex;gap:8px;flex-wrap:wrap;margin-top:4px;}
      .v169-mini-q{width:36px;height:36px;border-radius:12px;border:1px solid rgba(15,23,42,.12);background:#fff;font-weight:800;cursor:pointer;}
      .v169-mini-q.active{border-color:rgba(59,130,246,.75);box-shadow:0 0 0 3px rgba(59,130,246,.12);}.v169-mini-q.done{background:rgba(16,185,129,.13);}
      .v169-expected{margin-top:12px;padding:13px 14px;border-radius:16px;background:rgba(16,185,129,.10);border:1px solid rgba(16,185,129,.22);}
      .v169-task-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(230px,1fr));gap:13px;margin-top:14px;}.v169-task-card{border:1px solid rgba(15,23,42,.08);background:#fff;border-radius:18px;padding:14px;display:grid;gap:8px;}
      .v169-task-card.done{border-color:rgba(16,185,129,.35);background:rgba(16,185,129,.06);}.v169-done-label{float:right;color:#047857;font-size:.85rem;}
      .v169-real-context{border-inline-start:6px solid rgba(59,130,246,.48);}.v169-real-context p{line-height:1.75;font-size:1.03rem;}
      .v169-teacher textarea{width:100%;box-sizing:border-box;border:1px solid rgba(15,23,42,.16);border-radius:16px;padding:13px;line-height:1.55;font-family:inherit;}.v169-inline-form{display:flex;gap:10px;flex-wrap:wrap;}.v169-inline-form input{min-width:230px;border:1px solid rgba(15,23,42,.16);border-radius:14px;padding:11px 12px;}.v169-msg{font-weight:800;margin-top:10px;}.v169-msg.ok{color:#047857}.v169-msg.ko{color:#b91c1c}
      .v169-dynamic-menu{background:linear-gradient(135deg, rgba(59,130,246,.12), rgba(16,185,129,.10)) !important;}
      @media(max-width:760px){.v169-mindmap{grid-template-columns:1fr}.v169-map-detail{grid-column:auto}.v169-actions .btn{width:100%;justify-content:center}.v169-dtab{flex:1 1 auto}}
    `;
    document.head.appendChild(style);
  }

  injectStyle();
  applyContentOverrides();
  window.EPI_DYNAMIC_CONTENT_V170 = Object.assign(window.EPI_DYNAMIC_CONTENT_V170 || {}, {
    applyContentOverrides, customUnitContent, unitContentKey, questionsFor, scenarioFor, kindOf
  });

  /* v192 — espace élève : on ne crée plus le sous-titre « Activités dynamiques »
     dans le menu de chaque unité. Le contenu professeur n'est pas modifié. */
  if(false && typeof menu === 'function'){
    const previousMenu = menu;
    menu = function(unit){
      let html = previousMenu.apply(this, arguments);
      if(typeof html !== 'string') return html;
      if(html.includes('data-menu="dynamic"') || html.includes("data-menu='dynamic'")) return html;
      const btn = `<button class="menu-btn v169-dynamic-menu ${state.page==='dynamic'?'active':''}" data-menu="dynamic">Activités dynamiques</button>`;
      if(/data-menu=["']dictionary["']/.test(html)){
        return html.replace(/(<button[^>]*data-menu=["']dictionary["'][\s\S]*?<\/button>)/, btn + '$1');
      }
      return html.replace('</aside>', btn + '</aside>');
    };
  }

  if(typeof renderUnit === 'function'){
    const previousRenderUnit = renderUnit;
    renderUnit = function(){
      if(state && state.page === 'dynamic'){
        const unit = getUnit();
        const levelClass = state.selectedLevel === '1ac' ? 'v125-unit-view v125-unit-view-1ac' : state.selectedLevel === '2ac' ? 'v125-unit-view v125-unit-view-2ac' : 'v125-unit-view';
        qs('#app').innerHTML = appShell(`<section class="${levelClass}"><section class="page-title"><h2>${safeEsc(unit.title)}</h2><p>Activités dynamiques : carte mentale, questions pratiques et situation réelle selon l’unité choisie.</p></section><div class="layout">${menu(unit)}<main class="content-card">${renderDynamicPage(unit)}</main></div></section>`);
        return;
      }
      return previousRenderUnit.apply(this, arguments);
    };
  }

  if(typeof renderIntegration === 'function'){
    renderIntegration = function(unit){
      injectStyle();
      return renderDynamicIntegration(unit);
    };
  }

  document.addEventListener('click', function(e){
    const sectionBtn = e.target.closest && e.target.closest('[data-v169-section]');
    if(sectionBtn){
      e.preventDefault(); e.stopPropagation();
      const unit = getUnit();
      setActiveSection(unit, sectionBtn.dataset.v169Section);
      state.page = 'dynamic';
      renderUnit();
      return;
    }
    const node = e.target.closest && e.target.closest('[data-v169-node]');
    if(node){
      e.preventDefault(); e.stopPropagation();
      const root = node.closest('[data-v169-mindmap]') || document;
      qsa('.v169-map-node', root).forEach(n => n.classList.remove('active'));
      node.classList.add('active');
      const children = (node.dataset.children || '').split('||').filter(Boolean);
      const box = qs('#v169MapDetail', root);
      if(box){
        box.innerHTML = `<h3>${safeEsc(node.dataset.title)}</h3><p><strong>Définition :</strong> ${safeEsc(node.dataset.definition)}</p><p><strong>Exemple :</strong> ${safeEsc(node.dataset.example)}</p>${children.length ? `<ul>${children.map(c => `<li>${safeEsc(c)}</li>`).join('')}</ul>` : ''}`;
      }
      return;
    }
    const goto = e.target.closest && e.target.closest('[data-v169-goto-q]');
    if(goto){
      e.preventDefault(); e.stopPropagation();
      const unit = getUnit();
      setActiveQuestionIndex(unit, Number(goto.dataset.v169GotoQ));
      setActiveSection(unit, 'questions');
      state.page = 'dynamic';
      renderUnit();
      return;
    }
    const prev = e.target.closest && e.target.closest('[data-v169-prev]');
    const next = e.target.closest && e.target.closest('[data-v169-next]');
    if(prev || next){
      e.preventDefault(); e.stopPropagation();
      const unit = getUnit();
      const total = questionsFor(unit).length;
      const i = activeQuestionIndex(unit, total) + (next ? 1 : -1);
      setActiveQuestionIndex(unit, Math.max(0, Math.min(total-1, i)));
      setActiveSection(unit, 'questions');
      state.page = 'dynamic';
      renderUnit();
      return;
    }
    const showExpected = e.target.closest && e.target.closest('[data-v169-show-expected]');
    if(showExpected){
      e.preventDefault(); e.stopPropagation();
      const panel = showExpected.closest('.v169-panel') || document;
      qsa('.v169-expected', panel).forEach(el => el.hidden = false);
      return;
    }
    const showOne = e.target.closest && e.target.closest('[data-v169-show-one]');
    if(showOne){
      e.preventDefault(); e.stopPropagation();
      const card = showOne.closest('.v169-task-card');
      const box = card && qs('.v169-expected', card);
      if(box) box.hidden = false;
      return;
    }
    const showAll = e.target.closest && e.target.closest('[data-v169-show-all]');
    if(showAll){
      e.preventDefault(); e.stopPropagation();
      const root = showAll.closest('[data-v169-page]') || document;
      qsa('.v169-expected', root).forEach(el => el.hidden = false);
      return;
    }
    const mark = e.target.closest && e.target.closest('[data-v169-mark-done]');
    if(mark){
      e.preventDefault(); e.stopPropagation();
      const unit = getUnit();
      const i = Number(mark.dataset.v169MarkDone);
      const p = unitProgress(unit);
      p.done[i] = !p.done[i];
      saveUnitProgress(unit, p);
      setActiveSection(unit, 'questions');
      state.page = 'dynamic';
      renderUnit();
      return;
    }
    const unlock = e.target.closest && e.target.closest('[data-v169-unlock-teacher]');
    if(unlock){
      e.preventDefault(); e.stopPropagation();
      const input = qs('#v169TeacherPassword');
      const msg = qs('#v169TeacherMsg');
      if(input && input.value === teacherPassword){
        sessionStorage.setItem(TEACHER_UNLOCK_KEY, '1');
        state.page = 'dynamic'; setActiveSection(getUnit(), 'teacher'); renderUnit();
      }else if(msg){ msg.textContent = 'Mot de passe incorrect.'; msg.className = 'v169-msg ko'; }
      return;
    }
    const saveTeacher = e.target.closest && e.target.closest('[data-v169-save-teacher]');
    if(saveTeacher){
      e.preventDefault(); e.stopPropagation();
      const unit = getUnit();
      const text = qs('#v169TeacherQuestions') ? qs('#v169TeacherQuestions').value : '';
      const parsed = parseTeacherLines(text);
      const msg = qs('#v169TeacherMsg');
      if(!parsed.length){ if(msg){ msg.textContent = 'Ajoutez au moins une question valide.'; msg.className = 'v169-msg ko'; } return; }
      writeJson(teacherQuestionsKey(unit), parsed);
      if(msg){ msg.textContent = 'Questions enregistrées localement pour cette unité.'; msg.className = 'v169-msg ok'; }
      setActiveSection(unit, 'questions');
      setTimeout(()=>{ state.page = 'dynamic'; renderUnit(); }, 350);
      return;
    }
    const resetTeacher = e.target.closest && e.target.closest('[data-v169-reset-teacher]');
    if(resetTeacher){
      e.preventDefault(); e.stopPropagation();
      const unit = getUnit();
      localStorage.removeItem(teacherQuestionsKey(unit));
      setActiveSection(unit, 'teacher');
      state.page = 'dynamic'; renderUnit();
      return;
    }
  }, true);

  // Rendre les situations d’intégration dynamiques dès l’ouverture d’une unité.
  try{
    if(typeof renderUnit === 'function' && state && state.page !== 'units' && state.unitId){ renderUnit(); }
  }catch(e){ /* affichage initial laissé à app.js */ }
})();
