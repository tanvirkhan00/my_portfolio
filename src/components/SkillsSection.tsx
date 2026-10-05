import React from 'react';
import { TECH_SKILLS } from '../data/portfolioData';
import { ShoppingBag, Code, Wrench, Sparkles } from 'lucide-react';

export const SkillsSection: React.FC = () => {
  const getIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return ShoppingBag;
      case 1:
        return Code;
      default:
        return Wrench;
    }
  };

  const getGlow = (idx: number) => {
    switch (idx) {
      case 0:
        return 'hover:border-amber-400/50 hover:shadow-[0_0_25px_rgba(251,191,36,0.15)]';
      case 1:
        return 'hover:border-cyan-400/50 hover:shadow-[0_0_25px_rgba(34,211,238,0.15)]';
      default:
        return 'hover:border-fuchsia-400/50 hover:shadow-[0_0_25px_rgba(232,121,249,0.15)]';
    }
  };

  return (
    <section id="skills" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-indigo-600/10 via-cyan-500/10 to-transparent blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative">
        
        {/* Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-indigo-500/10 border border-cyan-500/20 text-cyan-400 font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Developer Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display text-balance">
            Skills & Production Technologies
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            The programming languages, frameworks, and CMS engines I leverage daily to engineer high-converting storefronts and responsive web applications.
          </p>
        </div>

        {/* Skills Grid with colorful card accents */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TECH_SKILLS.map((group, idx) => {
            const Icon = getIcon(idx);
            const glowClass = getGlow(idx);
            return (
              <div
                key={group.category}
                className={`relative rounded-3xl bg-neutral-900/80 border border-neutral-800 p-6 sm:p-7 flex flex-col justify-between space-y-6 transition-all duration-300 backdrop-blur-md shadow-xl ${glowClass}`}
              >
                <div className="space-y-5">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 pb-3 border-b border-neutral-800">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${group.accent} p-0.5 flex items-center justify-center shadow-md`}>
                      <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center text-white">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white font-display">
                        {group.category}
                      </h3>
                      <p className="text-xs text-neutral-400 font-mono">Specialized Track</p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-3 pt-1">
                    {group.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="p-3.5 rounded-2xl bg-neutral-950/70 border border-neutral-800/80 space-y-1 hover:border-neutral-700 transition-colors"
                      >
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-bold text-white">{skill.name}</span>
                          <span className={`font-mono text-[10px] font-semibold px-2 py-0.5 rounded-full bg-gradient-to-r ${group.accent} text-neutral-950 shadow-sm`}>
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-neutral-400 leading-relaxed">
                          {skill.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-neutral-800/80 flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                  <span>Battle-Tested</span>
                  <span className="text-cyan-400 font-bold">200+ Projects</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
