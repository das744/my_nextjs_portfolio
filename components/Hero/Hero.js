"use client";

import { useState } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section className={styles.hero}>
      <nav className={styles.nav}>
        <div className={styles.logo}>AD Portfolio</div>
        <ul className={menuOpen ? `${styles.navLinks} ${styles.active}` : styles.navLinks}>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Service</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <div className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>
      
      <div className={styles.heroContent}>
        <h1>AD – Crafting Engaging & High-Performance Websites</h1>
        <a href="#contact"> <button>Get Started</button> </a>
        {/* <div className={styles.tabs}>
          <button>iOS Version</button>
          <button>Android Version</button>
        </div> */}
        <div className={styles.buttons}>
          <a href="https://primedesign.com.au/" target="_blank" className={styles.button}>Website</a>
          <a href="https://github.com/das744" target="_blank" className={styles.button}>GitHub</a>
        </div>
      </div>

      <div className={styles.heroImage}>
        <div className={styles.socialIcons}>
        <a href="https://www.facebook.com/PrimeDesign/"><i className="fa-brands fa-facebook-f"></i></a>
<a href="https://www.instagram.com/primedesignweb/"><i className="fa-brands fa-instagram"></i></a>
<a href="https://codepen.io/ajantad"><i className="fa-brands fa-codepen"></i></a>

        </div>
      </div>

      <div className={styles.features}>
        <div className={styles.feature}><i class="fas fa-check-circle"></i> Custom Designs</div>
        <div className={styles.feature}><i class="fas fa-check-circle"></i>  User Focused</div>
        <div className={styles.feature}>  <i class="fas fa-check-circle"></i> High Performance</div>
      </div>
    </section>
  );
};

export default Hero;
