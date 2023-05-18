import React, { useEffect, useState, useRef } from 'react';
import './landing.css';

const LandingPage = ({ handleScrollToNavbar }) => {
  const [showMouseIcon, setShowMouseIcon] = useState(true);
  const landingRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { top } = landingRef.current.getBoundingClientRect();
      const shouldShow = top <= window.innerHeight;

      // Check if the user has scrolled past the first 100vh
      const scrolledPast100vh = window.scrollY > window.innerHeight;

      setShowMouseIcon(shouldShow && !scrolledPast100vh);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

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
              Nicholas Horishny
            </h1>
            <h3 className="header-subtitle animate-pop-in">
              Junior Full-Stack Developer
            </h3>
          </div>
        </div>
        {showMouseIcon && (
          <div className="mouse-icon" onClick={handleMouseIconClick}>
            <div className="wheel"></div>
          </div>
        )}
      </header>
    </div>
  );
};

export default LandingPage;
