import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';

export default function DetalleLugarScreen() {
  const route = useRoute();
  const { lugar } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{lugar.nombre}</Text>
      <Text>{lugar.descripcion}</Text>
      <Text>Horario: {lugar.horarios}</Text>
      <Text>Dirección: {lugar.direccion}</Text>
      {/* Aquí podrías agregar mapa, fotos, contacto, etc. */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});
