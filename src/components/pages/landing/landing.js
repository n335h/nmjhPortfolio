import React, { useRef } from 'react';
import './landing.css';
import AboutPage from '../about/about';
import Portfolio from '../portfolio/portfolio';
import Contact from '../contact/contact';
import Footer from '../../footer/footer';

const LandingPage = ({ handleScrollToNavbar }) => {
  const landingRef = useRef(null);

  const handleMouseIconClick = () => {
    if (handleScrollToNavbar) {
      handleScrollToNavbar();
    }
  };

  return (
    <div className="landing-page" ref={landingRef}>
      <header>
        <div className="landingmain">
          <div className="header-content">
            <div className="hero">
              <h1 className="header-title animate-pop-in">
                NICHOLAS HORISHNY
              </h1>
              <h3 className="header-subtitle animate-pop-in">
                Junior Full-Stack Developer
              </h3>
            </div>
            <div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
            </div>

            <div
              className="mouse-icon animate-pop-in"
              onClick={handleMouseIconClick}
            >
              <div className="wheel"></div>
            </div>
          </div>
        </div>
      </header>
      <div id="about" href="About" className="section">
        <AboutPage />
      </div>

      <div id="portfolio" className="section">
        <Portfolio />
      </div>
      <div id="contact" className="section">
        <Contact />
      </div>
    </div>
  );
};

export default LandingPage;
