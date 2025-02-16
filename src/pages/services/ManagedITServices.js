
// ManagedITServices.js
import React from "react";
import Hero from "../../components/service-hero/ServiceHero.js";
import ServiceList from "../../components/services-list/ServiceList.js";
import WhatWeDo from "../../components/what-we-do/WhatWeDo";
import Exellence from "../../components/service-exellence/Exellence.js";
import ExploreFurtherSection from "../../components/explore/Explore.js";
import Structure from "../../components/service-structure/ServiceStructure.js";
import ProfileCard from "../../components/team-member/TeamMember.js";


const ManagedITServices = () => {
  const breadcrumbs = [
    { text: "HOME", isActive: false },
    { text: "ManagedITServices", isActive: true },
  ];

  const services = [
    "System monitoring and maintenance",
    "Server and network management",
    "Data backup and recovery solutions",   
    "IT infrastructure optimization",   
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
          title="Managed IT Services"
          breadcrumbs={breadcrumbs}
        />
      <div >
      
        <Structure 
          ServiceListComponent={<ServiceList />}
          WhatWeDoComponent={
            <WhatWeDo
              title="What We Do"
              description="At CwizTech, we take the stress out of managing your IT infrastructure so you can focus on growing your business. Our Managed IT Services provide 24/7 monitoring, proactive maintenance, and quick issue resolution, ensuring your systems run smoothly without interruptions. Whether you need network management, software updates, or data protection, we’ve got you covered. "
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

export default ManagedITServices;
