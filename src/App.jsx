import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// Components
import Nav from './components/Nav.jsx';
import Hero from './components/Hero.jsx';
import Partners from './components/Partners.jsx';
import Services from './components/Services.jsx';
import Compliance from './components/Complians.jsx'; 
import Projects from './components/Projects.jsx';
import Footer from './components/Footer.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';

// Admin Components
import AdminDashboard from './components/AdminDashboard.jsx';
import AdminLogin from './components/AdminLogin.jsx'; // Make sure to create this

// 1. Protected Route Wrapper
// This checks if 'adminToken' exists in localStorage. If not, it kicks the user to /login
const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem('adminToken') === 'true'; 
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

const Home = () => (
  <div className="min-h-screen bg-slate-50 text-slate-900 font-sans scroll-smooth">
    <Nav />
    <Hero />
    <Partners />
    <section id="services"><Services /></section>
    <section id="compliance"><Compliance /></section>
    <section id="projects"><Projects /></section>
    <Footer />
    <WhatsAppButton />
  </div>
);

const App = () => {
  return (
    <Router>
      <Routes> 
        {/* Public Landing Page */}
        <Route path="/" element={<Home />} />

        {/* Login Page */}
        <Route path="/login" element={<AdminLogin />} />

        {/* Protected Admin Dashboard */}
        <Route 
          path="/admin" 
          element={
            <ProtectedRoute>
              <AdminDashboard />
            </ProtectedRoute>
          } 
        />
        
        {/* Redirect any unknown admin paths to /admin */}
        <Route path="/admin/*" element={<Navigate to="/admin" />} />
      </Routes>
    </Router>
  );
};

export default App;