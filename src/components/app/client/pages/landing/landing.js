import React, { useEffect } from 'react';
import 'animate.css'; // Import animate.css library

const LandingPage = () => {
	useEffect(() => {
		// Add the animate.css classes after the component mounts
		const landingSection =
			document.getElementById('landing-section');
		landingSection.classList.add(
			'animate__animated',
			'animate__fadeIn'
		);
	}, []);

	return (
		<section
			id='landing-section'
			className='bg-gray-100 dark:bg-zinc-950 drop-shadow-lg'>
			<div className='mx-auto max-w-full-xl px-4 py-32 lg:flex lg:h-screen lg:items-center'>
				<div className='mx-auto max-w-xl text-center'>
					<h1 className='text-4xl text-zinc-600 dark:text-zinc-300 font-extrabold sm:text-5xl'>
						Nicholas Horishny
						<h2 className='font-bold text-indigo-700 text-2xl lg:text-3xl sm:block'>
							Junior Software Developer
						</h2>
					</h1>

					<div className='mt-2 flex flex-wrap justify-center gap-4'>
						<a
							href='#projects'
							className='mt-4 drop-shadow-lg border border-2 inline-block rounded-full  border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:border-indigo-600  hover:text-indigo-600 hover:bg-transparent dark:hover:bg-transparent dark:hover:text-indigo-600 focus:outline-none focus:ring active:bg-indigo-500'>
							projects
						</a>

						<a
							href='#contact'
							className='mt-4 border drop-shadow-lg border-2 inline-block rounded-full  border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white dark:border-indigo-600 dark:hover:bg-indigo-600 dark:hover:text-gray-300  focus:outline-none focus:ring active:bg-indigo-500'>
							contact
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LandingPage;
