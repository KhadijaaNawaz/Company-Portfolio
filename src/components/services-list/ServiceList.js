import React from "react";
import { Link, useLocation } from "react-router-dom";
import styles from "./serviceslist.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ServicesList = () => {
  const location = useLocation(); 

  const services = [
    { title: "Accounting", link: "/accounting" },
    { title: "Tax Planning", link: "/tax-planning" },
    { title: "Business Advisory", link: "/services/business-advisory" },
    { title: "Payroll Management", link: "/services/payroll-management" },
    { title: "Global Accounting", link: "/services/global-accounting" },
    { title: "Admin Services", link: "/services/admin-services" },
  ];

  return (
    <div className={styles.servicesContainer}>
      <h3 className={styles.servicesTitle}>Our Services</h3>
      <ul className={styles.servicesList}>
        {services.map((service, index) => (
          <li
            key={index}
            className={`${styles.serviceItem} ${
              location.pathname === service.link ? styles.active : ""
            }`}
          >
            <Link to={service.link} className={styles.serviceLink}>
              <span className={styles.serviceText}>{service.title}</span>
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
