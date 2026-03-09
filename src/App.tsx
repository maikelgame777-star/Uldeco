/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { ValueProps } from './components/ValueProps';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { ContactModal } from './components/ContactModal';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen relative selection:bg-olive-200 selection:text-teal-900">
      <Navbar onOpenContact={() => setIsContactModalOpen(true)} />
      <BackgroundEffects />
      <main>
        <Hero onOpenContact={() => setIsContactModalOpen(true)} />
        <Marquee />
        <ValueProps />
        <Testimonials />
        <Gallery />
        <FAQ />
        <CTA onOpenContact={() => setIsContactModalOpen(true)} />
      </main>

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />

      <WhatsAppButton />

      <footer className="bg-teal-950 py-12 border-t border-white/10 text-center">
        <img src="/logo.png" alt="Uldeco" className="h-8 w-auto mx-auto mb-4 opacity-70" />
        <p className="text-teal-400/60 text-sm">
          © {new Date().getFullYear()} Uldeco — Pintores en Murcia. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
