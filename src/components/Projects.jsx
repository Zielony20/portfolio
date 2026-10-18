import { useState } from 'react';
import { featuredProjects } from '../data/portfolioData';
import { ArrowUpRight, ExternalLink, Layers, Image as ImageIcon, Sparkles } from 'lucide-react';

function resolveAsset(path) {
  if (!path) return '';
  if (path.startsWith('http://') || path.startsWith('https://')) return path;
  const base = import.meta.env.BASE_URL || '/';
  const cleanBase = base.endsWith('/') ? base : `${base}/`;
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  return `${cleanBase}${cleanPath}`;
}

function ProjectDiagrams({ diagrams, projectId }) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [viewMode, setViewMode] = useState('image'); // 'image' | 'interactive'

  if (!diagrams || diagrams.length === 0) return null;
  const current = diagrams[selectedIndex] || diagrams[0];

  return (
    <div className="project-diagrams-container">
      <div className="diagram-header">
        <div className="diagram-header-info">
          <div className="diagram-badge">
            <Layers size={13} aria-hidden="true" />
            <span>{current.badge}</span>
          </div>
          <h4>{current.title}</h4>
          <p>{current.description}</p>
        </div>
        <div className="diagram-header-actions">
          {diagrams.length > 1 && (
            <div className="diagram-tabs" role="tablist" aria-label="Available Architecture Diagrams">
              {diagrams.map((d, idx) => (
                <button
                  key={d.id}
                  type="button"
                  role="tab"
                  aria-selected={idx === selectedIndex}
                  className={`diagram-tab-btn ${idx === selectedIndex ? 'active' : ''}`}
                  onClick={() => setSelectedIndex(idx)}
                >
                  {idx === 0 ? 'System Architecture' : 'Security & n8n Dataflow'}
                </button>
              ))}
            </div>
          )}

          <div className="diagram-mode-toggle" role="group" aria-label="Diagram View Mode">
            <button
              type="button"
              className={`diagram-mode-btn ${viewMode === 'image' ? 'active' : ''}`}
              onClick={() => setViewMode('image')}
              title="Tradycyjny widok graficzny"
            >
              <ImageIcon size={13} aria-hidden="true" />
              <span>Graphic</span>
            </button>
            <button
              type="button"
              className={`diagram-mode-btn ${viewMode === 'interactive' ? 'active' : ''}`}
              onClick={() => setViewMode('interactive')}
              title="Interaktywny model z zoomem i badaniem zależności"
            >
              <Sparkles size={13} aria-hidden="true" />
              <span>Interactive</span>
            </button>
          </div>

          <a
            href={resolveAsset(current.src)}
            target="_blank"
            rel="noopener noreferrer"
            className="diagram-open-btn"
            title="Open interactive diagram in full window"
          >
            <span>Full Diagram</span>
            <ExternalLink size={14} aria-hidden="true" />
          </a>
        </div>
      </div>

      <div className="diagram-frame-wrapper">
        {viewMode === 'image' && current.imageSrc ? (
          <div className="diagram-image-container">
            <img
              src={resolveAsset(current.imageSrc)}
              alt={`${current.title} interactive architecture model`}
              className="diagram-static-img"
              loading="lazy"
            />
            <div className="diagram-image-overlay">
              <button
                type="button"
                className="diagram-interactive-launch-btn"
                onClick={() => setViewMode('interactive')}
              >
                <Sparkles size={13} aria-hidden="true" />
                <span>Uruchom model interaktywny (Archify)</span>
              </button>
            </div>
          </div>
        ) : (
          <iframe
            src={resolveAsset(current.src)}
            title={`${current.title} interactive architecture model`}
            className="diagram-iframe"
            loading="lazy"
            sandbox="allow-scripts allow-same-origin allow-popups"
          />
        )}
        <div className="diagram-footer-hint">
          {viewMode === 'image' ? (
            <span>Tradycyjny widok graficzny · Kliknij „Uruchom model interaktywny”, aby badać zależności i zoomować na żywo</span>
          ) : (
            <span>Interaktywny model architektury wygenerowany z Archify · Obsługa zoom i pan · Klikaj elementy, by badać zależności</span>
          )}
          <span className="diagram-hint-tag">Archify v3.1</span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="content-section project-section no-print">
      <div className="page-width">
        <div className="section-heading">
          <p className="eyebrow">01 / Featured platforms</p>
          <h2>Production Platforms.<br />From architecture to operating software.</h2>
        </div>

        {featuredProjects.map(project => (
          <article key={project.id}>
            <div className="project-intro">
              <div>
                <p className="project-status">{project.status}</p>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.link && (
                  <a className="text-link" href={project.link} target="_blank" rel="noopener noreferrer">
                    {project.linkLabel || (project.id === 'primavera' ? 'Visit bienvenidosprimavera.pl' : 'Visit bienvenidosprimavera.online')}
                    <ArrowUpRight size={18} aria-hidden="true" />
                  </a>
                )}
              </div>
              <aside className="project-summary">
                <p className="eyebrow">Architecture at a glance</p>
                <ul>
                  {project.highlights.map(item => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </aside>
            </div>

            {project.diagrams && project.diagrams.length > 0 && (
              <ProjectDiagrams diagrams={project.diagrams} projectId={project.id} />
            )}

            <div className="architecture-list">
              {project.codeSections.map((section, index) => (
                <section key={section.title} className="architecture-row">
                  <div className="architecture-label">
                    <span className="row-number">{String(index + 1).padStart(2, '0')}</span>
                    <h4>{section.title}</h4>
                  </div>
                  <div>
                    <p>{section.description}</p>
                    <ul>
                      {section.details.map(detail => (
                        <li key={detail}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </section>
              ))}
            </div>

            <div className="project-stack">
              <h4>Project technologies</h4>
              <div className="technology-list">
                {project.tags.map(tag => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
              <p className="source-note">{project.publicScopeNote}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
