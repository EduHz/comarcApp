import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';


export default function HomeScreen() {

  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>¡Bienvenido a ComarcApp!</Text>
      <Text style={styles.subtitle}>Explorá la Comarca Andina 🌄</Text>

      {/* Lugares destacados */}
      <Text style={styles.sectionTitle}>📍 Lugares destacados</Text>
      <Card title="Ameli Café" desc="Cafetería acogedora con vista a la montaña" />
      <Card title="Refugio Hielo Azul" desc="Refugio con senderos y alojamiento" />
      <Card title="Mirador Lago Puelo" desc="Vista panorámica del lago y montañas" />
      <TouchableOpacity onPress={() => router.push('/lugares')}><Text style={styles.link}>Ver todos los lugares →</Text></TouchableOpacity>

      {/* Actividades del día */}
      <Text style={styles.sectionTitle}>🗓️ Actividades de hoy</Text>
      <Card title="Feria de productores" desc="Productos locales en El Bolsón" />
      <Card title="Caminata al Piltriquitrón" desc="Salida desde la plaza a las 10 AM" />
      <TouchableOpacity onPress={() => router.push('/actividades')}><Text style={styles.link}>Ver todas las actividades →</Text></TouchableOpacity>
    </ScrollView>
  );
}

function Card({ title, desc }: { title: string; desc: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text>{desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 10,
  },
  card: {
    backgroundColor: '#f2f2f2',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  link: {
    color: '#2b4490',
    fontWeight: '600',
    marginTop: 5,
    marginBottom: 15,
  },
});
