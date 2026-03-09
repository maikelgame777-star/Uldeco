import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function CTA({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Soft animated gradient background */}
      <div className="absolute inset-0 bg-slate-900" />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-1/4 w-[50%] h-[100%] rounded-full bg-blue-600/30 blur-[120px]"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute bottom-0 right-1/4 w-[40%] h-[80%] rounded-full bg-purple-600/30 blur-[120px]"
      />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 backdrop-blur-2xl border border-white/20 p-12 md:p-20 rounded-[3rem] shadow-2xl"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            ¿Listo para renovar tu espacio?
          </h2>
          <p className="text-lg text-white/70 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
            Cuéntanos qué necesitas y te daremos un presupuesto sin compromiso en menos de 24 horas. Calidad, limpieza y profesionalidad garantizadas.
          </p>
          <button 
            onClick={onOpenContact}
            className="group relative inline-flex items-center justify-center px-8 py-4 font-medium text-slate-900 bg-white rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)]"
          >
            <span className="relative flex items-center gap-2">
              Contactar ahora
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </span>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
