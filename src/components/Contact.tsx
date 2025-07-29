import React from 'react';
import '../assets/styles/Contact.scss';

function Contact() {
  return (
    <div id="contact">
      <div className="contact-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>
            Got a project waiting to be realized? Let's collaborate and make it happen! Feel free to drop me an email at{' '}
            <a href="mailto:dflorea@uc.cl">dflorea@uc.cl</a>.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;