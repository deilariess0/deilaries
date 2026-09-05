import React, { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

// 1. IMPORT YOUR IMAGES AT THE TOP
import cleanGenieImg from '../assets/clean-genie.png';
import dashboardImg from '../assets/dashboard.png';
import vilamagentaImg from '../assets/vilamagenta.png';

const projectData = [
  {
    title: "Clean Genie – Service Request System",
    type: "Service Booking Platform",
    desc: "A web-based platform for booking cleaning services with an admin dashboard, scheduling, and booking management.",
    tech: ["HTML", "CSS", "JavaScript"],
    img: cleanGenieImg,
    link: "https://deilariess0.github.io/Clean-Genie/"
  },
  {
    title: "Booking Service Management Dashboard",
    type: "Admin Dashboard",
    desc: "Admin panel for managing users, bookings, and services, with real-time analytics and responsive design.",
    tech: ["React", "Tailwind CSS", "Chart.js"],
    img: dashboardImg,
    link: "https://booking-service-management-dashboar.vercel.app/login"
  },
  {
    title: "Vila Magenta - Private Resort & Events Place",
    type: "Business Website",
    desc: "A responsive website designed for Vila Magenta Resort and Events Place, showcasing its private resort facilities, accommodations, and event venue",
    tech: ["React", "Tailwind CSS"],
    img: vilamagentaImg,
    link: "https://vila-magenta-website.vercel.app/"
  }
];

const Projects = () => {
  const navigate = useNavigate();
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
      { threshold: 0.15 } // Slightly increased threshold so it triggers a bit further into view
    );

    // Select all elements with the 'reveal' class inside this section
    const revealElements = sectionRef.current.querySelectorAll('.reveal');
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleViewMore = () => {
    navigate('/all-projects');
  };

  return (
    <section id="projects" ref={sectionRef} className="bg-dark text-white py-16 md:py-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - stacks on mobile, flex on desktop */}
        <div className="reveal flex flex-col md:flex-row md:justify-between md:items-end mb-10 md:mb-16 gap-6">
          <div>
            <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm">My Work</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">Featured Projects</h2>
            <p className="text-slate-400 mt-3">Here are some of the projects I've worked on.</p>
          </div>
          
          {/* Button - visible on all screens, full width on mobile */}
          <button 
            onClick={handleViewMore}
            className="border-2 border-blue-600 text-blue-400 px-6 md:px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition w-full md:w-auto text-center"
          >
            View More Projects →
          </button>
        </div>
        
        {/* Responsive Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projectData.map((project, index) => (
            <div 
              key={index} 
              className="reveal bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-600 transition group flex flex-col hover:-translate-y-2"
              style={{ transitionDelay: `${index * 250}ms` }} // Increased to 250ms for a slower stagger
            >
              <div className="h-48 md:h-52 bg-slate-700 overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-700" />
              </div>
              <div className="p-5 md:p-6 flex flex-col grow">
                <h3 className="text-lg md:text-xl font-bold">{project.title}</h3>
                <p className="text-blue-400 text-sm mt-2 font-medium">{project.type}</p>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed grow">{project.desc}</p>
                
                <div className="flex gap-2 mt-6 flex-wrap items-center">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-slate-700 text-slate-200 px-3 py-1 rounded-md text-xs font-semibold">{tech}</span>
                  ))}
                  
                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="ml-auto text-slate-400 hover:text-white transition"
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

export default Projects;