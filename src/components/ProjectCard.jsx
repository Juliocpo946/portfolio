import { motion } from 'framer-motion';
import { ArrowUpRight, ChevronRight } from 'lucide-react';

const ProjectCard = ({ project, label, onClick, showCategory = true }) => {
  const aspectRatio = project.size === 'tall' ? 'aspect-[3/4]' : project.size === 'wide' ? 'aspect-[16/9]' : 'aspect-square';
  
  return (
    <motion.div 
      layoutId={`project-${project.id}`}
      onClick={() => onClick(project)}
      whileHover="hover"
      className={`relative w-full ${aspectRatio} bg-neutral-100 dark:bg-neutral-900 overflow-hidden group cursor-pointer border border-transparent hover:border-neutral-500/30 transition-colors`}
    >
       {/* IMAGEN PLACEHOLDER */}
       <motion.div layoutId={`image-${project.id}`} className={`absolute inset-0 ${project.imgPlaceholder} transition-transform duration-700 group-hover:scale-105`}>
         <div className="w-full h-full flex flex-col items-center justify-center relative opacity-50">
            <div className="absolute inset-4 border border-white/20" />
            <div className="absolute top-1/2 w-full h-[1px] bg-white/10" />
            <div className="absolute left-1/2 h-full w-[1px] bg-white/10" />
         </div>
       </motion.div>

       {/* Overlay Info */}
       <div className="absolute inset-0 bg-black/20 group-hover:bg-black/60 transition-colors duration-500 flex flex-col justify-between p-6">
          <div className="flex justify-between items-start opacity-0 group-hover:opacity-100 transform -translate-y-4 group-hover:translate-y-0 transition-all duration-500">
             {showCategory && <span className="bg-white text-black text-[10px] font-bold px-2 py-1 uppercase tracking-widest">{project.cat}</span>}
             <ArrowUpRight className="text-white" />
          </div>
          
          <div className="transform translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
             <motion.h3 layoutId={`title-${project.id}`} className="text-2xl md:text-3xl font-light text-white uppercase mb-2">{project.title}</motion.h3>
             <div className="h-[1px] w-0 group-hover:w-full bg-white transition-all duration-700" />
             <p className="text-white/80 text-xs font-mono mt-3 opacity-0 group-hover:opacity-100 transition-opacity delay-100">
               {label} <ChevronRight size={10} className="inline" />
             </p>
          </div>
       </div>
    </motion.div>
  );
};

export default ProjectCard;