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
    title: 'Full-stack habit & sleep tracking platform.',
    description: 'I created BetterMe: a high-throughput asynchronous Rust backend (Axum/Tokio), native Android companion app (Compose/WorkManager), React dashboard, and KinD container orchestration.',
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
