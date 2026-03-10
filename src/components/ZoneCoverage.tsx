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
            <div className="flex flex-wrap gap-2 mb-8">
              {zones.map((zone) => (
                <span
                  key={zone.name}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full border text-xs font-medium ${
                    zone.main
                      ? 'bg-teal-700 border-teal-700 text-white'
                      : 'bg-teal-50 dark:bg-teal-900/50 border-teal-100 dark:border-teal-800/50 text-teal-800 dark:text-teal-200'
                  }`}
                >
                  <MapPin className="w-3 h-3 flex-shrink-0" />
                  {zone.name}
                </span>
              ))}
            </div>
            <a
              href="tel:+34697873826"
              className="inline-flex items-center gap-3 px-6 py-3 bg-teal-700 dark:bg-teal-600 hover:bg-teal-800 dark:hover:bg-teal-700 text-white rounded-full font-medium transition-colors shadow-md"
            >
              <MapPin className="w-4 h-4" />
              Consultar cobertura: 697 87 38 26
            </a>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="rounded-3xl overflow-hidden shadow-xl border border-teal-100 dark:border-teal-800/50 h-80 lg:h-full min-h-[320px]"
          >
            <iframe
              title="Zona de cobertura Uldeco — Murcia"
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d200000!2d-1.1307!3d37.9922!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6346b1ed8e4e01%3A0x4c70b37d7e4ec751!2sMurcia!5e0!3m2!1ses!2ses!4v1700000000000"
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'saturate(0.8)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
