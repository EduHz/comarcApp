import { Tabs } from "expo-router";

export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Inicio" }}
      />
      <Tabs.Screen
        name="lugares"
        options={{ title: "Lugares" }}
      />
      <Tabs.Screen
        name="actividades"
        options={{ title: "Actividades" }}
      />
      <Tabs.Screen
        name="perfil"
        options={{ title: "Perfil" }}
      />
    </Tabs>
  );
}
