import React from 'react';
import { ArrowDown, FileDown, Github, Linkedin, Mail, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  return (
    <section id="home" className="relative pt-28 pb-16 sm:pt-32 sm:pb-20 lg:pt-36 lg:pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column: Developer Identity & Value (7 cols) */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            
            {/* Live Availability Status */}
            <div className="inline-flex items-center gap-2 text-xs text-neutral-200 bg-neutral-900/90 border border-neutral-800 px-3.5 py-1.5 rounded-full shadow-lg shadow-black/40 backdrop-blur-md">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-medium text-neutral-300">
                Available for freelance projects & roles
              </span>
            </div>

            {/* Display Headline */}
            <div className="space-y-2 sm:space-y-3">
              <p className="text-sm font-mono font-semibold text-amber-400 tracking-wide">
                👋 Hello, I'm {PERSONAL_INFO.name}
              </p>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] font-display text-balance">
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">
                  Front-End Developer
                </span>{' '}
                &{' '}
                <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-rose-400 bg-clip-text text-transparent">
                  CMS Expert
                </span>{' '}
                <span className="text-neutral-400 block text-xl sm:text-2xl lg:text-3xl mt-1.5 font-semibold">
                  (Wix Studio & Shopify Liquid)
                </span>
              </h1>
              
              {/* Clean Unboxed Metadata */}
              <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-neutral-400 font-medium pt-1">
                <span className="flex items-center gap-1 text-neutral-300">
                  <MapPin className="w-3.5 h-3.5 text-rose-400" />
                  {PERSONAL_INFO.location}
                </span>
                <span aria-hidden="true" className="text-neutral-600">·</span>
                <span className="text-cyan-400 font-semibold font-mono">
                  {PERSONAL_INFO.projectsCompleted} Projects Delivered
                </span>
              </div>
            </div>

            {/* Concise Bio (Short, punchy, not text-heavy!) */}
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-xl">
              {PERSONAL_INFO.shortBio}
            </p>

            {/* Visual Skill Badges */}
            <div className="flex flex-wrap items-center gap-2 pt-1">
              {['Shopify Liquid', 'Theme OS 2.0', 'Wix Studio', 'Velo JS', 'React.js', 'Tailwind CSS'].map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-800 text-neutral-300 font-mono text-[11px] hover:border-cyan-400/50 hover:text-cyan-300 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-neutral-950 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-all shadow-md shadow-amber-500/20 hover:scale-[1.02]"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Resume_Tanvir_Khan.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 text-xs sm:text-sm font-semibold text-neutral-200 hover:text-white border border-neutral-700/80 hover:border-cyan-400/60 bg-neutral-900/80 hover:bg-neutral-800 rounded-xl transition-all"
              >
                <FileDown className="w-4 h-4 text-cyan-400" />
                <span>Resume (PDF)</span>
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 px-3 py-2.5 text-xs sm:text-sm font-medium text-neutral-400 hover:text-white transition-colors"
              >
                <span>Contact</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-1 text-neutral-400 text-sm">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                className="p-2 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-900 border border-neutral-800 transition-colors"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2 rounded-xl text-neutral-400 hover:text-sky-400 hover:bg-neutral-900 border border-neutral-800 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                aria-label="Send direct email"
                className="p-2 rounded-xl text-neutral-400 hover:text-amber-400 hover:bg-neutral-900 border border-neutral-800 transition-colors"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>

          </div>

          {/* Right Column: Clean Architectural Portrait (5 cols) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[280px] sm:max-w-xs md:max-w-sm">
              
              {/* Colorful gradient halo behind photo */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-cyan-500/40 via-purple-500/40 to-amber-500/40 blur-xl opacity-60" />

              <div className="relative rounded-3xl bg-neutral-900/90 border border-neutral-700/80 p-3 sm:p-4 backdrop-blur-xl shadow-2xl">
                
                {/* Photo Frame */}
                <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 group">
                  <img
                    src={PERSONAL_INFO.avatarUrl}
                    alt="Tanvir Khan - Front-End Developer & CMS Expert"
                    className="w-full h-full object-cover object-top filter grayscale contrast-105 group-hover:grayscale-0 transition-all duration-500 scale-100 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/20 to-transparent" />

                  {/* Name Overlay */}
                  <div className="absolute bottom-2.5 left-2.5 right-2.5 p-3 rounded-xl bg-neutral-950/85 border border-neutral-800/80 backdrop-blur-md">
                    <p className="text-white font-bold text-sm font-display">{PERSONAL_INFO.name}</p>
                    <p className="text-xs text-amber-400 font-medium">Front-End Developer & CMS Expert</p>
                  </div>
                </div>

                {/* Quick stats under photo */}
                <div className="grid grid-cols-2 gap-2 mt-3 pt-3 border-t border-neutral-800/80 text-center">
                  <div className="p-2 rounded-xl bg-neutral-950/60 border border-neutral-800/60">
                    <p className="text-[10px] text-neutral-400 font-mono">Completed</p>
                    <p className="text-xs font-bold text-amber-400 mt-0.5">{PERSONAL_INFO.projectsCompleted}</p>
                  </div>
                  <div className="p-2 rounded-xl bg-neutral-950/60 border border-neutral-800/60">
                    <p className="text-[10px] text-neutral-400 font-mono">Specialty</p>
                    <p className="text-xs font-bold text-cyan-400 mt-0.5">Shopify & Wix</p>
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
