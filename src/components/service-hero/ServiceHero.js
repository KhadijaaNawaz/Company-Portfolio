import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import styles from "./hero.module.css";

const ServiceHero = ({ buttonText, title, breadcrumbs }) => {
  const location = useLocation(); // Get current location
  const isIndustriesPage = location.pathname === "/industries"; // Check if URL matches

  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        {/* Left Section */}
        <div className={styles.servicesText}>
          {/* Conditionally render button */}
          {!isIndustriesPage && <button className={styles.servicesBtn}>{buttonText}</button>}
          <h1 className={styles.servicesTitle}>{title}</h1>
          {isIndustriesPage && <p >{buttonText}</p>}
          <p className={styles.servicesBreadcrumb}>
            {breadcrumbs.map((crumb, index) => (
              <span key={index} className={crumb.isActive ? styles.breadcrumbActive : ""}>
                {crumb.text}
                {index < breadcrumbs.length - 1 && (
                  <span className={styles.breadcrumbArrow}> &gt; </span>
                )}
              </span>
            ))}
          </p>
        </div>

        <div className={styles.servicesImage}>
          {/* Dynamic Image */}
          {/* <img
            src="https://via.placeholder.com/300" 
            alt="Person working"
            className={styles.servicesImg}
          /> */}
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
