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
		<div className='items-center justify-center pt-0 lg:pt-10 bg-zinc-200 dark:bg-zinc-900 py-5'>
			<h1 className='w-full mb-4 text-center lg:text-left text-xl text-indigo-600 font-bold sm:text-3xl lg:hidden'>
				projects!
			</h1>
			<div className='main flex flex-col-reverse lg:flex-row p-10 pt-0 w-full items-center justify-center'>
				<div className='slideInfo w-full lg:w-2/3 ml-4'>
					<h1 className='w-full mb-4 text-center lg:text-left text-xl text-indigo-600 font-bold sm:text-3xl hidden lg:block'>
						projects!
					</h1>
					<span className='flex items-center w-full'>
						<h2 className='slideTitle dark:text-indigo-600 text-2xl mb-2 font-bold'>
							{currentSlide.title}
						</h2>
						<a
							className='githubLink ml-2' // Add margin for spacing
							href={currentSlide.githubLink}
							target='_blank'
							rel='noopener noreferrer'>
							<svg
								className='h-5 w-6'
								fill='currentColor'
								viewBox='0 0 24 24'
								aria-hidden='true'>
								<path
									fillRule='evenodd'
									d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
									clipRule='evenodd'
								/>
							</svg>
						</a>
					</span>

					<p className='text-zinc-600 w-5/6 text-lg dark:text-zinc-300'>
						{currentSlide.description}
					</p>
					<div className='techStack mt-2'>
						<h3 className='text-lg text-zinc-400 dark:text-zinc-400 font-semibold'>
							tech stack
						</h3>
						<p className='text-zinc-400 text-lg  dark:text-zinc-400'>
							{currentSlide.techStack}
						</p>
					</div>
				</div>
				<div className='swiper w-full lg:w-4/6  max-w-2xl'>
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
			</div>
		</div>
	);
};

export default Carousel;
