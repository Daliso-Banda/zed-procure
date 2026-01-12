import React, { useState } from 'react';
import { BarChart3, Menu } from 'lucide-react';
import QuoteModal from './QuoteModal.jsx';

const Nav = () => {
  // Use a consistent name for the state
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-20 items-center">
          <div className="flex items-center gap-3">
            <img 
              src="../assets/logo.jpeg" 
              alt="Company Logo" 
              className="h-12 w-auto object-contain"
            />
            <span className="text-2xl font-bold text-procure-navy tracking-tight">
              Gentlemans<span className="text-procure-copper font-extrabold"> Resources</span>
            </span>
          </div>
          
          <div className="hidden md:flex space-x-8 font-medium">
            <a href="#services" className="hover:text-procure-copper transition mt-2">Services</a>
            <a href="#compliance" className="hover:text-procure-copper transition mt-2">Compliance</a>
            <a href="#projects" className="hover:text-procure-copper transition mt-2">Projects</a>
            
            {/* Logic fixed: directly set the state to true */}
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="bg-procure-navy text-white px-6 py-2 rounded-md hover:bg-slate-800 transition"
            >
              Get a Quote
            </button>
          </div>
          <Menu className="md:hidden w-6 h-6" />
        </div>
      </nav>

      {/* Modal moved outside <nav> but inside the Fragment <> */}
      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Nav;