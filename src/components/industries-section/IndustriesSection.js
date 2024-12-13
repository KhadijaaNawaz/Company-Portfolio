import React from "react";
import styles from "./industries.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const IndustriesSection = () => {
  const industries = [
    "Agribusiness",
    "Banking",
    "Consumer Markets",
    "Dealerships",
    "Financial Services",
    "Fintech",
    "Insurance",
    "Life Sciences",
    "Metals",
    "Private Equity",
  ];

  return (
    <div className={styles.industriesSection}>
      <h2 className={styles.sectionTitle}>Industries We Serve</h2>
      <p className={styles.sectionDescription}>
        We understand that every industry has its unique financial landscape and
        challenges. Our team of experienced professionals is dedicated to
        providing tailored accounting solutions that meet the specific needs of
        businesses across various sectors.
      </p>
      <div className={styles.industriesGrid}>
        {industries.map((industry, index) => (
          <div className={styles.industryCard} key={index}>
            <span className={styles.industryName}>{industry}</span>
            <span className={styles.arrow}>
              <FontAwesomeIcon icon={faArrowRight} />
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustriesSection;
