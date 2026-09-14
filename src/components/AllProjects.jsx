import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../data/projectsData';

/* --- inline icons ------------------------------------------------ */
const ArrowNE = ({ size = 12 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="square" aria-hidden="true">
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

const ArrowLeft = ({ size = 12 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="square" aria-hidden="true">
    <path d="M19 12H5m0 0 6-6m-6 6 6 6" />
  </svg>
);

/* --- single project panel ---------------------------------------- */
const ProjectPanel = ({ project, index }) => {
  const [imgOk, setImgOk] = useState(true);

  return (
    <article
      className="pd-panel reveal"
      style={{ '--d': `${Math.min(index * 0.05, 0.2)}s` }}
    >
      {imgOk && (
        <figure className="pd-fig">
          <img
            src={project.img}
            alt={`${project.name} screenshot`}
            loading="lazy"
            onError={() => setImgOk(false)}
          />
          <figcaption>{project.cap}</figcaption>
        </figure>
      )}

      <div className="pd-body">
        <span className="pd-type">{project.type}</span>
        <h3 className="pd-name">{project.name}</h3>
        <p className="pd-desc">{project.desc}</p>

        <ul className="pd-points">
          {project.points.map((pt, i) => (
            <li key={i}>{pt}</li>
          ))}
        </ul>

        <div className="pd-foot">
          <div className="pd-tags">
            {project.stack.map((s) => (
              <span key={s} className="pd-tag">{s}</span>
            ))}
          </div>
          <a
            className="pd-link"
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            VIEW PROJECT <ArrowNE />
          </a>
        </div>
      </div>
    </article>
  );
};

/* --- page -------------------------------------------------------- */
const AllProjects = () => (
  <section id="all-projects" className="sec" style={{ minHeight: '100vh' }}>
    <div className="wrap">
      {/* Header row: index + title + rule + meta */}
      <div className="sec-head reveal">
        <span className="sec-idx">02</span>
        <h2 className="sec-title">All Projects</h2>
        <span className="sec-rule" />
        <span className="sec-meta">{PROJECTS.length} builds / full archive</span>
      </div>

      {/* Intro row with proper "Back to home" button */}
      <div className="all-intro reveal">
        <p className="sec-intro" style={{ margin: 0 }}>
          Every project I&apos;ve shipped — the complete archive, schema to screen.
        </p>

        <Link to="/" className="btn btn-ghost back-home">
          <ArrowLeft /> BACK TO HOME
        </Link>
      </div>

      <div className="all-list">
        {PROJECTS.map((p, i) => (
          <ProjectPanel key={p.key} project={p} index={i} />
        ))}
      </div>
    </div>
  </section>
);

export default AllProjects;