// This file sets up firebase and make it available throughout the app using the variable 'db'. Just import { db } from 'relativePathToThisFile/firebase.js' to interact with firebase.
import firebase from 'firebase/app';
import 'firebase/firestore';
// Copy and past your firebase credentials here
const firebaseConfig = {};

// Initialize firebase
firebase.initializeApp(firebaseConfig);

// Export global for use elsewhere in the app
export const db = firebase.firestore();