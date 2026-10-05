import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, Check, Copy, ArrowUpRight, MessageSquare, Linkedin, Github, FileDown, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const copyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);

    setTimeout(() => {
      setSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background colorful radial aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-cyan-600/10 via-purple-600/10 to-amber-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full bg-gradient-to-r from-amber-400/10 via-orange-400/10 to-rose-400/10 border border-amber-400/20 text-amber-400 font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Inquiries · Let's Collaborate</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display text-balance">
            Let's build something extraordinary together
          </h2>
          <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
            Have a project in mind, need a front-end developer or Shopify/Wix expert at Betopia Group, or just want to discuss web engineering? Drop a note below!
          </p>
        </div>

        {/* 2-Column Contact */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Direct channels (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="space-y-3.5">
              {/* Email Card */}
              <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-between group hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Direct Email</p>
                    <a
                      href={`mailto:${PERSONAL_INFO.email}`}
                      className="text-xs sm:text-sm font-bold text-white hover:text-cyan-400 transition-colors"
                    >
                      {PERSONAL_INFO.email}
                    </a>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={copyEmail}
                  className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
                  title="Copy email address"
                >
                  {copiedEmail ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              {/* Phone / WhatsApp Card */}
              <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-between group hover:border-emerald-400/50 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)] transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Phone / WhatsApp</p>
                    <a
                      href={`https://wa.me/${PERSONAL_INFO.whatsapp.replace('+', '')}`}
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs sm:text-sm font-bold text-white hover:text-emerald-400 transition-colors"
                    >
                      {PERSONAL_INFO.phone}
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <button
                    type="button"
                    onClick={copyPhone}
                    className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
                    title="Copy phone number"
                  >
                    {copiedPhone ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                  </button>
                  <a
                    href={`https://wa.me/${PERSONAL_INFO.whatsapp.replace('+', '')}`}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 text-emerald-400 hover:text-emerald-300 rounded-lg hover:bg-neutral-800 transition-colors"
                    title="Chat on WhatsApp"
                  >
                    <MessageSquare className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex items-center gap-3">
                <div className="w-11 h-11 rounded-xl bg-rose-950/60 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Current Location</p>
                  <p className="text-xs sm:text-sm font-bold text-white">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>

            {/* Resume & Profiles */}
            <div className="p-5 rounded-3xl bg-neutral-900/60 border border-neutral-800 space-y-3.5 backdrop-blur-md">
              <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                Online Profiles & Credentials
              </p>
              
              <div className="space-y-2">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-neutral-950/70 border border-neutral-800 text-xs text-neutral-300 hover:text-white hover:border-sky-500/50 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Linkedin className="w-4 h-4 text-sky-400" />
                    <span>LinkedIn Profile</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-neutral-950/70 border border-neutral-800 text-xs text-neutral-300 hover:text-white hover:border-neutral-600 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <Github className="w-4 h-4 text-neutral-300" />
                    <span>GitHub Repositories (Code & Demos)</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download="Resume_Tanvir_Khan.pdf"
                  className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-amber-400/10 via-orange-400/10 to-rose-400/10 border border-amber-400/30 text-xs text-amber-300 hover:text-white hover:border-amber-400 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <FileDown className="w-4 h-4 text-amber-400" />
                    <span className="font-semibold">Download Full Resume (PDF)</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Simple Personal Contact Form (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900/90 border border-neutral-800 rounded-3xl p-6 sm:p-8 shadow-2xl backdrop-blur-xl">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto shadow-lg shadow-emerald-500/20">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                <h3 className="text-xl font-bold text-white font-display">
                  Message Sent Successfully!
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-sm mx-auto leading-relaxed">
                  Thank you for reaching out, {formData.name}! I will reply to <span className="text-amber-400 font-semibold">{formData.email}</span> promptly.
                </p>
                <div className="pt-3">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-4 py-2 text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-colors"
                  >
                    Send another note
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="user-name" className="text-xs font-semibold text-neutral-300">
                      Your Name *
                    </label>
                    <input
                      id="user-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Morgan"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs bg-neutral-950/80 border border-neutral-700/80 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="user-email" className="text-xs font-semibold text-neutral-300">
                      Your Email *
                    </label>
                    <input
                      id="user-email"
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 text-xs bg-neutral-950/80 border border-neutral-700/80 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="user-subject" className="text-xs font-semibold text-neutral-300">
                    Subject
                  </label>
                  <input
                    id="user-subject"
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity / Question"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs bg-neutral-950/80 border border-neutral-700/80 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="user-message" className="text-xs font-semibold text-neutral-300">
                    Message *
                  </label>
                  <textarea
                    id="user-message"
                    rows={4}
                    required
                    placeholder="Hi Tanvir, I came across your portfolio and would love to discuss..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 text-xs bg-neutral-950/80 border border-neutral-700/80 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 py-3 px-5 text-xs font-bold text-neutral-950 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 disabled:opacity-50 rounded-xl transition-all shadow-lg shadow-amber-500/25 hover:shadow-amber-500/40 hover:scale-[1.01]"
                >
                  <Send className="w-4 h-4" />
                  <span>{submitting ? 'Sending...' : 'Send Message'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
