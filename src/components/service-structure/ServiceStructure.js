import React from "react";
import PropTypes from "prop-types";
import styles from "./servicestructure.module.css";
import Accordion from "../../components/accordion/Accordion";
import CallUs from "../../components/call-us/CallUs.js";
import Mail from "../../components/mail/Mail.js";

const ServiceStructure = ({
  ServiceListComponent,
  HeroComponent,
  WhatWeDoComponent,
  ExellenceComponent,
  ProfileCard,
  
}) => {
  const dynamicColor = "#FFFFFF"; 
  return (
    <div className={styles.structure_wrapper}>
      <div className={styles.structure_container}>
        <div className={styles.section30}>
          {ServiceListComponent}
          <div className={styles.structure_intro}>
            {ProfileCard}
            <CallUs color={dynamicColor} />
            <Mail color={dynamicColor} />
          </div>
        </div>
        <div className={styles.section70}>
          {HeroComponent}
          {WhatWeDoComponent}
          {ExellenceComponent}
          <div className={styles.structure_accordian}>
            <h2>Why Choose Us?</h2>
            <div className={styles.structure_accordian_width}>
            <Accordion  /></div>
          </div>
        </div>
      </div>
    </div>
  );
};

ServiceStructure.propTypes = {
  ServiceListComponent: PropTypes.element.isRequired,
  HeroComponent: PropTypes.element.isRequired,
  WhatWeDoComponent: PropTypes.element.isRequired,
  ExellenceComponent: PropTypes.element.isRequired,
};

export default ServiceStructure;
