// Education.jsx
// Displays my educational qualifications, dates and technical areas of study.

import PageHeader from '../components/PageHeader';

function Education() {
  return (
    <>
      <PageHeader
        eyebrow="EDUCATION"
        title="Learning that supports the journey."
        description="My formal education and the technical areas I have studied."
      />

      {/* Education cards list the qualification, school and dates attended. */}
      <section className="education-section page-width">
        <article className="education-card">
          <div className="education-year">2023 - 2026</div>
          <div>
            <p className="eyebrow">CENTENNIAL COLLEGE · TORONTO, ONTARIO</p>
            <h2>Software Engineering Technician Diploma</h2>
            <p>
              Coursework and hands-on learning in software development, object-oriented programming,
              web development, databases and application design.
            </p>
            <div className="skill-tags">
              <span>Java</span><span>C#</span><span>JavaScript</span><span>React</span>
              <span>SQL</span><span>Web Development</span>
            </div>
          </div>
        </article>

        <article className="education-card education-card-secondary">
          <div className="education-year">2016 - 2020</div>
          <div>
            <p className="eyebrow">ST. JOHN PAUL II CATHOLIC SECONDARY SCHOOL · TORONTO, ONTARIO</p>
            <h2>Ontario Secondary School Diploma</h2>
            <p>Completed secondary school education before beginning post-secondary studies in software.</p>
          </div>
        </article>
      </section>
    </>
  );
}

export default Education;
