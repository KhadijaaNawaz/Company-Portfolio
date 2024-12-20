
import React from 'react';
import styles from './stats.module.css'; 

const Stats = ({ stats }) => {
  return (
      <div className={styles.what_stats}>
        <h1 className={styles.what_statsValue}>
          {stats.value} <img src="/assets/IncreaseIcon.svg" className={styles.what_icon} alt="Increase Icon" />
        </h1>
        <p className={styles.what_statsDescription}>
          {stats.text1}
        </p>
        <p className={styles.what_statsDescription2}>{stats.text2}</p>
      </div>
  );
};

export default Stats;
