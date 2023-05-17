import React, { useState } from 'react';
import './carousel.css';

const Carousel = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handlePrev = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? images.length - 1 : prevImage - 1
    );
  };

  const handleNext = () => {
    setCurrentImage((prevImage) =>
      prevImage === images.length - 1 ? 0 : prevImage + 1
    );
  };

  const handlePreviewClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={handlePrev}>
        &lt;
      </button>
      <img
        className="carousel-image"
        src={images[currentImage]}
        alt={`Image ${currentImage}`}
      />
      <button className="carousel-button next" onClick={handleNext}>
        &gt;
      </button>
      <div className="preview-grid">
        {images.map((image, index) => (
          <img
            key={index}
            className={`preview-image ${
              index === currentImage ? 'active' : ''
            }`}
            src={image}
            alt={`Image ${index}`}
            onClick={() => handlePreviewClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;
