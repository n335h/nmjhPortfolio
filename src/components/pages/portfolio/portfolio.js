import React from 'react';
import { useState } from 'react';
import Footer from '../../footer/footer';
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
    <div className="portfolio">
      <div className="portfolioInfo">
        <h1 className="swiperTitle">projects!</h1>
        <p className="swiperP">
          Slide through to check out my projects!
        </p>
      </div>
      <div className="portfolio-content">
        <div className="portfolio-gallery">
          <Carousel images={images} />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
