import React from "react";
import { Link, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import services from "../../data/services.json";
import styles from "./serviceslist.module.css";


const ServicesList = () => {
  const location = useLocation(); 

  return (
    <div className={styles.servicesContainer}>
      <h3 className={styles.servicesTitle}>Our Services</h3>
      <ul className={styles.servicesList}>
        {services.services.map((service, index) => (
          <li
            key={index}
            className={`${styles.serviceItem} ${
              location.pathname === service.link ? styles.active : ""
            }`}
          >
            <Link to={service.link} className={styles.serviceLink}>
              <span className={styles.serviceText}>{service.heading}</span>
              <FontAwesomeIcon
                icon={faArrowRight}
                className={
                  location.pathname === service.link
                    ? styles.activeIcon
                    : styles.chevronIcon
                }
              />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ServicesList;
