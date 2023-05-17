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
        <h1>get in touch</h1>

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
          <input type="submit" value="Submit!" />
        </form>
      </div>
      <Footer />
    </div>
  );
};
export default Contact;
