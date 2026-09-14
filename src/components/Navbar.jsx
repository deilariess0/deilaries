import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const LINKS = [
  { id: 'about', label: 'ABOUT' },
  { id: 'work', label: 'PROJECTS' },
  { id: 'skills', label: 'SKILLS' },
  { id: 'contact', label: 'CONTACT' },
];

const CV_URL =
  'https://drive.google.com/file/d/1ID6rRej1IEJVNs0oATbv4YS9s7nVf9AJ/view?usp=drive_link';

/* --- inline icons -------------------------------------------------- */
const IconDownload = () => (
  <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="square" aria-hidden="true">
    <path d="M12 4v12m0 0-5-5m5 5 5-5M5 20h14" />
  </svg>
);

const IconBars = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="square" aria-hidden="true">
    <path d="M4 7h16M4 12h16M4 17h16" />
  </svg>
);

const IconClose = () => (
  <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor"
    strokeWidth="2" strokeLinecap="square" aria-hidden="true">
    <path d="M6 6l12 12M18 6 6 18" />
  </svg>
);

/* --- component ----------------------------------------------------- */
const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState('');
  const [active, setActive] = useState('');

  /* live clock — Asia/Manila */
  useEffect(() => {
    let fmt = null;
    try {
      fmt = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Manila',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      });
    } catch {
      /* fall back to local time */
    }
    const tick = () =>
      setTime(fmt ? fmt.format(new Date()) : new Date().toLocaleTimeString());
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  /* scrollspy — only active on home page */
  useEffect(() => {
    if (location.pathname !== '/') {
      setActive('');
      return;
    }
    const sections = LINKS.map((l) => document.getElementById(l.id)).filter(Boolean);
    if (!sections.length) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((en) => {
          if (en.isIntersecting) setActive(en.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, [location.pathname]);

  /* close drawer when route changes */
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  /* lock body scroll while drawer open */
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  /* section navigation: from any route, go home first then scroll */
  const handleSectionClick = (e, sectionId) => {
    e.preventDefault();
    setIsOpen(false);

    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
      }, 120);
      return;
    }
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleBrand = (e) => {
    e.preventDefault();
    setIsOpen(false);
    if (location.pathname !== '/') navigate('/');
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="site-head">
        <div className="wrap head-in">
          {/* brand */}
          <a className="brand" href="#top" onClick={handleBrand} aria-label="Back to top">
            <span className="brand-mark" aria-hidden="true">DA</span>
            <span>DEIL ARIES SANTOS</span>
            <span className="brand-sub">/ FULL-STACK</span>
          </a>

          {/* desktop nav */}
          <nav className="nav" aria-label="Sections">
            {LINKS.map((l) => (
              <a
                key={l.id}
                href={`#${l.id}`}
                className={active === l.id ? 'act' : ''}
                onClick={(e) => handleSectionClick(e, l.id)}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* right cluster */}
          <div className="head-right">
            <span className="clock">
              LOCAL <b>{time || '--:--:--'}</b> GMT+8
            </span>

            <a
              className="btn btn-solid head-cv"
              href={CV_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconDownload /> DOWNLOAD CV
            </a>

            <button
              type="button"
              className="burger"
              onClick={() => setIsOpen((v) => !v)}
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-drawer"
            >
              {isOpen ? <IconClose /> : <IconBars />}
            </button>
          </div>
        </div>
      </header>

      {/* overlay */}
      <div
        className={`drawer-overlay ${isOpen ? 'show' : ''}`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* mobile drawer */}
      <aside
        id="mobile-drawer"
        className={`drawer ${isOpen ? 'open' : ''}`}
        aria-hidden={!isOpen}
      >
        <div className="drawer-head">
          <span className="drawer-title">MENU</span>
          <button
            type="button"
            className="drawer-close"
            onClick={() => setIsOpen(false)}
            aria-label="Close menu"
          >
            <IconClose />
          </button>
        </div>

        <nav className="drawer-links" aria-label="Mobile">
          <Link to="/" onClick={(e) => handleSectionClick(e, 'top')}>
            HOME
          </Link>
          {LINKS.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              onClick={(e) => handleSectionClick(e, l.id)}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="drawer-foot">
          <a
            className="btn btn-solid"
            href={CV_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ width: '100%', justifyContent: 'center' }}
          >
            <IconDownload /> DOWNLOAD CV
          </a>
          <div className="drawer-meta">
            LOCAL <b>{time || '--:--:--'}</b> · GMT+8
          </div>
        </div>
      </aside>
    </>
  );
};

export default Navbar;