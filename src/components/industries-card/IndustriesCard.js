import React from "react";
import styles from "./industriesCard.module.css";

const IndustriesCard = ({ icon, logo, title, description, link, dark, backgroundColor, textColor }) => {
  return (
    <div className={styles.indus_cardContainer} >
      <div className={styles.indus_card} >
        <a
          href={link}
          className={`${styles.indus_cardLink} ${dark ? styles.indus_cardDarkLink : ""}`}
          style={{ backgroundColor: backgroundColor ,color: textColor }} 
        >
          <div className={styles.indus_cardDisplay} >
            {icon ? (
              <i className={styles.indus_cardDisplayIcon}>{icon}</i>
            ) : (
              <img src={logo} alt={title} className={styles.indus_cardDisplayLogo} />
            )}
            <h2 className={styles.indus_cardDisplayTitle}>{title}</h2>
          </div>
          <div className={styles.indus_cardHover}>
            <h2 className={styles.indus_cardHoverTitle} style={{ color: textColor }}>{title}</h2>
            <p className={styles.indus_cardHoverDescription} style={{ color: textColor }}>{description}</p>
            <p className={styles.indus_cardHoverLink} style={{ color: textColor }}>Learn More</p>
          </div>
        </a>
        <div className={styles.indus_cardBorder} />
      </div>
    </div>
  );
};

export default IndustriesCard;
