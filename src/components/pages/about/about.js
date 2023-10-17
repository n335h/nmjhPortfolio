import './about.css';

export default function AboutSection() {
  return (
    <div className="AboutContainer">
      <div className="AboutTitle .scroll-in-animation">
        <h1>hello!</h1>
      </div>
      <div className="AboutSection">
        <div className="AboutSection-Left">
          <p className="aboutme">
            I'm Nich, I come from a background in Visual Communication
            and have just completed the School of Code Bootcamp.
          </p>
          <p className="aboutme">
            It was an immersive program that gave me the technical
            foundation and hands-on experience needed to dive into
            Full-Stack Development.
          </p>
          <p className="aboutme">
            Now I'm all set to bring my creative skills and tech
            know-how together for this exciting new adventure.
          </p>
          <p className="aboutme">
            Looking forward to making things happen!
          </p>
          <a href="/#contact">
            <button className="ContactButton">contact</button>
          </a>
        </div>
        <div className="AboutSection-Right">
          <h2>Tech Stack</h2>
          <div className="AboutSection-Right-Top">
            <p className="SkillItem">HTML</p>
            <p className="SkillItem">CSS</p>
            <p className="SkillItem">JavaScript</p>
            <p className="SkillItem">React</p>
            <p className="SkillItem">Node.js</p>
            <p className="SkillItem">Express</p>
            <p className="SkillItem">Figma</p>
            <p className="SkillItem">PostgreSQL</p>
            <p className="SkillItem">TypeScript</p>
            <p className="SkillItem">Jest</p>
            <p className="SkillItem">Playwright</p>
          </div>
        </div>
      </div>
    </div>
  );
}
