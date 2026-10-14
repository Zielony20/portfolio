import { featuredProjects } from '../data/portfolioData';
import { ArrowUpRight } from 'lucide-react';

export default function Projects() {
  return (
    <section id="projects" className="content-section project-section no-print">
      <div className="page-width">
        <div className="section-heading"><p className="eyebrow">01 / Featured project</p><h2>PrimaVera.<br />From code to a working platform.</h2></div>
        {featuredProjects.map(project => (
          <article key={project.id}>
            <div className="project-intro">
              <div><p className="project-status">{project.status}</p><h3>{project.title}</h3><p>{project.description}</p>
                <a className="text-link" href={project.link} target="_blank" rel="noopener noreferrer">Visit bienvenidosprimavera.pl<ArrowUpRight size={18} aria-hidden="true" /></a>
              </div>
              <aside className="project-summary"><p className="eyebrow">Architecture at a glance</p><ul>{project.highlights.map(item => <li key={item}>{item}</li>)}</ul></aside>
            </div>
            <div className="architecture-list">
              {project.codeSections.map((section, index) => (
                <section key={section.title} className="architecture-row">
                  <div className="architecture-label"><span className="row-number">{String(index + 1).padStart(2, '0')}</span><h4>{section.title}</h4></div>
                  <div><p>{section.description}</p><ul>{section.details.map(detail => <li key={detail}>{detail}</li>)}</ul></div>
                </section>
              ))}
            </div>
            <div className="project-stack"><h4>Project technologies</h4><div className="technology-list">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><p className="source-note">{project.publicScopeNote}</p></div>
          </article>
        ))}
      </div>
    </section>
  );
}
