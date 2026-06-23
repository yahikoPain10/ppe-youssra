/* =========================================================
   ÉPI — Serveur Express (Vercel)
   Stockage : MongoDB (via db.js) pour toutes les données.
              Google Drive (via drive.js) pour les médias binaires.
   Lancer en local : node server.js
   Déployé sur Vercel via : module.exports = app
========================================================= */
require('dotenv').config();
const express = require('express');
const path    = require('path');
const crypto  = require('crypto');
const multer  = require('multer');
const drive   = require('./drive');
const db      = require('./db');

const PORT    = Number(process.env.PORT || 3000);
const ROOT    = __dirname;
const PUBLIC_DIR = path.join(ROOT, 'public');
const DEFAULT_TEACHER_PASSWORD  = process.env.EPI_PROF_PASSWORD || 'EduLibre2026';
const TEACHER_AUTH_DELAY_MS = 250;

const app = express();

/* ---------- CORS + cache headers ---------- */
app.use((req, res, next) => {
  res.set({
    'Cache-Control': 'no-store',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET,POST,PUT,DELETE,OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-File-Name, X-Media-Kind'
  });
  if(req.method === 'OPTIONS') return res.status(204).end();
  next();
});

/* ---------- Body parsers ---------- */
app.use('/api/storage',          express.text({ type: '*/*', limit: '150mb' }));
app.use('/api/teacher-auth',     express.json({ limit: '16kb' }));
app.use('/api/teacher-password', express.json({ limit: '32kb' }));
app.use('/api/media',            express.json({ limit: '500mb' }));

const upload = multer({ storage: multer.memoryStorage(), limits: { fileSize: 1024 * 1024 * 1024 } });

/* ---------- Helpers ---------- */
function safeDecode(part){
  try{ return decodeURIComponent(part || ''); }catch(e){ return part || ''; }
}
function cleanExt(name, type){
  const byType = {
    'image/png':'.png','image/jpeg':'.jpg','image/jpg':'.jpg','image/gif':'.gif',
    'image/webp':'.webp','image/svg+xml':'.svg',
    'audio/mpeg':'.mp3','audio/mp3':'.mp3','audio/wav':'.wav','audio/ogg':'.ogg','audio/mp4':'.m4a',
    'video/mp4':'.mp4','video/webm':'.webm','video/ogg':'.ogv',
    'application/pdf':'.pdf',
    'application/msword':'.doc',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document':'.docx',
    'application/vnd.ms-powerpoint':'.ppt',
    'application/vnd.openxmlformats-officedocument.presentationml.presentation':'.pptx'
  };
  const ext = path.extname(String(name || '')).toLowerCase().replace(/[^.a-z0-9]/g, '');
  return ext || byType[String(type || '').toLowerCase()] || '.bin';
}
function folderKeyForKind(kind){
  return kind === 'video' ? 'videos' : kind === 'audio' ? 'audios' : kind === 'document' ? 'documents' : 'images';
}
async function readTeacherPassword(){
  const doc = await db.readTeacherPassword();
  return String(doc && doc.password ? doc.password : DEFAULT_TEACHER_PASSWORD);
}

/* ============================================================
   /api/storage  — clé/valeur générique (MongoDB)
============================================================ */

// GET /api/storage → tout le store (utilisé par le préchargement client)
app.get('/api/storage', async (req, res) => {
  try{
    res.json(await db.readStorage());
  }catch(e){ res.status(500).json({ error: e.message }); }
});

// GET /api/storage/:key
app.get('/api/storage/:key', async (req, res) => {
  const key = safeDecode(req.params.key);
  if(!key) return res.status(400).json({ error: 'Missing key' });
  try{
    const value = await db.getStorageKey(key);
    res.json({ key, value });
  }catch(e){ res.status(500).json({ error: e.message }); }
});

// DELETE /api/storage/:key
app.delete('/api/storage/:key', async (req, res) => {
  const key = safeDecode(req.params.key);
  if(!key) return res.status(400).json({ error: 'Missing key' });
  try{
    await db.deleteStorageKey(key);
    res.json({ ok: true });
  }catch(e){ res.status(500).json({ error: e.message }); }
});

// POST /PUT /api/storage/:key
async function handleStorageWrite(req, res){
  const key = safeDecode(req.params.key);
  if(!key) return res.status(400).json({ error: 'Missing key' });
  const raw = typeof req.body === 'string' ? req.body : '';
  let value = raw;
  try{
    const parsed = JSON.parse(raw || '{}');
    if(Object.prototype.hasOwnProperty.call(parsed, 'value')) value = String(parsed.value ?? '');
  }catch(e){}
  try{
    await db.setStorageKey(key, value);
    res.json({ ok: true, key });
  }catch(e){ res.status(500).json({ error: e.message }); }
}
app.post('/api/storage/:key', handleStorageWrite);
app.put('/api/storage/:key',  handleStorageWrite);

app.post('/api/storage',   (req, res) => res.status(400).json({ error: 'Missing key' }));
app.put('/api/storage',    (req, res) => res.status(400).json({ error: 'Missing key' }));
app.delete('/api/storage', (req, res) => res.status(400).json({ error: 'Missing key' }));

/* ============================================================
   /api/media-file  (upload binaire multipart)
============================================================ */
app.post('/api/media-file', upload.single('file'), async (req, res, next) => {
  try{
    const buffer = req.file ? req.file.buffer : null;
    if(!buffer || !buffer.length) return res.status(400).json({ error: 'Empty file' });

    const type    = (req.file.mimetype || req.query.type || 'application/octet-stream');
    const rawName = req.headers['x-file-name'] || req.query.name || req.file.originalname || 'media';
    const name    = safeDecode(String(rawName));
    const kind    = String(
      req.headers['x-media-kind'] || req.query.kind ||
      (String(type).startsWith('video/') ? 'video' : String(type).startsWith('audio/') ? 'audio' : 'image')
    ).replace(/[^a-z0-9_-]/gi, '') || 'media';

    const id          = `${kind}_${Date.now()}_${crypto.randomBytes(6).toString('hex')}`;
    const ext         = cleanExt(name, type);
    const folderKey   = folderKeyForKind(kind);
    const filename    = `${folderKey}/${id}${ext}`;
    const driveFileId = await drive.uploadMediaBuffer(buffer, `${id}${ext}`, type, folderKey);

    await db.setMediaEntry(id, { kind, type, name, filename, driveId: driveFileId, savedAt: new Date().toISOString(), size: buffer.length });
    res.json({ ok: true, id, kind, url: `/api/media/${encodeURIComponent(id)}` });
  }catch(e){ next(e); }
});

/* ============================================================
   /api/media  (upload base64)
============================================================ */
app.post('/api/media', async (req, res, next) => {
  try{
    const payload = req.body || {};
    const dataUrl = String(payload.data || '');
    const match   = dataUrl.match(/^data:([^;,]+)?(?:;[^,]*)?,(.*)$/s);
    if(!match) return res.status(400).json({ error: 'Invalid media data' });

    const type    = payload.type || match[1] || 'application/octet-stream';
    const isB64   = /;base64,/i.test(dataUrl.slice(0, dataUrl.indexOf(',') + 1));
    const buffer  = isB64 ? Buffer.from(match[2] || '', 'base64') : Buffer.from(decodeURIComponent(match[2] || ''), 'utf8');
    const kind    = String(payload.kind || (String(type).startsWith('video/') ? 'video' : String(type).startsWith('audio/') ? 'audio' : 'image')).replace(/[^a-z0-9_-]/gi, '') || 'media';
    const id      = `${kind}_${Date.now()}_${crypto.randomBytes(6).toString('hex')}`;
    const ext     = cleanExt(payload.name, type);
    const folderKey   = folderKeyForKind(kind);
    const filename    = `${folderKey}/${id}${ext}`;
    const driveFileId = await drive.uploadMediaBuffer(buffer, `${id}${ext}`, type, folderKey);

    await db.setMediaEntry(id, { kind, type, name: String(payload.name || 'media'), filename, driveId: driveFileId, savedAt: new Date().toISOString(), size: buffer.length });
    res.json({ ok: true, id, kind, url: `/api/media/${encodeURIComponent(id)}` });
  }catch(e){ next(e); }
});

// GET /api/media/:id — stream depuis Drive
app.get('/api/media/:id', async (req, res, next) => {
  try{
    const id   = safeDecode(String(req.params.id || '').split('/')[0]);
    const item = await db.getMediaEntry(id);
    if(!item || !item.driveId) return res.status(404).json({ error: 'Not found' });
    await drive.streamMediaToResponse(item.driveId, req, res, item.type);
  }catch(e){ next(e); }
});

/* ============================================================
   /api/teacher-auth & /api/teacher-password
============================================================ */
app.post('/api/teacher-auth', async (req, res) => {
  try{
    const password = String((req.body || {}).password || '');
    const ok       = password === (await readTeacherPassword());
    setTimeout(() => res.status(ok ? 200 : 401).json({ ok }), TEACHER_AUTH_DELAY_MS);
  }catch(e){
    res.status(400).json({ ok: false, error: 'Invalid request' });
  }
});

app.post('/api/teacher-password', async (req, res) => {
  try{
    const { oldPassword = '', newPassword = '' } = req.body || {};
    if(String(oldPassword) !== (await readTeacherPassword()))
      return res.status(401).json({ ok: false, error: 'Ancien mot de passe incorrect.' });
    if(String(newPassword).trim().length < 4)
      return res.status(400).json({ ok: false, error: 'Le nouveau mot de passe doit contenir au moins 4 caractères.' });
    await db.writeTeacherPassword({ password: String(newPassword), updatedAt: new Date().toISOString() });
    res.json({ ok: true });
  }catch(e){
    res.status(500).json({ ok: false, error: 'Impossible de changer le mot de passe.' });
  }
});

/* ============================================================
   Fichiers statiques + fallback SPA
============================================================ */
app.use(express.static(PUBLIC_DIR, { cacheControl: false, setHeaders: (res) => res.set('Cache-Control', 'no-cache') }));
app.get('/', (req, res, next) => {
  res.sendFile(path.join(PUBLIC_DIR, 'index.html'), err => { if(err) next(); });
});

/* ============================================================
   404 + erreurs
============================================================ */
app.use((req, res) => res.status(404).json({ error: 'Not found' }));
app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: err.message || 'Server error' });
});

/* ============================================================
   Export Vercel / écoute locale
============================================================ */
if(require.main === module){
  app.listen(PORT, () => {
    console.log(`ÉPI serveur lancé : http://localhost:${PORT}`);
    console.log(`Données : MongoDB (${process.env.MONGODB_URI ? 'connecté' : 'MONGODB_URI manquant !'})`);
    console.log(`Médias  : Google Drive`);
  });
}

module.exports = app;