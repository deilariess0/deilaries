import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // State for mobile menu

  // Function to handle navigating to sections, or going home first
  const handleSectionClick = (e, sectionId) => {
    // Close mobile menu if open
    setIsOpen(false);
    
    // If we are NOT on the home page
    if (location.pathname !== '/') {
      e.preventDefault(); // Stop the default jump
      navigate('/'); // Go back to home page
      
      // Wait for the page to load, then scroll to the section
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100); // 100ms delay to let React render the home page
      return; 
    }
    
    // If we ARE on the home page, just smooth scroll
    e.preventDefault();
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3">
          <span className="font-bold text-xl text-slate-800 tracking-tight">Deil Aries Santos</span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium text-[15px]">
          <Link 
            to="/"
            onClick={(e) => handleSectionClick(e, 'home')}
            className="transition hover:text-blue-600"
          >
            Home
          </Link>
          
          <a 
            href="#projects"
            onClick={(e) => handleSectionClick(e, 'projects')}
            className="transition hover:text-blue-600"
          >
            Project
          </a>
          
          <a 
            href="#skills"
            onClick={(e) => handleSectionClick(e, 'skills')}
            className="transition hover:text-blue-600"
          >
            Skill
          </a>
          <a 
            href="#contact"
            onClick={(e) => handleSectionClick(e, 'contact')}
            className="transition hover:text-blue-600"
          >
            Contact Me
          </a>
        </div>

        {/* Download CV Button (Desktop) */}
        <div className="hidden md:block">
          <a 
            href="https://drive.google.com/file/d/1ID6rRej1IEJVNs0oATbv4YS9s7nVf9AJ/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition shadow-md shadow-blue-200"
          >
            <i className="fas fa-download text-xs"></i> Download CV
          </a>
        </div>

        {/* Hamburger Button (Mobile) */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-700 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <i className="fas fa-times text-2xl"></i> // Close icon
          ) : (
            <i className="fas fa-bars text-2xl"></i> // Hamburger icon
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      <div 
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col gap-4 pb-4">
          <Link 
            to="/"
            onClick={(e) => handleSectionClick(e, 'home')}
            className="text-slate-600 font-medium hover:text-blue-600 transition py-2 border-b border-gray-100"
          >
            Home
          </Link>
          
          <a 
            href="#projects"
            onClick={(e) => handleSectionClick(e, 'projects')}
            className="text-slate-600 font-medium hover:text-blue-600 transition py-2 border-b border-gray-100"
          >
            Project
          </a>
          
          <a 
            href="#skills"
            onClick={(e) => handleSectionClick(e, 'skills')}
            className="text-slate-600 font-medium hover:text-blue-600 transition py-2 border-b border-gray-100"
          >
            Skill
          </a>
          <a 
            href="#contact"
            onClick={(e) => handleSectionClick(e, 'contact')}
            className="text-slate-600 font-medium hover:text-blue-600 transition py-2 border-b border-gray-100"
          >
            Contact Me
          </a>

          {/* Download CV Button (Mobile) */}
          <a 
            href="https://drive.google.com/file/d/1ID6rRej1IEJVNs0oATbv4YS9s7nVf9AJ/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition shadow-md shadow-blue-200 mt-2"
          >
            <i className="fas fa-download text-xs"></i> Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;