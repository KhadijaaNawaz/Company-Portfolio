import React from 'react'

import homestyles from "../../pages/home/home.module.css";

const HeroBottom = () => {
    const data = [
        {
          icon: "/assets/icons/decision-1.png",
          title: "Smarter ERP",
          description: "Streamline your business operations with ERP solutions that adapt to your needs, helping you save time and boost productivity.",
        },
        {
          icon: "/assets/icons/cloud.png",
          title: "CMIS Redefined",
          description: "Simplify how you manage and access information with a CMIS built to keep your organization efficient and organized.",
        },
        {
          icon: "/assets/icons/slash.png",
          title: "IT Excellence",
          description:
            "From custom software development to advanced IT solutions, we deliver the tools you need to stay ahead in a digital-first world.",
        },
      ];
  return (
    <section className={homestyles.section_wrapper}>
    <div className={homestyles.container}>
      {data.map((item, index) => (
        <div key={index} className={homestyles.column}>
          <img
            src={item.icon}
            alt={item.title}
            className={homestyles.icon}
          />
          <div className={homestyles.text_content}>
            <h3 className={homestyles.title}>{item.title}</h3>
            <p className={homestyles.description}>{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
  )
}

export default HeroBottom