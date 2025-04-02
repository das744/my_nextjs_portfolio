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
            <a href="https://codepen.io/ajantad" target="_blank">CodePen</a>
            <a href="https://github.com/das744" target="_blank">GitHub</a>
            <a href="https://linkedin.com/in/ajanta" target="_blank">LinkedIn</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;



// import styles from '@/components/Contact/Contact.module.css';

// const contactDetails = [
//   { icon: 'fa-phone', info: '+123 456 7890' },
//   { icon: 'fa-envelope', info: 'email@example.com' },
//   { icon: 'fa-map-marker', info: '123 Main Street, City, Australia' }
// ];

// const socialIcons = [
//   { icon: 'fa-facebook-f', link: 'https://facebook.com' },
//   { icon: 'fa-twitter', link: 'https://twitter.com' },
//   { icon: 'fa-instagram', link: 'https://instagram.com' },
//   { icon: 'fa-linkedin', link: 'https://linkedin.com' }
// ];

// const Contact = () => {
//   return (
//     <section className={styles.contactSection} id="contact">
//       <div className={styles.contactDetails}>
//         <ul>
//           {contactDetails.map((detail, index) => (
//             <li key={index}>
//               <i className={`fa ${detail.icon}`}></i>
//               <p>{detail.info}</p>
//             </li>
//           ))}
//         </ul>
//         <div className={styles.socialIcons}>
//           {socialIcons.map((social, index) => (
//             <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
//               <i className={`fab ${social.icon}`}></i>
//             </a>
//           ))}
//         </div>
//       </div>
//       <div className={styles.contactFormContainer}>
//         <form className={styles.contactForm}>
//           <h1>
//             <span>C</span>ontact <span>Us</span>
//           </h1>
//           <input type="text" placeholder="Your Name" required />
//           <input type="email" placeholder="Your Email" required />
//           <textarea placeholder="Your Message" required></textarea>
//           <button type="submit">Send Message</button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
