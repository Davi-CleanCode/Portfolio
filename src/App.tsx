import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TechStackSection from './components/TechStackSection';
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import HireSection from './components/HireSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <Navbar />
      <HeroSection />
      <TechStackSection />
      <ProjectsSection />
      <ContactSection />
      <HireSection />
      <Footer />
    </div>
  );
}

export default App;