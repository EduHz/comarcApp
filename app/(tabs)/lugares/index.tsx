import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

const categorias = [
    { nombre: 'Cafeterías', id: 'cafeteria' },
    { nombre: 'Cervecerías', id: 'cervezeria' },
    { nombre: 'Montañas', id: 'montania' }
];

export default function CategoriasScreen() {
    const router = useRouter();

    const irACategoria = (id: string) => {
        router.push(`/(tabs)/lugares/${id}`);
    };


    return (
        <View style={styles.container}>
            <Text style={styles.title}>📍 Elegí una categoría</Text>
            {categorias.map((cat) => (
                <TouchableOpacity
                    key={cat.id}
                    style={styles.card}
                    onPress={() => irACategoria(cat.id)}
                >
                    <Text style={styles.cardText}>{cat.nombre}</Text>
                </TouchableOpacity>
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: '#fff',
        flex: 1,
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    card: {
        backgroundColor: '#e2e2e2',
        padding: 20,
        borderRadius: 10,
        marginBottom: 15,
        alignItems: 'center',
    },
    cardText: {
        fontSize: 18,
        fontWeight: '600',
    },
});
