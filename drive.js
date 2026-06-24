/* =========================================================
   ÉPI — Couche Google Drive (médias uniquement)
   Le stockage JSON (storage, media-index, mot de passe) est
   désormais géré par MongoDB (voir db.js).
   Drive ne sert plus qu'à uploader et streamer les fichiers
   binaires (images, audio, vidéo, documents).
========================================================= */
const { google } = require('googleapis');

const MEDIA_FOLDER_ID = process.env.GDRIVE_MEDIA_FOLDER_ID || '1n2l05AoekMOAjjRTMg1gJLjEV5A56umY';
const MEDIA_FOLDERS = {
  images:    process.env.GDRIVE_MEDIA_IMAGES_FOLDER_ID    || '1hjL3wHi1hd1hi41RuHQyB2dteXTRqMhH',
  audios:    process.env.GDRIVE_MEDIA_AUDIOS_FOLDER_ID    || '1zr2EKFNc2QutGjkfDDA-4Mq95q1_V_9K',
  videos:    process.env.GDRIVE_MEDIA_VIDEOS_FOLDER_ID    || '1eJ3wVveoBunmJI7MvA2O085S1VKgc9mX',
  documents: process.env.GDRIVE_MEDIA_DOCUMENTS_FOLDER_ID || '1iSDWD-azEd7VF91amu3aQ7gFQuRMGke4'
};

let _client = null;
function getClient(){
  if(_client) return _client;
  const auth = new google.auth.OAuth2(
    process.env.GOOGLE_CLIENT_ID,
    process.env.GOOGLE_CLIENT_SECRET
  );
  auth.setCredentials({ refresh_token: process.env.GOOGLE_REFRESH_TOKEN });
  _client = google.drive({ version: 'v3', auth });
  return _client;
}

function bufferToStream(buffer){
  const s = new Readable();
  s.push(buffer);
  s.push(null);
  return s;
}

function folderIdForKind(kind){
  return MEDIA_FOLDERS[kind] || MEDIA_FOLDERS.images || MEDIA_FOLDER_ID;
}

async function uploadMediaBuffer(buffer, filename, mimeType, kind){
  const drive = getClient();
  const res = await drive.files.create({
    requestBody: { name: filename, parents: [folderIdForKind(kind)], mimeType: mimeType || 'application/octet-stream' },
    media:       { mimeType: mimeType || 'application/octet-stream', body: bufferToStream(buffer) },
    fields: 'id'
  });
  return res.data.id;
}

async function uploadMediaStream(stream, filename, mimeType, kind){
  const drive = getClient();
  const res = await drive.files.create({
    requestBody: { name: filename, parents: [folderIdForKind(kind)], mimeType: mimeType || 'application/octet-stream' },
    media:       { mimeType: mimeType || 'application/octet-stream', body: stream },
    fields: 'id'
  });
  return res.data.id;
}

module.exports = {
  MEDIA_FOLDER_ID,
  MEDIA_FOLDERS,
  uploadMediaBuffer,
  uploadMediaStream,
  folderIdForKind
};