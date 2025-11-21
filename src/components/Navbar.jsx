import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Moon, Sun, Globe } from 'lucide-react';

const Navbar = ({ t, lang, setLang, darkMode, setDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 px-6 md:px-12 py-6 flex justify-between items-center transition-all duration-500 
        ${scrolled 
          ? 'bg-black/30 dark:bg-black/50 backdrop-blur-md border-b border-white/5 py-4' 
          : 'bg-transparent border-transparent py-6'
        }`}
    >
      
      <div onClick={() => navigate('/')} className="flex flex-col cursor-pointer group">
        <span className="font-mono text-xs font-bold tracking-widest uppercase text-white group-hover:text-blue-400 transition-colors">
          Julio César
        </span>
        <span className="text-[10px] text-neutral-300 uppercase tracking-widest hidden md:block">
          {t.nav.role} // 2025
        </span>
      </div>

      <div className="flex items-center gap-6 text-white">
        <button onClick={() => setLang(lang === 'en' ? 'es' : 'en')} className="text-xs font-mono font-bold hover:text-blue-400 transition-colors flex items-center gap-2">
          <Globe size={14} /> {lang.toUpperCase()}
        </button>
        <button onClick={() => setDarkMode(!darkMode)} className="hover:rotate-90 transition-transform duration-500">
          {darkMode ? <Sun size={18} /> : <Moon size={18} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;