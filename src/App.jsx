import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <div className="font-sans bg-light min-h-screen">
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Contact />
      <footer className="bg-dark text-white py-8 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-slate-400 border-t border-slate-800 pt-6">
          <p>© 2024 Deil Aries Santos. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 text-xl">
            <a href="https://www.linkedin.com/in/deilariessantos/" target= "_blank" className="hover:text-white transition"><i className="fab fa-linkedin"></i></a>
            <a href="https://github.com/deilariess0" targer= "_blank" className="hover:text-white transition"><i className="fab fa-github"></i></a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;