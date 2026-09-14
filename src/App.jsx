import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TechStrip from './components/TechStrip';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AllProjects from './components/AllProjects';
import PrivacyGate from './components/PrivacyGate';

/* ------------------------------------------------------------------
   Scroll to top on every route change.
------------------------------------------------------------------ */
const ScrollToTop = () => {
  const { pathname, state } = useLocation();

  useEffect(() => {
    if (state?.target) {
      const id = setTimeout(() => {
        document.getElementById(state.target)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
      return () => clearTimeout(id);
    }
    window.scrollTo(0, 0);
  }, [pathname, state]);

  return null;
};

/* ------------------------------------------------------------------
   Global reveal-on-scroll.
------------------------------------------------------------------ */
const useScrollReveal = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );

    const observeAll = () => {
      document.querySelectorAll('.reveal:not(.in)').forEach((el) => {
        observer.observe(el);
      });
    };

    observeAll();
    const rafId = requestAnimationFrame(observeAll);

    return () => {
      cancelAnimationFrame(rafId);
      observer.disconnect();
    };
  }, [pathname]);
};

/* ------------------------------------------------------------------
   Page: Home
------------------------------------------------------------------ */
const Home = () => (
  <>
    <Hero />
    <TechStrip />
    <About />
    <Projects />
    <Skills />
    <Contact />
  </>
);

/* ------------------------------------------------------------------
   App content (inside Router so hooks work)
------------------------------------------------------------------ */
const AppContent = () => {
  useScrollReveal();

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <ScrollToTop />
      <Navbar />

      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-projects" element={<AllProjects />} />
        </Routes>
      </main>

      <Footer />
    </>
  );
};

/* ------------------------------------------------------------------
   Root — Router wraps PrivacyGate, which wraps AppContent
------------------------------------------------------------------ */
export default function App() {
  return (
    <Router>
      <PrivacyGate>
        <AppContent />
      </PrivacyGate>
    </Router>
  );
}