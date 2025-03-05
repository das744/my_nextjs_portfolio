"use client";

import { useState } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className={styles.hero}>
      <nav className={styles.nav}>
        <div className={styles.logo}>LOGO</div>
        <ul className={menuOpen ? `${styles.navLinks} ${styles.active}` : styles.navLinks}>
          <li><a href="#about">About</a></li>
          <li><a href="#service">Service</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>
      
      <div className={styles.heroContent}>
        <h1>Heading Here</h1>
        <button>Get Started</button>
        <div className={styles.tabs}>
          <button>iOS Version</button>
          <button>Android Version</button>
        </div>
        <div className={styles.buttons}>
          <a href="https://yourwebsite.com" target="_blank" className={styles.button}>Website</a>
          <a href="https://github.com/yourrepo" target="_blank" className={styles.button}>GitHub</a>
        </div>
      </div>

      <div className={styles.heroImage}>
        <div className={styles.socialIcons}>
        <a href="#"><i className="fa-brands fa-facebook-f"></i></a>
<a href="#"><i className="fa-brands fa-instagram"></i></a>
<a href="#"><i className="fa-brands fa-twitter"></i></a>

        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.feature}> Feature 1</div>
        <div className={styles.feature}> Feature 2</div>
        <div className={styles.feature}> Feature 3</div>
      </div>
    </section>
  );
};

export default Hero;
