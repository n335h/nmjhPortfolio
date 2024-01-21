import React from 'react';

const HamburgerMenu = ({ handleToggleMenu }) => {
  return (
    <div className='logo-toggle-container'>
      <div
        className={`menu-toggle transition-transform duration-300 ${
          handleToggleMenu ? 'open' : ''
        }`}
        onClick={handleToggleMenu}
      >
        <div className='bar h-0.5 mb-1 w-5 bg-indigo-600 transform transition-transform origin-center'></div>
        <div className='bar h-0.5 mb-1 w-5 bg-indigo-600 transform transition-transform origin-center'></div>
        <div className='bar h-0.5 mb-1 w-5 bg-indigo-600 transform transition-transform origin-center'></div>
      </div>
    </div>
  );
};

export default HamburgerMenu;
