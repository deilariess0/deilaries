import React, { useState, useEffect } from 'react';

const Navbar = () => {
  // State to track the active section
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'projects', 'skills', 'contact'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section is within the top half of the viewport
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="font-bold text-xl text-slate-800 tracking-tight">Deil Aries Santos</span>
        </div>

        {/* Links - Dynamically colored based on activeSection */}
        <div className="hidden md:flex items-center gap-8 text-slate-600 font-medium text-[15px]">
          <a 
            href="#home" 
            className={`transition ${activeSection === 'home' ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'}`}
          >
            Home
          </a>
          <a 
            href="#projects" 
            className={`transition ${activeSection === 'projects' ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'}`}
          >
            Project
          </a>
          <a 
            href="#skills" 
            className={`transition ${activeSection === 'skills' ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'}`}
          >
            Skill
          </a>
          <a 
            href="#contact" 
            className={`transition ${activeSection === 'contact' ? 'text-blue-600 font-semibold' : 'hover:text-blue-600'}`}
          >
            Contact Me
          </a>
        </div>

        {/* Download CV Button */}
        <a 
          href="https://drive.google.com/file/d/1ID6rRej1IEJVNs0oATbv4YS9s7nVf9AJ/view?usp=drive_link" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="flex items-center gap-2 bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-blue-700 transition shadow-md shadow-blue-200"
        >
          <i className="fas fa-download text-xs"></i> Download CV
        </a>
      </div>
    </nav>
  );
};

export default Navbar;