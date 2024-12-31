import React from "react";
import styles from "./industriesCard.module.css"; 

const IndustriesCard = ({ icon, title, description, link, dark }) => {
  return (
    <div className={styles.indus_cardContainer}>
      <div className={styles.indus_card}>
        <a
          href={link}
          className={`${styles.indus_cardLink} ${dark ? styles.indus_cardDarkLink : ""}`}
        >
          <div className={styles.indus_cardDisplay}>
            <i className={styles.indus_cardDisplayIcon}>{icon}</i>
            <h2 className={styles.indus_cardDisplayTitle}>{title}</h2>
          </div>
          <div className={styles.indus_cardHover}>
            <h2 className={styles.indus_cardHoverTitle}>{title}</h2>
            <p className={styles.indus_cardHoverDescription}>{description}</p>
            <p className={styles.indus_cardHoverLink}>Learn More</p>
          </div>
        </a>
        <div className={styles.indus_cardBorder} />
      </div>
    </div>
  );
};

export default IndustriesCard;
