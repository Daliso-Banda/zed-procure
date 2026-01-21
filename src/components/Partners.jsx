import React, { useState, useEffect } from 'react';

const Partners = () => {
  const [dbPartners, setDbPartners] = useState([]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/partners`)
      .then(res => res.json())
      .then(data => setDbPartners(data))
      .catch(err => console.error("Error loading partners:", err));
  }, []);

  if (dbPartners.length === 0) return null; // Hide section if no partners are in DB

  return (
    <section className="py-16 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-center text-slate-400 font-bold uppercase text-xs tracking-[0.3em] mb-12">
          Trusted Industry Partners
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-20">
          {dbPartners.map((p) => (
            <div key={p.id} className="group relative flex items-center justify-center">
              <img 
                src={`${import.meta.env.VITE_API_URL}${p.logoUrl}`} 
                alt={p.name} 
                className="h-10 md:h-14 w-auto object-contain opacity-50 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110"
              />
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