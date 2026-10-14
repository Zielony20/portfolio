import { experienceTimeline, educationHistory } from '../data/portfolioData';

export default function Experience() {
  return (
    <section id="experience" className="content-section experience-section no-print">
      <div className="page-width">
        <div className="section-heading"><p className="eyebrow">03 / Experience</p><h2>The experience behind the code.</h2></div>
        <div className="experience-layout">
          <div className="career-list">
            {experienceTimeline.map(item => (
              <article key={item.company} className="career-entry"><p className="career-period">{item.period}</p><h3>{item.role}</h3><p className="career-company">{item.company} · {item.location}</p><p>{item.description}</p>
                {item.bulletPoints && <ul>{item.bulletPoints.map(point => <li key={point}>{point}</li>)}</ul>}
              </article>
            ))}
          </div>
          <aside className="education-list"><h3>Education</h3>{educationHistory.map(edu => (
            <article key={edu.degree}><p className="career-period">{edu.period}</p><h4>{edu.degree}</h4><p>{edu.school}</p><p className="education-specialty">{edu.specialty}</p>{edu.thesis && <p className="education-thesis"><span>Thesis: </span>{edu.thesis}</p>}</article>
          ))}</aside>
        </div>
      </div>
    </section>
  );
}
