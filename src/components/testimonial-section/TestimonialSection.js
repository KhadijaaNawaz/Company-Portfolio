import React from "react";
import styles from "./testimonialsection.module.css"; 

const TestimonialSection = () => {
  return (
    <div className={styles.testimonialSection}>
      <div className={styles.testimonialQuote}>
        <blockquote>
          “The company could have handled the growth without an ERP system, but
          we would have been forced to hire a lot more people.”
        </blockquote>
        <p className={styles.testimonialAuthor}>Ian Larkin</p>
        <p className={styles.testimonialRole}>Controller, CentralReach</p>
      </div>
    </div>
  );
};

export default TestimonialSection;
