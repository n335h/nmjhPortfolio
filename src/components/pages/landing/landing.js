import React, { useRef, useEffect, useState } from 'react';
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
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(120 - Math.random() * 100); // Used to determine how fast a letter is typed
  const toRotate = [
    'Software Developer',
    'Full-Stack Developer',
    'UI/UX Developer',
  ];
  const period = 2000; // Amount of transition time of each word

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => clearInterval(ticker);
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(400);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
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
                {'Junior '}
                <span className="header-subtitle wrap">{text}</span>
              </h3>
            </div>
            <a href="#portfolio" className="btn animate-pop-in">
              <button className="btn">projects</button>
            </a>
            <div>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
              <br></br>
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
