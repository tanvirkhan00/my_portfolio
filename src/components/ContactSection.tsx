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
    <section id="contact" className="py-20 lg:py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10 relative">
        
        {/* Section Header */}
        <div className="space-y-2 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white font-display">
            Have a project in mind or want to connect?
          </h2>
          <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed">
            Feel free to send a message or reach out directly via email or WhatsApp. I usually respond within 24 hours.
          </p>
        </div>

        {/* 2-Column Responsive Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Direct channels (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            <div className="space-y-3">
              {/* Email Card */}
              <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-between group hover:border-cyan-400/50 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-cyan-950/60 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                    <Mail className="w-4 h-4" />
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
              <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex items-center justify-between group hover:border-emerald-400/50 transition-all">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-950/60 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                    <Phone className="w-4 h-4" />
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
              <div className="p-3.5 sm:p-4 rounded-2xl bg-neutral-900/80 border border-neutral-800 flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-rose-950/60 border border-rose-500/30 flex items-center justify-center text-rose-400">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[10px] font-mono text-neutral-400 uppercase tracking-wider">Location</p>
                  <p className="text-xs sm:text-sm font-bold text-white">{PERSONAL_INFO.location}</p>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="p-4 rounded-2xl bg-neutral-900/60 border border-neutral-800 space-y-2.5">
              <p className="text-[11px] font-mono uppercase tracking-wider text-neutral-400 font-semibold">
                Profiles & Resume
              </p>
              
              <div className="space-y-1.5">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-950/70 border border-neutral-800 text-xs text-neutral-300 hover:text-white hover:border-sky-500/50 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Linkedin className="w-3.5 h-3.5 text-sky-400" />
                    <span>LinkedIn</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-neutral-950/70 border border-neutral-800 text-xs text-neutral-300 hover:text-white hover:border-neutral-600 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <Github className="w-3.5 h-3.5 text-neutral-300" />
                    <span>GitHub Repositories</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <a
                  href={PERSONAL_INFO.resumeUrl}
                  download="Resume_Tanvir_Khan.pdf"
                  className="flex items-center justify-between p-2.5 rounded-xl bg-amber-400/10 border border-amber-400/30 text-xs text-amber-300 hover:text-white hover:border-amber-400 transition-colors"
                >
                  <div className="flex items-center gap-2">
                    <FileDown className="w-3.5 h-3.5 text-amber-400" />
                    <span className="font-semibold">Download Full Resume (PDF)</span>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

          </div>

          {/* Simple Clean Message Form (7 cols) */}
          <div className="lg:col-span-7 bg-neutral-900/80 border border-neutral-800 rounded-3xl p-5 sm:p-7 shadow-xl">
            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <div className="w-11 h-11 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                  <Check className="w-5 h-5 stroke-[3]" />
                </div>
                <h3 className="text-lg font-bold text-white font-display">
                  Message Sent!
                </h3>
                <p className="text-xs sm:text-sm text-neutral-300 max-w-sm mx-auto">
                  Thanks for reaching out, {formData.name}! I'll get back to you at <span className="text-amber-400 font-semibold">{formData.email}</span> shortly.
                </p>
                <div className="pt-2">
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', subject: '', message: '' });
                    }}
                    className="px-3.5 py-1.5 text-xs font-semibold bg-neutral-800 hover:bg-neutral-700 text-white rounded-xl transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3.5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div className="space-y-1">
                    <label htmlFor="user-name" className="text-xs font-semibold text-neutral-300">
                      Your Name *
                    </label>
                    <input
                      id="user-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2 text-xs bg-neutral-950/80 border border-neutral-700/80 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>

                  <div className="space-y-1">
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
                      className="w-full px-3.5 py-2 text-xs bg-neutral-950/80 border border-neutral-700/80 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label htmlFor="user-subject" className="text-xs font-semibold text-neutral-300">
                    Subject
                  </label>
                  <input
                    id="user-subject"
                    type="text"
                    placeholder="Project Inquiry / Job Opportunity / Hello"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-neutral-950/80 border border-neutral-700/80 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all"
                  />
                </div>

                <div className="space-y-1">
                  <label htmlFor="user-message" className="text-xs font-semibold text-neutral-300">
                    Message *
                  </label>
                  <textarea
                    id="user-message"
                    rows={4}
                    required
                    placeholder="Hi Tanvir, I came across your portfolio and would like to talk about..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 text-xs bg-neutral-950/80 border border-neutral-700/80 rounded-xl text-white placeholder-neutral-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all font-sans"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 text-xs font-bold text-neutral-950 bg-gradient-to-r from-amber-400 via-orange-400 to-amber-300 hover:from-amber-300 hover:to-amber-400 disabled:opacity-50 rounded-xl transition-all shadow-md shadow-amber-500/20 hover:scale-[1.01]"
                >
                  <Send className="w-3.5 h-3.5" />
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
