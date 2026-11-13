import React from 'react';
import { Code, Terminal, Sparkles, Award } from 'lucide-react';
import DeveloperVectorAvatar from '../components/DeveloperVectorAvatar';

const SKILLS = [
  { name: 'React.js (Hooks, Router, Components)', level: 95, color: 'from-cyan-400 to-blue-500' },
  { name: 'JavaScript (ES6+, Async/Await, Array Ops)', level: 92, color: 'from-amber-400 to-orange-500' },
  { name: 'HTML5 & Modern CSS3 / Animations', level: 96, color: 'from-emerald-400 to-teal-500' },
  { name: 'Tailwind CSS & Bootstrap 5', level: 95, color: 'from-sky-400 to-indigo-500' },
  { name: 'Three.js & Interactive 3D WebGL', level: 84, color: 'from-purple-400 to-pink-500' },
  { name: 'REST APIs, JSON & CRUD Operations', level: 88, color: 'from-rose-400 to-red-500' },
];

export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 space-y-16">
      {/* Top Bio Section */}
      <div className="grid lg:grid-cols-12 gap-10 items-center">
        <div className="lg:col-span-5">
          <DeveloperVectorAvatar />
        </div>
        <div className="lg:col-span-7 space-y-5">
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/15 text-cyan-300 text-xs font-bold border border-cyan-500/30">
            <Award className="w-4 h-4" /> About Muhammad Faizan
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            Building Fast, Modern &amp; <span className="text-cyan-400">3D Web Experiences</span>
          </h1>
          <p className="text-slate-300 leading-relaxed text-base sm:text-lg">
            I&apos;m <strong className="text-white">Muhammad Faizan (محمد فیضان)</strong>, a passionate
            Frontend Web Developer from Pakistan specializing in <strong className="text-cyan-300">React.js</strong>,{' '}
            <strong className="text-cyan-300">Tailwind CSS</strong>, and <strong className="text-purple-300">Three.js</strong>.
          </p>
          <p className="text-slate-400 leading-relaxed">
            Whether it&apos;s a high-converting real estate portal with dynamic property filters, an
            interactive 3D showcase, or a full-featured single-page web application, I focus on clean code,
            smooth micro-interactions, and strict responsiveness across every device.
          </p>

          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="glass-panel p-4 rounded-2xl">
              <p className="text-xs text-slate-400 uppercase tracking-wider">Location</p>
              <p className="text-base font-bold text-white mt-0.5">Pakistan (Available Worldwide)</p>
            </div>
            <div className="glass-panel p-4 rounded-2xl">
              <p className="text-xs text-slate-400 uppercase tracking-wider">Focus Stack</p>
              <p className="text-base font-bold text-cyan-300 mt-0.5">React.js • Three.js • Full-Stack</p>
            </div>
          </div>
        </div>
      </div>

      {/* Technical Skills Section */}
      <div className="space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white flex items-center gap-2">
              <Terminal className="w-7 h-7 text-cyan-400" /> Technical Arsenal
            </h2>
            <p className="text-slate-400 text-sm mt-1">
              Core technologies I use to engineer scalable web interfaces
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {SKILLS.map((skill) => (
            <div key={skill.name} className="glass-card p-6 rounded-2xl space-y-3">
              <div className="flex justify-between items-center">
                <span className="font-bold text-white text-sm sm:text-base">{skill.name}</span>
                <span className="text-xs font-extrabold text-cyan-300 bg-cyan-500/15 px-2.5 py-1 rounded-lg">
                  {skill.level}%
                </span>
              </div>
              <div className="w-full h-2.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
