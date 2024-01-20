import React, {
	useEffect,
	useState,
} from 'react';
import Swiper, {
	Navigation,
	Pagination,
} from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/css/pagination';
import './carousel.css';

Swiper.use([Navigation, Pagination]);

const Carousel = () => {
	const [activeSlide, setActiveSlide] =
		useState(0);

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
			title: 'doggyStuff - Pair Project',
			description:
				'Side project WIP- DoggyStuff is a personalized dog food subscription service that tailors nutrition to your dogs unique needs. They offer a convenient online platform where you can create a customized meal plan for your furry friend',
			techStack:
				'TypeScript, React, Router, Supabase, Netlify, React Testing Library, Jest',
			githubLink:
				'https://github.com/n335h/doggystuff',
			livesite: 'https://doggystuff.netlify.app/',
		},
		{
			title: 'paprback - Group Project (5)',
			description:
				'SoC 14 Final Group Project - Paprback, the community-focused book swapping app, the outcome of our final project of the School of Code! Paprbacks primary mission is to connect book lovers and revolutionize the way books are shared and cherished. ',
			techStack:
				'JavaScript, CSS, Node JS, Express, Jest, Netlify, Render, ElephantSQL',
			githubLink:
				'https://github.com/n335h/soc_byteclub_paprback',
			livesite: 'https://bcpaprback.netlify.app/',
		},
		{
			title:
				'rock paper scissors - Solo Hackathon',
			description:
				'Friday Hackathon for School of Code originally built with HTML, CSS and vanilla JavaScript with dom manipulation. I have since rebuilt in React and added additional functionality.',
			techStack: 'HTML, CSS, React.js , Node.js',
			githubLink: 'https://github.com/n335h/RPS',
			livesite: 'https://nhrps.netlify.app',
		},
		{
			title: 'open weather API - Solo Project',
			description:
				'Weather app that uses the Open Weather API to fetch weather data for a city that the user inputs, this calls upon two seperate APIs, current weather data and forcast weather data, for the 12 hour forecast data. The app is built with React and uses the Axios library to make the API call.',
			techStack: 'React.js, Axios, CSS, Netlify',
			githubLink:
				'https://github.com/n335h/ReactWeatherApp/tree/main',
			livesite:
				'https://main--nhweatherapi.netlify.app/',
		},
	];

	const currentSlide = slideData[activeSlide];

	return (
		<div className='ProjectContainer bg-gray-200 dark:bg-zinc-900 py-16'>
			<div className='main flex p-10 w-full items-center justify-center'>
				<div className='swiper w-4/6 max-w-2xl'>
					<div className='swiper-wrapper'>
						{slideData.map((slide, index) => (
							<div
								key={index}
								className={`swiper-slide swiper-slide--${
									index + 1
								}`}>
								{/* Your slide content */}
							</div>
						))}
					</div>
					<div className='swiper-pagination'></div>
				</div>

				<div className='slideInfo w-1/2 ml-4'>
					<span className='slideHeader'>
						<h2 className='slideTitle dark:text-indigo-600 text-2xl font-bold'>
							{currentSlide.title}
						</h2>
						<a
							className='githubLink'
							href={currentSlide.githubLink}
							target='_blank'
							rel='noopener noreferrer'>
							<img
								className='carouselImage'
								src={''} // Add your GitHub image source
								alt='githublink'
							/>
						</a>
					</span>
					<p className=' dark:text-zinc-300'>
						{currentSlide.description}
					</p>
					<div className='techStack mt-4'>
						<h3 className='text-lg dark:text-zinc-400 font-semibold'>
							tech stack
						</h3>
						<p className='dark:text-zinc-400'>
							{currentSlide.techStack}
						</p>
					</div>
					<a
						className='liveSite mt-4 text-indigo-600 underline'
						href={currentSlide.livesite}
						target='_blank'
						rel='noopener noreferrer'>
						live site
					</a>
				</div>
			</div>
		</div>
	);
};

export default Carousel;
