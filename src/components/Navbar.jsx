import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false); // State for mobile sidebar

  // Function to handle navigating to sections, or going home first
  const handleSectionClick = (e, sectionId) => {
    // Close mobile sidebar if open
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

  // Common link classes to avoid duplication
  const linkClasses = "block py-4 text-slate-600 font-medium hover:text-blue-600 transition border-b border-gray-100";

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

        {/* Hamburger Button (Mobile) - Always stays dark, and disappears when menu is open */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className={`md:hidden text-slate-700 focus:outline-none z-[70] relative transition-opacity duration-300 ${
            isOpen ? 'opacity-0 pointer-events-none' : 'opacity-100'
          }`}
          aria-label="Toggle menu"
        >
          <i className="fas fa-bars text-2xl"></i>
        </button>
      </div>

      {/* Mobile Sidebar Overlay (with Blur) */}
      <div 
        className={`fixed inset-0 bg-black/40 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)}
      />

      {/* Mobile Sidebar Drawer - Right side */}
      <div 
        className={`fixed top-0 right-0 h-full w-72 bg-white/95 backdrop-blur-md shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden z-50 flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        {/* Sidebar Header with Close Button */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <span className="font-bold text-lg text-slate-800">Menu</span>
          <button 
            onClick={() => setIsOpen(false)} 
            className="text-slate-500 hover:text-slate-800 focus:outline-none"
            aria-label="Close menu"
          >
            <i className="fas fa-times text-xl"></i>
          </button>
        </div>

        {/* Sidebar Links */}
        <div className="flex flex-col px-6 pt-4 flex-grow overflow-y-auto">
          <Link 
            to="/"
            onClick={(e) => handleSectionClick(e, 'home')}
            className={linkClasses}
          >
            Home
          </Link>
          
          <a 
            href="#projects"
            onClick={(e) => handleSectionClick(e, 'projects')}
            className={linkClasses}
          >
            Project
          </a>
          
          <a 
            href="#skills"
            onClick={(e) => handleSectionClick(e, 'skills')}
            className={linkClasses}
          >
            Skill
          </a>
          <a 
            href="#contact"
            onClick={(e) => handleSectionClick(e, 'contact')}
            className={linkClasses}
          >
            Contact Me
          </a>
        </div>

        {/* Download CV Button (Sidebar - Pinned to bottom) */}
        <div className="p-6 border-t border-gray-100 mt-auto">
          <a 
            href="https://drive.google.com/file/d/1ID6rRej1IEJVNs0oATbv4YS9s7nVf9AJ/view?usp=drive_link" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="flex items-center justify-center gap-2 bg-blue-600 text-white px-5 py-3 rounded-lg text-sm font-semibold hover:bg-blue-700 transition shadow-md shadow-blue-200 w-full"
          >
            <i className="fas fa-download text-xs"></i> Download CV
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;