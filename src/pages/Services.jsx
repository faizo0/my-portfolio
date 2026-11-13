import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Sparkles, ArrowRight } from 'lucide-react';

const PACKAGES = [
  {
    name: 'Responsive Landing Page',
    price: 'Starter',
    desc: 'High-converting single-page website built with clean HTML5, Tailwind CSS, and smooth animations.',
    features: [
      '100% Mobile, Tablet & Desktop Responsive',
      'Modern UI/UX with Custom Animations',
      'Fast Loading & SEO-Friendly Markup',
      'Clean Source Code Delivery',
    ],
    featured: false,
  },
  {
    name: 'React.js + 3D Interactive Web App',
    price: 'Most Popular',
    desc: 'Complete multi-page React.js application enhanced with Three.js 3D graphics and dynamic features.',
    features: [
      'Multi-Page React Router Architecture',
      'Interactive Three.js 3D Hero / Elements',
      'Custom Modals, Filters & CRUD Logic',
      'API Integration & Deployment Support',
    ],
    featured: true,
  },
  {
    name: 'Figma / UI to React Conversion',
    price: 'Custom',
    desc: 'Pixel-accurate conversion of your Figma, XD, or PSD design into modular React components.',
    features: [
      'Strict Pixel-Alignment & Typography',
      'Reusable Tailwind / Bootstrap Components',
      'Interactive States & Hover Transitions',
      'Cross-Browser Compatibility',
    ],
    featured: false,
  },
];

export default function Services() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-cyan-500/15 text-cyan-300 text-xs font-bold border border-cyan-500/30">
          <Sparkles className="w-3.5 h-3.5" /> Freelance Services
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white">
          How I Can <span className="text-cyan-400">Help You Build</span>
        </h1>
        <p className="text-slate-400 text-sm sm:text-base">
          Tailored frontend and 3D web development packages for startups, agencies, and businesses.
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {PACKAGES.map((pkg) => (
          <div
            key={pkg.name}
            className={`rounded-3xl p-8 flex flex-col justify-between space-y-6 ${
              pkg.featured
                ? 'bg-gradient-to-b from-cyan-950/80 to-slate-900/90 border-2 border-cyan-400 shadow-2xl shadow-cyan-500/20'
                : 'glass-card'
            }`}
          >
            <div className="space-y-4">
              <span className="inline-block px-3 py-1 rounded-full text-xs font-extrabold bg-cyan-500/20 text-cyan-300">
                {pkg.price}
              </span>
              <h3 className="text-2xl font-extrabold text-white">{pkg.name}</h3>
              <p className="text-sm text-slate-300 leading-relaxed">{pkg.desc}</p>

              <ul className="space-y-3 pt-3">
                {pkg.features.map((feat) => (
                  <li key={feat} className="flex items-start gap-2.5 text-sm text-slate-200">
                    <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/contact"
              className={`w-full py-3.5 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 transition ${
                pkg.featured
                  ? 'bg-cyan-400 text-slate-950 hover:bg-cyan-300'
                  : 'bg-slate-800 text-white hover:bg-cyan-500 hover:text-slate-950'
              }`}
            >
              Request Quote <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
