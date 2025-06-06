// src/types/navigation.ts

export type RootStackParamList = {
  Home: undefined;
  Categoria: { categoria: string };
  Detalle: { lugarId: string };
};
