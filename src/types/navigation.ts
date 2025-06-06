// src/types/navigation.ts

export type Lugar = {
  id: string;
  nombre: string;
  descripcion: string;
  categoria: string;
  horario?: string;
  instagram?: string;
  telefono?: string;
  web?: string;
  fotos?: string[];
  ubicacion?: {
    calle: string;
    lat: number;
    lng: number;
  };
};

export type LugaresStackParamList = {
  Categorias: undefined;
  LugaresPorCategoria: { categoria: string };
  DetalleLugar: { lugar: Lugar };
};