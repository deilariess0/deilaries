import React from 'react';

const skillsData = [
  { title: "Frontend Development", icon: "fa-code", color: "text-blue-600 bg-blue-50", list: ["HTML", "CSS", "JavaScript", "React.js", "Tailwind CSS"] },
  { title: "Backend Development", icon: "fa-server", color: "text-cyan-600 bg-cyan-50", list: ["Node.js", "Express.js", "REST API", "Authentication"] },
  { title: "Database Management", icon: "fa-database", color: "text-indigo-600 bg-indigo-50", list: ["MySQL", "Supabase", "Firebase"] },
  { title: "Tools & Others", icon: "fa-tools", color: "text-purple-600 bg-purple-50", list: ["Git & GitHub", "VS Code", "Vercel", "Figma", "Microsoft Office"] }
];

const Skills = () => {
  return (
    <section id="skills" className="bg-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <p className="text-blue-600 font-semibold tracking-widest uppercase text-sm">What I Do</p>
        <h2 className="text-5xl font-extrabold text-slate-800 mt-2 mb-16">My Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition group">
              <div className={`w-14 h-14 ${skill.color} rounded-xl flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition`}>
                <i className={`fas ${skill.icon}`}></i>
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-4">{skill.title}</h3>
              <ul className="space-y-3 text-slate-600 text-sm">
                {skill.list.map((item, i) => (
                  <li key={i} className="flex items-center gap-3"><span className="w-1.5 h-1.5 bg-slate-400 rounded-full"></span> {item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;