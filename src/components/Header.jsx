import React from 'react';
import profilePic from '../assets/images/profile-pic.png';
import { FaFacebook, FaInstagram, FaBehance, FaDribbble, FaGithub } from 'react-icons/fa';

const Header = () => {
  return (
    <header id="home" className="relative h-[850px] overflow-hidden">
      <div className="absolute inset-0 header-gradient animate-gradientBackground"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
      
      <div className="container mx-auto h-full flex items-center relative z-10 text-white px-4">
        <div className="w-full md:w-7/12 pt-20">
          <h1 className="text-5xl md:text-6xl font-bold mt-5">Hi, my name is Abril Ramirez</h1>
          
          <div className="py-4 flex space-x-4">
            <a href="https://facebook.com/uxramirez/" className="hover:text-primary-200"><FaFacebook size={32} /></a>
            <a href="https://instagram.com/ux_ramirez/" className="hover:text-primary-200"><FaInstagram size={32} /></a>
            <a href="https://www.behance.net/ux_ramirez" className="hover:text-primary-200"><FaBehance size={32} /></a>
            <a href="https://dribbble.com/ux_ramirez" className="hover:text-primary-200"><FaDribbble size={32} /></a>
            <a href="https://github.com/UX-Ramirez" className="hover:text-primary-200"><FaGithub size={32} /></a>
          </div>

          <p className="text-xl text-primary-200">And I’m a Jr. UI/UX Designer</p>
          <p className="text-lg mt-2">Graduated in Computer Systems Engineer, I'm starting my journey on web design and UI/UX world. Actually, I’m focused on landing page and web design.</p>
          
          <div className="mt-6">
            <a href="#contact" className="btn-primary-gradient px-8 py-3 rounded-md mr-4">Contact</a>
            <a href="#services" className="border border-white text-white px-8 py-3 rounded-md">Services</a>
          </div>
        </div>
        
        <img src={profilePic} className="absolute bottom-0 right-20 w-48 rounded-full pt-3 hidden lg:block" alt="Profile"/>
      </div>
    </header>
  );
};

export default Header;