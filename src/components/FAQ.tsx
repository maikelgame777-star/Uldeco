import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus } from 'lucide-react';

const faqs = [
  {
    q: '¿Cuánto tiempo tarda en hacerse un presupuesto?',
    a: 'Te enviamos el presupuesto detallado en menos de 24 horas tras la visita o consulta. Sin sorpresas: el precio acordado es el precio final.',
  },
  {
    q: '¿Trabajáis en toda la provincia de Murcia?',
    a: 'Sí. Cubrimos Murcia capital y sus pedanías, así como Molina de Segura, Alcantarilla, Cartagena, Lorca, Mazarrón, San Javier y alrededores.',
  },
  {
    q: '¿Qué incluye el servicio de pintura?',
    a: 'Incluye la preparación de superficies (lijado, sellado, imprimación), protección de muebles y suelos, aplicación de las capas necesarias y limpieza completa al finalizar.',
  },
  {
    q: '¿Tengo que comprar la pintura yo?',
    a: 'No es necesario. Nosotros nos encargamos de todo: seleccionamos y suministramos los mejores materiales del mercado. Si ya tienes pintura, también trabajamos con ella.',
  },
  {
    q: '¿Cuánto tarda en secarse la pintura?',
    a: 'La pintura al agua está seca al tacto en 1-2 horas y lista para una segunda mano en 4-6 horas. El curado completo es a las 24-48h, momento en que ya puedes mover muebles.',
  },
  {
    q: '¿Hacéis trabajos en comunidades de vecinos?',
    a: 'Sí, realizamos pintura de escaleras, portales, garajes y fachadas para comunidades. Trabajamos con flexibilidad horaria para minimizar las molestias a los vecinos.',
  },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 bg-teal-50/40">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-14">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-teal-900 mb-4">
            Preguntas frecuentes
          </h2>
          <p className="text-teal-700/70 text-lg font-light">
            Todo lo que necesitas saber antes de empezar tu proyecto.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl border border-teal-100 overflow-hidden shadow-sm"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between px-6 py-5 text-left"
              >
                <span className="font-medium text-teal-900 pr-4">{faq.q}</span>
                <span className={`flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors duration-200 ${open === i ? 'bg-olive-500 text-white' : 'bg-teal-50 text-teal-600'}`}>
                  <Plus className={`w-4 h-4 transition-transform duration-300 ${open === i ? 'rotate-45' : ''}`} />
                </span>
              </button>

              <AnimatePresence initial={false}>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-5 text-teal-700/80 leading-relaxed font-light">
                      {faq.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
