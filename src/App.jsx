import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import PrintableCV from './components/PrintableCV';

export default function App() {
  const [showPrintableCV, setShowPrintableCV] = useState(false);

  return (
    <div className="portfolio-app">
      <a className="skip-link" href="#main-content">Skip to content</a>
      {/* Navigation Bar */}
      <Navbar onOpenPrintableCV={() => setShowPrintableCV(true)} />

      {/* Main Sections */}
      <main id="main-content">
        <Hero />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
      </main>

      {/* Printable CV Modal Overlay */}
      {showPrintableCV && (
        <PrintableCV onClose={() => setShowPrintableCV(false)} />
      )}
    </div>
  );
}
