import React from 'react';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './contact.css';
import Footer from '../../footer/footer';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
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
        },
        (error) => {
          console.log(error.text);
        }
      );
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
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            class="question"
            id="name"
            required
            autocomplete="off"
          />
          <label for="name">
            <span>name</span>
          </label>
          <input
            type="email"
            name="user_email"
            class="question"
            id="nme"
            required
            autocomplete="off"
          />
          <label for="email">
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
          <button
            className="submit"
            value="Submit!"
            onClick={sendEmail}
          >
            Submit!
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
