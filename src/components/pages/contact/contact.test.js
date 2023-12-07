import React from 'react';
import {
	render,
	screen,
	fireEvent,
	waitFor,
} from '@testing-library/react';
import Contact from './contact';
import emailjs from '@emailjs/browser'; // Import the emailjs mock

// Mock the emailjs module
jest.mock('@emailjs/browser');

// Test code
test('renders Contact component and handles form submission', async () => {
	// Render the Contact component
	render(<Contact />);

	// Find form elements
	const nameInput =
		screen.getByLabelText(/name/i);
	const emailInput =
		screen.getByLabelText(/email/i);
	const messageInput =
		screen.getByLabelText(/message/i);
	const submitButton =
		screen.getByText(/submit/i);

	// Simulates user interactions
	fireEvent.change(nameInput, {
		target: { value: 'John Doe' },
	});
	fireEvent.change(emailInput, {
		target: { value: 'john@example.com' },
	});
	fireEvent.change(messageInput, {
		target: { value: 'Test message' },
	});

	// Ensures the form fields have correct values
	expect(nameInput.value).toBe('John Doe');
	expect(emailInput.value).toBe(
		'john@example.com'
	);
	expect(messageInput.value).toBe('Test message');

	// Mock the emailjs.sendForm implementation to simulate form submission behavior
	emailjs.sendForm.mockImplementation(() =>
		Promise.resolve({
			text: 'Email sent successfully',
		})
	);

	// Submit the form
	fireEvent.click(submitButton);

	// Wait for the email sending to complete (without actually sending to emailjs)
	await waitFor(() => {
		expect(emailjs.sendForm).toHaveBeenCalled();
	});

	// Ensure the form fields are reset after submission
	expect(nameInput.value).toBe('');
	expect(emailInput.value).toBe('');
	expect(messageInput.value).toBe('');
});
