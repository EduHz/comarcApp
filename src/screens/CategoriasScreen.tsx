// src/screens/CategoriasScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { LugaresStackParamList } from '../types/navigation';

const categorias = ['cafeteria', 'cerveceria', 'montaña', 'feria', 'arte'];

export default function CategoriasScreen() {
  const navigation = useNavigation<NativeStackNavigationProp<LugaresStackParamList, 'Categorias'>>();

  const capitalizar = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  return (
    <FlatList
      data={categorias}
      keyExtractor={(item) => item}
      contentContainerStyle={styles.container}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.card}
          onPress={() => navigation.navigate('LugaresPorCategoria', { categoria: item })}
        >
          <Text style={styles.text}>{capitalizar(item)}</Text>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  card: {
    backgroundColor: '#eee',
    padding: 20,
    borderRadius: 10,
    marginVertical: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
