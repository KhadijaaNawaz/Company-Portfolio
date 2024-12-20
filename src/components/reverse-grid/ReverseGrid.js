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
    <div className={styles.grid_container}>
      {data.map((item) => (
        <div
          key={item.id}
          className={`${styles.grid_section} ${
            item.id % 2 === 0 ? styles.grid_even : styles.grid_odd
          }`}
        >
          {item.id % 2 === 0 ? (
            <>
              <div className={styles.grid_text}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
              <div className={styles.grid_image}>
                <img src={item.image} alt={item.title} />
              </div>
            </>
          ) : (
            <>
              <div className={styles.grid_image}>
                <img src={item.image} alt={item.title} />
              </div>
              <div className={styles.grid_text}>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export default Grid;
