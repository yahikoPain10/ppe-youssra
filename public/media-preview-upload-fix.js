/* =========================================================
   ÉPI v208 — Correctif final affichage élève + médias + audio
   Problèmes corrigés :
   1) Les panneaux élève personnalisés étaient définis mais non activés.
   2) Les médias serveur epi-media:* n'étaient pas toujours rendus en src /api/media/.
   3) Le style auditif lisait parfois seulement le titre/définition au lieu du texte demandé.
   4) La situation d'intégration ne doit pas afficher les réponses / productions attendues.
========================================================= */
(function(){
  'use strict';
  const VERSION = 'v210-style-organise-mindmap-action-remember';
  const CONTENT_PREFIX = 'epi_v170_unit_content_';
  const MEDIA_PREFIX = 'epi-media:';

  function q(sel, root){ return (root || document).querySelector(sel); }
  function qa(sel, root){ return Array.from((root || document).querySelectorAll(sel)); }
  function h(value){
    return String(value == null ? '' : value).replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[ch]));
  }
  function cleanTitle(value){ return String(value || '').replace(/^\s*Unité\s*\d+\s*:\s*/i,'').trim(); }
  function readJson(key, fallback){
    try{ const raw = localStorage.getItem(key); return raw ? JSON.parse(raw) : fallback; }catch(e){ return fallback; }
  }
  function lines(value){ return String(value || '').split('\n').map(x => x.trim()).filter(Boolean); }
  function units(){ return (typeof UNITS !== 'undefined' && Array.isArray(UNITS)) ? UNITS : (Array.isArray(window.UNITS) ? window.UNITS : []); }
  function contentKey(unit){ return CONTENT_PREFIX + (unit && unit.id ? unit.id : 'unit'); }
  function teacherContent(unit){
    if(!unit) return null;
    const saved = readJson(contentKey(unit), null) || unit._v172TeacherContent || unit._v170TeacherContent || null;
    if(!saved || typeof saved !== 'object') return null;
    return saved;
  }
  function currentUnitSafe(){
    try{ if(typeof currentUnit === 'function') return currentUnit(); }catch(e){}
    try{ if(typeof state !== 'undefined' && state && state.unitId) return units().find(u => u && u.id === state.unitId) || null; }catch(e){}
    return null;
  }
  function lessonIndex(unit, lesson){
    const list = Array.isArray(unit && unit.lessons) ? unit.lessons : [];
    const title = cleanTitle(lesson && lesson.title).toLowerCase();
    let idx = list.findIndex(l => l === lesson);
    if(idx >= 0) return idx;
    if(title) idx = list.findIndex(l => cleanTitle(l && l.title).toLowerCase() === title);
    if(idx >= 0) return idx;
    try{ if(typeof state !== 'undefined' && state && Number.isFinite(Number(state.lessonIndex))) return Number(state.lessonIndex); }catch(e){}
    return 0;
  }
  function findUnitForLesson(lesson){
    const current = currentUnitSafe();
    if(current){
      const list = Array.isArray(current.lessons) ? current.lessons : [];
      const t = cleanTitle(lesson && lesson.title).toLowerCase();
      if(!lesson || list.some(l => l === lesson || cleanTitle(l && l.title).toLowerCase() === t)) return current;
    }
    const t = cleanTitle(lesson && lesson.title).toLowerCase();
    return units().find(u => Array.isArray(u && u.lessons) && u.lessons.some(l => l === lesson || cleanTitle(l && l.title).toLowerCase() === t)) || current || null;
  }

  function mediaParts(ref){ return String(ref || '').trim().split(':'); }
  function isMediaRef(value){ return String(value || '').trim().startsWith(MEDIA_PREFIX); }
  function mediaKind(value){
    const v = String(value || '').trim();
    if(isMediaRef(v)) return mediaParts(v)[1] || '';
    if(/^data:video\//i.test(v) || /\.(mp4|webm|ogv|ogg|mov|m4v)(\?|#|$)/i.test(v)) return 'video';
    if(/^data:audio\//i.test(v) || /\.(mp3|wav|ogg|m4a|aac)(\?|#|$)/i.test(v)) return 'audio';
    return v ? 'image' : '';
  }
  function mediaId(value){ return mediaParts(value).slice(2).join(':'); }
  function mediaUrl(value){
    const v = String(value || '').trim();
    if(!v) return '';
    if(isMediaRef(v)) return '/api/media/' + encodeURIComponent(mediaId(v));
    return v;
  }
  function mediaElement(src, title){
    const url = mediaUrl(src);
    const kind = mediaKind(src);
    const label = h(title || 'Média');
    if(!url) return '<div class="v208-empty-media">Aucun média importé.</div>';
    if(kind === 'video') return `<video class="v208-media-video" controls preload="metadata" src="${h(url)}" title="${label}"></video>`;
    if(kind === 'audio') return `<audio class="v208-media-audio" controls preload="metadata" src="${h(url)}" title="${label}"></audio>`;
    return `<img class="v208-media-image" loading="lazy" src="${h(url)}" alt="${label}">`;
  }

  function normalizeVisual(item, index){
    const x = item || {};
    return {
      title: String(x.title || x.visualTitle || `Média ${index + 1}`).trim(),
      src: String(x.src || x.visualSrc || '').trim(),
      description: String(x.description || x.visualDescription || x.definition || '').trim(),
      example: String(x.example || x.visualExample || '').trim(),
      action: String(x.action || x.visualAction || '').trim(),
      remember: String(x.remember || x.visualRemember || '').trim()
    };
  }
  function visualListFromSubtitle(item){
    if(!item) return [];
    const rows = Array.isArray(item.visualItems) ? item.visualItems : [];
    if(rows.length) return rows.map(normalizeVisual).filter(x => x.title || x.src || x.description || x.example);
    const one = normalizeVisual(item, 0);
    return (one.title || one.src || one.description || one.example || one.action || one.remember) ? [one] : [];
  }
  function normalizeAudio(item, index, fallbackDefinition){
    const x = item || {};
    const title = String(x.title || x.audioTitle || `Audio ${index + 1}`).trim();
    const text = String(x.text || x.audioText || fallbackDefinition || '').trim();
    const ar = String(x.ar || x.audioAr || '').trim();
    const src = String(x.src || x.audioSrc || '').trim();
    return {title, text, ar, src};
  }
  function audioListFromSubtitle(item){
    if(!item) return [];
    const fallback = String(item.definition || '').trim();
    const rows = Array.isArray(item.audioItems) ? item.audioItems : [];
    if(rows.length){
      return rows.map((x,i) => normalizeAudio(x, i, fallback)).filter(x => x.title || x.text || x.ar || x.src);
    }
    const one = normalizeAudio(item, 0, fallback);
    return (one.title || one.text || one.ar || one.src) ? [one] : [];
  }
  function subtitleForLesson(unit, lesson, content){
    const subtitles = Array.isArray(content && content.subtitleItems) ? content.subtitleItems : [];
    const idx = lessonIndex(unit, lesson);
    const lessonTitle = cleanTitle(lesson && lesson.title).toLowerCase();
    const byIndex = subtitles[idx];
    if(byIndex) return byIndex;
    if(lessonTitle){
      const byTitle = subtitles.find(s => cleanTitle(s && s.title).toLowerCase() === lessonTitle);
      if(byTitle) return byTitle;
    }
    return null;
  }
  function visualItems(unit, lesson, content){
    const sub = subtitleForLesson(unit, lesson, content);
    const local = visualListFromSubtitle(sub);
    if(local.length) return dedupeMediaList(local);
    if(Array.isArray(content && content.visualItems) && content.visualItems.length) return content.visualItems.map(normalizeVisual);
    const src = lesson && lesson.visual && lesson.visual.image;
    return src ? [{title: lesson.title || 'Image', src, description: lesson.fr || lesson.objective || '', example: lesson.visual.example || ''}] : [];
  }
  function audioItems(unit, lesson, content){
    const sub = subtitleForLesson(unit, lesson, content);
    const local = audioListFromSubtitle(sub);
    if(local.length) return dedupeMediaList(local);
    if(Array.isArray(content && content.audioItems) && content.audioItems.length) return dedupeMediaList(content.audioItems.map((x,i) => normalizeAudio(x, i, lesson && (lesson.fr || lesson.objective))).filter(x => x.title || x.text || x.ar || x.src));
    return [{title: lesson && lesson.title || 'Audio', text: lesson && (lesson.fr || lesson.objective || '') || '', ar: lesson && lesson.ar || '', src:''}].filter(x => x.title || x.text || x.ar);
  }
  function dedupeMediaList(list){
    const seen = new Set();
    return (Array.isArray(list) ? list : []).filter(item => {
      const key = [String(item && item.src || '').trim(), String(item && item.title || '').trim(), String(item && item.text || '').trim()].join('|').toLowerCase();
      if(seen.has(key)) return false;
      seen.add(key);
      return true;
    });
  }
  function mindmapBranches(unit, content){
    if(Array.isArray(content && content.mindmapBranches) && content.mindmapBranches.length) return content.mindmapBranches;
    if(Array.isArray(content && content.subtitleItems) && content.subtitleItems.length){
      return content.subtitleItems.map((s,i) => ({
        title: s.title || `Sous-titre ${i+1}`,
        definition: s.definition || '',
        example: s.example || '',
        children: Array.isArray(s.children) ? s.children : lines(s.children || '')
      }));
    }
    return [];
  }
  function renderMindmap(unit, content){
    const branches = mindmapBranches(unit, content);
    if(!branches.length) return '';
    const root = cleanTitle((content && content.title) || (unit && unit.title) || 'Unité');
    const palette = ['pink','green','cyan','orange','purple','blue','red','teal','yellow','indigo'];
    function normChildren(value){
      if(Array.isArray(value)) return value.map(x => typeof x === 'object' ? x : {title:String(x||''), def:'', example:''}).filter(x => String(x.title || '').trim());
      return lines(value || '').map(x => ({title:x, def:'', example:''}));
    }
    function card(branch, mapIndex){
      const kids = normChildren(branch.children);
      const items = kids.length ? kids.map((k,i) => ({
        title: k.title || `Sous-fil ${i+1}`,
        def: k.def || k.definition || branch.definition || 'Définition à compléter.',
        example: k.example || branch.example || 'Exemple à compléter.'
      })) : [{title: branch.title || root, def: branch.definition || 'Définition à compléter.', example: branch.example || 'Exemple à compléter.'}];
      const first = items[0] || {};
      const width = 1000, height = 700, cx = width/2, cy = height/2, nodeW = 205, nodeH = 92;
      const total = Math.min(items.length, 10);
      const positioned = items.slice(0,10).map((it,index) => {
        const angle = (-Math.PI/2) + (Math.PI*2*index/Math.max(total,1));
        const rx = total > 6 ? 345 : 315;
        const ry = total > 6 ? 255 : 225;
        const x = cx + rx*Math.cos(angle) - nodeW/2;
        const y = cy + ry*Math.sin(angle) - nodeH/2;
        return {it,index,x,y,anchorX:x+nodeW/2,anchorY:y+nodeH/2,color:palette[index%palette.length]};
      });
      const markers = positioned.map(pos => `<marker id="v211Arrow${mapIndex}_${pos.index}" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto" markerUnits="strokeWidth"><path d="M0,0 L0,6 L9,3 z" class="v189-arrow-fill v189-${pos.color}" /></marker>`).join('');
      const connectors = positioned.map(pos => {
        const midX = cx + (pos.anchorX-cx)*0.55;
        const midY = cy + (pos.anchorY-cy)*0.55;
        return `<path class="v189-link v189-${pos.color}" d="M ${cx} ${cy} Q ${midX} ${midY} ${pos.anchorX} ${pos.anchorY}" marker-end="url(#v211Arrow${mapIndex}_${pos.index})" />`;
      }).join('');
      const nodes = positioned.map(pos => {
        const defShort = String(pos.it.def || '').length > 92 ? String(pos.it.def || '').slice(0,92) + '…' : (pos.it.def || 'Définition + exemple');
        const leftPct = ((pos.anchorX/width)*100).toFixed(3);
        const topPct = ((pos.anchorY/height)*100).toFixed(3);
        return `<button type="button" class="v149-subchild-node v189-map-node v189-${pos.color} ${pos.index===0?'active':''}" style="left:calc(${leftPct}% - ${nodeW/2}px);top:calc(${topPct}% - ${nodeH/2}px);width:${nodeW}px;min-height:${nodeH}px" data-node-title="${h(pos.it.title || 'Notion')}" data-node-example="${h(pos.it.example || '')}" data-node-definition="${h(pos.it.def || '')}" data-node-branch="${h(branch.title || root)}"><strong>${h(pos.it.title || 'Notion')}</strong><small>${h(defShort)}</small></button>`;
      }).join('');
      return `<article class="v149-map-card v153-map-card v154-map-card v156-map-card v157-map-card v189-map-card v211-map-card"><aside class="v149-example-box v153-example-box v154-example-box v156-example-box v157-example-box v189-example-top"><div class="v157-selected-branch">Sous-titre : ${h(branch.title || root)}</div><h4>${h(first.title || branch.title || root)}</h4><section class="v156-info-pane"><h5>Définition</h5><p class="v156-def-content">${h(first.def || 'Clique sur une notion pour lire sa définition.')}</p><p class="v156-ex-content"><strong>Exemple :</strong> ${h(first.example || 'Aucun exemple disponible pour le moment.')}</p></section></aside><div class="v189-radial-canvas" style="--v189-w:${width}px;--v189-h:${height}px" aria-label="Carte mentale sous forme du modèle demandé"><svg class="v189-map-svg" viewBox="0 0 ${width} ${height}" aria-hidden="true"><defs>${markers}</defs>${connectors}</svg><div class="v189-center-node">${h(branch.title || root)}<span>Nœud central</span></div>${nodes}</div></article>`;
    }
    return `<section class="panel v148-mindmap-panel v153-mindmap-panel v156-mindmap-panel v211-custom-mindmap"><div class="v148-mindmap-head"><span class="mini-pill">Carte mentale</span><h3>${h(root)}</h3><p>Carte mentale organisée avec un nœud central, des branches colorées, des flèches et un exemple au clic.</p></div><div class="v149-map-stack">${branches.map(card).join('')}</div></section>`;
  }

  function renderVisual(unit, lesson, content){
    const items = visualItems(unit, lesson, content);
    const sub = subtitleForLesson(unit, lesson, content) || {};
    const lessonLabel = cleanTitle(lesson && lesson.title || unit && unit.title || 'Sous-titre');
    const introDefinition = String(sub.definition || lesson && (lesson.fr || lesson.objective) || '').trim();
    const introExample = String(sub.example || '').trim();
    const cards = items.map((item,i) => {
      const kind = mediaKind(item.src) === 'video' ? 'Vidéo' : 'Image';
      const title = item.title || `${kind} ${i+1}`;
      const definition = item.description || introDefinition || 'Illustration liée à la notion étudiée.';
      const example = item.example || introExample || 'Exemple à compléter dans l’espace enseignant.';
      const action = item.action || '';
      const remember = item.remember || '';
      return `<figure class="media-card image-description-card tableur-image-card clickable-visual-card v210-visual-card" data-clickable-visual tabindex="0" role="button" aria-expanded="false"><div class="visual-definition-top"><span>Définition de l’image</span><strong>${h(title)}</strong><p>${h(definition)}</p></div><div class="visual-click-zone v210-visual-click-zone">${item.src ? mediaElement(item.src, title) : '<div class="v208-empty-media">Aucun fichier image/vidéo importé pour ce sous-titre.</div>'}<span class="visual-click-hint">Lire l’exemple</span></div><div class="visual-example-box" aria-hidden="true"><h5>Exemple à lire</h5><p><strong>Exemple :</strong> ${h(example)}</p>${action ? `<p><strong>Action :</strong> ${h(action)}</p>` : ''}${remember ? `<p><strong>À retenir :</strong> ${h(remember)}</p>` : ''}</div></figure>`;
    }).join('');
    const summary = `<article class="teacher-sheet"><div class="sheet-title"><span class="mini-pill">Fiche explicative</span><h3>${h(lessonLabel)}</h3></div><p>${h(introDefinition || 'Définition à compléter dans l’espace enseignant.')}</p>${introExample ? `<div class="visual-note"><strong>Exemple :</strong> ${h(introExample)}</div>` : ''}</article>`;
    return `<section class="panel visual-panel v208-student-panel"><div class="visual-layout"><div class="style-header"><div><span class="mini-pill">Style visuel</span><h3>Voir, lire et comprendre le cours</h3></div><p class="subtle">Cette partie contient une fiche explicative, des images ou vidéos, puis une carte mentale cliquable.</p></div>${summary}<div class="visual-gallery ${items.length>1?'single-column':''}">${cards || '<p class="subtle">Aucun média visuel personnalisé.</p>'}</div>${renderMindmap(unit, content)}</div></section>`;
  }

  function uniqueSpeakText(parts){
    const seen = new Set();
    return parts.map(x => String(x || '').trim()).filter(Boolean).filter(x => {
      const key = x.toLowerCase();
      if(seen.has(key)) return false;
      seen.add(key); return true;
    }).join('. ');
  }
  function renderAudio(unit, lesson, content){
    const sub = subtitleForLesson(unit, lesson, content) || {};
    const def = String(sub.definition || lesson && (lesson.fr || lesson.objective) || '').trim();
    const items = audioItems(unit, lesson, content);
    const cards = items.map((item,i) => {
      const textToRead = uniqueSpeakText([item.title, def, item.text]);
      const arToRead = uniqueSpeakText([item.ar || item.text || def || item.title]);
      return `<article class="v208-audio-card">
        <span class="mini-pill">Audio ${i+1}</span><h4>${h(item.title || lesson.title || 'Audio')}</h4>
        ${def ? `<p class="v208-definition"><strong>Définition :</strong> ${h(def)}</p>` : ''}
        ${item.text ? `<p class="v208-audio-text"><strong>Texte à lire :</strong> ${h(item.text)}</p>` : ''}
        ${item.src ? `<div class="v208-media-box v208-audio-media">${mediaElement(item.src, item.title || 'Média auditif')}</div>` : ''}
        <div class="audio-row v208-audio-actions">
          <button class="btn small" type="button" data-v208-speak="1" data-lang="fr" data-text="${h(textToRead)}">▶ Lire titre + définition + texte</button>
          <button class="btn secondary small" type="button" data-v208-speak="1" data-lang="fr" data-text="${h(item.text || def || item.title || '')}">▶ Lire seulement le texte demandé</button>
          <button class="btn green small" type="button" data-v208-speak="1" data-lang="ar" data-text="${h(arToRead)}">▶ AR</button>
          <button class="btn ghost small" type="button" data-v208-stop="1">■ Arrêter</button>
        </div>
      </article>`;
    }).join('');
    const all = uniqueSpeakText(items.flatMap(item => [item.title, def, item.text]));
    return `<section class="panel audio-card v208-student-panel"><div class="style-header clean-style-header"><div><span class="mini-pill">Style auditif</span><h3>${h(lesson && lesson.title || unit.title)}</h3></div><p class="subtle">Lecture vocale du texte saisi par le professeur. Le fichier audio/vidéo importé s’affiche une seule fois.</p></div><div class="audio-row master-audio-row"><button class="btn" type="button" data-v208-speak="1" data-lang="fr" data-text="${h(all)}">▶ Tout lire FR</button><button class="btn ghost small" type="button" data-v208-stop="1">■ Arrêter</button></div><div class="v208-audio-grid">${cards || '<p class="subtle">Aucun contenu auditif personnalisé.</p>'}</div></section>`;
  }

  function shouldUseCustom(unit, content){
    return !!(unit && content && (Array.isArray(content.subtitleItems) || Array.isArray(content.visualItems) || Array.isArray(content.audioItems) || Array.isArray(content.mindmapBranches)));
  }
  function patchStudentPanels(){
    if(window.__EPI_V208_STUDENT_PATCHED__) return;
    window.__EPI_V208_STUDENT_PATCHED__ = true;
    if(typeof visualPanel === 'function'){
      const oldVisual = visualPanel;
      visualPanel = function(lesson){
        const unit = findUnitForLesson(lesson);
        const content = teacherContent(unit);
        if(shouldUseCustom(unit, content)) return renderVisual(unit, lesson, content);
        return oldVisual.apply(this, arguments);
      };
    }
    if(typeof audioPanel === 'function'){
      const oldAudio = audioPanel;
      audioPanel = function(lesson){
        const unit = findUnitForLesson(lesson);
        const content = teacherContent(unit);
        if(shouldUseCustom(unit, content)) return renderAudio(unit, lesson, content);
        return oldAudio.apply(this, arguments);
      };
    }
  }

  function integrationTasks(unit, content){
    const tasks = [];
    if(Array.isArray(content && content.integrationTasks)){
      content.integrationTasks.forEach(t => { const task = String(t && (t.task || t.question) || '').trim(); if(task) tasks.push(task); });
    }
    if(!tasks.length && Array.isArray(content && content.questions)){
      content.questions.forEach(t => { const task = String(t && (t.task || t.question || (Array.isArray(t) ? t[0] : '')) || '').trim(); if(task) tasks.push(task); });
    }
    if(!tasks.length && unit && unit.integration && Array.isArray(unit.integration.tasks)) tasks.push(...unit.integration.tasks.map(String).filter(Boolean));
    if(!tasks.length && Array.isArray(unit && unit.lessons)){
      unit.lessons.forEach((l,i) => tasks.push(`Réaliser une tâche pratique liée à « ${cleanTitle(l && l.title) || 'notion ' + (i+1)} ».`));
    }
    return tasks.length ? tasks : ['Réaliser une tâche pratique liée à cette unité.'];
  }
  function renderIntegrationNoAnswers(unit){
    const content = teacherContent(unit) || {};
    const title = cleanTitle((content && content.title) || (unit && unit.title) || 'Unité');
    const scenario = String((content && (content.scenario || content.integrationScenario)) || (unit && unit.integration && unit.integration.scenario) || (unit && unit.intro) || '').trim() || `Situation réelle liée à l’unité « ${title} ».`;
    const knowledge = Array.isArray(content.subtitleItems) && content.subtitleItems.length ? content.subtitleItems.map(s => s.title).filter(Boolean) : (Array.isArray(unit && unit.lessons) ? unit.lessons.map(l => cleanTitle(l && l.title)).filter(Boolean) : []);
    const taskHtml = integrationTasks(unit, content).map((t,i) => `<article class="v208-integration-task"><span>Question pratique ${i+1}</span><p>${h(t)}</p></article>`).join('');
    return `<div class="section-head v208-integration-head"><div><h2>Situation d’intégration — ${h(title)}</h2><p>Situation avec questions pratiques, sans zone de réponse et sans correction affichée à l’élève.</p></div><span class="pill">Sans réponses</span></div><section class="v208-integration"><article class="panel v208-scenario"><h3>1) Situation</h3><p>${h(scenario)}</p></article>${knowledge.length ? `<article class="panel v208-knowledge"><h3>2) Notions à mobiliser</h3><ul>${knowledge.map(k => `<li>${h(k)}</li>`).join('')}</ul></article>` : ''}<div class="v208-task-zone"><h3>3) Questions / tâches à réaliser</h3>${taskHtml}</div></section>`;
  }
  function patchIntegration(){
    if(window.__EPI_V208_INTEGRATION_PATCHED__) return;
    window.__EPI_V208_INTEGRATION_PATCHED__ = true;
    if(typeof renderIntegration === 'function'){
      renderIntegration = function(unit){ return renderIntegrationNoAnswers(unit); };
    }
  }

  function speak(text, lang){
    text = String(text || '').replace(/\s+/g, ' ').trim();
    if(!text){ alert('Aucun texte à lire. Ajoute un texte ou une définition dans l’espace professeur.'); return; }
    if(!('speechSynthesis' in window)){ alert('Synthèse vocale indisponible. Utilise Chrome ou Edge.'); return; }
    try{ window.speechSynthesis.cancel(); }catch(e){}
    const u = new SpeechSynthesisUtterance(text);
    const voices = window.speechSynthesis.getVoices ? window.speechSynthesis.getVoices() : [];
    const isAr = lang === 'ar' || /[\u0600-\u06FF]/.test(text);
    const voice = isAr ? voices.find(v => /^ar/i.test(v.lang)) : voices.find(v => /^fr/i.test(v.lang));
    if(voice) u.voice = voice;
    u.lang = isAr ? (voice && voice.lang || 'ar-SA') : (voice && voice.lang || 'fr-FR');
    u.rate = isAr ? 0.86 : 0.92;
    window.speechSynthesis.speak(u);
  }
  function stopSpeak(){ try{ if('speechSynthesis' in window) window.speechSynthesis.cancel(); }catch(e){} }
  function patchMindmapClicks(){
    if(window.__EPI_V210_MAP_CLICK__) return;
    window.__EPI_V210_MAP_CLICK__ = true;
    window.addEventListener('click', function(e){
      const node = e.target.closest && e.target.closest('[data-v210-map-node]');
      if(!node) return;
      e.preventDefault();
      const box = document.getElementById('v210MapDetail');
      if(!box) return;
      qa('[data-v210-map-node]').forEach(n => n.classList.remove('active'));
      node.classList.add('active');
      const title = node.getAttribute('data-title') || '';
      const definition = node.getAttribute('data-definition') || '';
      const example = node.getAttribute('data-example') || '';
      const children = node.getAttribute('data-children') || '';
      box.innerHTML = `<h4>${h(title)}</h4><p><strong>Définition :</strong> ${h(definition)}</p>${example ? `<p><strong>Exemple :</strong> ${h(example)}</p>` : ''}${children ? `<p><strong>Sous-fils :</strong> ${h(children)}</p>` : ''}`;
    }, true);
  }

  function patchSpeakButtons(){
    if(window.__EPI_V208_SPEAK_CLICK__) return;
    window.__EPI_V208_SPEAK_CLICK__ = true;
    window.addEventListener('click', function(e){
      const stop = e.target.closest && e.target.closest('[data-v208-stop]');
      if(stop){ e.preventDefault(); e.stopPropagation(); if(e.stopImmediatePropagation) e.stopImmediatePropagation(); stopSpeak(); return; }
      const btn = e.target.closest && e.target.closest('[data-v208-speak]');
      if(!btn) return;
      e.preventDefault(); e.stopPropagation(); if(e.stopImmediatePropagation) e.stopImmediatePropagation();
      speak(btn.getAttribute('data-text') || '', btn.getAttribute('data-lang') || 'fr');
    }, true);
    if('speechSynthesis' in window){ try{ window.speechSynthesis.getVoices(); window.speechSynthesis.onvoiceschanged = function(){ window.speechSynthesis.getVoices(); }; }catch(e){} }
  }

  async function uploadFile(file, kind){
    const response = await fetch('/api/media-file?kind=' + encodeURIComponent(kind), {
      method:'POST',
      headers:{'Content-Type': file.type || 'application/octet-stream', 'X-File-Name': encodeURIComponent(file.name || 'media'), 'X-Media-Kind': kind},
      body:file
    });
    if(!response.ok) throw new Error('HTTP ' + response.status);
    const data = await response.json();
    if(!data || !data.id) throw new Error('Référence média manquante.');
    return `${MEDIA_PREFIX}${kind}:${data.id}`;
  }
  function fileKind(file){
    const type = String(file && file.type || '').toLowerCase();
    const name = String(file && file.name || '').toLowerCase();
    if(type.startsWith('video/') || /\.(mp4|webm|ogv|ogg|mov|m4v)$/i.test(name)) return 'video';
    if(type.startsWith('audio/') || /\.(mp3|wav|ogg|m4a|aac)$/i.test(name)) return 'audio';
    return 'image';
  }
  function patchTeacherMediaInputs(root){
    const scope = root || document;
    qa('[data-v190-audio-row]', scope).forEach(row => {
      const summary = row.closest('details') && row.closest('details').querySelector('summary');
      if(summary) summary.textContent = 'Style auditif — texte + audio + vidéo';
      let input = q('input[type="file"]', row);
      if(!input){
        row.insertAdjacentHTML('beforeend', '<div class="v208-teacher-upload"><strong>Importer audio ou vidéo</strong><label class="v186-browse-btn">Parcourir audio/vidéo<input type="file" accept="audio/*,video/*,.mp3,.wav,.m4a,.ogg,.mp4,.webm,.mov,.m4v,.ogv" data-v181-add-file="src"></label><small>Le fichier sera enregistré avec l’unité.</small></div>');
        input = q('input[type="file"]', row);
      }
      if(input) input.setAttribute('accept','audio/*,video/*,.mp3,.wav,.m4a,.aac,.ogg,.mp4,.webm,.mov,.m4v,.ogv');
    });
    qa('[data-v190-visual-row] input[type="file"]', scope).forEach(input => input.setAttribute('accept','image/*,video/mp4,video/webm,video/ogg,video/quicktime,.mp4,.webm,.mov,.jpg,.jpeg,.png,.webp,.gif'));
  }
  function patchTeacherUploadHandler(){
    if(window.__EPI_V208_UPLOAD_HANDLER__) return;
    window.__EPI_V208_UPLOAD_HANDLER__ = true;
    window.addEventListener('change', async function(e){
      const input = e.target;
      if(!input || input.type !== 'file' || !input.files || !input.files[0]) return;
      const row = input.closest('[data-v190-visual-row], [data-v190-audio-row]');
      if(!row) return;
      const field = q('[data-field="src"], [data-add-field="src"]', row);
      if(!field) return;
      const file = input.files[0];
      const kind = fileKind(file);
      e.preventDefault(); e.stopPropagation(); if(e.stopImmediatePropagation) e.stopImmediatePropagation();
      let status = q('[data-v208-upload-status]', row);
      if(!status){ status = document.createElement('div'); status.setAttribute('data-v208-upload-status','1'); status.className = 'v208-upload-status'; row.appendChild(status); }
      try{
        status.textContent = 'Envoi du fichier vers le serveur...';
        const ref = await uploadFile(file, kind);
        field.value = ref;
        const preview = q('.v192-image-preview, .v194-media-preview, .v207-audio-media-preview, .v172-preview-box', row);
        if(preview) preview.innerHTML = mediaElement(ref, file.name || 'Média');
        const small = q('[data-v190-file-name]', row);
        if(small) small.textContent = 'Fichier choisi : ' + (file.name || 'média');
        status.textContent = (kind === 'video' ? 'Vidéo' : kind === 'audio' ? 'Audio' : 'Image') + ' enregistré côté serveur.';
      }catch(err){
        console.error(err);
        status.textContent = 'Erreur : média non enregistré. Vérifie que tu es sur http://localhost:3000.';
        alert('Import média impossible : lance node server.js puis ouvre http://localhost:3000.');
      }
    }, true);
  }

  function injectCss(){
    if(document.getElementById('v208-style')) return;
    const style = document.createElement('style');
    style.id = 'v208-style';
    style.textContent = `
      .v208-student-panel{display:grid;gap:18px}.v208-visual-grid,.v208-audio-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:16px}.v208-visual-card,.v208-audio-card,.v208-integration-task{background:#fff;border:1px solid rgba(15,23,42,.10);border-radius:22px;padding:16px;box-shadow:0 14px 34px rgba(15,23,42,.08);display:grid;gap:12px}.v208-card-head span,.v208-integration-task span{font-weight:1000;color:#2563eb;background:#dbeafe;border-radius:999px;padding:5px 9px;width:max-content}.v208-card-head h4,.v208-audio-card h4{margin:.2rem 0;color:#0f172a}.v208-definition,.v208-audio-text{line-height:1.7;color:#334155;background:#f8fafc;border:1px solid #e2e8f0;border-radius:14px;padding:12px}.v208-example{background:#ecfdf5;border:1px solid #bbf7d0;border-radius:14px;padding:12px;color:#065f46;line-height:1.6}.v208-media-box{border:1px dashed rgba(37,99,235,.28);background:linear-gradient(180deg,#f8fbff,#fff);border-radius:18px;padding:10px;display:grid;place-items:center;min-height:120px}.v208-media-image{max-width:100%;max-height:420px;object-fit:contain;border-radius:14px;box-shadow:0 12px 28px rgba(15,23,42,.12)}.v208-media-video{width:100%;max-height:480px;border-radius:14px;background:#0f172a;box-shadow:0 12px 28px rgba(15,23,42,.16)}.v208-media-audio{width:100%}.v208-empty-media{color:#64748b;font-weight:900;text-align:center;padding:12px}.v208-mindmap{display:grid;gap:16px;margin-top:18px;background:linear-gradient(180deg,#fff,#f8fbff);border:1px solid rgba(37,99,235,.14);border-radius:26px;padding:18px}.v208-map-root{justify-self:center;text-align:center;color:#fff;background:linear-gradient(135deg,#2563eb,#4f46e5);border-radius:999px;padding:18px 24px;box-shadow:0 16px 38px rgba(37,99,235,.24)}.v208-map-root span{display:block;font-size:.78rem;opacity:.9;margin-top:5px}.v208-map-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(210px,1fr));gap:14px}.v208-map-card{background:#fff;border:1px solid rgba(37,99,235,.14);border-radius:20px;padding:14px;box-shadow:0 10px 24px rgba(15,23,42,.06)}.v208-map-card span{color:#2563eb;font-weight:1000}.v208-map-card h4{margin:.3rem 0}.v208-map-card p{line-height:1.6}.v208-map-card em{display:block;color:#047857;font-style:normal;font-weight:800;margin:.4rem 0}.v208-map-card ul{margin:.5rem 0 0;padding-left:1.1rem}.v208-integration{display:grid;gap:18px}.v208-scenario p{line-height:1.75}.v208-knowledge ul{margin:.2rem 0;padding-left:1.2rem;line-height:1.7}.v208-task-zone{display:grid;gap:14px}.v208-task-zone h3{margin:.2rem 0}.v208-integration-task p{margin:0;line-height:1.65;font-weight:700;color:#0f172a}.v208-upload-status{margin-top:8px;border:1px solid rgba(37,99,235,.18);background:#eff6ff;color:#1d4ed8;border-radius:12px;padding:8px 10px;font-weight:900}.v208-teacher-upload{display:grid;gap:8px;border:1px dashed rgba(37,99,235,.30);border-radius:14px;padding:10px;background:#f8fbff;margin-top:8px}#v208-badge{display:none!important}.v210-mindmap{overflow:hidden}.v210-map-layout{display:grid;grid-template-columns:minmax(170px,230px) 1fr;gap:18px;align-items:center;margin-top:12px}.v210-map-root{display:grid;place-items:center;min-height:112px;border-radius:28px;background:linear-gradient(135deg,#4f46e5,#f97316);color:#fff;font-weight:1000;text-align:center;padding:18px;box-shadow:0 14px 34px rgba(79,70,229,.20);overflow-wrap:anywhere}.v210-map-branches{display:grid;grid-template-columns:repeat(auto-fit,minmax(170px,1fr));gap:12px}.v210-map-node{border:1px solid #bfdbfe;background:#fff;border-radius:18px;padding:12px;text-align:left;cursor:pointer;box-shadow:0 8px 18px rgba(15,23,42,.07);min-height:76px}.v210-map-node strong{display:block;color:#0f172a;overflow-wrap:anywhere}.v210-map-node small{display:block;color:#475569;margin-top:5px;line-height:1.35}.v210-map-node.active,.v210-map-node:hover{background:#eff6ff;border-color:#2563eb}.v210-map-detail{margin-top:16px}.v210-map-detail h4{overflow-wrap:anywhere}.v210-visual-click-zone{display:grid;gap:10px}.v210-visual-click-zone video{width:100%;max-height:420px;border-radius:16px;background:#0f172a;box-shadow:0 12px 28px rgba(15,23,42,.16)}.v210-visual-click-zone img{max-width:100%;max-height:420px;object-fit:contain;border-radius:16px;box-shadow:0 12px 28px rgba(15,23,42,.12)}@media(max-width:760px){.v210-map-layout{grid-template-columns:1fr}.v210-map-root{min-height:86px}}.v209-visual-click-zone{display:grid;gap:10px}.v209-visual-click-zone video{width:100%;max-height:420px;border-radius:16px;background:#0f172a;box-shadow:0 12px 28px rgba(15,23,42,.16)}.v209-visual-click-zone img{max-width:100%;max-height:420px;object-fit:contain;border-radius:16px;box-shadow:0 12px 28px rgba(15,23,42,.12)}.v209-custom-mindmap .definition-box .ar{color:#0f766e;font-style:normal}.v209-visual-card .visual-example-box p{margin:.45rem 0;line-height:1.55}
    `;
    document.head.appendChild(style);
  }
  function badge(){ return; }
  function tick(root){ patchTeacherMediaInputs(root || document); }
  function start(){
    injectCss(); patchStudentPanels(); patchIntegration(); patchMindmapClicks(); patchSpeakButtons(); patchTeacherUploadHandler(); tick(document);
    try{ new MutationObserver(muts => muts.forEach(m => m.addedNodes && m.addedNodes.forEach(n => { if(n && n.querySelectorAll) tick(n); }))).observe(document.body,{childList:true,subtree:true}); }catch(e){}
    setInterval(() => tick(document), 1200);
  }
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start); else start();
  window.EPI_V208_FIX = {version:VERSION, mediaUrl, teacherContent};
})();
