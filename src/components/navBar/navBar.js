import React, { useState, useEffect } from 'react';
import './navBar.css';
import GHGrey from '../assets/GHGrey.svg';
import GHYellow from '../assets/GHYellow.svg';
import LIGrey from '../assets/LIGrey.svg';
import LIYellow from '../assets/LIYellow.svg';

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
      <div className="logo-toggle-container">
        <div className="menu-toggle" onClick={handleToggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>

      <ul className={`menu ${isMenuOpen ? 'open' : ''}`}>
        <li>
          <a to="/about" href="#about">
            about
          </a>
        </li>
        <li>
          <a to="/portfolio" href="#portfolio">
            projects
          </a>
        </li>
        <li>
          <a to="/contact" href="#contact">
            contact
          </a>
        </li>

        <div className="logo-container">
          <div className="GH">
            <a
              href="https://github.com/n335h"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icon"
                src={GHGrey}
                alt="github"
                id="iconsNav"
              />
              {/* <img
                className="icon"
                src={GHYellow}
                alt="github"
                id="iconsNav"
              /> */}
            </a>
          </div>
          <div className="LI">
            <a
              href="https://linkedin.com/in/nichhorishny"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="icon"
                src={LIGrey}
                alt="linkedin"
                id="iconsNav"
              />
              {/* <img
                className="icon"
                src={LIYellow}
                alt="linkedin"
                id="iconsNav"
              /> */}
            </a>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
