import React, { useState, useEffect, useRef } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import AllProjectsView from './views/AllProjectsView';
import ProjectDetailsView from './views/ProjectDetailsView';
import { content } from './data/content';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState('en');
  
  const t = content[lang];
  const containerRef = useRef(null);
  const location = useLocation();
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  useEffect(() => {
     window.scrollTo(0, 0);
  }, [location.pathname]);

  const showNavbar = !location.pathname.startsWith('/project/');

  return (
    <div ref={containerRef} className={`min-h-screen font-sans transition-colors duration-700 selection:bg-blue-500 selection:text-white ${darkMode ? 'bg-[#0a0a0a] text-neutral-200' : 'bg-[#e5e5e5] text-neutral-900'}`}>
      
      {showNavbar && <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50 mix-blend-exclusion" style={{ scaleX }} />}

      {showNavbar && (
        <Navbar 
            t={t} 
            lang={lang} 
            setLang={setLang} 
            darkMode={darkMode} 
            setDarkMode={setDarkMode} 
        />
      )}

      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
           <Route path="/" element={<HomeView t={t} />} />
           <Route path="/all-projects" element={<AllProjectsView t={t} />} />
           <Route path="/project/:id" element={<ProjectDetailsView t={t} />} />
        </Routes>
      </AnimatePresence>

    </div>
  );
}