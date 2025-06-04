import { db } from '@/lib/firebaseConfig';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type Lugar = {
  nombre: string;
  descripcion: string;
  categoria: string;
  id: string;
};

export default function CategoriaScreen() {
  const { categoria } = useLocalSearchParams();
  const router = useRouter();
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
        const data = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data(),
        })) as Lugar[];
        setLugares(data);
      } catch (error) {
        console.error('Error al obtener lugares:', error);
      }
    };

    fetchLugares();
  }, [categoria]);

  const irADetalle = (id: string) => {
    router.push({
      pathname: '/(tabs)/lugares/[categoria]/[id]',
      params: { categoria: String(categoria), id },
    });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lugares: {categoria}</Text>
      <FlatList
        data={lugares}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => irADetalle(item.id)}>
            <Text style={styles.cardTitle}>{item.nombre}</Text>
            <Text>{item.descripcion}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export const options = {
  href: null, // ⛔️ para que no aparezca en la barra de navegación
};

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
