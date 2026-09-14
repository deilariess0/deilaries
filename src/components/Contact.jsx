import React, { useState } from 'react';

const EMAIL = 'deilariess0@gmail.com';

/* --- inline SVG icons ------------------------------------------- */
const IconGithub = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
  </svg>
);

const IconLinkedIn = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor" aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.064 2.064 0 1 1 0-4.128 2.064 2.064 0 0 1 0 4.128zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
  </svg>
);

const IconMail = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" aria-hidden="true">
    <rect x="3" y="5" width="18" height="14" rx="1" />
    <path d="m3 7 9 6 9-6" />
  </svg>
);

const IconPin = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" aria-hidden="true">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const IconCopy = () => (
  <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="square" aria-hidden="true">
    <rect x="9" y="9" width="12" height="12" rx="1" />
    <path d="M5 15H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v1" />
  </svg>
);

const ArrowNE = ({ size = 14 }) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

/* --- component -------------------------------------------------- */
const Contact = () => {
  const [toasts, setToasts] = useState([]);

  const toast = (msg) => {
    const id = Date.now() + Math.random();
    setToasts((t) => [...t, { id, msg }]);
    setTimeout(() => {
      setToasts((t) => t.filter((x) => x.id !== id));
    }, 2400);
  };

  const copyEmail = async () => {
    const done = () => toast(`Copied — ${EMAIL}`);
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(EMAIL);
        done();
        return;
      }
      throw new Error('clipboard unavailable');
    } catch {
      // Fallback for older browsers / non-secure contexts
      const ta = document.createElement('textarea');
      ta.value = EMAIL;
      ta.style.cssText = 'position:fixed;opacity:0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        done();
      } catch {
        toast(EMAIL);
      }
      ta.remove();
    }
  };

  return (
    <section id="contact" className="sec">
      <div className="wrap">
        <div className="sec-head reveal">
          <span className="sec-idx">04</span>
          <h2 className="sec-title">Contact</h2>
          <span className="sec-rule" />
          <span className="sec-meta">Replies within 24h</span>
        </div>

        <div className="contact-grid">
          {/* left — pitch + direct email */}
          <div className="reveal">
            <p className="c-lede">
              Have an operation to digitize, or a team that ships?{' '}
              <span>My inbox is open.</span>
            </p>
            <p className="c-copy">
              Freelance projects, full-time roles, or a straight question about a build — all welcome. I answer email myself, usually within a day.
            </p>
            <p className="c-note">
              <i className="dot" />
              PH time · GMT+8 · remote worldwide
            </p>

            <span className="mail-label">Direct</span>
            <div className="mail-row">
              <a className="mail" href={`mailto:${EMAIL}`}>{EMAIL}</a>
              <button className="copy-btn" type="button" onClick={copyEmail}>
                <IconCopy /> COPY
              </button>
            </div>
          </div>

          {/* right — 2×2 link grid */}
          <div className="link-grid reveal" style={{ '--d': '.1s' }}>
            <a
              className="link-cell"
              href="https://github.com/deilariess0"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="lc-top">
                <span className="lc-name"><IconGithub />GitHub</span>
                <span className="lc-arrow"><ArrowNE /></span>
              </span>
              <span className="lc-val">github.com/deilariess0</span>
              <span className="lc-sub">Source code &amp; case studies</span>
            </a>

            <a
              className="link-cell"
              href="https://www.linkedin.com/in/deilariessantos"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="lc-top">
                <span className="lc-name"><IconLinkedIn />LinkedIn</span>
                <span className="lc-arrow"><ArrowNE /></span>
              </span>
              <span className="lc-val">in/deilariessantos</span>
              <span className="lc-sub">Experience &amp; recommendations</span>
            </a>

            <a className="link-cell" href={`mailto:${EMAIL}`}>
              <span className="lc-top">
                <span className="lc-name"><IconMail />Email</span>
                <span className="lc-arrow"><ArrowNE /></span>
              </span>
              <span className="lc-val">{EMAIL}</span>
              <span className="lc-sub">Fastest way to reach me</span>
            </a>

            <a
              className="link-cell"
              href="https://www.google.com/maps/place/Bulacan,+Philippines"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="lc-top">
                <span className="lc-name"><IconPin />Base</span>
                <span className="lc-arrow"><ArrowNE /></span>
              </span>
              <span className="lc-val">Bulacan, Philippines</span>
              <span className="lc-sub">GMT+8 · remote worldwide</span>
            </a>
          </div>
        </div>
      </div>

      {/* toast stack — rendered at section level, positioned fixed via CSS */}
      <div id="toasts" aria-live="polite">
        {toasts.map((t) => (
          <div key={t.id} className="toast">{t.msg}</div>
        ))}
      </div>
    </section>
  );
};

export default Contact;