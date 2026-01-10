import React, { useState, useEffect } from 'react';
import { FileText, PlusCircle, Trash2, Image as ImageIcon, CheckCircle, Package, Truck, HardHat, Printer, Briefcase } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('quotes');
  const [quotes, setQuotes] = useState([]);
  const [projects, setProjects] = useState([]);
  const [file, setFile] = useState(null);
  const [newProject, setNewProject] = useState({
    title: '', client: '', impact: '', description: '', category: 'Construction'
  });

  const services = [
    { name: 'Construction & Renovation', icon: <HardHat size={16}/> },
    { name: 'Corporate Branding', icon: <Briefcase size={16}/> },
    { name: 'Press Printing', icon: <Printer size={16}/> },
    { name: 'Industrial Parts', icon: <Package size={16}/> },
    { name: 'Haulage & Logistics', icon: <Truck size={16}/> }
  ];

  useEffect(() => {
    fetch('http://localhost:5000/api/quotes').then(res => res.json()).then(setQuotes);
    fetch('http://localhost:5000/api/projects').then(res => res.json()).then(setProjects);
  }, [activeTab]);

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', newProject.title);
    formData.append('client', newProject.client);
    formData.append('impact', newProject.impact);
    formData.append('description', newProject.description);
    formData.append('category', newProject.category);
    if (file) formData.append('image', file);

    const res = await fetch('http://localhost:5000/api/projects', {
      method: 'POST',
      body: formData // Note: No headers needed for FormData
    });

    if (res.ok) {
      alert("Project Published!");
      setActiveTab('projects-list');
    }
  };

  const deleteProject = async (id) => {
    if(window.confirm("Delete this project?")) {
      await fetch(`http://localhost:5000/api/projects/${id}`, { method: 'DELETE' });
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <nav className="w-72 bg-procure-navy text-white p-8">
        <h1 className="text-2xl font-black mb-10 tracking-tighter text-procure-copper">GR-ADMIN</h1>
        <div className="space-y-4">
          <button onClick={() => setActiveTab('quotes')} className={`flex items-center gap-3 w-full p-4 rounded-xl transition ${activeTab === 'quotes' ? 'bg-procure-copper shadow-lg' : 'hover:bg-white/5'}`}>
            <FileText size={20} /> Quotes
          </button>
          <button onClick={() => setActiveTab('projects-list')} className={`flex items-center gap-3 w-full p-4 rounded-xl transition ${activeTab === 'projects-list' ? 'bg-procure-copper shadow-lg' : 'hover:bg-white/5'}`}>
            <Package size={20} /> Manage Projects
          </button>
          <button onClick={() => setActiveTab('add-project')} className={`flex items-center gap-3 w-full p-4 rounded-xl transition ${activeTab === 'add-project' ? 'bg-procure-copper shadow-lg' : 'hover:bg-white/5'}`}>
            <PlusCircle size={20} /> New Project
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-12 overflow-y-auto">
        
        {/* TAB 1: QUOTES */}
        {activeTab === 'quotes' && (
          <div className="animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-3xl font-bold text-procure-navy mb-8">Incoming Quotes</h2>
            <div className="grid gap-4">
              {quotes.map(q => (
                <div key={q.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex justify-between items-center">
                  <div>
                    <h4 className="font-bold text-lg text-procure-navy">{q.name}</h4>
                    <p className="text-slate-500 text-sm">{q.email}</p>
                    <div className="mt-2 inline-block bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">{q.service}</div>
                  </div>
                  <div className="text-right max-w-xs">
                    <p className="text-sm text-slate-600 italic">"{q.details}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 2: PROJECT LIST */}
        {activeTab === 'projects-list' && (
          <div className="animate-in fade-in">
            <h2 className="text-3xl font-bold text-procure-navy mb-8">Current Portfolio</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map(p => (
                <div key={p.id} className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm flex items-center p-4 gap-4">
                  <img src={`http://localhost:5000${p.imageUrl}`} className="w-24 h-24 object-cover rounded-xl" alt="" />
                  <div className="flex-1">
                    <h4 className="font-bold text-procure-navy">{p.title}</h4>
                    <p className="text-xs text-procure-copper font-bold uppercase">{p.client}</p>
                  </div>
                  <button onClick={() => deleteProject(p.id)} className="p-3 text-red-500 hover:bg-red-50 rounded-full transition">
                    <Trash2 size={20} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB 3: ADD PROJECT FORM */}
        {activeTab === 'add-project' && (
          <div className="max-w-3xl animate-in zoom-in-95 duration-300">
            <h2 className="text-3xl font-bold text-procure-navy mb-8">Publish New Track Record</h2>
            <form onSubmit={handleProjectSubmit} className="bg-white p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Project Title</label>
                  <input required className="w-full border p-4 rounded-xl focus:ring-2 focus:ring-procure-copper outline-none" placeholder="e.g. Mine Shaft Reinforcement" onChange={e => setNewProject({...newProject, title: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Client Name</label>
                  <input required className="w-full border p-4 rounded-xl focus:ring-2 focus:ring-procure-copper outline-none" placeholder="e.g. Mopani Copper Mines" onChange={e => setNewProject({...newProject, client: e.target.value})} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Service Category</label>
                <select className="w-full border p-4 rounded-xl focus:ring-2 focus:ring-procure-copper outline-none bg-white" onChange={e => setNewProject({...newProject, category: e.target.value})}>
                  {services.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Project Image</label>
                <div className="border-2 border-dashed border-slate-200 p-8 rounded-2xl flex flex-col items-center justify-center hover:border-procure-copper transition cursor-pointer relative">
                  <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={e => setFile(e.target.files[0])} />
                  <ImageIcon size={40} className="text-slate-300 mb-2" />
                  <p className="text-sm text-slate-500">{file ? file.name : "Click to upload project photo"}</p>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Success Impact</label>
                <input className="w-full border p-4 rounded-xl" placeholder="e.g. Delivered 2 days early" onChange={e => setNewProject({...newProject, impact: e.target.value})} />
              </div>

              <textarea required className="w-full border p-4 rounded-xl" rows="4" placeholder="Describe the work done..." onChange={e => setNewProject({...newProject, description: e.target.value})}></textarea>

              <button className="w-full bg-procure-navy text-white font-bold py-5 rounded-2xl hover:bg-procure-copper hover:shadow-lg transition-all transform active:scale-95">
                Upload & Publish Project
              </button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;