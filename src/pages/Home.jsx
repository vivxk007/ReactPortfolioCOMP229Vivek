// Home.jsx
// Landing page for the portfolio. It introduces my software and aviation goals
// and provides buttons that lead visitors to the About and Projects pages.

import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      {/* Main introduction and mission statement. */}
      <section className="hero page-width">
        <div className="hero-copy">
          <p className="eyebrow">TORONTO · SOFTWARE · AVIATION</p>
          <h1>Software Developer.<br /><span>Future Pilot.</span></h1>
          <p className="hero-subtitle">
            Building at the intersection of technology and aviation.
          </p>
          <p className="mission-statement">
            My mission is to combine my software education with my passion for aviation to create
            practical tools that make training, planning and everyday life more efficient.
          </p>

          {/* React Router Links let the visitor move to other pages without a full reload. */}
          <div className="button-row">
            <Link to="/about" className="button primary-button">About Me</Link>
            <Link to="/projects" className="button secondary-button">View Projects</Link>
          </div>
        </div>

        {/* Aviation-inspired card used as the main visual on the Home page. */}
        <div className="hero-visual" aria-label="Aviation inspired illustration">
          <div className="flight-card">
            <div className="flight-card-top">
              <span>VIVEK</span>
              <span>YYZ</span>
            </div>
            <div className="route-line">
              <span className="route-dot"></span>
              <span className="plane-symbol">✈</span>
              <span className="route-dot"></span>
            </div>
            <div className="flight-card-bottom">
              <div><small>ORIGIN</small><strong>Software</strong></div>
              <div><small>DESTINATION</small><strong>Aviation</strong></div>
            </div>
          </div>
        </div>
      </section>

      {/* Short summary strip showing my education and current focus. */}
      <section className="home-strip">
        <div className="page-width strip-grid">
          <div><strong>2023-2026</strong><span>Software Engineering</span></div>
          <div><strong>Aviation + Software</strong><span>Current Focus</span></div>
          <div><strong>1 Goal</strong><span>Technology + Aviation</span></div>
        </div>
      </section>
    </>
  );
}

export default Home;
