import { motion } from 'motion/react';

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 pointer-events-none z-[-1] overflow-hidden bg-slate-50">
      {/* Grid Shimmer */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNlNWU3ZWIiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent_80%)] opacity-60" />
      
      {/* Soft animated gradient / Light field */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.4, 0.6, 0.4],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-[20%] -left-[10%] w-[70%] h-[70%] rounded-full bg-blue-100/50 blur-[120px]"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full bg-orange-50/50 blur-[120px]"
      />
    </div>
  );
}
