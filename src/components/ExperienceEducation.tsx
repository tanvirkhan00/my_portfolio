import React, { useState } from 'react';
import { Briefcase, GraduationCap, MapPin, CheckCircle2, Building2, Sparkles, Calendar, ArrowUpRight } from 'lucide-react';
import { EXPERIENCE_DATA, EDUCATION_DATA } from '../data/portfolioData';

export const ExperienceEducation: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      {/* Ambient background glow specifically for this section */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-gradient-to-r from-violet-600/10 via-fuchsia-600/10 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-800/80">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 via-indigo-500/10 to-fuchsia-500/10 border border-cyan-500/20 text-cyan-400 font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
              <span>Career Journey & Credentials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display text-balance">
              Experience & Academic Foundation
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              My engineering trajectory, currently building at <strong className="text-white">Betopia Group</strong>, backed by a strong problem-solving engineering degree.
            </p>
          </div>

          {/* Interactive Switcher */}
          <div className="inline-flex p-1.5 bg-neutral-900/90 border border-neutral-800 rounded-2xl self-start md:self-auto shadow-xl backdrop-blur-md">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl transition-all ${
                activeTab === 'experience'
                  ? 'bg-gradient-to-r from-amber-400 via-orange-400 to-amber-500 text-neutral-950 shadow-lg shadow-amber-500/20 scale-[1.02]'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>Work Experience</span>
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-5 py-2.5 text-xs font-semibold rounded-xl transition-all ${
                activeTab === 'education'
                  ? 'bg-gradient-to-r from-cyan-400 via-sky-500 to-indigo-500 text-neutral-950 shadow-lg shadow-cyan-500/20 scale-[1.02]'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              <GraduationCap className="w-4 h-4" />
              <span>Education</span>
            </button>
          </div>
        </div>

        {/* Tab 1: Work Experience */}
        {activeTab === 'experience' ? (
          <div className="relative space-y-8">
            {/* Glowing Vertical Line */}
            <div className="hidden lg:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-cyan-400 via-fuchsia-500 to-amber-400 opacity-30" />

            {EXPERIENCE_DATA.map((exp, idx) => (
              <div
                key={idx}
                className="relative lg:pl-20 group"
              >
                {/* Timeline node icon on large screens */}
                <div className="hidden lg:flex absolute left-4 top-8 -translate-x-1/2 w-8 h-8 rounded-full bg-neutral-950 border-2 border-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.6)] items-center justify-center text-cyan-400 group-hover:scale-110 group-hover:border-amber-400 group-hover:text-amber-400 transition-all duration-300">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:bg-amber-400 animate-ping opacity-75" />
                </div>

                {/* Main Card with colorful gradient border glow on hover */}
                <div className="relative rounded-3xl bg-neutral-900/80 border border-neutral-800 p-6 sm:p-8 backdrop-blur-md shadow-2xl transition-all duration-300 group-hover:border-cyan-500/40 group-hover:shadow-[0_0_35px_rgba(6,182,212,0.15)]">
                  
                  {/* Top Bar */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-neutral-800/80">
                    <div className="space-y-1.5">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                          {exp.period}
                        </span>
                        <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-neutral-800 text-neutral-300">
                          {exp.type}
                        </span>
                        {idx === 0 && (
                          <span className="font-mono text-[11px] px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 flex items-center gap-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                            Current Company
                          </span>
                        )}
                      </div>

                      <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white font-display pt-1">
                        {exp.role}
                      </h3>

                      <div className="flex items-center gap-2 text-sm text-neutral-300 font-semibold">
                        <Building2 className="w-4 h-4 text-amber-400" />
                        <span className="bg-gradient-to-r from-amber-300 to-amber-500 bg-clip-text text-transparent">
                          {exp.company}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-1.5 text-xs text-neutral-400 font-mono self-start sm:self-center px-3 py-1.5 rounded-lg bg-neutral-950/60 border border-neutral-800">
                      <MapPin className="w-3.5 h-3.5 text-rose-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  {/* Body & Bullet highlights */}
                  <div className="pt-6 space-y-5">
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed font-normal">
                      {exp.description}
                    </p>

                    <div className="space-y-2.5">
                      <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                        Key Responsibilities & Impact:
                      </p>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {exp.bullets.map((bullet, bIdx) => (
                          <li
                            key={bIdx}
                            className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-300 p-2.5 rounded-xl bg-neutral-950/40 border border-neutral-800/60 hover:border-neutral-700 transition-colors"
                          >
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="pt-3 flex flex-wrap items-center gap-2">
                      <span className="text-xs text-neutral-500 font-mono">Tech Stack:</span>
                      {exp.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1 text-xs font-mono rounded-lg bg-neutral-950 text-neutral-300 border border-neutral-800 hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Tab 2: Education */
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {EDUCATION_DATA.map((edu, idx) => (
              <div
                key={idx}
                className="relative rounded-3xl bg-neutral-900/80 border border-neutral-800 p-6 sm:p-8 backdrop-blur-md shadow-2xl flex flex-col justify-between space-y-6 hover:border-cyan-500/40 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-amber-400/10 text-amber-400 border border-amber-400/20">
                      {edu.period}
                    </span>
                    <span className="font-mono text-xs text-neutral-400">
                      {edu.field}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
                      {edu.degree}
                    </h3>
                    <p className="text-sm font-semibold text-cyan-400">
                      {edu.institution}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed pt-1">
                    {edu.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80 flex items-center justify-between text-xs text-neutral-500 font-mono">
                  <span>Verified Degree</span>
                  <span className="text-emerald-400">Honorable Graduation</span>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
};
