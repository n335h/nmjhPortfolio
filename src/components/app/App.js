import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../navBar/navBar';
import LandingPage from '../pages/landing/landing';
import AboutPage from '../pages/about/about';
import Portfolio from '../pages/portfolio/portfolio';
import Contact from '../pages/contact/contact';
import './App.css';
import footer from '../footer/footer';

function App() {
  const [showNavbar, setShowNavbar] = useState(false);
  const [showLandingPage, setShowLandingPage] = useState(true);

  const handleScrollToNavbar = () => {
    setShowNavbar(true);
    setShowLandingPage(false);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header"></header>
        {!showNavbar && (
          <LandingPage handleScrollToNavbar={handleScrollToNavbar} />
        )}
        {showNavbar && (
          <React.Fragment>
            <Navbar />
            <Routes>
              <Route path="/about" element={<AboutPage />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/github" link="https://github.com/n335h" />
              <Route
                path="/linkedin"
                link="https://linkedin.com/in/nichhorishny"
              />
            </Routes>
          </React.Fragment>
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;
