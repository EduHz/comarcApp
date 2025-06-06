// src/navigation/TabNavigator.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import CategoriaScreen from '../screens/CategoriasScreen';
import ActividadesScreen from '../screens/ActividadesScreen';
import PerfilScreen from '../screens/PerfilScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName = 'home';

          if (route.name === 'Inicio') iconName = 'home';
          else if (route.name === 'Lugares') iconName = 'location-outline';
          else if (route.name === 'Actividades') iconName = 'calendar-outline';
          else if (route.name === 'Perfil') iconName = 'person-outline';

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Lugares" component={CategoriaScreen} />
      <Tab.Screen name="Actividades" component={ActividadesScreen} />
      <Tab.Screen name="Perfil" component={PerfilScreen} />
    </Tab.Navigator>
  );
}
