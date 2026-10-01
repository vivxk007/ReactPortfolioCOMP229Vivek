// About.jsx
// About page with my background, technical skills, headshot and PDF resume link.

import PageHeader from '../components/PageHeader';

function About() {
  return (
    <>
      <PageHeader
        eyebrow="ABOUT ME"
        title="Two interests. One direction."
        description="A software background with a growing focus on aviation."
      />

      {/* Two-column About section with my photo and background information. */}
      <section className="about-layout page-width">
        <div className="portrait-card">
          <img src="/images/vivek-headshot.jpg" alt="Vivek Vadassery Nigi" className="portrait" />
        </div>

        <div className="about-copy">
          <h2>Vivek Vadassery Nigi</h2>
          <p>
            I'm a software student with more than five years of experience learning and exploring
            technologies across programming, web development, databases and software engineering.
            Technology has played an important role in my education and has taught me how to solve
            problems in a structured and practical way.
          </p>
          <p>
            I have now decided to pursue my true passion for aviation and work toward becoming a
            professional pilot. Rather than leaving software behind, I want to combine both interests
            by building useful aviation-focused applications and personal tools that make training,
            planning and everyday life easier and more efficient.
          </p>

          {/* Technical skills learned through my software studies. */}
          <div className="skill-tags" aria-label="Technical skills">
            <span>React</span><span>JavaScript</span><span>Java</span><span>C#</span>
            <span>SQL</span><span>HTML/CSS</span>
          </div>

          {/* Opens the PDF version of my resume in a new browser tab. */}
          <a
            href="/resume/Vivek_Vadassery_Nigi_Resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="button primary-button"
          >
            View My Resume (PDF)
          </a>
        </div>
      </section>
    </>
  );
}

export default About;
