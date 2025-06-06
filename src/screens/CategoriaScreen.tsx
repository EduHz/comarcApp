// src/screens/CategoriaScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type CategoriaRouteProp = RouteProp<RootStackParamList, 'Categoria'>;
type CategoriaNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Categoria'>;

type Lugar = {
  id: string;
  nombre: string;
};

export default function CategoriaScreen() {
  const route = useRoute<CategoriaRouteProp>();
  const navigation = useNavigation<CategoriaNavigationProp>();
  const { categoria } = route.params;
  const [lugares, setLugares] = useState<Lugar[]>([]);

  useEffect(() => {
    // Simulación, reemplazá con fetch desde Firebase
    setLugares([
      { id: '1', nombre: 'Café del Bosque' },
      { id: '2', nombre: 'Montaña Brew' },
    ]);
  }, [categoria]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lugares en: {categoria}</Text>
      <FlatList
        data={lugares}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() => navigation.navigate('Detalle', { lugarId: item.id })}
          >
            <Text>{item.nombre}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 10 },
  card: { padding: 15, backgroundColor: '#eee', marginBottom: 10, borderRadius: 8 },
});
