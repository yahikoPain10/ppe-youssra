/* =========================================================
   ÉPI v206 — Correctif technique réel médias + voix
   - Images et vidéos importées comme fichiers serveur, jamais base64.
   - L'unité garde seulement une référence courte : epi-media:image:id / epi-media:video:id.
   - Les médias sont réhydratés automatiquement dans l'espace prof et élève.
   - Le texte auditif est lu par la synthèse vocale du navigateur.
========================================================= */
(function(){
  'use strict';
  const MEDIA_PREFIX = 'epi-media:';
  const VERSION = 'v206-media-tts';
  window.EPI_V206_FIX_VERSION = VERSION;

  function $(sel, root){ return (root || document).querySelector(sel); }
  function $all(sel, root){ return Array.from((root || document).querySelectorAll(sel)); }
  function esc(value){
    return String(value == null ? '' : value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
  }
  function isMediaRef(value){ return String(value || '').trim().startsWith(MEDIA_PREFIX); }
  function mediaKind(value){ return String(value || '').split(':')[1] || ''; }
  function mediaId(value){ return String(value || '').split(':').slice(2).join(':'); }
  function mediaUrl(ref){ const id = mediaId(ref); return id ? ('/api/media/' + encodeURIComponent(id)) : ''; }
  function fileKind(file){
    const type = String(file && file.type || '').toLowerCase();
    const name = String(file && file.name || '').toLowerCase();
    if(type.startsWith('video/') || /\.(mp4|webm|ogv|ogg|mov|m4v)$/i.test(name)) return 'video';
    if(type.startsWith('audio/') || /\.(mp3|wav|ogg|m4a|aac)$/i.test(name)) return 'audio';
    return 'image';
  }
  function isVideoRefOrUrl(value){
    const v = String(value || '').trim();
    return mediaKind(v) === 'video' || /^data:video\//i.test(v) || /\.(mp4|webm|ogv|ogg|mov|m4v)(\?|#|$)/i.test(v);
  }
  function previewHtml(ref, title){
    const value = String(ref || '').trim();
    if(!value) return '<span>Aucun média choisi</span>';
    const safeTitle = esc(title || 'Média');
    const src = isMediaRef(value) ? mediaUrl(value) : value;
    if(mediaKind(value) === 'audio' || /^data:audio\//i.test(value) || /\.(mp3|wav|ogg|m4a|aac)(\?|#|$)/i.test(value)){
      return `<audio class="v207-audio-preview" controls src="${esc(src)}" title="${safeTitle}"></audio>`;
    }
    if(isVideoRefOrUrl(value)){
      return `<video class="v206-video-preview" controls preload="metadata" src="${esc(src)}" title="${safeTitle}"></video>`;
    }
    return `<img class="v206-image-preview" loading="lazy" src="${esc(src)}" alt="${safeTitle}">`;
  }
  function findMediaRow(input){
    return input.closest('[data-v190-visual-row], [data-v176-subtitle-draft], [data-v175-subtitle-editor], [data-v172-row], .v172-row, article, details, form') || input.parentElement;
  }
  function findTargetField(input, row){
    const targetName = input.getAttribute('data-v181-add-file') || (input.getAttribute('data-v172-file') === 'media' ? 'src' : '') || 'src';
    return (row && (row.querySelector(`[data-field="${CSS.escape(targetName)}"]`) || row.querySelector(`[data-add-field="${CSS.escape(targetName)}"]`) || row.querySelector('[data-field="src"]') || row.querySelector('[data-add-field="src"]')));
  }
  function findPreview(row){
    return row && (row.querySelector('.v192-image-preview') || row.querySelector('.v172-preview-box') || row.querySelector('.v205-media-preview') || row.querySelector('.v194-media-preview'));
  }
  function setBusy(row, busy, msg){
    if(!row) return;
    row.classList.toggle('v206-uploading', !!busy);
    let box = row.querySelector('[data-v206-upload-status]');
    if(!box){
      box = document.createElement('div');
      box.setAttribute('data-v206-upload-status','1');
      box.className = 'v206-upload-status';
      const anchor = findPreview(row) || row;
      anchor.insertAdjacentElement(anchor === row ? 'beforeend' : 'afterend', box);
    }
    box.textContent = msg || '';
    box.className = 'v206-upload-status' + (busy ? ' wait' : (msg ? ' ok' : ''));
  }
  async function uploadMediaFile(file, preferredKind){
    const kind = preferredKind || fileKind(file);
    const max = kind === 'video' ? 1024 * 1024 * 1024 : 120 * 1024 * 1024;
    if(file.size > max){
      throw new Error(kind === 'video' ? 'Vidéo trop lourde : limite technique 1 Go.' : 'Image trop lourde : limite 120 Mo.');
    }
    const response = await fetch('/api/media-file?kind=' + encodeURIComponent(kind), {
      method: 'POST',
      headers: {
        'Content-Type': file.type || 'application/octet-stream',
        'X-File-Name': encodeURIComponent(file.name || 'media'),
        'X-Media-Kind': kind
      },
      body: file
    });
    if(!response.ok){
      let detail = '';
      try{ detail = (await response.json()).error || ''; }catch(e){}
      throw new Error('Erreur serveur média HTTP ' + response.status + (detail ? ' : ' + detail : ''));
    }
    const data = await response.json();
    if(!data || !data.id) throw new Error('Référence média non reçue du serveur.');
    return `${MEDIA_PREFIX}${kind}:${data.id}`;
  }
  function looksLikeVisualInput(input){
    if(!input || input.type !== 'file') return false;
    const label = (input.closest('label') || input.parentElement || document.createElement('div')).textContent || '';
    const accept = input.getAttribute('accept') || '';
    const name = [input.getAttribute('data-v181-add-file'), input.getAttribute('data-v172-file'), accept, label].join(' ').toLowerCase();
    return name.includes('image') || name.includes('vid') || name.includes('audio') || name.includes('son') || name.includes('média') || name.includes('media') || name.includes('visual') || name.includes('src');
  }
  function patchFileInputs(root){
    $all('input[type="file"]', root || document).forEach(input => {
      if(looksLikeVisualInput(input)){
        input.setAttribute('accept', 'image/*,audio/*,video/mp4,video/webm,video/ogg,video/quicktime,.mp3,.wav,.m4a,.aac,.mp4,.webm,.ogv,.ogg,.mov,.m4v');
        input.dataset.v206MediaInput = '1';
        const wrap = input.closest('.v186-browse-wrap') || input.closest('label') || input.parentElement;
        if(wrap && !wrap.querySelector('[data-v206-video-note]')){
          const note = document.createElement('small');
          note.setAttribute('data-v206-video-note','1');
          note.className = 'v206-video-note';
          note.textContent = 'Image, audio ou vidéo accepté. Le fichier sera enregistré avec l’unité.';
          wrap.appendChild(note);
        }
      }
    });
  }
  function hydrateMediaRefs(root){
    const scope = root || document;
    $all('[data-epi-media-src]', scope).forEach(el => {
      const ref = el.getAttribute('data-epi-media-src') || '';
      if(!isMediaRef(ref)) return;
      const url = mediaUrl(ref);
      if(url && el.getAttribute('src') !== url){
        el.setAttribute('src', url);
        try{ if(typeof el.load === 'function') el.load(); }catch(e){}
      }
    });
    $all('img,video,audio', scope).forEach(el => {
      const src = el.getAttribute('src') || '';
      if(isMediaRef(src)){
        const url = mediaUrl(src);
        if(url){
          el.setAttribute('src', url);
          try{ if(typeof el.load === 'function') el.load(); }catch(e){}
        }
      }
    });
  }
  async function handleVisualFileChange(event){
    const input = event.target;
    if(!looksLikeVisualInput(input) || !input.files || !input.files[0]) return;
    const file = input.files[0];
    const kind = fileKind(file);
    event.preventDefault();
    event.stopPropagation();
    if(typeof event.stopImmediatePropagation === 'function') event.stopImmediatePropagation();
    const row = findMediaRow(input);
    const target = findTargetField(input, row);
    if(!target){ alert('Champ média introuvable. Réessaie depuis le bloc Style visuel.'); return; }
    try{
      setBusy(row, true, kind === 'video' ? 'Envoi de la vidéo vers le serveur...' : kind === 'audio' ? 'Envoi de l’audio vers le serveur...' : 'Envoi de l’image vers le serveur...');
      const ref = await uploadMediaFile(file, kind);
      target.value = ref;
      const preview = findPreview(row);
      if(preview) preview.innerHTML = previewHtml(ref, file.name || 'Média');
      const small = row && (row.querySelector('[data-v190-file-name]') || row.querySelector('small'));
      if(small) small.textContent = 'Fichier choisi : ' + (file.name || 'média');
      setBusy(row, false, kind === 'video' ? 'Vidéo enregistrée côté serveur.' : kind === 'audio' ? 'Audio enregistré côté serveur.' : 'Image enregistrée côté serveur.');
      hydrateMediaRefs(row || document);
    }catch(err){
      console.error(err);
      setBusy(row, false, 'Erreur import média.');
      alert((err && err.message) || 'Import impossible. Lance node server.js puis ouvre http://localhost:3000.');
    }
  }

  let currentUtterance = null;
  function detectLang(text, requested){
    if(requested === 'ar' || requested === 'fr') return requested;
    return /[\u0600-\u06FF]/.test(text || '') ? 'ar' : 'fr';
  }
  function getVoice(lang){
    if(!('speechSynthesis' in window)) return null;
    const voices = window.speechSynthesis.getVoices ? window.speechSynthesis.getVoices() : [];
    if(lang === 'ar') return voices.find(v => /^ar/i.test(v.lang)) || voices.find(v => /arab/i.test(v.name));
    return voices.find(v => /^fr/i.test(v.lang)) || voices.find(v => /french|français/i.test(v.name));
  }
  function speakText(text, lang){
    text = String(text || '').replace(/\s+/g, ' ').trim();
    if(!text){ alert('Aucun texte à lire. Ajoute d’abord un texte dans le style auditif.'); return; }
    if(!('speechSynthesis' in window)){ alert('La synthèse vocale n’est pas disponible dans ce navigateur. Utilise Chrome ou Edge.'); return; }
    try{ window.speechSynthesis.cancel(); }catch(e){}
    const selectedLang = detectLang(text, lang);
    const utterance = new SpeechSynthesisUtterance(text);
    const voice = getVoice(selectedLang);
    if(voice) utterance.voice = voice;
    utterance.lang = selectedLang === 'ar' ? (voice && voice.lang || 'ar-SA') : (voice && voice.lang || 'fr-FR');
    utterance.rate = selectedLang === 'ar' ? 0.86 : 0.92;
    currentUtterance = utterance;
    window.speechSynthesis.speak(utterance);
    if(selectedLang === 'ar' && !voice){
      const warn = document.getElementById('voiceWarning');
      if(warn){ warn.classList.add('show'); warn.textContent = 'La voix arabe n’est pas installée dans ce navigateur. La lecture peut ne pas fonctionner.'; }
    }
  }
  function stopSpeech(){
    try{ if('speechSynthesis' in window) window.speechSynthesis.cancel(); }catch(e){}
    currentUtterance = null;
  }
  function decodeMaybe(value){
    value = String(value || '');
    try{ return decodeURIComponent(value); }catch(e){ return value; }
  }
  function handleSpeakClick(event){
    const stopBtn = event.target.closest && event.target.closest('[data-action="stop-speech"], .stop-audio-btn');
    if(stopBtn){ event.preventDefault(); event.stopPropagation(); if(event.stopImmediatePropagation) event.stopImmediatePropagation(); stopSpeech(); return; }
    const btn = event.target.closest && event.target.closest('[data-speak]');
    if(!btn) return;
    const mode = btn.getAttribute('data-speak') || '';
    let text = btn.getAttribute('data-text') || '';
    if(!text && mode && mode !== 'fr' && mode !== 'ar') text = decodeMaybe(mode);
    if(!text) text = btn.closest('.v172-audio-student-card, .audio-card, article')?.innerText || btn.innerText || '';
    event.preventDefault();
    event.stopPropagation();
    if(event.stopImmediatePropagation) event.stopImmediatePropagation();
    speakText(text, mode);
  }
  function addVersionBadge(){ return; }
  function injectCss(){
    if(document.getElementById('v206-style')) return;
    const style = document.createElement('style');
    style.id = 'v206-style';
    style.textContent = `
      .v206-image-preview{max-width:100%;max-height:260px;object-fit:contain;border-radius:14px;box-shadow:0 10px 24px rgba(15,23,42,.10)}
      .v206-video-preview,.v205-visual-video{width:100%;max-width:100%;max-height:420px;border-radius:16px;background:#0f172a;box-shadow:0 12px 30px rgba(15,23,42,.16)}
      .v206-upload-status{margin-top:8px;padding:8px 10px;border-radius:12px;border:1px solid rgba(16,185,129,.22);background:#ecfdf5;color:#047857;font-weight:800;font-size:.88rem;line-height:1.35}
      .v206-upload-status.wait{border-color:rgba(37,99,235,.25);background:#eff6ff;color:#1d4ed8}
      .v206-video-note{display:block;margin-top:6px;color:#1d4ed8;font-weight:800;line-height:1.35}
      .v206-uploading{outline:2px dashed rgba(37,99,235,.25);outline-offset:4px;border-radius:18px}
      #v206-badge{display:none!important}
    `;
    document.head.appendChild(style);
  }
  function tick(root){
    patchFileInputs(root || document);
    hydrateMediaRefs(root || document);
  }

  window.addEventListener('change', handleVisualFileChange, true);
  window.addEventListener('click', handleSpeakClick, true);
  if('speechSynthesis' in window){
    try{ window.speechSynthesis.onvoiceschanged = function(){ window.speechSynthesis.getVoices(); }; }catch(e){}
  }
  function start(){
    injectCss();
    addVersionBadge();
    tick(document);
    try{
      const mo = new MutationObserver(muts => {
        let root = document;
        for(const m of muts){ if(m.addedNodes && m.addedNodes[0] && m.addedNodes[0].querySelectorAll){ root = m.addedNodes[0]; break; } }
        tick(root);
      });
      mo.observe(document.body, {childList:true, subtree:true});
    }catch(e){}
    setInterval(function(){ tick(document); }, 1500);
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
