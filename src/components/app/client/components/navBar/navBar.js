import React, {
	useState,
	useEffect,
} from 'react';

import ThemeToggle from '../themeToggle';

function NavBar(props) {
	const { toggleDarkMode } = props;
	const [isMenuOpen, setIsMenuOpen] =
		useState(false);

	const handleLinkClick = (sectionId) => {
		const section =
			document.getElementById(sectionId);
		if (section) {
			section.scrollIntoView({
				behavior: 'smooth',
			});
		}
	};

	return (
		<nav
			className={`drop-shadow-lg bg-white fixed top-0 left-0 p-2 z-50 w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between  dark:bg-zinc-950`}
			aria-label='Global'>
			<div className='flex items-center justify-between'>
				<ThemeToggle
					toggleDarkMode={toggleDarkMode}
				/>
			</div>
			<div
				id='navbar-image-and-text-2'
				className={`hs-collapse ${
					isMenuOpen ? 'block' : 'hidden'
				} overflow-hidden transition-all duration-300 basis-full grow sm:block`}>
				<div className='flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5'>
					<button
						className='font-sm text-zinc-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
						onClick={() =>
							handleLinkClick('about')
						}>
						about
					</button>
					<button
						className='font-sm text-zinc-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
						onClick={() =>
							handleLinkClick('projects')
						}>
						projects
					</button>
					<button
						className='font-sm text-zinc-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
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
