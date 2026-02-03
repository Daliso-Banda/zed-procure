import React from 'react';

const PrivacyPolicy = () => {
  const companyName = import.meta.env.VITE_COMPANY_NAME;

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-procure-navy mb-4">Privacy Policy</h1>
          <p className="text-gray-600">Last updated: February 2, 2026</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-lg shadow-md p-8 space-y-8">
          {/* Introduction */}
          <section>
            <h2 className="text-2xl font-bold text-procure-navy mb-4">1. Introduction</h2>
            <p className="text-gray-700 leading-relaxed">
              {companyName} ("we," "us," "our," or "Company") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website and use our services.
            </p>
          </section>

          {/* Information Collection */}
          <section>
            <h2 className="text-2xl font-bold text-procure-navy mb-4">2. Information We Collect</h2>
            <div className="space-y-3 text-gray-700">
              <p><strong>Personal Information:</strong> We may collect information you provide directly, such as your name, email address, phone number, company name, and other contact details when you interact with our services.</p>
              <p><strong>Automatically Collected Information:</strong> We may automatically collect certain information about your device and how you interact with our website, including IP address, browser type, and pages visited.</p>
              <p><strong>Compliance Documentation:</strong> When registering as a vendor or submitting compliance documents, you may provide additional business-related information.</p>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-bold text-procure-navy mb-4">3. How We Use Your Information</h2>
            <ul className="text-gray-700 space-y-2 list-disc list-inside">
              <li>To provide and improve our services</li>
              <li>To process vendor registrations and compliance requests</li>
              <li>To communicate with you regarding your account or inquiries</li>
              <li>To comply with legal obligations and regulations</li>
              <li>To send marketing communications (with your consent)</li>
              <li>To prevent fraud and ensure security</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <h2 className="text-2xl font-bold text-procure-navy mb-4">4. Data Security</h2>
            <p className="text-gray-700 leading-relaxed">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is completely secure.
            </p>
          </section>

          {/* Third Parties */}
          <section>
            <h2 className="text-2xl font-bold text-procure-navy mb-4">5. Sharing with Third Parties</h2>
            <p className="text-gray-700 leading-relaxed">
              We do not sell or rent your personal information. We may share your information with service providers, business partners, and regulatory authorities as necessary to provide our services or comply with legal requirements.
            </p>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-procure-navy mb-4">6. Your Rights</h2>
            <p className="text-gray-700 leading-relaxed">
              You have the right to access, update, or delete your personal information. To exercise these rights, please contact us using the information provided below.
            </p>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-procure-navy mb-4">7. Cookies</h2>
            <p className="text-gray-700 leading-relaxed">
              Our website may use cookies and similar tracking technologies to enhance your user experience. You can control cookie settings through your browser preferences.
            </p>
          </section>

          {/* Contact */}
          <section>
            <h2 className="text-2xl font-bold text-procure-navy mb-4">8. Contact Us</h2>
            <p className="text-gray-700 leading-relaxed">
              If you have questions about this Privacy Policy or our privacy practices, please contact us at:
            </p>
            <div className="mt-4 bg-procure-navy text-white p-4 rounded">
              <p>Email: {import.meta.env.VITE_COMPANY_EMAIL}</p>
              <p>Phone: {import.meta.env.VITE_COMPANY_PHONE}</p>
              <p>Address: {import.meta.env.VITE_COMPANY_ADDRESS}</p>
            </div>
          </section>

          {/* Changes to Policy */}
          <section>
            <h2 className="text-2xl font-bold text-procure-navy mb-4">9. Changes to This Policy</h2>
            <p className="text-gray-700 leading-relaxed">
              We may update this Privacy Policy from time to time. Changes will be effective immediately upon posting to our website. Your continued use of our services following any changes constitutes your acceptance of the updated Privacy Policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
