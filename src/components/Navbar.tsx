import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';

const links = [
  { label: 'Servicios', href: '#servicios' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Proyectos', href: '#galeria' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'FAQ', href: '#faq' },
];

export function Navbar({ onOpenContact }: { onOpenContact: () => void }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white dark:bg-teal-950 shadow-md shadow-teal-900/5 dark:shadow-teal-950/50 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between gap-6">
        {/* Logo */}
        <a href="#" className="flex items-center flex-shrink-0">
          <img src="/logo.png" alt="Uldeco" className="h-10 w-auto" />
        </a>

        {/* Links desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${scrolled ? 'text-teal-800 dark:text-teal-200 hover:text-olive-500' : 'text-white/90 hover:text-white'}`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right actions */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="tel:+34697873826"
            className={`flex items-center gap-2 text-sm font-medium transition-colors ${scrolled ? 'text-teal-700 dark:text-teal-300 hover:text-teal-900 dark:hover:text-white' : 'text-white/80 hover:text-white'}`}
          >
            <Phone className="w-4 h-4" />
            697 87 38 26
          </a>
          <button
            onClick={onOpenContact}
            className="px-5 py-2.5 rounded-full bg-teal-700 dark:bg-teal-600 text-white text-sm font-medium hover:bg-teal-800 dark:hover:bg-teal-500 transition-colors shadow-sm"
          >
            Presupuesto gratis
          </button>
        </div>

        {/* Hamburger mobile */}
        <button
          onClick={() => setMenuOpen(v => !v)}
          className={`md:hidden p-2 rounded-lg transition-colors ${scrolled ? 'text-teal-800 dark:text-teal-200' : 'text-white'}`}
        >
          {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white dark:bg-teal-950 border-t border-teal-50 dark:border-teal-800/50 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map(link => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-teal-800 dark:text-teal-200 font-medium py-1"
                >
                  {link.label}
                </a>
              ))}
              <a href="tel:+34697873826" className="flex items-center gap-2 text-teal-700 dark:text-teal-300 font-medium py-1">
                <Phone className="w-4 h-4" /> 697 87 38 26
              </a>
              <button
                onClick={() => { setMenuOpen(false); onOpenContact(); }}
                className="mt-2 w-full py-3 rounded-full bg-teal-700 text-white font-medium"
              >
                Presupuesto gratis
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
