import React, { useState, useEffect } from 'react';
import { ShieldCheck } from 'lucide-react';
import ImageSlider from './ImageSlider.jsx';
import MobileImageSlider from './MobileImageSlider.jsx';

import heroImage1 from '../assets/gentsgate.jpeg'; 
import heroImage2 from '../assets/Renovation of Lobby and installation of Motion Sensor door, at Public Service Pensions Fund.jpeg';
import heroImage3 from '../assets/window_installation.jpeg';
import heroImage4 from '../assets/Construction of Ground breaking Plague for Radiation Protection Authority.jpeg';
import heroImage5 from '../assets/Complete renovation and Branding of Showgrounds stand for Public Service Pensions Fund.jpeg';
import heroImage6 from '../assets/Installation of PVC ceiling boards at Superior Furnitures.jpeg';
import heroImage7 from '../assets/Installation of False roof and Gutter systems at Superior Furnitures.jpeg'; 
import heroImage8 from '../assets/During Showgrounds renovations for pensions funds.jpeg';
const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    
    // Set initial value on mount
    handleResize();
    
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const sliderImages = [heroImage1, heroImage2, heroImage1, heroImage3, heroImage4, heroImage5, heroImage6];

  // Prevent hydration mismatch by not rendering slider until mounted
  if (!mounted) return null;

  return (
    <header className="relative pt-0 pb-12 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-10 md:gap-12">
        
        {/* Text Content */}
        <div className="flex-1 space-y-6 md:space-y-8 text-center md:text-left order-1">
          <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold border border-blue-100">
            <ShieldCheck size={16} /> ZPPA & ZRA Compliant
          </div>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-procure-navy leading-[1.1]">
            Strategic Sourcing for <br className="hidden sm:block" />
            <span className="text-procure-copper">Zambian Industry.</span>
          </h1>
          
          <p className="text-lg md:text-xl text-procure-slate max-w-lg mx-auto md:mx-0">
            Optimizing supply chains across Lusaka, the Copperbelt, and beyond.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <a href="#projects" className="bg-procure-navy text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-xl transition-all">
              View Projects
            </a>
          </div>
        </div>

        {/* The Slider Section */}
        <div className="flex-1 w-full min-h-[300px] sm:min-h-[400px] relative order-2">
           {/* Logic to switch between sliders */}
           {isMobile ? (
             <MobileImageSlider images={sliderImages} />
           ) : (
             <ImageSlider images={sliderImages} />
           )}
           
           {/* Floating Badge */}
           <div className="absolute -bottom-4 right-4 sm:-left-6 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 z-10">
              <p className="text-2xl font-bold text-procure-navy">100%</p>
              <p className="text-xs text-procure-slate font-medium">Timely Quality Always</p>
           </div>
        </div>
        
      </div>
    </header>
  );
};

export default Hero;