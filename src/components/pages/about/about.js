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
                  I'm Nich, I come from a background in Visual
                  Communication, but for the past five years, I've
                  been working within HR.    Looking for new ways to utilize that creative
                thinking. I decided to delve on a new journey into the
                world of tech.{' '}
                </p>{' '}
              </span>

              <p>
              Recently, I completed the School of
                Code cohort 14 for 2023. It was an immersive program
                that gave me the technical foundation and hands-on
                experience I need to dive into Full-Stack Development.
                Now I'm all set to bring my creative skills and tech
                know-how together for this exciting new adventure.
                Looking forward to making things happen!
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
