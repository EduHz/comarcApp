import { db } from '@/lib/firebaseConfig'; // ajustá el path según tu estructura
import { collection, getDocs } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

type Lugar = {
  nombre: string;
  descripcion: string;
  categoria: string;
};

export default function LugaresScreen() {
  const [lugares, setLugares] = useState<Lugar[]>([]);

  useEffect(() => {
    const fetchLugares = async () => {
      try {
        const snapshot = await getDocs(collection(db, 'lugares'));
        const data = snapshot.docs.map(doc => doc.data() as Lugar);
        setLugares(data);
      } catch (error) {
        console.error('Error al cargar los lugares:', error);
      }
    };

    fetchLugares();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lugares turísticos</Text>
      <FlatList
        data={lugares}
        keyExtractor={(item, index) => `${item.nombre}-${index}`}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.cardTitle}>{item.nombre}</Text>
            <Text>{item.descripcion}</Text>
            <Text style={styles.categoria}>Categoría: {item.categoria}</Text>
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
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  categoria: {
    fontStyle: 'italic',
    marginTop: 5,
  },
});
