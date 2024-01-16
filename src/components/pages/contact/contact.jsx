import React from 'react';
import './contact.css';
import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
	const [messageSent, setMessageSent] =
		useState(false);
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();

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
					console.log('success');
					form.current.reset();
					setMessageSent(true); // Set the state to true when message is successfully sent
					// After a few seconds, reset the message status to false
					setTimeout(
						() => setMessageSent(false),
						5000
					);
				},
				(error) => {
					console.log(error.text);
				}
			);
	};
	return (
		<div className='contact-container'>
			<div className='contact-page'>
				<br />
				<br />
				<br />
				<br />
				<h1>get in touch!</h1>
				<br />

				<p>
					Feel free to contact me using the form
					below! Looking forward to hearing from
					you and creating something awesome
					together!
				</p>
				<form
					ref={form}
					onSubmit={sendEmail}>
					<input
						type='text'
						name='user_name'
						className='question'
						id='name'
						required
						autoComplete='off'
					/>
					<label htmlFor='name'>
						<span>name</span>
					</label>
					<input
						type='email'
						name='user_email'
						className='question'
						id='email'
						required
						autoComplete='off'
					/>
					<label htmlFor='email'>
						<span>email</span>
					</label>
					<textarea
						name='message'
						rows='2'
						className='question'
						id='message'
						required
						autoComplete='off'></textarea>
					<label htmlFor='message'>
						<span>message</span>
					</label>
					<button
						className='submit'
						value='Submit!'
						onClick={sendEmail}>
						submit!
					</button>
				</form>
				{messageSent && (
					<div className='overlay'>
						Message sent!
					</div>
				)}
			</div>
			y{' '}
		</div>
	);
};
export default Contact;
