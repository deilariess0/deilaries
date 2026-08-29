import React from 'react';
import myPhoto from '../assets/image2.png'; // CHANGE THIS if your photo has a different name/case!

const Hero = () => {
  return (
    <section id="home" className="bg-light py-16 px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-blue-100 blur-3xl opacity-50 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {/* CHANGED flex-col-reverse to flex-col */}
          <div className="flex flex-col md:flex-row items-center p-10 md:p-16 gap-12">
            
            {/* LEFT SIDE: Image */}
            <div className="w-full md:w-2/5 relative flex justify-center items-center">
              <div className="absolute inset-0 bg-blue-100 rounded-full blur-2xl opacity-60 transform scale-110"></div>
              <div className="relative bg-linear-to-br from-blue-50 to-blue-100 p-6 rounded-full z-10">
                <img 
                  src={myPhoto} 
                  alt="Profile" 
                  className="w-80 h-96 object-cover rounded-3xl shadow-2xl border-4 border-white"
                />
              </div>
              
              {/* Dark Name Plate */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-xs bg-dark text-white p-6 rounded-3xl shadow-2xl z-20 text-center">
                <h2 className="text-xl font-bold tracking-widest">DEIL ARIES SANTOS</h2>
                <p className="text-blue-400 text-sm mt-1">Computer Science</p>
                <div className="flex justify-center gap-6 mt-4 text-lg">
                   <a href="https://www.linkedin.com/in/deilariessantos/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"><i className="fab fa-linkedin"></i></a>
                   <a href="https://github.com/deilariess0" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition"><i className="fab fa-github"></i></a>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE: Text */}
            <div className="flex-1 w-full">
              <p className="text-blue-600 font-bold tracking-widest uppercase text-sm">About Me</p>
              <h1 className="text-5xl font-extrabold text-slate-800 mt-2 leading-tight">
                Hi, I'm <br /> <span className="text-blue-600">Deil Aries Santos</span>
              </h1>
              <p className="text-slate-500 mt-3 font-medium">FULL STACK DEVELOPER</p>
              <div className="w-16 h-1 bg-blue-600 mt-6 mb-8"></div>
              
              <p className="text-slate-600 leading-relaxed mb-4">
                I'm a Computer Science graduate who enjoys turning ideas into working, real-world solutions. My background includes experience in web development, IT support, and systems administration.
              </p>
              <p className="text-slate-600 leading-relaxed mb-10">
                I care about writing clean, functional code and choosing tools that are simple and genuinely useful. I'm currently open to both freelance projects and full-time opportunities.
              </p>
              
              {/* Updated Button Container: flex-col on mobile, flex-row on desktop */}
              <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:justify-start justify-center">
                <a href="https://www.linkedin.com/in/deilariessantos/" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-blue-600/10 text-blue-600 border border-blue-600/30 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition whitespace-nowrap w-full sm:w-auto">
                  <i className="fab fa-linkedin"></i> LINKEDIN
                </a>
                <a href="https://github.com/deilariess0" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-blue-600/10 text-blue-600 border border-blue-600/30 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition whitespace-nowrap w-full sm:w-auto">
                  <i className="fab fa-github"></i> GITHUB
                </a>
                <a href="https://drive.google.com/file/d/1ID6rRej1IEJVNs0oATbv4YS9s7nVf9AJ/view?usp=drive_link" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-blue-600/10 text-blue-600 border border-blue-600/30 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition whitespace-nowrap w-full sm:w-auto">
                  <i className="fas fa-file-alt"></i> RESUME
                </a>
                <a href="https://linktr.ee/deilaries" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-blue-600/10 text-blue-600 border border-blue-600/30 px-6 py-3 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition whitespace-nowrap w-full sm:w-auto">
                  <i className="fas fa-envelope"></i> CONTACT ME
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
