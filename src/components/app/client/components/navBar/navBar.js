import React, {
	useState,
	useEffect,
} from 'react';

import ThemeToggle from '../themeToggle';

function NavBar(props) {
	const [isMenuOpen, setIsMenuOpen] =
		useState(false);

	return (
		<nav
			className={`drop-shadow-lg bg-white fixed top-0 left-0 p-2 z-50 w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between  dark:bg-zinc-950`}
			aria-label='Global'>
			<div className='flex items-center justify-between'></div>
			<ThemeToggle />
			<div
				id='navbar-image-and-text-2'
				className={`hs-collapse ${
					isMenuOpen ? 'block' : 'hidden'
				} overflow-hidden transition-all duration-300 basis-full grow sm:block`}>
				<div className='flex flex-col gap-5 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5'>
					<a
						className='font-sm text-zinc-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
						href='#about'
						onClick={() => setIsMenuOpen(false)}>
						about
					</a>
					<a
						className='font-sm text-zinc-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
						href='#projects'
						onClick={() => setIsMenuOpen(false)}>
						projects
					</a>
					<a
						className='font-sm text-zinc-600 hover:text-indigo-600 dark:text-gray-300 dark:hover:text-indigo-600 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600'
						href='#contact'
						onClick={() => setIsMenuOpen(false)}>
						contact
					</a>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
