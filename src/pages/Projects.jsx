import React, { useState } from 'react';
import { ExternalLink, Layers, X, CheckCircle2 } from 'lucide-react';

const PROJECTS = [
  {
    id: 1,
    title: 'Urbana Real Estate Society Portal',
    category: 'React.js',
    summary: 'Interactive property listing platform with sidebar filter matrix, animated modals, and smooth scroll popups.',
    tags: ['React.js', 'Tailwind CSS', 'Filter Logic', 'Responsive UI'],
    highlights: [
      'Dynamic left-sidebar multi-criteria property filter matrix',
      'Custom interactive plot detail modals & automated scroll-to-view alerts',
      'Pixel-aligned responsive cards optimized for mobile & desktop buyers',
    ],
  },
  {
    id: 2,
    title: '3D Interactive Product & Cyber Showcase',
    category: 'Three.js',
    summary: 'Real-time WebGL 3D scene built with Three.js & React featuring mouse parallax, wireframe geometry, and mode switching.',
    tags: ['Three.js', 'React.js', 'WebGL', '3D Shaders'],
    highlights: [
      '60 FPS WebGL particle starfield & rotating geometric meshes',
      'Interactive camera parallax synced with cursor movement',
      'Clean memory disposal & responsive viewport resizing',
    ],
  },
  {
    id: 3,
    title: 'CricVibe Sports Analytics & Media Hub',
    category: 'Full UI',
    summary: 'High-energy sports dashboard featuring live match cards, squad lineups, and tournament stat trackers.',
    tags: ['React Router', 'JavaScript ES6+', 'CSS3 Animations'],
    highlights: [
      'Fast array filtering & dynamic player comparison views',
      'Dark neon sports theme with high-contrast data tables',
      'Optimized mobile-first layout for fast daily browsing',
    ],
  },
  {
    id: 4,
    title: 'Modern SaaS & CRUD Admin Dashboard',
    category: 'React.js',
    summary: 'Complete management dashboard supporting full CRUD operations, search filtering, and analytics metrics.',
    tags: ['React.js', 'CRUD', 'Tailwind CSS', 'REST API'],
    highlights: [
      'Real-time Create, Read, Update, and Delete workflows',
      'Modular reusable UI component library',
      'Clean validation and instant toast state feedback',
    ],
  },
];

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'React.js', 'Three.js', 'Full UI'];
  const filtered =
    filter === 'All' ? PROJECTS : PROJECTS.filter((p) => p.category === filter);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-10">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Featured Work
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white mt-1">
            My <span className="text-cyan-400">Projects</span> &amp; Case Studies
          </h1>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-xl text-sm font-bold transition ${
                filter === cat
                  ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/25'
                  : 'glass-panel text-slate-300 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {filtered.map((project) => (
          <div key={project.id} className="glass-card rounded-3xl p-7 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="px-3 py-1 rounded-full text-xs font-bold bg-cyan-500/15 text-cyan-300 border border-cyan-500/30">
                  {project.category}
                </span>
                <Layers className="w-5 h-5 text-slate-400" />
              </div>

              <h3 className="text-2xl font-extrabold text-white">{project.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{project.summary}</p>

              <div className="flex flex-wrap gap-2 pt-1">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 rounded-lg bg-slate-900/90 border border-slate-700/80 text-xs text-slate-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <button
              onClick={() => setSelectedProject(project)}
              className="w-full py-3 rounded-xl font-bold text-sm bg-slate-800/90 hover:bg-cyan-500 hover:text-slate-950 text-cyan-300 border border-cyan-500/30 transition flex items-center justify-center gap-2"
            >
              View Case Study <ExternalLink className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <div className="glass-panel max-w-lg w-full rounded-3xl p-7 space-y-5 border border-cyan-400/40 shadow-2xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="text-xs font-bold text-cyan-400 uppercase">
                  {selectedProject.category} Case Study
                </span>
                <h3 className="text-2xl font-black text-white mt-1">
                  {selectedProject.title}
                </h3>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-2 rounded-xl bg-slate-800 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-slate-300 text-sm leading-relaxed">{selectedProject.summary}</p>

            <div className="space-y-2.5">
              <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                Key Engineering Highlights
              </p>
              {selectedProject.highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            <button
              onClick={() => setSelectedProject(null)}
              className="w-full py-3 rounded-xl font-bold bg-cyan-500 text-slate-950 hover:bg-cyan-400 transition"
            >
              Close Preview
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
