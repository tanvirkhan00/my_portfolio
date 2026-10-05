import React, { useState } from 'react';
import { Briefcase, GraduationCap, MapPin, CheckCircle2, Building2, Sparkles } from 'lucide-react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../data/portfolioData';

export const ExperienceEducation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  return (
    <section id="experience" className="py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 pb-6 border-b border-neutral-800/80">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Career Track Record</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
              Experience & Education
            </h2>
            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
              Professional engineering history, current employment at Betopia Group, and academic foundation.
            </p>
          </div>

          {/* Clean Segmented Tab Switcher */}
          <div className="inline-flex p-1 bg-neutral-900 border border-neutral-800 rounded-xl self-start sm:self-auto shadow-md">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'experience'
                  ? 'bg-amber-400 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-3.5 h-3.5" />
              <span>Experience</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                activeTab === 'education'
                  ? 'bg-cyan-400 text-neutral-950 shadow-sm'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Experience */}
        {activeTab === 'experience' ? (
          <div className="space-y-6">
            {EXPERIENCE_DATA.map((exp, idx) => (
              <div
                key={idx}
                className="relative rounded-2xl bg-neutral-900/70 border border-neutral-800 p-5 sm:p-7 space-y-5 hover:border-neutral-700 transition-all duration-300 shadow-lg"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-neutral-800/80">
                  <div className="space-y-1">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                        {exp.period}
                      </span>
                      {exp.current && (
                        <span className="font-mono text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                          Current Role
                        </span>
                      )}
                    </div>

                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display pt-1">
                      {exp.role}
                    </h3>

                    <div className="flex items-center gap-1.5 text-sm font-semibold text-amber-400">
                      <Building2 className="w-4 h-4" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs text-neutral-400 font-mono self-start sm:self-center">
                    <MapPin className="w-3.5 h-3.5 text-neutral-500" />
                    <span>{exp.location}</span>
                  </div>
                </div>

                {/* Description & Impact Bullets */}
                <div className="space-y-4">
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
                    {exp.description}
                  </p>

                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {exp.bullets.map((b, bIdx) => (
                      <li
                        key={bIdx}
                        className="flex items-start gap-2 text-xs text-neutral-300 p-2.5 rounded-xl bg-neutral-950/40 border border-neutral-800/60"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Tech stack */}
                  <div className="flex flex-wrap items-center gap-1.5 pt-2">
                    {exp.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[11px] font-mono bg-neutral-950 text-neutral-300 rounded border border-neutral-800"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Tab 2: Education */
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={idx}
                className="rounded-2xl bg-neutral-900/70 border border-neutral-800 p-6 flex flex-col justify-between space-y-4 shadow-lg"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold px-2.5 py-0.5 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">
                      {edu.period}
                    </span>
                    <span className="font-mono text-xs text-neutral-400">
                      {edu.field}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-lg font-bold text-white font-display">
                      {edu.degree}
                    </h3>
                    <p className="text-xs sm:text-sm font-semibold text-cyan-400 mt-0.5">
                      {edu.institution}
                    </p>
                  </div>

                  <p className="text-xs text-neutral-300 leading-relaxed">
                    {edu.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-neutral-800/80 text-[11px] text-neutral-500 font-mono">
                  Verified Academic Degree
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
