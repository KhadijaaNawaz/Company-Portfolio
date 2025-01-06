import React from "react";
import styles from "./challengessection.module.css";

const ChallengesSection = ({
  title,
  image,
  challenges,
  listBackground,
  textColor,
  titleColor,
  marginTop,
}) => {
  return (
    <div className={styles.challenges_section} style={{ marginTop: marginTop }}>
      <h2
        className={styles.challenges_title}
        style={{
          color: titleColor, 
        }}
      >
        {title}
      </h2>
      <div className={styles.challenges_content}>
        <div className={styles.challenges_imageContainer}>
          <img
            src={image}
            alt="Section Illustration"
            className={styles.challenges_image}
          />
        </div>
        <div
          className={styles.challengesList}
          style={{
            background: listBackground,
            color: textColor,
          }}
        >
          {challenges.map((challenge, index) => (
            <div key={index} className={styles.challengeItem}>
              <strong
                style={{
                  color: titleColor,
                }}
              >
                {challenge.title}
              </strong>{" "}
              {challenge.description}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ChallengesSection;
