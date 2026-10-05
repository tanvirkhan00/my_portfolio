import React from 'react';
import { ArrowDown, FileDown, Github, Linkedin, Mail, MapPin, Sparkles, Star } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-40 lg:pb-28 overflow-hidden">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Developer Identity & Value (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Live Availability & Company Badge */}
            <div className="inline-flex flex-wrap items-center gap-2 text-xs">
              <div className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-neutral-900/90 border border-neutral-800 px-4 py-1.5 rounded-full shadow-lg shadow-black/40 backdrop-blur-md">
                <span className="relative flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="font-semibold text-emerald-400">Available for Opportunities</span>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs text-cyan-300 bg-cyan-950/40 border border-cyan-500/30 px-3.5 py-1.5 rounded-full backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>Web Developer at <strong className="text-white">Betopia Group</strong></span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <p className="text-sm sm:text-base font-mono font-semibold tracking-wide text-amber-400 flex items-center gap-2">
                <span>👋 Hello, I'm</span>
                <span className="text-white font-bold bg-neutral-900/80 px-2.5 py-0.5 rounded-md border border-neutral-800">
                  Tanvir Khan
                </span>
              </p>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] font-display text-balance">
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                  Front-End Developer
                </span>{' '}
                &{' '}
                <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                  CMS Expert
                </span>{' '}
                <span className="text-neutral-300 block text-2xl sm:text-3xl lg:text-4xl mt-2 font-semibold">
                  (Wix Studio & Shopify Liquid)
                </span>
              </h1>
              
              {/* Unboxed colorful metadata */}
              <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm text-neutral-300 font-medium pt-2">
                <span className="px-2.5 py-0.5 rounded-md bg-amber-400/10 text-amber-400 font-semibold border border-amber-400/20">
                  Betopia Group
                </span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span className="flex items-center gap-1 text-neutral-300">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  {PERSONAL_INFO.location}
                </span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span className="text-cyan-400 font-bold font-mono">
                  200+ Projects Completed
                </span>
              </div>
            </div>

            {/* Developer Bio */}
            <p className="text-neutral-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
              I build colorful, high-performing websites and conversion-engineered e-commerce stores. Specialized in custom Shopify Liquid themes, dynamic Wix Studio architectures, and modern React/Tailwind applications.
            </p>

            {/* Colorful Core Toolbox preview */}
            <div className="pt-2">
              <p className="text-xs uppercase tracking-wider text-neutral-400 font-semibold mb-2.5 font-mono flex items-center gap-2">
                <span>Core Toolset & Specializations</span>
                <span className="h-px flex-1 bg-gradient-to-r from-neutral-800 to-transparent max-w-[120px]" />
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                {[
                  { name: 'Shopify Liquid', color: 'border-emerald-500/40 text-emerald-300 bg-emerald-950/30' },
                  { name: 'Wix Studio', color: 'border-amber-500/40 text-amber-300 bg-amber-950/30' },
                  { name: 'Velo (JavaScript)', color: 'border-cyan-500/40 text-cyan-300 bg-cyan-950/30' },
                  { name: 'React.js', color: 'border-blue-500/40 text-blue-300 bg-blue-950/30' },
                  { name: 'Tailwind CSS', color: 'border-teal-500/40 text-teal-300 bg-teal-950/30' },
                  { name: 'Theme OS 2.0', color: 'border-fuchsia-500/40 text-fuchsia-300 bg-fuchsia-950/30' },
                ].map((tech) => (
                  <span
                    key={tech.name}
                    className={`px-3 py-1 rounded-lg border font-mono text-xs font-medium shadow-sm transition-all hover:scale-105 ${tech.color}`}
                  >
                    {tech.name}
                  </span>
                ))}
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-xs sm:text-sm font-bold text-neutral-950 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.02] focus:outline-none"
              >
                <span>Explore Projects ({PERSONAL_INFO.projectsCompleted})</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Resume_Tanvir_Khan.pdf"
                className="inline-flex items-center gap-2 px-5 py-3 text-xs sm:text-sm font-semibold text-neutral-200 hover:text-white border border-neutral-700/80 hover:border-cyan-400/60 bg-neutral-900/80 hover:bg-neutral-800 rounded-xl transition-all shadow-lg hover:shadow-cyan-500/20"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Download Resume</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-4 py-3 text-xs sm:text-sm font-medium text-neutral-300 hover:text-white transition-colors"
              >
                <span>Get in touch →</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4 pt-2 text-neutral-400 text-sm">
              <span className="text-xs text-neutral-500 uppercase tracking-wider font-mono">Connect:</span>
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900 border border-neutral-800 hover:border-neutral-700 transition-all hover:scale-105"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 rounded-xl text-neutral-400 hover:text-sky-400 hover:bg-neutral-900 border border-neutral-800 hover:border-sky-500/40 transition-all hover:scale-105"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send direct email"
                className="p-2.5 rounded-xl text-neutral-400 hover:text-amber-400 hover:bg-neutral-900 border border-neutral-800 hover:border-amber-500/40 transition-all hover:scale-105"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Architectural Profile Card with Colorful Glowing Aura (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm sm:max-w-md">
              
              {/* Colorful gradient halo behind photo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500 via-fuchsia-500 to-amber-500 opacity-60 blur-xl group-hover:opacity-90 transition-opacity animate-pulse" style={{ animationDuration: '6s' }} />

              <div className="relative rounded-3xl bg-neutral-900/90 border border-neutral-700/80 p-4 sm:p-5 backdrop-blur-xl shadow-2xl">
                
                {/* Photo Frame */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 group">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt="Tanvir Khan - Front-End Developer & CMS Expert"
                    className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                  />
                  
                  {/* Colorful subtle scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                  {/* Company & Name Floating Card */}
                  <div className="absolute bottom-3 left-3 right-3 p-3.5 rounded-xl bg-neutral-950/85 border border-neutral-800 backdrop-blur-md shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-white font-bold text-base font-display">{PERSONAL_INFO.name}</p>
                        <p className="text-xs text-amber-400 font-medium">Front-End Developer & CMS Expert</p>
                        <p className="text-[11px] text-cyan-300 font-mono mt-0.5">Betopia Group</p>
                      </div>
                      <div className="w-9 h-9 rounded-full bg-gradient-to-br from-cyan-400 to-fuchsia-500 p-0.5 flex items-center justify-center">
                        <div className="w-full h-full rounded-full bg-neutral-950 flex items-center justify-center text-white text-xs font-bold font-mono">
                          TK
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Quick stats under photo with colorful numbers */}
                <div className="grid grid-cols-2 gap-3 mt-4 pt-3 border-t border-neutral-800">
                  <div className="p-3 rounded-xl bg-neutral-950/70 border border-neutral-800/80">
                    <p className="text-[10px] text-neutral-400 uppercase tracking-wider font-mono">Company</p>
                    <p className="text-xs font-bold text-cyan-400 mt-0.5">Betopia Group</p>
                  </div>
                  <div className="p-3 rounded-xl bg-neutral-950/70 border border-neutral-800/80">
                    <p className="text-[10px] text-neutral-400 uppercase tracking-wider font-mono">Completed</p>
                    <p className="text-xs font-bold text-amber-400 mt-0.5">200+ Projects</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
