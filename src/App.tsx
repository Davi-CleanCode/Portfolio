import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import TechStackSection from './components/TechStackSection';
import ProjectsSection from './components/ProjectsSection';
import BlogSection from './components/BlogSection.tsx';
import HireSection from './components/HireSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-white">
      <Navbar />
      <HeroSection />
      <TechStackSection />
      <ProjectsSection />
      <BlogSection />
      <HireSection />
      <Footer />
    </div>
  );
}

export default App;