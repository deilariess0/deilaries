import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-dark text-white py-24 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
        <div>
          <p className="text-blue-400 font-semibold uppercase text-sm tracking-widest">Get In Touch</p>
          <h2 className="text-5xl font-extrabold mt-2">Contact Me</h2>
          <p className="text-slate-400 mt-6 leading-relaxed text-lg">Have a project in mind or want to work together? I'd love to send me a message!</p>
          <div className="space-y-6 mt-10 text-slate-300">
            <div className="flex items-center gap-4"><i className="fas fa-envelope text-blue-400"></i>deilariess0@gmail.com</div>
            <div className="flex items-center gap-4"><i className="fab fa-linkedin text-blue-400"></i>in/deilariessantos</div>
            <div className="flex items-center gap-4"><i className="fas fa-map-marker-alt text-blue-400"></i>Bulacan, Philippines</div>
          </div>
        </div>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input type="text" placeholder="Your Name" className="w-full bg-slate-800 p-4 rounded-xl border border-slate-700 focus:border-blue-600 outline-none text-white placeholder-slate-500" />
            <input type="email" placeholder="Your Email" className="w-full bg-slate-800 p-4 rounded-xl border border-slate-700 focus:border-blue-600 outline-none text-white placeholder-slate-500" />
          </div>
          <input type="text" placeholder="Subject" className="w-full bg-slate-800 p-4 rounded-xl border border-slate-700 focus:border-blue-600 outline-none text-white placeholder-slate-500" />
          <textarea rows="5" placeholder="Your Message" className="w-full bg-slate-800 p-4 rounded-xl border border-slate-700 focus:border-blue-600 outline-none text-white placeholder-slate-500 resize-none"></textarea>
          <button className="w-full bg-linear-to-r from-blue-600 to-indigo-600 py-4 rounded-xl font-bold hover:opacity-90 transition flex justify-center items-center gap-2">
            <i className="fas fa-paper-plane"></i> Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;