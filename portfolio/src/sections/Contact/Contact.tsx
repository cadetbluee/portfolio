import React from "react";
import "./Contact.css";

const links = [
  { label: "GitHub", href: "https://github.com/cadetbluee" },
  { label: "Blog", href: "https://cadetbluee.github.io/blog" },
  { label: "Email", href: "mailto:cadetbluee@icloud.com" },
];

const Contact: React.FC = () => {
  return (
    <section id="contact" className="contact">
      <h2 className="contact-title">Contact</h2>
      <div className="contact-links">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            className="contact-link"
            {...(link.href.startsWith("http")
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {link.label}
          </a>
        ))}
      </div>
    </section>
  );
};

export default Contact;
