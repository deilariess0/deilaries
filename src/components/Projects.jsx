import React from 'react';
import cleanGenieImg from '../assets/clean-genie.png';
import dashboardImg from '../assets/dashboard.png';
import vilamagentaImg from '../assets/vilamagenta.jpg';

const projectData = [
  {
    title: "Clean Genie – Service Request System",
    type: "Web Application",
    desc: "A web-based platform for booking cleaning services with an admin dashboard, scheduling, and booking management.",
    tech: ["HTML", "CSS", "JavaScript"],
    img: cleanGenieImg,
    link: "https://deilariess0.github.io/Clean-Genie/"
  },
  {
    title: "Booking Service Management Dashboard",
    type: "Web Application",
    desc: "Admin panel for managing users, bookings, and services, with real-time analytics and responsive design.",
    tech: ["React", "Tailwind CSS", "Chart.js"],
    img: dashboardImg,
    link: "https://booking-service-management-dashboar.vercel.app/login"
  },
  {
    title: "Vila Magenta - Private Resort & Events Place",
    type: "Website",
    desc: "A responsive website designed for Vila Magenta Resort and Events Place, showcasing its private resort facilities, accommodations, and event venue",
    tech: ["HTML", "CSS", "JavaScript"],
    img: vilamagentaImg,
    link: "https://deilariess0.github.io/Vila-Magenta-Website/"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="bg-dark text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm">My Work</p>
            <h2 className="text-4xl font-extrabold mt-2">Featured Projects</h2>
            <p className="text-slate-400 mt-3">Here are some of the projects I've worked on.</p>
          </div>
          <button className="border-2 border-blue-600 text-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition hidden md:block">
            View More Projects →
          </button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projectData.map((project, index) => (
            <div key={index} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-600 transition group flex flex-col">
              <div className="h-48 bg-slate-700 overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              </div>
              <div className="p-6 flex flex-col grow">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p className="text-blue-400 text-sm mt-2 font-medium">{project.type}</p>
                <p className="text-slate-400 text-sm mt-3 leading-relaxed grow">{project.desc}</p>
                
                {/* Added link to the icon */}
                <div className="flex gap-2 mt-6 flex-wrap items-center">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="bg-slate-700 text-slate-200 px-3 py-1 rounded-md text-xs font-semibold">{tech}</span>
                  ))}
                  
                  {/* Here is the actual link */}
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
