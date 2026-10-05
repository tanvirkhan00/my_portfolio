import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const StickyActions: React.FC = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show back to top button after scrolling down 280px
      if (window.scrollY > 280) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial state
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const whatsappNumber = PERSONAL_INFO.whatsapp.replace('+', '');
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hi%20Tanvir,%20I%20came%20across%20your%20portfolio%20and%20would%20love%20to%20discuss%20a%20project!`;

  return (
    <aside aria-label="Floating Actions" className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-40 flex flex-col items-center gap-3 pointer-events-none">
      
      {/* 1. Sticky Back to Top Button */}
      <div className={`transition-all duration-300 ease-out transform ${
        showScrollTop ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
      }`}>
        <button
          onClick={scrollToTop}
          aria-label="Scroll to top of page"
          title="Back to top"
          className="group relative flex items-center justify-center w-11 h-11 sm:w-12 sm:h-12 rounded-2xl bg-neutral-900/90 hover:bg-neutral-800 text-neutral-300 hover:text-white border border-neutral-700/80 hover:border-cyan-400/60 shadow-xl shadow-black/60 backdrop-blur-md transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400"
        >
          <ArrowUp className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform text-cyan-400" />
          
          {/* Desktop Hover Tooltip */}
          <span className="hidden sm:block absolute right-full mr-3 px-2.5 py-1 rounded-lg bg-neutral-900 border border-neutral-700 text-[11px] font-medium text-neutral-200 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
            Back to top
          </span>
        </button>
      </div>

      {/* 2. Sticky WhatsApp Action Button */}
      <div className="pointer-events-auto">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Chat with Tanvir Khan on WhatsApp"
          className="group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl shadow-[#25D366]/30 hover:shadow-[#25D366]/50 transition-all duration-200 hover:scale-110 active:scale-95 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
        >
          {/* Glowing pulse ring */}
          <span className="absolute inset-0 rounded-2xl bg-[#25D366] opacity-40 animate-ping pointer-events-none" style={{ animationDuration: '3s' }} />

          {/* Official WhatsApp SVG Icon */}
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7 fill-current relative z-10"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path d="M17.507 14.307l-.009.075c-.236.992-1.102 1.872-2.109 2.144-.459.124-.969.176-1.545.158-1.579-.05-3.08-.755-4.437-2.112-1.357-1.357-2.062-2.858-2.112-4.437-.018-.576.034-1.086.158-1.545.272-1.007 1.152-1.873 2.144-2.109.289-.069.589-.069.878 0 .285.068.536.236.702.473l1.109 1.583c.277.396.315.912.096 1.344l-.524.873c-.092.153-.082.348.026.491.442.589.96 1.107 1.549 1.549.143.108.338.118.491.026l.873-.524c.432-.219.948-.181 1.344.096l1.583 1.109c.237.166.405.417.473.702.069.289.069.589 0 .878zM12 2C6.477 2 2 6.477 2 12c0 1.89.525 3.66 1.438 5.17L2 22l4.98-1.405C8.423 21.493 10.155 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2z" />
          </svg>

          {/* Desktop Hover Tooltip */}
          <span className="hidden sm:flex items-center gap-1.5 absolute right-full mr-3 px-3 py-1.5 rounded-xl bg-neutral-950/95 border border-neutral-700 text-xs font-semibold text-white whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-xl">
            <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse" />
            <span>Chat on WhatsApp</span>
          </span>
        </a>
      </div>

    </aside>
  );
};
