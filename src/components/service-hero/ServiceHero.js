import React from "react";
import styles from "./hero.module.css"; 

const ServiceHero = () => {
  return (
    <section className={styles.servicesSection}>
      <div className={styles.servicesContainer}>
        {/* Left Section */}
        <div className={styles.servicesText}>
          <button className={styles.servicesBtn}>WHAT WE DO</button>
          <h1 className={styles.servicesTitle}>Services</h1>
          <p className={styles.servicesBreadcrumb}>
            <span>HOME</span>{" "}
            <span className={styles.breadcrumbArrow}> &gt; </span>
            <span className={styles.breadcrumbActive}>SERVICES</span>
          </p>
        </div>
        
        <div className={styles.servicesImage}>
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
