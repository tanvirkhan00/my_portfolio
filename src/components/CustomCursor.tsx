import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);
  const orbitRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    // Check if device supports fine mouse pointer (not touch-only)
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsPointerDevice(mediaQuery.matches);

    if (!mediaQuery.matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let followerX = -100;
    let followerY = -100;
    let rotation = 0;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isVisible) setIsVisible(true);

      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    // Track clickable elements for interactive expansion
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.closest('[role="button"]') ||
        target.closest('.interactive-hover')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    // Smooth trailing physics and continuous colorful orbit rotation
    const render = () => {
      // Lerp smoothing
      const ease = isHovered ? 0.22 : 0.14;
      followerX += (mouseX - followerX) * ease;
      followerY += (mouseY - followerY) * ease;

      // Speed up spin when hovered
      rotation += isHovered ? 3.5 : 1.8;
      if (rotation >= 360) rotation -= 360;

      if (cursorFollowerRef.current) {
        cursorFollowerRef.current.style.transform = `translate3d(${followerX}px, ${followerY}px, 0)`;
      }

      if (orbitRef.current) {
        orbitRef.current.style.transform = `rotate(${rotation}deg)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, isHovered]);

  if (!isPointerDevice) return null;

  return (
    <div className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      
      {/* Follower with orbiting colorful satellites behind the cursor */}
      <div
        ref={cursorFollowerRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        <div
          ref={orbitRef}
          className={`relative transition-all duration-300 ease-out flex items-center justify-center ${
            isHovered
              ? 'w-14 h-14 border border-cyan-400/50 bg-cyan-500/10 shadow-[0_0_25px_rgba(6,182,212,0.4)]'
              : 'w-10 h-10 border border-amber-400/40 bg-purple-500/5 shadow-[0_0_15px_rgba(245,158,11,0.25)]'
          } rounded-full backdrop-blur-[1px]`}
        >
          {/* Orbiting Satellite 1: Vibrant Cyan Star */}
          <span
            className={`absolute -top-1.5 left-1/2 -translate-x-1/2 rounded-full transition-all duration-300 ${
              isHovered
                ? 'w-3 h-3 bg-cyan-400 shadow-[0_0_10px_#22d3ee]'
                : 'w-2 h-2 bg-cyan-400 shadow-[0_0_8px_#22d3ee]'
            }`}
          />

          {/* Orbiting Satellite 2: Neon Fuchsia Star */}
          <span
            className={`absolute top-1/2 -right-1.5 -translate-y-1/2 rounded-full transition-all duration-300 ${
              isHovered
                ? 'w-2.5 h-2.5 bg-fuchsia-400 shadow-[0_0_10px_#e879f9]'
                : 'w-1.5 h-1.5 bg-fuchsia-400 shadow-[0_0_6px_#e879f9]'
            }`}
          />

          {/* Orbiting Satellite 3: Radiant Amber Star */}
          <span
            className={`absolute -bottom-1.5 left-1/2 -translate-x-1/2 rounded-full transition-all duration-300 ${
              isHovered
                ? 'w-3 h-3 bg-amber-400 shadow-[0_0_10px_#fbbf24]'
                : 'w-2 h-2 bg-amber-400 shadow-[0_0_8px_#fbbf24]'
            }`}
          />

          {/* Orbiting Satellite 4: Emerald Sparkle */}
          <span
            className={`absolute top-1/2 -left-1.5 -translate-y-1/2 rounded-full transition-all duration-300 ${
              isHovered
                ? 'w-2.5 h-2.5 bg-emerald-400 shadow-[0_0_10px_#34d399]'
                : 'w-1.5 h-1.5 bg-emerald-400 shadow-[0_0_6px_#34d399]'
            }`}
          />
        </div>
      </div>

      {/* Center Precise Dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        <div
          className={`rounded-full transition-all duration-200 ${
            isHovered
              ? 'w-2 h-2 bg-white shadow-[0_0_12px_#ffffff]'
              : 'w-2 h-2 bg-gradient-to-r from-amber-400 to-fuchsia-500 shadow-[0_0_8px_rgba(245,158,11,0.8)]'
          }`}
        />
      </div>

    </div>
  );
};
