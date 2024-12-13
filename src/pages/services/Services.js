import React, { useState, useEffect } from "react";  // Added useEffect import
import servicestyles from "./service.module.css";
import homestyles from "../home/home.module.css";
import Hero from "../../components/service-hero/ServiceHero.js";
import SectionTitle from "../../components/section-title/SectionTitle";
import Card from "../../components/card/Card.js";
import services from "./services.json";


import { faChevronLeft, faChevronRight, faClock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Services = () => {
 
  return (
    <div className={servicestyles.service_page}>
      <div className="service_wrapper">
        <Hero />
        <section className={homestyles.why_us_wrapper}>
          <div className={homestyles.why_us_container}>
            <div className={homestyles.left}></div>
            <div className={homestyles.right}>
              <SectionTitle
                theme={"light"}
                btn_text={"Let's Work Together"}
                title={"Expert finance solutions, tax planning, and so much more..."}
                desc={
                  "We offer a comprehensive range of accounting and financial services designed to meet the diverse needs of our clients. Whether you are a business owner, an individual, or a non-profit organization, our team of experienced professionals is here to provide the expertise and support you need to achieve your financial goals"
                }
              />
              <button className={`${homestyles.contact_btn}`}>
                Learn More
                <span className={homestyles.arrow}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </span>
              </button>
            </div>
          </div>
        </section>
        <section>
         
        </section>
        <section className={servicestyles.servicesSection}>
          <SectionTitle
          theme={"dark"}
          btn_text={"Our Services"}
          title={"Accounting Services"}
          desc={" Full-service accounting to drive your financial success."}
        />
          <div className={servicestyles.cardGrid}>
            {services.map((services) => (
              <Card
              eventData={{
                title: services.title,
                description: services.description,
                imageUrl: services.imageUrl,
              }}
            />
            ))}
          </div>
          <div className={servicestyles.slider_bottom}>
          <p>
            <FontAwesomeIcon icon={faClock} style={{ marginRight: '10px', fontSize: '20px' }} />
            24/7 Availability - Round-the-clock support for all your accounting needs, anytime.
          </p>
        </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
