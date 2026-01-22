import React, { useState } from 'react';
import ComplianceRequestModal from './ComplianceRequestModal';
import { CheckCircle, Shield, FileCheck } from 'lucide-react';

const certifications = [
  {
    agency: "PACRA",
    status: "Active & Registered",
    detail: "Full legal incorporation with the Patents and Companies Registration Agency.",
    color: "border-blue-600"
  },
  {
    agency: "ZRA",
    status: "Tax Compliant",
    detail: "Valid Tax Clearance Certificate (TCC) and TPIN registered for all business activities.",
    color: "border-green-600"
  },
  {
    agency: "ZPPA",
    status: "Certified Supplier",
    detail: "E-GP System registered and certified for participation in public tenders.",
    color: "border-orange-600"
  },
  {
    agency: "NAPSA",
    status: "Fully Compliant",
    detail: "Up-to-date with social security contributions for our local workforce.",
    color: "border-teal-600"
  }
];

const Compliance = () => {
  const [open, setOpen] = useState(false);

  return (
    <> {/* Added fragment opening */}
      <section className="py-20 bg-white border-t border-slate-100 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div className="max-w-xl">
              <h2 className="text-3xl font-extrabold text-procure-navy mb-4">
                A Partner You Can <span className="text-procure-copper">Trust</span>
              </h2>
              <p className="text-slate-600 text-lg">
                We operate with 100% transparency. Our company maintains full compliance with Zambian regulatory frameworks to ensure risk-free partnerships for our clients.
              </p>
            </div>
            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200 flex items-center gap-4 shadow-sm">
              <Shield className="text-procure-navy w-12 h-12" />
              <div>
                <p className="font-bold text-procure-navy">Verified Vendor</p>
                <p className="text-sm text-slate-500 italic text-nowrap tracking-tight">Reg No: 120XXXXXXXXXXX</p>
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, idx) => (
              <div key={idx} className={`bg-white border-t-4 ${cert.color} p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow`}>
                <div className="flex justify-between items-start mb-4">
                  <span className="text-xl font-black text-slate-800">{cert.agency}</span>
                  <CheckCircle className="text-green-500 w-5 h-5" />
                </div>
                <p className="text-xs font-bold text-green-700 bg-green-50 px-2 py-1 rounded-md inline-block mb-3 uppercase tracking-wider">
                  {cert.status}
                </p>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {cert.detail}
                </p>
              </div>
            ))}
          </div>
          
          <div className="mt-16 bg-procure-navy rounded-3xl p-10 text-center text-white">
            <h3 className="text-2xl font-bold mb-4 italic leading-tight">Need our compliance documents for a bid?</h3>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">Request our latest Tax Clearance, ZPPA Certificate, and Company Profile directly from our office.</p>

            <button
              onClick={() => setOpen(true)}
              className="bg-procure-copper hover:bg-orange-700 text-white font-bold py-3 px-10 rounded-full transition-all flex items-center gap-2 mx-auto"
            >
              <FileCheck size={20} /> Request Compliance Pack
            </button>
          </div>
        </div> {/* Added missing closing div for max-w-7xl */}
      </section>

      <ComplianceRequestModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};

export default Compliance;