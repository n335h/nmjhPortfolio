import React from 'react';
import './about.css';

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
            <div className="about-secInfo animate-pop-in">
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
                  Communication and have just completed the School of
                  Code Bootcamp. It was an immersive program that gave
                  me the technical foundation and hands-on experience
                  needed to dive into Full-Stack Development.{' '}
                  <br></br> <br></br>Now I'm all set to bring my
                  creative skills and tech know-how together for this
                  exciting new adventure. Looking forward to making
                  things happen!
                </p>
              </span>
              <br />
              <div className="skills">
                {/*           
  <ul>
    <li class="skill">HTML</li>
    <li class="skill">CSS</li>
    <li class="skill">JavaScript</li>
    <li class="skill">React</li>
    <li class="skill">Node.js</li>
    <li class="skill">Express</li>
    <li class="skill">PostgreSQL</li>
    <li class="skill">Typescript</li>
  </ul> */}
              </div>
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
