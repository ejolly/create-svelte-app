import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import 'firebase/auth';

// Copy your firebase credentials here
const firebaseConfig = {
  apiKey: '',
  authDomain: '',
  databaseURL: '',
  projectId: '',
  storageBucket: '',
  messagingSenderId: '',
  appId: '',
};

// Initialize
firebase.initializeApp(firebaseConfig);

// Export connections to the database, storage, and authentication
// Also export a timestamp variable that can be added to any document write/update
// and will use the time on the firestore server rather than the client's browser
export const db = firebase.database();
export const storage = firebase.storage();
export const auth = firebase.auth();
export const serverTime = firebase.database.ServerValue.TIMESTAMP;
