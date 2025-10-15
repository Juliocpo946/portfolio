import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';
import TypingEffect from './TypingEffect';

const Footer = () => {
  return (
    <footer className="relative py-10 text-white text-center">
      <div className="absolute inset-0 header-gradient animate-gradientBackground z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent z-0"></div>
      <div className="container mx-auto relative z-10 flex flex-col items-center">
        <TypingEffect className="pt-5" />
        <div className="flex justify-center space-x-6 py-6">
            <a href="https://github.com/Juliocpo946" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary-200)]">
              <FaGithub size={28} />
            </a>
            <a href="https://www.linkedin.com/in/tu-usuario/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary-200)]">
              <FaLinkedin size={28} />
            </a>
            <a href="mailto:juliocesarp6273@gmail.com" className="hover:text-[var(--color-primary-200)]">
              <IoMail size={28} />
            </a>
        </div>
        <div className="pt-8">
          <p>&copy; 2025 Julio César Pérez Ortiz</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;