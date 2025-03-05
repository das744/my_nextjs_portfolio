'use client';

import { useState } from 'react';
import Link from 'next/link';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';
import styles from './navbar.module.css';

export default function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section>
      {/* Navigation */}
      <nav className={styles.nav}>
        <div className={styles.logo}>LOGO</div>
        <ul className={menuOpen ? styles.active : ''}>
          <li><Link href="#about">About</Link></li>
          <li><Link href="#service">Service</Link></li>
          <li><Link href="#contact">Contact</Link></li>
        </ul>
        <div className={styles.menuToggle} onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </div>
      </nav>

      {/* Hero Content */}
      <div className={styles.heroContent}>
        <h1>Heading Here</h1>
        <button>Get Started</button>
        <div className={styles.tabs}>
          <button>iOS Version</button>
          <button>Android Version</button>
        </div>
      </div>

      {/* Hero Image & Social Icons */}
      <div className={styles.heroImage}>
        <div className={styles.socialIcons}>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaTwitter /></a>
        </div>
      </div>

      {/* Features */}
      <div className={styles.features}>
        <div className={styles.feature}> Feature 1</div>
        <div className={styles.feature}> Feature 2</div>
        <div className={styles.feature}> Feature 3</div>
      </div>
    </section>
  );
}
