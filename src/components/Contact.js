import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <h1>Contact</h1>
      <p>If you would like to get in touch with me for any acting opportunities or collaborations, please use the form below. I look forward to hearing from you!</p>
      <form className="contact-form">
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" name="name" placeholder="Your Name" />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" placeholder="Your Email" />
        <label htmlFor="message">Message:</label>
        <textarea id="message" name="message" placeholder="Your Message" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Contact;
