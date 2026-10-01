// Navbar.jsx
// Creates the main navigation bar and custom VN logo used throughout the site.

import { NavLink } from 'react-router-dom';

function Navbar() {
  // Keeping the page names and paths in one array makes the navigation easy to update.
  const navigationItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Projects', path: '/projects' },
    { name: 'Education', path: '/education' },
    { name: 'Services', path: '/services' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <header className="site-header">
      <nav className="navbar page-width" aria-label="Main navigation">
        {/* The custom VN logo also works as a link back to the Home page. */}
        <NavLink to="/" className="brand" aria-label="Vivek home page">
          <span className="logo-mark">VN</span>
          <span className="brand-text">Vivek</span>
        </NavLink>

        <div className="nav-links">
          {/* Create one navigation link for each item in the array above. */}
          {navigationItems.map((navigationItem) => (
            <NavLink
              key={navigationItem.path}
              to={navigationItem.path}
              className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
            >
              {navigationItem.name}
            </NavLink>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
