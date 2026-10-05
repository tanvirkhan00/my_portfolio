import React, { useState } from 'react';
import { ArrowUpRight, Github, Linkedin, MessageSquare, FileDown, Check, Copy, Sparkles, MapPin } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <footer className="relative border-t border-neutral-800/80 bg-[#08090d]/95 pt-16 pb-12 text-neutral-400 overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-amber-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14 relative">
        
        {/* Top Feature: Big Call-to-Collaboration Banner */}
        <div className="rounded-3xl bg-neutral-900/70 border border-neutral-800/90 p-8 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-xl relative overflow-hidden">
          {/* Subtle gradient corner accent */}
          <div className="absolute -top-24 -right-24 w-60 h-60 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-3">
              <div className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-semibold uppercase tracking-wider">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Let's Collaborate</span>
              </div>
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white font-display">
                Ready to build or scale your web presence?
              </h2>
              <p className="text-neutral-300 text-sm sm:text-base leading-relaxed max-w-xl">
                Whether you need a custom Shopify theme, fluid Wix Studio site, or responsive React frontend, let's turn your vision into reality.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center gap-2 py-3 px-6 text-xs sm:text-sm font-bold text-neutral-950 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 rounded-xl transition-all shadow-lg shadow-amber-500/20 hover:scale-[1.02] text-center"
              >
                <span>Start a Conversation</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-2 py-3 px-5 text-xs sm:text-sm font-semibold text-neutral-200 hover:text-white border border-neutral-700/80 hover:border-cyan-400/60 bg-neutral-950/80 hover:bg-neutral-800 rounded-xl transition-all"
              >
                {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4 text-neutral-400" />}
                <span>{copied ? "Email Copied!" : "Copy Email Address"}</span>
              </button>
            </div>
          </div>
        </div>

        {/* Middle Tier: 4-Column Navigation & Identity */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10 pt-4">
          
          {/* Column 1: Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#home" className="inline-flex items-center gap-2.5 text-base font-bold text-white font-display">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-cyan-400 via-indigo-500 to-amber-400 p-0.5">
                <div className="w-full h-full bg-[#08090d] rounded-[6px] flex items-center justify-center text-white font-mono text-xs font-black">
                  TK
                </div>
              </div>
              <span className="tracking-tight hover:text-amber-400 transition-colors">{PERSONAL_INFO.name}</span>
            </a>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              Front-End Developer & CMS Expert specializing in high-converting Shopify Liquid stores, Wix Studio, and responsive modern web applications.
            </p>

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-rose-400 shrink-0" />
              <span>Dhaka, Bangladesh · GMT+6</span>
            </div>

            <div className="flex items-center gap-2 text-xs text-emerald-400 font-medium">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for new projects</span>
            </div>
          </div>

          {/* Column 2: Navigation Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold">
              Navigation
            </p>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#home" className="hover:text-amber-400 transition-colors">Home</a>
              </li>
              <li>
                <a href="#about" className="hover:text-amber-400 transition-colors">About</a>
              </li>
              <li>
                <a href="#projects" className="hover:text-amber-400 transition-colors">Projects (200+)</a>
              </li>
              <li>
                <a href="#experience" className="hover:text-amber-400 transition-colors">Experience</a>
              </li>
              <li>
                <a href="#skills" className="hover:text-amber-400 transition-colors">Tech Arsenal</a>
              </li>
              <li>
                <a href="#contact" className="hover:text-amber-400 transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Column 3: Specialties (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold">
              Specialties
            </p>
            <ul className="space-y-2 text-xs text-neutral-400">
              <li>Shopify Liquid & Theme OS 2.0</li>
              <li>Wix Studio & Velo Scripting</li>
              <li>React 19 & Tailwind CSS</li>
              <li>Cart Drawer & Variant Mechanics</li>
              <li>Core Web Vitals & Speed CRO</li>
              <li>Third-Party App Integrations</li>
            </ul>
          </div>

          {/* Column 4: Channels & Socials (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-neutral-300 font-semibold">
              Connect & Channels
            </p>
            <div className="space-y-2 text-xs">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-neutral-900/60 border border-neutral-800 hover:border-neutral-700 hover:text-white transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Github className="w-3.5 h-3.5 text-neutral-300" />
                  <span>GitHub</span>
                </span>
                <ArrowUpRight className="w-3 h-3 text-neutral-500" />
              </a>

              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-neutral-900/60 border border-neutral-800 hover:border-sky-500/40 hover:text-sky-400 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                  <span>LinkedIn</span>
                </span>
                <ArrowUpRight className="w-3 h-3 text-neutral-500" />
              </a>

              <a
                href={`https://wa.me/${PERSONAL_INFO.whatsapp.replace('+', '')}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-2 rounded-lg bg-neutral-900/60 border border-neutral-800 hover:border-emerald-500/40 hover:text-emerald-400 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                  <span>WhatsApp</span>
                </span>
                <ArrowUpRight className="w-3 h-3 text-neutral-500" />
              </a>

              <a
                href={PERSONAL_INFO.resumeUrl}
                download="Resume_Tanvir_Khan.pdf"
                className="flex items-center justify-between p-2 rounded-lg bg-amber-400/10 border border-amber-400/20 text-amber-300 hover:border-amber-400 hover:text-amber-200 transition-colors"
              >
                <span className="flex items-center gap-2 font-medium">
                  <FileDown className="w-3.5 h-3.5 text-amber-400" />
                  <span>Download Resume (PDF)</span>
                </span>
                <ArrowUpRight className="w-3 h-3 text-amber-400" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright and Stack Info */}
        <div className="pt-8 border-t border-neutral-800/80 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.
          </p>

          <p className="text-[11px] text-neutral-500">
            Crafted with React, TypeScript & Tailwind CSS
          </p>
        </div>

      </div>
    </footer>
  );
};
