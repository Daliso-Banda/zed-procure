import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Components
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Partners from './components/Partners.jsx';
import Services from './components/Services.jsx';
import Compliance from './components/Complians.jsx'; 
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

// Admin Dashboard
import AdminDashboard from './components/AdminDashboard.jsx';

// 1. We create a "Home" component to hold the public landing page
const Home = () => (
  <div className="min-h-screen bg-slate-50 text-slate-900 font-sans scroll-smooth">
    <Nav />
    <Hero />
    <Partners />
    
    <section id="services">
      <Services />
    </section>

    <section id="compliance">
      <Compliance />
    </section>

    <section id="projects">
      <Projects />
    </section>

    <Footer />
    <WhatsAppButton />
  </div>
);

// 2. Main App with Routing Logic
const App = () => {
  return (
    <Router>
      <Routes> 
        {/* Public Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Secret Admin Dashboard */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;