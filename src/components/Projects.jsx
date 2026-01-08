import React, { useState, useEffect } from 'react';
import { ExternalLink, Briefcase, Building2, Factory, Loader2 } from 'lucide-react';

// Keep your partner imports as they are (logos are usually static)
import client1 from '../assets/tiger.png';
import client2 from '../assets/pspf.jpeg';
// ... rest of imports

const Projects = () => {
  const [dbProjects, setDbProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/projects');
        const data = await response.json();
        setDbProjects(data);
      } catch (error) {
        console.error("Failed to fetch projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  // Helper to pick the right icon
  const getIcon = (category) => {
    switch (category?.toLowerCase()) {
      case 'mining': return <Factory className="text-procure-copper" />;
      case 'government': return <Building2 className="text-procure-copper" />;
      default: return <Briefcase className="text-procure-copper" />;
    }
  };

  return (
    <section id="projects" className="py-24 bg-slate-50 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-procure-copper font-bold tracking-widest uppercase text-sm mb-3">Track Record</h2>
          <p className="text-4xl font-extrabold text-procure-navy">Selected Projects</p>
          <div className="w-20 h-1 bg-procure-copper mt-4 hidden md:block"></div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <Loader2 className="animate-spin text-procure-copper w-10 h-10" />
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {dbProjects.map((project) => (
              <div key={project.id} className="bg-white border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <div className="p-8">
                  <div className="w-12 h-12 bg-slate-50 rounded-lg flex items-center justify-center mb-6">
                    {getIcon(project.category)}
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
        )}

        {/* Partner Logo Cloud (Remains Static) */}
        {/* ... existing partners code ... */}
      </div>
    </section>
  );
};

export default Projects;