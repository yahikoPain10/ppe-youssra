/* =========================================================
   ÉPI v242 — Jeu Vrai/Faux des raccourcis clavier
   - Ajoute une rubrique « Jeu raccourcis clavier » dans chaque unité.
   - Banque maximale de raccourcis utiles selon l’unité.
   - Jeu Vrai/Faux interactif avec score et correction.
   - Conserve l’interface v240 : styles en pages séparées + menu mince.
========================================================= */
(function(){
  'use strict';

  const STYLE_ID = 'v242-jeu-raccourcis-style';

  function H(value){
    if(typeof esc === 'function') return esc(value == null ? '' : value);
    return String(value == null ? '' : value).replace(/[&<>"']/g, function(m){
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]);
    });
  }
  function getState(){ try{ return (typeof state !== 'undefined') ? state : window.state; }catch(e){ return window.state || {}; } }
  function lessonsOf(unit){ return unit && Array.isArray(unit.lessons) ? unit.lessons : []; }
  function normalizeText(v){
    return String(v || '').toLowerCase()
      .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9]+/g, ' ').trim();
  }

  const BANKS = {
    systeme: [
      ['Ctrl + C','copier un texte, une image ou un fichier sélectionné'],
      ['Ctrl + V','coller l’élément copié ou coupé'],
      ['Ctrl + X','couper l’élément sélectionné pour le déplacer'],
      ['Ctrl + Z','annuler la dernière action'],
      ['Ctrl + Y','rétablir une action annulée'],
      ['Ctrl + A','tout sélectionner dans la fenêtre ou le document'],
      ['Ctrl + S','enregistrer le travail en cours'],
      ['Ctrl + P','ouvrir la fenêtre d’impression'],
      ['Ctrl + F','rechercher un mot dans une page ou un document'],
      ['Alt + Tab','changer rapidement de fenêtre ouverte'],
      ['Windows + D','afficher ou masquer le bureau'],
      ['Windows + L','verrouiller la session de l’ordinateur'],
      ['F5','actualiser la page ou la fenêtre ouverte'],
      ['Échap','annuler une action ou fermer une petite fenêtre'],
      ['Entrée','valider un choix ou ouvrir l’élément sélectionné'],
      ['Suppr','supprimer l’élément sélectionné'],
      ['Imp. écran','faire une capture de tout l’écran'],
      ['Ctrl + Maj + Échap','ouvrir le gestionnaire des tâches']
    ],
    os: [
      ['Windows + E','ouvrir l’explorateur de fichiers'],
      ['Windows + D','afficher rapidement le bureau'],
      ['Windows + L','verrouiller la session'],
      ['Alt + Tab','passer d’une fenêtre ouverte à une autre'],
      ['Alt + F4','fermer la fenêtre active'],
      ['Ctrl + C','copier le fichier ou le texte sélectionné'],
      ['Ctrl + V','coller le fichier ou le texte copié'],
      ['Ctrl + X','couper le fichier pour le déplacer'],
      ['Ctrl + Z','annuler la dernière action dans le dossier'],
      ['Ctrl + A','sélectionner tous les éléments du dossier'],
      ['F2','renommer le fichier ou le dossier sélectionné'],
      ['Suppr','envoyer l’élément sélectionné vers la corbeille'],
      ['Maj + Suppr','supprimer définitivement sans passer par la corbeille'],
      ['Ctrl + Maj + N','créer un nouveau dossier'],
      ['Alt + Entrée','ouvrir les propriétés de l’élément sélectionné'],
      ['F5','actualiser le contenu de la fenêtre'],
      ['Ctrl + F','chercher un fichier ou un dossier'],
      ['Ctrl + N','ouvrir une nouvelle fenêtre'],
      ['Windows + R','ouvrir la fenêtre Exécuter'],
      ['Ctrl + Maj + Échap','ouvrir le gestionnaire des tâches']
    ],
    tableur: [
      ['Ctrl + N','créer un nouveau classeur'],
      ['Ctrl + O','ouvrir un classeur existant'],
      ['Ctrl + S','enregistrer le classeur'],
      ['Ctrl + P','imprimer ou préparer l’impression'],
      ['Ctrl + C','copier une cellule ou une plage sélectionnée'],
      ['Ctrl + V','coller le contenu copié dans une cellule'],
      ['Ctrl + X','couper une cellule ou une plage pour la déplacer'],
      ['Ctrl + Z','annuler la dernière action'],
      ['Ctrl + Y','rétablir la dernière action annulée'],
      ['Ctrl + A','sélectionner la zone de données ou toute la feuille'],
      ['Ctrl + F','rechercher une donnée dans la feuille'],
      ['Ctrl + H','rechercher et remplacer une donnée'],
      ['Ctrl + B','mettre le contenu sélectionné en gras'],
      ['Ctrl + I','mettre le contenu sélectionné en italique'],
      ['Ctrl + U','souligner le contenu sélectionné'],
      ['F2','modifier directement le contenu de la cellule active'],
      ['Entrée','valider la saisie et passer à la cellule suivante'],
      ['Tab','valider la saisie et passer à la cellule de droite'],
      ['Suppr','effacer le contenu de la cellule sélectionnée'],
      ['Ctrl + ;','insérer la date du jour dans une cellule'],
      ['Ctrl + Maj + :','insérer l’heure actuelle dans une cellule'],
      ['Ctrl + Page suivante','passer à la feuille suivante du classeur'],
      ['Ctrl + Page précédente','passer à la feuille précédente du classeur'],
      ['Maj + F11','ajouter une nouvelle feuille'],
      ['Alt + =','insérer rapidement la fonction SOMME automatique'],
      ['Ctrl + `','afficher ou masquer les formules'],
      ['Ctrl + Home','aller au début de la feuille'],
      ['Ctrl + End','aller à la dernière cellule utilisée'],
      ['Ctrl + Espace','sélectionner toute la colonne'],
      ['Maj + Espace','sélectionner toute la ligne']
    ],
    logo: [
      ['Ctrl + N','créer un nouveau fichier ou un nouveau programme'],
      ['Ctrl + O','ouvrir un fichier de programme'],
      ['Ctrl + S','enregistrer le programme LOGO'],
      ['Ctrl + C','copier une instruction sélectionnée'],
      ['Ctrl + V','coller une instruction copiée'],
      ['Ctrl + X','couper une instruction pour la déplacer'],
      ['Ctrl + Z','annuler la dernière modification du programme'],
      ['Ctrl + Y','rétablir une modification annulée'],
      ['Ctrl + A','sélectionner tout le programme'],
      ['Ctrl + F','rechercher une instruction dans le programme'],
      ['Entrée','valider ou exécuter une ligne selon l’environnement'],
      ['Échap','annuler une action ou sortir d’une commande'],
      ['AV','faire avancer la tortue'],
      ['RE','faire reculer la tortue'],
      ['TD','tourner la tortue à droite'],
      ['TG','tourner la tortue à gauche'],
      ['LC','lever le crayon pour se déplacer sans tracer'],
      ['BC','baisser le crayon pour recommencer à tracer'],
      ['VE','vider l’écran de dessin'],
      ['REPETE','répéter plusieurs instructions sans les réécrire'],
      ['POUR … FIN','créer une procédure réutilisable'],
      ['ECRIS','afficher un message à l’écran']
    ],
    default: [
      ['Ctrl + C','copier l’élément sélectionné'],
      ['Ctrl + V','coller l’élément copié'],
      ['Ctrl + X','couper l’élément sélectionné'],
      ['Ctrl + Z','annuler la dernière action'],
      ['Ctrl + A','tout sélectionner'],
      ['Ctrl + S','enregistrer le travail'],
      ['Ctrl + P','imprimer'],
      ['Ctrl + F','rechercher'],
      ['Alt + Tab','changer de fenêtre'],
      ['F5','actualiser'],
      ['Suppr','supprimer l’élément sélectionné'],
      ['Échap','annuler ou fermer une petite fenêtre']
    ]
  };

  function bankKey(unit){
    const id = normalizeText(unit && unit.id);
    const title = normalizeText(unit && unit.title);
    const all = id + ' ' + title;
    if(all.includes('tableur')) return 'tableur';
    if(all.includes('logo') || all.includes('programmation')) return 'logo';
    if(all.includes('exploitation') || all.includes('os')) return 'os';
    if(all.includes('systeme informatique') || all.includes('systeme')) return 'systeme';
    return 'default';
  }
  function shortcutsFor(unit){
    // Priorité stricte aux raccourcis saisis par le professeur.
    // Aucun contenu automatique n'est injecté dans le jeu.
    try{
      if(window.EPI_V243_SHORTCUTS && typeof window.EPI_V243_SHORTCUTS.getForUnit === 'function'){
        const custom = window.EPI_V243_SHORTCUTS.getForUnit(unit) || [];
        const configured = typeof window.EPI_V243_SHORTCUTS.isConfigured === 'function' && window.EPI_V243_SHORTCUTS.isConfigured(unit);
        if(configured || (Array.isArray(custom) && custom.length)){
          return custom.map(function(x){ return [x.shortcut || x.key || '', x.action || x.fonction || x.description || '']; }).filter(function(x){ return x[0] && x[1]; });
        }
      }
    }catch(e){}
    return [];
  }

  function buildQuestions(items){
    const questions = [];
    const actions = items.map(x => x[1]);
    items.forEach(function(item, index){
      if(index % 3 === 1){
        let wrong = actions[(index + 5) % actions.length] || actions[0];
        if(wrong === item[1]) wrong = actions[(index + 7) % actions.length] || 'faire une autre action';
        questions.push({shortcut:item[0], shownAction:wrong, correct:false, explain:item[0] + ' sert à ' + item[1] + '.'});
      }else{
        questions.push({shortcut:item[0], shownAction:item[1], correct:true, explain:item[0] + ' sert à ' + item[1] + '.'});
      }
    });
    return questions;
  }

  function renderShortcutGame(unit){
    const items = shortcutsFor(unit);
    if(!items.length){
      return `<section class="v242-shortcuts-page">
        <div class="v242-shortcuts-head">
          <div>
            <span class="mini-pill">Jeu interactif</span>
            <h2>Raccourcis utiles — Vrai / Faux</h2>
            <p>Aucun raccourci n’est encore défini pour cette unité.</p>
          </div>
          <button type="button" class="btn secondary small" data-action="unit-intro">Retour unité</button>
        </div>
        <div class="v242-empty-note">Le professeur peut ajouter les raccourcis depuis Ajouter unité ou Modifier unité.</div>
      </section>`;
    }
    const qs = buildQuestions(items);
    const rows = items.map(function(item, i){
      return `<tr><td>${i+1}</td><td><kbd>${H(item[0])}</kbd></td><td>${H(item[1])}</td></tr>`;
    }).join('');
    const cards = qs.map(function(q, i){
      return `<article class="v242-question" data-v242-q="${i}" data-answer="${q.correct ? 'true' : 'false'}" data-explain="${H(q.explain)}">
        <div class="v242-question-head"><span>Question ${i+1}</span><kbd>${H(q.shortcut)}</kbd></div>
        <p><strong>${H(q.shortcut)}</strong> sert à ${H(q.shownAction)}.</p>
        <div class="v242-choice-row">
          <button type="button" class="v242-choice" data-v242-choice="true">Vrai</button>
          <button type="button" class="v242-choice" data-v242-choice="false">Faux</button>
        </div>
        <div class="v242-feedback" aria-live="polite"></div>
      </article>`;
    }).join('');
    return `<section class="v242-shortcuts-page">
      <div class="v242-shortcuts-head">
        <div>
          <span class="mini-pill">Jeu interactif</span>
          <h2>Raccourcis utiles — Vrai / Faux</h2>
          <p>Lis chaque phrase, puis choisis <strong>Vrai</strong> ou <strong>Faux</strong>. Le score apparaît à la fin.</p>
        </div>
        <button type="button" class="btn secondary small" data-action="unit-intro">Retour unité</button>
      </div>
      <details class="v242-bank" open>
        <summary>Voir la banque des raccourcis utiles de cette unité</summary>
        <div class="v242-table-wrap"><table><thead><tr><th>N°</th><th>Raccourci</th><th>Fonction</th></tr></thead><tbody>${rows}</tbody></table></div>
      </details>
      <div class="v242-game" data-v242-game data-total="${qs.length}">${cards}</div>
      <div class="v242-actions">
        <button type="button" class="btn" data-v242-check>Afficher mon score</button>
        <button type="button" class="btn ghost" data-v242-reset>Recommencer</button>
        <strong class="v242-score" data-v242-score></strong>
      </div>
    </section>`;
  }

  function currentValue(){
    const st = getState();
    if(st.page === 'lesson') return 'lesson:' + (Number(st.lessonIndex) || 0);
    return st.page || 'intro';
  }
  function option(value, label, selectedValue){
    return `<option value="${H(value)}" ${value === selectedValue ? 'selected' : ''}>${H(label)}</option>`;
  }
  function unitSelector(unit){
    const selectedValue = currentValue();
    const lessonOptions = lessonsOf(unit).map(function(lesson, index){
      return option('lesson:' + index, (index + 1) + '. ' + (lesson.title || 'Sous-titre'), selectedValue);
    }).join('');
    return `<section class="v236-unit-selector v242-unit-selector" aria-label="Liste déroulante du contenu de l’unité">
      <label class="v236-select-wrap v242-select-wrap" for="v242UnitPartSelect">
        <select id="v242UnitPartSelect" data-v236-unit-part data-v242-unit-part>
          ${option('intro', 'Présentation de l’unité', selectedValue)}
          ${lessonOptions}
          ${option('shortcuts', 'Jeu raccourcis clavier — Vrai/Faux', selectedValue)}
          ${option('dictionary', 'Jeu dictionnaire — 3 choix', selectedValue)}
          ${option('integration', 'Situation d’intégration', selectedValue)}
          ${option('exam', 'Contrôle final de l’unité', selectedValue)}
        </select>
      </label>
    </section>`;
  }

  function renderCurrentContent(unit){
    const st = getState();
    if(!unit) return '';
    if(st.page === 'intro' && typeof renderUnitIntro === 'function') return renderUnitIntro(unit);
    if(st.page === 'lesson' && typeof renderLesson === 'function') return renderLesson(unit, lessonsOf(unit)[Number(st.lessonIndex) || 0]);
    if(st.page === 'shortcuts') return renderShortcutGame(unit);
    if(st.page === 'dictionary' && typeof renderDictionary === 'function') return renderDictionary(unit);
    if(st.page === 'integration' && typeof renderIntegration === 'function') return renderIntegration(unit);
    if(st.page === 'exam' && typeof renderExam === 'function') return renderExam(unit);
    if(st.page === 'online' && typeof renderOnlineTool === 'function') return renderOnlineTool(unit);
    if(st.page === 'dynamic' && typeof renderDynamicPage === 'function') return renderDynamicPage(unit);
    return typeof renderUnitIntro === 'function' ? renderUnitIntro(unit) : `<div class="panel"><h2>${H(unit.title)}</h2></div>`;
  }

  function v242RenderUnit(){
    installStyles();
    const unit = (typeof currentUnit === 'function') ? currentUnit() : ((typeof UNITS !== 'undefined' && UNITS[0]) ? UNITS[0] : null);
    if(!unit){ if(typeof renderHome === 'function') renderHome(); return; }
    const st = getState();
    const levelClass = st && st.selectedLevel === '1ac' ? 'v125-unit-view v125-unit-view-1ac'
      : st && st.selectedLevel === '2ac' ? 'v125-unit-view v125-unit-view-2ac'
      : 'v125-unit-view';
    const html = `<main class="v236-unit-page v242-unit-page ${levelClass}">
      ${unitSelector(unit)}
      <main class="content-card v236-content-card v242-content-card">${renderCurrentContent(unit)}</main>
    </main>`;
    const shell = (typeof appShell === 'function') ? appShell(html) : html;
    const app = document.getElementById('app');
    if(app) app.innerHTML = shell;
  }

  function installStyles(){
    if(document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
/* V242 — raccourcis en jeu vrai/faux */
.v242-unit-page{width:min(960px, calc(100vw - 26px))!important;margin:4px auto 18px!important;}
.v242-unit-selector{
  position:relative!important;
  top:auto!important;
  display:flex!important;
  justify-content:center!important;
  align-items:center!important;
  width:min(520px, calc(100vw - 42px))!important;
  max-width:520px!important;
  margin:0 auto 8px!important;
  padding:4px 8px!important;
  border-radius:14px!important;
  border:1px solid rgba(124,58,237,.22)!important;
  background:#fff!important;
  box-shadow:0 4px 12px rgba(76,29,149,.06)!important;
}
.v242-select-wrap{width:100%!important;display:block!important;}
.v242-select-wrap span,.v236-unit-selector-title{display:none!important;}
.v242-select-wrap select{
  height:34px!important;min-height:34px!important;width:100%!important;
  text-align:center!important;text-align-last:center!important;
  border-radius:12px!important;border:1px solid rgba(124,58,237,.38)!important;
  font-size:13.5px!important;font-weight:950!important;color:#171326!important;background:#fff!important;
}
.v242-content-card{padding:10px!important;border-radius:18px!important;overflow:visible!important;}
.v242-shortcuts-page{display:grid;gap:10px;width:100%;}
.v242-shortcuts-head{display:flex;justify-content:space-between;gap:10px;align-items:flex-start;background:#fff;border:1px solid #ddd6fe;border-radius:16px;padding:12px;}
.v242-shortcuts-head h2{margin:4px 0 3px;font-size:1.16rem;color:#20113d;}
.v242-shortcuts-head p{margin:0;color:#475569;font-size:.9rem;line-height:1.35;}
.v242-bank{background:#fff;border:1px solid #ddd6fe;border-radius:16px;padding:10px 12px;}
.v242-bank summary{cursor:pointer;font-weight:950;color:#4c1d95;}
.v242-table-wrap{max-height:330px;overflow:auto;margin-top:8px;border-radius:12px;border:1px solid #e5e7eb;}
.v242-table-wrap table{width:100%;border-collapse:collapse;background:#fff;font-size:.88rem;}
.v242-table-wrap th,.v242-table-wrap td{padding:8px 9px;border-bottom:1px solid #eef2ff;text-align:left;vertical-align:top;}
.v242-table-wrap th{position:sticky;top:0;background:#f5f3ff;color:#32106b;z-index:1;}
.v242-table-wrap kbd,.v242-question kbd{display:inline-block;background:#f8fafc;border:1px solid #cbd5e1;border-bottom-width:2px;border-radius:7px;padding:2px 7px;font-weight:950;color:#111827;white-space:nowrap;}
.v242-game{display:grid;grid-template-columns:repeat(2, minmax(0,1fr));gap:10px;}
.v242-question{background:#fff;border:1px solid #dbeafe;border-radius:16px;padding:11px;box-shadow:0 8px 18px rgba(15,23,42,.04);}
.v242-question-head{display:flex;justify-content:space-between;align-items:center;gap:8px;margin-bottom:7px;}
.v242-question-head span{font-size:.76rem;text-transform:uppercase;letter-spacing:.03em;color:#6d28d9;font-weight:950;}
.v242-question p{margin:0 0 10px;color:#1e293b;font-size:.92rem;line-height:1.38;font-weight:700;}
.v242-choice-row{display:flex;gap:8px;flex-wrap:wrap;}
.v242-choice{border:1px solid #c4b5fd;background:#fff;color:#4c1d95;border-radius:999px;padding:6px 12px;font-weight:950;cursor:pointer;}
.v242-choice:hover,.v242-choice.selected{background:#ede9fe;}
.v242-choice.good{background:#dcfce7;border-color:#86efac;color:#166534;}
.v242-choice.bad{background:#fee2e2;border-color:#fca5a5;color:#991b1b;}
.v242-feedback{min-height:22px;margin-top:8px;font-size:.84rem;font-weight:850;}
.v242-feedback.ok{color:#15803d;}.v242-feedback.ko{color:#b91c1c;}
.v242-actions{position:sticky;bottom:8px;z-index:20;display:flex;align-items:center;gap:10px;flex-wrap:wrap;background:rgba(255,255,255,.94);border:1px solid #ddd6fe;border-radius:16px;padding:10px;box-shadow:0 10px 22px rgba(15,23,42,.08);}
.v242-score{color:#32106b;}
@media(max-width:760px){.v242-game{grid-template-columns:1fr}.v242-shortcuts-head{display:grid}.v242-table-wrap{max-height:260px}.v242-actions{position:relative;bottom:auto}.v242-unit-page{width:min(100%, calc(100vw - 10px))!important;}}
`;
    document.head.appendChild(style);
  }

  function installRenderOverride(){
    try{ renderUnit = v242RenderUnit; }catch(e){ window.renderUnit = v242RenderUnit; }
    window.renderUnit = v242RenderUnit;
  }

  function selectAnswer(button){
    const card = button.closest('[data-v242-q]');
    if(!card) return;
    card.querySelectorAll('[data-v242-choice]').forEach(function(b){ b.classList.remove('selected','good','bad'); });
    button.classList.add('selected');
    card.setAttribute('data-selected', button.getAttribute('data-v242-choice'));
    const fb = card.querySelector('.v242-feedback');
    if(fb){ fb.textContent = ''; fb.className = 'v242-feedback'; }
  }
  function checkGame(root){
    const game = root.closest('.v242-shortcuts-page') || document;
    const cards = Array.from(game.querySelectorAll('[data-v242-q]'));
    let score = 0;
    cards.forEach(function(card){
      const selected = card.getAttribute('data-selected');
      const answer = card.getAttribute('data-answer');
      const explain = card.getAttribute('data-explain') || '';
      const fb = card.querySelector('.v242-feedback');
      card.querySelectorAll('[data-v242-choice]').forEach(function(b){
        const val = b.getAttribute('data-v242-choice');
        b.classList.remove('good','bad');
        if(val === answer) b.classList.add('good');
        if(selected && val === selected && selected !== answer) b.classList.add('bad');
      });
      if(selected === answer){
        score++;
        if(fb){ fb.textContent = 'Correct.'; fb.className = 'v242-feedback ok'; }
      }else{
        if(fb){ fb.textContent = selected ? ('Faux. Correction : ' + explain) : ('Sans réponse. Correction : ' + explain); fb.className = 'v242-feedback ko'; }
      }
    });
    const scoreBox = game.querySelector('[data-v242-score]');
    if(scoreBox) scoreBox.textContent = 'Score : ' + score + ' / ' + cards.length;
  }
  function resetGame(root){
    const game = root.closest('.v242-shortcuts-page') || document;
    game.querySelectorAll('[data-v242-q]').forEach(function(card){
      card.removeAttribute('data-selected');
      card.querySelectorAll('[data-v242-choice]').forEach(function(b){ b.classList.remove('selected','good','bad'); });
      const fb = card.querySelector('.v242-feedback');
      if(fb){ fb.textContent = ''; fb.className = 'v242-feedback'; }
    });
    const scoreBox = game.querySelector('[data-v242-score]');
    if(scoreBox) scoreBox.textContent = '';
  }

  function installEvents(){
    document.addEventListener('click', function(e){
      const choice = e.target.closest && e.target.closest('[data-v242-choice]');
      if(choice){ e.preventDefault(); selectAnswer(choice); return; }
      const check = e.target.closest && e.target.closest('[data-v242-check]');
      if(check){ e.preventDefault(); checkGame(check); return; }
      const reset = e.target.closest && e.target.closest('[data-v242-reset]');
      if(reset){ e.preventDefault(); resetGame(reset); return; }
    }, true);
    document.addEventListener('change', function(e){
      const sel = e.target.closest && e.target.closest('[data-v242-unit-part]');
      if(!sel) return;
      const st = getState();
      const value = String(sel.value || 'intro');
      if(value.indexOf('lesson:') === 0){
        st.page = 'lesson'; st.lessonIndex = Number(value.split(':')[1]) || 0;
      }else{
        st.page = value;
      }
      st.tab = 'visual';
      setTimeout(v242RenderUnit, 0);
    }, true);
  }

  function install(){
    installStyles();
    installRenderOverride();
    installEvents();
    setTimeout(function(){
      try{
        const app = document.getElementById('app');
        if(app && app.querySelector('.v236-unit-page')) v242RenderUnit();
      }catch(e){}
    }, 150);
  }

  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', install);
  else install();
})();
