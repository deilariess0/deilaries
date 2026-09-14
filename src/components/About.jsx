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
            I&apos;ve been the person keeping other people&apos;s systems alive.{' '}
            <span>Now I build the ones worth keeping.</span>
          </p>
          <p className="reveal" style={{ '--d': '.08s' }}>
            My route into engineering wasn&apos;t the usual one. Before writing software,
            I worked in <b>IT support and systems administration</b> — patching, backing
            up, and untangling other people&apos;s infrastructure. It taught me the part
            most portfolios skip: what software needs to survive real users, real data,
            and real Mondays.
          </p>
          <p className="reveal" style={{ '--d': '.15s' }}>
            Today I build complete web applications end to end — the data model, the API,
            the admin dashboard, and the interface on top. A gym that replaced its logbook,
            a cleaning company that takes bookings online, a storefront, a resort&apos;s
            public face. I care about <b>clean, functional code and tools that are simple
            and genuinely useful</b>. Currently open to freelance projects and full-time roles.
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