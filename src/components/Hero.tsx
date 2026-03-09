import { motion } from 'motion/react';

const areas = ['Murcia', 'Molina de Segura', 'Alcantarilla', 'Cartagena', 'Lorca', 'Mazarrón'];

export function Hero({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <section className="relative min-h-screen w-full flex items-center py-32 px-6 md:px-12 lg:px-24 overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1920&q=80"
          alt="Pintores en Murcia - Interior Minimalista"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
          fetchPriority="high"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-teal-950/70 via-teal-900/30 to-transparent" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="relative z-10 bg-white/88 p-8 md:p-12 rounded-[2.5rem] shadow-[0_8px_32px_rgba(11,79,92,0.12)] border border-teal-100/60 max-w-2xl"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-olive-100 text-olive-700 text-sm font-medium mb-6">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-olive-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-olive-500"></span>
          </span>
          Disponibilidad inmediata
        </div>

        <h1 className="font-display text-4xl md:text-6xl font-bold tracking-tight text-teal-900 mb-4 leading-[1.1]">
          Damos vida a tus espacios.
        </h1>

        {/* Zonas de servicio */}
        <div className="flex flex-wrap gap-2 mb-5">
          {areas.map(area => (
            <span key={area} className="text-xs font-medium px-2.5 py-1 rounded-full bg-teal-50 text-teal-700 border border-teal-100">
              {area}
            </span>
          ))}
        </div>

        <p className="text-lg text-teal-800/70 mb-8 leading-relaxed font-light">
          Especialistas en alta decoración, alisado perfecto y acabados impecables. Presupuesto sin compromiso en menos de 24h.
        </p>

        <button
          onClick={onOpenContact}
          className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-white bg-teal-700 rounded-full overflow-hidden transition-all hover:bg-teal-800 hover:shadow-[0_0_30px_rgba(11,79,92,0.3)]"
        >
          <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shimmer" />
          <span className="relative flex items-center gap-2">
            Solicitar presupuesto
            <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </button>
      </motion.div>

      <ScrollIndicator />
    </section>
  );
}

function ScrollIndicator() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 1 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-10"
    >
      <span className="text-[10px] font-semibold text-white/90 uppercase tracking-[0.2em]">Descubrir</span>
      <div className="w-[1px] h-12 bg-white/20 overflow-hidden rounded-full">
        <motion.div
          animate={{ y: ['-100%', '100%'] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          className="w-full h-1/2 bg-white rounded-full"
        />
      </div>
    </motion.div>
  );
}
