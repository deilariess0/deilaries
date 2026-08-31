import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import AllProjects from './components/AllProjects';
import Skills from './components/Skills';
import Contact from './components/Contact';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, [pathname]);
  return null;
};

const Home = () => {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      
      <div className="font-sans bg-light min-h-screen flex flex-col">
        <Navbar />
        <main className="grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/all-projects" element={<AllProjects />} />
          </Routes>
        </main>

        <footer className="bg-dark text-white py-8 px-6 w-full">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 border-t border-slate-800 pt-6">
            <p>© 2024 Deil Aries Santos. All rights reserved.</p>
            <div className="flex gap-6 mt-4 md:mt-0 text-xl">
              <a href="https://www.linkedin.com/in/deilariessantos/" target="_blank" rel="noreferrer" className="hover:text-white transition"><i className="fab fa-linkedin"></i></a>
              <a href="https://github.com/deilariess0" target="_blank" rel="noreferrer" className="hover:text-white transition"><i className="fab fa-github"></i></a>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;