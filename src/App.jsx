import React from 'react';
import { ShieldCheck, Truck, BarChart3, Menu } from 'lucide-react';
import Services from './components/Services.jsx';
import Compliance from './components/Complians.jsx'; // Note: Ensure your filename is 'Complians.jsx'
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

const App = () => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans scroll-smooth">
      {/* Navigation */}
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-20 items-center">
          <div className="flex items-center gap-2">
            <div className="bg-procure-navy p-2 rounded">
              <BarChart3 className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-bold text-procure-navy tracking-tight">
              Gentlemans<span className="text-procure-copper font-extrabold"> Resources</span>
            </span>
          </div>
          
          {/* Updated Nav Links */}
          <div className="hidden md:flex space-x-8 font-medium">
            <a href="#services" className="hover:text-procure-copper transition">Services</a>
            <a href="#compliance" className="hover:text-procure-copper transition">Compliance</a>
            <a href="#projects" className="hover:text-procure-copper transition">Projects</a>
            <button className="bg-procure-navy text-white px-6 py-2 rounded-md hover:bg-slate-800 transition">
              Get a Quote
            </button>
          </div>
          <Menu className="md:hidden w-6 h-6" />
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold border border-blue-100">
              <ShieldCheck size={16} /> ZPPA & ZRA Compliant
            </div>
            <h1 className="text-5xl md:text-6xl font-black text-procure-navy leading-tight">
              Strategic Sourcing for <br />
              <span className="text-procure-copper">Zambian Industry.</span>
            </h1>
            <p className="text-xl text-procure-slate max-w-lg">
              Optimizing supply chains across Lusaka, the Copperbelt, and beyond. We provide transparent, value-driven procurement for SMEs and large enterprises.
            </p>
            <div className="flex gap-4">
              <a href="#projects" className="bg-procure-navy text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all inline-block">
                View Projects
              </a>
              <button className="border-2 border-slate-200 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-50 transition">
                Vendor Registration
              </button>
            </div>
          </div>
          <div className="flex-1 w-full h-[450px] bg-slate-100 rounded-3xl border border-slate-200 flex items-center justify-center relative shadow-inner">
             <Truck size={120} className="text-slate-300 animate-pulse" />
             <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
                <p className="text-3xl font-bold text-procure-navy">100%</p>
                <p className="text-sm text-procure-slate font-medium">Local Content Compliance</p>
             </div>
          </div>
        </div>
      </header>

      {/* Sections with IDs for Navigation */}
      <section id="services">
        <Services />
      </section>

      <section id="compliance">
        <Compliance />
      </section>

      <section id="projects">
        <Projects />
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;