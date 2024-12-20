import React from "react";
import styles from "./simplenav.module.css";

const SimpleNav = () => {
  const navItems = [
    "ERP",
    "Accounting Software",
    "Global Business Management",
    "CRM",
    "HR",
    "Field Service",
    "PSA",
    "Connectors",
  ];

  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        {navItems.map((item, index) => (
          <li key={index} className={styles.navItem}>
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SimpleNav;
