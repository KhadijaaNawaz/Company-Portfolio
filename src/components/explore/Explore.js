import React from "react";
import styles from "./explore.module.css";

const Explore = () => {
  return (
    <div className={styles.exploreContainer}>
      <div className={styles.exploreGradient}>
        <span className={styles.exploreLabel}>EXPLORE FURTHER:</span>
      </div>
      <div className={styles.exploreLinks}>
        <a href="#process" className={styles.exploreLink}>
          Learn About Our Process <span>&#8594;</span>
        </a>
        <div className={styles.divider}></div>
        <a href="#consultation" className={styles.exploreLink}>
          Get Free Consultation <span>&#8594;</span>
        </a>
      </div>
    </div>
  );
};

export default Explore;
