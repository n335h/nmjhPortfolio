import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../navBar/navBar';
import LandingPage from '../pages/landing/landing';
import AboutPage from '../pages/about/about';
import Portfolio from '../pages/portfolio/portfolio';
import Contact from '../pages/contact/contact';
import './App.css';
import Footer from '../footer/footer';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-header"></header>
        <Navbar />

        <div id="section" className="section">
          <LandingPage />
        </div>
        <div id="section" className="sectionAbout">
          <AboutPage path="/about" href="#about" />
        </div>
        <div id="section" className="sectionPortfolio">
          <Portfolio path="/portfolio" href="#portfolio" />
        </div>
        <div id="section" className="sectionContact">
          <Contact href="#contact" />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
