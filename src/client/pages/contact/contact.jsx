import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const [messageSent, setMessageSent] =
		useState(false);
	const [loading, setLoading] = useState(false);

	const form = useRef();

	const openResumeInNewWindow = () => {
		const pdfUrl = '/resume.pdf'; // Update the path to point directly to the PDF file
		window.open(pdfUrl, '_blank');
	};

	const sendEmail = (e) => {
		e.preventDefault();

		setLoading(true);

		emailjs
			.sendForm(
				'service_pkd2rcg',
				'template_dd9hxhc',
				form.current,
				'5zGhg0yEoqXwH93ki'
			)
			.then(
				(result) => {
					console.log(result.text);
					console.log(form.current);
					form.current.reset();
					setMessageSent(true);
					setTimeout(
						() => setMessageSent(false),
						1000
					); // Change duration as needed
				},
				(error) => {
					console.log(error.text);
					setMessageSent(false);
				}
			);
	};

	return (
		<section className='bg-white h-1/3 w-full bg-zinc-100 dark:bg-zinc-800'>
			<div className='container items-center px-6 py-12 mx-auto'>
				<div className='lg:flex lg:items-center lg:-mx-6'>
					<div className='text-center flex flex-col items-center justify-center h-full lg:w-1/2 lg:mx-6 mx-auto '>
						<h1 className=' lg:mb-2 text-indigo-600 font-bold text-2xl lg:text-3xl'>
							get in touch!
						</h1>
						<div className='mt-5 text-center items-center justify-center flex flex-row w-1/2'>
							<div className='flex flex-col items-center justify-center lg:mt-8 mt-4'>
								<a
									className='mx-1.5 dark:hover:text-indigo-400 text-gray-400 transition-colors duration-300 transform hover:text-indigo-600'
									href='https://www.linkedin.com/in/nichhorishny'
									target='_blank'
									rel='noopener noreferrer'>
									<svg
										className='w-8 h-8'
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
									/nichhorishny
								</a>
							</div>
							<div className='text-center flex justify-center w-full lg:mt-8 mt-4'>
								<a
									className='mx-1.5 dark:hover:text-indigo-600 text-gray-400 transition-colors duration-300 transform hover:text-indigo-600'
									href='https://github.com/n335h'
									target='_blank'
									rel='noopener noreferrer'>
									<svg
										className='h-8 w-8'
										fill='currentColor'
										viewBox='0 0 24 24'
										aria-hidden='true'>
										<path
											fillRule='evenodd'
											d='M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z'
											clipRule='evenodd'
										/>
									</svg>
									<p>/n335h</p>
								</a>
							</div>
							<div className='text-center flex items-center justify-center w-full lg:mt-8 mt-4'>
								<a
									className='mx-1.5 dark:hover:text-indigo-600 text-gray-400 transition-colors duration-300 transform hover:text-indigo-600'
									href='#'
									onClick={openResumeInNewWindow}>
									<svg
										className='w-8 h-8'
										viewBox='0 0 24 24'
										fill='none'
										xmlns='http://www.w3.org/2000/svg'>
										<path
											d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 16c-3.313 0-6-2.687-6-6s2.687-6 6-6 6 2.687 6 6-2.687 6-6 6zm-1-10h2v4h-2zm1 4.906c-.547 0-1-.453-1-1s.453-1 1-1 1 .453 1 1-.453 1-1 1z'
											fill='currentColor'
										/>
									</svg>
									<span className='ml-1'>
										resume
									</span>
								</a>
							</div>
						</div>

						<div className='text-center mt-2 space-y-8 lg:mt-8'>
							<p className='text-zinc-600 w-full dark:text-gray-300'>
								Feel free to contact me using the
								form or find me through one of the
								socials above!
							</p>
						</div>
					</div>

					<div className='mt-5 lg:mt-8 lg:w-1/2 lg:mx-6'>
						<div className='w-full px-8 py-4 mx-auto overflow-hidden bg-white rounded-lg shadow-2xl dark:bg-zinc-900 lg:max-w-xl shadow-gray-300/50 dark:shadow-black/50'>
							<form
								action='/send-email'
								method='post'
								className='mt-2 lg:mt-6'
								ref={form}
								onSubmit={sendEmail}>
								<div className='flex-1'>
									<label
										htmlFor='name'
										className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
										Full Name
									</label>
									<input
										title='name'
										type='text'
										name='name' // Add this line with the correct name attribute
										placeholder='Name'
										className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-200 dark:text-gray-300 dark:border-gray-700 focus:border-indigo-400 dark:focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40'
									/>
								</div>

								<div className='flex-1 mt-6'>
									<label
										htmlFor='email'
										className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
										Email address
									</label>
									<input
										title='email'
										type='email'
										name='email' // Add this line with the correct name attribute
										placeholder='Email'
										className='block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-200 dark:text-gray-300 dark:border-gray-700 focus:border-indigo-400 dark:focus:border-indigo-400 focus:ring-indigo-400 focus:outline-none focus:ring focus:ring-opacity-40'
									/>
								</div>

								<div className='w-full mt-6'>
									<label
										htmlFor='userMessage'
										className='block mb-2 text-sm text-gray-600 dark:text-gray-200'>
										Message
									</label>
									<textarea
										title='userMessage'
										type='text'
										name='message' // Add this line with the correct name attribute
										className='block w-full h-32 px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md md:h-48 dark:placeholder-gray-600 dark:bg-gray-200 dark:text-gray-300 '
										placeholder='Message'></textarea>
								</div>

								<button
									type='submit'
									className='mt-4 drop-shadow-lg border border-2 inline-block rounded-full  border-indigo-600 bg-indigo-600 px-12 py-3 text-sm font-medium text-white hover:border-indigo-600  hover:text-indigo-600 hover:bg-transparent dark:hover:bg-transparent dark:hover:text-indigo-600 focus:outline-none focus:ring active:bg-indigo-500'>
									submit
								</button>
							</form>
						</div>
					</div>

					{messageSent && (
						<div className='fixed inset-0 flex items-center justify-center'>
							<div className='bg-white p-4 rounded-lg shadow-md'>
								<p className='text-green-500'>
									Email sent successfully!
								</p>
							</div>
						</div>
					)}
				</div>
			</div>
		</section>
	);
};

export default Contact;
