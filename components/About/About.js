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
          <h1>About Me</h1>
          <p>
          I’m a Full Stack Web Developer dedicated to building visually stunning and highly functional websites.
           With a strong focus on user experience, performance, and responsiveness,
           I create custom solutions designed to meet business needs. My expertise lies in blending 
           creativity with technology to deliver smooth and impactful digital experiences.
          </p>
          <a href="#contact"><button>Contact Me</button></a>
        </div>
      </div>
    </section>
    </div>
  )
}

export default About