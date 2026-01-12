import React, { useState } from 'react';
import { X, Send, Loader2 } from 'lucide-react';

const QuoteModal = ({ isOpen, onClose }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: 'Construction & Renovation',
    details: ''
  });

  if (!isOpen) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // 1. Connect to your local backend API
      const response = await fetch(`${import.meta.env.VITE_API_URL}/quotes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Success! Gentlemans Resources has received your request.");
        setFormData({ name: '', email: '', service: 'Construction & Renovation', details: '' }); // Reset form
        onClose();
      } else {
        alert("Error: " + (data.message || "Failed to submit request"));
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Could not connect to the server. Please check if the backend is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
        onClick={!isSubmitting ? onClose : null} // Prevent closing while sending
      ></div>

      {/* Modal Content */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-lg overflow-hidden animate-in fade-in zoom-in duration-300">
        <div className="bg-procure-navy p-6 text-white flex justify-between items-center">
          <div>
            <h2 className="text-xl font-bold">Request a Quote</h2>
            <p className="text-slate-300 text-sm">Gentlemans Resources Limited</p>
          </div>
          <button 
            disabled={isSubmitting}
            onClick={onClose} 
            className="hover:bg-white/10 p-2 rounded-full transition-colors disabled:opacity-50"
          >
            <X size={24} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="p-8 space-y-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Full Name / Company</label>
            <input 
              required
              disabled={isSubmitting}
              type="text" 
              className="w-full border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-procure-copper outline-none transition disabled:bg-slate-50"
              placeholder="e.g. John Doe or MineCorp Zambia"
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address</label>
            <input 
              required
              disabled={isSubmitting}
              type="email" 
              className="w-full border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-procure-copper outline-none transition disabled:bg-slate-50"
              placeholder="your@email.com"
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1">Service Required</label>
            <select 
              disabled={isSubmitting}
              className="w-full border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-procure-copper outline-none bg-white disabled:bg-slate-50"
              value={formData.service}
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
              disabled={isSubmitting}
              rows="4"
              className="w-full border border-slate-200 rounded-lg p-3 focus:ring-2 focus:ring-procure-copper outline-none transition disabled:bg-slate-50"
              placeholder="Tell us about your requirements..."
              value={formData.details}
              onChange={(e) => setFormData({...formData, details: e.target.value})}
            ></textarea>
          </div>

          <button 
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-procure-copper hover:bg-orange-700 text-white font-bold py-4 rounded-lg flex items-center justify-center gap-2 transition-all shadow-lg mt-4 disabled:bg-slate-400 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="animate-spin" size={18} /> Sending...
              </>
            ) : (
              <>
                <Send size={18} /> Submit Request
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuoteModal;