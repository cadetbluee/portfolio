import React from 'react';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>Feel free to reach out for collaborations or inquiries!</p>
      <a href="mailto:your-email@example.com" className="contact-link">Email Me</a>
    </section>
  );
};

export default Contact;
