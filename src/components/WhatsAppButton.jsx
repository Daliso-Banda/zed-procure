import React from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  const phoneNumber = "260975018253"; // Use Zambian format without the +
  const message = "Hi Gentlemans Resources LTD, I'm interested in your procurement services.";
  const encodedMessage = encodeURIComponent(message);
  
  return (
    <a 
      href={`https://wa.me/${phoneNumber}?text=${encodedMessage}`}
      target="_blank" 
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform z-[100] flex items-center justify-center group"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={30} fill="white" />
      <span className="max-w-0 overflow-hidden group-hover:max-w-xs group-hover:ml-3 transition-all duration-500 font-bold whitespace-nowrap">
        Chat with us
      </span>
    </a>
  );
};

export default WhatsAppButton;