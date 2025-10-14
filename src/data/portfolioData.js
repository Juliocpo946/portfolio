import profilePic from '../assets/images/profile-pic.png';
import project01 from '../assets/images/project01.png';
import project02 from '../assets/images/project02.png';
import project03 from '../assets/images/project03.png';

export const portfolioData = {
  name: "Julio Cesar",
  hero: {
    title: "Diseñador UX/UI & Desarrollador Web",
    description: "Creando interfaces intuitivas y experiencias de usuario memorables desde cero.",
    profileImage: profilePic,
  },
  socials: {
    github: "https://github.com/juliocpo946",
    linkedin: "https://www.linkedin.com/in/tu-usuario/",
    email: "mailto:tu-correo@example.com",
  },
  about: {
    title: "Un poco sobre mí",
    description: "Apasionado por la tecnología y el diseño, con un enfoque en crear soluciones que no solo se vean bien, sino que también sean funcionales y accesibles para todos. Mi objetivo es transformar ideas complejas en productos digitales simples y elegantes."
  },
  education: [
    {
      degree: "Ingeniería en Desarrollo de Software",
      institution: "Nombre de la Universidad",
      period: "2018 - 2023",
      description: "Especialización en arquitectura de software y desarrollo de aplicaciones web."
    },
     {
      degree: "Certificación en Diseño UX/UI",
      institution: "Platzi / Coderhouse",
      period: "2023",
      description: "Curso intensivo sobre principios de diseño, investigación de usuarios y prototipado."
    }
  ],
  experience: [
    {
      role: "Desarrollador Frontend",
      company: "Tech Solutions Inc.",
      period: "Ene 2024 - Presente",
      tasks: [
        "Desarrollo y mantenimiento de componentes reutilizables en React.",
        "Colaboración con el equipo de diseño para implementar interfaces con alta fidelidad.",
        "Optimización del rendimiento y la velocidad de carga de la aplicación."
      ]
    },
    {
      role: "Diseñador UI Junior",
      company: "Creative Minds",
      period: "Jul 2023 - Dic 2023",
      tasks: [
        "Creación de wireframes y prototipos interactivos en Figma.",
        "Diseño de sistemas de diseño y guías de estilo.",
        "Realización de pruebas de usabilidad para validar diseños."
      ]
    }
  ],
  projects: [
    {
      title: "Proyecto Alpha",
      description: "Una aplicación de gestión de tareas construida con el stack MERN.",
      image: project01,
      link: "#"
    },
    {
      title: "Sitio Web Corporativo",
      description: "Rediseño completo de la identidad visual y el sitio web de una startup.",
      image: project02,
      link: "#"
    },
    {
      title: "Plataforma E-learning",
      description: "Diseño de la interfaz y experiencia de usuario para una plataforma educativa.",
      image: project03,
      link: "#"
    }
  ]
};