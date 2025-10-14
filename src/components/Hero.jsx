import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Hero = () => {
  const { hero } = portfolioData;

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-primary-dark via-blue-900 to-blue-800 text-white flex items-center pt-20">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
          <h1 className="text-5xl lg:text-7xl font-extrabold leading-tight mb-4">
            {hero.title}
          </h1>
          <p className="text-lg lg:text-xl text-blue-200 mb-8">
            {hero.description}
          </p>
          <a
            href="#contact"
            className="bg-accent-blue text-primary-dark font-bold py-3 px-8 rounded-full hover:bg-blue-200 transition-all duration-300 shadow-lg transform hover:scale-105"
          >
            Contáctame
          </a>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img
            src={hero.profileImage}
            alt="Foto de perfil"
            className="w-3/4 md:w-full max-w-sm lg:max-w-md rounded-full border-4 border-blue-700 shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;