import React, { useState } from 'react';
import ComplianceRequestModal from './ComplianceRequestModal';

import { CheckCircle, Shield, FileCheck, Lock } from 'lucide-react';

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
    <>
      <section className="py-20 bg-white border-t border-slate-100 px-6">
        {/* EXISTING CONTENT — untouched */}

        <button
          onClick={() => setOpen(true)}
          className="bg-procure-copper hover:bg-orange-700 text-white font-bold py-3 px-10 rounded-full transition-all flex items-center gap-2 mx-auto"
        >
          <FileCheck size={20} /> Request Compliance Pack
        </button>
      </section>

      <ComplianceRequestModal
        isOpen={open}
        onClose={() => setOpen(false)}
      />
    </>
  );
};


export default Compliance;