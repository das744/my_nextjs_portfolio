import React from "react";
import styles from "./Skills.module.css";
import { skillsData } from "@/components/Skills/skillsData"; // Import skills data

const Skills = () => {
  return (
    <section className={styles.skills} id="skills">
      <div className={styles.heading}>
        <h1>Skills</h1>
      </div>
      <div className={styles.skillsContainer}>
        {skillsData.map((skill) => (
          <div key={skill.id} className={styles.skillBox}>
            <i className={skill.icon}></i>
            <h3>{skill.title}</h3>
            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
