/* ÉPI v215 — vérification finale : auth serveur + cours élargi + kinesthésique propre */
(function(){
  'use strict';
  const UNLOCK_KEY = 'epi_v212_teacher_unlocked';
  const CONTENT_PREFIX = 'epi_v170_unit_content_';

  function q(sel, root){ return (root || document).querySelector(sel); }
  function qa(sel, root){ return Array.from((root || document).querySelectorAll(sel)); }
  function h(v){ return String(v == null ? '' : v).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch])); }
  function clean(v){ return String(v || '').replace(/^\s*Unité\s*\d+\s*:\s*/i,'').trim(); }
  function norm(v){ return String(v || '').normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/\s+/g,' ').trim().toLowerCase(); }
  function lines(v){ return String(v || '').split('\n').map(x => x.trim()).filter(Boolean); }
  function readJson(key, fallback){ try{ const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }catch(e){ return fallback; } }
  function units(){ return (typeof UNITS !== 'undefined' && Array.isArray(UNITS)) ? UNITS : (Array.isArray(window.UNITS) ? window.UNITS : []); }
  function contentKey(unit){ return CONTENT_PREFIX + (unit && unit.id ? unit.id : 'unit'); }

  async function verifyTeacherPassword(password){
    const res = await fetch('/api/teacher-auth', {method:'POST', headers:{'Content-Type':'application/json'}, body:JSON.stringify({password})});
    let data = null;
    try{ data = await res.json(); }catch(e){ data = null; }
    return !!(res.ok && data && data.ok);
  }
  function unlockTeacher(){ try{ sessionStorage.setItem(UNLOCK_KEY, '1'); }catch(e){} }
  function lockTeacher(){ try{ sessionStorage.removeItem(UNLOCK_KEY); }catch(e){} }
  async function openTeacherWithServerPassword(password, msg){
    if(msg){ msg.textContent = 'Vérification du mot de passe...'; msg.className = 'v121-teacher-msg'; }
    const ok = await verifyTeacherPassword(password);
    if(ok){
      unlockTeacher();
      if(msg){ msg.textContent = 'Accès professeur validé.'; msg.className = 'v121-teacher-msg success-msg'; }
      if(typeof renderResultsPage === 'function') renderResultsPage();
      return true;
    }
    lockTeacher();
    if(msg){ msg.textContent = 'Mot de passe incorrect.'; msg.className = 'v121-teacher-msg error-msg'; }
    return false;
  }
  function patchTeacherAuth(){
    if(window.__EPI_V215_AUTH_PATCHED__) return;
    window.__EPI_V215_AUTH_PATCHED__ = true;
    document.addEventListener('submit', function(e){
      const form = e.target && e.target.closest && e.target.closest('#teacherAuthForm');
      if(!form) return;
      e.preventDefault();
      e.stopPropagation();
      if(e.stopImmediatePropagation) e.stopImmediatePropagation();
      const input = q('#teacherPasswordInput', form);
      const msg = q('#teacherAuthMsg', form) || document.getElementById('teacherAuthMsg');
      openTeacherWithServerPassword((input && input.value || '').trim(), msg).catch(() => {
        lockTeacher();
        if(msg){ msg.textContent = 'Erreur serveur. Lance le projet avec node server.js.'; msg.className = 'v121-teacher-msg error-msg'; }
      });
    }, true);
    try{
      openTeacherArea = async function(){
        const code = prompt('Espace professeur — entrez le mot de passe :');
        if(code === null) return;
        const ok = await openTeacherWithServerPassword(String(code || '').trim(), null).catch(()=>false);
        if(!ok) alert('Mot de passe incorrect ou serveur non lancé.');
      };
    }catch(e){}
  }

  function currentUnitSafe(){
    try{ if(typeof state !== 'undefined' && state && state.unitId) return units().find(u => u && u.id === state.unitId) || null; }catch(e){}
    try{ if(typeof currentUnit === 'function') return currentUnit(); }catch(e){}
    return null;
  }
  function lessonIndex(unit, lesson){
    const list = Array.isArray(unit && unit.lessons) ? unit.lessons : [];
    let idx = list.findIndex(l => l === lesson);
    if(idx >= 0) return idx;
    const t = norm(clean(lesson && lesson.title));
    if(t){ idx = list.findIndex(l => norm(clean(l && l.title)) === t); if(idx >= 0) return idx; }
    try{ if(typeof state !== 'undefined' && Number.isFinite(Number(state.lessonIndex))) return Number(state.lessonIndex); }catch(e){}
    return 0;
  }
  function findUnitForLesson(lesson){
    const current = currentUnitSafe();
    if(current) return current;
    const t = norm(clean(lesson && lesson.title));
    return units().find(u => Array.isArray(u && u.lessons) && u.lessons.some(l => l === lesson || norm(clean(l && l.title)) === t)) || null;
  }
  function teacherContent(unit){
    if(!unit) return null;
    return readJson(contentKey(unit), null) || unit._v172TeacherContent || unit._v170TeacherContent || null;
  }
  function subtitleForLesson(unit, lesson, content){
    const subtitles = Array.isArray(content && content.subtitleItems) ? content.subtitleItems : [];
    if(!subtitles.length) return null;
    const byIndex = subtitles[lessonIndex(unit, lesson)];
    if(byIndex) return byIndex;
    const title = norm(clean(lesson && lesson.title));
    return title ? subtitles.find(s => norm(clean(s && s.title)) === title) || null : null;
  }
  function normalizeExercise(x){
    x = x || {};
    return {
      type:String(x.type || x.kineType || 'Question directe').trim() || 'Question directe',
      question:String(x.question || x.kineQuestion || '').trim(),
      options:String(x.options || x.kineOptions || '').trim(),
      pairs:String(x.pairs || x.kinePairs || '').trim(),
      steps:String(x.steps || x.kineSteps || '').trim(),
      answer:String(x.answer || x.kineAnswer || '').trim(),
      correction:String(x.correction || x.kineCorrection || '').trim()
    };
  }
  function customExercises(unit, lesson, content){
    const sub = subtitleForLesson(unit, lesson, content);
    if(!sub) return [];
    const rows = Array.isArray(sub.kineExercises) ? sub.kineExercises : [];
    if(rows.length) return rows.map(normalizeExercise).filter(e => e.question || e.options || e.pairs || e.steps || e.answer || e.correction);
    const one = normalizeExercise(sub);
    return (one.question || one.options || one.pairs || one.steps || one.answer || one.correction) ? [one] : [];
  }
  function defaultExercises(lesson){
    const exs = [];
    if(lesson && Array.isArray(lesson.fill) && lesson.fill.length >= 3){
      const sentence = String(lesson.fill[0] || '').replace('____','______');
      const answer = String(lesson.fill[1] || '');
      const choices = Array.isArray(lesson.fill[2]) ? lesson.fill[2] : [];
      exs.push({type:'QCM', question:sentence || 'Choisis la bonne réponse.', options:choices.join('\n'), answer});
    }
    if(lesson && Array.isArray(lesson.drag) && lesson.drag.length){
      exs.push({type:'Association', question:'Associe chaque notion à sa définition.', pairs:lesson.drag.map(d => `${d[0]} || ${d[1]}`).join('\n')});
    }
    if(!exs.length && lesson){
      exs.push({type:'Question directe', question:`Explique avec tes mots : ${clean(lesson.title || 'la notion étudiée')}.`, correction:lesson.fr || lesson.objective || ''});
    }
    return exs;
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
  function renderQcm(ex, i){
    const opts = lines(ex.options);
    const correct = ex.answer || ex.correction || opts[0] || '';
    return `<article class="v215-kine-exercise" data-v215-exercise="qcm" data-answer="${h(correct)}"><div class="v215-ex-head"><span>Exercice ${i+1}</span><h4>${h(ex.question || 'Choisis la bonne réponse.')}</h4></div><div class="v215-qcm-options">${opts.map(o=>`<button type="button" class="btn secondary small" data-v215-qcm-choice="${h(o)}">${h(o)}</button>`).join('') || '<p class="subtle">Aucun choix saisi.</p>'}</div><div class="v215-live-feedback"></div></article>`;
  }
  function renderComplete(ex, i){
    return `<article class="v215-kine-exercise" data-v215-exercise="complete" data-answer="${h(ex.answer || ex.correction)}"><div class="v215-ex-head"><span>Exercice ${i+1}</span><h4>${h(ex.question || 'Complète la phrase.')}</h4></div><div class="v215-answer-row"><input class="v215-input" data-v215-complete-input placeholder="Ta réponse"><button type="button" class="btn small" data-v215-check-complete>Vérifier</button></div><div class="v215-live-feedback"></div></article>`;
  }
  function renderAssociation(ex, i){
    const pairs = parsePairs(ex.pairs);
    const defs = shuffled(pairs.map(p => p.def));
    return `<article class="v215-kine-exercise" data-v215-exercise="association"><div class="v215-ex-head"><span>Exercice ${i+1}</span><h4>${h(ex.question || 'Associe chaque notion à sa définition.')}</h4></div>${pairs.length ? `<div class="v215-association-list">${pairs.map(p=>`<label class="v215-association-row" data-answer="${h(p.def)}"><strong>${h(p.term)}</strong><select data-v215-assoc-select><option value="">Choisir...</option>${defs.map(d=>`<option value="${h(d)}">${h(d)}</option>`).join('')}</select></label>`).join('')}</div><button type="button" class="btn small" data-v215-check-association>Vérifier</button>` : '<p class="subtle">Aucune association saisie.</p>'}<div class="v215-live-feedback"></div></article>`;
  }
  function renderOrder(ex, i){
    const steps = lines(ex.steps);
    const list = shuffled(steps);
    return `<article class="v215-kine-exercise" data-v215-exercise="order" data-answer="${h(steps.join('||'))}"><div class="v215-ex-head"><span>Exercice ${i+1}</span><h4>${h(ex.question || 'Remets les étapes dans le bon ordre.')}</h4></div>${list.length ? `<ol class="v215-order-list">${list.map(s=>`<li data-v215-order-item><span>${h(s)}</span><button type="button" class="btn ghost small" data-v215-up>↑</button><button type="button" class="btn ghost small" data-v215-down>↓</button></li>`).join('')}</ol><button type="button" class="btn small" data-v215-check-order>Vérifier</button>` : '<p class="subtle">Aucune étape saisie.</p>'}<div class="v215-live-feedback"></div></article>`;
  }
  function renderOpenTask(ex, i){
    const correction = ex.correction || ex.answer || '';
    return `<article class="v215-kine-exercise" data-v215-exercise="task"><div class="v215-ex-head"><span>Exercice ${i+1}</span><h4>${h(ex.question || 'Réalise la tâche demandée.')}</h4></div><textarea class="v215-student-answer" rows="3" placeholder="Écris ta réponse..."></textarea>${correction ? `<button type="button" class="btn secondary small" data-v215-show-correction>Afficher la correction</button><div class="v215-correction" hidden><strong>Correction :</strong><p>${h(correction)}</p></div>` : ''}</article>`;
  }
  function renderExercise(ex, i){
    const type = norm(ex.type);
    if(type.includes('qcm')) return renderQcm(ex, i);
    if(type.includes('completer') || type.includes('compl')) return renderComplete(ex, i);
    if(type.includes('association')) return renderAssociation(ex, i);
    if(type.includes('ordre')) return renderOrder(ex, i);
    return renderOpenTask(ex, i);
  }
  function renderUnifiedKinePanel(unit, lesson, content){
    const custom = content && Array.isArray(content.subtitleItems) ? customExercises(unit, lesson, content) : [];
    const exs = custom.length ? custom : defaultExercises(lesson);
    const title = clean(lesson && lesson.title || unit && unit.title || 'Style kinesthésique');
    return `<section class="panel kine-panel v215-kine-panel"><div class="style-header clean-style-header"><div><span class="mini-pill">Style kinesthésique</span><h3>${h(title)}</h3></div></div><div class="v215-kine-grid">${exs.map(renderExercise).join('')}</div></section>`;
  }
  function patchKinePanel(){
    if(window.__EPI_V215_KINE_PANEL__) return true;
    if(typeof kinePanel !== 'function') return false;
    window.__EPI_V215_KINE_PANEL__ = true;
    kinePanel = function(lesson){
      const unit = findUnitForLesson(lesson);
      const content = teacherContent(unit);
      return renderUnifiedKinePanel(unit, lesson, content);
    };
    return true;
  }

  function feedback(ok, msg){ return `<div class="v215-feedback ${ok?'ok':'ko'}">${h(msg)}</div>`; }
  function injectCss(){
    if(q('#v215-style')) return;
    const st = document.createElement('style');
    st.id = 'v215-style';
    st.textContent = `
      .app-shell,.v87-student-shell,.v125-unit-view{max-width:none!important;width:100%!important}.v125-unit-view .layout,.fix-content-layout,.unit-layout,.lesson-layout{max-width:1760px!important;width:min(98vw,1760px)!important;margin:0 auto!important;padding-left:22px!important;padding-right:22px!important;box-sizing:border-box!important;gap:28px!important}.v125-unit-view .page-title,.page-title{max-width:1760px!important;width:min(98vw,1760px)!important;margin-left:auto!important;margin-right:auto!important;padding-left:22px!important;padding-right:22px!important;box-sizing:border-box!important}.content-card,.fix-content-card,.panel,.official-box,.teacher-sheet{max-width:none!important}.content-card,.fix-content-card{padding:30px!important;border-radius:32px!important}.panel{padding:24px!important}.visual-layout{max-width:none!important;width:100%!important}.visual-gallery,.v208-visual-grid,.v215-kine-grid{width:100%!important}.v215-kine-panel .style-header{margin-bottom:12px!important}.v215-kine-grid{display:grid;gap:16px}.v215-kine-exercise{background:#fff;border:1px solid rgba(37,99,235,.14);border-radius:22px;padding:16px;box-shadow:0 14px 34px rgba(15,23,42,.07);display:grid;gap:12px}.v215-ex-head span{width:max-content;background:#dbeafe;color:#1d4ed8;border-radius:999px;padding:5px 10px;font-weight:1000}.v215-ex-head h4{margin:.45rem 0;color:#0f172a;line-height:1.45}.v215-qcm-options,.v215-answer-row{display:flex;gap:10px;flex-wrap:wrap;align-items:center}.v215-input,.v215-student-answer,.v215-association-row select{border:1px solid #cbd5e1;border-radius:14px;padding:10px 12px;font:inherit;background:#fff}.v215-input{min-width:240px}.v215-feedback{border-radius:14px;padding:10px 12px;font-weight:900}.v215-feedback.ok{background:#ecfdf5;border:1px solid #bbf7d0;color:#047857}.v215-feedback.ko{background:#fff7ed;border:1px solid #fed7aa;color:#c2410c}.v215-association-list{display:grid;gap:10px}.v215-association-row{display:grid;grid-template-columns:minmax(150px,240px) 1fr;gap:10px;align-items:center;background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:10px}.v215-order-list{display:grid;gap:8px;padding-left:0;list-style:none}.v215-order-list li{display:grid;grid-template-columns:1fr auto auto;gap:8px;align-items:center;background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:10px}.v215-correction{border:1px solid #bbf7d0;background:#ecfdf5;border-radius:14px;padding:10px;color:#065f46}.v214-kine-panel .style-header p,.v214-kine-empty p,.kine-panel .subtle{display:none!important}@media(max-width:780px){.v125-unit-view .layout,.fix-content-layout,.unit-layout,.lesson-layout{width:100%!important;padding-left:10px!important;padding-right:10px!important}.content-card,.fix-content-card{padding:18px!important}.v215-association-row{grid-template-columns:1fr}.v215-order-list li{grid-template-columns:1fr auto auto}}
    `;
    document.head.appendChild(st);
  }
  function wireExerciseClicks(){
    if(window.__EPI_V215_EXERCISE_CLICKS__) return;
    window.__EPI_V215_EXERCISE_CLICKS__ = true;
    document.addEventListener('click', function(e){
      const choice = e.target.closest && e.target.closest('[data-v215-qcm-choice]');
      if(choice){ const card = choice.closest('[data-v215-exercise="qcm"]'); const ok = norm(choice.dataset.v215QcmChoice || choice.textContent) === norm(card.dataset.answer); const fb = q('.v215-live-feedback', card); if(fb) fb.innerHTML = feedback(ok, ok ? 'Très bien.' : 'Bonne réponse : ' + (card.dataset.answer || '')); return; }
      const complete = e.target.closest && e.target.closest('[data-v215-check-complete]');
      if(complete){ const card = complete.closest('[data-v215-exercise="complete"]'); const val = q('[data-v215-complete-input]', card)?.value || ''; const ok = norm(val) === norm(card.dataset.answer); const fb = q('.v215-live-feedback', card); if(fb) fb.innerHTML = feedback(ok, ok ? 'Réponse correcte.' : 'Réponse attendue : ' + (card.dataset.answer || '')); return; }
      const assoc = e.target.closest && e.target.closest('[data-v215-check-association]');
      if(assoc){ const card = assoc.closest('[data-v215-exercise="association"]'); const rows = qa('.v215-association-row', card); const ok = rows.length && rows.every(r => norm(q('select', r)?.value) === norm(r.dataset.answer)); const fb = q('.v215-live-feedback', card); if(fb) fb.innerHTML = feedback(ok, ok ? 'Toutes les associations sont correctes.' : 'Certaines associations sont incorrectes.'); return; }
      const up = e.target.closest && e.target.closest('[data-v215-up]');
      if(up){ const li = up.closest('[data-v215-order-item]'); if(li && li.previousElementSibling) li.parentElement.insertBefore(li, li.previousElementSibling); return; }
      const down = e.target.closest && e.target.closest('[data-v215-down]');
      if(down){ const li = down.closest('[data-v215-order-item]'); if(li && li.nextElementSibling) li.parentElement.insertBefore(li.nextElementSibling, li); return; }
      const order = e.target.closest && e.target.closest('[data-v215-check-order]');
      if(order){ const card = order.closest('[data-v215-exercise="order"]'); const wanted = String(card.dataset.answer || '').split('||').map(norm).filter(Boolean).join('||'); const got = qa('[data-v215-order-item] span', card).map(x => norm(x.textContent)).join('||'); const ok = wanted && wanted === got; const fb = q('.v215-live-feedback', card); if(fb) fb.innerHTML = feedback(ok, ok ? 'Ordre correct.' : 'L’ordre n’est pas encore correct.'); return; }
      const show = e.target.closest && e.target.closest('[data-v215-show-correction]');
      if(show){ const card = show.closest('.v215-kine-exercise'); const box = q('.v215-correction', card); if(box){ box.hidden = !box.hidden; show.textContent = box.hidden ? 'Afficher la correction' : 'Masquer la correction'; } return; }
    }, true);
  }
  function start(){
    patchTeacherAuth();
    injectCss();
    wireExerciseClicks();
    let tries = 0;
    function tryPatch(){ if(patchKinePanel()) return; if(++tries < 15) setTimeout(tryPatch, 120); }
    tryPatch();
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
})();
