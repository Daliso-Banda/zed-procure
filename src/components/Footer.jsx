import React from 'react';
import { Mail, Phone, MapPin, Linkedin, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-procure-navy text-white pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12 border-b border-slate-700 pb-12">
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-2xl font-bold mb-4">
            Gentlemans<span className="text-procure-copper"> Resources LTD</span>
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed">
            Your trusted partner in strategic sourcing, logistics, and supply chain compliance across Zambia.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-bold mb-6 text-lg">Quick Links</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li><a href="#" className="hover:text-procure-copper transition">Our Services</a></li>
            <li><a href="#" className="hover:text-procure-copper transition">Compliance Documents</a></li>
            <li><a href="#" className="hover:text-procure-copper transition">Vendor Registration</a></li>
            <li><a href="#" className="hover:text-procure-copper transition">Privacy Policy</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-bold mb-6 text-lg">Contact Us</h4>
          <ul className="space-y-4 text-slate-400 text-sm">
            <li className="flex items-center gap-3">
              <MapPin size={18} className="text-procure-copper" />
              <span>Plot 123, Great East Road, Lusaka</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-procure-copper" />
              <span>+260 97XXXXXXX</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-procure-copper" />
              <span>info@gentlemansresources.co.zm</span>
            </li>
          </ul>
        </div>

        {/* Newsletter/Social */}
        <div>
          <h4 className="font-bold mb-6 text-lg">Follow Us</h4>
          <div className="flex gap-4 mb-6">
            <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-procure-copper transition"><Linkedin size={20} /></a>
            <a href="#" className="bg-slate-800 p-3 rounded-full hover:bg-procure-copper transition"><Facebook size={20} /></a>
          </div>
          <p className="text-xs text-slate-500 italic">Registered in the Republic of Zambia</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-8 flex flex-col md:flex-row justify-between items-center text-slate-500 text-xs">
        <p>© 2026 Gentlemans Resources LTD. All rights reserved.</p>
        <p>A member of the Zambia Institute of Purchasing and Supply (ZIPS)</p>
      </div>
    </footer>
  );
};

export default Footer;