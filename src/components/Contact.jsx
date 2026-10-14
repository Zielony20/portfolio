import { useState } from 'react';
import { personalData } from '../data/portfolioData';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState('');
  const copyEmail = async () => {
    try { await navigator.clipboard.writeText(personalData.email); setCopyStatus('Email address copied.'); }
    catch { setCopyStatus('Copy failed. You can select and copy the address manually.'); }
  };
  return (
    <footer id="contact" className="contact-section no-print">
      <div className="page-width">
        <div className="contact-layout"><div><p className="eyebrow">04 / Contact</p><h2>Let’s talk<br />about your team.</h2><p>Backend, DevOps and security. Based in Poznań, open to remote, hybrid or on-site work. I prefer an employment contract.</p></div>
          <div className="contact-details"><div className="email-row"><a href={`mailto:${personalData.email}`}>{personalData.email}<ArrowUpRight size={21} aria-hidden="true" /></a><button className="icon-button" onClick={copyEmail} aria-label="Copy email address">{copyStatus === 'Email address copied.' ? <Check aria-hidden="true" /> : <Copy aria-hidden="true" />}</button></div>
            <p className="copy-status" role="status">{copyStatus}</p><a href={`tel:${personalData.phone.replace(/\s/g, '')}`}>{personalData.phone}</a>
            <div className="contact-links"><a href={personalData.github} target="_blank" rel="noopener noreferrer">GitHub<ArrowUpRight size={16} aria-hidden="true" /></a><a href={personalData.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn<ArrowUpRight size={16} aria-hidden="true" /></a></div>
          </div>
        </div>
        <div className="footer-line"><span>© {new Date().getFullYear()} {personalData.name}</span><a href="#about">Back to top ↑</a></div>
      </div>
    </footer>
  );
}
