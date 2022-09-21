import React from "react";
import "../Styles/Contact.css";

const Contact = () => {
  return (
    <div className="container">
      <div className="card">
        <form action="">
          <div className="txt_field">
            <input type="text" required />
            <span></span>
            <label>Your Name</label>
          </div>
          <div className="txt_field">
            <input type="text" required />
            <span></span>
            <label>Your Email</label>
          </div>
          <div className="txt_field">
            <textarea
              placeholder="Enter your Message"
              type="text"
              name="message"
              id="message"
              required
            />
          </div>
          <button className="btn" type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
