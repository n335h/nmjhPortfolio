import './about.css';

export default function AboutSection() {
  return (
    <div className="AboutContainer">
      <div className="AboutTitle">
        <h1>hello!</h1>
      </div>
      <div className="AboutSection">
        <div className="AboutSection-Left">
          <h2>about me</h2>
          <p className="MyStory">
            I'm Nich, I come from a background in Visual Communication
            and have just completed the School of Code Bootcamp.
          </p>
          <p className="MyStory">
            It was an immersive program that gave me the technical
            foundation and hands-on experience needed to dive into
            Full-Stack Development.
          </p>
          <p className="MyStory">
            Now I'm all set to bring my creative skills and tech
            know-how together for this exciting new adventure.
          </p>
          <p className="MyStory">
            Looking forward to making things happen!
          </p>

          <button className="ContactButton">CONTACT</button>
        </div>
        <div className="AboutSection-Right">
          <h2>skills</h2>
          <div className="AboutSection-Right-Top">
            <p className="SkillItem">HTML</p>
            <p className="SkillItem">CSS</p>
            <p className="SkillItem">JavaScript</p>
            <p className="SkillItem">React</p>
            <p className="SkillItem">Node.js</p>
            <p className="SkillItem">Express</p>
            <p className="SkillItem">Git</p>
            <p className="SkillItem">GitHub</p>
          </div>
        </div>
      </div>
    </div>
  );
}
