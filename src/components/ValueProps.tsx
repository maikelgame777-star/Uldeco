import { Paintbrush, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { useRef, MouseEvent } from 'react';
import { motion } from 'motion/react';

export function ValueProps() {
  return (
    <section id="nosotros" className="py-24 relative bg-transparent">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              <h2 className="font-display text-4xl md:text-5xl font-bold tracking-tight text-teal-900 dark:text-teal-50 mb-6 leading-tight">
                La perfección <br />
                <span className="text-olive-500">está en los detalles.</span>
              </h2>
              <p className="text-lg text-teal-700/70 dark:text-teal-300/70 leading-relaxed mb-8 font-light">
                No solo pintamos, transformamos. Nuestro equipo en Murcia se dedica a ofrecer un servicio integral donde la calidad del acabado y la limpieza son nuestra firma.
              </p>
              <div className="flex items-center gap-4 text-sm font-medium text-teal-900 dark:text-teal-100">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img key={i} src={`https://picsum.photos/seed/face${i}/100/100`} alt="Cliente" className="w-10 h-10 rounded-full border-2 border-white dark:border-teal-900" referrerPolicy="no-referrer" loading="lazy" />
                  ))}
                </div>
                <span>Más de 500 proyectos completados</span>
              </div>
            </motion.div>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ValueCard icon={Sparkles} title="Acabados Premium" description="Utilizamos las mejores pinturas del mercado para garantizar una durabilidad y estética excepcionales en cada pared." delay={0.1} />
            <ValueCard icon={ShieldCheck} title="Limpieza Total" description="Protegemos tus muebles y suelos al milímetro. Dejamos todo impecable al terminar, como si nunca hubiéramos estado." delay={0.2} />
            <ValueCard icon={Clock} title="Cumplimiento de Plazos" description="Sin sorpresas de última hora. Respetamos los plazos acordados y el precio inicial de tu presupuesto." delay={0.3} />
            <ValueCard icon={Paintbrush} title="Asesoramiento" description="Te ayudamos a elegir los colores y texturas que mejor se adapten a la iluminación y estilo de tu espacio." delay={0.4} />
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({ title, description, icon: Icon, delay = 0 }: { title: string, description: string, icon: any, delay?: number }) {
  const glowRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!glowRef.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    glowRef.current.style.background = `radial-gradient(400px circle at ${e.clientX - rect.left}px ${e.clientY - rect.top}px, rgba(11,79,92,0.07), transparent 40%)`;
  };
  const handleMouseEnter = () => { if (glowRef.current) glowRef.current.style.opacity = '1'; };
  const handleMouseLeave = () => { if (glowRef.current) glowRef.current.style.opacity = '0'; };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="group relative p-8 bg-white dark:bg-teal-900/40 border border-teal-100 dark:border-teal-800/50 rounded-3xl hover:-translate-y-2 hover:shadow-xl hover:shadow-teal-100/50 dark:hover:shadow-teal-950/50 transition-all duration-500 cursor-pointer overflow-hidden shadow-md"
    >
      <div ref={glowRef} className="pointer-events-none absolute -inset-px z-0" style={{ opacity: 0, transition: 'opacity 0.3s' }} />
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-olive-400 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-teal-50 dark:bg-teal-800/60 border border-teal-100 dark:border-teal-700/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-olive-50 dark:group-hover:bg-olive-900/30 group-hover:border-olive-200 transition-all duration-500">
          <Icon className="w-6 h-6 text-teal-700 dark:text-teal-300 group-hover:text-olive-600 dark:group-hover:text-olive-400 transition-colors duration-500" />
        </div>
        <h3 className="text-xl font-semibold text-teal-900 dark:text-teal-50 mb-3 tracking-tight">{title}</h3>
        <p className="text-teal-700/70 dark:text-teal-300/70 leading-relaxed font-light">{description}</p>
      </div>
    </motion.div>
  );
}
