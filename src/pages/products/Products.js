import React from "react";
import Hero from "../../components/service-hero/ServiceHero";
import Nav from "../../components/simple-nav/SimpleNav";
import CardGrid from "../../components/card-grid/CardGrid";
import ErpData from "../../data/erpProducts";
import homestyles from "../home/home.module.css";
import styles from "./products.module.css";
import CrmData from "../../data/crmProducts";
import ExploreFurtherSection from "../../components/explore/Explore.js";

const Products = () => {
  const breadcrumbs = [
    { text: "HOME", isActive: false },
    { text: "Products", isActive: true },
  ];

  const data = [
    {
      icon: "/assets/global.png",
      title: "Global Accounting",
      description: "We provide top-notch accounting solutions tailored for businesses globally.",
    },
    {
      icon: "/assets/tax.png",
      title: "Tax Consulting",
      description: "Our experts offer tax consulting services to optimize your business taxes.",
    },
    {
      icon: "/assets/admin.png",
      title: "Admin Services",
      description: "Efficient administrative services to streamline your business operations.",
    },
  ];

  return (
    <div>
      <div id="heroSection">
        <Hero
          buttonText="WHAT WE DO"
          title="Products"
          breadcrumbs={breadcrumbs}
        />
      </div>

      <div id="serviceSection">
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
      </div>

      {/* Accounting Section */}
      <div id="accountingSectionWrapper">
        <section id="accountingSection" className={styles.showcaseSection}>
          <div className={styles.showcaseContainer}>
            <h1 className={styles.showcaseTitle}>
              Proudly showcase the diverse range of Products
            </h1>
            <p className={styles.showcaseDescription}>
              At Porto, we believe in delivering tailored solutions that drive
              real results. Our team of seasoned professionals has partnered with
              businesses across various industries, providing expert accounting,
              auditing, tax planning, and financial advisory services.
            </p>
            <div className={styles.showcaseIconWrapper}>
              <img
                src="/assets/icons/icon-8.svg"
                alt="Briefcase Icon"
                className={styles.showcaseIcon}
              />
              <p className={styles.showcaseIconText}>
                Below, you'll find a selection of our recent projects that
                illustrate our commitment
              </p>
            </div>
          </div>
        </section>
      </div>

      <div id="navSection">
        <Nav />
      </div>

      {/* ERP Section */}
      <div id="erpSectionWrapper">
        <CardGrid
          id="erpSection"
          data={ErpData}
          heading={"ERP ( Enterprise Resource Planning)"}
          gridBackgroundColor=" #F7F0E7"
          theme={"light"}
        />
      </div>

      {/* CRM Section */}
      <div id="crmSectionWrapper">
        <CardGrid
          id="crmSection"
          data={CrmData}
          heading={"CRM ( Customer Resource Management)"}
          theme={"light"}
          gridBackgroundColor=" #F0F0F0"
        />
      </div>

      <div id="exploreSection">
        <ExploreFurtherSection />
      </div>
    </div>
  );
};

export default Products;
