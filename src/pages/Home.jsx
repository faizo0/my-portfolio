import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Layers, Cpu, CheckCircle2 } from 'lucide-react';
import DeveloperVectorAvatar from '../components/DeveloperVectorAvatar';

const ROLES = [
  'Frontend Web Developer',
  'React.js Specialist',
  'Three.js 3D Web Creator',
  'UI/UX & Responsive Architect',
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 2600);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16">
      <div className="grid lg:grid-cols-12 gap-12 items-center min-h-[76vh]">
        {/* Left Hero Column */}
        <div className="lg:col-span-7 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-panel text-xs font-semibold text-cyan-300 border border-cyan-500/30">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>Available for Freelance & Remote Projects</span>
          </div>

          <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white leading-[1.1]">
            Hi, I&apos;m{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-purple-500 bg-clip-text text-transparent">
              Muhammad Faizan
            </span>
            <span className="block text-2xl sm:text-3xl font-bold text-slate-300 mt-2">
              محمد فیضان
            </span>
          </h1>

          <div className="h-9 flex items-center">
            <p className="text-xl sm:text-2xl font-bold text-cyan-300">
              &gt; {ROLES[roleIndex]}
              <span className="animate-ping ml-1 text-cyan-400">|</span>
            </p>
          </div>

          <p className="text-slate-300 text-base sm:text-lg max-w-2xl leading-relaxed">
            I craft high-converting, pixel-accurate, and interactive web applications using{' '}
            <strong className="text-white">React.js, JavaScript (ES6+), Tailwind CSS,</strong> and{' '}
            <strong className="text-cyan-300">Three.js 3D experiences</strong>. Turning complex ideas
            into fast, responsive digital products.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Link
              to="/projects"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-500 hover:from-cyan-300 hover:to-sky-400 shadow-lg shadow-cyan-500/30 transition transform hover:-translate-y-0.5"
            >
              Explore My Projects <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl font-bold text-white glass-panel hover:border-cyan-400/60 transition"
            >
              Hire Me Now
            </Link>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-4 pt-6 max-w-lg">
            <div className="glass-card p-4 rounded-2xl">
              <p className="text-2xl sm:text-3xl font-black text-cyan-400">25+</p>
              <p className="text-xs text-slate-400 mt-1">Web Projects Built</p>
            </div>
            <div className="glass-card p-4 rounded-2xl">
              <p className="text-2xl sm:text-3xl font-black text-purple-400">100%</p>
              <p className="text-xs text-slate-400 mt-1">Responsive UI</p>
            </div>
            <div className="glass-card p-4 rounded-2xl">
              <p className="text-2xl sm:text-3xl font-black text-emerald-400">3D</p>
              <p className="text-xs text-slate-400 mt-1">Three.js Interactive</p>
            </div>
          </div>
        </div>

        {/* Right Vector Avatar Column */}
        <div className="lg:col-span-5">
          <DeveloperVectorAvatar />
        </div>
      </div>

      {/* Core Highlights Strip */}
      <div className="grid md:grid-cols-3 gap-6 mt-14">
        <div className="glass-card p-6 rounded-2xl space-y-2">
          <Layers className="w-8 h-8 text-cyan-400" />
          <h3 className="text-lg font-bold text-white">Modern React Architecture</h3>
          <p className="text-sm text-slate-400">
            Modular components, React Router multi-page navigation, state management, and clean API integration.
          </p>
        </div>
        <div className="glass-card p-6 rounded-2xl space-y-2">
          <Cpu className="w-8 h-8 text-purple-400" />
          <h3 className="text-lg font-bold text-white">3D WebGL & Motion</h3>
          <p className="text-sm text-slate-400">
            Interactive Three.js scenes, particle physics, smooth CSS transitions, and scroll-triggered animations.
          </p>
        </div>
        <div className="glass-card p-6 rounded-2xl space-y-2">
          <CheckCircle2 className="w-8 h-8 text-emerald-400" />
          <h3 className="text-lg font-bold text-white">Pixel-Perfect Responsiveness</h3>
          <p className="text-sm text-slate-400">
            Tailored layouts with Tailwind CSS & Bootstrap that look sharp across mobile, tablet, and 4K screens.
          </p>
        </div>
      </div>
    </div>
  );
}
