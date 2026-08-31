import React from 'react'; // Removed useEffect
import { Link } from 'react-router-dom'; // Removed useNavigate

// 1. IMPORT YOUR IMAGES AT THE TOP
import cleanGenieImg from '../assets/clean-genie.png';
import dashboardImg from '../assets/dashboard.png';
import vilamagentaImg from '../assets/vilamagenta.png';
import arieslyImg from '../assets/Ariesly.png';

const allProjectData = [
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
  },
  {
    title: "Ariesly E-Commerce Storefront",
    type: "E-Commerce Platform",
    desc: "A modern e-commerce platform featuring product listings, shopping cart functionality, and a seamless checkout experience.",
    tech: ["JavaScript", "React", "Tailwind CSS"],
    img: arieslyImg,
    link: "https://ariesly-ecommerce.vercel.app/"
  },
];

const AllProjects = () => {
  // REMOVED the useEffect redirect that was causing the issue!

  return (
    <section className="bg-dark text-white py-16 md:py-24 px-4 md:px-6 min-h-screen pb-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header - stacks on mobile, flex on desktop */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-10 md:mb-16 gap-6">
          <div>
            <p className="text-blue-400 font-semibold tracking-widest uppercase text-sm">My Work</p>
            <h2 className="text-3xl md:text-4xl font-extrabold mt-2">All Projects</h2>
            <p className="text-slate-400 mt-3">Here is a complete list of everything I have built.</p>
          </div>
          
          {/* Back Button - full width on mobile */}
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
            <div key={index} className="bg-slate-800 rounded-xl overflow-hidden border border-slate-700 hover:border-blue-600 transition group flex flex-col">
              <div className="h-48 md:h-52 bg-slate-700 overflow-hidden">
                <img src={project.img} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
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

export default AllProjects;