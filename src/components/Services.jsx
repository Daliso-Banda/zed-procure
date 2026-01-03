import React from 'react';
import { Truck, Scale, Search, Users, FileText, Globe } from 'lucide-react';

const services = [
  {
    title: "Strategic Sourcing",
    description: "Finding reliable international and local vendors to ensure quality and cost-efficiency for your business.",
    icon: <Search className="w-8 h-8 text-procure-copper" />,
  },
  {
    title: "Tender & Compliance",
    description: "Expert guidance through ZPPA/e-GP systems, PACRA, and ZRA requirements for seamless bidding.",
    icon: <Scale className="w-8 h-8 text-procure-copper" />,
  },
  {
    title: "Logistics & Clearing",
    description: "End-to-end supply chain management, including customs clearance at Chirundu, Nakonde, and Kazungula.",
    icon: <Truck className="w-8 h-8 text-procure-copper" />,
  },
  {
    title: "Contract Management",
    description: "Managing service level agreements (SLAs) to ensure vendors deliver exactly what was promised.",
    icon: <FileText className="w-8 h-8 text-procure-copper" />,
  },
  {
    title: "Vendor Prequalification",
    description: "Vetting and onboarding suppliers to build a robust and ethical supply database for your firm.",
    icon: <Users className="w-8 h-8 text-procure-copper" />,
  },
  {
    title: "Import/Export Advisory",
    description: "Navigating COMESA and SADC trade protocols to optimize your cross-border procurement.",
    icon: <Globe className="w-8 h-8 text-procure-copper" />,
  },
];

const Services = () => {
  return (
    <section className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-procure-copper font-bold tracking-widest uppercase text-sm mb-3">Our Expertise</h2>
          <p className="text-4xl font-extrabold text-procure-navy">Comprehensive Procurement Solutions</p>
          <div className="w-20 h-1.5 bg-procure-copper mx-auto mt-6 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
            >
              <div className="bg-slate-50 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:bg-procure-navy transition-colors">
                 <div className="group-hover:text-white transition-colors">
                    {service.icon}
                 </div>
              </div>
              <h3 className="text-xl font-bold text-procure-navy mb-4">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;