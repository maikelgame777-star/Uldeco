/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { ValueProps } from './components/ValueProps';
import { Testimonials } from './components/Testimonials';
import { CTA } from './components/CTA';
import { ContactModal } from './components/ContactModal';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen relative selection:bg-blue-200 selection:text-blue-900">
      <BackgroundEffects />
      <main>
        <Hero onOpenContact={() => setIsContactModalOpen(true)} />
        <Marquee />
        <ValueProps />
        <Testimonials />
        <CTA onOpenContact={() => setIsContactModalOpen(true)} />
      </main>
      
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />

      <footer className="bg-slate-950 py-12 border-t border-white/10 text-center">
        <p className="text-slate-500 text-sm">
          © {new Date().getFullYear()} Pintores Murcia. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
