/* =========================================================
   ÉPI — Couche MongoDB
   Remplace les fichiers JSON sur Google Drive pour :
     • storage.json        → collection `storage`   (clé/valeur)
     • media-index.json    → collection `media`     (index des fichiers Drive)
     • teacher-password    → collection `config`    (document singleton)

   Connexion : variable d'environnement MONGODB_URI
   Base de données : "epi"  (modifiable via MONGODB_DB_NAME)
========================================================= */
const { MongoClient } = require('mongodb');

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME     = process.env.MONGODB_DB_NAME || 'epi';

if(!MONGODB_URI) throw new Error('MONGODB_URI env var is required');

/* ----------------------------------------------------------
   Client singleton — une seule connexion réutilisée sur toute
   la durée de vie du process (ou de la lambda Vercel "warm").
---------------------------------------------------------- */
let _client = null;
let _db     = null;

async function getDb(){
  if(_db) return _db;
  if(!_client){
    _client = new MongoClient(MONGODB_URI, {
      maxPoolSize: 10,
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 10000
    });
    await _client.connect();
  }
  _db = _client.db(DB_NAME);
  return _db;
}

/* ----------------------------------------------------------
   Collection helpers
---------------------------------------------------------- */
async function col(name){ return (await getDb()).collection(name); }

/* ==========================================================
   STORAGE  (remplace storage.json)
   Schéma : { _id: key<string>, value: string }
   • _id est directement la clé applicative pour des lookups O(1)
========================================================== */

/** Retourne tout le store sous forme { key: value, ... } */
async function readStorage(){
  const c    = await col('storage');
  const docs = await c.find({}, { projection: { _id: 1, value: 1 } }).toArray();
  const out  = Object.create(null);
  docs.forEach(d => { out[d._id] = d.value; });
  return out;
}

/** Lit une seule clé → string | null */
async function getStorageKey(key){
  const c   = await col('storage');
  const doc = await c.findOne({ _id: key }, { projection: { value: 1 } });
  return doc ? doc.value : null;
}

/** Écrit une clé (upsert) */
async function setStorageKey(key, value){
  const c = await col('storage');
  await c.updateOne({ _id: key }, { $set: { value: String(value ?? '') } }, { upsert: true });
}

/** Supprime une clé */
async function deleteStorageKey(key){
  const c = await col('storage');
  await c.deleteOne({ _id: key });
}

/* ==========================================================
   MEDIA INDEX  (remplace media-index.json)
   Schéma : { _id: mediaId<string>, kind, type, name,
              filename, driveId, savedAt, size }
========================================================== */

/** Retourne l'index complet { id: {...}, ... } */
async function readMediaIndex(){
  const c    = await col('media');
  const docs = await c.find({}).toArray();
  const out  = Object.create(null);
  docs.forEach(d => {
    const { _id, ...rest } = d;
    out[_id] = { id: _id, ...rest };
  });
  return out;
}

/** Insère ou met à jour une entrée dans l'index */
async function setMediaEntry(id, entry){
  const c = await col('media');
  const { id: _ignored, ...fields } = entry; // éviter de dupliquer id dans les champs
  await c.updateOne({ _id: id }, { $set: fields }, { upsert: true });
}

/** Récupère une entrée par id */
async function getMediaEntry(id){
  const c   = await col('media');
  const doc = await c.findOne({ _id: id });
  if(!doc) return null;
  const { _id, ...rest } = doc;
  return { id: _id, ...rest };
}

/* ==========================================================
   CONFIG  (mot de passe enseignant, etc.)
   Schéma : { _id: 'teacher_password', password: string, updatedAt: string }
========================================================== */

async function readTeacherPassword(){
  const c   = await col('config');
  const doc = await c.findOne({ _id: 'teacher_password' });
  return doc || {};
}

async function writeTeacherPassword(data){
  const c = await col('config');
  await c.updateOne({ _id: 'teacher_password' }, { $set: data }, { upsert: true });
}

/* ----------------------------------------------------------
   Bootstrap : index MongoDB pour les performances
---------------------------------------------------------- */
async function ensureIndexes(){
  try{
    const db = await getDb();
    // storage : _id est déjà l'index primaire, rien à faire
    // media : index sur driveId pour des lookups inverses éventuels
    await db.collection('media').createIndex({ driveId: 1 }, { sparse: true });
  }catch(e){
    console.warn('ÉPI DB: impossible de créer les index', e.message);
  }
}
ensureIndexes();

module.exports = {
  getDb,
  // storage
  readStorage,
  getStorageKey,
  setStorageKey,
  deleteStorageKey,
  // media index
  readMediaIndex,
  setMediaEntry,
  getMediaEntry,
  // config
  readTeacherPassword,
  writeTeacherPassword
};