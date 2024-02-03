import React from 'react';
import Navbar from './client/components/navBar/navBar';
import LandingPage from './client/pages/landing/landing';
import About from './client/pages/about/about';
import Projects from './client/pages/projects';
import Contact from './client/pages/contact/contact';
import Footer from './client/components/footer/footer';
// import SocialTab from '../app/client/components/socialTab/socialTab';

import {
	BrowserRouter,
	Route,
	Routes,
} from 'react-router-dom';

function App() {
	const [darkMode, setDarkMode] =
		React.useState(true);

	function toggleDarkMode() {
		setDarkMode((prevDarkMode) => !prevDarkMode);
	}

	return (
		<BrowserRouter>
			<div className='App m-w-screen'>
				<Navbar
					darkMode={darkMode}
					toggleDarkMode={toggleDarkMode}
				/>

				<section
					id='section'
					className='section'>
					<LandingPage />
				</section>
				<section
					href='#about'
					id='about'
					className='section'>
					<About />
				</section>
				<section
					href='#projects'
					id='projects'
					className='section'>
					<Projects />
				</section>
				<section
					href='#contact'
					id='contact'
					className='section'>
					<Contact />
				</section>
				{/* <SocialTab /> */}
				<section
					id='section'
					className='section'>
					<Footer />
				</section>

				<Routes>
					<Route path='/paprback' />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
