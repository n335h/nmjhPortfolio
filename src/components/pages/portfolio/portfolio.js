import React from 'react';
import Carousel from '../../carousel/carousel';
import './portfolio.css';

const images = [
  'https://via.placeholder.com/400x300',
  'https://via.placeholder.com/400x301',
  'https://via.placeholder.com/400x302',
  'https://via.placeholder.com/400x303',
  'https://via.placeholder.com/400x304',
];

const Portfolio = () => {
  return (
    <div className="ProjectContainer">
      <div className="ProjectTitle">
        <h1>projects!</h1>
        
      </div>
      
      <div className="ProjectsSection">
        <Carousel images={images} />
      </div>
    </div>
  );
};

export default Portfolio;
