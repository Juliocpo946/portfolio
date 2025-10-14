import React from 'react';
import uxRamirezLogo from '../assets/logos/uxRamirezLogo.png';
import { FaBars } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-6 transition-all duration-500 ease-in-out bg-transparent">
      <div className="container mx-auto flex justify-between items-center">
        <a href="#home">
          <img src={uxRamirezLogo} alt="UX Ramirez Logo" className="w-48" />
        </a>
        <div className="hidden lg:flex items-center space-x-8">
          <a href="#about" className="text-white hover:text-primary-100 transition-colors">About</a>
          <a href="#services" className="text-white hover:text-primary-100 transition-colors">Services</a>
          <a href="#recent" className="text-white hover:text-primary-100 transition-colors">Recent Work</a>
          <a href="#contact" className="btn-primary-gradient px-6 py-2 rounded-md">Contact</a>
        </div>
        <button className="lg:hidden text-white">
          <FaBars size={24} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;