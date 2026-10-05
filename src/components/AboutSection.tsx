import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { MapPin, Code, Sparkles, Building2, ShoppingBag, FileDown } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      {/* Colorful background radial aura */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-tr from-fuchsia-600/10 via-purple-600/10 to-cyan-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full bg-gradient-to-r from-amber-400/10 via-orange-400/10 to-rose-400/10 border border-amber-400/20 text-amber-400 font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Developer Profile & Story</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display text-balance">
            A look into who I am, what I build, and my journey
          </h2>
        </div>

        {/* 2-Column Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          
          {/* Left Column: Personal Story (7 cols) */}
          <div className="lg:col-span-7 space-y-6 text-neutral-300 text-sm sm:text-base leading-relaxed">
            {PERSONAL_INFO.aboutStory.map((paragraph, idx) => (
              <p key={idx} className="text-neutral-300">
                {paragraph}
              </p>
            ))}

            {/* What I Focus On Today */}
            <div className="pt-4 border-t border-neutral-800 space-y-3">
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                What I Build & Specialize In
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-emerald-500/40 transition-colors space-y-1.5 shadow-lg">
                  <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold font-mono">
                    <ShoppingBag className="w-4 h-4" />
                    <span>Shopify Liquid & OS 2.0</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Custom JSON templates, dynamic cart drawers, variant swatches, and app integrations.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-amber-500/40 transition-colors space-y-1.5 shadow-lg">
                  <div className="flex items-center gap-2 text-amber-400 text-xs font-bold font-mono">
                    <Sparkles className="w-4 h-4" />
                    <span>Wix Studio & Velo Code</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Fluid responsive layouts across breakpoints, dynamic CMS collections, and custom Velo scripting.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-cyan-500/40 transition-colors space-y-1.5 shadow-lg">
                  <div className="flex items-center gap-2 text-cyan-400 text-xs font-bold font-mono">
                    <Code className="w-4 h-4" />
                    <span>React & Tailwind CSS</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Interactive Single Page Applications, component-driven UI, state management, and modern animations.
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 hover:border-fuchsia-500/40 transition-colors space-y-1.5 shadow-lg">
                  <div className="flex items-center gap-2 text-fuchsia-400 text-xs font-bold font-mono">
                    <Sparkles className="w-4 h-4" />
                    <span>Speed, CRO & Mobile First</span>
                  </div>
                  <p className="text-xs text-neutral-400 leading-relaxed">
                    Lighthouse audit improvements, image lazy loading, script optimization, and seamless mobile checkouts.
                  </p>
                </div>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Resume_Tanvir_Khan.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold bg-gradient-to-r from-amber-400 to-orange-400 text-neutral-950 rounded-xl hover:from-amber-300 hover:to-amber-400 transition-all shadow-md shadow-amber-500/20"
              >
                <FileDown className="w-4 h-4" />
                <span>Download My Resume (PDF)</span>
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-semibold text-neutral-200 hover:text-white border border-neutral-700 bg-neutral-900 hover:bg-neutral-800 rounded-xl transition-all"
              >
                <span>Say Hello 👋</span>
              </a>
            </div>
          </div>

          {/* Right Column: Colorful Profile Card (5 cols) */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-3xl bg-neutral-900/90 border border-neutral-800 p-6 sm:p-7 space-y-6 shadow-2xl backdrop-blur-xl">
              
              <div className="flex items-center justify-between pb-4 border-b border-neutral-800">
                <span className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                  Personal Snapshot
                </span>
                <span className="px-2.5 py-1 text-[11px] font-mono font-bold rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  Betopia Group
                </span>
              </div>

              {/* Quick Facts List */}
              <div className="space-y-3.5 text-xs">
                <div className="flex items-center justify-between py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400 font-mono">Location</span>
                  <span className="text-white font-medium flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-rose-400" />
                    Dhaka, Bangladesh
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400 font-mono">Current Company</span>
                  <span className="text-cyan-400 font-bold flex items-center gap-1">
                    <Building2 className="w-3.5 h-3.5" />
                    Betopia Group
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400 font-mono">Role</span>
                  <span className="text-amber-400 font-bold text-right">
                    Front-End Dev & CMS Expert
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400 font-mono">Delivered Projects</span>
                  <span className="text-white font-mono font-bold bg-neutral-800 px-2 py-0.5 rounded">
                    200+ Projects
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400 font-mono">Education</span>
                  <span className="text-neutral-200 font-medium text-right">
                    B.Sc. in Civil Engineering (2023)
                  </span>
                </div>

                <div className="flex items-center justify-between py-1 border-b border-neutral-800/60">
                  <span className="text-neutral-400 font-mono">Email</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="text-neutral-300 hover:text-amber-400 font-mono transition-colors"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>

                <div className="flex items-center justify-between py-1">
                  <span className="text-neutral-400 font-mono">Availability</span>
                  <span className="text-emerald-400 font-bold flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    Ready for new challenges
                  </span>
                </div>
              </div>

              {/* Colorful Highlight Motto */}
              <div className="p-4 rounded-2xl bg-gradient-to-r from-cyan-950/40 via-purple-950/40 to-amber-950/40 border border-neutral-800 text-xs text-neutral-300 leading-relaxed italic">
                "I craft digital products where structural precision, colorful visuals, and clean code elevate the user experience."
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
