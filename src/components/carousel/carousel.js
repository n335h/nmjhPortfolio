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
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2,
        },
        1560: {
          slidesPerView: 2,
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
      title: 'Paprback',
      description:
        'Week 2 Hackathon - Paprback is a social media platform for book lovers.',
      githubLink: 'https://github.com/n335h/soc_byteclub_paprback',
      livesite: 'https://bcpaprback.netlify.app/',
    },
    {
      title: 'Rock Paper Scissors',
      description: 'Week 1 Hackathon - Rock Paper Scissors Game',
      githubLink: 'https://github.com/n335h/RPS',
      livesite: 'https://n335h.github.io/RPS/',
    },
    {
      title: 'Tesla Clone',
      description: 'Workshop to clone a website',
      githubLink: 'https://github.com/n335h/TeslaClone',
      livesite: 'https://n335h.github.io/TeslaClone/',
    },
    {
      title: 'NFT Card',
      description:
        'Frontend Mentor challenges help you improve your coding skills by building realistic projects. Your challenge is to build out this preview card component and get it looking as close to the design as possible. I could any tools to help me complete the challenge',
      githubLink: 'https://github.com/n335h/NFTCard',
      livesite: 'https://n335h.github.io/NFTCard/',
    },
    {
      title: 'Open Weather API',
      description:
        'This is a weather app that uses the Open Weather API to fetch weather data for a city that the user inputs, this calls upon two seperate APIs, current weather data and forcast weather data, for the 12 hour forecast data. The app is built with React and uses the Axios library to make the API call.',
      githubLink:
        'https://github.com/n335h/ReactWeatherApp/tree/main',
      livesite: 'https://main--n3335hweather.netlify.app/',
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
