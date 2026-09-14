import React from 'react';

const SKILL_GROUPS = [
  {
    id: '01',
    name: 'Frontend',
    note: 'Component-driven interfaces and layouts that hold up past the first page.',
    chips: ['HTML', 'CSS', 'JavaScript', 'TypeScript', 'React.js', 'Tailwind CSS'],
  },
  {
    id: '02',
    name: 'Backend',
    note: 'APIs, auth flows, and the server-side plumbing behind the builds above.',
    chips: ['Node.js', 'Express.js', 'REST APIs', 'Authentication'],
  },
  {
    id: '03',
    name: 'Database',
    note: 'Schema design and managed data — SQL when structure matters, BaaS when speed does.',
    chips: ['MySQL', 'Supabase', 'Firebase'],
  },
  {
    id: '04',
    name: 'Tools',
    note: 'From commit to deploy — and the design files in between.',
    chips: ['Git & GitHub', 'VS Code', 'Vercel', 'Claude', 'DeepSeek'],
  },
];

const Skills = () => (
  <section id="skills" className="sec">
    <div className="wrap">
      <div className="sec-head reveal">
        <span className="sec-idx">03</span>
        <h2 className="sec-title">Capabilities</h2>
        <span className="sec-rule" />
        <span className="sec-meta">In active use / shipped to production</span>
      </div>

      <p className="sec-intro reveal">
        Grouped by where they sit in a system. Everything listed here has shipped —
        nothing added for keyword density.
      </p>

      <div className="skill-list reveal">
        {SKILL_GROUPS.map((g) => (
          <div key={g.name} className="skill-row">
            <span className="sk-idx">{g.id}</span>
            <div>
              <h3 className="sk-name">{g.name}</h3>
              <p className="sk-note">{g.note}</p>
            </div>
            <div className="sk-chips">
              {g.chips.map((c) => (
                <span key={c} className="chip">{c}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;