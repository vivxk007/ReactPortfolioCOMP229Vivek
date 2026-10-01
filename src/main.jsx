// main.jsx
// Entry point for the React application. This file connects React to the
// root element in index.html and enables routing for the portfolio.

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* BrowserRouter allows the navigation links to change pages without reloading the site. */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
