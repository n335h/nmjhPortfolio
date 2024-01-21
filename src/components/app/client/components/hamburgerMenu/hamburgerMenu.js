import React from 'react';
import './hamburger.css';

const HamburgerMenu = ({ handleToggleMenu }) => {
	return (
		<div className='logo-toggle-container'>
			<div
				className='menu-toggle'
				onClick={handleToggleMenu}>
				<div className='bar h-0.5 mb-1 w-5 bg-indigo-600'></div>
				<div className='bar h-0.5 mb-1 w-5 bg-indigo-600'></div>
				<div className='bar h-0.5 mb-1 w-5 bg-indigo-600'></div>
			</div>
		</div>
	);
};

export default HamburgerMenu;
