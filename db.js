/* =========================================================
   ÉPI — Couche MongoDB
   Collections :
     storage  → clé/valeur générique   { _id: key, value: string }
     media    → index des fichiers Drive { _id: mediaId, driveId, ... }
     config   → singletons (mot de passe enseignant, etc.)
========================================================= */
const { MongoClient } = require('mongodb');

const MONGODB_URI = process.env.MONGODB_URI;
const DB_NAME     = process.env.MONGODB_DB_NAME || 'epi';

if(!MONGODB_URI) throw new Error('MONGODB_URI env var is required');

/* ----------------------------------------------------------
   Connexion résiliente : on recrée le client si la topologie
   est fermée (cas fréquent sur Vercel entre deux invocations
   ou après un timeout réseau).
---------------------------------------------------------- */
let _client = null;

async function getDb(){
  // Vérifier si le client existant est encore utilisable
  if(_client){
    try{
      // isConnected() est supprimé en driver v5+ ; on ping à la place
      await _client.db('admin').command({ ping: 1 });
    }catch(e){
      // Topologie fermée ou timeout → forcer la recréation
      try{ await _client.close(); }catch(_){}
      _client = null;
    }
  }

  if(!_client){
    _client = new MongoClient(MONGODB_URI, {
      maxPoolSize: 10,
      minPoolSize: 1,
      serverSelectionTimeoutMS: 8000,
      socketTimeoutMS: 30000,
      connectTimeoutMS: 10000,
      // Maintenir la connexion active entre les invocations Vercel
      heartbeatFrequencyMS: 10000,
    });
    await _client.connect();
  }

  return _client.db(DB_NAME);
}

async function col(name){ return (await getDb()).collection(name); }

/* ==========================================================
   STORAGE  { _id: key, value: string }
========================================================== */

async function readStorage(){
  const c    = await col('storage');
  const docs = await c.find({}, { projection: { _id: 1, value: 1 } }).toArray();
  const out  = Object.create(null);
  docs.forEach(d => { out[d._id] = d.value; });
  return out;
}

async function getStorageKey(key){
  const c   = await col('storage');
  const doc = await c.findOne({ _id: key }, { projection: { value: 1 } });
  return doc ? doc.value : null;
}

async function setStorageKey(key, value){
  const c = await col('storage');
  await c.updateOne({ _id: key }, { $set: { value: String(value ?? '') } }, { upsert: true });
}

async function deleteStorageKey(key){
  const c = await col('storage');
  await c.deleteOne({ _id: key });
}

/* ==========================================================
   MEDIA INDEX  { _id: mediaId, driveId, kind, type, name, ... }
========================================================== */

async function readMediaIndex(){
  const c    = await col('media');
  const docs = await c.find({}).toArray();
  const out  = Object.create(null);
  docs.forEach(({ _id, ...rest }) => { out[_id] = { id: _id, ...rest }; });
  return out;
}

async function setMediaEntry(id, entry){
  const c = await col('media');
  const { id: _ignored, ...fields } = entry;
  await c.updateOne({ _id: id }, { $set: fields }, { upsert: true });
}

async function getMediaEntry(id){
  const c   = await col('media');
  const doc = await c.findOne({ _id: id });
  if(!doc) return null;
  const { _id, ...rest } = doc;
  return { id: _id, ...rest };
}

/* ==========================================================
   CONFIG  { _id: 'teacher_password', password, updatedAt }
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
   Index — exécuté une fois au démarrage, erreurs non fatales
---------------------------------------------------------- */
(async () => {
  try{
    const db = await getDb();
    await db.collection('media').createIndex({ driveId: 1 }, { sparse: true });
  }catch(e){
    console.warn('ÉPI DB: index creation warning:', e.message);
  }
})();

module.exports = {
  getDb,
  readStorage, getStorageKey, setStorageKey, deleteStorageKey,
  readMediaIndex, setMediaEntry, getMediaEntry,
  readTeacherPassword, writeTeacherPassword
};