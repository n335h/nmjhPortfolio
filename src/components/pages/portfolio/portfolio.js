import React from 'react';
import { useState } from 'react';
import Footer from '../../footer/footer';
import Carousel from '../../carousel/carousel';

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
      <div className="portfolio-container">
        <br />
        <br />
        <br />
        <br />

        <div className="portfolio-gallery">
          <Carousel images={images} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Portfolio;
