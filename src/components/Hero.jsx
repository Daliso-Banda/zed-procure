import React from 'react';
import { ShieldCheck } from 'lucide-react';
// 1. Import the new Slider component
import ImageSlider from './ImageSlider.jsx'; 

// 2. Import your images from the assets folder
import heroImage1 from '../assets/gentsgate.jpeg'; 
import heroImage2 from '../assets/tiger.png'; 

const Hero = () => {
  // 3. Define the array to pass to the slider
  const sliderImages = [
    heroImage1, 
    heroImage2, // Add your second imported image here later
    heroImage1
  ];

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
          </div>
        </div>

        {/* 4. The Slider Section */}
        <div className="flex-1 w-full h-[450px] relative">
           {/* We call the component here and pass the images prop */}
           <ImageSlider images={sliderImages} />
           
           {/* Floating Badge stays on top of the image - Ensure z-index if needed */}
           <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 z-10">
              <p className="text-3xl font-bold text-procure-navy">100%</p>
              <p className="text-sm text-procure-slate font-medium">Timely Quality Always</p>
           </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;