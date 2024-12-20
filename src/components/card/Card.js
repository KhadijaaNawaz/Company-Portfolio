import React from "react";
import styles from "./card.module.css";

const Card = ({ eventData }) => {
  const { title, description, imageUrl } = eventData;

  return (
    <article className={styles.eventCard_card}>
      <div
        className={styles.eventCard_thumb}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={styles.eventCard_infos}>
        <h2 className={styles.eventCard_title}>{title}</h2>
        <p className={styles.eventCard_txt}>{description}</p>
        <h3 className={styles.eventCard_details}>Learn more</h3>
      </div>
    </article>
  );
};

export default Card;
