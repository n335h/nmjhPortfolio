import React, {useRef } from 'react';
import './landing.css';


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
            <h1 className="header-title animate-pop-in">
              NICHOLAS HORISHNY
              <br />
              <h3 className="header-subtitle animate-pop-in">
                Junior Full-Stack Developer
              </h3>
            </h1>
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
    </div>
  );
};

export default LandingPage;
