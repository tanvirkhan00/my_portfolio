import React from 'react';
import { ArrowUp, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-800 bg-neutral-950/90 py-12 text-xs text-neutral-400 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Top Tier */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-6 border-b border-neutral-800/80">
          <div className="text-center sm:text-left space-y-1">
            <a
              href="#home"
              className="text-base font-bold text-white font-display tracking-tight hover:text-amber-400 transition-colors flex items-center justify-center sm:justify-start gap-2"
            >
              <span>{PERSONAL_INFO.name}</span>
              <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                Betopia Group
              </span>
            </a>
            <p className="text-[11px] text-neutral-400">
              Front-End Developer & CMS Expert (Wix & Shopify) · 200+ Projects Completed
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs font-medium text-neutral-300">
            <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
            <a href="#projects" className="hover:text-amber-400 transition-colors">Projects</a>
            <a href="#experience" className="hover:text-amber-400 transition-colors">Experience</a>
            <a href="#skills" className="hover:text-amber-400 transition-colors">Skills</a>
            <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-neutral-900 border border-neutral-800 text-neutral-300 hover:text-white hover:border-neutral-700 transition-colors text-xs"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-cyan-400" />
          </button>
        </div>

        {/* Bottom Tier */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-neutral-400">
          <p>
            Designed & Developed by {PERSONAL_INFO.name}. Built with React, Tailwind CSS & Motion.
          </p>

          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-white transition-colors"
            >
              GitHub
            </a>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-sky-400 transition-colors"
            >
              LinkedIn
            </a>
            <span aria-hidden="true" className="text-neutral-700">·</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-amber-400 transition-colors"
            >
              Email
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
