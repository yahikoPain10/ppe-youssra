/* =========================================================
   ÉPI v218 — Accès séparé + choix du contrôle mélangés
   Base v216 — Accès contrôle/remédiation par le professeur
   Objectifs :
   1) Le menu élève garde « Contrôle final », mais le contenu reste bloqué
      tant que le professeur n'a pas donné l'autorisation.
   2) Tableau de bord prof : nouveau bloc « Accès contrôle/remédiation ».
   3) Après validation autorisée : correction courte + remédiation simple.
========================================================= */
(function(){
  'use strict';
  const ACCESS_PREFIX = 'epi_v216_eval_access_';
  const CONTENT_PREFIX = 'epi_v170_unit_content_';

  function h(value){
    return String(value == null ? '' : value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
  }
  function q(sel, root){ return (root || document).querySelector(sel); }
  function qa(sel, root){ return Array.from((root || document).querySelectorAll(sel)); }
  function units(){ return (typeof UNITS !== 'undefined' && Array.isArray(UNITS)) ? UNITS : (Array.isArray(window.UNITS) ? window.UNITS : []); }
  function currentUnitSafe(){
    try{ if(typeof currentUnit === 'function') return currentUnit(); }catch(e){}
    try{ if(typeof state !== 'undefined' && state && state.unitId) return units().find(u => u && u.id === state.unitId) || null; }catch(e){}
    return units()[0] || null;
  }
  function readJson(key, fallback){ try{ const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }catch(e){ return fallback; } }
  function writeJson(key, value){ try{ localStorage.setItem(key, JSON.stringify(value)); return true; }catch(e){ return false; } }
  function contentOf(unit){
    if(!unit || !unit.id) return {};
    return readJson(CONTENT_PREFIX + unit.id, {}) || {};
  }
  function accessKey(unit){ return ACCESS_PREFIX + (unit && unit.id ? unit.id : 'unit'); }
  function accessState(unit){
    const saved = readJson(accessKey(unit), null) || {};
    return {
      exam: saved.exam === true,
      remediation: saved.remediation === true,
      updatedAt: saved.updatedAt || ''
    };
  }
  function isExamAllowed(unit){ return accessState(unit).exam === true; }
  function isRemediationAllowed(unit){ return accessState(unit).remediation === true; }
  function setAccess(unit, target, value){
    if(!unit) return false;
    const current = accessState(unit);
    const next = {
      exam: current.exam === true,
      remediation: current.remediation === true,
      updatedAt: new Date().toISOString()
    };
    if(target === 'exam') next.exam = !!value;
    if(target === 'remediation') next.remediation = !!value;
    if(target === 'both'){
      next.exam = !!value;
      next.remediation = !!value;
    }
    return writeJson(accessKey(unit), next);
  }
  function normalizeExam(list){
    return (Array.isArray(list) ? list : []).map((q, i) => {
      if(Array.isArray(q)){
        const options = Array.isArray(q[1]) ? q[1].map(x => String(x || '')) : [];
        const correct = Number.isFinite(Number(q[2])) ? Number(q[2]) : 0;
        return [String(q[0] || `Question ${i+1}`), options, correct];
      }
      const options = Array.isArray(q && q.options) ? q.options.map(x => String(x || '')) : [q && q.option1, q && q.option2, q && q.option3, q && q.option4].filter(x => x != null).map(x => String(x || ''));
      const correct = Number.isFinite(Number(q && q.correct)) ? Number(q.correct) : Number.isFinite(Number(q && q.correctIndex)) ? Number(q.correctIndex) : 0;
      return [String((q && (q.question || q.title)) || `Question ${i+1}`), options, correct];
    }).filter(x => x[0] && Array.isArray(x[1]) && x[1].length);
  }
  function examQuestions(unit){
    const c = contentOf(unit);
    if(Array.isArray(c.examQuestions) && c.examQuestions.length) return normalizeExam(c.examQuestions);
    if(Array.isArray(c.exam) && c.exam.length) return normalizeExam(c.exam);
    return normalizeExam(unit && unit.exam);
  }
  function lessonNameFor(unit, index, total){
    const lessons = Array.isArray(unit && unit.lessons) ? unit.lessons : [];
    if(!lessons.length) return 'Notion générale';
    const lessonIndex = Math.min(lessons.length - 1, Math.max(0, Math.floor(index * lessons.length / Math.max(1,total))));
    const lesson = lessons[lessonIndex];
    return String((lesson && lesson.title) || `Notion ${lessonIndex+1}`);
  }
  function noAccessPanel(unit){
    return `<div class="section-head v216-exam-locked-head">
      <div><h2>Contrôle final de l’unité</h2><p>Le titre reste disponible, mais le contenu du contrôle et de la remédiation nécessite l’autorisation du professeur.</p></div>
      <span class="pill">Accès bloqué</span>
    </div>
    <section class="panel v216-no-access">
      <h3>Pas d’accès actuellement</h3>
      <p>Le contrôle final et la remédiation ne sont pas encore ouverts pour cette unité.</p>
      <p class="subtle">Demande au professeur d’activer l’accès depuis : <strong>Espace prof → Accès contrôle/remédiation</strong>.</p>
    </section>`;
  }
  function shuffledOptions(options){
    const arr = (Array.isArray(options) ? options : []).map((text, originalIndex) => ({text, originalIndex}));
    for(let i = arr.length - 1; i > 0; i--){
      const j = Math.floor(Math.random() * (i + 1));
      const tmp = arr[i];
      arr[i] = arr[j];
      arr[j] = tmp;
    }
    return arr;
  }
  function renderAuthorizedExam(unit){
    const questions = examQuestions(unit);
    if(!questions.length){
      return `<div class="section-head"><div><h2>Contrôle final de l’unité</h2><p>Aucune question n’est encore définie pour cette unité.</p></div><span class="pill">À compléter</span></div><section class="panel"><p>Le professeur doit ajouter les questions depuis le tableau de bord.</p></section>`;
    }
    const htmlQuestions = questions.map((question, i) => {
      // v218 : on mélange l'ordre affiché des propositions.
      // La valeur du bouton radio reste l'index original, donc la correction reste fiable.
      const opts = shuffledOptions(question[1]).map(item => `<label class="option"><input type="radio" name="q${i}" value="${item.originalIndex}"> ${h(item.text)}</label>`).join('');
      return `<div class="question v216-question-card"><p>${i+1}. ${h(question[0])}</p><div class="options">${opts}</div></div>`;
    }).join('');
    return `<div class="section-head v216-exam-head"><div><h2>Contrôle final de l’unité</h2><p>Contrôle autorisé par le professeur. Les propositions sont mélangées automatiquement pour éviter que la bonne réponse soit toujours au même endroit.</p></div><span class="pill">Autorisé</span></div>
    <div class="panel v216-exam-rule"><strong>Règle :</strong> réponds aux questions, puis valide pour obtenir une correction courte et une remédiation simple.</div>
    <form id="examFormV216"><div class="exam-list">${htmlQuestions}</div><button class="btn" type="submit">Terminer le contrôle</button><div id="examResult"></div></form>`;
  }
  function patchRenderExam(){
    if(window.__EPI_V216_EXAM_PATCHED__) return;
    window.__EPI_V216_EXAM_PATCHED__ = true;
    if(typeof renderExam === 'function'){
      renderExam = function(unit){
        const u = unit || currentUnitSafe();
        if(!isExamAllowed(u)) return noAccessPanel(u);
        return renderAuthorizedExam(u);
      };
    }
  }

  function buildErrorGroups(unit, questions, missed){
    const map = new Map();
    missed.forEach(item => {
      const lesson = lessonNameFor(unit, item.index, questions.length);
      const key = item.status + '|' + lesson;
      if(!map.has(key)) map.set(key, {type:item.status, lesson, nums:[], advice:''});
      map.get(key).nums.push(item.number);
    });
    return Array.from(map.values()).map(g => {
      const typeText = g.type === 'non répondue' ? 'Questions non répondues' : 'Réponses incorrectes';
      const advice = g.type === 'non répondue'
        ? 'Relire la question, éliminer les choix impossibles, puis répondre.'
        : 'Revoir la notion indiquée et comparer avec la bonne réponse.';
      return Object.assign(g, {typeText, advice});
    });
  }
  function correctionHtml(missed){
    if(!missed.length) return `<div class="v216-remediation-card success"><h3>Correction simple</h3><ul><li>Tout est correct.</li><li>Continue avec un exercice d’approfondissement.</li></ul></div>`;
    return `<div class="v216-remediation-card"><h3>Correction simple</h3><ul class="v216-short-list">${missed.map(item => `<li><strong>Q${item.number}</strong> → ${h(item.correction)}</li>`).join('')}</ul></div>`;
  }
  function remediationHtml(unit, questions, missed, score, grade20){
    const total = questions.length || 1;
    const groups = buildErrorGroups(unit, questions, missed);
    const summary = missed.length
      ? [`Réponses correctes : ${score}/${total}`, `À corriger : ${missed.length}`, `Priorité : relire les notions indiquées dans le tableau.`]
      : [`Réponses correctes : ${score}/${total}`, `Aucune erreur importante.`, `Conseil : refaire une activité pratique pour consolider.`];
    const rows = groups.length ? groups.map(g => `<tr><td>${h(g.typeText)}</td><td>${g.nums.map(n=>'Q'+n).join(', ')}</td><td>${h(g.lesson)}</td><td>${h(g.advice)}</td></tr>`).join('') : `<tr><td>Maîtrisé</td><td>—</td><td>Toute l’unité</td><td>Continuer avec des exercices courts.</td></tr>`;
    return `<section class="v216-remediation">
      <div class="v216-remediation-card"><h3>Résumé rapide</h3><ul>${summary.map(x => `<li>${h(x)}</li>`).join('')}</ul></div>
      ${correctionHtml(missed)}
      <div class="v216-remediation-card"><h3>Analyse simple des erreurs</h3><div class="table-scroll"><table class="v216-error-table"><thead><tr><th>Erreur</th><th>Questions</th><th>Notion</th><th>Conseil simple</th></tr></thead><tbody>${rows}</tbody></table></div></div>
      <div class="v216-remediation-card"><h3>Conseil final</h3><p>${grade20 > 10 ? 'Résultat satisfaisant : révise seulement les petites erreurs.' : 'Reprends les notions indiquées, refais les exercices kinesthésiques, puis demande au professeur de rouvrir le contrôle si nécessaire.'}</p></div>
    </section>`;
  }
  function handleExamSubmit(e){
    if(!e.target || e.target.id !== 'examFormV216') return;
    e.preventDefault();
    e.stopPropagation();
    if(e.stopImmediatePropagation) e.stopImmediatePropagation();
    const unit = currentUnitSafe();
    if(!isExamAllowed(unit)){
      const box = q('#examResult', e.target);
      if(box) box.innerHTML = noAccessPanel(unit);
      return;
    }
    const questions = examQuestions(unit);
    let score = 0;
    const missed = [];
    questions.forEach((question, i) => {
      const checked = q(`input[name="q${i}"]:checked`, e.target);
      const correctIndex = Number(question[2]) || 0;
      const ok = checked && Number(checked.value) === correctIndex;
      if(ok) score += 1;
      else missed.push({
        index:i,
        number:i+1,
        status: checked ? 'incorrecte' : 'non répondue',
        question: question[0],
        correction: (question[1] && question[1][correctIndex]) || 'Réponse à revoir avec le professeur.'
      });
    });
    const total = questions.length || 1;
    const grade20 = Math.round((score / total) * 20);
    const bonus = grade20 > 10 ? 5 : 0;
    const totalAvecBonus = Math.min(20, grade20 + bonus);
    const reussi = grade20 > 10;
    const student = (typeof getStudent === 'function' ? getStudent() : null) || {nom:'', prenom:''};
    const diagnostic = missed.length ? buildErrorGroups(unit, questions, missed).map(g => `${g.lesson} (${g.nums.join(',')})`).join(' | ') : 'Maîtrisé';
    try{
      if(typeof saveExamResult === 'function'){
        saveExamResult({
          nom: student.nom || '', prenom: student.prenom || '', unite: unit && unit.title || '',
          note_finale: grade20, bonus, total_avec_bonus: totalAvecBonus,
          statut: reussi ? 'Réussi' : 'À revoir', reussi,
          diagnostic, points_a_reviser: diagnostic,
          plan_revision: missed.length ? 'Revoir les notions du tableau de remédiation.' : 'Approfondissement conseillé.',
          date_iso: new Date().toISOString()
        });
      }
    }catch(err){}
    const result = q('#examResult', e.target);
    if(result){
      const remediationBlock = isRemediationAllowed(unit)
        ? remediationHtml(unit, questions, missed, score, grade20)
        : `<section class="v216-remediation-locked"><h3>Remédiation non autorisée actuellement</h3><p>Le résultat est affiché, mais le contenu de remédiation et la correction détaillée nécessitent l’autorisation du professeur.</p></section>`;
      result.innerHTML = `<div class="result-box exam-final-result v216-final-result ${reussi?'success':'retry'}">
        <h3>${reussi ? 'Résultat du contrôle' : 'Résultat du contrôle'}</h3>
        <p>Score : <strong>${score}/${total}</strong> — Note : <strong>${grade20}/20</strong></p>
        <p>Bonus : <strong>${bonus ? 'Avec bonus' : 'Sans bonus'}</strong> — Total : <strong>${totalAvecBonus}/20</strong></p>
        ${remediationBlock}
        <p class="save-note">Résultat enregistré. L’affichage de la remédiation dépend de l’autorisation séparée du professeur.</p>
      </div>`;
      result.scrollIntoView({behavior:'smooth', block:'start'});
    }
  }

  function ensureDashboardCard(){
    const dashboard = q('.v176-dashboard');
    if(!dashboard || q('[data-v216-access-control]', dashboard)) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'v176-dash-card v216-access-card';
    btn.setAttribute('data-v216-access-control','1');
    btn.innerHTML = `<strong>Accès contrôle/remédiation</strong><small>Autoriser ou bloquer le contrôle final et la remédiation.</small>`;
    dashboard.appendChild(btn);
  }
  function accessStatusHtml(value){
    return `<span class="v216-status ${value ? 'ok' : 'ko'}">${value ? 'Autorisé' : 'Bloqué'}</span>`;
  }
  function accessButtons(unitId, target){
    return `<div class="v217-table-actions">
      <button type="button" class="btn small" data-v217-access-set="1" data-v217-target="${h(target)}" data-v217-value="1" data-v217-unit="${h(unitId)}">Autoriser</button>
      <button type="button" class="btn ghost small" data-v217-access-set="1" data-v217-target="${h(target)}" data-v217-value="0" data-v217-unit="${h(unitId)}">Bloquer</button>
    </div>`;
  }
  function renderAccessPanel(selectedId){
    const page = q('.v176-teacher-page');
    if(!page) return;
    const allUnits = units();
    qa('.v176-dash-card').forEach(x => x.classList.remove('active'));
    const card = q('[data-v216-access-control]');
    if(card) card.classList.add('active');
    qa('.v176-panel').forEach(p => { p.style.display = 'none'; });
    let panel = q('#v216AccessPanel', page);
    if(!panel){
      panel = document.createElement('section');
      panel.id = 'v216AccessPanel';
      panel.className = 'v176-panel v216-access-panel';
      page.appendChild(panel);
    }
    const rows = allUnits.map(u => {
      const st = accessState(u);
      return `<tr>
        <td><strong>${h(u.title || u.id)}</strong></td>
        <td>${accessStatusHtml(st.exam)}${accessButtons(u.id, 'exam')}</td>
        <td>${accessStatusHtml(st.remediation)}${accessButtons(u.id, 'remediation')}</td>
      </tr>`;
    }).join('');
    panel.style.display = '';
    panel.innerHTML = `<div class="v176-panel-head"><span class="mini-pill">Accès</span><h2>Accès contrôle/remédiation</h2><p>Le contrôle final et la remédiation ont chacun leur propre autorisation. Les deux réglages sont placés dans le même tableau.</p></div>
      <article class="v176-form-card v216-access-box">
        <h3>Table d’autorisation</h3>
        <div class="table-scroll"><table class="v216-access-table v217-access-table"><thead><tr><th>Unité</th><th>Contrôle final</th><th>Remédiation</th></tr></thead><tbody>${rows}</tbody></table></div>
        <div class="v216-access-actions"><button type="button" class="btn secondary" data-v216-dashboard-back>Retour au tableau de bord</button></div>
        <p class="subtle">Le contenu du contrôle ne s’affiche que si « Contrôle final » est autorisé. La correction/remédiation ne s’affiche après validation que si « Remédiation » est autorisée.</p>
      </article>`;
    page.classList.add('v211-work-mode','v216-access-mode');
  }
  function closeAccessPanel(){
    const page = q('.v176-teacher-page');
    const panel = q('#v216AccessPanel');
    if(panel) panel.remove();
    const card = q('[data-v216-access-control]');
    if(card) card.classList.remove('active');
    if(page){ page.classList.remove('v211-work-mode','v216-access-mode'); page.classList.add('v211-dashboard-mode'); }
    qa('.v176-panel').forEach(p => { p.style.display = ''; });
  }
  function handleDashboardClick(e){
    const card = e.target.closest && e.target.closest('[data-v216-access-control]');
    if(card){ e.preventDefault(); e.stopPropagation(); if(e.stopImmediatePropagation) e.stopImmediatePropagation(); renderAccessPanel(); return; }
    const back = e.target.closest && e.target.closest('[data-v216-dashboard-back]');
    if(back){ e.preventDefault(); e.stopPropagation(); if(e.stopImmediatePropagation) e.stopImmediatePropagation(); closeAccessPanel(); return; }
    const setBtn = e.target.closest && e.target.closest('[data-v217-access-set]');
    if(setBtn){
      e.preventDefault(); e.stopPropagation(); if(e.stopImmediatePropagation) e.stopImmediatePropagation();
      const id = setBtn.getAttribute('data-v217-unit');
      const target = setBtn.getAttribute('data-v217-target');
      const value = setBtn.getAttribute('data-v217-value') === '1';
      const unit = units().find(u => u && u.id === id) || currentUnitSafe();
      setAccess(unit, target, value);
      renderAccessPanel(unit && unit.id);
      try{ if(typeof state !== 'undefined' && state && state.page === 'exam' && typeof renderUnit === 'function') renderUnit(); }catch(err){}
      return;
    }
  }
  function injectCss(){
    if(q('#v216-style')) return;
    const style = document.createElement('style');
    style.id = 'v216-style';
    style.textContent = `
      .v216-no-access{border:1px dashed rgba(220,38,38,.35);background:#fff7ed;text-align:center;padding:28px;border-radius:24px}.v216-no-access h3{color:#9f1239;margin-top:0}.v216-exam-rule{background:#eff6ff;border-color:#bfdbfe}.v216-question-card{border-radius:18px;background:#fff;box-shadow:0 10px 24px rgba(15,23,42,.06)}.v216-final-result{display:grid;gap:14px}.v216-remediation{display:grid;gap:14px;margin-top:14px}.v216-remediation-card{border:1px solid rgba(37,99,235,.14);background:#fff;border-radius:18px;padding:14px;box-shadow:0 10px 24px rgba(15,23,42,.05)}.v216-remediation-card h3{margin:.1rem 0 .6rem;color:#0f172a}.v216-short-list{line-height:1.8;margin:.2rem 0;padding-left:1.3rem}.v216-error-table{width:100%;border-collapse:collapse;background:#fff}.v216-error-table th,.v216-error-table td{border:1px solid #e2e8f0;padding:9px;text-align:left;vertical-align:top}.v216-error-table th{background:#f8fafc;color:#0f172a}.v216-access-card strong{color:#0f172a}.v216-access-panel{width:100%!important;max-width:none!important}.v216-access-box{display:grid;gap:14px}.v216-current-state{padding:12px 14px;border-radius:16px;font-weight:900}.v216-current-state.open{background:#ecfdf5;color:#047857;border:1px solid #bbf7d0}.v216-current-state.closed{background:#fff7ed;color:#9f1239;border:1px solid #fed7aa}.v216-access-actions{display:flex;gap:10px;flex-wrap:wrap}.v217-table-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:8px}.v217-access-table td{vertical-align:top}.v217-access-table .btn.small{padding:7px 10px;border-radius:12px;font-size:.84rem}.v216-remediation-locked{margin-top:14px;border:1px dashed rgba(220,38,38,.35);background:#fff7ed;color:#9f1239;border-radius:18px;padding:16px}.v216-remediation-locked h3{margin-top:0}.v216-access-table{width:100%;border-collapse:collapse}.v216-access-table th,.v216-access-table td{border:1px solid #e2e8f0;padding:9px;text-align:left}.v216-status{display:inline-flex;border-radius:999px;padding:5px 9px;font-weight:900}.v216-status.ok{background:#dcfce7;color:#166534}.v216-status.ko{background:#fee2e2;color:#991b1b}.v216-access-mode .v176-dashboard{display:none!important}.v216-access-mode #v216AccessPanel{display:block!important}.section-head.v216-exam-locked-head{margin-top:8px}
    `;
    document.head.appendChild(style);
  }
  function tick(){ ensureDashboardCard(); }
  function start(){
    injectCss();
    patchRenderExam();
    tick();
    document.addEventListener('submit', handleExamSubmit, true);
    document.addEventListener('click', handleDashboardClick, true);
    document.addEventListener('change', handleDashboardClick, true);
    try{ new MutationObserver(tick).observe(document.body,{childList:true,subtree:true}); }catch(e){}
    setInterval(tick, 1000);
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
  window.EPI_V216_ACCESS = {accessState, setAccess, isExamAllowed, isRemediationAllowed, renderAccessPanel, closeAccessPanel};
  window.EPI_V217_ACCESS = window.EPI_V216_ACCESS;
})();
