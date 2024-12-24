import React, { useState } from "react";
import styles from "./FeatureCard.module.css";
import button from '../../pages/home/home.module.css';

const FeatureCard = ({
  sidebarTitle,
  sidebarDescription,
  title,
  description,
  image,
  items,
  selectedItem,
  onFeatureClick,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={styles.feature_wrapper}>
      <h2>{sidebarTitle}</h2>
      <p>{sidebarDescription}</p>

      <div className={styles.featureCard}>
        <div className={styles.featureSidebar}>
          <ul>
            {items.map((item, index) => (
              <li
                key={index}
                className={item === selectedItem ? styles.active : ""}
                onClick={() => onFeatureClick(item)}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles.featureContent}>
          <h3>{title}</h3>
          <p>{description}</p>
          <button className={button.contact_btn}>Learn More</button>
          <img
            src={image}
            alt={`${title} visual`} // Corrected syntax for alt
            onClick={toggleModal} 
            className={styles.clickableImage} 
          />
        </div>
      </div>

     
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={toggleModal}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <img src={image} alt={`${title} visual in modal`} /> {/* Corrected syntax for alt */}
            <button className={styles.closeButton} onClick={toggleModal}>
              ✖
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FeatureCard;
