import { Moon, Sun, Globe } from 'lucide-react';

const Navbar = ({ t, setView, lang, setLang, darkMode, setDarkMode }) => {
  return (
    <nav className="fixed top-0 w-full z-40 px-6 md:px-12 py-6 flex justify-between items-center mix-blend-exclusion text-white backdrop-blur-sm md:backdrop-blur-none">
      <div onClick={() => setView('home')} className="flex flex-col cursor-pointer group">
        <span className="font-mono text-xs font-bold tracking-widest uppercase group-hover:text-blue-400 transition-colors">Julio César</span>
        <span className="text-[10px] text-neutral-400 uppercase tracking-widest hidden md:block">{t.nav.role} // 2025</span>
      </div>

      <div className="flex items-center gap-6">
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