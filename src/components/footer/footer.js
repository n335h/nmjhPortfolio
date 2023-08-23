import './styles.css';
import GHGrey from '../assets/GHGrey.svg';
import GHYellow from '../assets/GHYellow.svg';
import LIGrey from '../assets/LIGrey.svg';
import LIYellow from '../assets/LIYellow.svg';

export default function Footer() {
  return (
    <div className="FooterContainer">
      <div className="FooterTop">
        <div className="FooterLinks">
       .
          <div className="logo-container">
            <div className="GH">
              <a
                href="https://github.com/n335h"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="icon"
                  src={GHGrey}
                  alt="github"
                  id="iconsNav"
                />
                <img
                  className="icon"
                  src={GHYellow}
                  alt="github"
                  id="iconsNav"
                />
              </a>
            </div>
            <div className="LI">
              <a
                href="https://linkedin.com/in/nichhorishny"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  className="icon"
                  src={LIGrey}
                  alt="linkedin"
                  id="iconsNav"
                />
                <img
                  className="icon"
                  src={LIYellow}
                  alt="linkedin"
                  id="iconsNav"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
     
      <div className="Footer">
        <p> © Nich Horishny 2023</p>
      </div>
    </div>
  );
}
