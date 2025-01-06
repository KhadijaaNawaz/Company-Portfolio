import React from "react";
import indsutirestyles from "./industries.module.css";
import Hero from "../../components/service-hero/ServiceHero";
import IndustriesCard from "../../components/industries-card/IndustriesCard";
import ExploreFurtherSection from "../../components/explore/Explore.js";
import industriesData from "../../data/industries.json";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBusinessTime, faTruck, faShoppingCart, faHeartbeat } from "@fortawesome/free-solid-svg-icons";

const indsutires = () => {
  const breadcrumbs = [
    { text: "HOME", isActive: false },
    { text: "Industries", isActive: true },
  ];

  const iconMapping = {
    faBusinessTime: faBusinessTime,
    faTruck: faTruck,
    faShoppingCart: faShoppingCart,
    faHeartbeat: faHeartbeat,
  };

  return (
    <div className={indsutirestyles.indsutires_page}>
      <div className={indsutirestyles.indsutires_wrapper}>
        {}
        <Hero
          buttonText="Join the more than 41,000 customers across 219 countries running on NetSuite, the #1 Cloud Business Management Suite"
          title="Industries"
          breadcrumbs={breadcrumbs}
        />

        {}
        <div className={indsutirestyles.industries_cards}>
          {industriesData.map((industry, index) => (
            <IndustriesCard
              key={index}
              icon={<FontAwesomeIcon icon={iconMapping[industry.icon]} />}
              title={industry.title}
              description={industry.description}
              link={industry.link}
              dark={industry.dark}
            />
          ))}
        </div>
        <ExploreFurtherSection />

      </div>
    </div>
  );
};

export default indsutires;