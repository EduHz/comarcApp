// src/screens/DetalleScreen.tsx
import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RouteProp, useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../types/navigation';

type DetalleRouteProp = RouteProp<RootStackParamList, 'Detalle'>;

export default function DetalleScreen() {
  const route = useRoute<DetalleRouteProp>();
  const { lugarId } = route.params;
  const [lugar, setLugar] = useState<{ nombre: string; descripcion: string } | null>(null);

  useEffect(() => {
    // Simulación, reemplazá con fetch desde Firebase
    setLugar({
      nombre: 'Café del Bosque',
      descripcion: 'Un lugar acogedor con vista al cerro Piltriquitrón.',
    });
  }, [lugarId]);

  if (!lugar) return <Text>Cargando...</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{lugar.nombre}</Text>
      <Text>{lugar.descripcion}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 10 },
});
