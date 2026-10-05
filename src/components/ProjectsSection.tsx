import React, { useState, useMemo } from 'react';
import { ArrowUpRight, Search, Eye, Filter, Sparkles } from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'shopify' | 'wix' | 'custom'>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = useMemo(() => {
    return PROJECTS_DATA.filter((project) => {
      const matchesCategory = activeFilter === 'all' || project.category === activeFilter;
      const matchesSearch =
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  const counts = {
    all: PROJECTS_DATA.length,
    shopify: PROJECTS_DATA.filter((p) => p.category === 'shopify').length,
    wix: PROJECTS_DATA.filter((p) => p.category === 'wix').length,
    custom: PROJECTS_DATA.filter((p) => p.category === 'custom').length,
  };

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-r from-amber-500/10 via-rose-500/10 to-indigo-500/10 blur-[140px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-neutral-800/80">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-mono px-3 py-1 rounded-full bg-gradient-to-r from-emerald-500/10 via-teal-500/10 to-cyan-500/10 border border-emerald-500/20 text-emerald-400 font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Project Works · 200+ Delivered</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white font-display text-balance">
              Featured Stores & Web Applications
            </h2>
            <p className="text-neutral-300 text-sm sm:text-base leading-relaxed">
              Explore live commercial Shopify stores, fluid Wix Studio websites, and modern React web applications I've engineered and customized.
            </p>
          </div>

          {/* Search Box */}
          <div className="w-full md:w-80">
            <label htmlFor="search-input" className="sr-only">Search projects</label>
            <div className="relative">
              <Search className="w-4 h-4 text-cyan-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                id="search-input"
                type="text"
                placeholder="Search stores, tags, or tech..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 text-xs bg-neutral-900/90 border border-neutral-700/80 rounded-xl text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400 transition-all shadow-inner"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-white"
                >
                  Clear
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Filter Tabs with responsive horizontal scrolling on mobile */}
        <div className="flex items-center justify-between gap-4 overflow-x-auto pb-1 no-scrollbar">
          <div className="inline-flex p-1.5 bg-neutral-900/90 border border-neutral-800 rounded-2xl shadow-xl backdrop-blur-md shrink-0">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 sm:px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-neutral-800 text-white shadow-md'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              All Projects ({counts.all})
            </button>
            <button
              onClick={() => setActiveFilter('shopify')}
              className={`px-3.5 sm:px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                activeFilter === 'shopify'
                  ? 'bg-gradient-to-r from-emerald-400 to-teal-400 text-neutral-950 shadow-md shadow-emerald-500/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Shopify ({counts.shopify})
            </button>
            <button
              onClick={() => setActiveFilter('wix')}
              className={`px-3.5 sm:px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                activeFilter === 'wix'
                  ? 'bg-gradient-to-r from-amber-400 to-orange-400 text-neutral-950 shadow-md shadow-amber-500/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              Wix Studio ({counts.wix})
            </button>
            <button
              onClick={() => setActiveFilter('custom')}
              className={`px-3.5 sm:px-4 py-2 text-xs font-semibold rounded-xl transition-all whitespace-nowrap ${
                activeFilter === 'custom'
                  ? 'bg-gradient-to-r from-cyan-400 to-indigo-400 text-neutral-950 shadow-md shadow-cyan-500/20'
                  : 'text-neutral-400 hover:text-white'
              }`}
            >
              React / Custom ({counts.custom})
            </button>
          </div>

          <div className="hidden lg:flex items-center gap-1.5 text-xs font-mono text-neutral-400 shrink-0">
            <span>Showing:</span>
            <span className="font-bold text-white">{filteredProjects.length} of {PROJECTS_DATA.length} projects</span>
          </div>
        </div>

        {/* Grid of Projects */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-20 bg-neutral-900/40 rounded-3xl border border-neutral-800">
            <Filter className="w-8 h-8 text-neutral-600 mx-auto mb-2" />
            <h3 className="text-sm font-semibold text-neutral-200">No matching projects found</h3>
            <p className="text-xs text-neutral-500 mt-1">Try another keyword or select a different filter.</p>
            <button
              onClick={() => {
                setActiveFilter('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-amber-400 hover:underline font-semibold"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group relative flex flex-col bg-neutral-900/70 hover:bg-neutral-900/90 border border-neutral-800 hover:border-cyan-500/40 rounded-3xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] hover:-translate-y-1.5"
              >
                {/* Thumbnail */}
                <div className="relative aspect-[16/10] bg-neutral-950 overflow-hidden">
                  <img
                    src={project.img}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/90 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />

                  {/* Hover Buttons */}
                  <div className="absolute inset-0 flex items-center justify-center gap-3 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity backdrop-blur-[2px]">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="px-3.5 py-2 text-xs font-bold bg-white text-neutral-950 rounded-xl hover:bg-neutral-200 transition-all flex items-center gap-1.5 shadow-xl hover:scale-105"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3.5 py-2 text-xs font-bold bg-gradient-to-r from-amber-400 to-orange-400 text-neutral-950 rounded-xl hover:from-amber-300 hover:to-amber-400 transition-all flex items-center gap-1.5 shadow-xl hover:scale-105"
                      >
                        <span>Visit Site</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  <div className="space-y-2">
                    {/* Unboxed colorful metadata */}
                    <div className="flex items-center gap-2 text-xs font-mono">
                      <span className="font-bold text-amber-400">{project.categoryLabel}</span>
                      <span aria-hidden="true" className="text-neutral-600">·</span>
                      <span className="text-cyan-300 font-medium truncate">{project.tags[0]}</span>
                    </div>

                    <h3 className="text-xl font-bold text-white font-display group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-400 line-clamp-2 leading-relaxed">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Bottom Tech Tags & Links */}
                  <div className="pt-3 border-t border-neutral-800/80 space-y-3">
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-0.5 text-[11px] font-mono bg-neutral-950 text-neutral-300 rounded-md border border-neutral-800"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-[11px] font-mono text-neutral-500 self-center">
                          +{project.tags.length - 3}
                        </span>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-1 text-xs">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-neutral-400 hover:text-white font-medium transition-colors"
                      >
                        Project story →
                      </button>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 font-bold text-amber-400 hover:text-amber-300 transition-colors"
                        >
                          <span>Live Site</span>
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}

      </div>

      {/* Lightbox / Project Details Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
