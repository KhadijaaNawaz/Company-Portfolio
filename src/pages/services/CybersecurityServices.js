// CybersecurityServices.js
import React from "react";
import Hero from "../../components/service-hero/ServiceHero.js";
import ServiceList from "../../components/services-list/ServiceList.js";
import WhatWeDo from "../../components/what-we-do/WhatWeDo";
import Exellence from "../../components/service-exellence/Exellence.js";
import ExploreFurtherSection from "../../components/explore/Explore.js";
import Structure from "../../components/service-structure/ServiceStructure.js";
import ProfileCard from "../../components/team-member/TeamMember.js";


const CybersecurityServices = () => {
  const breadcrumbs = [
    { text: "HOME", isActive: false },
    { text: "CybersecurityServices", isActive: true },
  ];

  const services = [
    "Data protection and encryption",
    "Threat detection and mitigation",
    "Security audits and compliance",
    "Antivirus and anti-malware solutions",
   
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
          title="Cybersecurity "
          breadcrumbs={breadcrumbs}
        />
      <div >
      
        <Structure 
          ServiceListComponent={<ServiceList />}
          WhatWeDoComponent={
            <WhatWeDo
              title="What We Do"
              description="With the rise of cyber threats, protecting your business is more important than ever. Our Cybersecurity Services include advanced threat detection, firewall protection, endpoint security, and risk assessment strategies to safeguard your data and prevent breaches. Stay ahead of cybercriminals with our comprehensive security solutions."
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

export default CybersecurityServices;
