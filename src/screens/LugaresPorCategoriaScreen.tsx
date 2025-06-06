
// src/screens/LugaresPorCategoriaScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { db } from '../firebase/firebaseConfig';
import { useRoute, useNavigation } from '@react-navigation/native';

export default function LugaresPorCategoriaScreen() {
  const [lugares, setLugares] = useState([]);
  const route = useRoute();
  const navigation = useNavigation();
  const { categoria } = route.params;

  useEffect(() => {
    const fetchLugares = async () => {
      const q = query(collection(db, 'lugares'), where('categoria', '==', categoria));
      const snapshot = await getDocs(q);
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
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
