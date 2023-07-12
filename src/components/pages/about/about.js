import React from 'react';
import './about.css';
import Footer from '../../footer/footer';

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* <div className="about-title">
        <h2>hello!</h2>
      </div> */}

      <section className="about">
        <div className="about-container">
          <div className="about-img">
            <img
              className="profile-pic"
              src="https://i.ibb.co/7k8y959/FB-IMG-1688379082823.jpg"
              alt="Profile"
            />
          </div>
          <div className="about-sec">
            <div className="about-secInfo">
              <h1>hello!</h1>
              <span id="span" className="about-secInfo">
                <div className="about-img2">
                  <img
                    className="profile-pic"
                    src="https://i.ibb.co/7k8y959/FB-IMG-1688379082823.jpg"
                    alt="Profile"
                  />
                </div>
                <br />
                <p>
                  I am Nich, I have a background in Visual
                  Communication, which has provided me with strong
                  creative thinking skills. However, for the past five
                  years, I have been working in HR/TA, gaining
                  valuable experience in a different field.
                </p>
              </span>

              <p>
                Now, I am eager to redirect my creative thinking into
                the world of Full-Stack Development. I recently
                completed the School of Code cohort 14 for 2023, which
                was an immersive program that equipped me with the
                necessary technical foundation and hands-on experience
                in Full-Stack Development.
              </p>

              <br />
              <div className="buttonAbout">
                <a className="button" href="/#contact">
                  Contact me
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
