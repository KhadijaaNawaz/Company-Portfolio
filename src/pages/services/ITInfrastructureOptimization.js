
// ITInfrastructureOptimization.js
import React from "react";
import Hero from "../../components/service-hero/ServiceHero.js";
import ServiceList from "../../components/services-list/ServiceList.js";
import WhatWeDo from "../../components/what-we-do/WhatWeDo";
import Exellence from "../../components/service-exellence/Exellence.js";
import ExploreFurtherSection from "../../components/explore/Explore.js";
import Structure from "../../components/service-structure/ServiceStructure.js";
import ProfileCard from "../../components/team-member/TeamMember.js";


const ITInfrastructureOptimization = () => {
  const breadcrumbs = [
    { text: "HOME", isActive: false },
    { text: "ITInfrastructureOptimization", isActive: true },
  ];

  const services = [
    
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
          title="IT Infrastructure Optimization"
          breadcrumbs={breadcrumbs}
        />
      <div >
      
        <Structure 
          ServiceListComponent={<ServiceList />}
          WhatWeDoComponent={
            <WhatWeDo
              title="What We Do"
              description="Your IT infrastructure is the backbone of your business, and we ensure it’s optimized for maximum efficiency and performance. From server management to network security and system upgrades, we analyze and fine-tune your IT environment to enhance speed, security, and scalability."
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

export default ITInfrastructureOptimization;
