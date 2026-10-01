// Projects.jsx
// Displays the software projects and concepts I want to highlight in my portfolio.

import PageHeader from '../components/PageHeader';

// Project information is stored in an array so each card can be created consistently.
const portfolioProjects = [
  {
    title: 'Aviation Training Hours Dashboard',
    status: 'In Development',
    image: '/images/project-flight-dashboard.svg',
    description: 'A personal dashboard designed to log flight time, organize training hours and visualize progress toward aviation licence and rating requirements.',
    role: 'Role: Designer and developer',
    outcome: 'Outcome: A centralized view of training progress that can reduce manual tracking.'
  },
  {
    title: 'Pilot Training Planner',
    status: 'Concept',
    image: '/images/project-training-planner.svg',
    description: 'A planning application concept for organizing flight lessons, ground-school study, aviation milestones and weekly training goals.',
    role: 'Role: Product concept and front-end planning',
    outcome: 'Outcome: A clearer way to connect study goals with practical flight training.'
  },
  {
    title: 'Personal Productivity Dashboard',
    status: 'Concept',
    image: '/images/project-productivity.svg',
    description: 'A personal software concept that combines schedules, goals and progress tracking into one simple interface for everyday organization.',
    role: 'Role: Product concept and interface design',
    outcome: 'Outcome: A single place to organize priorities and improve day-to-day efficiency.'
  }
];

function Projects() {
  return (
    <>
      <PageHeader
        eyebrow="PROJECTS"
        title="Ideas built around real needs."
        description="Current work and software concepts focused on aviation, training and personal productivity."
      />

      <section className="project-grid page-width">
        {/* Create a project card for each project stored in the array. */}
        {portfolioProjects.map((projectItem) => (
          <article className="project-card" key={projectItem.title}>
            <img src={projectItem.image} alt={`${projectItem.title} illustration`} className="project-image" />
            <div className="project-content">
              <span className="status-pill">{projectItem.status}</span>
              <h2>{projectItem.title}</h2>
              <p>{projectItem.description}</p>
              <p className="project-detail">{projectItem.role}</p>
              <p className="project-detail">{projectItem.outcome}</p>
            </div>
          </article>
        ))}
      </section>
    </>
  );
}

export default Projects;
