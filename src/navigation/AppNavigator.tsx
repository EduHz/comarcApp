// src/navigation/AppNavigator.tsx
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TabNavigator from './TabNavigator';
import FavoritosScreen from '../screens/FavoritosScreen';

export type RootStackParamList = {
  Tabs: undefined;
  Favoritos: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Tabs" component={TabNavigator} />
      <Stack.Screen name="Favoritos" component={FavoritosScreen} />
    </Stack.Navigator>
  );
}
