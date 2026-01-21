import React, { useState, useEffect } from 'react';
import { FileText, PlusCircle, Trash2, Image as ImageIcon, Package, Truck, HardHat, Printer, Briefcase, Users } from 'lucide-react';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('quotes');
  const [quotes, setQuotes] = useState([]);
  const [projects, setProjects] = useState([]);
  const [partners, setPartners] = useState([]);
  
  // Form States
  const [file, setFile] = useState(null);
  const [partnerName, setPartnerName] = useState('');
  const [partnerFile, setPartnerFile] = useState(null);
  const [newProject, setNewProject] = useState({
    title: '', client: '', impact: '', description: '', category: 'Construction & Renovation'
  });

  const services = [
    { name: 'Construction & Renovation', icon: <HardHat size={16}/> },
    { name: 'Corporate Branding', icon: <Briefcase size={16}/> },
    { name: 'Press Printing', icon: <Printer size={16}/> },
    { name: 'Industrial Parts', icon: <Package size={16}/> },
    { name: 'Haulage & Logistics', icon: <Truck size={16}/> }
  ];

  // Fetch data based on active tab
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/quotes`).then(res => res.json()).then(setQuotes);
    fetch(`${import.meta.env.VITE_API_URL}/projects`).then(res => res.json()).then(setProjects);
    fetch(`${import.meta.env.VITE_API_URL}/partners`).then(res => res.json()).then(setPartners);
  }, [activeTab]);

  const handlePartnerSubmit = async (e) => {
    e.preventDefault();
    if (!partnerFile) return alert("Please select a logo");
    
    const formData = new FormData();
    formData.append('name', partnerName);
    formData.append('logo', partnerFile);

    const res = await fetch(`${import.meta.env.VITE_API_URL}/partners`, {
      method: 'POST',
      body: formData
    });

    if (res.ok) {
      alert("Partner added successfully!");
      setPartnerName('');
      setPartnerFile(null);
      setActiveTab('partners-list');
    }
  };

  const handleProjectSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('title', newProject.title);
    formData.append('client', newProject.client);
    formData.append('impact', newProject.impact);
    formData.append('description', newProject.description);
    formData.append('category', newProject.category);
    if (file) formData.append('image', file);

    const res = await fetch(`${import.meta.env.VITE_API_URL}/projects`, {
      method: 'POST',
      body: formData
    });

    if (res.ok) {
      alert("Project Published!");
      setActiveTab('projects-list');
    }
  };

  const deleteItem = async (type, id) => {
    if(window.confirm(`Delete this ${type}?`)) {
      await fetch(`${import.meta.env.VITE_API_URL}/${type}s/${id}`, { method: 'DELETE' });
      if (type === 'project') setProjects(projects.filter(p => p.id !== id));
      if (type === 'partner') setPartners(partners.filter(p => p.id !== id));
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50">
      {/* Sidebar */}
      <nav className="w-72 bg-procure-navy text-white p-8">
        <h1 className="text-2xl font-black mb-10 tracking-tighter text-procure-copper uppercase">GR Admin</h1>
        <div className="space-y-2">
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-4">Operations</p>
          <button onClick={() => setActiveTab('quotes')} className={`flex items-center gap-3 w-full p-3 rounded-lg transition ${activeTab === 'quotes' ? 'bg-procure-copper' : 'hover:bg-white/5'}`}>
            <FileText size={18} /> Quotes
          </button>
          
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-4 mt-6">Content</p>
          <button onClick={() => setActiveTab('projects-list')} className={`flex items-center gap-3 w-full p-3 rounded-lg transition ${activeTab === 'projects-list' ? 'bg-procure-copper' : 'hover:bg-white/5'}`}>
            <Package size={18} /> Projects
          </button>
          <button onClick={() => setActiveTab('add-project')} className={`flex items-center gap-3 w-full p-3 rounded-lg transition ${activeTab === 'add-project' ? 'bg-procure-copper' : 'hover:bg-white/5'}`}>
            <PlusCircle size={18} /> New Project
          </button>
          
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-bold mb-4 mt-6">Networking</p>
          <button onClick={() => setActiveTab('partners-list')} className={`flex items-center gap-3 w-full p-3 rounded-lg transition ${activeTab === 'partners-list' ? 'bg-procure-copper' : 'hover:bg-white/5'}`}>
            <Users size={18} /> Partners
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-1 p-12 overflow-y-auto">
        
        {/* QUOTES VIEW */}
        {activeTab === 'quotes' && (
          <div className="animate-in fade-in slide-in-from-bottom-4">
            <h2 className="text-3xl font-bold text-procure-navy mb-8">Recent Inquiries</h2>
            <div className="grid gap-4">
              {quotes.map(q => (
                <div key={q.id} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex justify-between items-center hover:border-procure-copper transition-colors">
                  <div>
                    <h4 className="font-bold text-lg text-procure-navy">{q.name}</h4>
                    <p className="text-slate-500 text-sm mb-2">{q.email}</p>
                    <span className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest">{q.service}</span>
                  </div>
                  <p className="text-sm text-slate-600 italic max-w-md">"{q.details}"</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PROJECTS LIST VIEW */}
        {activeTab === 'projects-list' && (
          <div className="animate-in fade-in">
            <h2 className="text-3xl font-bold text-procure-navy mb-8">Managed Portfolio</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map(p => (
                <div key={p.id} className="bg-white rounded-2xl border border-slate-200 shadow-sm flex items-center p-4 gap-4">
                  <img src={`${import.meta.env.VITE_API_URL}${p.imageUrl}`} className="w-20 h-20 object-cover rounded-xl" alt="" />
                  <div className="flex-1">
                    <h4 className="font-bold text-procure-navy leading-tight">{p.title}</h4>
                    <p className="text-xs text-procure-copper font-bold uppercase mt-1">{p.client}</p>
                  </div>
                  <button onClick={() => deleteItem('project', p.id)} className="p-2 text-red-500 hover:bg-red-50 rounded-full">
                    <Trash2 size={18} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* PARTNERS LIST VIEW (NEW) */}
        {activeTab === 'partners-list' && (
          <div className="animate-in fade-in">
            <div className="flex justify-between items-center mb-8">
               <h2 className="text-3xl font-bold text-procure-navy">Partners & Clients</h2>
               <button onClick={() => setActiveTab('add-partner')} className="bg-procure-navy text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-procure-copper transition">Add New Logo</button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {partners.map(p => (
                <div key={p.id} className="bg-white p-6 rounded-2xl border border-slate-200 text-center relative group">
                  <img src={`${import.meta.env.VITE_API_URL}${p.logoUrl}`} className="h-12 mx-auto object-contain mb-4" alt={p.name} />
                  <p className="text-sm font-bold text-procure-navy uppercase tracking-tighter">{p.name}</p>
                  <button onClick={() => deleteItem('partner', p.id)} className="absolute top-2 right-2 p-2 text-red-400 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Trash2 size={14} />
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ADD PARTNER FORM (NEW) */}
        {activeTab === 'add-partner' && (
          <div className="max-w-xl animate-in zoom-in-95">
            <h2 className="text-3xl font-bold text-procure-navy mb-8">Register New Partner Logo</h2>
            <form onSubmit={handlePartnerSubmit} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Company Name</label>
                <input required value={partnerName} className="w-full border p-4 rounded-xl focus:ring-2 focus:ring-procure-copper outline-none" placeholder="e.g. Mopani Copper" onChange={e => setPartnerName(e.target.value)} />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Brand Logo (PNG Recommended)</label>
                <div className="border-2 border-dashed border-slate-200 p-8 rounded-2xl flex flex-col items-center justify-center relative hover:border-procure-copper transition cursor-pointer">
                  <input type="file" required className="absolute inset-0 opacity-0 cursor-pointer" onChange={e => setPartnerFile(e.target.files[0])} />
                  <ImageIcon size={32} className="text-slate-300 mb-2" />
                  <p className="text-xs text-slate-500 font-medium">{partnerFile ? partnerFile.name : "Upload Logo File"}</p>
                </div>
              </div>
              <button className="w-full bg-procure-navy text-white font-bold py-4 rounded-xl hover:bg-procure-copper transition transform active:scale-95">Save Partner Logo</button>
            </form>
          </div>
        )}

        {/* ADD PROJECT FORM */}
        {activeTab === 'add-project' && (
          <div className="max-w-3xl animate-in zoom-in-95">
            <h2 className="text-3xl font-bold text-procure-navy mb-8">New Portfolio Entry</h2>
            <form onSubmit={handleProjectSubmit} className="bg-white p-10 rounded-3xl border border-slate-200 shadow-xl space-y-6">
               <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Project Title</label>
                  <input required className="w-full border p-4 rounded-xl focus:ring-2 focus:ring-procure-copper outline-none" placeholder="Project Name" onChange={e => setNewProject({...newProject, title: e.target.value})} />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-700">Client Name</label>
                  <input required className="w-full border p-4 rounded-xl focus:ring-2 focus:ring-procure-copper outline-none" placeholder="Client" onChange={e => setNewProject({...newProject, client: e.target.value})} />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Service Category</label>
                <select className="w-full border p-4 rounded-xl outline-none bg-white" onChange={e => setNewProject({...newProject, category: e.target.value})}>
                  {services.map(s => <option key={s.name} value={s.name}>{s.name}</option>)}
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700">Project Photo</label>
                <div className="border-2 border-dashed border-slate-200 p-8 rounded-2xl flex flex-col items-center justify-center relative hover:border-procure-copper transition cursor-pointer">
                  <input type="file" required className="absolute inset-0 opacity-0 cursor-pointer" onChange={e => setFile(e.target.files[0])} />
                  <ImageIcon size={32} className="text-slate-300 mb-2" />
                  <p className="text-xs text-slate-500 font-medium">{file ? file.name : "Select Image"}</p>
                </div>
              </div>

              <textarea required className="w-full border p-4 rounded-xl" rows="4" placeholder="Work Description" onChange={e => setNewProject({...newProject, description: e.target.value})}></textarea>

              <button className="w-full bg-procure-navy text-white font-bold py-5 rounded-2xl hover:bg-procure-copper shadow-lg transition transform active:scale-95">Publish to Site</button>
            </form>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminDashboard;