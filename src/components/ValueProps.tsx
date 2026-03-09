import { Paintbrush, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { useState, MouseEvent } from 'react';
import { motion } from 'motion/react';

export function ValueProps() {
  return (
    <section className="py-24 relative bg-transparent">
      {/* Dotted background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4=')] opacity-30" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 sticky top-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                La perfección <br/>
                <span className="text-slate-400">está en los detalles.</span>
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-8 font-light">
                No solo pintamos, transformamos. Nuestro equipo en Murcia se dedica a ofrecer un servicio integral donde la calidad del acabado y la limpieza son nuestra firma.
              </p>
              <div className="flex items-center gap-4 text-sm font-medium text-slate-900">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <img key={i} src={`https://picsum.photos/seed/face${i}/100/100`} alt="Cliente" className="w-10 h-10 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
                  ))}
                </div>
                <span>Más de 500 proyectos completados</span>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ValueCard 
              icon={Sparkles}
              title="Acabados Premium"
              description="Utilizamos las mejores pinturas del mercado para garantizar una durabilidad y estética excepcionales en cada pared."
              delay={0.1}
            />
            <ValueCard 
              icon={ShieldCheck}
              title="Limpieza Total"
              description="Protegemos tus muebles y suelos al milímetro. Dejamos todo impecable al terminar, como si nunca hubiéramos estado."
              delay={0.2}
            />
            <ValueCard 
              icon={Clock}
              title="Cumplimiento de Plazos"
              description="Sin sorpresas de última hora. Respetamos los plazos acordados y el precio inicial de tu presupuesto."
              delay={0.3}
            />
            <ValueCard 
              icon={Paintbrush}
              title="Asesoramiento"
              description="Te ayudamos a elegir los colores y texturas que mejor se adapten a la iluminación y estilo de tu espacio."
              delay={0.4}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

function ValueCard({ title, description, icon: Icon, delay = 0 }: { title: string, description: string, icon: any, delay?: number }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setOpacity(1)}
      onMouseLeave={() => setOpacity(0)}
      className="group relative p-8 bg-white/60 backdrop-blur-2xl border border-white/50 rounded-3xl hover:-translate-y-2 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-500 cursor-pointer overflow-hidden shadow-xl shadow-slate-200/20"
    >
      {/* Cursor proximity glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 z-0"
        style={{
          opacity,
          background: `radial-gradient(400px circle at ${position.x}px ${position.y}px, rgba(59,130,246,0.08), transparent 40%)`,
        }}
      />
      
      {/* Top border beam on hover */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-50 group-hover:border-blue-100 transition-all duration-500">
          <Icon className="w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-colors duration-500" />
        </div>
        <h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">{title}</h3>
        <p className="text-slate-600 leading-relaxed font-light">{description}</p>
      </div>
    </motion.div>
  );
}
