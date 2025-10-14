import React from 'react';
import { portfolioData } from '../data/portfolioData';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary-dark text-center py-6 text-gray-400">
      <div className="container mx-auto">
        <p>&copy; {currentYear} {portfolioData.name}. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;