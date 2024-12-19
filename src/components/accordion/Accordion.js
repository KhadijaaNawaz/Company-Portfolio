import React, { useState } from 'react';
import styles from './accordion.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronCircleDown } from '@fortawesome/free-solid-svg-icons';

const Accordion = ({ data }) => { // Accept `data` as a prop
  const [openIndex, setOpenIndex] = useState(0);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <div className={styles.accordion_section}>
      {data.map((item, index) => (
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
