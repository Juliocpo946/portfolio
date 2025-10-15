import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import TypingEffect from './TypingEffect';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const navLinks = [
    { href: '#about', text: 'Sobre Mí' },
    { href: '#experience', text: 'Experiencia' },
    { href: '#education', text: 'Educación' },
    { href: '#recent', text: 'Proyectos' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-60 p-4 transition-all duration-300 ease-in-out ${isScrolled ? 'bg-[var(--color-primary-darkest)]/80 backdrop-blur-sm' : 'bg-transparent'}`}>
        <div className="container mx-auto flex justify-between items-center">
          <a href="#home" onClick={handleLinkClick}>
            <TypingEffect className="w-48" />
          </a>
          
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map(link => (
              <a key={link.href} href={link.href} className="text-white hover:text-[var(--color-primary-100)] transition-colors">{link.text}</a>
            ))}
            <a href="#contact" className="btn-primary-gradient px-6 py-2 rounded-md">Contacto</a>
          </div>

          <button className="lg:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </nav>

      <div className={`lg:hidden fixed top-0 left-0 w-full h-full bg-[var(--color-primary-darkest)] transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-50 flex items-center justify-center`}>
        <div className="flex flex-col items-center justify-center h-full space-y-8">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-white text-2xl hover:text-[var(--color-primary-100)] transition-colors" onClick={handleLinkClick}>
              {link.text}
            </a>
          ))}
          <a href="#contact" className="btn-primary-gradient px-8 py-3 rounded-md text-xl" onClick={handleLinkClick}>
            Contacto
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;