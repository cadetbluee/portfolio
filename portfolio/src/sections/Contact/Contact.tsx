import React from "react";
import "./Contact.css";

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <a href="mailto:cadetbluee@icloud.com" className="contact-link">
        Email Me
      </a>
    </section>
  );
};

export default Contact;
