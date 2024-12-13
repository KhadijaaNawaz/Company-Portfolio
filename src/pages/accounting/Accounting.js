// Accounting.js
import React from "react";
import accountingstyles from "./accounting.module.css";
import Hero from "../../components/service-hero/ServiceHero.js";
import ServiceList from "../../components/services-list/ServiceList.js";
import WhatWeDo from "../../components/what-we-do/WhatWeDo";
import Exellence from "../../components/service-exellence/Exellence.js";
import ExploreFurtherSection from "../../components/explore/Explore.js";
import Structure from "../../components/service-structure/ServiceStructure.js";

const Accounting = () => {
  const breadcrumbs = [
    { text: "HOME", isActive: false },
    { text: "ACCOUNTING", isActive: true },
  ];

  const services = [
    "Financial Statement Preparation",
    "Bookkeeping Services",
    "Payroll Services",
    "Tax Preparation and Planning",
    "Budgeting and Forecasting",
    "Audit and Assurance",
  ];

  const stats = {
    value: "90%",
    text1: "Increased Profitability",
    text2: "Through strategic financial planning.",
  };

  const stats2 = {
    value: "70%",
    text1: "Increased Profitability",
    text2: "Through strategic financial planning.",
  };

  return (
    <div className={accountingstyles.accounting_page}>
      <Hero
          buttonText="WHAT WE DO"
          title="Accounting"
          breadcrumbs={breadcrumbs}
        />
      <div className={accountingstyles.accounting_wrapper}>
      
        <Structure 
          ServiceListComponent={<ServiceList />}
          WhatWeDoComponent={
            <WhatWeDo
              title="What We Do"
              description="We provide comprehensive accounting services tailored to meet the unique needs of each client. Our team of experienced accountants is dedicated to helping businesses of all sizes manage their financial health and achieve their financial goals."
              services={services}
              image="/assets/generic-9.jpg"
              stats={stats}
            />
          }
          ExellenceComponent={<Exellence title="Delivering Excellence Through Expertise and Dedication" stats={stats2} />}
        />
      </div>
      <ExploreFurtherSection />

    </div>
  );
};

export default Accounting;
