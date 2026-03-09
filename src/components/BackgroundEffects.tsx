export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-slate-50">
      {/* Grid dot pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent_80%)] opacity-60" />

      {/* CSS-driven blobs — no JS animation loop */}
      <div className="animate-blob-1 absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-100/50 blur-[120px]" />
      <div className="animate-blob-2 absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full bg-orange-50/50 blur-[120px]" />
    </div>
  );
}
