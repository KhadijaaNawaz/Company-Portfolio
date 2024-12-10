import React, { useState } from 'react';
import styles from './accordion.module.css';
import accordionData from './accordionData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

const Accordion = () => {
  // Set the first accordion item open by default
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className={styles.accordion_section}>
      {accordionData.map((item, index) => (
        <div
          key={index}
          className={`${styles.accordionItem} ${
            openIndex === index ? styles.open : ''
          }`}
        >
          <div
            className={styles.accordionHeader}
            onClick={() => toggleAccordion(index)}
          >
            {item.title}
            <span
              className={`${styles.icon} ${
                openIndex === index ? styles.rotate : ''
              }`}
            >
              <FontAwesomeIcon icon={faChevronCircleDown} />
            </span>
          </div>
          <div
            className={`${styles.accordionContent} ${
              openIndex === index ? styles.show : ''
            }`}
          >
            {item.content}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
