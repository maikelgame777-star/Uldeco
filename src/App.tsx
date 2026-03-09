/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { BackgroundEffects } from './components/BackgroundEffects';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Marquee } from './components/Marquee';
import { Services } from './components/Services';
import { ValueProps } from './components/ValueProps';
import { ZoneCoverage } from './components/ZoneCoverage';
import { Testimonials } from './components/Testimonials';
import { Gallery } from './components/Gallery';
import { FAQ } from './components/FAQ';
import { CTA } from './components/CTA';
import { ContactModal } from './components/ContactModal';
import { WhatsAppButton } from './components/WhatsAppButton';
import { ChatBot } from './components/ChatBot';
import { WaveDivider } from './components/WaveDivider';

export default function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const openContact = () => setIsContactModalOpen(true);

  return (
    <div className="min-h-screen relative selection:bg-olive-200 selection:text-teal-900 dark:selection:bg-olive-900/40 dark:selection:text-olive-300">
      <Navbar onOpenContact={openContact} />
      <BackgroundEffects />

      <main>
        <Hero onOpenContact={openContact} />

        {/* Wave hero → stats */}
        <WaveDivider lightFill="fill-white" darkFill="dark:fill-teal-950" />
        <Stats />

        <Marquee />

        {/* Wave marquee → services */}
        <WaveDivider lightFill="fill-teal-50/40" darkFill="dark:fill-teal-950/60" flip />
        <Services />
        <WaveDivider lightFill="fill-teal-50/40" darkFill="dark:fill-teal-950/60" />

        <ValueProps />

        <ZoneCoverage />

        <Testimonials />

        <Gallery />

        {/* Wave gallery → faq */}
        <WaveDivider lightFill="fill-teal-50/40" darkFill="dark:fill-teal-900/20" flip />
        <FAQ />
        <WaveDivider lightFill="fill-teal-50/40" darkFill="dark:fill-teal-900/20" />

        <CTA onOpenContact={openContact} />
      </main>

      <ContactModal isOpen={isContactModalOpen} onClose={() => setIsContactModalOpen(false)} />
      <WhatsAppButton />
      <ChatBot />

      <footer className="bg-teal-950 py-12 border-t border-white/10 text-center">
        <img src="/logo.png" alt="Uldeco" className="h-8 w-auto mx-auto mb-4 opacity-70" />
        <p className="text-teal-400/60 text-sm">
          © {new Date().getFullYear()} Uldeco — Pintores en Murcia. Todos los derechos reservados.
        </p>
      </footer>
    </div>
  );
}
