import React from 'react';

export default function DeveloperVectorAvatar() {
  return (
    <div className="relative flex items-center justify-center w-full max-w-md mx-auto">
      {/* Ambient Neon Glow */}
      <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-cyan-500/30 via-blue-600/20 to-purple-600/30 blur-2xl animate-pulse" />

      {/* Floating Tech Badges */}
      <div className="absolute -top-3 left-4 glass-panel px-3 py-1.5 rounded-xl text-xs font-bold text-cyan-300 shadow-lg animate-bounce">
        ⚛️ React.js
      </div>
      <div className="absolute top-10 -right-2 glass-panel px-3 py-1.5 rounded-xl text-xs font-bold text-purple-300 shadow-lg">
        🧊 Three.js 3D
      </div>
      <div className="absolute bottom-14 -left-4 glass-panel px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-300 shadow-lg">
        🎨 Tailwind CSS
      </div>
      <div className="absolute -bottom-2 right-6 glass-panel px-3 py-1.5 rounded-xl text-xs font-bold text-amber-300 shadow-lg">
        ⚡ JavaScript ES6+
      </div>

      {/* Custom Vector Developer Character SVG */}
      <svg
        viewBox="0 0 400 400"
        className="relative z-10 w-80 h-80 md:w-96 md:h-96 drop-shadow-[0_20px_35px_rgba(6,182,212,0.35)]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="bgCircle" x1="40" y1="40" x2="360" y2="360" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="50%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#083344" />
          </linearGradient>
          <linearGradient id="hoodieGrad" x1="110" y1="220" x2="290" y2="370" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#2563eb" />
          </linearGradient>
          <linearGradient id="screenGlow" x1="120" y1="260" x2="280" y2="360" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#1e293b" />
            <stop offset="100%" stopColor="#0f172a" />
          </linearGradient>
        </defs>

        {/* Outer Ring & Backdrop */}
        <circle cx="200" cy="200" r="172" fill="url(#bgCircle)" stroke="#22d3ee" strokeWidth="3" strokeDasharray="10 6" />
        <circle cx="200" cy="200" r="158" stroke="#38bdf8" strokeOpacity="0.25" strokeWidth="1.5" />

        {/* Hoodie / Shoulders */}
        <path
          d="M95 345C105 278 145 250 200 250C255 250 295 278 305 345H95Z"
          fill="url(#hoodieGrad)"
        />
        {/* Hoodie Strings */}
        <line x1="176" y1="255" x2="176" y2="292" stroke="#e0f2fe" strokeWidth="3" strokeLinecap="round" />
        <line x1="224" y1="255" x2="224" y2="292" stroke="#e0f2fe" strokeWidth="3" strokeLinecap="round" />

        {/* Neck */}
        <rect x="182" y="215" width="36" height="42" rx="14" fill="#e2a77d" />

        {/* Head */}
        <rect x="148" y="116" width="104" height="114" rx="48" fill="#f1b890" />

        {/* Styled Hair */}
        <path
          d="M144 156C142 110 172 90 212 94C244 97 262 118 256 156C250 132 232 122 204 124C176 126 156 134 144 156Z"
          fill="#0f172a"
        />
        <path
          d="M168 98C184 82 222 82 238 102"
          stroke="#1e293b"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Headphones Band & Earcups */}
        <path
          d="M136 164C136 112 164 84 200 84C236 84 264 112 264 164"
          stroke="#334155"
          strokeWidth="10"
          strokeLinecap="round"
        />
        <rect x="128" y="146" width="18" height="46" rx="9" fill="#06b6d4" stroke="#0f172a" strokeWidth="3" />
        <rect x="254" y="146" width="18" height="46" rx="9" fill="#06b6d4" stroke="#0f172a" strokeWidth="3" />

        {/* Developer Glasses */}
        <rect x="160" y="156" width="34" height="22" rx="6" fill="#0f172a" fillOpacity="0.85" stroke="#38bdf8" strokeWidth="2.5" />
        <rect x="206" y="156" width="34" height="22" rx="6" fill="#0f172a" fillOpacity="0.85" stroke="#38bdf8" strokeWidth="2.5" />
        <line x1="194" y1="166" x2="206" y2="166" stroke="#38bdf8" strokeWidth="2.5" />
        {/* Code Reflection in Glasses */}
        <line x1="167" y1="164" x2="184" y2="164" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" />
        <line x1="213" y1="170" x2="230" y2="170" stroke="#a855f7" strokeWidth="2" strokeLinecap="round" />

        {/* Confident Smile & Beard Trim */}
        <path d="M186 196Q200 206 214 196" stroke="#7c2d12" strokeWidth="3" strokeLinecap="round" />
        <path d="M164 196C174 218 226 218 236 196" stroke="#1e293b" strokeOpacity="0.45" strokeWidth="4" strokeLinecap="round" />

        {/* Laptop */}
        <rect x="118" y="274" width="164" height="92" rx="12" fill="url(#screenGlow)" stroke="#38bdf8" strokeWidth="3" />
        {/* React Atom Icon on Laptop Back */}
        <circle cx="200" cy="320" r="5" fill="#22d3ee" />
        <ellipse cx="200" cy="320" rx="22" ry="8" stroke="#22d3ee" strokeWidth="2" />
        <ellipse cx="200" cy="320" rx="22" ry="8" transform="rotate(60 200 320)" stroke="#22d3ee" strokeWidth="2" />
        <ellipse cx="200" cy="320" rx="22" ry="8" transform="rotate(120 200 320)" stroke="#22d3ee" strokeWidth="2" />
      </svg>
    </div>
  );
}
