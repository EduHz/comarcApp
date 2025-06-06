import { useEffect } from 'react';
import { testConnection } from './firebase/testConnection';

export default function App() {
  useEffect(() => {
    testConnection();
  }, []);

  return null;
}
