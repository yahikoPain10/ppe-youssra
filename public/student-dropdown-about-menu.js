/* =========================================================
   V236 — Espace élève plus compact + liste déroulante
   - La sous-liste de l'unité n'est plus affichée à gauche.
   - Elle devient une liste déroulante placée tout en haut du contenu.
   - Le contenu garde toute la largeur pour gagner de l'espace.
   - Le bloc "À propos" de l'authentification est placé à droite.
========================================================= */
(function(){
  'use strict';

  const STYLE_ID = 'v236-eleve-dropdown-style';

  function h(value){
    if(typeof esc === 'function') return esc(value ?? '');
    return String(value ?? '').replace(/[&<>"']/g, function(m){
      return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[m]);
    });
  }

  function lessonsOf(unit){
    return unit && Array.isArray(unit.lessons) ? unit.lessons : [];
  }

  function cleanTitle(title){
    return String(title || '').replace(/^Unité\s*\d+\s*:\s*/i, '').trim() || String(title || 'Unité');
  }

  function currentValue(){
    if(!window.state && typeof state === 'undefined') return 'intro';
    const st = (typeof state !== 'undefined') ? state : window.state;
    if(st.page === 'lesson') return 'lesson:' + (Number(st.lessonIndex) || 0);
    return st.page || 'intro';
  }

  function option(value, label, selectedValue){
    return `<option value="${h(value)}" ${value === selectedValue ? 'selected' : ''}>${h(label)}</option>`;
  }

  function unitSelector(unit){
    const lessons = lessonsOf(unit);
    const selectedValue = currentValue();
    const lessonOptions = lessons.map(function(lesson, index){
      return option('lesson:' + index, (index + 1) + '. ' + (lesson.title || 'Sous-titre'), selectedValue);
    }).join('');

    return `<section class="v236-unit-selector" aria-label="Liste déroulante du contenu de l’unité">
      <div class="v236-unit-selector-title">
        <span>Contenu de l’unité</span>
        <strong>${h(unit.title || 'Unité')}</strong>
      </div>
      <label class="v236-select-wrap" for="v236UnitPartSelect">
        <span>Choisir une partie</span>
        <select id="v236UnitPartSelect" data-v236-unit-part>
          ${option('intro', 'Présentation de l’unité', selectedValue)}
          ${lessonOptions}
          ${option('dictionary', 'Jeu dictionnaire — 3 choix', selectedValue)}
          ${option('integration', 'Situation d’intégration', selectedValue)}
          ${option('exam', 'Contrôle final de l’unité', selectedValue)}
        </select>
      </label>
    </section>`;
  }

  function renderCurrentContent(unit){
    const st = (typeof state !== 'undefined') ? state : window.state;
    if(!unit) return '';
    if(st.page === 'intro' && typeof renderUnitIntro === 'function') return renderUnitIntro(unit);
    if(st.page === 'lesson' && typeof renderLesson === 'function') return renderLesson(unit, lessonsOf(unit)[Number(st.lessonIndex) || 0]);
    if(st.page === 'dictionary' && typeof renderDictionary === 'function') return renderDictionary(unit);
    if(st.page === 'integration' && typeof renderIntegration === 'function') return renderIntegration(unit);
    if(st.page === 'exam' && typeof renderExam === 'function') return renderExam(unit);
    if(st.page === 'online' && typeof renderOnlineTool === 'function') return renderOnlineTool(unit);
    if(st.page === 'dynamic' && typeof renderDynamicPage === 'function') return renderDynamicPage(unit);
    if(typeof renderUnitIntro === 'function') return renderUnitIntro(unit);
    return `<div class="panel"><h2>${h(unit.title)}</h2></div>`;
  }

  function installStyles(){
    if(document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
/* V236 — unité élève sans grande liste latérale */
.v236-unit-page{
  width:min(1180px, calc(100vw - 18px)) !important;
  margin:8px auto 18px !important;
  padding:0 !important;
}
.v236-unit-selector{
  position:sticky !important;
  top:6px !important;
  z-index:40 !important;
  display:grid !important;
  grid-template-columns:minmax(220px, .9fr) minmax(260px, 1.1fr) !important;
  gap:10px !important;
  align-items:end !important;
  margin:0 0 10px !important;
  padding:10px 12px !important;
  border-radius:18px !important;
  background:linear-gradient(135deg, rgba(255,255,255,.96), rgba(245,243,255,.96)) !important;
  border:2px solid rgba(124,58,237,.28) !important;
  box-shadow:0 10px 24px rgba(76,29,149,.12) !important;
  backdrop-filter:blur(8px) !important;
}
.v236-unit-selector-title{
  min-width:0 !important;
  display:grid !important;
  gap:2px !important;
}
.v236-unit-selector-title span,
.v236-select-wrap span{
  font-size:11px !important;
  letter-spacing:.04em !important;
  text-transform:uppercase !important;
  font-weight:950 !important;
  color:#6d28d9 !important;
}
.v236-unit-selector-title strong{
  color:#19122b !important;
  font-size:16px !important;
  line-height:1.2 !important;
  white-space:nowrap !important;
  overflow:hidden !important;
  text-overflow:ellipsis !important;
}
.v236-select-wrap{
  display:grid !important;
  gap:4px !important;
}
.v236-select-wrap select{
  width:100% !important;
  min-height:42px !important;
  padding:0 14px !important;
  border-radius:14px !important;
  border:2px solid rgba(124,58,237,.35) !important;
  background:#fff !important;
  color:#171326 !important;
  font-size:15px !important;
  font-weight:900 !important;
  outline:none !important;
  box-shadow:inset 0 1px 0 rgba(255,255,255,.85) !important;
}
.v236-select-wrap select:focus{
  border-color:#7c3aed !important;
  box-shadow:0 0 0 4px rgba(124,58,237,.13) !important;
}
.v236-content-card,
.v236-unit-page .content-card{
  width:100% !important;
  max-width:none !important;
  margin:0 !important;
  padding:14px !important;
  border-radius:20px !important;
}
.v236-unit-page .layout,
.v236-unit-page .fix-content-layout{
  display:block !important;
}
.v236-unit-page .sidebar,
.v236-unit-page .fix-unit-sidebar{
  display:none !important;
}
.v236-unit-page .page-title{
  display:none !important;
}
/* Le bloc À propos de la page d’authentification passe à droite */
.v121-about,
.v121-about.v146-about{
  left:auto !important;
  right:16px !important;
  bottom:14px !important;
  transform:none !important;
  width:min(430px, calc(100vw - 32px)) !important;
  max-width:430px !important;
  justify-content:flex-start !important;
  text-align:left !important;
  border-radius:20px !important;
  padding:10px 14px !important;
}
.v121-about strong,
.v121-about span,
.v121-about em{
  text-align:left !important;
}
@media(max-width:720px){
  .v236-unit-page{width:min(100%, calc(100vw - 10px)) !important;margin-top:4px !important;}
  .v236-unit-selector{
    grid-template-columns:1fr !important;
    gap:6px !important;
    padding:8px !important;
    border-radius:16px !important;
  }
  .v236-unit-selector-title strong{font-size:14px !important;white-space:normal !important;}
  .v236-select-wrap select{min-height:40px !important;font-size:14px !important;}
  .v236-content-card,.v236-unit-page .content-card{padding:10px !important;border-radius:16px !important;}
  .v121-about,.v121-about.v146-about{
    right:10px !important;
    left:10px !important;
    width:auto !important;
    max-width:none !important;
    bottom:10px !important;
  }
}
`;
    document.head.appendChild(style);
  }

  function v236RenderUnit(){
    installStyles();
    const unit = (typeof currentUnit === 'function') ? currentUnit() : null;
    if(!unit){
      if(typeof renderHome === 'function') renderHome();
      return;
    }
    const st = (typeof state !== 'undefined') ? state : window.state;
    const levelClass = st && st.selectedLevel === '1ac' ? 'v125-unit-view v125-unit-view-1ac'
      : st && st.selectedLevel === '2ac' ? 'v125-unit-view v125-unit-view-2ac'
      : 'v125-unit-view';
    const content = renderCurrentContent(unit);
    const html = `<main class="v236-unit-page ${levelClass}">
      ${unitSelector(unit)}
      <main class="content-card v236-content-card">${content}</main>
    </main>`;
    const shell = (typeof appShell === 'function') ? appShell(html) : html;
    const app = document.getElementById('app');
    if(app) app.innerHTML = shell;
  }

  // Remplacer l'affichage de l'unité par la version compacte à liste déroulante.
  if(typeof renderUnit === 'function'){
    renderUnit = v236RenderUnit;
  }else{
    window.renderUnit = v236RenderUnit;
  }

  document.addEventListener('change', function(e){
    const select = e.target && e.target.closest ? e.target.closest('[data-v236-unit-part]') : null;
    if(!select) return;
    const value = String(select.value || 'intro');
    const st = (typeof state !== 'undefined') ? state : window.state;
    if(!st) return;
    if(value.indexOf('lesson:') === 0){
      st.page = 'lesson';
      st.lessonIndex = Number(value.split(':')[1]) || 0;
    }else{
      st.page = value;
      if(value !== 'lesson') st.lessonIndex = Number(st.lessonIndex) || 0;
    }
    st.tab = 'visual';
    v236RenderUnit();
  }, true);

  // Installer le style dès l'authentification pour placer À propos à droite.
  installStyles();
})();
