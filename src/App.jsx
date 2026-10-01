// App.jsx
// Main application component. It keeps the navigation and footer visible
// while React Router displays the page selected by the visitor.

import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Education from './pages/Education';
import Services from './pages/Services';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="app">
      {/* Navigation is shared by all six portfolio pages. */}
      <Navbar />

      <main>
        {/* Each route connects a URL to the correct page component. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Footer is also shared by every page. */}
      <Footer />
    </div>
  );
}

export default App;
