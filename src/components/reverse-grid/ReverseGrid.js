import React, { useEffect, useState } from "react";
import styles from "./reversegrid.module.css";

const Grid = ({ jsonFileName }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData = await import(`../../data/${jsonFileName}.json`);
        setData(jsonData.default);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [jsonFileName]);

  return (
    <div className={styles.reverse_wrapper}>
      <p>Grow your business with an agile, AI-powered ERP system</p>
      <div className={styles.grid_container}>
        {data.map((item) => (
          <div
            key={item.id}
            className={`${styles.grid_section} ${
              item.id % 2 === 0 ? styles.normal_layout : styles.reverse_layout
            }`}
          >
            <div className={styles.grid_text}>
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
            <div className={styles.grid_image}>
              <img src={item.image} alt={item.title} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Grid;
