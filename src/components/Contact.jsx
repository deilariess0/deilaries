import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-dark text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* Left Side - Contact Info */}
        <div className="reveal">
          <p className="text-blue-400 font-semibold uppercase text-sm tracking-widest">Get In Touch</p>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-2 mb-6">Contact Me</h2>
          <p className="text-slate-400 leading-relaxed text-lg mb-10">
            Have a project in mind or want to work together? I'd love to send me a message!
          </p>
          
          <div className="space-y-6 text-slate-300">
            <a href="mailto:deilariess0@gmail.com" className="group flex items-center gap-4 hover:text-white transition">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition">
                <i className="fas fa-envelope text-blue-400 group-hover:text-white transition"></i>
              </div>
              <span className="text-lg">deilariess0@gmail.com</span>
            </a>

            <a href="https://www.linkedin.com/in/deilariessantos" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-4 hover:text-white transition">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition">
                <i className="fab fa-linkedin text-blue-400 group-hover:text-white transition"></i>
              </div>
              <span className="text-lg">in/deilariessantos</span>
            </a>

            <div className="group flex items-center gap-4 hover:text-white transition">
              <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition">
                <i className="fas fa-map-marker-alt text-blue-400 group-hover:text-white transition"></i>
              </div>
              <span className="text-lg">Bulacan, Philippines</span>
            </div>
          </div>
        </div>

        {/* Right Side - Form (NO DELAY) */}
        <form className="space-y-4 reveal">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full bg-slate-800 p-4 rounded-xl border border-slate-700 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none text-white placeholder-slate-500 transition duration-300" 
            />
            <input 
              type="email" 
              placeholder="Your Email" 
              className="w-full bg-slate-800 p-4 rounded-xl border border-slate-700 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none text-white placeholder-slate-500 transition duration-300" 
            />
          </div>
          <input 
            type="text" 
            placeholder="Subject" 
            className="w-full bg-slate-800 p-4 rounded-xl border border-slate-700 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none text-white placeholder-slate-500 transition duration-300" 
          />
          <textarea 
            rows="5" 
            placeholder="Your Message" 
            className="w-full bg-slate-800 p-4 rounded-xl border border-slate-700 focus:border-blue-600 focus:ring-2 focus:ring-blue-600/20 outline-none text-white placeholder-slate-500 transition duration-300 resize-none"
          ></textarea>
          
          <button 
            type="submit" 
            className="w-full bg-linear-to-r from-blue-600 to-indigo-600 py-4 rounded-xl font-bold hover:opacity-90 hover:shadow-xl hover:shadow-blue-600/20 active:scale-[0.98] transition flex justify-center items-center gap-2"
          >
            <i className="fas fa-paper-plane"></i> Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;