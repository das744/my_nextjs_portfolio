import React from 'react'
import styles from './Portfolio.module.css'
import portfolioData from "./portfolioData";

const Portfolio = () => {
  return (
    <section className={styles.portfolio} id="portfolio">
    <div className={styles.heading}>
      <h1>Portfolio</h1>
    </div>
    <div className={styles.portfolioContainer}>
      {portfolioData.map((item) => (
        <div key={item.id} className={styles.portfolioBox}>
          <img src={item.image} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div className={styles.buttons}>
              <a href={item.website} target="_blank" rel="noopener noreferrer">
                <button className={styles.websiteButton}>Visit Website</button>
              </a>
              <a href={item.github} target="_blank" rel="noopener noreferrer">
                <button className={styles.githubButton}>GitHub Repo</button>
              </a>
            </div>
        </div>
      ))}
    </div>
  </section>

  )
}

export default Portfolio