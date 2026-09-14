import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

/* 1. IMPORT YOUR IMAGES AT THE TOP */
import cleanGenieImg from '../assets/clean-genie.png';
import dashboardImg from '../assets/dashboard.png';
import fit4lessImg from '../assets/fit4less.png';
import vilamagentaImg from '../assets/vilamagenta.png';
import arieslyImg from '../assets/ariesly.png';

/* 2. PROJECT DATA — includes the panel copy */
const projectData = [
  {
    key: 'fit4less',
    title: 'FIT4LESS',
    tag: 'Gym Management',
    type: 'Full-stack build · Web system',
    desc: 'A complete management system for a working gym, built to replace its daily pen-and-paper logbook. Members, check-ins, plans, payments and transactions live in one place instead of a binder at the front desk.',
    points: [
      'Daily check-in flow replaces the paper attendance sheet',
      'Membership plans, discounts and payments tracked as one transaction ledger',
      'Front-desk dashboard: today’s revenue, active members, recent activity',
    ],
    tech: ['JavaScript', 'React'],
    img: fit4lessImg,
    cap: 'FIG. 01 — FIT4LESS / GYM MANAGEMENT',
    link: 'https://gym-management-mocha-one.vercel.app/',
  },
  {
    key: 'cleangenie',
    title: 'Clean Genie',
    tag: 'Service Booking',
    type: 'Web platform · Booking flow',
    desc: 'A web-based booking platform for a cleaning service: customers request and schedule cleanings online, while the admin side manages every request from a central dashboard.',
    points: [
      'End-to-end booking flow — request, schedule, confirmation',
      'Admin dashboard for managing incoming service requests',
      'Plain HTML, CSS and JavaScript — no framework overhead',
    ],
    tech: ['HTML', 'CSS', 'JavaScript'],
    img: cleanGenieImg,
    cap: 'FIG. 02 — CLEAN GENIE / SERVICE BOOKING',
    link: 'https://cleangenie.vercel.app/',
  },
  {
    key: 'dashboard',
    title: 'Booking Dashboard',
    tag: 'Admin Analytics',
    type: 'Analytics + CRUD · React',
    desc: 'The admin control room for the Clean Genie booking system — managing users, bookings and services, with live analytics on top of the operational data.',
    points: [
      'Chart.js analytics for revenue, bookings and service performance',
      'User, booking and service management in one panel',
      'Fully responsive — runs the business from a phone if it has to',
    ],
    tech: ['React', 'Tailwind CSS', 'Chart.js'],
    img: dashboardImg,
    cap: 'FIG. 03 — BOOKING DASHBOARD / ANALYTICS',
    link: 'https://booking-service-management-dashboar.vercel.app/login',
  },
  {
    key: 'ariesly',
    title: 'Ariesly',
    tag: 'E-Commerce',
    type: 'Storefront · Cart + checkout',
    desc: 'A modern e-commerce storefront built to sell: product listings, a persistent cart, and a checkout flow that stays out of the customer’s way. Every step of the purchase path was designed around fewer clicks and fewer abandoned carts.',
    points: [
      'Product catalog with featured collections',
      'Shopping cart with persistent state across the session',
      'Streamlined checkout — fewer steps, fewer abandoned carts',
    ],
    tech: ['JavaScript', 'React', 'Tailwind CSS'],
    img: arieslyImg,
    cap: 'FIG. 04 — ARIESLY / E-COMMERCE',
    link: 'https://ariesly-ecommerce.vercel.app/',
  },
  {
    key: 'vilamagenta',
    title: 'Vila Magenta',
    tag: 'Resort Website',
    type: 'Responsive showcase · React',
    desc: 'A responsive showcase website for Vila Magenta Private Resort & Events Place — presenting facilities, accommodations and the event venue, with booking inquiries always a tap away.',
    points: [
      'Responsive from desktop to mobile — how guests actually browse',
      'Facility and accommodation galleries',
      'Clear inquiry paths for bookings and events',
    ],
    tech: ['React', 'Tailwind CSS'],
    img: vilamagentaImg,
    cap: 'FIG. 05 — VILA MAGENTA / RESORT WEBSITE',
    link: 'https://vila-magenta-website.vercel.app/',
  },
];

/* 3. Small inline arrow icon */
const ArrowNE = ({ size = 15 }) => (
  <svg
    viewBox="0 0 24 24"
    width={size}
    height={size}
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="square"
    aria-hidden="true"
  >
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

const Projects = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(projectData[0].key);
  const [failedImgs, setFailedImgs] = useState({}); // track per-project failures

  const project = projectData.find((p) => p.key === selected) ?? projectData[0];
  const figOk = !failedImgs[project.key];

  const handleSelect = (key) => {
    setSelected(key);
    if (window.matchMedia('(max-width: 980px)').matches) {
      setTimeout(() => {
        document.getElementById('panel')?.scrollIntoView({
          behavior: 'smooth',
          block: 'nearest',
        });
      }, 80);
    }
  };

  return (
    <section id="work" className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-idx">02</span>
          <h2 className="sec-title">Projects</h2>
          <span className="sec-rule" />
          <span className="sec-meta">{projectData.length} builds / schema to screen</span>
        </div>

        <p className="sec-intro reveal">
          Systems in active use — select a row and the build notes open in the panel.
        </p>

        <div className="work-layout">
          {/* ---------- LEFT: project list ---------- */}
          <div className="proj-list reveal" role="tablist" aria-label="Projects">
            {projectData.map((p, i) => (
              <button
                key={p.key}
                type="button"
                className="proj-row"
                role="tab"
                aria-selected={selected === p.key}
                onClick={() => handleSelect(p.key)}
              >
                <span className="pr-idx">{String(i + 1).padStart(2, '0')}</span>
                <span className="pr-name">{p.title}</span>
                <span className="pr-tag">{p.tag}</span>
                <span className="pr-arrow"><ArrowNE /></span>
              </button>
            ))}
          </div>

          {/* ---------- RIGHT: detail panel ---------- */}
          <div
            className="pd-panel reveal"
            style={{ '--d': '.1s' }}
            id="panel"
            role="tabpanel"
            aria-live="polite"
          >
            {figOk && (
              <figure className="pd-fig">
                <img
                  src={project.img}
                  alt={`${project.title} screenshot`}
                  loading="lazy"
                  onError={() =>
                    setFailedImgs((prev) => ({ ...prev, [project.key]: true }))
                  }
                />
                <figcaption>{project.cap}</figcaption>
              </figure>
            )}

            <div className="pd-body">
              <span className="pd-type">{project.type}</span>
              <h3 className="pd-name">{project.title}</h3>
              <p className="pd-desc">{project.desc}</p>

              <ul className="pd-points">
                {project.points.map((pt, i) => (
                  <li key={i}>{pt}</li>
                ))}
              </ul>

              <div className="pd-foot">
                <div className="pd-tags">
                  {project.tech.map((t) => (
                    <span key={t} className="pd-tag">{t}</span>
                  ))}
                </div>

                <a
                  className="pd-link"
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  VIEW PROJECT <ArrowNE size={12} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- View more ---------- */}
        <div className="reveal" style={{ marginTop: 'clamp(28px, 4vw, 48px)' }}>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => navigate('/all-projects')}
          >
            VIEW MORE PROJECTS <ArrowNE size={12} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;