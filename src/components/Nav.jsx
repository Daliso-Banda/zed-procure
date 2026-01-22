import React, { useState } from 'react';
import { Menu, X } from 'lucide-react'; // Added X for closing the menu
import QuoteModal from './QuoteModal.jsx';
import logo from '../assets/logo.jpeg';

const Nav = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for mobile menu

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <>
      <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between h-20 items-center">
          
          {/* Logo Section - Responsive scaling */}
          <div className="flex items-center gap-2 sm:gap-3">
            <img 
              src={logo} 
              alt="Company Logo" 
              className="h-10 sm:h-12 w-auto object-contain"
            />
            <span className="text-lg sm:text-2xl font-bold text-procure-navy tracking-tight leading-none">
              Gentlemans<span className="text-procure-copper font-extrabold"> Resources</span>
            </span>
          </div>
          
          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-8 font-medium">
            <a href="#services" className="hover:text-procure-copper transition">Services</a>
            <a href="#compliance" className="hover:text-procure-copper transition">Compliance</a>
            <a href="#projects" className="hover:text-procure-copper transition">Projects</a>
            
            <button 
              onClick={() => setIsModalOpen(true)} 
              className="bg-procure-navy text-white px-6 py-2 rounded-md hover:bg-slate-800 transition"
            >
              Get a Quote
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-procure-navy" 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Dropdown Menu */}
        <div className={`
          md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-200 transition-all duration-300 ease-in-out
          ${isMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-4 invisible'}
        `}>
          <div className="flex flex-col p-4 space-y-4 shadow-xl">
            <a href="#services" onClick={toggleMenu} className="text-lg font-medium py-2 border-b border-slate-50">Services</a>
            <a href="#compliance" onClick={toggleMenu} className="text-lg font-medium py-2 border-b border-slate-50">Compliance</a>
            <a href="#projects" onClick={toggleMenu} className="text-lg font-medium py-2 border-b border-slate-50">Projects</a>
            <button 
              onClick={() => { setIsModalOpen(true); setIsMenuOpen(false); }} 
              className="w-full bg-procure-copper text-white py-4 rounded-xl font-bold text-center"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </nav>

      <QuoteModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
      />
    </>
  );
};

export default Nav;