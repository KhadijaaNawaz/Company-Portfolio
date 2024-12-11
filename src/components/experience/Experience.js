import React from "react";
import styles from "./experience.module.css"; // Import your CSS module


const Experience = ({ markText, description }) => {
  return (
    <div className={styles.experience_flex}>
    <p className={styles.experience_block}>
      <mark className={styles.experience_mark}>30+</mark>
    </p>
    <span className={styles.experience_text}>
      Years of Experience
    </span>
  </div>
  );
};

export default Experience;
