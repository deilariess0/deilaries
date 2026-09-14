import React from 'react';

const TECH = [
  'TypeScript', 'React', 'Node.js', 'Express', 'REST APIs',
  'MySQL', 'Supabase', 'Firebase', 'Tailwind', 'Git', 'Vercel',
];

const TechStrip = () => (
  <div className="strip-wrap">
    <div className="strip" aria-label="Core technologies">
      {TECH.map((t, i) => (
        <React.Fragment key={t}>
          <b>{t}</b>
          {i < TECH.length - 1 && <span className="sep">/</span>}
        </React.Fragment>
      ))}
    </div>
  </div>
);

export default TechStrip;