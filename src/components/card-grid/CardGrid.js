import React from "react";
import styles from "./cardgrid.module.css";
import Card from "../../components/card/Card.js";
import SectionTitle from "../../components/section-title/SectionTitle";

const CardGrid = ({ data, heading, gridBackgroundColor,theme }) => {
  return (
    <section className={styles.gridSection}  style={{ backgroundColor: gridBackgroundColor }} >
      <SectionTitle
        theme={theme}
        btn_text={"what we do"}
        title={heading}
      />
      <div
        className={styles.gridContainer}
      >
        {data.map((item) => (
          <Card
            key={item.title} 
            eventData={{
              title: item.title,
              description: item.description,
              imageUrl: item.imageUrl,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default CardGrid;
