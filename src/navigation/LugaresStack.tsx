// src/navigation/LugaresStack.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriasScreen from '../screens/CategoriasScreen';
import LugaresPorCategoriaScreen from '../screens/LugaresPorCategoriaScreen';
import DetalleLugarScreen from '../screens/DetalleLugarScreen';

export type LugaresStackParamList = {
  Categorías: undefined;
  LugaresPorCategoria: { categoria: string };
  DetalleLugar: { lugar: any };
};

const Stack = createNativeStackNavigator<LugaresStackParamList>();

export default function LugaresStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Categorías" component={CategoriasScreen} />
      <Stack.Screen
        name="LugaresPorCategoria"
        component={LugaresPorCategoriaScreen}
        options={({ route }) => ({ title: route.params.categoria })}
      />
      <Stack.Screen
        name="DetalleLugar"
        component={DetalleLugarScreen}
        options={({ route }) => ({ title: route.params.lugar.nombre })}
      />
    </Stack.Navigator>
  );
}
