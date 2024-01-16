import './about.css';

export default function AboutSection() {
	return (
		<div className='AboutContainer'>
			<div className='AboutTitle .scroll-in-animation'>
				<h1>hello!</h1>
			</div>
			<div className='AboutSection'>
				<div className='AboutSection-Left'>
					<p className='aboutme'>
						I’m a Junior Software Developer
						trained with a focus on Full Stack
						Development.
					</p>
					<p className='aboutme'>
						During my young developer journey I’ve
						primarily focused on React,
						JavaScript, Typescript, PostgreSQL,
						Node.JS and testing with Playwright,
						Supertest and Jest.
					</p>
					<p className='aboutme'>
						Now I'm all set to bring my creative
						skills and tech know-how together for
						this exciting new adventure.
					</p>
					<p className='aboutme'>
						Looking forward to making things
						happen!
					</p>
					<a href='/#contact'>
						<button className='ContactButton'>
							contact
						</button>
					</a>
				</div>
				<div className='AboutSection-Right'>
					<h2>tech stack</h2>
					<div className='AboutSection-Right-Top'>
						<p className='SkillItem'>HTML</p>
						<p className='SkillItem'>CSS</p>
						<p className='SkillItem'>
							JavaScript
						</p>
						<p className='SkillItem'>React</p>
						<p className='SkillItem'>Node.js</p>
						<p className='SkillItem'>Express</p>
						<p className='SkillItem'>EJS</p>
						<p className='SkillItem'>
							PostgreSQL
						</p>
						<p className='SkillItem'>
							TypeScript
						</p>
						<p className='SkillItem'>Jest</p>
						<p className='SkillItem'>
							Playwright
						</p>
						<p className='SkillItem'>Git</p>
						<p className='SkillItem'>REST API</p>
						<p className='SkillItem'>Netlify</p>
					</div>
				</div>
			</div>
		</div>
	);
}
