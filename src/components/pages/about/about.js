import React from 'react';
import './about.css';
import Footer from '../../footer/footer';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="about-container">
        <section className="about">
          <br />
          <br />
          <br />
          <h2>hello!</h2>
          <span className="wave">
            <div className="about-img">
              <img
                className="profile-pic"
                src="https://i.ibb.co/7k8y959/FB-IMG-1688379082823.jpg"
                alt="Profile"
              />
            </div>
            <div className="about-sec">
              <p>
                My name is Nich Horishny, I am a junior full stack
                developer. I have a strong passion for coding and
                building web applications. I recently took part in
                School of Code Cohort 14, where I gained valuable
                skills and knowledge in software development.
              </p>
              <p>
                Prior to delving intot he world of tech, I studied
                Visual Communication. This background has given me a
                keen eye for design and user experience, which I
                incorporate into my coding projects.
              </p>

              <br />

              <buttton className="button" href="/contact">
                Contact me
              </buttton>
            </div>
          </span>
        </section>

        {/* <div class="languages-container">
            <h2>Skills</h2>{' '}
            <section class="languages">
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
                id="icon"
                alt="html5"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
                id="icon"
                alt="css3"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                id="icon"
                alt="javascript"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                id="icon"
                alt="react"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                id="icon"
                alt="git"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
                id="icon"
                alt="jest"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                id="icon"
                alt="nodejs"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-plain-wordmark.svg"
                id="icon"
                alt="postgresql"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg"
                id="icon"
                alt="express"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                id="icon"
                alt="figma"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/premierepro/premierepro-original.svg"
                id="icon"
                alt="premierepro"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-plain.svg"
                id="icon"
                alt="photoshop"
              />
              <img
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/visualstudio/visualstudio-plain.svg"
                id="icon"
                alt="visualstudio"
              />
            </section>
          </div> */}
      </div>

      {/* <Footer /> */}
    </div>
  );
};

export default AboutPage;
