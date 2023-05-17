import React from 'react';
import './landing.css';

const LandingPage = ({ handleScrollToNavbar }) => {
  return (
    <div className="landing-page">
      <header>
        <div className="header-content">
          <img
            className="rocky-dashed animate-pop-in"
            src="https://cssanimation.rocks/levelup/public/images/rocky-dashed.svg"
            alt="rocky dashed"
          />
          <h1 className="header-title animate-pop-in">
            Nicholas Horishny
          </h1>
          <h3 className="header-subtitle animate-pop-in">
            Junior Full-Stack Developer
          </h3>
          <button
            onClick={handleScrollToNavbar}
            className="header-button animate-pop-in"
          >
            Get started today
          </button>
        </div>
      </header>
    </div>
  );
};

export default LandingPage;
