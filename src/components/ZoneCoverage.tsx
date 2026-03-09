import { motion } from 'motion/react';
import { MapPin } from 'lucide-react';

const zones = [
  { name: 'Murcia capital', main: true },
  { name: 'Molina de Segura', main: true },
  { name: 'Alcantarilla', main: false },
  { name: 'Cartagena', main: true },
  { name: 'Lorca', main: false },
  { name: 'Mazarrón', main: false },
  { name: 'San Javier', main: false },
  { name: 'Torre-Pacheco', main: false },
  { name: 'Cieza', main: false },
  { name: 'Totana', main: false },
  { name: 'Alhama de Murcia', main: false },
  { name: 'Yecla', main: false },
];

export function ZoneCoverage() {
  return (
    <section className="py-24 bg-white dark:bg-teal-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-semibold uppercase tracking-widest text-olive-600 dark:text-olive-400 mb-3 block">Zona de cobertura</span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-teal-900 dark:text-teal-50 mb-6 leading-tight">
              Servicio en toda la Región de Murcia.
            </h2>
            <p className="text-teal-700/70 dark:text-teal-300/70 text-lg font-light leading-relaxed mb-8">
              Nos desplazamos a cualquier punto de la provincia. Si no ves tu municipio en la lista, consúltanos — seguramente también llegamos.
            </p>
            <a
              href="tel:+34697873826"
              className="inline-flex items-center gap-3 px-6 py-3 bg-teal-700 dark:bg-teal-600 hover:bg-teal-800 dark:hover:bg-teal-700 text-white rounded-full font-medium transition-colors shadow-md"
            >
              <MapPin className="w-4 h-4" />
              Consultar cobertura: 697 87 38 26
            </a>
          </motion.div>

          {/* Zone grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="flex flex-wrap gap-3"
          >
            {zones.map((zone, i) => (
              <motion.div
                key={zone.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-full border text-sm font-medium transition-colors ${
                  zone.main
                    ? 'bg-teal-700 dark:bg-teal-700 border-teal-700 text-white'
                    : 'bg-white dark:bg-teal-900/50 border-teal-100 dark:border-teal-800/50 text-teal-800 dark:text-teal-200 hover:border-teal-300 dark:hover:border-teal-600'
                }`}
              >
                <MapPin className="w-3.5 h-3.5 flex-shrink-0" />
                {zone.name}
              </motion.div>
            ))}

            <p className="w-full text-xs text-teal-500/60 dark:text-teal-500/60 mt-2">
              Zonas principales destacadas. Cobertura extendida disponible.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
