// src/components/SinglePageNav.js
import React, { useState } from 'react';
import { Link } from 'react-scroll';
import './SinglePageNav.css';
import { FaBars, FaTimes } from 'react-icons/fa'; // hamburger icons

function SinglePageNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'education', label: 'Education' },
    { to: 'experience', label: 'Experience' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'awards', label: 'Awards' },
    { to: 'activities', label: 'Activities' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <header className="single-nav-header">
      <div className="nav-container">
        <div className="logo">MyCV</div>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>

        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          {navLinks.map((link) => (
            <Link
              key={link.to}
              activeClass="active"
              to={link.to}
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onClick={toggleMenu}
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default SinglePageNav;
