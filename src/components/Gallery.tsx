import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ZoomIn } from 'lucide-react';

const project = {
  title: 'Reforma integral de baño',
  location: 'Murcia capital',
  description: 'Demolición completa y reforma integral. Resultado: baño de diseño con revestimiento efecto mármol, plato de ducha enrasado y mampara de cristal.',
  before: [
    { src: '/antes-1.png', label: 'Estado inicial — techo' },
    { src: '/antes-2.png', label: 'Estado inicial — tabiquería' },
    { src: '/antes-3.png', label: 'Estado inicial — acceso' },
    { src: '/antes-4.png', label: 'Estado inicial — zona ducha' },
  ],
  after: [
    { src: '/despues-1.png', label: 'Resultado final' },
  ],
};

export function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [tab, setTab] = useState<'antes' | 'despues'>('despues');
  const images = tab === 'antes' ? project.before : project.after;

  return (
    <section id="galeria" className="py-24 bg-white dark:bg-teal-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-olive-600 dark:text-olive-400 mb-2 block">Proyecto real</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-teal-900 dark:text-teal-50 leading-tight">{project.title}</h2>
            <p className="text-teal-600/70 dark:text-teal-400/70 mt-2">{project.location}</p>
          </div>
          <p className="text-teal-700/70 dark:text-teal-300/70 font-light max-w-md leading-relaxed">{project.description}</p>
        </div>

        <div className="flex gap-2 mb-8">
          {(['despues', 'antes'] as const).map(t => (
            <button key={t} onClick={() => setTab(t)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${tab === t ? 'bg-teal-700 dark:bg-teal-600 text-white shadow-md' : 'bg-teal-50 dark:bg-teal-900/50 text-teal-700 dark:text-teal-300 hover:bg-teal-100 dark:hover:bg-teal-800/50'}`}
            >
              {t === 'antes' ? 'Antes' : 'Después'}
            </button>
          ))}
        </div>

        <motion.div key={tab} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {images.map((img, i) => (
            <motion.div key={img.src}
              initial={{ opacity: 0, scale: 0.97 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.3, delay: i * 0.06 }}
              onClick={() => setLightbox(img.src)}
              className={`group relative overflow-hidden rounded-2xl cursor-pointer bg-teal-50 dark:bg-teal-900/50 shadow-md hover:shadow-xl transition-shadow ${tab === 'despues' ? 'sm:col-span-2 lg:col-span-4' : ''}`}
            >
              <img src={img.src} alt={img.label} loading="lazy"
                className={`w-full object-cover transition-transform duration-500 ${tab === 'despues' ? 'h-[70vh] object-center group-hover:scale-102' : 'h-64 group-hover:scale-105'}`}
              />
              {tab === 'antes' && (
                <div className="absolute inset-0 bg-teal-950/0 group-hover:bg-teal-950/30 transition-colors duration-300 flex items-center justify-center">
                  <ZoomIn className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              )}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-teal-950/60 to-transparent px-4 py-3">
                <p className="text-white text-sm font-medium">{img.label}</p>
              </div>
              {tab === 'antes' && <span className="absolute top-3 left-3 bg-white/90 dark:bg-teal-900/90 text-teal-800 dark:text-teal-100 text-xs font-semibold px-2.5 py-1 rounded-full">Antes</span>}
              {tab === 'despues' && <span className="absolute top-3 left-3 bg-olive-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">Resultado final</span>}
            </motion.div>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {lightbox && (
          <>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setLightbox(null)} className="fixed inset-0 bg-teal-950/90 z-50" />
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} className="fixed inset-4 md:inset-12 z-50 flex items-center justify-center">
              <button onClick={() => setLightbox(null)} className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors z-10">
                <X className="w-6 h-6" />
              </button>
              <img src={lightbox} alt="Foto ampliada" className="max-h-full max-w-full rounded-2xl object-contain shadow-2xl" />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
