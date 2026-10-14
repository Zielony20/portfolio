import { useState } from 'react';
import { ArrowUpRight, Menu, X } from 'lucide-react';
import { personalData } from '../data/portfolioData';

const navLinks = [
  { label: 'About', href: '#about' }, { label: 'PrimaVera', href: '#projects' },
  { label: 'Skills', href: '#skills' }, { label: 'Experience', href: '#experience' },
];

export default function Navbar({ onOpenPrintableCV }) {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header no-print">
      <nav className="page-width navigation" aria-label="Main navigation">
        <a className="wordmark" href="#about" aria-label={personalData.name}>PSM<span aria-hidden="true">.</span></a>
        <div id="navigation-links" className={`navigation-links ${menuOpen ? 'is-open' : ''}`}>
          {navLinks.map(link => <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>)}
          <button className="nav-cv" onClick={() => { setMenuOpen(false); onOpenPrintableCV(); }}>CV preview</button>
          <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Contact<ArrowUpRight size={17} aria-hidden="true" /></a>
        </div>
        <button className="menu-toggle icon-button" aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen} aria-controls="navigation-links" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </nav>
    </header>
  );
}
