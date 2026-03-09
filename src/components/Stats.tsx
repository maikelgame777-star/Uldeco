import { useEffect, useRef, useState } from 'react';

const stats = [
  { value: 500, suffix: '+', label: 'Proyectos completados' },
  { value: 10,  suffix: '+', label: 'Años de experiencia' },
  { value: 100, suffix: '%', label: 'Clientes satisfechos' },
  { value: 24,  suffix: 'h', label: 'Para tu presupuesto' },
];

function useCountUp(target: number, duration = 1400) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !started.current) {
        started.current = true;
        const startTime = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - startTime) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setValue(Math.round(eased * target));
          if (progress < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
        observer.disconnect();
      }
    }, { threshold: 0.4 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [target, duration]);

  return { value, ref };
}

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { value: count, ref } = useCountUp(value);
  return (
    <div className="text-center px-6 py-8">
      <span ref={ref} className="font-display text-5xl md:text-6xl font-bold text-teal-700 dark:text-olive-400">
        {count}
      </span>
      <span className="font-display text-5xl md:text-6xl font-bold text-olive-500">{suffix}</span>
      <p className="mt-2 text-teal-700/70 dark:text-teal-300/70 text-sm font-medium uppercase tracking-wide">{label}</p>
    </div>
  );
}

export function Stats() {
  return (
    <section className="bg-white dark:bg-teal-950 border-y border-teal-100 dark:border-teal-800/50">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-teal-100 dark:divide-teal-800/50">
        {stats.map(s => <StatItem key={s.label} {...s} />)}
      </div>
    </section>
  );
}
