import React from "react";
import styles from "./whatwedo.module.css";
import Stats from '../stats/Stats.js';

const WhatWeDo = ({ title, description, services, image, stats }) => {
  return (
    <div className={styles.what_wrapper}>
      <p className={styles.what_description}>{description}</p>
      <div className={styles.what_container}>
        <div className={styles.what_content}>
          <h2 className={styles.what_title}>{title}</h2>
          <p className={styles.what_subDescription}>
            We offer a full range of services designed to provide you with
            accurate  insightful analysis, and strategic advice.
          </p>
          <ul className={styles.what_serviceList}>
            {services.map((service, index) => (
              <li key={index} className={styles.what_serviceItem}>
                <span className={styles.what_serviceIcon}>✔</span> {service}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.what_visual}>
          <img src={image} alt="Service illustration" className={styles.what_image} />
          {/* <div className={styles.statsWrapper}> 
            <Stats stats={stats} />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default WhatWeDo;
