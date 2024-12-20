import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';  // Import useLocation
import styles from './accordion.module.css';
import accordionData from './accordionData';  // Default accordion data
import aboutData from './aboutData';  // Import the new data for the '/about' route
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

const Accordion = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const location = useLocation();  // Get the current URL

  // Determine which data to use based on the current route
  const dataToUse = location.pathname === '/about' ? aboutData : accordionData;

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className={styles.accordion_section}>
      {dataToUse.map((item, index) => (
        <div
          key={index}
          className={`${styles.accordionItem} ${openIndex === index ? styles.open : ''}`}
        >
          <div
            className={styles.accordionHeader}
            onClick={() => toggleAccordion(index)}
          >
            <a className={styles.accordionHover}>{item.title}</a>
            <span
              className={`${styles.icon} ${openIndex === index ? styles.rotate : ''}`}
            >
              <FontAwesomeIcon icon={faChevronCircleDown} />
            </span>
          </div>
          <div
            className={`${styles.accordionContent} ${openIndex === index ? styles.show : ''}`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
