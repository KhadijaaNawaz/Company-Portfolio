
// DigitalMarketing.js
import React from "react";
import Hero from "../../components/service-hero/ServiceHero.js";
import ServiceList from "../../components/services-list/ServiceList.js";
import WhatWeDo from "../../components/what-we-do/WhatWeDo";
import Exellence from "../../components/service-exellence/Exellence.js";
import ExploreFurtherSection from "../../components/explore/Explore.js";
import Structure from "../../components/service-structure/ServiceStructure.js";
import ProfileCard from "../../components/team-member/TeamMember.js";


const DigitalMarketing = () => {
  const breadcrumbs = [
    { text: "HOME", isActive: false },
    { text: "DigitalMarketing", isActive: true },
  ];

  const services = [
    "Search Engine Optimization (SEO)",
    "Content Marketing",
    "Social Media Marketing (SMM)",
    " Email Marketing",
    " Web Analytics and Performance Tracking",
    " Affiliate Marketing",
   
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
          title="Digital Marketing"
          breadcrumbs={breadcrumbs}
        />
      <div >
      
        <Structure 
          ServiceListComponent={<ServiceList />}
          WhatWeDoComponent={
            <WhatWeDo
              title="What We Do"
              description="Your online presence matters! Our Digital Marketing Services include SEO, PPC, social media marketing, content creation, branding, and email marketing to boost your visibility and generate leads. We create data-driven marketing strategies to help your business grow and reach the right audience. At CwizTech, we don’t just provide services—we deliver complete IT solutions that empower your business for long-term success. Whether you're a startup, an established enterprise, or looking for digital transformation, our expert team is here to support you at every stage of your journey! "
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

export default DigitalMarketing;
