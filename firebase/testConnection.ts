// src/firebase/testConnection.ts
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
} from '@env';

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

// Inicializar app y firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Función de prueba
export const testConnection = async () => {
  try {
    const snapshot = await getDocs(collection(db, 'lugares'));
    console.log('✔ Conectado a Firebase. Documentos:', snapshot.docs.length);
  } catch (error) {
    console.error('❌ Error al conectar con Firebase:', error);
  }
};
