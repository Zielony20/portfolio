import { useEffect, useRef } from 'react';
import { personalData, featuredProjects, skillsCategories, experienceTimeline, educationHistory } from '../data/portfolioData';
import { Printer, X, Mail, Phone, MapPin, Globe } from 'lucide-react';

export default function PrintableCV({ onClose }) {
  const dialogRef = useRef(null);
  useEffect(() => {
    const dialog = dialogRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.showModal();
    return () => { dialog.close(); document.body.style.overflow = previousOverflow; };
  }, []);

  const handlePrint = () => {
    window.print();
  };

  return (
    <dialog ref={dialogRef} onCancel={onClose} aria-label="CV preview" className="cv-modal">
      {/* Floating Action Controls (Hidden when printing) */}
      <div className="max-w-4xl mx-auto mb-4 flex items-center justify-between no-print">
        <button
          onClick={onClose}
          className="cv-action"
        >
          <X className="w-4 h-4" />
          <span>Close CV preview</span>
        </button>

        <button
          onClick={handlePrint}
          className="cv-action cv-action-primary"
        >
          <Printer className="w-4 h-4" />
          <span>Print / Save as PDF</span>
        </button>
      </div>

      {/* Printable Paper A4 Page Container */}
      <div className="max-w-4xl mx-auto bg-white text-slate-900 rounded-xl p-8 sm:p-12 print-container print:shadow-none print:p-0 print:m-0 print:max-w-full">
        {/* Header */}
        <div className="border-b border-slate-200 pb-6 mb-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold text-slate-900 tracking-tight">
                {personalData.name}
              </h1>
              <p className="text-teal-900 font-semibold text-base mt-1">
                {personalData.title}
              </p>
            </div>

            {/* Contact Details */}
            <div className="text-xs space-y-1 text-slate-600 font-medium">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-slate-400" />
                <span>{personalData.email}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-slate-400" />
                <span>{personalData.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>{personalData.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-slate-400" />
                <span>{personalData.github}</span>
              </div>
            </div>
          </div>

          <p className="text-xs text-slate-600 mt-4 leading-relaxed border-t border-slate-100 pt-3">
            {personalData.bio}
          </p>
        </div>

        {/* 2 Column Content Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Main Column (2/3 width) - Work Experience & Key Projects */}
          <div className="md:col-span-2 space-y-6">
            {/* Experience Section */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 pb-1 mb-3">
                Work experience
              </h2>

              <div className="space-y-4">
                {experienceTimeline.map((exp, idx) => (
                  <div key={idx}>
                    <div className="flex justify-between items-baseline mb-0.5">
                      <span className="font-bold text-sm text-slate-900">{exp.role}</span>
                      <span className="text-xs font-mono text-slate-500">{exp.period}</span>
                    </div>
                    <div className="text-xs font-semibold text-teal-900 mb-1">
                      {exp.company} | {exp.location}
                    </div>
                    <p className="text-xs text-slate-600 mb-1 leading-snug">
                      {exp.description}
                    </p>
                    {exp.bulletPoints && (
                      <ul className="list-disc list-inside text-xs text-slate-600 space-y-0.5 pl-1">
                        {exp.bulletPoints.map((point, pIdx) => (
                          <li key={pIdx}>{point}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Featured Projects Section */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 pb-1 mb-3">
                Featured projects
              </h2>

              <div className="space-y-3">
                {featuredProjects.map((proj) => (
                  <div key={proj.id} className="bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <div className="font-bold text-xs text-slate-900">{proj.title}</div>
                    <div className="text-xs text-slate-600 mb-1">{proj.cvDescription || proj.description}</div>
                    <div className="text-xs font-mono text-teal-900">
                      Stack: {proj.tags.slice(0, 8).join(", ")}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Side Column (1/3 width) - Education & Skills */}
          <div className="space-y-6">
            {/* Education Section */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 pb-1 mb-3">
                Education
              </h2>

              <div className="space-y-3">
                {educationHistory.map((edu, idx) => (
                  <div key={idx}>
                    <div className="font-bold text-xs text-slate-900">{edu.degree}</div>
                    <div className="text-xs font-semibold text-slate-700">{edu.school}</div>
                    <div className="text-xs text-slate-500 font-mono mb-1">{edu.period} | {edu.specialty}</div>
                    {edu.thesis && (
                      <div className="text-xs text-slate-600 italic">
                        Thesis: {edu.thesis}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Skills Summary */}
            <div>
              <h2 className="text-xs font-bold uppercase tracking-wider text-slate-400 border-b border-slate-200 pb-1 mb-3">
                Skills
              </h2>

              <div className="space-y-3">
                {skillsCategories.map((cat, idx) => (
                  <div key={idx}>
                    <div className="text-xs font-bold text-slate-800 mb-1">{cat.title}</div>
                    <div className="flex flex-wrap gap-1">
                      {cat.skills.map((skill) => (
                        <span key={skill} className="px-1.5 py-0.5 rounded bg-slate-100 text-slate-700 text-xs font-mono">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* GDPR Clause */}
        <div className="mt-8 pt-4 border-t border-slate-200 text-xs text-slate-400 leading-tight text-center">
          I consent to the processing of my personal data for recruitment purposes in accordance with Regulation (EU) 2016/679 (GDPR).
        </div>
      </div>
    </dialog>
  );
}
