import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { useRoute, RouteProp } from '@react-navigation/native';
import { Lugar, LugaresStackParamList } from '../types/navigation';
import MapView, { Marker } from 'react-native-maps';

type RouteParams = RouteProp<LugaresStackParamList, 'DetalleLugar'>;

export default function DetalleLugarScreen() {
  const route = useRoute<RouteParams>();
  const { lugar } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{lugar.nombre}</Text>
      <Text>{lugar.descripcion}</Text>
      <Text>Horario: {lugar.horario}</Text>
      <Text>Dirección: {lugar.ubicacion?.calle}</Text>

      {lugar.ubicacion?.lat && lugar.ubicacion?.lng && (
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: lugar.ubicacion.lat,
            longitude: lugar.ubicacion.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
          }}
        >
          <Marker
            coordinate={{
              latitude: lugar.ubicacion.lat,
              longitude: lugar.ubicacion.lng,
            }}
            title={lugar.nombre}
            description={lugar.ubicacion.calle}
          />
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  map: {
    width: Dimensions.get('window').width - 40,
    height: 250,
    marginTop: 20,
    borderRadius: 10,
  },
});
