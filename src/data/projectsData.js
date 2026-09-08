// Import your images here
import cleanGenieImg from '../assets/clean-genie.png';
import dashboardImg from '../assets/dashboard.png';
import vilamagentaImg from '../assets/vilamagenta.png';
import arieslyImg from '../assets/ariesly.png';
import fit4lessImg from '../assets/fit4less.png';

// To add a new project, just copy/paste an object below. 
// You don't need to touch the main component file!
export const allProjectData = [
  {
    title: "Clean Genie – Service Request System",
    type: "Service Booking Platform",
    desc: "A web-based platform for booking cleaning services with an admin dashboard, scheduling, and booking management.",
    tech: ["HTML", "CSS", "JavaScript"],
    img: cleanGenieImg,
    link: "https://cleangenie.vercel.app/"
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
    title: "FIT4LESS Gym Management System",
    type: "Gym Management System",
    desc: "A modern gym management system designed to replace manual pen-and-paper records, featuring member management, daily check-ins, membership plans, discounts, payments, and transaction tracking.",
    tech: ["JavaScript", "React"],
    img: fit4lessImg,
    link: "https://gym-management-mocha-one.vercel.app/"
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