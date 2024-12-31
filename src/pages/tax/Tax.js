import React from "react";
import Hero from "../../components/service-hero/ServiceHero.js";
import ServiceList from "../../components/services-list/ServiceList.js";
import WhatWeDo from "../../components/what-we-do/WhatWeDo.js";
import Exellence from "../../components/service-exellence/Exellence.js";
import ExploreFurtherSection from "../../components/explore/Explore.js";
import Structure from "../../components/service-structure/ServiceStructure.js";
import ProfileCard from "../../components/team-member/TeamMember.js";


const Accounting = () => {
  const breadcrumbs = [
    { text: "HOME", isActive: false },
    { text: "TAX PLANNING", isActive: true },
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
    <div >
      <Hero
          buttonText="WHAT WE DO"
          title="Tax Planning"
          breadcrumbs={breadcrumbs}
        />
      <div>
      
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
          ProfileCard={<ProfileCard
            name="Michele Miller"
            title="Web Developer"
            image="/assets/Team/team-3.jpg"
            socialLinks={[
              { platform: "facebook", url: "https://facebook.com" },
              { platform: "twitter", url: "https://twitter.com" },
              { platform: "linkedin", url: "https://linkedin.com" },
            ]}
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
