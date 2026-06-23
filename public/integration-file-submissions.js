/* Documents envoyés par les élèves depuis la situation d’intégration. */
(function(){
  'use strict';

  const STORE_KEY = 'epi_integration_submissions';
  const STYLE_ID = 'integration-file-submissions-style';
  const ACCEPT = '.pdf,.doc,.docx,.ppt,.pptx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document,application/vnd.ms-powerpoint,application/vnd.openxmlformats-officedocument.presentationml.presentation';
  const EXT_RE = /\.(pdf|doc|docx|ppt|pptx)$/i;

  function h(value){
    return String(value == null ? '' : value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  }
  function readRows(){
    try{
      const rows = JSON.parse(localStorage.getItem(STORE_KEY) || '[]');
      return Array.isArray(rows) ? rows : [];
    }catch(e){ return []; }
  }
  function writeRows(rows){
    localStorage.setItem(STORE_KEY, JSON.stringify(Array.isArray(rows) ? rows : []));
  }
  function currentStudentSafe(){
    try{
      if(typeof getStudent === 'function') return getStudent() || {};
    }catch(e){}
    return {};
  }
  function addStyle(){
    if(document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      .integration-file-box{margin-top:16px;padding:16px;border:1px solid rgba(79,70,229,.18);border-radius:20px;background:linear-gradient(180deg,#fff,#f8fbff);box-shadow:0 14px 32px rgba(15,23,42,.06);display:grid;gap:10px}
      .integration-file-box h3{margin:0;color:#312e81}.integration-file-box p{margin:0;color:#475569;line-height:1.5}
      .integration-file-actions{display:flex;gap:10px;align-items:center;flex-wrap:wrap}.integration-file-browse{display:inline-flex;align-items:center;justify-content:center;border:1px solid rgba(79,70,229,.28);border-radius:999px;background:linear-gradient(135deg,#4f46e5,#7c3aed);color:#fff;font-weight:900;padding:10px 16px;cursor:pointer}
      .integration-file-browse input{display:none}.integration-file-status{font-weight:800;color:#334155}.integration-file-status.ok{color:#047857}.integration-file-status.err{color:#b91c1c}
    `;
    document.head.appendChild(style);
  }
  function uploadBox(unit){
    addStyle();
    const unitId = unit && unit.id ? unit.id : '';
    const unitTitle = unit && unit.title ? unit.title : '';
    return `<section class="integration-file-box" data-integration-upload-box data-unit-id="${h(unitId)}" data-unit-title="${h(unitTitle)}">
      <h3>Envoyer le fichier de la situation d’intégration</h3>
      <p>À la fin de l’activité, clique sur Parcourir puis choisis un document PDF, Word ou PowerPoint. Le fichier sera transmis au professeur.</p>
      <div class="integration-file-actions">
        <label class="integration-file-browse">Parcourir
          <input type="file" accept="${ACCEPT}" data-integration-file-input>
        </label>
        <span class="integration-file-status" data-integration-file-status>Aucun fichier choisi.</span>
      </div>
    </section>`;
  }
  function getCurrentUnitSafe(){
    try{ if(typeof currentUnit === 'function') return currentUnit(); }catch(e){}
    return null;
  }
  function isIntegrationVisible(){
    try{
      const st = (typeof state !== 'undefined') ? state : window.state;
      if(st && st.page === 'integration') return true;
    }catch(e){}
    return !!document.querySelector('.menu-btn.active[data-menu="integration"], [data-menu="integration"].active');
  }
  function removeUploadBoxes(){
    document.querySelectorAll('[data-integration-upload-box]').forEach(box => box.remove());
  }
  function ensureUploadBox(){
    const app = document.getElementById('app');
    if(!app) return;
    if(!isIntegrationVisible()){
      removeUploadBoxes();
      return;
    }
    if(app.querySelector('[data-integration-upload-box]')) return;
    const target = app.querySelector('[data-v168-integration], [data-v167-integration], [data-v166-integration], [data-v165-integration], .v168-integration, .v167-integration, .v166-integration, .v165-integration') || app.querySelector('.content-card') || app;
    target.insertAdjacentHTML('beforeend', uploadBox(getCurrentUnitSafe()));
  }

  const previousRenderIntegration = (typeof renderIntegration === 'function') ? renderIntegration : null;
  if(previousRenderIntegration){
    renderIntegration = function(unit){
      const html = previousRenderIntegration.apply(this, arguments);
      return String(html || '') + uploadBox(unit);
    };
  }

  async function sendFile(input){
    const file = input && input.files && input.files[0];
    const box = input && input.closest('[data-integration-upload-box]');
    const status = box && box.querySelector('[data-integration-file-status]');
    if(!file || !box) return;
    if(!EXT_RE.test(file.name || '')){
      if(status){ status.textContent = 'Format refusé. Choisis PDF, Word ou PowerPoint.'; status.className = 'integration-file-status err'; }
      input.value = '';
      return;
    }
    if(status){ status.textContent = 'Envoi du fichier en cours...'; status.className = 'integration-file-status'; }
    try{
      const response = await fetch('/api/media-file?kind=document', {
        method:'POST',
        headers:{
          'Content-Type': file.type || 'application/octet-stream',
          'X-File-Name': encodeURIComponent(file.name || 'document'),
          'X-Media-Kind': 'document'
        },
        body:file
      });
      if(!response.ok) throw new Error('upload failed');
      const data = await response.json();
      const student = currentStudentSafe();
      const record = {
        id: 'integration_' + Date.now() + '_' + Math.random().toString(16).slice(2),
        mediaId: data.id || '',
        url: data.url || (data.id ? '/api/media/' + encodeURIComponent(data.id) : ''),
        fileName: file.name || 'document',
        type: file.type || '',
        size: file.size || 0,
        unitId: box.getAttribute('data-unit-id') || '',
        unitTitle: box.getAttribute('data-unit-title') || '',
        nom: student.nom || '',
        prenom: student.prenom || '',
        createdAt: new Date().toISOString()
      };
      const rows = readRows();
      rows.push(record);
      writeRows(rows);
      if(status){ status.textContent = 'Fichier envoyé au professeur : ' + record.fileName; status.className = 'integration-file-status ok'; }
    }catch(e){
      if(status){ status.textContent = 'Envoi impossible. Ouvre l’application avec le serveur local puis réessaie.'; status.className = 'integration-file-status err'; }
    }
  }

  document.addEventListener('change', function(e){
    const input = e.target && e.target.closest ? e.target.closest('[data-integration-file-input]') : null;
    if(input) sendFile(input);
  }, true);
  try{
    new MutationObserver(function(){ setTimeout(ensureUploadBox, 30); }).observe(document.documentElement, {childList:true, subtree:true});
  }catch(e){}
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', function(){ setTimeout(ensureUploadBox, 100); });
  else setTimeout(ensureUploadBox, 100);
  document.addEventListener('change', function(e){
    if(e.target && e.target.matches && e.target.matches('[data-v242-unit-part], [data-v236-unit-part]')) setTimeout(ensureUploadBox, 80);
  }, true);
})();
