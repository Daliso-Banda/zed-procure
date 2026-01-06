import React, { useState } from 'react';
import { X, Send } from 'lucide-react';

const QuoteModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Construction',
    details: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // This is where we will eventually fetch() to your Node.js backend
    console.log("Form Data Submitted:", formData);
    alert("Thank you! Gentlemans Resources will contact you shortly.");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="bg-procure-navy p-6 text-white flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Request a Quote</h2>
            <p className="text-slate-300 text-sm">Gentlemans Resources Limited</p>
          </div>
          <button onClick={onClose} className="hover:bg-white/10 p-2 rounded-full transition-colors">
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name / Company</label>
            <input 
              required
              type="text" 
              className="w-full border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-procure-copper outline-none transition"
              placeholder="e.g. John Doe or MineCorp Zambia"
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
            <input 
              required
              type="email" 
              className="w-full border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-procure-copper outline-none transition"
              placeholder="your@email.com"
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Service Required</label>
            <select 
              className="w-full border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-procure-copper outline-none bg-white"
              onChange={(e) => setFormData({...formData, service: e.target.value})}
            >
              <option>Construction & Renovation</option>
              <option>Corporate Branding</option>
              <option>Press Printing</option>
              <option>Industrial Parts</option>
              <option>Industrial Consumables</option>
              <option>Haulage & Logistics</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Brief Description</label>
            <textarea 
              required
              rows="4"
              className="w-full border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-procure-copper outline-none transition"
              placeholder="Tell us about your requirements..."
              onChange={(e) => setFormData({...formData, details: e.target.value})}
            ></textarea>
          </div>

          <button 
            type="submit"
            className="w-full bg-procure-copper hover:bg-orange-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg mt-4"
          >
            <Send size={18} /> Submit Request
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;