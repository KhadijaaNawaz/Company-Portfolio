import React from "react";
import styles from "./exellence.module.css";
import Stats from "../stats/Stats.js";

const Exellence = ({ title, stats, imageSrc }) => {
  const getRandomHighlightedWords = (text) => {
    const words = text.split(/(\s+)/);
    const highlightIndices = new Set();

   
    const wordsOnly = words.filter((word) => word.trim() !== "");

    while (highlightIndices.size < 2) {
        const randomIndex = Math.floor(Math.random() * wordsOnly.length);
        
       
        const originalIndex = words.indexOf(wordsOnly[randomIndex]);

        if (
            !highlightIndices.has(originalIndex) &&
            !highlightIndices.has(originalIndex - 1) && 
            !highlightIndices.has(originalIndex + 1)    
        ) {
            highlightIndices.add(originalIndex);
        }
    }

    return words.map((word, index) => (
        <span
            key={index}
            className={highlightIndices.has(index) ? styles.excellence_highlight : ""}
        >
            {word}
        </span>
    ));
};

  return (
    <section className={styles.excellence_section}>
      <div className={styles.excellence_headingContainer}>
        <h1 className={styles.excellence_title}>{getRandomHighlightedWords(title)}</h1>
        <Stats stats={stats} />
      </div>
      <div className={styles.excellence_contentContainer}>
        <div>
          {}
        </div>
      </div>
    </section>
  );
};

export default Exellence;