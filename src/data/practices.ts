export interface Practice {
  number: number;
  title: string;
  description: string;
  pdf?: string;
}

export const practices: Practice[] = [
  { number: 1, title: "Práctica 1", description: "Propiedad Intelectual.", pdf: "../../public/Practica1.pdf" },
  { number: 2, title: "Práctica 2", description: "Transferencia de conocimiento científico-industrial en ingeniería de software.", pdf: "../../public/Practica2.pdf" },
  { number: 3, title: "Ensayo Unidad 1", description: "Ensayo sobre la propiedad intlectual.", pdf: "../../public/Ensayo1.pdf" },
  { number: 4, title: "Práctica 3", description: "Protafolio de evidencia." },
  { number: 5, title: "Práctica 4", description: "Plan de trabajo para el registro de propiedad intelectual en México.", pdf: "../../public/Practica4.pdf" },
  { number: 6, title: "Práctica 5", description: "Análisis del impacto de la evolución tecnológica en la ingeniería de software.", pdf: "../../public/Practica5.pdf" },
  { number: 7, title: "Práctica 6", description: "La Biología Sintética y la Programación de la Vida: Horizontes, Dilemas y Gobernanza para el Futuro.", pdf: "../../public/Practica6.pdf" },
  { number: 8, title: "Práctica 7", description: "Mega-constelaciones de satélites: conectividad global y el costo de un cielo saturado .", pdf: "../../public/Practica7.pdf" },
  { number: 9, title: "Práctica 8", description: "Ensayo sobre Nearshoring.", pdf: "../../public/Practica8.pdf" },
  { number: 10, title: "Práctica 9", description: "Aplicación full-stack desplegada en la nube." },
];
