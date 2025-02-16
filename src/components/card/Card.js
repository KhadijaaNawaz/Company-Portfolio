import React from "react";
import { Link } from "react-router-dom";

import styles from "./card.module.css";

const Card = ({ eventData }) => {
  const { title, description, imageUrl, link } = eventData;

  const truncateText = (text, wordLimit) => {
    const words = text.split(" ");
    return words.length > wordLimit ? words.slice(0, wordLimit).join(" ") + "..." : text;
  };

  return (
    <article className={styles.eventCard_card}>
      <div
        className={styles.eventCard_thumb}
        style={{ backgroundImage: `url(${imageUrl})` }}
      ></div>
      <div className={styles.eventCard_infos}>
        <h2 className={styles.eventCard_title}>{title}</h2>
        <p className={styles.eventCard_txt}>{truncateText(description, 6)}</p> 
        <h3 >
          <Link to={link} className={styles.eventCard_details}>Learn more</Link>
        </h3>
      </div>
    </article>
  );
};

export default Card;