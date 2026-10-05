import React, { useEffect, useRef, useState } from 'react';

export const CustomCursor: React.FC = () => {
  const cursorDotRef = useRef<HTMLDivElement>(null);
  const cursorRingRef = useRef<HTMLDivElement>(null);
  const trailRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isPointerDevice, setIsPointerDevice] = useState(false);

  useEffect(() => {
    // Only enable on desktop pointer devices
    const mediaQuery = window.matchMedia('(pointer: fine)');
    setIsPointerDevice(mediaQuery.matches);
    if (!mediaQuery.matches) return;

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;
    let trailX = -100;
    let trailY = -100;
    let animationFrameId: number;

    const onMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (!isVisible) setIsVisible(true);

      // Instant dot positioning
      if (cursorDotRef.current) {
        cursorDotRef.current.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
      }
    };

    const onMouseDown = () => setIsClicking(true);
    const onMouseUp = () => setIsClicking(false);
    const onMouseEnter = () => setIsVisible(true);
    const onMouseLeave = () => setIsVisible(false);

    // Dynamic hover detection for interactive elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('input') ||
        target.closest('textarea') ||
        target.closest('select') ||
        target.closest('[role="button"]') ||
        target.closest('article') ||
        target.closest('.interactive-target')
      ) {
        setIsHovered(true);
      } else {
        setIsHovered(false);
      }
    };

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('mouseup', onMouseUp);
    document.addEventListener('mouseenter', onMouseEnter);
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseover', handleMouseOver);

    // Smooth physics loop for trailing ring and subtle glow aura
    const render = () => {
      // Ring smooth follow
      const ringSpeed = isHovered ? 0.25 : 0.18;
      ringX += (mouseX - ringX) * ringSpeed;
      ringY += (mouseY - ringY) * ringSpeed;

      // Trailing soft glow particle follow with slower inertia
      trailX += (mouseX - trailX) * 0.08;
      trailY += (mouseY - trailY) * 0.08;

      if (cursorRingRef.current) {
        cursorRingRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      }

      if (trailRef.current) {
        trailRef.current.style.transform = `translate3d(${trailX}px, ${trailY}px, 0)`;
      }

      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mouseenter', onMouseEnter);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseover', handleMouseOver);
      cancelAnimationFrame(animationFrameId);
    };
  }, [isVisible, isHovered]);

  if (!isPointerDevice) return null;

  return (
    <div
      className={`pointer-events-none fixed inset-0 z-[9999] transition-opacity duration-300 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      }`}
    >
      {/* 1. Ambient Trailing Glow behind cursor */}
      <div
        ref={trailRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        <div
          className={`rounded-full blur-md transition-all duration-500 ease-out ${
            isHovered
              ? 'w-16 h-16 bg-gradient-to-r from-amber-400/25 via-cyan-400/25 to-fuchsia-400/25 opacity-80'
              : 'w-10 h-10 bg-cyan-400/15 opacity-40'
          }`}
        />
      </div>

      {/* 2. Magnetic Interactive Outer Ring */}
      <div
        ref={cursorRingRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        <div
          className={`rounded-full transition-all duration-300 ease-out flex items-center justify-center ${
            isHovered
              ? 'w-12 h-12 border-2 border-amber-400 bg-amber-400/10 shadow-[0_0_20px_rgba(251,191,36,0.35)] scale-110'
              : isClicking
              ? 'w-7 h-7 border border-cyan-400/80 bg-cyan-400/20 scale-90'
              : 'w-8 h-8 border border-neutral-400/40 bg-neutral-900/10 backdrop-blur-[0.5px]'
          }`}
        >
          {isHovered && (
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-ping opacity-75" />
          )}
        </div>
      </div>

      {/* 3. Center Precision Focal Dot */}
      <div
        ref={cursorDotRef}
        className="fixed top-0 left-0 -translate-x-1/2 -translate-y-1/2 will-change-transform"
      >
        <div
          className={`rounded-full transition-all duration-150 ${
            isHovered
              ? 'w-2.5 h-2.5 bg-amber-400 shadow-[0_0_10px_#fbbf24]'
              : isClicking
              ? 'w-1.5 h-1.5 bg-cyan-300 shadow-[0_0_8px_#67e8f9]'
              : 'w-2 h-2 bg-gradient-to-tr from-cyan-400 to-amber-300 shadow-[0_0_6px_rgba(34,211,238,0.7)]'
          }`}
        />
      </div>
    </div>
  );
};
