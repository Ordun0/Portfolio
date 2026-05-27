export interface Practice {
  number: number;
  title: string;
  description: string;
  pdf?: string;
  link?: string;
  unit?: number;
}

export const practices: Practice[] = [
  // Unidad 1
  { number: 1, title: "Cuestionario 1 Personal", description: "Cuestionario individual de la Unidad 1.", pdf: "/Cuestionario1.pdf", unit: 1 },
  { number: 2, title: "Cuestionario 1 Grupal", description: "Cuestionario grupal de la Unidad 1.", pdf: "/Cuestionario13.pdf", unit: 1 },
  { number: 3, title: "Práctica 1", description: "Propiedad Intelectual.", pdf: "/Practica1.pdf", unit: 1 },
  { number: 4, title: "Práctica 2", description: "Transferencia de conocimiento científico-industrial en ingeniería de software.", pdf: "/Practica2.pdf", unit: 1 },
  { number: 5, title: "Práctica 3", description: "Protafolio de evidencia.", link: "https://cesar-programmer.github.io/gestion-de-la-inovacion/", unit: 1 },
  { number: 6, title: "Práctica 4", description: "Plan de trabajo para el registro de propiedad intelectual en México.", pdf: "/Practica4.pdf", unit: 1 },
  // Unidad 2
  { number: 7, title: "Práctica 5", description: "Análisis del impacto de la evolución tecnológica en la ingeniería de software.", pdf: "/Practica5.pdf", unit: 2 },
  { number: 8, title: "Práctica 6", description: "La Biología Sintética y la Programación de la Vida: Horizontes, Dilemas y Gobernanza para el Futuro.", pdf: "/Practica6.pdf", unit: 2 },
  // Unidad 3
  { number: 9, title: "Práctica 7", description: "Mega-constelaciones de satélites: conectividad global y el costo de un cielo saturado .", pdf: "/Practica7.pdf", unit: 3 },
  { number: 10, title: "Práctica 8", description: "Ensayo sobre Nearshoring.", pdf: "/Practica8.pdf", unit: 3 },
  { number: 11, title: "Práctica 9", description: "Aplicación full-stack desplegada en la nube.", unit: 3 },
];
