import { db } from '@/lib/firebaseConfig';
import { useLocalSearchParams } from 'expo-router';
import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import { Button, Image, Linking, ScrollView, StyleSheet, Text } from 'react-native';

export default function DetalleLugar() {
  const { id } = useLocalSearchParams();
  const [lugar, setLugar] = useState<any>(null);

  useEffect(() => {
    if (!id) return;

    const fetchLugar = async () => {
      const docRef = doc(db, 'lugares', String(id));
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setLugar(docSnap.data());
      }
    };

    fetchLugar();
  }, [id]);

  if (!lugar) {
    return <Text style={{ padding: 20 }}>Cargando...</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{lugar.nombre}</Text>
      <Text>{lugar.descripcion}</Text>

      {/* Fotos */}
      <ScrollView horizontal style={styles.imageRow}>
        {lugar.fotos?.map((url: string, index: number) => (
          <Image key={index} source={{ uri: url }} style={styles.image} />
        ))}
      </ScrollView>

      {/* Horarios */}
      <Text style={styles.section}>🕒 Horario:</Text>
      <Text>{lugar.horario}</Text>

      {/* Ubicación */}
      <Text style={styles.section}>📍 Ubicación:</Text>
      <Text>{lugar.ubicacion?.calle}</Text>
      <Button
        title="Ver en Google Maps"
        onPress={() =>
          Linking.openURL(
            `https://www.google.com/maps/search/?api=1&query=${lugar.ubicacion.lat},${lugar.ubicacion.lng}`
          )
        }
      />

      {/* Contacto */}
      <Text style={styles.section}>📞 Contacto:</Text>
      {lugar.telefono && <Text>Tel: {lugar.telefono}</Text>}
      {lugar.instagram && (
        <Text
          style={styles.link}
          onPress={() => Linking.openURL(`https://instagram.com/${lugar.instagram.replace('@', '')}`)}
        >
          {lugar.instagram}
        </Text>
      )}
      {lugar.web && (
        <Text style={styles.link} onPress={() => Linking.openURL(lugar.web)}>
          {lugar.web}
        </Text>
      )}
    </ScrollView>
  );
}

export const options = {
  href: null, // ⛔️ para que no aparezca en la barra de navegación
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  imageRow: {
    marginVertical: 10,
  },
  image: {
    width: 200,
    height: 130,
    borderRadius: 8,
    marginRight: 10,
  },
  section: {
    marginTop: 20,
    fontWeight: 'bold',
    fontSize: 16,
  },
  link: {
    color: '#1a73e8',
    textDecorationLine: 'underline',
    marginTop: 5,
  },
});
