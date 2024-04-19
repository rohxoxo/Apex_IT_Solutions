import React from "react";
import "./contact.scss";

const ContactUs = () => {
  return (
    <div className="cont">
    <div className="contact-us">
      <h2>Contact Us</h2>
      <form
        action="https://formsubmit.co/920d1e0fe9cf978e24fb961e9ddd98f6"
        method="POST"
      >
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="5"></textarea>
        </div>
        <button type="submit">Send Message</button>
      </form>
    </div>
    </div>
  );
};

export default ContactUs;
