import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Lugar, LugaresStackParamList } from '../types/navigation';

type RouteParams = RouteProp<LugaresStackParamList, 'DetalleLugar'>;

export default function DetalleLugarScreen() {
  const route = useRoute<RouteParams>();
  const { lugar } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{lugar.nombre}</Text>
      <Text>{lugar.descripcion}</Text>
      <Text>Horario: {lugar.horario} </Text>
      <Text>Dirección: {lugar.ubicacion?.calle} </Text>
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
