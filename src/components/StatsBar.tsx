import React from 'react';
import { ShoppingBag, Code, Terminal, CheckCircle2 } from 'lucide-react';

export const StatsBar: React.FC = () => {
  const stats = [
    {
      icon: ShoppingBag,
      value: "200+",
      label: "Projects Completed",
      sub: "Shopify stores, Wix sites & React apps",
      gradient: "from-amber-400 to-orange-500",
    },
    {
      icon: Code,
      value: "2+ Years",
      label: "Hands-on Experience",
      sub: "CMS customization & web architecture",
      gradient: "from-cyan-400 to-blue-500",
    },
    {
      icon: Terminal,
      value: "Shopify & Wix",
      label: "CMS Specialization",
      sub: "Liquid OS 2.0 & Velo custom code",
      gradient: "from-fuchsia-400 to-pink-500",
    },
    {
      icon: CheckCircle2,
      value: "100%",
      label: "Responsive Precision",
      sub: "Mobile-first tested across iOS & Android",
      gradient: "from-emerald-400 to-teal-400",
    },
  ];

  return (
    <section className="relative border-y border-neutral-800/80 bg-neutral-950/60 py-8 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {stats.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.label}
                className="space-y-1 border-l-2 border-neutral-800/80 pl-3.5 sm:pl-4 transition-all duration-300 group hover:border-amber-400"
              >
                <div className="flex items-center gap-1.5 text-neutral-400">
                  <Icon className="w-3.5 h-3.5 text-neutral-400 group-hover:scale-110 transition-transform" />
                  <span className={`text-lg sm:text-2xl lg:text-3xl font-extrabold font-mono tracking-tight bg-gradient-to-r ${item.gradient} bg-clip-text text-transparent`}>
                    {item.value}
                  </span>
                </div>
                <div className="text-xs sm:text-sm font-bold text-white">
                  {item.label}
                </div>
                <p className="text-[11px] text-neutral-400 leading-snug line-clamp-1">
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
