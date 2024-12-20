import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import styles from './clientrating.module.css';

const ClientRating = () => {
  return (
    <div className={styles.client_container}>
      {/* Icon and Text */}
      <div className={styles.joinUsContainer}>
        <FontAwesomeIcon icon={faUser} className={styles.icon} />
        <span className={styles.boldText}>Join Us</span>
      </div>

      {/* Clients Info */}
      <div className={styles.clientsText}>| 1000+ clients globally!</div>

      {/* Stars */}
      <div className={styles.stars}>
        {Array(5)
          .fill('⭐')
          .map((star, index) => (
            <span key={index}>{star}</span>
          ))}
      </div>
    </div>
  );
};

export default ClientRating;
