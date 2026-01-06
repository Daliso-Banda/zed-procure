import { ShieldCheck, Truck, BarChart3, Menu } from 'lucide-react';

import React from 'react';
const Nav = () => {
  return (
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
            <button  className="bg-procure-navy text-white px-6 py-2 rounded-md hover:bg-slate-800 transition">
              Get a Quote
            </button>
          </div>
          <Menu className="md:hidden w-6 h-6" />
        </div>
      </nav>
    // </div>
  );
};

export default Nav;