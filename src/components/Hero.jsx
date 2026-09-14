import React, { useState } from 'react';
import myPhoto from '../assets/image2.png';

/* --- inline icons ----------------------------------------------------- */
const ArrowNE = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="square" aria-hidden="true">
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.064 2.064 0 1 1 0-4.128 2.064 2.064 0 0 1 0 4.128zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

const IconGithub = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="square" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const IconFile = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor"
    strokeWidth="1.8" strokeLinecap="square" aria-hidden="true">
    <path d="M14 3v6h6" />
    <path d="M6 3h8l6 6v12H6z" />
    <path d="M9 14h6M9 17h6" />
  </svg>
);

/* ---------------------------------------------------------------------- */
const Hero = () => {
  const [imgOk, setImgOk] = useState(true);

  const scrollTo = (id) => (e) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="wrap hero" id="top">
      {/* LEFT — headline + copy + ctas */}
      <div>
        <div className="kicker reveal">
          <span className="st">
            <i className="dot" />
            OPEN TO WORK — FREELANCE &amp; FULL-TIME
          </span>
          <span>BULACAN, PH · GMT+8</span>
        </div>

        <h1 className="h-title reveal" style={{ '--d': '.05s' }}>
          Software for businesses that{' '}
          <span className="acc">outgrew paper.</span>
        </h1>

        <p className="h-sub reveal" style={{ '--d': '.12s' }}>
          I&apos;m <b>Deil Aries Santos</b> — a full-stack developer. I design, build, and
          maintain the web systems small companies run their day on: booking platforms,
          management dashboards, storefronts. My background is{' '}
          <b>IT support and systems administration</b> — so everything I ship assumes
          day two exists.
        </p>

        {/* CTAs — all buttons share the same visual language */}
        <div className="ctas reveal" style={{ '--d': '.18s' }}>
          <a className="btn btn-solid" href="#work" onClick={scrollTo('work')}>
            VIEW SELECTED WORK <ArrowNE />
          </a>
          <a
            className="btn btn-ghost"
            href="https://drive.google.com/file/d/1ID6rRej1IEJVNs0oATbv4YS9s7nVf9AJ/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconFile /> RESUME (PDF)
          </a>
          <a
            className="btn btn-ghost"
            href="https://www.linkedin.com/in/deilariessantos/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconLinkedIn /> LINKEDIN
          </a>
          <a
            className="btn btn-ghost"
            href="https://github.com/deilariess0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <IconGithub /> GITHUB
          </a>
          <a className="btn btn-ghost" href="#contact" onClick={scrollTo('contact')}>
            <IconMail /> CONTACT
          </a>
        </div>
      </div>

      {/* RIGHT — portrait frame */}
      <div
        className={`ph-frame reveal ${imgOk ? '' : 'ph-fallback'}`}
        style={{ '--d': '.15s' }}
      >
        <img
          src={myPhoto}
          alt="Portrait of Deil Aries Santos"
          onError={() => setImgOk(false)}
        />
        <span className="ph-mono" aria-hidden="true">DAS</span>

        <div className="ph-cap">
          <span>DEIL ARIES SANTOS</span>
          <em>
            <i className="dot" />
            AVAILABLE
          </em>
        </div>
      </div>
    </section>
  );
};

export default Hero;