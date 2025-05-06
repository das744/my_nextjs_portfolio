"use client";

import { useState } from "react";
import styles from './Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send the message. Please try again.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ An error occurred. Please try again later.");
    }
  };

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.contactHeading}>
        <h1>Contact</h1>
      </div>
      <div className={styles.contactContainer}>
        {/* Left Side */}
        <div className={styles.contactLeft}>
          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <h2>Ready for Your Next Project?</h2>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className={styles.button}>Send Message</button>
          </form>
          {status && <p className={styles.statusMessage}>{status}</p>}
        </div>

        {/* Right Side */}
        <div className={styles.contactRight}>
          <h2>Get in Touch</h2>
          <p>
            <i className="fas fa-location-dot"></i> Mernda, Melbourne, VIC
          </p>
          <p>
            <i className="fas fa-phone"></i>
            <a href="tel:+610430224546">+61 0430224546</a>
          </p>
          <p>
            <i className="fas fa-envelope"></i>
            <a href="mailto:ajanta744@gmail.com">ajanta744@gmail.com</a>
          </p>
          <div className={styles.socialMedia}>
            <a href="https://www.linkedin.com/in/4546/" target="_blank">CodePen</a>
            <a href="https://github.com/das744" target="_blank">GitHub</a>
            <a href="https://linkedin.com/in/ajanta" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

