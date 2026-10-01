// Services.jsx
// Displays the software-related services I can offer based on my current skills.

import PageHeader from '../components/PageHeader';

// Service information is kept in an array to avoid repeating the same card structure.
const softwareServices = [
  {
    icon: '/images/service-web.svg',
    title: 'Web Development',
    description: 'Building clean and responsive websites using HTML, CSS, JavaScript and React.'
  },
  {
    icon: '/images/service-code.svg',
    title: 'Software Development',
    description: 'Creating small applications and programming solutions using languages such as Java and C#.'
  },
  {
    icon: '/images/service-database.svg',
    title: 'Database Development',
    description: 'Designing and working with relational databases, SQL queries and organized application data.'
  },
  {
    icon: '/images/service-tools.svg',
    title: 'Custom Productivity Tools',
    description: 'Developing practical personal tools focused on organization, tracking and workflow improvement.'
  }
];

function Services() {
  return (
    <>
      <PageHeader
        eyebrow="SERVICES"
        title="Simple technology, useful results."
        description="Areas where I can apply my current software development skills."
      />

      <section className="service-grid page-width">
        {/* Create one service card for each item in the services array. */}
        {softwareServices.map((serviceItem) => (
          <article className="service-card" key={serviceItem.title}>
            <img src={serviceItem.icon} alt="" className="service-icon" />
            <h2>{serviceItem.title}</h2>
            <p>{serviceItem.description}</p>
          </article>
        ))}
      </section>
    </>
  );
}

export default Services;
