import React from 'react';
import { PERSONAL_INFO } from '../data/portfolioData';
import { Code, Sparkles, ShoppingBag, Layers, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  const highlights = [
    {
      icon: ShoppingBag,
      title: "Shopify Liquid & Theme OS 2.0",
      desc: "Custom section schemas, dynamic cart drawers, variant swatches, and third-party app integration.",
      badge: "E-Commerce",
      color: "border-emerald-500/30 text-emerald-400 bg-emerald-950/20",
    },
    {
      icon: Layers,
      title: "Wix Studio & Velo Code",
      desc: "Fluid responsive typography, dynamic CMS database collections, and custom JavaScript interactions.",
      badge: "CMS Platform",
      color: "border-amber-500/30 text-amber-400 bg-amber-950/20",
    },
    {
      icon: Code,
      title: "React & Modern Frontend",
      desc: "Component-driven Single Page Applications, Tailwind CSS design systems, and responsive layouts.",
      badge: "Frontend UI",
      color: "border-cyan-500/30 text-cyan-400 bg-cyan-950/20",
    },
    {
      icon: Zap,
      title: "Speed, CRO & Mobile-First",
      desc: "Passing Google Core Web Vitals, asset optimization, zero layout shift, and smooth checkout flows.",
      badge: "Optimization",
      color: "border-fuchsia-500/30 text-fuchsia-400 bg-fuchsia-950/20",
    },
  ];

  return (
    <section id="about" className="py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative">
        
        {/* Section Header */}
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Developer Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            About Me & What I Build
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            {PERSONAL_INFO.shortBio}
          </p>
        </div>

        {/* 4 Focused Visual Cards (Visual over text-heavy!) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="relative rounded-2xl bg-neutral-900/70 border border-neutral-800 p-5 flex flex-col justify-between space-y-4 hover:border-neutral-700 transition-all duration-300 shadow-md group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-9 h-9 rounded-xl bg-neutral-950 border border-neutral-800 flex items-center justify-center text-white group-hover:scale-105 transition-transform">
                      <Icon className="w-4 h-4 text-amber-400" />
                    </div>
                    <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full border ${item.color}`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-white font-display leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-2 border-t border-neutral-800/80 text-[10px] font-mono text-neutral-500">
                  Production Specialty
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
