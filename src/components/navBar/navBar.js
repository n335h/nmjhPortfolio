import React, { useState, useEffect } from "react";
import "./navBar.css";

const Navbar = (props) => {
  const handleAboutClick = () => {
    props.setShowAbout(true);
    props.setShowPortfolio(false);
  };

  const handlePortfolioClick = () => {
    props.setShowPortfolio(true);
    props.setShowAbout(false);
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
          <a href="#contact">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
