import React, {
	useState,
	useEffect,
} from 'react';
import ThemeToggle from '../themeToggle';
import HamburgerMenu from '../hamburgerMenu/hamburgerMenu';

function NavBar(props) {
	const { toggleDarkMode } = props;
	const [isMenuOpen, setIsMenuOpen] =
		useState(false);
	const [windowWidth, setWindowWidth] = useState(
		window.innerWidth
	);

	const handleLinkClick = (sectionId) => {
		const section =
			document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({
				behavior: 'smooth',
			});
		}
	};

	const handleToggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};

		window.addEventListener(
			'resize',
			handleResize
		);

		return () => {
			window.removeEventListener(
				'resize',
				handleResize
			);
		};
	}, []);

	return (
		<nav
			className={`navbar ${
				isMenuOpen ? 'open' : ''
			} drop-shadow-m bg-white fixed top-0 left-0 p-2 z-50 w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between  dark:bg-zinc-950`}
			aria-label='Global'>
			<div className='flex items-center justify-between w-full'>
				<div className='flex items-center'>
					<ThemeToggle
						toggleDarkMode={toggleDarkMode}
					/>
				</div>
				{windowWidth <= 768 && (
					<div className='flex items-center'>
						<HamburgerMenu
							handleToggleMenu={handleToggleMenu}
						/>
					</div>
				)}
			</div>

			<div
				id='navbar-image-and-text-2'
				className={`hs-collapse ${
					isMenuOpen ? 'block' : 'hidden'
				} overflow-hidden transition-all duration-300 basis-full grow sm:block`}>
				<div className='flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5'>
					<button
						className='text-lg text-zinc-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
						onClick={() =>
							handleLinkClick('about')
						}>
						about
					</button>
					<button
						className='text-lg text-zinc-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
						onClick={() =>
							handleLinkClick('projects')
						}>
						projects
					</button>
					<button
						className='text-lg text-zinc-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
						onClick={() =>
							handleLinkClick('contact')
						}>
						contact
					</button>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
