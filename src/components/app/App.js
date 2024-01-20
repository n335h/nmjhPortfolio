import React from 'react';
import Navbar from '../app/client/components/navBar/navBar';
import LandingPage from '../app/client/pages/landing/landing';
import About from '../app/client/pages/about/about';
import Projects from '../app/client/pages/projects/projects';
import Contact from '../app/client/pages/contact/contact';
import Footer from '../app/client/components/footer/footer';

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

				<div
					id='section'
					className='section'>
					<LandingPage />
				</div>
				<div
					id='section'
					className='section'>
					<About />
				</div>
				<div
					id='section'
					className='section'>
					<Projects />
				</div>
				<div
					id='section'
					className='section'>
					<Contact />
				</div>
				<div
					id='section'
					className='section'>
					<Footer />
				</div>

				<Routes>
					<Route path='/paprback' />
				</Routes>
			</div>
		</BrowserRouter>
	);
}

export default App;
