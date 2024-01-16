import React, { useRef, useEffect } from 'react';
import './landing.css';
import AboutPage from '../about/about';

import Carousel from '../../carousel/carousel';
import Contact from '../contact/contact';

const LandingPage = ({
	handleScrollToNavbar,
}) => {
	const landingRef = useRef(null);

	const handleMouseIconClick = () => {
		if (handleScrollToNavbar) {
			handleScrollToNavbar();
		}
	};

	useEffect(() => {
		// Call the reveal function on the initial load to reveal elements already in the viewport.
		reveal();

		// Add the event listener to call the reveal function on scroll.
		window.addEventListener('scroll', reveal);

		// Clean up the event listener on component unmount.
		return () => {
			window.removeEventListener(
				'scroll',
				reveal
			);
		};
	}, []);

	function reveal() {
		var reveals =
			document.querySelectorAll('.reveal');

		for (var i = 0; i < reveals.length; i++) {
			var windowHeight = window.innerHeight;
			var elementTop =
				reveals[i].getBoundingClientRect().top;
			var elementVisible = 100; // Adjust this value as needed

			if (
				elementTop <
				windowHeight - elementVisible
			) {
				reveals[i].classList.add('active');
			} else {
				reveals[i].classList.remove('active');
			}
		}
	}

	return (
		<div
			className='landing-page'
			ref={landingRef}>
			<header>
				<div className='landingmain'>
					<div className='header-content'>
						<div className='hero'>
							<h1 className='header-title animate-pop-in'>
								nicholas horishny
							</h1>
							<h3 className='header-subtitle animate-pop-in'>
								junior software developer
							</h3>
						</div>
						<a
							href='#portfolio'
							className='btn animate-pop-in'>
							<button className='btn'>
								projects
							</button>
						</a>
						<div></div>

						<div
							className='mouse-icon animate-pop-in'
							onClick={handleMouseIconClick}>
							<div className='wheel'></div>
						</div>
					</div>
				</div>
			</header>
			<div
				id='about'
				href='About'
				className='section'>
				<AboutPage />
			</div>

			<div
				id='portfolio'
				className='section'>
				<Carousel />
			</div>
			<div
				id='contact'
				className='section'>
				<Contact />
			</div>
		</div>
	);
};

export default LandingPage;
