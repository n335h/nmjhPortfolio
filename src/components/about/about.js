import React from 'react';
import './about.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <header>
       
      </header>
      <main>
        <section className="about">
          <h2>About Me</h2>
          <img src="https://via.placeholder.com/150" alt="Profile picture" />
          <p>Hi there! My name is [Your Name], and I'm a [Your Profession]. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <p>When I'm not working, I enjoy [Your Hobbies or Interests].</p>
        </section>
        <section className="skills">
          <h2>Skills</h2>
          <ul>
            <li>
              <h3>[Skill 1]</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </li>
            <li>
              <h3>[Skill 2]</h3>
              <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
            </li>
            <li>
              <h3>[Skill 3]</h3>
              <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
            </li>
          </ul>
        </section>
      </main>
      <footer>
        <p>&copy; 2023 [Your Name]. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default AboutPage;
