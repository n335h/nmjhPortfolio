import React from 'react';
import TechStack from '../../components/techStack/techStack';

const About = () => {
	return (
		<section class='relative bg-zinc-200 dark:bg-zinc-900 flex flex-wrap lg:h-screen lg:items-center'>
			<div class='relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2'>
				<img
					alt='Welcome'
					src='https://live.staticflickr.com/65535/53471681289_9c77ccec06_k.jpg'
					class='absolute inset-0 h-full w-full object-cover'
				/>
			</div>
			<div class='w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24 flex items-center justify-center'>
				<div class='mx-auto lg:w-4/6 text-center'>
					<h1 class='text-2xl text-indigo-600 font-bold sm:text-3xl'>
						hello!
					</h1>
					<p class='w-5/6 mx-auto mt-4 text-l dark:text-gray-300 text-zinc-700'>
						I’m a Junior Software Developer
						trained with a focus on Full Stack
						Development.
					</p>
					<p class='w-5/6 mx-auto mt-4 text-zinc-700 dark:text-gray-300'>
						During my young developer journey,
						I’ve primarily focused on React,
						JavaScript, TypeScript,
					</p>
					<p class='w-5/6 mx-auto mt-4 text-zinc-700 dark:text-gray-300'>
						Now I'm all set to bring my creative
						skills and tech know-how together for
						this exciting new
					</p>
					<p class='w-5/6 mx-auto mt-4 text-zinc-700 dark:text-gray-300'>
						Looking forward to making things
						happen!
					</p>
					<a
						href='/contact'
						class='mt-4 border border-4 inline-block rounded-full  border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:border-indigo-600  hover:text-indigo-600 hover:bg-transparent dark:hover:bg-transparent dark:hover:text-indigo-600 focus:outline-none focus:ring active:bg-indigo-500'>
						contact
					</a>
					<TechStack />
				
				</div>
			</div>
		</section>
	);
};

export default About;
