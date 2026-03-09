const techniques = [
  "Quitar Gotelé", "Alisado de Paredes", "Estuco Veneciano", "Microcemento", "Papel Pintado", "Pintura Decorativa", "Tierras Florentinas", "Esmaltes y Lacas", "Pintura Ecológica"
];

export function Marquee() {
  return (
    <section id="servicios" className="py-12 border-y border-teal-100 bg-white overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10" />

      <div className="flex items-center gap-16 w-max animate-marquee">
        {[...techniques, ...techniques].map((technique, i) => (
          <div key={i} className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-all duration-300 cursor-default">
            <div className="w-2 h-2 rounded-full bg-olive-500" />
            <span className="text-lg font-semibold text-teal-800 tracking-tight">{technique}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
