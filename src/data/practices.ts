export interface Practice {
  number: number;
  title: string;
  description: string;
  pdf?: string;
  link?: string;
}

export const practices: Practice[] = [
  { number: 1, title: "Cuestionario 1 Personal", description: "Cuestionario de la temática de la LFT y LFDA.", pdf: "/Cuestionario1.pdf" },
  { number: 2, title: "Cuestionario 1 Grupal", description: "Cuestionario de la temática de la LFT y LFDA hecho por el grupo.", pdf: "/Cuestionario13.pdf" },
  { number: 3, title: "Práctica 1", description: "Propiedad Intelectual.", pdf: "/Practica1.pdf" },
  { number: 4, title: "Práctica 2", description: "Transferencia de conocimiento científico-industrial en ingeniería de software.", pdf: "/Practica2.pdf" },
  { number: 5, title: "Ensayo Unidad 1", description: "Ensayo sobre la propiedad intlectual.", pdf: "/Ensayo1.pdf" },
  { number: 6, title: "Práctica 3", description: "Protafolio de evidencia.", link: "https://cesar-programmer.github.io/gestion-de-la-inovacion/" },
  { number: 7, title: "Práctica 4", description: "Plan de trabajo para el registro de propiedad intelectual en México.", pdf: "/Practica4.pdf" },
  { number: 8, title: "Práctica 5", description: "Análisis del impacto de la evolución tecnológica en la ingeniería de software.", pdf: "/Practica5.pdf" },
  { number: 9, title: "Práctica 6", description: "La Biología Sintética y la Programación de la Vida: Horizontes, Dilemas y Gobernanza para el Futuro.", pdf: "/Practica6.pdf" },
  { number: 10, title: "Práctica 7", description: "Mega-constelaciones de satélites: conectividad global y el costo de un cielo saturado .", pdf: "/Practica7.pdf" },
  { number: 11, title: "Práctica 8", description: "Ensayo sobre Nearshoring.", pdf: "/Practica8.pdf" },
  { number: 12, title: "Práctica 9", description: "Aplicación full-stack desplegada en la nube." },
];
