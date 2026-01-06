import React from 'react';
import { ShieldCheck } from 'lucide-react';
// 1. Import your image from the assets folder
import heroImage from '../assets/gentsgate.jpeg'; 

const Hero = () => {
  return (
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
            {/* <button className="border-2 border-slate-200 px-8 py-4 rounded-lg font-bold text-lg hover:bg-slate-50 transition">
              Customer Registration
            </button> */}
          </div>
        </div>

        {/* 2. Image Container updated to show the picture */}
        <div className="flex-1 w-full h-[450px] relative">
           <img 
              src={heroImage} 
              alt="Gentlemans Resources Logistics" 
              className="w-full h-full object-cover rounded-3xl border border-slate-200 shadow-inner"
           />
           
           {/* Floating Badge stays on top of the image */}
           <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100">
              <p className="text-3xl font-bold text-procure-navy">100%</p>
              <p className="text-sm text-procure-slate font-medium">Local Content Compliance</p>
           </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;