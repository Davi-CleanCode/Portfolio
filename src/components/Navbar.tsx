import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', to: 'home', offset: 0 },
  { name: 'Projects', to: 'projects', offset: -80 },
  { name: 'Contact', to: 'contact', offset: -80 },
  { name: 'Hire Me', to: 'hire', offset: -80 },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark-900/95 shadow-md backdrop-blur-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 flex justify-between items-center">
        <Link
          to="home"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
          className="text-xl font-bold text-white cursor-pointer"
        >
          <span className="text-primary-500">Portfolio</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={link.offset}
              duration={500}
              className="text-gray-300 hover:text-primary-400 transition-colors duration-300 cursor-pointer"
              activeClass="text-primary-400 font-medium"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Mobile Navigation Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-300 hover:text-primary-400 transition-colors duration-300"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden bg-dark-900/95 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
          isOpen ? 'max-h-96 py-4' : 'max-h-0 py-0'
        }`}
      >
        <div className="flex flex-col space-y-4 px-4 sm:px-6">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.to}
              spy={true}
              smooth={true}
              offset={link.offset}
              duration={500}
              className="text-gray-300 hover:text-primary-400 transition-colors duration-300 py-2 cursor-pointer"
              activeClass="text-primary-400 font-medium"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;