import React from "react";
import styles from "./associations.module.css";

const AssociationsSection = ({ title, associations }) => {
  return (
    <div className={styles.associations_section}>
      <h2 className={styles.title}>
        {title}
        <span className={styles.underline}></span>
      </h2>
      <div className={styles.associations_container}>
        {associations.map((association, index) => (
          <div key={index} className={styles.logo_container}>
            <img
              src={association.logo}
              alt={association.name}
              className={styles.logo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default AssociationsSection;
