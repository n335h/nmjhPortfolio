import React, { useEffect, useState } from 'react';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import './carousel.css';
import github from '../assets/github.png';

Swiper.use([Navigation, Pagination]);

const Carousel = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const swiper = new Swiper('.swiper', {
      effect: 'coverflow',
      grabCursor: true,
      centeredSlides: true,
      coverflowEffect: {
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 6,
        slideShadows: true,
      },
      loop: true,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        640: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 1,
        },
        1024: {
          slidesPerView: 1,
        },
        1560: {
          slidesPerView: 1,
        },
      },
    });

    swiper.on('slideChange', () => {
      setActiveSlide(swiper.realIndex);
    });

    return () => {
      swiper.destroy();
    };
  }, []);

  const slideData = [
    {
      title: 'paprback',
      description:
        'Paprback, the community-focused book swapping app, the outcome of our final project of the School of Code! Paprbacks primary mission is to connect book lovers and revolutionize the way books are shared and cherished. Embracing the power of technologythis innovative app empowers users to easily exchange books with fellow enthusiasts, fostering a vibrant and sustainable reading community. ',
      githubLink: 'https://github.com/n335h/soc_byteclub_paprback',
      livesite: 'https://bcpaprback.netlify.app/',
    },
    {
      title: 'rock paper scissors',
      description:
        'Rock Paper Scissors. Friday Hackathon for School of Code built with HTML, CSS and JavaScript using DOM manipulation.',
      githubLink: 'https://github.com/n335h/RPS',
      livesite: 'https://n335h.github.io/RPS/',
    },
    {
      title: 'open weather API',
      description:
        'Weather app that uses the Open Weather API to fetch weather data for a city that the user inputs, this calls upon two seperate APIs, current weather data and forcast weather data, for the 12 hour forecast data. The app is built with React and uses the Axios library to make the API call.',
      githubLink:
        'https://github.com/n335h/ReactWeatherApp/tree/main',
      livesite: 'https://main--nhweatherapi.netlify.app/',
    },
  ];

  const currentSlide = slideData[activeSlide];

  return (
    <div className="main">
      <div className="swiper">
        <div className="swiper-wrapper">
          {slideData.map((slide, index) => (
            <div
              key={index}
              className={`swiper-slide swiper-slide--${index + 1}`}
            ></div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
      </div>

      <div className="slideInfo">
        <span className="slideHeader">
          <h2 className="slideTitle">{currentSlide.title}</h2>
          <a
            className="githubLink"
            href={currentSlide.githubLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="carouselImage"
              src={github}
              alt="githublink"
            />
          </a>
        </span>
        <p>{currentSlide.description}</p>

        <a
          className="liveSite"
          href={currentSlide.livesite}
          target="_blank"
          rel="noopener noreferrer"
        >
          Live Site
        </a>
      </div>
    </div>
  );
};

export default Carousel;
