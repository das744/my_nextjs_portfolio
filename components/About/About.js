import React from 'react'
import styles from './About.module.css'

const About = () => {
  return (
    <div>

<section className={styles.about} id="about">
      <div className={styles.aboutHeading}>
        <h1>About</h1>
      </div>
      <div className={styles.aboutContainer}>
        <div className={styles.aboutImg}></div>
        <div className={styles.aboutContent}>
          <h1>Who I am?</h1>
          <p>
          I am a passionate web developer with a focus on creating beautiful, functional, and user-friendly websites. I believe that a great website not only looks good but also functions smoothly and efficiently. That's why I'm dedicated to creating websites that provide an optimal user experience.
          </p>
          <a href="#contact"><button>Contact Me</button></a>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About