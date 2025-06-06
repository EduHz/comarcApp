// firebase/testConnection.js
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import app from './firebaseConfig';

const db = getFirestore(app);

export const testFirebaseConnection = async () => {
  try {
    const docRef = await addDoc(collection(db, 'test'), {
      timestamp: new Date(),
    });
    console.log('Documento agregado con ID:', docRef.id);
  } catch (e) {
    console.error('Error al agregar documento:', e);
  }
};
