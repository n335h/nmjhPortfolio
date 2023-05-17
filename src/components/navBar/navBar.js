import React, { useState, useEffect } from 'react';
import './navBar.css';
import { Link } from 'react-router-dom';
import githubblk from '../assets/githubblk.png';
import linkedinblk from '../assets/linkedinblk.png';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 600) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isMenuOpen ? 'open' : ''}`}>
      <div className="logo-container">
        <a
          href="https://github.com/n335h"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="github"
            src={githubblk}
            alt="github"
            id="iconsNav"
          />
        </a>
        <a
          href="https://linkedin.com/in/nichhorishny"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="linkedin"
            src={linkedinblk}
            alt="linkedin"
            id="iconsNav"
          />
        </a>
      </div>
      <div className="menu-toggle" onClick={handleToggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <Link to="/about">about</Link>
        </li>
        <li>
          <Link to="/portfolio">portfolio</Link>
        </li>
        <li>
          <Link to="/contact">contact</Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
