import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Download, ArrowUpRight, Plus } from 'lucide-react';
import RevealText from '../components/ui/RevealText';
import RevealSection from '../components/ui/RevealSection';
import MagneticButton from '../components/ui/MagneticButton';
import ProjectCard from '../components/ProjectCard';
import { skills, socialLinks } from '../data/content'; 

const HomeView = ({ t, setView, handleProjectClick }) => {
  const gridRef = useRef(null);
  const { scrollYProgress: gridScroll } = useScroll({ target: gridRef, offset: ["start end", "end start"] });
  
  // Parallax más sutil para que no maree con las nuevas animaciones
  const yCol1 = useTransform(gridScroll, [0, 1], ["0%", "-5%"]);
  const yCol2 = useTransform(gridScroll, [0, 1], ["10%", "-10%"]);
  const yCol3 = useTransform(gridScroll, [0, 1], ["5%", "-5%"]);

  const projectsCol1 = [t.projectsList[0], t.projectsList[1]];
  const projectsCol2 = [t.projectsList[2]];
  const projectsCol3 = [t.projectsList[3], t.projectsList[4]];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      
      {/* HERO */}
      <header className="relative h-screen flex flex-col justify-center px-6 md:px-12 pt-20 overflow-hidden">
        <div className="absolute top-0 right-0 w-[40vw] h-full opacity-10 pointer-events-none border-l border-neutral-500/50 dashed" />
        <div className="z-10 max-w-5xl">
          <div className="overflow-hidden mb-4">
             <motion.p initial={{ x: -50, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className="font-mono text-blue-500 uppercase tracking-[0.3em] text-xs">
               {t.hero.subtitle}
             </motion.p>
          </div>
          <div className="relative">
            <h1 className="text-[12vw] md:text-[130px] leading-[0.85] font-medium tracking-tighter uppercase mix-blend-overlay dark:mix-blend-normal">
              <RevealText delay={0.1}>Julio</RevealText>
              <RevealText delay={0.2}>César</RevealText>
            </h1>
            <motion.div initial={{ width: 0 }} animate={{ width: 200 }} transition={{ delay: 1, duration: 1.5 }} className="h-2 bg-blue-600 mt-4 mb-8" />
          </div>
          <div className="grid md:grid-cols-2 gap-12 mt-12">
             <RevealText delay={0.5}>
               <p className="text-lg md:text-xl font-light leading-relaxed text-neutral-500 dark:text-neutral-400 max-w-md">
                 {t.hero.desc}
               </p>
             </RevealText>
             <div className="flex items-end md:justify-end">
                <a href="/cv.pdf" target="_blank" rel="noopener noreferrer">
                    <MagneticButton className="group border border-neutral-400 dark:border-neutral-600 px-8 py-4 text-xs uppercase tracking-widest flex items-center gap-3 hover:bg-neutral-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all duration-300">
                    {t.hero.cta} <Download size={16} className="group-hover:translate-y-1 transition-transform" />
                    </MagneticButton>
                </a>
             </div>
          </div>
        </div>
      </header>

      <main className="space-y-40 pb-32">
        
        {/* ABOUT ME: Animación lateral encontrada (Título izq, texto der) */}
        <section className="px-6 md:px-12">
           <RevealSection type="slide-right" className="flex items-center gap-4 mb-16 opacity-50">
             <span className="font-mono text-xs">00</span>
             <div className="h-[1px] w-24 bg-current" />
             <h2 className="font-mono text-xs uppercase tracking-widest">{t.sections.about}</h2>
           </RevealSection>
           
           <div className="grid md:grid-cols-12 gap-12 items-start">
              <div className="md:col-span-5">
                <RevealSection type="slide-right" delay={0.2}>
                  <h3 className="text-4xl md:text-5xl font-light uppercase leading-tight mb-8">
                    {t.about.title}
                  </h3>
                </RevealSection>
              </div>
              <div className="md:col-span-7 space-y-8 text-lg font-light text-neutral-600 dark:text-neutral-400 leading-relaxed">
                 <RevealSection type="default" delay={0.3}>
                    <p>{t.about.p1}</p>
                 </RevealSection>
                 <RevealSection type="default" delay={0.4}>
                    <p>{t.about.p2}</p>
                 </RevealSection>
                 <RevealSection type="scale" delay={0.5}>
                   <div className="border-l-2 border-blue-500 pl-6 py-2 italic text-neutral-800 dark:text-neutral-200">
                      "{t.about.quote}"
                   </div>
                 </RevealSection>
              </div>
           </div>
        </section>

        {/* EXPERIENCE: Lista en cascada (Staggered Fade Up) */}
        <section className="px-6 md:px-12">
          <RevealSection type="slide-right">
            <div className="flex items-center gap-4 mb-16 opacity-50">
               <span className="font-mono text-xs">01</span>
               <div className="h-[1px] w-24 bg-current" />
               <h2 className="font-mono text-xs uppercase tracking-widest">{t.sections.exp}</h2>
            </div>
          </RevealSection>
          
          <div className="border-l border-neutral-300 dark:border-neutral-800 ml-2 md:ml-0 pl-8 md:pl-16 space-y-16">
             {t.jobs.map((job, i) => (
               <RevealSection key={i} delay={i * 0.1} type="default">
                 <div className="relative group">
                    <div className="absolute -left-[37px] md:-left-[69px] top-2 w-3 h-3 bg-blue-600 border-2 border-white dark:border-black rounded-none rotate-45 group-hover:rotate-90 transition-transform duration-500" />
                    <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-2 mb-4">
                      <h3 className="text-3xl md:text-4xl font-light uppercase tracking-tight">{job.role}</h3>
                      <span className="font-mono text-xs text-neutral-500 bg-neutral-200 dark:bg-neutral-900 px-2 py-1">{job.date}</span>
                    </div>
                    <div className="grid md:grid-cols-12 gap-8">
                      <div className="md:col-span-4">
                        <span className="text-sm font-bold uppercase text-blue-600 dark:text-blue-400 tracking-wider">{job.company}</span>
                      </div>
                      <div className="md:col-span-8">
                        <p className="text-neutral-600 dark:text-neutral-400 font-light leading-relaxed border-l-2 border-neutral-200 dark:border-neutral-800 pl-6">{job.desc}</p>
                      </div>
                    </div>
                 </div>
               </RevealSection>
             ))}
          </div>
        </section>

        {/* EDUCATION: Tarjetas que crecen (Scale Up) */}
        <section className="px-6 md:px-12">
           <RevealSection type="slide-right">
             <div className="flex items-center gap-4 mb-16 opacity-50">
               <span className="font-mono text-xs">01.5</span>
               <div className="h-[1px] w-24 bg-current" />
               <h2 className="font-mono text-xs uppercase tracking-widest">{t.sections.edu}</h2>
             </div>
           </RevealSection>
           <div className="grid md:grid-cols-2 gap-12">
              {t.education.map((edu, i) => (
                <RevealSection key={i} delay={0.2} type="scale" className="h-full">
                  <div className="border border-neutral-300 dark:border-neutral-800 p-8 bg-neutral-100 dark:bg-neutral-900/50 hover:border-blue-500 transition-colors group h-full">
                     <span className="font-mono text-xs text-blue-600 dark:text-blue-400 block mb-2">{edu.year}</span>
                     <h3 className="text-2xl font-light uppercase mb-1">{edu.degree}</h3>
                     <p className="text-sm font-bold uppercase text-neutral-500 mb-4">{edu.school}</p>
                     <p className="text-neutral-600 dark:text-neutral-400 text-sm font-light leading-relaxed">{edu.desc}</p>
                     <div className="mt-4 pt-4 border-t border-neutral-200 dark:border-neutral-800 text-[10px] uppercase tracking-widest text-neutral-400">
                        {edu.location}
                     </div>
                  </div>
                </RevealSection>
              ))}
           </div>
        </section>

        {/* PROJECTS: Parallax + Aparición suave (Blur reveal) */}
        <section ref={gridRef} className="px-6 md:px-12 min-h-screen overflow-hidden">
          <RevealSection type="slide-right">
            <div className="flex justify-between items-end mb-24">
               <div className="flex items-center gap-4 opacity-50">
                  <span className="font-mono text-xs">02</span>
                  <div className="h-[1px] w-24 bg-current" />
                  <h2 className="font-mono text-xs uppercase tracking-widest">{t.sections.work}</h2>
               </div>
               <span className="hidden md:block font-mono text-[10px] text-neutral-500">SCROLL TO EXPLORE</span>
            </div>
          </RevealSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             <motion.div style={{ y: yCol1 }} className="flex flex-col gap-6">
               {projectsCol1.map((p, i) => (
                 <RevealSection key={p.id} delay={i * 0.2} type="blur">
                   <ProjectCard project={p} label={t.projects.hover} onClick={handleProjectClick} />
                 </RevealSection>
               ))}
             </motion.div>
             
             <motion.div style={{ y: yCol2 }} className="flex flex-col gap-6 pt-0 md:pt-24">
               {projectsCol2.map((p, i) => (
                 <RevealSection key={p.id} delay={0.3} type="blur">
                   <ProjectCard project={p} label={t.projects.hover} onClick={handleProjectClick} />
                 </RevealSection>
               ))}
               
               <div className="aspect-square hidden md:flex items-center justify-center">
                 <RevealSection delay={0.4} type="scale">
                   <MagneticButton onClick={() => setView('all')} className="w-40 h-40 rounded-full border border-neutral-400 dark:border-neutral-600 flex flex-col items-center justify-center gap-2 hover:bg-blue-600 hover:border-blue-600 hover:text-white transition-all duration-500 group">
                      <span className="text-xs font-mono uppercase text-center max-w-[100px]">{t.projects.viewAll}</span>
                      <Plus className="group-hover:rotate-90 transition-transform" />
                   </MagneticButton>
                 </RevealSection>
               </div>
             </motion.div>
             
             <motion.div style={{ y: yCol3 }} className="flex flex-col gap-6 pt-0 lg:pt-12 hidden lg:flex">
               {projectsCol3.map((p, i) => (
                 <RevealSection key={p.id} delay={0.4 + (i * 0.1)} type="blur">
                   <ProjectCard project={p} label={t.projects.hover} onClick={handleProjectClick} />
                 </RevealSection>
               ))}
             </motion.div>
          </div>
          
          <div className="md:hidden mt-12 flex justify-center">
            <RevealSection type="default">
              <button onClick={() => setView('all')} className="border border-current px-8 py-4 text-xs uppercase tracking-widest flex items-center gap-2">
                 {t.projects.viewAll} <ArrowUpRight size={16} />
              </button>
            </RevealSection>
          </div>
        </section>

        {/* SKILLS & CERTS: Contenedor con animación de escala y contenidos en cascada */}
        <section className="px-6 md:px-12">
          <RevealSection type="scale" delay={0.1}>
            <div className="bg-neutral-200 dark:bg-neutral-900 p-8 md:p-16 relative overflow-hidden">
               <div className="absolute -right-20 -top-20 w-64 h-64 border-[20px] border-neutral-300 dark:border-neutral-800 rounded-full opacity-50" />
               <div className="grid lg:grid-cols-2 gap-16 relative z-10">
                  <div>
                     <h3 className="text-2xl font-light uppercase mb-8 flex items-center gap-4"><span className="w-2 h-2 bg-blue-600 block" /> Tech Stack</h3>
                     <div className="flex flex-wrap gap-3">
                        {skills.map((s, i) => (
                          <RevealSection key={i} delay={i * 0.05} type="default" className="inline-block">
                            <span className="px-4 py-2 border border-neutral-400 dark:border-neutral-700 text-xs uppercase tracking-wider cursor-default transition-colors bg-white dark:bg-black/20 inline-block">{s}</span>
                          </RevealSection>
                        ))}
                     </div>
                  </div>
                  <div>
                     <h3 className="text-2xl font-light uppercase mb-8 flex items-center gap-4"><span className="w-2 h-2 bg-blue-600 block" /> Certifications</h3>
                     <div className="space-y-4">
                        {t.certifications.map((c, i) => (
                          <RevealSection key={i} delay={0.2 + (i * 0.1)} type="slide-right">
                            <div className="flex justify-between items-center border-b border-neutral-400/30 pb-3 group cursor-pointer">
                               <span className="uppercase text-sm group-hover:translate-x-2 transition-transform duration-300 line-clamp-1">{c.title}</span>
                               <div className="flex items-center gap-4">
                                  <span className="font-mono text-[10px] text-neutral-500 whitespace-nowrap">{c.org} • {c.year}</span>
                                  <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                               </div>
                            </div>
                          </RevealSection>
                        ))}
                     </div>
                  </div>
               </div>
            </div>
          </RevealSection>
        </section>

        <footer className="px-6 md:px-12 pb-12">
           <div className="border-t-2 border-neutral-800 dark:border-neutral-200 pt-24 flex flex-col xl:flex-row justify-between items-start gap-12">
              <div className="max-w-2xl">
                 <RevealSection type="default">
                   <h2 className="text-5xl md:text-8xl font-light uppercase tracking-tighter leading-[0.9] mb-8">{t.sections.contact}</h2>
                   <a href="mailto:juliocesarp6273@gmail.com" className="text-xl md:text-2xl font-mono text-neutral-500 hover:text-blue-600 transition-colors block mb-12">juliocesarp6273@gmail.com</a>
                 </RevealSection>
              </div>
              <div className="flex flex-col gap-6 items-start xl:items-end">
                 <div className="flex gap-4">
                    {socialLinks.map((social, index) => (
                      <RevealSection key={index} delay={index * 0.1} type="scale">
                        <a 
                          href={social.url} 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="border border-neutral-400 dark:border-neutral-600 px-6 py-3 text-xs uppercase tracking-widest hover:bg-current hover:text-white dark:hover:text-black transition-colors block"
                        >
                          {social.name}
                        </a>
                      </RevealSection>
                    ))}
                 </div>
                 <RevealSection delay={0.3} type="default">
                   <p className="font-mono text-[10px] text-neutral-500 mt-8 xl:text-right uppercase">Original Design by Julio César.<br/>React • Tailwind • Framer Motion<br/>Tuxtla Gutiérrez, MX</p>
                 </RevealSection>
              </div>
           </div>
        </footer>
      </main>
    </motion.div>
  );
};

export default HomeView;