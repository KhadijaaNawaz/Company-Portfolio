import React from "react";
import PropTypes from "prop-types";
import styles from "./servicestructure.module.css";
import Accordion from "../../components/accordion/Accordion";

const ServiceStructure = ({
  ServiceListComponent,
  HeroComponent,
  WhatWeDoComponent,
  ExellenceComponent,
}) => {
  return (
    <div className={styles.structure_wrapper}>
      <div className={styles.structure_container}>
        <div className={styles.section30}>
          {/* Render the passed components dynamically */}
          {ServiceListComponent}
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
