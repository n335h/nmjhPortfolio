import React from 'react';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './contact.css';
import Footer from '../../footer/footer';

const Contact = () => {
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
        <form>
          <input
            type="text"
            name="name"
            class="question"
            id="nme"
            required
            autocomplete="off"
          />
          <label for="nme">
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
            id="msg"
            required
            autocomplete="off"
          ></textarea>
          <label for="msg">
            <span>message</span>
          </label>
          <button className="submit" value="Submit!">
            Submit!
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
