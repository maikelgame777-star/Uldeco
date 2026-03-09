import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  { name: "María García", role: "Particular, Centro de Murcia", text: "Increíble trabajo en mi piso. Rápidos, limpios y muy profesionales. El alisado de paredes quedó perfecto, sin una sola imperfección.", rating: 5, delay: 0.1 },
  { name: "Carlos Ruiz", role: "Presidente de Comunidad", text: "Pintaron la fachada y las escaleras de nuestra comunidad. El resultado es espectacular y el trato inmejorable. 100% recomendables.", rating: 5, delay: 0.2 },
  { name: "Laura Martínez", role: "Propietaria de Local Comercial", text: "Buscaba pintores en Murcia para renovar mi tienda y di con ellos. Me asesoraron con los colores y el resultado superó mis expectativas.", rating: 5, delay: 0.3 },
  { name: "Antonio López", role: "Particular, Molina de Segura", text: "Muy formales con los plazos. Empezaron el día acordado y terminaron incluso antes. La limpieza final es un gran punto a favor.", rating: 4, delay: 0.4 },
];

export function Testimonials() {
  return (
    <section id="testimonios" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-teal-900 dark:text-teal-50 mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-lg text-teal-700/70 dark:text-teal-300/70 font-light">
            Nuestra misión es superar las expectativas en cada proyecto.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t, i) => <TestimonialCard key={i} {...t} />)}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ name, role, text, rating, delay }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6, delay }}
      className="p-8 bg-white dark:bg-teal-900/40 border border-teal-100 dark:border-teal-800/50 rounded-3xl hover:-translate-y-2 hover:shadow-xl transition-all duration-500 flex flex-col h-full shadow-md"
    >
      <div className="flex gap-1 mb-6">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-olive-500 fill-olive-500' : 'text-slate-200 dark:text-teal-800 fill-slate-200 dark:fill-teal-800'}`} />
        ))}
      </div>
      <p className="text-teal-800/80 dark:text-teal-200/80 mb-8 leading-relaxed font-light flex-grow">"{text}"</p>
      <div className="flex items-center gap-4 mt-auto">
        <div className="w-10 h-10 rounded-full bg-teal-50 dark:bg-teal-800 flex items-center justify-center text-teal-700 dark:text-teal-200 font-semibold border border-teal-100 dark:border-teal-700">
          {name.charAt(0)}
        </div>
        <div>
          <div className="font-semibold text-teal-900 dark:text-teal-50 text-sm">{name}</div>
          <div className="text-xs text-teal-600/60 dark:text-teal-400/60">{role}</div>
        </div>
      </div>
    </motion.div>
  );
}
