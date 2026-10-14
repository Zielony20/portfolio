import { skillsCategories } from '../data/portfolioData';

export default function Skills() {
  return (
    <section id="skills" className="content-section no-print">
      <div className="page-width section-split">
        <div className="section-heading"><p className="eyebrow">02 / Skills</p><h2>Software development.<br />Across the stack.</h2><p>Technologies I work with in software development.</p></div>
        <div className="skills-list">
          {skillsCategories.map(category => (
            <section key={category.title} className="skill-row"><h3>{category.title}</h3>
              {category.description && <p>{category.description}</p>}
              <ul>{category.skills.map(skill => <li key={skill}>{skill}</li>)}</ul>
            </section>
          ))}
        </div>
      </div>
    </section>
  );
}
