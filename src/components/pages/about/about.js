import React from 'react';
import './about.css';
import Footer from '../../footer/footer';

const AboutPage = () => {
  return (
    <div class="about-page">
      <header></header>
      <main>
        <div class="about-container">
          <section class="about">
            <br />
            <br />
            <br />
            <h2>About Me</h2>
            <img
              src="https://via.placeholder.com/150"
              alt="Profile picture"
            />
            <p>
              Hello! My name is Nich Horishny, and I am a junior full
              stack developer. I have a strong passion for coding and
              building web applications. I recently took part in
              School of Code Cohort 14, where I gained valuable skills
              and knowledge in software development.
            </p>
            <p>
              Prior to becoming a developer, I studied Visual
              Communication. This background has given me a keen eye
              for design and user experience, which I incorporate into
              my coding projects.
            </p>
            <p>
              When I'm not coding, you can often find me pursuing my
              hobbies. Here are a few things I enjoy:
            </p>
            {/* <ul>
              <li>
                Skateboarding: I love the freedom and creativity that
                skateboarding brings. It's a great way to stay active
                and challenge myself.
              </li>
              <li>
                35mm Photography: Capturing moments on film is a hobby
                I cherish. I enjoy exploring different subjects and
                experimenting with different techniques.
              </li>
              <li>
                Art: I have a deep appreciation for various forms of
                art. Whether it's painting, drawing, or visiting
                galleries, art fuels my creativity and inspires me.
              </li>
              <li>
                Nature: Spending time in nature helps me find peace
                and clarity. Hiking, camping, and exploring natural
                landscapes with my border collie are activities I truly enjoy.
              </li>
            </ul> */}
            <h2>Languages & Tools</h2>
            <div class="languages">
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
            </div>
          </section>
          <div class="skills-container">
            <section class="skills">
              <h2>Skills</h2>
              <ul>
                <li>
                  <h3>[Skill 1]</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                </li>
                <li>
                  <h3>[Skill 2]</h3>
                  <p>
                    Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                  </p>
                </li>
                <li>
                  <h3>[Skill 3]</h3>
                  <p>
                    Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                  </p>
                </li>
                <li>
                  <h3>[Skill 3]</h3>
                  <p>
                    Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                  </p>
                </li>
                <li>
                  <h3>[Skill 3]</h3>
                  <p>
                    Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla
                    pariatur.
                  </p>
                </li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
