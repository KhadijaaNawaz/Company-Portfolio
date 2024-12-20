import React from "react";
import styles from "./simplenav.module.css";

const SimpleNav = () => {
  const navItems = [
    { name: "ERP", link: "#erpSectionWrapper" },
    { name: "CRM", link: "#crmSectionWrapper" },
    { name: "Accounting Software", link: "#accountingSection" },
    { name: "Global Business Management", link: "#globalSection" },
    { name: "HR", link: "#hrSection" },
    { name: "Field Service", link: "#fieldServiceSection" },
    { name: "PSA", link: "#psaSection" },
    { name: "Connectors", link: "#connectorsSection" },
  ];

  const smoothScrollTo = (link) => {
    const targetElement = document.querySelector(link);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className={styles.simple_navbar}>
      <ul className={styles.simple_navList}>
        {navItems.map((item, index) => (
          <li key={index} className={styles.simple_navItem}>
            <a
              href={item.link}
              onClick={(e) => {
                e.preventDefault();
                smoothScrollTo(item.link);
              }}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default SimpleNav;
