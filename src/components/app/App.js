import React from 'react';
import Navbar from '../navBar/navBar';
import LandingPage from '../pages/landing/landing';
import AboutPage from '../pages/about/about';
import Portfolio from '../pages/portfolio/portfolio';
import Contact from '../pages/contact/contact';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <div id="section" className="section">
          <LandingPage />
        </div>

        <div id="about" href="About" className="section">
          <AboutPage />
        </div>

        <div id="portfolio" className="section">
          <Portfolio />
        </div>
        <div id="contact" className="section">
          <Contact />
        </div>

        <Routes>
          <Route path="/paprback" />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
