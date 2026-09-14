import cleanGenieImg from '../assets/clean-genie.png';
import dashboardImg from '../assets/dashboard.png';
import fit4lessImg from '../assets/fit4less.png';
import vilamagentaImg from '../assets/vilamagenta.png';
import arieslyImg from '../assets/ariesly.png';

export const PROJECTS = [
  {
    key: 'fit4less',
    name: 'FIT4LESS',
    tag: 'Gym Management',
    type: 'Full-stack build · Web system',
    img: fit4lessImg,
    cap: 'FIG. 01 — FIT4LESS / GYM MANAGEMENT',
    desc: 'A complete management system for a working gym, built to replace its daily pen-and-paper logbook. Members, check-ins, plans, payments and transactions live in one place instead of a binder at the front desk.',
    points: [
      'Daily check-in flow replaces the paper attendance sheet',
      'Membership plans, discounts and payments tracked as one transaction ledger',
      'Front-desk dashboard: today’s revenue, active members, recent activity',
    ],
    stack: ['JavaScript', 'React'],
    link: 'https://fit4lessgym.vercel.app/',
  },
  {
    key: 'cleangenie',
    name: 'Clean Genie',
    tag: 'Service Booking',
    type: 'Web platform · Booking flow',
    img: cleanGenieImg,
    cap: 'FIG. 02 — CLEAN GENIE / SERVICE BOOKING',
    desc: 'A web-based booking platform for a cleaning service: customers request and schedule cleanings online, while the admin side manages every request from a central dashboard.',
    points: [
      'End-to-end booking flow — request, schedule, confirmation',
      'Admin dashboard for managing incoming service requests',
      'Plain HTML, CSS and JavaScript — no framework overhead',
    ],
    stack: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://cleangenie.vercel.app/',
  },
  {
    key: 'dashboard',
    name: 'Booking Dashboard',
    tag: 'Admin Analytics',
    type: 'Analytics + CRUD · React',
    img: dashboardImg,
    cap: 'FIG. 03 — BOOKING DASHBOARD / ANALYTICS',
    desc: 'The admin control room for the Clean Genie booking system — managing users, bookings and services, with live analytics on top of the operational data.',
    points: [
      'Chart.js analytics for revenue, bookings and service performance',
      'User, booking and service management in one panel',
      'Fully responsive — runs the business from a phone if it has to',
    ],
    stack: ['React', 'Tailwind CSS', 'Chart.js'],
    link: 'https://booking-service-management-dashboar.vercel.app/login',
  },
  {
    key: 'ariesly',
    name: 'Ariesly',
    tag: 'E-Commerce',
    type: 'Storefront · Cart + checkout',
    img: arieslyImg,
    cap: 'FIG. 04 — ARIESLY / E-COMMERCE',
    desc: 'A storefront built to sell: product listings, cart and a checkout flow that stays out of the customer’s way.',
    points: [
      'Product catalog with featured collections',
      'Shopping cart with persistent state',
      'Streamlined checkout — fewer steps, fewer abandoned carts',
    ],
    stack: ['JavaScript', 'React', 'Tailwind CSS'],
    link: 'https://ariesly-ecommerce.vercel.app/',
  },
  {
    key: 'vila',
    name: 'Vila Magenta',
    tag: 'Resort Website',
    type: 'Responsive showcase · React',
    img: vilamagentaImg,
    cap: 'FIG. 05 — VILA MAGENTA / RESORT WEBSITE',
    desc: 'A responsive showcase website for Vila Magenta Private Resort & Events Place — presenting facilities, accommodations and the event venue, with booking inquiries a tap away.',
    points: [
      'Responsive from desktop to mobile — how guests actually browse',
      'Facility and accommodation galleries',
      'Clear inquiry paths for bookings and events',
    ],
    stack: ['React', 'Tailwind CSS'],
    link: 'https://vila-magenta-website.vercel.app/',
  },
];

export const PROJECT_MAP = Object.fromEntries(PROJECTS.map((p) => [p.key, p]));