import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';

export function CTA({ onOpenContact }: { onOpenContact: () => void }) {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-teal-900" />
      <div className="absolute top-0 left-1/4 w-[50%] h-[100%] rounded-full bg-teal-700/30 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-[40%] h-[80%] rounded-full bg-olive-500/20 blur-3xl" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-white/10 border border-white/15 p-12 md:p-20 rounded-[3rem] shadow-2xl"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-white mb-6">
            ¿Listo para renovar tu espacio?
          </h2>
          <p className="text-lg text-white/70 mb-10 leading-relaxed font-light max-w-2xl mx-auto">
            Cuéntanos qué necesitas y te daremos un presupuesto sin compromiso en menos de 24 horas. Calidad, limpieza y profesionalidad garantizadas.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={onOpenContact}
              className="group inline-flex items-center justify-center px-8 py-4 font-medium text-teal-900 bg-white rounded-full transition-all hover:bg-olive-50 hover:shadow-[0_0_40px_rgba(255,255,255,0.2)]"
            >
              <span className="flex items-center gap-2">
                Contactar ahora
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <a
              href={`https://wa.me/34697873826?text=${encodeURIComponent('Hola, me gustaría solicitar un presupuesto sin compromiso.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 font-medium text-white bg-white/10 hover:bg-white/20 border border-white/20 rounded-full transition-all"
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
