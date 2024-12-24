import React from "react";
import styles from "./challengessection.module.css";

const ChallengesSection = ({ title, image, challenges }) => {
  return (
    <div className={styles.challenges_section}>
      <h2 className={styles.challenges_title}>{title}</h2>
      <div className={styles.challenges_content}>
        <div className={styles.challenges_imageContainer}>
          <img src={image} alt="Section Illustration" className={styles.challenges_image} />
        </div>
        <div className={styles.challengesList}>
          {challenges.map((challenge, index) => (
            <div key={index} className={styles.challengeItem}>
              <strong>{challenge.title}</strong> {challenge.description}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChallengesSection;
