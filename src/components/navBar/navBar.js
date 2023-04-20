import React, { useState, useEffect } from "react";
import "./navBar.css";

const Navbar = (props) => {
  const handleAboutClick = () => {
    props.setShowAbout(true);
    props.setShowPortfolio(false);
    props.setShowContact (false);

  };

  const handlePortfolioClick = () => {
    props.setShowPortfolio(true);
    props.setShowAbout(false);
    props.setShowContact (false);
  };

  const handleContactClick = () => {
    props.setShowContact(true);
    props.setShowAbout(false);
    props.setShowPortfolio(false);
  };


  const [showNavbar, setShowNavbar] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > window.innerHeight) {
        setShowNavbar(true);
      } else {
        setShowNavbar(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${showNavbar ? "sticky" : ""}`}>
      <ul>
        <li>
          <a
            className={props.activePage === "about" ? "selected" : ""}
            onClick={handleAboutClick}
          >
            about
          </a>
        </li>
        <li>
          <a
            className={props.activePage === "portfolio" ? "selected" : ""}
            onClick={handlePortfolioClick}
          >
            portfolio
          </a>
        </li>
        <li>
          <a className={props.activePage === "contact" ? "selected" : ""} onClick={handleContactClick}> contact </a>
          
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
