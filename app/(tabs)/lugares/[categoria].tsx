import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '@/firebase/firebaseConfig';
import { useLocalSearchParams } from 'expo-router';

type Lugar = {
  nombre: string;
  descripcion: string;
  categoria: string;
};

export default function CategoriaScreen() {
  const { categoria } = useLocalSearchParams();
  const [lugares, setLugares] = useState<Lugar[]>([]);

  useEffect(() => {
    if (!categoria) return;

    const fetchLugares = async () => {
      try {
        const q = query(
          collection(db, 'lugares'),
          where('categoria', '==', categoria)
        );
        const snapshot = await getDocs(q);
        const data = snapshot.docs.map(doc => doc.data() as Lugar);
        setLugares(data);
      } catch (error) {
        console.error('Error al obtener lugares:', error);
      }
    };

    fetchLugares();
  }, [categoria]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lugares: {categoria}</Text>
      <FlatList
        data={lugares}
        keyExtractor={(item, index) => `${item.nombre}-${index}`}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.nombre}</Text>
            <Text>{item.descripcion}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 15,
    textTransform: 'capitalize',
  },
  card: {
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
