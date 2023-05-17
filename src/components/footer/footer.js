import React from 'react';
import './styles.css';
import github from '../assets/github.png';
import linkedin from '../assets/linkedin.png';

function Footer() {
  return (
    <div className="footer-container">
      <footer className="pageFooter">
        <div className="logo-container">
          <a
            href="https://github.com/n335h"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="github" src={github} alt="github" />
          </a>
          <a
            href="https://linkedin.com/in/nichhorishny"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img className="linkedin" src={linkedin} alt="linkedin" />
          </a>
        </div>
        <hr></hr>
        <p className="footer-text">
          &copy; 2023 Nicholas Horishny. All rights reserved.
        </p>
      </footer>
    </div>
  );
}

export default Footer;
