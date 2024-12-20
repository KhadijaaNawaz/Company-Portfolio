import React from "react";
import styles from "./contentcard.module.css";

const ContentCard = ({ title, description }) => {
  return (
    <div className={styles.contentCardContainer}>
      <div className={styles.contentCardContent}>
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ContentCard;
