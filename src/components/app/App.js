import React, { useState } from "react";
import Navbar from "../navBar/navBar";
import LandingPage from "../landing/landing";
import AboutPage from "../about/about";
import Portfolio from "../portfolio/portfolio";
import "./App.css";

function App() {
  const [showAbout, setShowAbout] = useState(false);
  const [showPortfolio, setShowPortfolio] = useState(false);

  return (
    <div className="App">
      <LandingPage />
      <header className="App-header"></header>
      <Navbar
        activePage={showAbout ? "about" : showPortfolio ? "portfolio" : ""}
        setShowAbout={setShowAbout}
        setShowPortfolio={setShowPortfolio}
      />
      {showAbout && <AboutPage />}
      {showPortfolio && <Portfolio />}
      <img src="https://via.placeholder.com/150" alt="Profile picture" />
      <p>
        Hi there! My name is [Your Name], and I'm a [Your Profession]. Lorem
        ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
        incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
        consequat.
      </p>
      <p>When I'm not working, I enjoy [Your Hobbies or Interests].</p>

      <section className="skills">
        <h2>Skills</h2>
      </section>
    </div>
  );
}

export default App;
