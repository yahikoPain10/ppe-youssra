/* ÉPI v214 — correctif stable après RESULT_CODE_HUNG
   - pas de MutationObserver lourd
   - pas de setInterval permanent
   - style kinesthésique indépendant par sous-titre
   - marges cours améliorées
*/
(function(){
  'use strict';
  const CONTENT_PREFIX = 'epi_v170_unit_content_';

  function q(sel, root){ return (root || document).querySelector(sel); }
  function qa(sel, root){ return Array.from((root || document).querySelectorAll(sel)); }
  function h(v){ return String(v == null ? '' : v).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch])); }
  function readJson(key, fallback){ try{ const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }catch(e){ return fallback; } }
  function units(){ return (typeof UNITS !== 'undefined' && Array.isArray(UNITS)) ? UNITS : (Array.isArray(window.UNITS) ? window.UNITS : []); }
  function clean(v){ return String(v || '').replace(/^\s*Unité\s*\d+\s*:\s*/i,'').trim(); }
  function lines(v){ return String(v || '').split('\n').map(x => x.trim()).filter(Boolean); }
  function norm(v){ return String(v || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,' ').trim().toLowerCase(); }
  function contentKey(unit){ return CONTENT_PREFIX + (unit && unit.id ? unit.id : 'unit'); }

  function currentUnitSafe(){
    try{ if(typeof state !== 'undefined' && state && state.unitId) return units().find(u => u && u.id === state.unitId) || null; }catch(e){}
    try{ if(typeof currentUnit === 'function') return currentUnit(); }catch(e){}
    return null;
  }
  function lessonIndex(unit, lesson){
    const list = Array.isArray(unit && unit.lessons) ? unit.lessons : [];
    const t = clean(lesson && lesson.title).toLowerCase();
    let idx = list.findIndex(l => l === lesson);
    if(idx >= 0) return idx;
    if(t){ idx = list.findIndex(l => clean(l && l.title).toLowerCase() === t); if(idx >= 0) return idx; }
    try{ if(typeof state !== 'undefined' && Number.isFinite(Number(state.lessonIndex))) return Number(state.lessonIndex); }catch(e){}
    return 0;
  }
  function findUnitForLesson(lesson){
    const current = currentUnitSafe();
    if(current) return current;
    const t = clean(lesson && lesson.title).toLowerCase();
    return units().find(u => Array.isArray(u && u.lessons) && u.lessons.some(l => l === lesson || clean(l && l.title).toLowerCase() === t)) || null;
  }
  function teacherContent(unit){
    if(!unit) return null;
    return readJson(contentKey(unit), null) || unit._v172TeacherContent || unit._v170TeacherContent || null;
  }
  function subtitleForLesson(unit, lesson, content){
    const subtitles = Array.isArray(content && content.subtitleItems) ? content.subtitleItems : [];
    if(!subtitles.length) return null;
    const idx = lessonIndex(unit, lesson);
    if(subtitles[idx]) return subtitles[idx];
    const title = clean(lesson && lesson.title).toLowerCase();
    if(title) return subtitles.find(s => clean(s && s.title).toLowerCase() === title) || null;
    return null;
  }

  function normalizeExercise(x){
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
  function exercisesForLesson(unit, lesson, content){
    const sub = subtitleForLesson(unit, lesson, content);
    if(!sub) return [];
    const rows = Array.isArray(sub.kineExercises) ? sub.kineExercises : [];
    if(rows.length) return rows.map(normalizeExercise).filter(e => e.question || e.options || e.pairs || e.steps || e.answer || e.correction);
    const one = normalizeExercise(sub);
    return (one.question || one.options || one.pairs || one.steps || one.answer || one.correction) ? [one] : [];
  }
  function parsePairs(text){
    return lines(text).map(line => {
      const parts = line.split('||');
      if(parts.length >= 2) return {term:parts[0].trim(), def:parts.slice(1).join('||').trim()};
      const p2 = line.split(':');
      if(p2.length >= 2) return {term:p2[0].trim(), def:p2.slice(1).join(':').trim()};
      return null;
    }).filter(p => p && p.term && p.def);
  }
  function shuffled(arr){ const a = arr.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
  function feedback(ok, msg){ return `<div class="v214-feedback ${ok?'ok':'ko'}">${h(msg)}</div>`; }

  function renderQcm(ex, i){
    const opts = lines(ex.options);
    const correct = ex.answer || ex.correction || opts[0] || '';
    return `<article class="v214-kine-exercise" data-v214-exercise="qcm" data-answer="${h(correct)}"><div class="v214-ex-head"><span>QCM ${i+1}</span><h4>${h(ex.question || 'Choisis la bonne réponse.')}</h4></div><div class="v214-qcm-options">${opts.map(o=>`<button type="button" class="btn secondary small" data-v214-qcm-choice="${h(o)}">${h(o)}</button>`).join('') || '<p class="subtle">Ajoute les choix QCM dans l’espace professeur.</p>'}</div><div class="v214-live-feedback"></div></article>`;
  }
  function renderComplete(ex, i){
    return `<article class="v214-kine-exercise" data-v214-exercise="complete" data-answer="${h(ex.answer || ex.correction)}"><div class="v214-ex-head"><span>Compléter ${i+1}</span><h4>${h(ex.question || 'Complète la phrase.')}</h4></div><div class="v214-answer-row"><input class="v214-input" data-v214-complete-input placeholder="Ta réponse"><button type="button" class="btn small" data-v214-check-complete>Vérifier</button></div><div class="v214-live-feedback"></div></article>`;
  }
  function renderAssociation(ex, i){
    const pairs = parsePairs(ex.pairs);
    const defs = shuffled(pairs.map(p => p.def));
    return `<article class="v214-kine-exercise" data-v214-exercise="association"><div class="v214-ex-head"><span>Association ${i+1}</span><h4>${h(ex.question || 'Associe chaque notion à sa définition.')}</h4></div>${pairs.length ? `<div class="v214-association-list">${pairs.map(p=>`<label class="v214-association-row" data-answer="${h(p.def)}"><strong>${h(p.term)}</strong><select data-v214-assoc-select><option value="">Choisir...</option>${defs.map(d=>`<option value="${h(d)}">${h(d)}</option>`).join('')}</select></label>`).join('')}</div><button type="button" class="btn small" data-v214-check-association>Vérifier l’association</button>` : '<p class="subtle">Ajoute les associations au format : notion || définition.</p>'}<div class="v214-live-feedback"></div></article>`;
  }
  function renderOrder(ex, i){
    const steps = lines(ex.steps);
    const list = shuffled(steps);
    return `<article class="v214-kine-exercise" data-v214-exercise="order" data-answer="${h(steps.join('||'))}"><div class="v214-ex-head"><span>Ordre logique ${i+1}</span><h4>${h(ex.question || 'Remets les étapes dans le bon ordre.')}</h4></div>${list.length ? `<ol class="v214-order-list">${list.map(s=>`<li data-v214-order-item><span>${h(s)}</span><button type="button" class="btn ghost small" data-v214-up>↑</button><button type="button" class="btn ghost small" data-v214-down>↓</button></li>`).join('')}</ol><button type="button" class="btn small" data-v214-check-order>Vérifier l’ordre</button>` : '<p class="subtle">Ajoute les étapes dans l’espace professeur.</p>'}<div class="v214-live-feedback"></div></article>`;
  }
  function renderOpenTask(ex, i){
    const label = ex.type === 'Tâche pratique' ? 'Tâche pratique' : 'Question directe';
    const correction = ex.correction || ex.answer || 'Correction à compléter dans l’espace professeur.';
    return `<article class="v214-kine-exercise" data-v214-exercise="task"><div class="v214-ex-head"><span>${h(label)} ${i+1}</span><h4>${h(ex.question || 'Réalise la tâche demandée.')}</h4></div><textarea class="v214-student-answer" rows="3" placeholder="Écris ta réponse ou les étapes réalisées..."></textarea><button type="button" class="btn secondary small" data-v214-show-correction>Afficher la correction</button><div class="v214-correction" hidden><strong>Correction / production attendue :</strong><p>${h(correction)}</p></div></article>`;
  }
  function renderExercise(ex, i){
    const type = norm(ex.type);
    if(type.includes('qcm')) return renderQcm(ex, i);
    if(type.includes('completer') || type.includes('compl')) return renderComplete(ex, i);
    if(type.includes('association')) return renderAssociation(ex, i);
    if(type.includes('ordre')) return renderOrder(ex, i);
    return renderOpenTask(ex, i);
  }
  function renderCustomKinePanel(unit, lesson, content){
    const sub = subtitleForLesson(unit, lesson, content) || {};
    const exs = exercisesForLesson(unit, lesson, content);
    const title = clean(lesson && lesson.title || sub.title || unit && unit.title || 'Style kinesthésique');
    const empty = `<article class="v214-kine-empty"><h4>Aucun exercice kinesthésique propre à ce sous-titre.</h4><p>Ajoute les exercices dans : Espace prof → Sous-titres → Style kinesthésique. L’application n’utilise plus automatiquement les exercices des autres notions.</p></article>`;
    return `<section class="panel kine-panel v214-kine-panel"><div class="style-header clean-style-header"><div><span class="mini-pill">Style kinesthésique</span><h3>Je pratique : ${h(title)}</h3></div><p class="subtle">Ces exercices proviennent uniquement du formulaire de ce sous-titre.</p></div><div class="v214-kine-grid">${exs.length ? exs.map(renderExercise).join('') : empty}</div></section>`;
  }
  function patchKinePanelOnce(){
    if(window.__EPI_V214_KINE_PANEL__) return true;
    if(typeof kinePanel !== 'function') return false;
    window.__EPI_V214_KINE_PANEL__ = true;
    const old = kinePanel;
    kinePanel = function(lesson){
      const unit = findUnitForLesson(lesson);
      const content = teacherContent(unit);
      if(content && Array.isArray(content.subtitleItems)) return renderCustomKinePanel(unit, lesson, content);
      return old.apply(this, arguments);
    };
    return true;
  }

  function markFormFields(row){
    qa('[data-field]', row).forEach(el => {
      const field = el.getAttribute('data-field');
      const label = el.closest('.v172-field');
      if(label) label.setAttribute('data-v214-field-wrap', field);
    });
  }
  function cleanTypeForCss(type){ return norm(type).replace(/[^a-z0-9]+/g,'-'); }
  function applyKineFormState(row){
    if(!row) return;
    row.classList.add('v214-kine-form');
    markFormFields(row);
    const type = q('[data-field="type"]', row)?.value || 'Question directe';
    row.setAttribute('data-v214-type', cleanTypeForCss(type));
    let help = q(':scope > .v214-kine-help', row);
    if(!help){
      help = document.createElement('div');
      help.className = 'v214-kine-help';
      const head = q('.v172-row-head', row) || row.firstElementChild || row;
      head.insertAdjacentElement('afterend', help);
    }
    const messages = {
      'Question directe':'Formulaire propre : consigne + réponse courte + correction.',
      'QCM':'Formulaire propre : consigne + choix QCM + bonne réponse.',
      'Compléter':'Formulaire propre : phrase à compléter + mot attendu.',
      'Association':'Formulaire propre : notion || définition, une association par ligne.',
      'Ordre logique':'Formulaire propre : étapes dans le bon ordre, une étape par ligne.',
      'Tâche pratique':'Formulaire propre : consigne de manipulation + production attendue.'
    };
    help.textContent = messages[type] || messages['Question directe'];
  }
  let formPatchScheduled = false;
  function patchKineForms(root){
    qa('[data-v190-kine-row], [data-v172-row="kine"]', root || document).forEach(applyKineFormState);
  }
  function schedulePatchForms(){
    if(formPatchScheduled) return;
    formPatchScheduled = true;
    requestAnimationFrame(() => { formPatchScheduled = false; patchKineForms(q('#app') || document); });
  }

  function injectCss(){
    if(q('#v214-style')) return;
    const st = document.createElement('style');
    st.id = 'v214-style';
    st.textContent = `
      .v125-unit-view .layout,.fix-content-layout{gap:24px!important;align-items:start!important;max-width:1500px!important;margin:0 auto!important;padding:0 18px 34px!important;box-sizing:border-box!important}
      .v125-unit-view .content-card,.fix-content-card{padding:24px!important;border-radius:30px!important;box-shadow:0 18px 48px rgba(15,23,42,.08)!important;overflow:visible!important}
      .v125-unit-view .page-title{max-width:1500px!important;margin:0 auto 14px!important;padding:10px 18px!important;box-sizing:border-box!important}
      .content-card .section-head{margin-bottom:18px!important;padding:18px!important;border-radius:22px!important;background:linear-gradient(180deg,#ffffff,#f8fbff)!important;border:1px solid rgba(37,99,235,.10)!important}
      .content-card .official-box,.content-card .panel{margin:18px 0!important}.lesson-tabs-v129,.tabs{margin:18px 0!important}.learning-path-note{margin:14px 0 20px!important;line-height:1.65!important}
      .v214-kine-panel{padding:22px!important}.v214-kine-grid{display:grid;gap:16px}.v214-kine-exercise,.v214-kine-empty{background:#fff;border:1px solid rgba(37,99,235,.14);border-radius:22px;padding:16px;box-shadow:0 14px 34px rgba(15,23,42,.07);display:grid;gap:12px}.v214-ex-head span{width:max-content;background:#dbeafe;color:#1d4ed8;border-radius:999px;padding:5px 10px;font-weight:1000}.v214-ex-head h4{margin:.45rem 0;color:#0f172a;line-height:1.45}.v214-qcm-options,.v214-answer-row{display:flex;gap:10px;flex-wrap:wrap;align-items:center}.v214-input,.v214-student-answer,.v214-association-row select{border:1px solid #cbd5e1;border-radius:14px;padding:10px 12px;font:inherit;background:#fff}.v214-input{min-width:240px}.v214-feedback{border-radius:14px;padding:10px 12px;font-weight:900}.v214-feedback.ok{background:#ecfdf5;border:1px solid #bbf7d0;color:#047857}.v214-feedback.ko{background:#fff7ed;border:1px solid #fed7aa;color:#c2410c}.v214-association-list{display:grid;gap:10px}.v214-association-row{display:grid;grid-template-columns:minmax(150px,220px) 1fr;gap:10px;align-items:center;background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:10px}.v214-order-list{display:grid;gap:8px;padding-left:0;list-style:none}.v214-order-list li{display:grid;grid-template-columns:1fr auto auto;gap:8px;align-items:center;background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:10px}.v214-correction{border:1px solid #bbf7d0;background:#ecfdf5;border-radius:14px;padding:10px;color:#065f46}.v214-kine-help{border:1px solid rgba(37,99,235,.18);background:#eff6ff;color:#1d4ed8;border-radius:14px;padding:9px 11px;font-weight:900;margin:8px 0}.v214-kine-form [data-v214-field-wrap]{display:block}.v214-kine-form[data-v214-type="qcm"] [data-v214-field-wrap="pairs"],.v214-kine-form[data-v214-type="qcm"] [data-v214-field-wrap="steps"]{display:none!important}.v214-kine-form[data-v214-type="completer"] [data-v214-field-wrap="options"],.v214-kine-form[data-v214-type="completer"] [data-v214-field-wrap="pairs"],.v214-kine-form[data-v214-type="completer"] [data-v214-field-wrap="steps"]{display:none!important}.v214-kine-form[data-v214-type="association"] [data-v214-field-wrap="options"],.v214-kine-form[data-v214-type="association"] [data-v214-field-wrap="steps"],.v214-kine-form[data-v214-type="association"] [data-v214-field-wrap="answer"]{display:none!important}.v214-kine-form[data-v214-type="ordre-logique"] [data-v214-field-wrap="options"],.v214-kine-form[data-v214-type="ordre-logique"] [data-v214-field-wrap="pairs"],.v214-kine-form[data-v214-type="ordre-logique"] [data-v214-field-wrap="answer"]{display:none!important}.v214-kine-form[data-v214-type="tache-pratique"] [data-v214-field-wrap="options"],.v214-kine-form[data-v214-type="tache-pratique"] [data-v214-field-wrap="pairs"],.v214-kine-form[data-v214-type="tache-pratique"] [data-v214-field-wrap="steps"],.v214-kine-form[data-v214-type="tache-pratique"] [data-v214-field-wrap="answer"]{display:none!important}.v214-kine-form[data-v214-type="question-directe"] [data-v214-field-wrap="options"],.v214-kine-form[data-v214-type="question-directe"] [data-v214-field-wrap="pairs"],.v214-kine-form[data-v214-type="question-directe"] [data-v214-field-wrap="steps"]{display:none!important}
      @media(max-width:780px){.v125-unit-view .layout,.fix-content-layout{padding:0 10px 24px!important}.v125-unit-view .content-card,.fix-content-card{padding:16px!important}.v214-association-row{grid-template-columns:1fr}.v214-order-list li{grid-template-columns:1fr auto auto}}
    `;
    document.head.appendChild(st);
  }

  document.addEventListener('change', function(e){
    if(e.target && e.target.matches('[data-field="type"]')) applyKineFormState(e.target.closest('[data-v190-kine-row], [data-v172-row="kine"]'));
  }, true);
  document.addEventListener('click', function(e){
    const choice = e.target.closest && e.target.closest('[data-v214-qcm-choice]');
    if(choice){ const card = choice.closest('[data-v214-exercise="qcm"]'); const ok = norm(choice.dataset.v214QcmChoice || choice.textContent) === norm(card.dataset.answer); const fb = q('.v214-live-feedback', card); if(fb) fb.innerHTML = feedback(ok, ok ? 'Très bien.' : 'Essaie encore. Bonne réponse : ' + (card.dataset.answer || '')); return; }
    const complete = e.target.closest && e.target.closest('[data-v214-check-complete]');
    if(complete){ const card = complete.closest('[data-v214-exercise="complete"]'); const val = q('[data-v214-complete-input]', card)?.value || ''; const ok = norm(val) === norm(card.dataset.answer); const fb = q('.v214-live-feedback', card); if(fb) fb.innerHTML = feedback(ok, ok ? 'Réponse correcte.' : 'Réponse attendue : ' + (card.dataset.answer || '')); return; }
    const assoc = e.target.closest && e.target.closest('[data-v214-check-association]');
    if(assoc){ const card = assoc.closest('[data-v214-exercise="association"]'); const rows = qa('.v214-association-row', card); const ok = rows.length && rows.every(r => norm(q('select', r)?.value) === norm(r.dataset.answer)); const fb = q('.v214-live-feedback', card); if(fb) fb.innerHTML = feedback(ok, ok ? 'Toutes les associations sont correctes.' : 'Certaines associations sont incorrectes.'); return; }
    const up = e.target.closest && e.target.closest('[data-v214-up]');
    if(up){ const li = up.closest('[data-v214-order-item]'); if(li && li.previousElementSibling) li.parentElement.insertBefore(li, li.previousElementSibling); return; }
    const down = e.target.closest && e.target.closest('[data-v214-down]');
    if(down){ const li = down.closest('[data-v214-order-item]'); if(li && li.nextElementSibling) li.parentElement.insertBefore(li.nextElementSibling, li); return; }
    const order = e.target.closest && e.target.closest('[data-v214-check-order]');
    if(order){ const card = order.closest('[data-v214-exercise="order"]'); const wanted = String(card.dataset.answer || '').split('||').map(norm).filter(Boolean).join('||'); const got = qa('[data-v214-order-item] span', card).map(x => norm(x.textContent)).join('||'); const ok = wanted && wanted === got; const fb = q('.v214-live-feedback', card); if(fb) fb.innerHTML = feedback(ok, ok ? 'Ordre correct.' : 'L’ordre n’est pas encore correct.'); return; }
    const show = e.target.closest && e.target.closest('[data-v214-show-correction]');
    if(show){ const card = show.closest('.v214-kine-exercise'); const box = q('.v214-correction', card); if(box){ box.hidden = !box.hidden; show.textContent = box.hidden ? 'Afficher la correction' : 'Masquer la correction'; } return; }
    if(e.target.closest && e.target.closest('[data-v176-dashboard], [data-v179-add-section-btn], [data-v179-mod-section-btn], [data-v172-tab], [data-v190-add-kine], [data-v172-add="kine"], [data-v176-add-subtitle-row], [data-v190-add-visual], [data-v190-add-audio]')){
      setTimeout(schedulePatchForms, 120);
      setTimeout(schedulePatchForms, 450);
    }
  }, true);

  function start(){
    injectCss();
    let tries = 0;
    function tryPatchPanel(){ if(patchKinePanelOnce()) return; if(++tries < 10) setTimeout(tryPatchPanel, 150); }
    tryPatchPanel();
    schedulePatchForms();
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
