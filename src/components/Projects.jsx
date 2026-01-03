import React from 'react';
import { ExternalLink, Briefcase, Building2, Factory } from 'lucide-react';

const projects = [
  {
    title: "Mining Equipment Sourcing",
    client: "Copperbelt Mining Firm",
    impact: "Reduced lead time by 15%",
    description: "Successfully procured and delivered specialized hydraulic components from Europe to Kitwe under tight deadlines.",
    icon: <Factory className="text-procure-copper" />
  },
  {
    title: "Government Office Supply",
    client: "Public Sector Agency",
    impact: "100% ZPPA Compliance",
    description: "Full-scale stationery and IT infrastructure supply for a provincial headquarters in Lusaka.",
    icon: <Building2 className="text-procure-copper" />
  },
  {
    title: "Agric-Tech Logistics",
    client: "Regional Farm Holdings",
    impact: "Cost saving of $5,000",
    description: "Streamlined the import of irrigation systems through the Nakonde border with full customs clearance.",
    icon: <Briefcase className="text-procure-copper" />
  }
];

// Placeholder logos - replace these with your actual partner/client logos
const partners = ["Logo 1", "Logo 2", "Logo 3", "Logo 4", "Logo 5"];

const Projects = () => {
  return (
    <section className="py-24 bg-slate-50 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-procure-copper font-bold tracking-widest uppercase text-sm mb-3">Track Record</h2>
          <p className="text-4xl font-extrabold text-procure-navy">Selected Projects</p>
        </div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {projects.map((project, index) => (
            <div key={index} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all">
              <div className="p-8">
                <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6">
                  {project.icon}
                </div>
                <h3 className="text-xl font-bold text-procure-navy mb-2">{project.title}</h3>
                <p className="text-sm font-semibold text-procure-copper mb-4 uppercase tracking-tight">{project.client}</p>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="pt-4 border-t border-slate-100 flex justify-between items-center">
                  <span className="text-xs font-bold bg-blue-50 text-blue-700 px-3 py-1 rounded-full">
                    {project.impact}
                  </span>
                  <ExternalLink size={16} className="text-slate-400" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Partner Logo Cloud */}
        <div className="pt-16 border-t border-slate-200">
          <p className="text-center text-slate-400 font-semibold uppercase text-xs tracking-[0.2em] mb-10">Trusted Industry Partners</p>
          <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:opacity-100 transition-opacity">
            {partners.map((p, i) => (
              <div key={i} className="text-2xl font-black text-slate-400 hover:text-procure-navy cursor-default transition-colors">
                {p}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;