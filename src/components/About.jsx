import React from 'react';

const SPEC = [
  { dt: 'Name', dd: 'Deil Aries Santos' },
  { dt: 'Role', dd: 'Full-Stack Developer' },
  { dt: 'Base', dd: 'Bulacan, Philippines · GMT+8' },
  { dt: 'Education', dd: 'B.S. Computer Science' },
  { dt: 'Background', dd: 'IT Support · Systems Admin' },
  { dt: 'Core stack', dd: 'React · Node.js · MySQL' },
  { dt: 'Languages', dd: 'English · Filipino' },
  { dt: 'Status', dd: <span className="st"><i className="dot" />Open to work</span> },
];

const FACTS = [
  { num: '05', label: 'Shipped systems — more on GitHub', small: false },
  { num: 'B.S. CS', label: 'Computer Science graduate', small: true },
  { num: 'IT · SYSADMIN', label: 'Operating background', small: true },
  { num: '<24h', label: 'Email response time', small: false },
];

const About = () => (
  <section id="about" className="sec">
    <div className="wrap">
      <div className="sec-head reveal">
        <span className="sec-idx">01</span>
        <h2 className="sec-title">About</h2>
        <span className="sec-rule" />
        <span className="sec-meta">Profile / Bulacan, PH</span>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p className="lede reveal">
            I build practical, reliable web applications{' '}
            <span>designed to solve real-world business problems.</span>
          </p>
          <p className="reveal" style={{ '--d': '.08s' }}>
            My path into software development started in{' '}
            <b>IT support and systems administration</b>, where I worked with infrastructure,
            troubleshooting, backups, system maintenance, and day-to-day technical operations.
            That experience gave me a strong understanding of what it takes for technology to
            work reliably — not just in development, but in real-world environments with real
            users and real business requirements.
          </p>
          <p className="reveal" style={{ '--d': '.15s' }}>
            Today I develop full-stack web applications from end to end, working across
            databases, APIs, business logic, admin dashboards, and responsive user interfaces.
            My projects include a gym management system, an online cleaning service booking
            platform, an e-commerce storefront, and a resort and events website.
          </p>
          <p className="reveal" style={{ '--d': '.22s' }}>
            I focus on building <b>clean, maintainable, and functional solutions</b> that are
            easy to use and aligned with the needs of the business. Currently open to full-time
            opportunities, freelance projects, and collaborations.
          </p>
        </div>

        <div className="spec reveal" style={{ '--d': '.1s' }}>
          <div className="spec-bar"><b>SPEC — DAS/2026</b><span>REV 1.0</span></div>
          {SPEC.map((row) => (
            <div key={row.dt} className="spec-row">
              <span className="spec-dt">{row.dt}</span>
              <span className="spec-dd">{row.dd}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="facts">
        {FACTS.map((f, i) => (
          <div
            key={f.label}
            className="fact reveal"
            style={{ '--d': `${i * 0.07}s` }}
          >
            <span className={`f-num ${f.small ? 'sm' : ''}`}>{f.num}</span>
            <span className="f-label">{f.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;