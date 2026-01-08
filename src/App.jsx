import React from 'react';
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Partners from './components/Partners.jsx'
import Services from './components/Services.jsx';
import Compliance from './components/Complians.jsx'; 
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

const App = () => {
  return (
    // The wrapper div is essential to hold everything together
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans scroll-smooth">
      
      {/* Navigation - Sticky at the top */}
      <Nav />
      
      {/* Hero Section - The first thing people see */}
      <Hero />

      {/* partners  */}
      <Partners/>
      
      {/* Sections with IDs for Smooth Scrolling Navigation */}
      <section id="services">
        <Services />
      </section>

      <section id="compliance">
        <Compliance />
      </section>

      <section id="projects">
        <Projects />
      </section>

      {/* Global Footer */}
      <Footer />

      {/* Floating WhatsApp for Zambian clients */}
      <WhatsAppButton />
      
    </div>
  );
};

export default App;