import React from 'react';
import { Link } from 'react-router-dom';
import { Code2, Globe, Mail, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800/80 bg-slate-950/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-xl bg-cyan-500/15 border border-cyan-500/30 text-cyan-400">
            <Code2 className="w-5 h-5" />
          </div>
          <div>
            <p className="font-bold text-white">Muhammad Faizan (محمد فیضان)</p>
            <p className="text-xs text-slate-400">
              Frontend Web Developer • React.js & Three.js Specialist
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-slate-400">
          <Link to="/about" className="hover:text-cyan-400 transition">Skills</Link>
          <Link to="/projects" className="hover:text-cyan-400 transition">Portfolio</Link>
          <Link to="/services" className="hover:text-cyan-400 transition">Services</Link>
          <Link to="/contact" className="hover:text-cyan-400 transition inline-flex items-center gap-1">
            Hire Me <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        <p className="text-xs text-slate-500">
          © {new Date().getFullYear()} Muhammad Faizan. Built with React & Three.js.
        </p>
      </div>
    </footer>
  );
}
