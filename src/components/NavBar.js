import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa'; // icons
import './NavBar.css'; // Additional CSS for NavBar

function NavBar() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="navbar">
      <div className="nav-container">
        <div className="logo">MyPortfolio</div>

        <nav className={menuOpen ? 'nav-menu active' : 'nav-menu'}>
          <Link to="/" onClick={handleToggleMenu}>Home</Link>
          <Link to="/about" onClick={handleToggleMenu}>About</Link>
          <Link to="/education" onClick={handleToggleMenu}>Education</Link>
          <Link to="/skills" onClick={handleToggleMenu}>Skills</Link>
          <Link to="/projects" onClick={handleToggleMenu}>Projects</Link>
          <Link to="/blog" onClick={handleToggleMenu}>Blog</Link>
          <Link to="/contact" onClick={handleToggleMenu}>Contact</Link>

          <button className="theme-button" onClick={toggleTheme}>
            {theme === 'light' ? <FaMoon /> : <FaSun />}
          </button>
        </nav>

        <div className="mobile-menu-icon" onClick={handleToggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </header>
  );
}

export default NavBar;
