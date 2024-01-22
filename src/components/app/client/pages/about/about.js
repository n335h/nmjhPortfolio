import React from 'react';
import TechStack from '../../components/techStack/techStack';

const About = () => {
	return (
		<section className='relative w-full bg-zinc-200 dark:bg-zinc-900 flex flex-wrap justify-center lg:h-screen lg:items-center'>
			<div className='relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2 overflow-hidden'>
				<img
					alt='Welcome'
					src='https://live.staticflickr.com/65535/53471681289_9c77ccec06_k.jpg'
					className='absolute inset-0 w-full h-full object-cover transition-transform transform scale-100  lg:scale-155'
				/>
			</div>
			<div className='w-full px-4 py-2 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-16 flex items-center justify-center'>
				<div className='mx-auto lg:w-5/6 text-center'>
					<h1 className='text-2xl lg:text-3xl text-indigo-600 m-2 font-bold sm:text-3xl'>
						hello!
					</h1>
					<p className='w-6/6 lg:w-5/6 mx-auto lg:mt-6 mt-5 text-m lg:text-xl  dark:text-gray-300 text-zinc-600'>
						I’m a Junior Software Developer
						trained with a focus on Full Stack
						Development.
					</p>
					<p className='w-6/6 lg:w-5/6  mx-auto lg:mt-6 mt-5 text-m lg:text-xl text-zinc-600 dark:text-gray-300'>
						During my young developer journey,
						I’ve primarily focused on React,
						JavaScript, TypeScript,
					</p>
					{/* <p className='w-6/6 lg:w-5/6  mx-auto lg:mt-6 mt-5 text-m lg:text-xl  text-zinc-600 dark:text-gray-300'>
						Now I'm all set to bring my creative
						skills and tech know-how together for
						this exciting new
					</p> */}
					<p className='w-6/6 lg:w-5/6 mx-auto lg:mt-6 mt-5 text-m lg:text-xl  text-zinc-600 dark:text-gray-300'>
						Looking forward to making things
						happen!
					</p>
					<a
						href='/contact'
						className='drop-shadow-lg lg:mt-6 mt-4 border border-2 text-lg inline-block rounded-full border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:border-indigo-600 hover:text-indigo-600 hover:bg-transparent dark:hover:bg-transparent dark:hover:text-indigo-600 focus:outline-none focus:ring active:bg-indigo-500'>
						contact
					</a>
					<TechStack />
				</div>
			</div>
		</section>
	);
};

export default About;
