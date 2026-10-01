// PageHeader.jsx
// Reusable heading component that gives the inner pages a consistent layout.

function PageHeader({ eyebrow, title, description }) {
  return (
    <section className="page-header page-width">
      <p className="eyebrow">{eyebrow}</p>
      <h1>{title}</h1>
      <p className="page-description">{description}</p>
    </section>
  );
}

export default PageHeader;
