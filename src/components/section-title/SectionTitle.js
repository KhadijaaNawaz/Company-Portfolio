import React from 'react'

import styles from './sectiontitle.module.css'

const SectionTitle = ({ theme, btn_text, title, desc }) => {
  const buttonClass = theme === 'dark' ? styles.btn_gradient_dark : styles.btn_gradient_light;
  const textColor = theme === 'dark' ? styles.text_light : styles.text_dark;
  return (
    <div className={`${styles.title_wrapper} ${textColor}`}>
        <button className={buttonClass}>{btn_text}</button>
        <h2 className={styles.section_heading}>{title}</h2>
        <p className={styles.section_description}>
            {desc}
        </p>
    </div>
  )
}

export default SectionTitle