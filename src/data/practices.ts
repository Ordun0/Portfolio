export interface Practice {
  number: number;
  title: string;
  description: string;
  pdf?: string;
}

export const practices: Practice[] = [
  { number: 1, title: "Práctica 1", description: "Propiedad Intelectual.", pdf: "../../public/practica1.pdf" },
  { number: 2, title: "Estilos con CSS3", description: "Flexbox, Grid y diseño responsivo aplicado a layouts modernos." },
  { number: 3, title: "JavaScript Fundamentos", description: "Variables, funciones, DOM y eventos del navegador." },
  { number: 4, title: "Programación Orientada a Objetos", description: "Clases, herencia y encapsulamiento en un caso práctico." },
  { number: 5, title: "Consumo de APIs REST", description: "Fetch API, promesas y renderizado dinámico de datos." },
  { number: 6, title: "Frameworks: React", description: "Componentes, props, estado y hooks en una SPA interactiva." },
  { number: 7, title: "Bases de Datos Relacionales", description: "Diseño de esquemas, normalización y consultas SQL." },
  { number: 8, title: "Backend con Node.js", description: "API REST con Express, middlewares y autenticación JWT." },
  { number: 9, title: "Proyecto Integrador", description: "Aplicación full-stack desplegada en la nube." },
];