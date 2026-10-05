import React from 'react';
import { ShoppingBag, Code, Terminal, CheckCircle2, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const StatsBar: React.FC = () => {
  const highlights = [
    {
      icon: ShoppingBag,
      value: "200+",
      label: "Projects Completed",
      sub: "Shopify stores, Wix sites & React apps",
      gradient: "from-amber-400 to-orange-500",
      borderGlow: "group-hover:border-amber-400/60",
    },
    {
      icon: Code,
      value: "Betopia Group",
      label: "Current Company",
      sub: "Front-End Developer & CMS Expert",
      gradient: "from-cyan-400 to-blue-500",
      borderGlow: "group-hover:border-cyan-400/60",
    },
    {
      icon: Terminal,
      value: "Shopify & Wix",
      label: "CMS Specialization",
      sub: "Liquid OS 2.0 & Velo custom code",
      gradient: "from-fuchsia-400 to-pink-500",
      borderGlow: "group-hover:border-fuchsia-400/60",
    },
    {
      icon: CheckCircle2,
      value: "100%",
      label: "Responsive Precision",
      sub: "Cross-device tested on iOS & Android",
      gradient: "from-emerald-400 to-teal-400",
      borderGlow: "group-hover:border-emerald-400/60",
    },
  ];

  return (
    <section className="relative border-y border-neutral-800/80 bg-neutral-950/70 py-10 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className={`space-y-1.5 border-l-2 border-neutral-800 pl-4 sm:pl-5 transition-all duration-300 group hover:-translate-y-0.5 ${item.borderGlow}`}
              >
                <div className="flex items-center gap-1.5 text-neutral-400 group-hover:text-white transition-colors">
                  <Icon className="w-4 h-4 text-neutral-400 group-hover:scale-110 transition-transform" />
                  <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                    Stat 0{idx + 1}
                  </span>
                </div>
                <div className={`text-xl sm:text-2xl lg:text-3xl font-extrabold font-mono tracking-tight bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                  {item.value}
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">
                  {item.label}
                </div>
                <p className="text-[11px] text-neutral-400 leading-snug">
                  {item.sub}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
