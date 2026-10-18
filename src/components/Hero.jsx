import { personalData } from '../data/portfolioData';
import { ProfileCardCarousel } from './ui/profile-card-testimonial-carousel';

const slides = [
  {
    id: 'about',
    label: 'About Me',
    title: 'Backend, DevOps & Cloud-Native Security.',
    description: 'Since February 2023, I have worked on cybersecurity projects at Nokia. I combine backend engineering in Go, Rust and Java with Kubernetes, Helm, Terraform, and n8n automations. I focus on resilient microservices, container orchestration, least-privilege security, and robust telemetry.',
    href: '#experience',
    linkLabel: 'Explore my experience & skills',
  },
  {
    id: 'primavera',
    label: 'PrimaVera',
    title: 'Platform with event-driven automations.',
    description: 'I created the entire bienvenidosprimavera.pl platform serving ~40 users, combining Go microservices, React, and extensive n8n automated workflows for student onboarding, CRM sync, and notifications.',
    href: '#projects',
    linkLabel: 'Explore PrimaVera architecture',
  },
  {
    id: 'betterme',
    label: 'BetterMe',
    title: 'Personal focus & habit platform with local AI.',
    description: 'I created BetterMe to help regain digital focus: it blocks online distractions and short-form video (Reels, Shorts), tracks deep-work sessions, and monitors daily screen-time rhythms. Built with an asynchronous Rust backend, a modern React dashboard, and the local Laya AI model (Ollama) for on-premise content classification.',
    href: '#projects',
    linkLabel: 'Explore BetterMe architecture',
  },
];

export default function Hero() {
  return (
    <section id="about" className="hero-section no-print" aria-label="About me">
      <div className="page-width">
        <ProfileCardCarousel profile={personalData} slides={slides} />
        <div className="hero-footnote">
          <span>Backend & Systems Engineer · Go / Rust</span>
          <span>Poznań · Employment contract</span>
        </div>
      </div>
    </section>
  );
}
