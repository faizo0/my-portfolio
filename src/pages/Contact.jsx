import React, { useState } from 'react';
import { Send, CheckCircle2, Mail, MapPin, Briefcase } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', projectType: 'React.js Website', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) return;
    setSubmitted(true);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        {/* Info Column */}
        <div className="lg:col-span-5 space-y-6">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">
            Let&apos;s Collaborate
          </span>
          <h1 className="text-3xl sm:text-5xl font-black text-white">
            Start a Project With <span className="text-cyan-400">Muhammad Faizan</span>
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Need a modern React.js frontend, Three.js 3D interactive landing page, or responsive UI redesign? Send me your requirements and I&apos;ll get back to you quickly.
          </p>

          <div className="space-y-4 pt-2">
            <div className="glass-panel p-4 rounded-2xl flex items-center gap-4">
              <div className="p-3 rounded-xl bg-cyan-500/15 text-cyan-400">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Freelance Platforms</p>
                <p className="text-sm font-bold text-white">Fiverr • Upwork • LinkedIn</p>
              </div>
            </div>

            <div className="glass-panel p-4 rounded-2xl flex items-center gap-4">
              <div className="p-3 rounded-xl bg-purple-500/15 text-purple-400">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-slate-400">Location &amp; Timezone</p>
                <p className="text-sm font-bold text-white">Pakistan (PKT / UTC+5)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7 glass-card p-8 rounded-3xl">
          {submitted ? (
            <div className="text-center py-12 space-y-4">
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto" />
              <h3 className="text-2xl font-black text-white">Message Sent Successfully!</h3>
              <p className="text-slate-300 text-sm max-w-md mx-auto">
                Thank you, <span className="text-cyan-300 font-bold">{form.name}</span>! Muhammad Faizan has received your inquiry for <span className="text-white font-semibold">{form.projectType}</span>.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setForm({ name: '', email: '', projectType: 'React.js Website', message: '' });
                }}
                className="px-6 py-2.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm"
              >
                Send Another Inquiry
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Your Name</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Email Address</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="you@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Project Type</label>
                <select
                  value={form.projectType}
                  onChange={(e) => setForm({ ...form, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                >
                  <option>React.js Website</option>
                  <option>Three.js 3D Interactive Portfolio / Landing Page</option>
                  <option>Figma / UI to React Conversion</option>
                  <option>Frontend Bug Fix &amp; Responsiveness</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-300 uppercase mb-2">Project Details</label>
                <textarea
                  rows="4"
                  required
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Describe your website goals, pages, and timeline..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-slate-700 text-white focus:outline-none focus:border-cyan-400"
                />
              </div>

              <button
                type="submit"
                className="w-full py-4 rounded-2xl font-extrabold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-500 hover:from-cyan-300 hover:to-sky-400 shadow-lg shadow-cyan-500/25 flex items-center justify-center gap-2 transition"
              >
                Send Message <Send className="w-4 h-4" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
