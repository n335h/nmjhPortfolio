import React from 'react';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './contact.css';
import Footer from '../../footer/footer';
import { useState } from 'react';

const Contact = () => {
  const [status, setStatus] = useState('Submit');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch('http://localhost:5000/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(details),
    });
    setStatus('Submit');
    let result = await response.json();
    alert(result.status);
  };
  return (
    <div className="contact-container">
      <div className="contact-page">
        <br />
        <br />
        <br />
        <br />
        <h1>get in touch!</h1>
        <br />

        <p>
          Don't hesitate to drop me a line using the form below! Let's
          connect and turn your ideas into reality. Looking forward to
          hearing from you and creating something awesome together!
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            class="question"
            id="name"
            required
            autocomplete="off"
          />
          <label for="name">
            <span>name</span>
          </label>
          <input
            type="text"
            name="email"
            class="question"
            id="nme"
            required
            autocomplete="off"
          />
          <label for="nme">
            <span>email</span>
          </label>
          <textarea
            name="message"
            rows="2"
            class="question"
            id="message"
            required
            autocomplete="off"
          ></textarea>
          <label for="message">
            <span>message</span>
          </label>
          <button className="submit" value="Submit!">
            {status}
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
