export interface Practice {
  number: number;
  title: string;
  description: string;
  unit: number;
  pdf?: string;
  link?: string;
}

export const practices: Practice[] = [
  // Unidad 1
  { number: 1, title: "Cuestionario 1 Personal", description: "Cuestionario de la temática de la LFT y LFDA.", unit: 1, pdf: "/Cuestionario1.pdf" },
  { number: 2, title: "Cuestionario 1 Grupal", description: "Cuestionario de la temática de la LFT y LFDA hecho por el grupo.", unit: 1, pdf: "/Cuestionario13.pdf" },
  { number: 3, title: "Práctica 1", description: "Propiedad Intelectual.", unit: 1, pdf: "/Practica1.pdf" },
  { number: 4, title: "Práctica 2", description: "Transferencia de conocimiento científico-industrial en ingeniería de software.", unit: 1, pdf: "/Practica2.pdf" },
  { number: 5, title: "Práctica 3", description: "Portafolio de evidencia.", unit: 1, link: "https://cesar-programmer.github.io/gestion-de-la-inovacion/" },
  { number: 6, title: "Práctica 4", description: "Plan de trabajo para el registro de propiedad intelectual en México.", unit: 1, pdf: "/Practica4.pdf" },
  // Unidad 2
  { number: 7, title: "Práctica 5", description: "Análisis del impacto de la evolución tecnológica en la ingeniería de software.", unit: 2, pdf: "/Practica5.pdf" },
  { number: 8, title: "Práctica 6", description: "La Biología Sintética y la Programación de la Vida: Horizontes, Dilemas y Gobernanza para el Futuro.", unit: 2, pdf: "/Practica6.pdf" },
  // Unidad 3
  { number: 9, title: "Práctica 7", description: "Mega-constelaciones de satélites: conectividad global y el costo de un cielo saturado.", unit: 3, pdf: "/Practica7.pdf" },
  { number: 10, title: "Práctica 8", description: "Ensayo sobre Nearshoring.", unit: 3, pdf: "/Practica8.pdf" },
  { number: 11, title: "Práctica 9", description: "Aplicación full-stack desplegada en la nube.", unit: 3 },
];
