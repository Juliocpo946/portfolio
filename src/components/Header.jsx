import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Header = () => {
  const { socials } = portfolioData;

  return (
    <header className="bg-primary-dark/80 backdrop-blur-sm text-primary-light p-4 fixed top-0 left-0 w-full z-50 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold hover:text-accent-blue transition-colors">
          {portfolioData.name}
        </a>
        <div className="hidden md:flex items-center space-x-6 text-lg">
          <a href="#about" className="hover:text-accent-blue transition-colors">Sobre mí</a>
          <a href="#education" className="hover:text-accent-blue transition-colors">Educación</a>
          <a href="#experience" className="hover:text-accent-blue transition-colors">Experiencia</a>
          <a href="#projects" className="hover:text-accent-blue transition-colors">Proyectos</a>
          <a href="#contact" className="hover:text-accent-blue transition-colors">Contacto</a>
        </div>
        <div className="flex items-center space-x-4">
            <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-accent-blue transition-colors"><FaGithub /></a>
            <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-accent-blue transition-colors"><FaLinkedin /></a>
            <a href={socials.email} className="text-2xl hover:text-accent-blue transition-colors"><FaEnvelope /></a>
        </div>
      </nav>
    </header>
  );
};

export default Header;