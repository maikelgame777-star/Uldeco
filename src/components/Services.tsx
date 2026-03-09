import { motion } from 'motion/react';
import { Hammer, Layers, Home, Building2, Sparkles, Paintbrush, ScrollText, Droplets } from 'lucide-react';

const services = [
  {
    icon: Hammer,
    title: 'Quitar Gotelé',
    description: 'Eliminamos el gotelé de forma limpia y eficiente, dejando la superficie preparada para un acabado liso y moderno.',
    tag: 'Más solicitado',
  },
  {
    icon: Layers,
    title: 'Alisado de Paredes',
    description: 'Aplicamos pasta de alisado con maestría para conseguir superficies perfectamente planas, sin imperfecciones.',
    tag: null,
  },
  {
    icon: Home,
    title: 'Pintura Interior',
    description: 'Renovamos el interior de tu hogar o negocio con las mejores pinturas. Asesoramiento de color incluido.',
    tag: null,
  },
  {
    icon: Building2,
    title: 'Pintura de Fachadas',
    description: 'Rehabilitamos fachadas y exteriores con pinturas resistentes a la intemperie y de larga duración.',
    tag: null,
  },
  {
    icon: Sparkles,
    title: 'Estuco Veneciano',
    description: 'Acabados de lujo con estuco veneciano pulido, que aportan profundidad, brillo y elegancia a cualquier espacio.',
    tag: 'Premium',
  },
  {
    icon: Droplets,
    title: 'Microcemento',
    description: 'Revestimiento continuo de alta resistencia para paredes, suelos y baños. Aspecto industrial y sofisticado.',
    tag: 'Premium',
  },
  {
    icon: ScrollText,
    title: 'Papel Pintado',
    description: 'Instalación profesional de todo tipo de papel pintado: vinílico, texturizado, fotomural y más.',
    tag: null,
  },
  {
    icon: Paintbrush,
    title: 'Pintura Decorativa',
    description: 'Técnicas especiales como tierras florentinas, esmaltes, lacados y efectos decorativos a medida.',
    tag: null,
  },
];

export function Services() {
  return (
    <section id="servicios" className="py-24 bg-teal-50/40 dark:bg-teal-950/60">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-semibold uppercase tracking-widest text-olive-600 dark:text-olive-400 mb-3 block">Nuestros servicios</span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-teal-900 dark:text-teal-50 mb-4">
            Todo lo que necesitas, bajo un mismo techo.
          </h2>
          <p className="text-teal-700/70 dark:text-teal-300/70 text-lg font-light">
            Desde una pared hasta una reforma integral. Ofrecemos soluciones completas de pintura y decoración.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
              className="relative bg-white dark:bg-teal-900/50 border border-teal-100 dark:border-teal-800/50 rounded-2xl p-6 hover:-translate-y-1 hover:shadow-lg hover:shadow-teal-100/50 dark:hover:shadow-teal-950/50 transition-all duration-300"
            >
              {service.tag && (
                <span className={`absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${service.tag === 'Premium' ? 'bg-olive-100 dark:bg-olive-900/40 text-olive-700 dark:text-olive-400' : 'bg-teal-100 dark:bg-teal-800/60 text-teal-700 dark:text-teal-300'}`}>
                  {service.tag}
                </span>
              )}
              <div className="w-11 h-11 rounded-xl bg-teal-50 dark:bg-teal-800/60 border border-teal-100 dark:border-teal-700/50 flex items-center justify-center mb-4">
                <service.icon className="w-5 h-5 text-teal-700 dark:text-teal-300" />
              </div>
              <h3 className="font-semibold text-teal-900 dark:text-teal-50 mb-2">{service.title}</h3>
              <p className="text-sm text-teal-700/70 dark:text-teal-300/70 leading-relaxed font-light">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
