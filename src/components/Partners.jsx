import React from 'react';

// Import your client/partner logos
import client1 from '../assets/tiger.png';
import client2 from '../assets/pspf.jpeg';
import client3 from '../assets/tiger.png'; // Replace with actual unique logos
import client4 from '../assets/tiger.png';

const partners = [
  { name: "Tiger", logo: client1 },
  { name: "PSPF", logo: client2 },
  { name: "Partner 3", logo: client3 },
  { name: "Partner 4", logo: client4 },
  { name: "Partner 5", logo: client1 }, // Duplicate or add more to fill space
  { name: "Partner 6", logo: client2 },
];

const Partners = () => {
  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-slate-400 font-bold uppercase text-xs tracking-[0.3em] mb-12">
          Trusted Industry Partners
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
          {partners.map((p, i) => (
            <div 
              key={i} 
              className="group relative flex items-center justify-center"
            >
              <img 
                src={p.logo} 
                alt={p.name} 
                className="h-10 md:h-14 w-auto object-contain opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
              />
              {/* Tooltip on hover */}
              <span className="absolute -top-8 scale-0 group-hover:scale-100 transition-all bg-procure-navy text-white text-[10px] py-1 px-2 rounded font-bold uppercase tracking-wider">
                {p.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;