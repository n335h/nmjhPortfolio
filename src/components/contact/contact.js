import React from 'react';
// import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import './contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
          <h1>get in touch</h1>
          <form>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" />
    
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" />
    
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows="5"></textarea>
    
            <button type="submit">Send Message</button>
          </form>
        </div>
      );
    }
export default Contact;
