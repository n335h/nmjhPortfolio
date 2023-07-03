import React, { useEffect } from 'react';
import Swiper, { Navigation, Pagination } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import './carousel.css';
import github from '../assets/github.png';

Swiper.use([Navigation, Pagination]);

const Carousel = () => {
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
      loop: true, // Enable continuous loop
      freeMode: true, // Enable free dragging/swiping
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

    return () => {
      swiper.destroy();
    };
  }, []);

  return (
    <div className="main">
      <div>
        <h1>projects</h1>
        <p>This is some info</p>
      </div>

      <div className="swiper">
        <div className="swiper-wrapper">
          <div className="swiper-slide swiper-slide--one">
            <div>
              <h2>NFT Card</h2>
              <p>About NFT Card</p>
              <a href="https://en.wikipedia.org/wiki/Jellyfish">
                <img
                  className="carouselImage"
                  src={github}
                  href="https://en.wikipedia.org/wiki/Jellyfish"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="githublink"
                />
              </a>
            </div>
          </div>
          <div className="swiper-slide swiper-slide--two">
            <div>
              <h2>RPS</h2>
              <p>About RPS</p>
              <a href="https://n335h.github.io/RPS/">
                <img
                  className="carouselImage"
                  src={github}
                  href="https://n335h.github.io/RPS/"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="githublink"
                />
              </a>
            </div>
          </div>
          <div className="swiper-slide swiper-slide--three">
            <div>
              <h2>Tesla Clone</h2>
              <p>About Tesla Clone</p>
              <a href="https://n335h.github.io/TeslaClone/">
                <img
                  className="carouselImage"
                  src={github}
                  href="https://n335h.github.io/TeslaClone/"
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="githublink"
                />
              </a>
            </div>
          </div>
          <div className="swiper-slide swiper-slide--four">
            <div>
              <h2></h2>
              <p></p>
              <a href="">
                <img
                  className="carouselImage"
                  src={github}
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="githublink"
                />
              </a>
            </div>
          </div>
          <div className="swiper-slide swiper-slide--five">
            <div>
              <h2> </h2>
              <p></p>
              <a href="">
                <img
                  className="carouselImage"
                  src={github}
                  href=""
                  target="_blank"
                  rel="noopener noreferrer"
                  alt="githublink"
                />
              </a>
            </div>
          </div>
        </div>
        <div className="swiper-pagination"></div> 
      </div>
    </div>
  );
};

export default Carousel;
