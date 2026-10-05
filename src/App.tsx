import React from 'react';
import { CustomCursor } from './components/CustomCursor';
import { ColorfulBackground } from './components/ColorfulBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsBar } from './components/StatsBar';
import { AboutSection } from './components/AboutSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ExperienceEducation } from './components/ExperienceEducation';
import { SkillsSection } from './components/SkillsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { StickyActions } from './components/StickyActions';

export default function App() {
  return (
    <div className="min-h-screen bg-transparent text-neutral-100 flex flex-col font-sans selection:bg-amber-400 selection:text-neutral-950 relative">
      {/* Animated Custom Cursor with Trailing Orbiting Satellites */}
      <CustomCursor />

      {/* Vibrant Colorful Animated Background */}
      <ColorfulBackground />

      {/* Top Navigation Bar */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero />

        {/* Highlight Stats Bar with 200+ Projects & Betopia Group */}
        <StatsBar />

        {/* Personal About Section */}
        <AboutSection />

        {/* Featured Projects with 17 Live Stores & Applications */}
        <ProjectsSection />

        {/* Redesigned Experience Section (Betopia Group) & Education */}
        <ExperienceEducation />

        {/* Skills & Technologies Matrix */}
        <SkillsSection />

        {/* Direct Contact Section */}
        <ContactSection />
      </main>

      {/* Editorial Footer */}
      <Footer />

      {/* Sticky Floating Actions: Back to Top & WhatsApp */}
      <StickyActions />
    </div>
  );
}
