
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

import styles from "./callus.module.css";

const CallUs = ({ color }) => {
  return (
    <div className={styles.footer_item}>
      <div className={styles.footer_icon}>
        <FontAwesomeIcon icon={faPhone} />
      </div>
      <div className={styles.footer_info}>
        <span className={styles.footer_label}>CALL US</span>
        <a
          href="tel:+8001234567"
          className={styles.footer_value}
          style={{ color: color }}
        >
          800 123 4567
        </a>
      </div>
    </div>
  );
};

export default CallUs;
