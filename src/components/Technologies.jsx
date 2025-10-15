import React from 'react';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaPython, FaGitAlt, FaGithub, FaAws, FaDocker } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiSqlite, SiMongodb, SiVercel, SiFirebase, SiPostman, SiFastapi, SiExpress } from "react-icons/si";

const technologies = [
  { name: 'JavaScript', icon: <FaJs size={50} /> },
  { name: 'Python', icon: <FaPython size={50} /> },
  { name: 'Node.js', icon: <FaNodeJs size={50} /> },
  { name: 'Express', icon: <SiExpress size={50} /> },
  { name: 'FastAPI', icon: <SiFastapi size={50} /> },
  { name: 'React', icon: <FaReact size={50} /> },
  { name: 'HTML5', icon: <FaHtml5 size={50} /> },
  { name: 'CSS3', icon: <FaCss3Alt size={50} /> },
  { name: 'Tailwind CSS', icon: <SiTailwindcss size={50} /> },
  { name: 'MySQL', icon: <SiMysql size={50} /> },
  { name: 'MongoDB', icon: <SiMongodb size={50} /> },
  { name: 'Git', icon: <FaGitAlt size={50} /> },
  { name: 'GitHub', icon: <FaGithub size={50} /> },
  { name: 'AWS', icon: <FaAws size={50} /> },
  { name: 'Docker', icon: <FaDocker size={50} /> },
  { name: 'Vercel', icon: <SiVercel size={50} /> },
];

const Technologies = () => {
  return (
    <section id="technologies" className="py-20">
      <div className="container mx-auto my-12 px-8 lg:px-24">
        <div className="grid lg:grid-cols-3 gap-10 items-center">
          <div className="lg:col-span-1">
            <h4 className="text-lg">Habilidades</h4>
            <h2 className="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-200 to-white mt-2">¿En qué herramientas me especializo?</h2>
            <p className="mt-4">
              Aquí comparto las herramientas que utilizo para hacer las cosas realidad. Desde el diseño hasta el desarrollo, estas son las plataformas que me ayudan a dar vida a mis ideas.
            </p>
          </div>
          <div className="lg:col-span-2">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {technologies.map((tech) => (
                <div key={tech.name} className="bg-[#2b2b2b] border border-[#414141] rounded-lg p-4 flex flex-col items-center justify-center h-32 hover:bg-[#242424] hover:border-[var(--color-accent)] transition-colors">
                  <div className="text-[var(--color-primary-200)]">{tech.icon}</div>
                  <p className="mt-2">{tech.name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;