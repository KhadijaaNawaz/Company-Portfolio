// Mail.js
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

import styles from "./mail.module.css";

const Mail = ({ color }) => {
  return (
    <div className={styles.footer_item}>
      <div className={styles.footer_icon}>
        <FontAwesomeIcon icon={faEnvelope} />
      </div>
      <div className={styles.footer_info}>
        <span className={styles.footer_label}>SEND E-MAIL</span>
        <a
          href="mailto:you@domain.com"
          className={styles.footer_value}
          style={{ color: color }} 
        >
          you@domain.com
        </a>
      </div>
    </div>
  );
};

export default Mail;
