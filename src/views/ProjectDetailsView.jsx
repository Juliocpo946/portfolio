import { motion } from 'framer-motion';
import { X, ExternalLink, Layers } from 'lucide-react';

const ProjectDetailsView = ({ project, t, setView }) => {
  if (!project) return null;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-white dark:bg-[#0a0a0a] z-50 absolute top-0 left-0 w-full">
      <div className="fixed top-6 right-6 md:right-12 z-50">
         <button onClick={() => setView('all')} className="p-3 rounded-full bg-neutral-100 dark:bg-neutral-900 hover:rotate-90 transition-transform"><X size={20} /></button>
      </div>

      <motion.div layoutId={`image-${project.id}`} className={`w-full h-[60vh] md:h-[70vh] ${project.imgPlaceholder} relative`}>
         <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6 md:p-12">
            <motion.h1 layoutId={`title-${project.id}`} className="text-5xl md:text-8xl font-light uppercase tracking-tighter text-white">{project.title}</motion.h1>
         </div>
      </motion.div>

      <div className="px-6 md:px-12 py-16 max-w-6xl mx-auto">
         <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4 space-y-8">
               <div className="border-t border-neutral-300 dark:border-neutral-800 pt-4">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">{t.projects.role}</h3>
                  <p className="text-xl">{project.role}</p>
               </div>
               <div className="border-t border-neutral-300 dark:border-neutral-800 pt-4">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">{t.projects.client}</h3>
                  <p className="text-xl">{project.client}</p>
               </div>
               <div className="border-t border-neutral-300 dark:border-neutral-800 pt-4">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">{t.projects.year}</h3>
                  <p className="text-xl">{project.year}</p>
               </div>
               <div className="border-t border-neutral-300 dark:border-neutral-800 pt-4">
                   <button className="w-full bg-blue-600 text-white py-4 uppercase tracking-widest text-xs font-bold flex justify-center items-center gap-2 hover:bg-blue-700 transition-colors">
                      {t.projects.visit} <ExternalLink size={16} />
                   </button>
               </div>
            </div>

            <div className="md:col-span-8">
               <p className="text-2xl md:text-3xl font-light leading-relaxed mb-12">{project.desc}</p>
               <p className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-12">{project.longDesc}</p>
               
               <div className="mb-12">
                  <h3 className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6 flex items-center gap-2"><Layers size={14} /> {t.projects.stack}</h3>
                  <div className="flex flex-wrap gap-3">
                     {project.stack.map(tech => (
                        <span key={tech} className="px-4 py-2 border border-neutral-300 dark:border-neutral-700 text-sm uppercase">{tech}</span>
                     ))}
                  </div>
               </div>

               <div className="grid grid-cols-1 gap-8 mt-16">
                  <div className="w-full aspect-video bg-neutral-200 dark:bg-neutral-800 relative flex items-center justify-center">
                      <span className="font-mono text-xs uppercase tracking-widest opacity-50">[ Project Detail Shot 01 ]</span>
                  </div>
                  <div className="grid grid-cols-2 gap-8">
                     <div className="w-full aspect-square bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center"><span className="font-mono text-xs uppercase tracking-widest opacity-50">[ Mobile View ]</span></div>
                     <div className="w-full aspect-square bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center"><span className="font-mono text-xs uppercase tracking-widest opacity-50">[ UI Kit ]</span></div>
                  </div>
               </div>
            </div>
         </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetailsView;