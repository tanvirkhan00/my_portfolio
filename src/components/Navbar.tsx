import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-neutral-950/85 backdrop-blur-xl border-b border-neutral-800/80 py-3 shadow-2xl shadow-black/60'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Zone 1: Wordmark with glowing colorful badge */}
        <a
          href="#home"
          className="group flex items-center gap-3 text-base font-bold tracking-tight text-white focus:outline-none"
        >
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-400 via-indigo-500 to-fuchsia-500 p-0.5 shadow-md shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all group-hover:scale-105">
            <div className="w-full h-full bg-neutral-950 rounded-[10px] flex items-center justify-center text-white font-mono text-xs font-extrabold group-hover:bg-transparent transition-colors">
              TK
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-display tracking-tight text-white group-hover:text-amber-400 transition-colors leading-tight">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[10px] text-cyan-400 font-mono font-medium">
              Betopia Group
            </span>
          </div>
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs sm:text-sm font-medium text-neutral-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-amber-400 transition-colors relative py-1 focus:outline-none"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Zone 3: Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={PERSONAL_INFO.resumeUrl}
            download="Resume_Tanvir_Khan.pdf"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-neutral-200 hover:text-white border border-neutral-700/80 hover:border-cyan-400/60 rounded-xl bg-neutral-900/80 hover:bg-neutral-800 transition-all shadow-sm"
          >
            <FileDown className="w-3.5 h-3.5 text-cyan-400" />
            <span>Resume</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-neutral-950 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-all shadow-md shadow-amber-500/20 hover:scale-105"
          >
            <span>Say Hello</span>
          </a>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 rounded-xl text-neutral-300 hover:text-white hover:bg-neutral-900 border border-neutral-800"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-neutral-950/95 border-b border-neutral-800 px-4 pt-3 pb-6 space-y-3 backdrop-blur-2xl">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 text-sm font-medium text-neutral-200 hover:text-white hover:bg-neutral-900 rounded-xl transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2">
            <a
              href={PERSONAL_INFO.resumeUrl}
              download="Resume_Tanvir_Khan.pdf"
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-semibold text-neutral-200 border border-neutral-700 rounded-xl bg-neutral-900"
            >
              <FileDown className="w-4 h-4 text-cyan-400" />
              Download Resume (PDF)
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 py-2.5 text-xs font-bold text-neutral-950 bg-gradient-to-r from-amber-400 to-orange-400 rounded-xl shadow-md"
            >
              <Mail className="w-4 h-4" />
              Contact Tanvir
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
