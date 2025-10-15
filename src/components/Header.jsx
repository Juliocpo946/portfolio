import React from 'react';
import { FaGithub, FaLinkedin, FaDownload, FaUserAstronaut } from 'react-icons/fa';
import { IoMail } from 'react-icons/io5';

const Header = () => {
  return (
    <header id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 header-gradient animate-gradientBackground"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent"></div>
      
      <div className="container mx-auto h-full flex items-center justify-center relative z-10 text-white px-6 md:px-12 pt-24">
        <div className="flex flex-col-reverse lg:flex-row items-center justify-center w-full gap-16">
    
          <div className="w-full lg:w-8/12 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold">Hola, mi nombre es Julio César</h1>
            
            <p className="text-xl text-[var(--color-primary-200)] mt-4">Desarrollador Fullstack</p>
            <p className="text-lg mt-2 max-w-xl mx-auto lg:mx-0">
              Desarrollador Fullstack con experiencia en diseño y desarrollo de aplicaciones web completas. Especializado en crear APIs REST, interfaces dinámicas y sistemas escalables y robustos.
            </p>

            <div className="py-5 flex space-x-6 justify-center lg:justify-start">
              <a href="https://github.com/Juliocpo946" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary-200)]">
                <FaGithub size={32} />
              </a>
              <a href="https://www.linkedin.com/in/tu-usuario/" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--color-primary-200)]">
                <FaLinkedin size={32} />
              </a>
               <a href="mailto:juliocesarp6273@gmail.com" className="hover:text-[var(--color-primary-200)]">
                <IoMail size={32} />
              </a>
            </div>
            
            <div className="mt-4 flex items-center justify-center lg:justify-start">
              <a href="/JulioCesarPerezOrtiz_CV.pdf" download="JulioCesarPerezOrtiz_CV.pdf" className="flex items-center gap-2 border border-white text-white px-8 py-3 rounded-md">
                <FaDownload />
                <span>Descargar CV</span>
              </a>
            </div>
          </div>
          
          <div className="w-full lg:w-4/12 flex justify-center lg:justify-start">
             <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-[var(--color-primary-dark)] shadow-2xl flex items-center justify-center">
                <FaUserAstronaut className="text-[10rem] lg:text-[12rem] text-[var(--color-accent)]" />
             </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;