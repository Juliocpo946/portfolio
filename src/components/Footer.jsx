import React from 'react';
import uxRamirezLogo from '../assets/logos/uxRamirezLogo.png';
import { FaFacebook, FaInstagram, FaBehance, FaDribbble, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="relative py-10 text-white text-center">
      <div className="absolute inset-0 header-gradient animate-gradientBackground z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent z-0"></div>
      <div className="container mx-auto relative z-10">
        <img src={uxRamirezLogo} alt="UX Ramirez Logo" className="w-64 mx-auto pt-5"/>
        <p className="text-lg font-light mt-2">Your journey to better designs starts now...</p>
        <div className="flex justify-center space-x-6 py-4">
            <a href="https://facebook.com/uxramirez/" className="hover:text-primary-200"><FaFacebook size={28} /></a>
            <a href="https://instagram.com/ux_ramirez/" className="hover:text-primary-200"><FaInstagram size={28} /></a>
            <a href="https://www.behance.net/ux_ramirez" className="hover:text-primary-200"><FaBehance size={28} /></a>
            <a href="https://dribbble.com/ux_ramirez" className="hover:text-primary-200"><FaDribbble size={28} /></a>
            <a href="https://github.com/UX-Ramirez" className="hover:text-primary-200"><FaGithub size={28} /></a>
        </div>
        <div className="pt-10">
          <p>&copy; Copyright 2025 Abril Ramirez</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;