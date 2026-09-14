import React from 'react';

const Footer = () => (
  <footer className="site-foot">
    <div className="wrap foot-in">
      <span>© <b>{new Date().getFullYear()}</b> DEIL ARIES SANTOS</span>
      <span>
        LAST UPDATED ·{' '}
        {new Date()
          .toLocaleString('en-US', { month: 'short', year: 'numeric' })
          .toUpperCase()}
      </span>
      <a
        href="#top"
        id="toTop"
        onClick={(e) => {
          e.preventDefault();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      >
        BACK TO TOP
        <svg viewBox="0 0 24 24" width="12" height="12" fill="none"
          stroke="currentColor" strokeWidth="2" strokeLinecap="square" aria-hidden="true">
          <path d="M12 19V5m0 0-6 6m6-6 6 6" />
        </svg>
      </a>
    </div>
  </footer>
);

export default Footer;