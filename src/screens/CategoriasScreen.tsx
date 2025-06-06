// src/screens/CategoriasScreen.tsx
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const categorias = ['Cafetería', 'Cervecería', 'Montaña', 'Feria', 'Arte'];

export default function CategoriasScreen() {
  const navigation = useNavigation();

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
          <Text style={styles.text}>{item}</Text>
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