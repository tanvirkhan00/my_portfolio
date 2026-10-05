import React from 'react';

export const ColorfulBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
      {/* Deep Dark Base Canvas */}
      <div className="absolute inset-0 bg-[#07070b]" />

      {/* Floating Animated Aurora Orb 1: Vibrant Violet / Indigo */}
      <div
        className="absolute -top-[10%] left-[15%] w-[650px] h-[650px] rounded-full bg-gradient-to-tr from-violet-600/25 via-indigo-500/20 to-purple-600/10 blur-[130px] animate-pulse"
        style={{ animationDuration: '9s' }}
      />

      {/* Floating Animated Aurora Orb 2: Electric Cyan / Sky */}
      <div
        className="absolute top-[35%] -right-[10%] w-[600px] h-[600px] rounded-full bg-gradient-to-br from-cyan-500/20 via-sky-600/15 to-teal-400/10 blur-[140px] animate-pulse"
        style={{ animationDuration: '11s', animationDelay: '2s' }}
      />

      {/* Floating Animated Aurora Orb 3: Radiant Amber / Sunset Gold */}
      <div
        className="absolute top-[60%] -left-[10%] w-[550px] h-[550px] rounded-full bg-gradient-to-tr from-amber-500/20 via-orange-500/15 to-rose-500/10 blur-[130px] animate-pulse"
        style={{ animationDuration: '13s', animationDelay: '4s' }}
      />

      {/* Floating Animated Aurora Orb 4: Neon Fuchsia / Pink */}
      <div
        className="absolute -bottom-[10%] right-[20%] w-[700px] h-[700px] rounded-full bg-gradient-to-tl from-fuchsia-600/20 via-pink-500/15 to-purple-600/15 blur-[140px] animate-pulse"
        style={{ animationDuration: '10s', animationDelay: '1s' }}
      />

      {/* Subtle fine mesh grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.8) 1px, transparent 0)`,
          backgroundSize: '36px 36px',
        }}
      />
    </div>
  );
};
