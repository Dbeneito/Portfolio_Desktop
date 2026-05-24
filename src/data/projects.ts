export interface Project {
  id: number;
  title: string;
  description: string;
  type: 'design' | 'code';
  tags: string[];
  github?: string;
  demo?: string;
  year: number;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "Sad Travel",
    description: "Proyecto web de viajes con diseño oscuro y experiencia inmersiva.",
    type: "code",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Dbeneito/Sad-Travel",
    year: 2025,
  },
  {
    id: 2,
    title: "Mrs Roverto",
    description: "Aplicación web desarrollada en equipo con enfoque en interfaz de usuario.",
    type: "code",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Dbeneito/Mrs_Roverto",
    year: 2025,
  },
  {
    id: 3,
    title: "Kings of Gambling",
    description: "Proyecto colaborativo con temática de juego y diseño de carta.",
    type: "code",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Vega8991/Kings-of-gambling",
    year: 2025,
  },
  {
    id: 4,
    title: "Raw Genius",
    description: "Proyecto personal de desarrollo web con identidad visual propia.",
    type: "code",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Dbeneito/Raw-Genius",
    year: 2024,
  },
  {
    id: 5,
    title: "New Time",
    description: "Pieza de diseño gráfico con estética editorial y tipografía expresiva.",
    type: "design",
    tags: ["Diseño Gráfico", "Tipografía", "Editorial"],
    demo: "https://www.instagram.com/p/DOv9oj4DDk-/",
    year: 2025,
  },
  {
    id: 6,
    title: "D.Valentino",
    description: "Identidad visual y campaña gráfica de moda con dirección de arte propia.",
    type: "design",
    tags: ["Branding", "Moda", "Art Direction"],
    demo: "https://www.instagram.com/p/DUq6ja_DL-H/?img_index=1",
    year: 2025,
  },
  {
    id: 7,
    title: "Abuelito",
    description: "Proyecto de diseño con narrativa visual y tratamiento fotográfico.",
    type: "design",
    tags: ["Diseño Gráfico", "Fotografía", "Narrativa"],
    demo: "https://www.instagram.com/p/DHJhGUTIp9s/",
    year: 2025,
  },
  {
    id: 8,
    title: "Snake",
    description: "Pieza gráfica con concepto visual fuerte y composición experimental.",
    type: "design",
    tags: ["Diseño Gráfico", "Composición", "Experimental"],
    demo: "https://www.instagram.com/p/DGTfTEsIoY-/",
    year: 2024,
  },
  {
    id: 9,
    title: "Movil",
    description: "Diseño de pieza gráfica para formato móvil con identidad de marca.",
    type: "design",
    tags: ["Diseño Gráfico", "Mobile", "Branding"],
    demo: "https://www.instagram.com/p/DHJhV24oMhk/",
    year: 2024,
  },
];

export const desktopItems = [
  { id: 1,  label: "Sad-Travel",       x: 8,  y: 8,  size: 75, type: 'code',   url: 'https://github.com/Dbeneito/Sad-Travel' },
  { id: 2,  label: "Mrs-Roverto",      x: 65, y: 5,  size: 70, type: 'code',   url: 'https://github.com/Dbeneito/Mrs_Roverto' },
  { id: 3,  label: "Kings-of-gambling",x: 4,  y: 38, size: 65, type: 'code',   url: 'https://github.com/Vega8991/Kings-of-gambling' },
  { id: 4,  label: "Raw-Genius",       x: 72, y: 25, size: 75, type: 'code',   url: 'https://github.com/Dbeneito/Raw-Genius' },
  { id: 5,  label: "NewTime",          x: 18, y: 62, size: 68, type: 'design', url: 'https://www.instagram.com/p/DOv9oj4DDk-/' },
  { id: 6,  label: "D.Valentino",      x: 60, y: 55, size: 68, type: 'design', url: 'https://www.instagram.com/p/DUq6ja_DL-H/?img_index=1' },
  { id: 7,  label: "Abuelito",         x: 36, y: 10, size: 72, type: 'design', url: 'https://www.instagram.com/p/DHJhGUTIp9s/' },
  { id: 8,  label: "Snake",            x: 80, y: 48, size: 60, type: 'design', url: 'https://www.instagram.com/p/DGTfTEsIoY-/' },
  { id: 9,  label: "Movil",            x: 45, y: 65, size: 65, type: 'design', url: 'https://www.instagram.com/p/DHJhV24oMhk/' },
];