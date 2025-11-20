import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import RevealSection from '../components/ui/RevealSection'; // Importamos el componente de animación

const AllProjectsView = ({ t, setView, handleProjectClick }) => {
  const [filter, setFilter] = useState('All');
  const projectsData = t.projectsList; 
  const categories = ['All', ...new Set(projectsData.map(p => p.cat))];
  const filteredProjects = filter === 'All' ? projectsData : projectsData.filter(p => p.cat === filter);

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }} 
      animate={{ opacity: 1, y: 0 }} 
      exit={{ opacity: 0, y: 50 }} 
      className="pt-32 px-6 md:px-12 pb-20 min-h-screen"
    >
       {/* Header y Filtros con animación */}
       <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-neutral-300 dark:border-neutral-800 pb-8">
          <div>
             <RevealSection type="slide-right">
               <button onClick={() => setView('home')} className="flex items-center gap-2 text-xs uppercase tracking-widest mb-6 hover:text-blue-500 transition-colors">
                 <ArrowLeft size={14} /> {t.nav.back}
               </button>
             </RevealSection>
             <RevealSection type="slide-right" delay={0.1}>
               <h1 className="text-5xl md:text-8xl font-light uppercase tracking-tighter">{t.nav.all}</h1>
             </RevealSection>
          </div>
          
          <div className="flex gap-4 mt-8 md:mt-0 overflow-x-auto pb-2 md:pb-0">
             {categories.map((cat, i) => (
                <RevealSection key={cat} delay={0.2 + (i * 0.05)} type="scale">
                  <button 
                    onClick={() => setFilter(cat)}
                    className={`px-4 py-2 text-xs uppercase tracking-widest border ${filter === cat ? 'bg-black text-white dark:bg-white dark:text-black border-transparent' : 'border-neutral-400 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-800'} transition-all`}
                  >
                    {cat === 'All' ? t.projects.filterAll : cat}
                  </button>
                </RevealSection>
             ))}
          </div>
       </div>

       {/* Grid de Proyectos */}
       <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project, i) => (
               <motion.div 
                  key={project.id} 
                  layout 
                  initial={{ opacity: 0, scale: 0.9 }} 
                  animate={{ opacity: 1, scale: 1 }} 
                  exit={{ opacity: 0, scale: 0.9 }} 
                  transition={{ duration: 0.3 }}
               >
                  {/* Envolvemos cada tarjeta en RevealSection para el efecto cascada al cargar */}
                  <RevealSection type="blur" delay={i * 0.1}>
                    <ProjectCard project={project} label={t.projects.hover} onClick={handleProjectClick} />
                  </RevealSection>
               </motion.div>
            ))}
          </AnimatePresence>
       </motion.div>
    </motion.div>
  );
};

export default AllProjectsView;