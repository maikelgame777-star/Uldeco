const techniques = [
  "Quitar Gotelé", "Alisado de Paredes", "Estuco Veneciano", "Microcemento", "Papel Pintado", "Pintura Decorativa", "Tierras Florentinas", "Esmaltes y Lacas", "Pintura Ecológica"
];

export function Marquee() {
  return (
    <section className="py-10 border-y border-teal-100 dark:border-teal-800/50 bg-white dark:bg-teal-950 overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white dark:from-teal-950 to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white dark:from-teal-950 to-transparent z-10" />
      <div className="flex items-center gap-16 w-max animate-marquee">
        {[...techniques, ...techniques].map((technique, i) => (
          <div key={i} className="flex items-center gap-3 opacity-40 hover:opacity-100 transition-all duration-300 cursor-default">
            <div className="w-2 h-2 rounded-full bg-olive-500" />
            <span className="text-lg font-semibold text-teal-800 dark:text-teal-200 tracking-tight">{technique}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
