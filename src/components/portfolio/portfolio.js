import React from 'react';
import { useState } from 'react';





const Portfolio = (props) => {
const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const prevImage = () => {
    setCurrentImageIndex((currentImageIndex - 1 + props.images.length) % props.images.length);
  };

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % props.images.length);
  };

  return (
    <div className="portfolio-gallery">
      <img src={props.images[currentImageIndex]} alt="" />

      <div className="portfolio-controls">
        <button onClick={prevImage}>Prev</button>
        <button onClick={nextImage}>Next</button>
      </div>
    </div>
  );
}

export default Portfolio;
