import React from 'react';

const LandingPage = () => {
	return (
		<section class='bg-gray-100'>
			<div class='mx-auto max-w-full-xl px-4 py-32 lg:flex lg:h-screen lg:items-center dark:bg-zinc-950'>
				<div class='mx-auto max-w-xl text-center'>
					<h1 class='text-3xl text-zinc-600 dark:text-zinc-300 font-extrabold sm:text-5xl'>
						Nicholas Horishny
						<h2 class='font-bold text-indigo-700 text-2xl sm:block'>
							{' '}
							Junior Software Developer{' '}
						</h2>
					</h1>

					<div class='mt-2 flex flex-wrap justify-center gap-4'>
						<a
							href='#projects'
							class='mt-4 border border-4 inline-block rounded-full  border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:border-indigo-600  hover:text-indigo-600 hover:bg-transparent dark:hover:bg-transparent dark:hover:text-indigo-600 focus:outline-none focus:ring active:bg-indigo-500'>
							projects
						</a>

						<a
							href='#contact'
							class='mt-4 border border-4 inline-block rounded-full  border-indigo-600 px-12 py-3 text-sm font-medium text-indigo-600 hover:bg-indigo-600 hover:text-white dark:border-indigo-600 dark:hover:bg-indigo-600 dark:hover:text-gray-300  focus:outline-none focus:ring active:bg-indigo-500'>
							contact
						</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default LandingPage;
