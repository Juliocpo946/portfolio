import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useSpring, AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import HomeView from './views/HomeView';
import AllProjectsView from './views/AllProjectsView';
import ProjectDetailsView from './views/ProjectDetailsView';
import { content } from './data/content';

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [lang, setLang] = useState('en');
  const [view, setView] = useState('home'); 
  const [selectedProject, setSelectedProject] = useState(null);
  
  const t = content[lang];
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });

  useEffect(() => {
    if (darkMode) document.documentElement.classList.add('dark');
    else document.documentElement.classList.remove('dark');
  }, [darkMode]);

  useEffect(() => {
     window.scrollTo(0, 0);
  }, [view]);

  const handleProjectClick = (project) => {
     setSelectedProject(project);
     setView('detail');
  };

  return (
    <div ref={containerRef} className={`min-h-screen font-sans transition-colors duration-700 selection:bg-blue-500 selection:text-white ${darkMode ? 'bg-[#0a0a0a] text-neutral-200' : 'bg-[#e5e5e5] text-neutral-900'}`}>
      
      {view !== 'detail' && <motion.div className="fixed top-0 left-0 right-0 h-1 bg-blue-500 origin-left z-50 mix-blend-exclusion" style={{ scaleX }} />}

      {view !== 'detail' && (
        <Navbar 
            t={t} 
            setView={setView} 
            lang={lang} 
            setLang={setLang} 
            darkMode={darkMode} 
            setDarkMode={setDarkMode} 
        />
      )}

      <AnimatePresence mode="wait">
        {view === 'home' && (
           <HomeView key="home" t={t} setView={setView} handleProjectClick={handleProjectClick} />
        )}
        {view === 'all' && (
           <AllProjectsView key="all" t={t} setView={setView} handleProjectClick={handleProjectClick} />
        )}
        {view === 'detail' && (
           <ProjectDetailsView key="detail" project={selectedProject} t={t} setView={setView} />
        )}
      </AnimatePresence>

    </div>
  );
}