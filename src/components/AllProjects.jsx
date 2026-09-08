import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

// Import your data from the separate file
import { allProjectData } from '../data/projectsData';

const AllProjects = () => {
  const sectionRef = useRef(null);

  // Intersection Observer to add 'active' class when scrolling into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.15 }
    );

    const revealElements = sectionRef.current.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="bg-dark text-white py-10 px-6 md:px-6 min-h-screen pb-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="reveal flex flex-col md:flex-row md:justify-between md:items-center mb-10 md:mb-16 gap-6">
          <div>
            <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm">My Work</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">All Projects</h2>
            <p className="text-slate-400 mt-3">Here is a complete list of everything I have built.</p>
          </div>
          
          <Link 
            to="/" 
            className="border-2 border-blue-600 text-blue-400 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition w-full md:w-auto text-center"
          >
            ← Back to Home
          </Link>
        </div>
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {allProjectData.map((project, index) => (
            <div 
              key={index} 
              className="reveal bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-600 transition group flex flex-col hover:-translate-y-2"
              style={{ transitionDelay: `${index * 250}ms` }}
            >
              <div className="h-48 md:h-52 bg-slate-700 overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              </div>
              <div className="p-5 md:p-6 flex flex-col grow">
                <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
                <p className="text-blue-400 text-sm mt-2 font-medium">{project.type}</p>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed grow">{project.desc}</p>
                
                <div className="flex gap-2 mt-6 flex-wrap items-center pb-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-slate-700 text-slate-200 px-3 py-1 rounded-md text-xs font-semibold mb-2">{tech}</span>
                  ))}
                  
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="ml-auto text-slate-400 hover:text-white transition mb-2"
                  >
                    <i className="fas fa-external-link-alt"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllProjects;