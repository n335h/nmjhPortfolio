// src/components/ThemeSwitcher.js
import React, {
	useState,
	useEffect,
} from 'react';

import moon from '../../../../assets/moon.png';
import sun from '../../../../assets/sun.png';

const ThemeToggle = () => {
	const [darkMode, setDarkMode] = useState(false);

	useEffect(() => {
		const isDarkMode =
			localStorage.getItem('darkMode') === 'true';
		setDarkMode(isDarkMode);
	}, []);

	useEffect(() => {
		document.documentElement.classList.toggle(
			'dark',
			darkMode
		);
		localStorage.setItem('darkMode', darkMode);
	}, [darkMode]);

	const toggleDarkMode = () => {
		setDarkMode((prevMode) => !prevMode);
	};

	return (
		<button onClick={toggleDarkMode}>
			<img
				src={darkMode ? sun : moon}
				alt={darkMode ? 'Moon' : 'Sun'}
				className='w-5 h-5 drop-shadow-lg' // Adjust the width and height as needed
			/>
		</button>
	);
};

export default ThemeToggle;
