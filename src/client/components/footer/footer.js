import React from 'react';

const Footer = () => {
	return (
		<div>
			<footer className='dark bg-zinc-800 dark:bg-zinc-950'>
				<div className='mx-auto max-w-full px-4 pb-4 pt-4 sm:px-6 lg:px-8 lg:pt-4'>
					<div className='text-center'>
						<h2 className='text-3xl font-extrabold text-gray-900 sm:text-5xl'></h2>
					</div>

					<div className='mt-16 border-t border-indigo-400 pt-8 sm:flex sm:items-center sm:justify-between lg:mt-10'>
						<p
							href='#'
							className='text-gray-100 transition hover:opacity-75'>
							{' '}
							nmjhorishny 2024{' '}
						</p>

						<ul className='mt-8 flex justify-center gap-6 sm:mt-0 lg:justify-end text-zinc-600'>
							<li>
								<a
									href='https://github.com/n335h'
									rel='noreferrer'
									target='_blank'
									className='text-zinc-300 transition hover:text-indigo-600'>
									<span className='sr-only'>
										gitHub
									</span>

									<svg
										className='h-6 w-6'
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
							</li>

							<li>
								<a
									href='https://www.linkedin.com/in/nichhorishny/'
									rel='noreferrer'
									target='_blank'
									className='text-zinc-300 transition hover:text-indigo-600'>
									<span className='sr-only'>
										linkedIn
									</span>

									<svg
										className='w-6 h-6'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M15.2 8.80005C16.4731 8.80005 17.694 9.30576 18.5941 10.2059C19.4943 11.1061 20 12.327 20 13.6V19.2H16.8V13.6C16.8 13.1757 16.6315 12.7687 16.3314 12.4687C16.0313 12.1686 15.6244 12 15.2 12C14.7757 12 14.3687 12.1686 14.0687 12.4687C13.7686 12.7687 13.6 13.1757 13.6 13.6V19.2H10.4V13.6C10.4 12.327 10.9057 11.1061 11.8059 10.2059C12.7061 9.30576 13.927 8.80005 15.2 8.80005Z'
											fill='currentColor'
										/>
										<path
											d='M7.2 9.6001H4V19.2001H7.2V9.6001Z'
											fill='currentColor'
										/>
										<path
											d='M5.6 7.2C6.48366 7.2 7.2 6.48366 7.2 5.6C7.2 4.71634 6.48366 4 5.6 4C4.71634 4 4 4.71634 4 5.6C4 6.48366 4.71634 7.2 5.6 7.2Z'
											fill='currentColor'
										/>
									</svg>
								</a>
							</li>
						</ul>
					</div>
				</div>
			</footer>
		</div>
	);
};

export default Footer;
