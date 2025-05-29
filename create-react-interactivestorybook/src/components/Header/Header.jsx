import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="storybook-header">
      <div className="header-title">
        <h1>📖 Interactive StoryBook</h1>
        <hr className="header-divider" />
      </div>
      <nav>
        <ul className="nav-links">
          {/* NavLink highlights active page */}
          <li><NavLink to="/" className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink></li>
          <li><NavLink to="/about" className={({ isActive }) => isActive ? 'active-link' : ''}>About</NavLink></li>
          <li><NavLink to="/storybook" className={({ isActive }) => isActive ? 'active-link' : ''}>StoryBook</NavLink></li>
          <li><NavLink to="/feedback" className={({ isActive }) => isActive ? 'active-link' : ''}>Feedback</NavLink></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
