export const content = {
  en: {
    nav: { role: "Software Engineer", back: "Back", all: "All Projects" },
    hero: {
      subtitle: "Full Stack & Cloud Architect",
      desc: "I build scalable digital ecosystems with clean code and pixel-perfect aesthetics. Currently innovating at",
      cta: "Download Resume"
    },
    sections: {
      exp: "Experience / Timeline",
      work: "Selected Works",
      tech: "Tech Stack & Certs",
      contact: "Let's Talk"
    },
    projects: {
      viewAll: "View All Projects",
      hover: "Explore",
      filterAll: "All",
      role: "Role",
      client: "Client",
      year: "Year",
      stack: "Tech Stack",
      visit: "Visit Live Site",
      next: "Next Project"
    },
    jobs: [
      {
        role: "Front-End Developer",
        company: "GIINTAPE INNOVAHUE",
        date: "Nov 2025 - Present",
        desc: "Building modern interfaces and collaborating on technological innovation projects using Agile methodologies."
      },
      {
        role: "Front-End Developer",
        company: "Weblabor",
        date: "Aug 2024",
        desc: "UI development for Sportso platform. Created reusable responsive components using Alpine.js and Tailwind."
      },
      {
        role: "Full Stack Developer",
        company: "CYBAC TI",
        date: "Mar - Apr 2024",
        desc: "Designed a web app with admin panel in Laravel. Implemented security modules and content management."
      }
    ]
  },
  es: {
    nav: { role: "Ingeniero de Software", back: "Volver", all: "Proyectos" },
    hero: {
      subtitle: "Arquitecto Cloud & Full Stack",
      desc: "Construyo ecosistemas digitales escalables con código limpio y estética perfecta. Actualmente innovando en",
      cta: "Descargar CV"
    },
    sections: {
      exp: "Experiencia / Línea de Tiempo",
      work: "Proyectos Seleccionados",
      tech: "Tecnologías y Certificaciones",
      contact: "Hablemos"
    },
    projects: {
      viewAll: "Ver Todos los Proyectos",
      hover: "Explorar",
      filterAll: "Todos",
      role: "Rol",
      client: "Cliente",
      year: "Año",
      stack: "Tecnologías",
      visit: "Ver Sitio",
      next: "Siguiente Proyecto"
    },
    jobs: [
      {
        role: "Desarrollador Front-End",
        company: "GIINTAPE INNOVAHUE",
        date: "Nov 2025 - Presente",
        desc: "Construcción de interfaces modernas y colaboración en proyectos de innovación tecnológica bajo metodologías ágiles."
      },
      {
        role: "Desarrollador Front-End",
        company: "Weblabor",
        date: "Ago 2024",
        desc: "Desarrollo de UI para plataforma Sportso. Creación de componentes reutilizables con Alpine.js y Tailwind."
      },
      {
        role: "Desarrollador Full Stack",
        company: "CYBAC TI",
        date: "Mar - Abr 2024",
        desc: "Diseño de web app con panel administrativo en Laravel. Implementación de módulos de seguridad."
      }
    ]
  }
};

export const skills = [
  "JavaScript", "Python", "Node.js", "Express", "FastAPI", 
  "React", "Next.js", "HTML5", "CSS3", "Tailwind CSS", 
  "MySQL", "MongoDB", "Git", "GitHub", "AWS", "Docker", "Vercel"
];

export const certifications = [
  { title: "AWS Cloud Operations", org: "AWS Academy", year: "2025" },
  { title: "Operating Systems Basics", org: "Cisco", year: "2025" },
  { title: "Intro to Cybersecurity", org: "Cisco", year: "2025" },
  { title: "Google UX Design", org: "Google / Coursera", year: "2024" },
  { title: "AWS Cloud Architecting", org: "AWS Academy", year: "2024" },
  { title: "Networking Basics", org: "Cisco", year: "2024" },
  { title: "Network Addressing", org: "Cisco", year: "2024" },
  { title: "AWS Cloud Foundations", org: "AWS Academy", year: "2022" },
];

export const projectsData = [
  { 
    id: 1,
    title: "Deliv App", 
    cat: "UI/UX", 
    size: "tall", 
    role: "Lead Designer",
    year: "2024",
    client: "Concept",
    stack: ["Figma", "Adobe XD", "Prototyping"],
    desc: "A minimalist food delivery application focused on speed and visual clarity.",
    longDesc: "Deliv App redefines the food delivery experience by stripping away clutter. We focused on high-contrast imagery and bold typography.",
    imgPlaceholder: "bg-gradient-to-br from-blue-900 to-slate-900" 
  },
  { 
    id: 2,
    title: "Xbox Concept", 
    cat: "Web", 
    size: "wide",
    role: "Frontend Dev",
    year: "2025",
    client: "Personal Project",
    stack: ["React", "GSAP", "Tailwind"],
    desc: "A high-performance landing page concept for Xbox, featuring scroll-triggered animations.",
    longDesc: "This project explores the boundaries of web performance and animation. Using GSAP for timeline management.",
    imgPlaceholder: "bg-neutral-800" 
  },
  { 
    id: 3,
    title: "Smile Dental", 
    cat: "Client", 
    size: "square",
    role: "Full Stack Dev",
    year: "2024",
    client: "Smile Dental Clinic",
    stack: ["Next.js", "PostgreSQL", "Framer Motion"],
    desc: "Corporate website for a dental clinic with an integrated appointment booking system.",
    longDesc: "Smile Dental required a trustworthy and clean digital presence. We built a custom booking engine.",
    imgPlaceholder: "bg-white border border-neutral-200" 
  },
  { 
    id: 4,
    title: "Analytics Dash", 
    cat: "SaaS", 
    size: "square",
    role: "Frontend Architect",
    year: "2024",
    client: "Internal Tool",
    stack: ["React", "D3.js", "Node.js"],
    desc: "Real-time data visualization dashboard for monitoring server health.",
    longDesc: "Designed for DevOps teams, this dashboard handles high-frequency data updates via WebSockets.",
    imgPlaceholder: "bg-neutral-900 border border-neutral-800" 
  },
  { 
    id: 5,
    title: "Sportso Platform", 
    cat: "App", 
    size: "tall",
    role: "Frontend Developer",
    year: "2024",
    client: "Weblabor",
    stack: ["Alpine.js", "Laravel", "Tailwind"],
    desc: "Interactive sports management platform connecting athletes with local leagues.",
    longDesc: "Worked on the core frontend architecture, ensuring component reusability across different sports modules.",
    imgPlaceholder: "bg-blue-600" 
  }
];