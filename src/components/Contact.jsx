import React from 'react';
import { portfolioData } from '../data/portfolioData';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
  const { socials } = portfolioData;

  return (
    <section id="contact" className="py-20 bg-blue-50 text-center">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-primary-dark mb-4">Contacto</h2>
        <p className="text-lg text-gray-700 mb-8">
          Si estás interesado en mi trabajo o tienes alguna pregunta, no dudes en contactarme.
        </p>
        <div className="flex justify-center space-x-6">
          <a href={socials.github} target="_blank" rel="noopener noreferrer" className="text-4xl text-primary-dark hover:text-blue-600 transition-colors"><FaGithub /></a>
          <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-4xl text-primary-dark hover:text-blue-600 transition-colors"><FaLinkedin /></a>
          <a href={socials.email} className="text-4xl text-primary-dark hover:text-blue-600 transition-colors"><FaEnvelope /></a>
        </div>
      </div>
    </section>
  );
};

export default Contact;