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


  useEffect(() => {
    const sectionHeight = window.innerHeight;
    const section1Start = 0;
    const section1End = sectionHeight;
    const section2Start = sectionHeight;
    const section2End = 2 * sectionHeight;
    const section3Start = 2 * sectionHeight;
    const section3End = 3 * sectionHeight;
    const section4Start = 3 * sectionHeight;
    const section4End = 4 * sectionHeight;

    
 // handle scroll for nav bar svgs
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let currentSection;

      if (scrollY >= section1Start && scrollY < section1End) {
        currentSection = 1;
        console.log('currentSection', currentSection);
      } else if (scrollY >= section2Start && scrollY < section2End) {
        currentSection = 2;
        console.log('currentSection', currentSection);
      }
      else if (scrollY >= section3Start && scrollY < section3End) {
        currentSection = 3;
        console.log('currentSection', currentSection);
      } else if (scrollY >= section4Start && scrollY < section4End) {
        currentSection = 4;
        console.log('currentSection', currentSection);
      }
      // Add more conditions and color classes as needed

      let newColor = 'logo1'; // Set the default color
      let newSignOutColor = 'signedinicon1';

      if (currentSection === 1) {
        newColor= 'logo1'; // Set the desired color
        newSignOutColor = 'signedinicon1';
        console.log('newColor', newColor);
      } else if (currentSection === 2) {
        newColor =  'logo2'; // Set the desired color
        newSignOutColor = 'signedinicon2';
        console.log('newColor2', newColor);
      } else if (currentSection === 3) {
        newColor =  'logo3'; // Set the desired color
        newSignOutColor = 'signedinicon3';
        console.log('newColor3', newColor);
      } else if (currentSection === 4) {
        newColor =  'logo4'; // Set the desired color
        newSignOutColor = 'signedinicon4';
        console.log('newColor4', newColor);
      }

      // Get the path element by its ID
      const pathElement = document.getElementById('profileicon');
      const pathElement2 = document.getElementById('dropdown-menu-signout-button');
      console.log('pathElement', pathElement);

      if (pathElement && pathElement2) {
        // Ensure newColor is string to provide a default value
        const colorToSet = newColor || ''; // Set the color to an empty string if it is undefined
        // Update the fill attribute of the path element
        const colorToSet2 = newSignOutColor || ''; // Set the color to an empty string if it is undefined
        pathElement.setAttribute('class', colorToSet);
        pathElement2.setAttribute('class', colorToSet2);
        console.log('pathElement', pathElement);
      } else {
        console.error('pathElement is undefined'); // Handle the case where pathElement is not found
      }
    };      
    // Attach the scroll event listener when the component mounts
    window.addEventListener('scroll', handleScroll);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);







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
              <img
                className="icon"
                src={GHYellow}
                alt="github"
                id="iconsNav"
              />
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
              <img
                className="icon"
                src={LIYellow}
                alt="linkedin"
                id="iconsNav"
              />
            </a>
          </div>
        </div>
      </ul>
    </nav>
  );
}

export default NavBar;
