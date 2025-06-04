import { initializeApp, getApps, getApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'; // ✅ solo esto
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyAoQptZP_Nr1rOrWQ8QQHpEWYnhmUV1z3w",
  authDomain: "comarcapp-13ddd.firebaseapp.com",
  projectId: "comarcapp-13ddd",
  storageBucket: "comarcapp-13ddd.appspot.com",
  messagingSenderId: "947570231109",
  appId: "1:947570231109:web:20bc69d6411fa43046e02c"
};


const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app); // ✅ sin initializeAuth
export const db = getFirestore(app);
export const storage = getStorage(app);

