import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import ThreeBackground from './components/ThreeBackground';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Services from './pages/Services';
import Contact from './pages/Contact';

export default function App() {
  const [mode, setMode] = useState('cyber');

  return (
    <div className="min-h-screen flex flex-col relative text-slate-100">
      <ThreeBackground mode={mode} />
      <Navbar mode={mode} setMode={setMode} />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
