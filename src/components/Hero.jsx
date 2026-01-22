import React from 'react';
import { ShieldCheck } from 'lucide-react';
import ImageSlider from './ImageSlider.jsx'; 

import heroImage1 from '../assets/gentsgate.jpeg'; 
import heroImage2 from '../assets/tiger.png'; 

const Hero = () => {
  const sliderImages = [
    heroImage1, 
    heroImage2,
    heroImage1
  ];

  return (
<header className="relative pt-24 pb-12 md:py-24 bg-white overflow-hidden">
  {/* pt-24 ensures the content starts BELOW your sticky h-20 nav */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10 md:gap-12">
        
        {/* Text Content: Center-aligned on mobile, Left-aligned on desktop */}
        <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left order-2 md:order-1">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border border-blue-100">
            <ShieldCheck size={16} /> ZPPA & ZRA Compliant
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-procure-navy leading-[1.1]">
            Strategic Sourcing for <br className="hidden sm:block" />
            <span className="text-procure-copper">Zambian Industry.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-procure-slate max-w-lg mx-auto md:mx-0">
            Optimizing supply chains across Lusaka, the Copperbelt, and beyond. We provide transparent, value-driven procurement.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="bg-procure-navy text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all inline-block">
              View Projects
            </a>
          </div>
        </div>

        {/* The Slider Section: Moves to the top on mobile for visual impact */}
        <div className="flex-1 w-full h-[300px] sm:h-[400px] md:h-[450px] relative order-1 md:order-2">
           <ImageSlider images={sliderImages} />
           
           {/* Floating Badge: Scaled down and repositioned for mobile */}
           <div className="absolute -bottom-4 -right-2 sm:-left-6 bg-white p-4 sm:p-6 rounded-2xl shadow-xl border border-slate-100 z-10">
              <p className="text-2xl sm:text-3xl font-bold text-procure-navy">100%</p>
              <p className="text-xs sm:text-sm text-procure-slate font-medium">Timely Quality Always</p>
           </div>
        </div>
        
      </div>
    </header>
  );
};

export default Hero;