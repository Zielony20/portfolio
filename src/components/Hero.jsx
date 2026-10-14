import { personalData } from '../data/portfolioData';
import { ProfileCardCarousel } from './ui/profile-card-testimonial-carousel';

const slides = [
  { id: 'backend', label: 'Backend', title: 'Microservices and backend development.',
    description: 'Since February 2023, I have worked on cybersecurity projects at Nokia. I design and implement microservices, write tests, fix bugs and participate in code reviews. My main backend language is Go.',
    href: '#experience', linkLabel: 'Explore my experience' },
  { id: 'infrastructure', label: 'DevOps & Security', title: 'Infrastructure, automation and security.',
    description: 'I work with Kubernetes, Helm, Terraform and Ansible. I combine backend development with security and diagnostics: least privilege, log forwarding, Prometheus alerts and Grafana dashboards.',
    href: '#skills', linkLabel: 'Explore my skills' },
  { id: 'primavera', label: 'PrimaVera', title: 'My own platform, used by real people.',
    description: 'I created the entire bienvenidosprimavera.pl platform. It serves approximately 40 users at a Spanish-language school, combining learning, administration, API integrations and infrastructure.',
    href: '#projects', linkLabel: 'Explore the project architecture' },
];

export default function Hero() {
  return (
    <section id="about" className="hero-section no-print" aria-label="About me">
      <div className="page-width">
        <ProfileCardCarousel profile={personalData} slides={slides} />
        <div className="hero-footnote"><span>Backend Engineer · Go / Golang</span><span>Poznań · Employment contract</span></div>
      </div>
    </section>
  );
}
