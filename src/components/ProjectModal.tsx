import React, { useEffect } from 'react';
import { X, ArrowUpRight, Check } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-neutral-900 border border-neutral-800 rounded-2xl shadow-2xl overflow-hidden my-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-neutral-800 bg-neutral-950/70">
          <div className="flex items-center gap-2 text-xs text-neutral-400">
            <span className="font-mono text-amber-400 font-semibold">{project.categoryLabel}</span>
            <span aria-hidden="true">·</span>
            <span>Project Details</span>
          </div>
          <button
            onClick={onClose}
            aria-label="Close modal"
            className="p-1 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors focus:outline-none"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Project Image */}
        <div className="relative aspect-[16/10] w-full bg-neutral-950 overflow-hidden border-b border-neutral-800">
          <img
            src={project.img}
            alt={project.title}
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3.5 left-5 right-5 flex items-end justify-between">
            <div>
              <h2 id="project-modal-title" className="text-xl sm:text-2xl font-bold text-white font-display">
                {project.title}
              </h2>
              <p className="text-xs sm:text-sm text-neutral-300 font-medium mt-0.5">
                {project.tagline}
              </p>
            </div>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold bg-amber-400 text-neutral-950 rounded-lg hover:bg-amber-300 transition-colors shadow-sm"
              >
                <span>Live Website</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            )}
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 space-y-5 max-h-[55vh] overflow-y-auto text-xs sm:text-sm">
          
          {/* Description */}
          <div className="space-y-1.5">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              About This Project
            </h3>
            <p className="text-neutral-300 leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* My Role */}
          <div className="space-y-1">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              My Role & Contributions
            </h3>
            <p className="text-amber-400 font-medium">
              {project.role}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div className="space-y-2">
              <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
                Key Features Implemented
              </h3>
              <ul className="space-y-1.5">
                {project.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-neutral-300">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Tech stack */}
          <div className="space-y-2 pt-2 border-t border-neutral-800">
            <h3 className="text-xs font-mono uppercase tracking-wider text-neutral-400">
              Technologies Used
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.tags.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-xs font-mono bg-neutral-950 text-neutral-300 rounded border border-neutral-800"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-5 py-3.5 bg-neutral-950 border-t border-neutral-800 text-xs">
          <button
            onClick={onClose}
            className="text-neutral-400 hover:text-white transition-colors"
          >
            Close
          </button>
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold bg-amber-400 text-neutral-950 rounded-lg hover:bg-amber-300 transition-colors"
            >
              <span>Visit Live Website</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};
