// src/screens/LugaresPorCategoriaScreen.tsx
import React, { useEffect, useState } from 'react';
import { FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LugaresStackParamList, Lugar } from '../types/navigation';
import { RouteProp } from '@react-navigation/native';

type NavigationProp = NativeStackNavigationProp<LugaresStackParamList, 'LugaresPorCategoria'>;
type RouteParams = RouteProp<LugaresStackParamList, 'LugaresPorCategoria'>;

export default function LugaresPorCategoriaScreen() {
  const [lugares, setLugares] = useState<Lugar[]>([]);
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute<RouteParams>();
  const { categoria } = route.params;

  useEffect(() => {
    const fetchLugares = async () => {
      const cleanCategoria = categoria
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase();

      const q = query(
        collection(db, 'lugares'),
        where('categoria', '==', cleanCategoria)
      );

      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      })) as Lugar[];

      setLugares(data);
    };

    fetchLugares();
  }, [categoria]);

  return (
    <FlatList
      data={lugares}
      keyExtractor={(item) => item.id}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.item}
          onPress={() => navigation.navigate('DetalleLugar', { lugar: item })}
        >
          <Text style={styles.title}>{item.nombre}</Text>
          <Text>{item.descripcion}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  item: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 10,
    elevation: 2,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
