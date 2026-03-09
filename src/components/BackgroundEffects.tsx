export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-slate-50 dark:bg-teal-950">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNkMGU5ZWUiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent_80%)] opacity-50 dark:opacity-10" />
      <div className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-teal-100/40 dark:bg-teal-700/10 blur-3xl" />
      <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full bg-olive-100/30 dark:bg-olive-900/10 blur-3xl" />
    </div>
  );
}
