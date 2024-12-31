import React, { useState } from "react";
import indsutirestyles from "./industries.module.css";
import Hero from "../../components/service-hero/ServiceHero";
import ExploreFurtherSection from "../../components/explore/Explore.js";
import SectionTitle from "../../components/section-title/SectionTitle";
import AssociationsSection from "../../components/associations/Associations.js";
import FeatureCard from "../../components/services-list/SectionList";
import Quote from "../../components/testimonial-section/TestimonialSection";
import ChallengesSection from "../../components/challenges-section/ChallengesSection";
import featureDetailsData from "../../data/agriFeatureDetails.json";
import IndustriesCard from "../../components/industries-card/IndustriesCard";

const Agribuisness = () => {
  const breadcrumbs = [
    { text: "HOME", isActive: false },
    { text: "Agribuisness", isActive: true },
  ];

  const challenges = [
    {
      title: "Manual Processes: ",
      description: "Automate and streamline manual processes that waste time and resources.",
    },
    {
      title: "Data Accessibility: ",
      description: "Quickly and easily access real-time data across the organization.",
    },
    {
      title: "Data Integrity:",
      description: "Provide stakeholders with timely, accurate financial statements, inventory reports and more.",
    },

  ];

  const stories = [
    {
      title: "Coda Coffee Co.",
      description: "With NetSuite as a Partner, Coda Coffee Diversifies Business and Promotes Sustainability",
      logo: "/assets/logos/logo-wht-undercover.avif",
      link: "#",
    },
    {
      title: "Undercover Snacks",
      description: "Better-for-You Snack Brand Has Growth in the Bag with NetSuite",
      logo: "/assets/logos/logo-wht-newmans-own.avif",
      link: "#",
    },
    {
      title: "Crumbl Cookies",
      description: "Well-Baked Business Model Feeds Remarkable Growth of Crumbl Cookies",
      logo: "/assets/logos/logo-wht-undercover.avif",
      link: "#",
    },
  ];

  const features = ["Accounting Software", "Financial Management"];

  const [featureDetails] = useState(featureDetailsData);
  const [selectedFeature, setSelectedFeature] = useState("Accounting Software");

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  const associationsData = [
    { name: "SFA Premier Provider", logo: "/assets/logos/logo-sfa.webp" },
    { name: "SFA Premier Provider", logo: "/assets/logos/logo-sfa.webp" },
    { name: "Upcycled Food Association", logo: "/assets/logos/logo-upcycled.webp" },
    { name: "Upcycled Food Association", logo: "/assets/logos/logo-upcycled.webp" },
  ];

  return (
    <div className={indsutirestyles.indsutires_page}>
      <div className={indsutirestyles.indsutires_wrapper}>
        {}
        <Hero
          buttonText="Join the more than 41,000 customers across 219 countries running on NetSuite, the #1 Cloud Business Management Suite"
          title="Agriculture"
          breadcrumbs={breadcrumbs}
        />

        <div className={indsutirestyles.industries_section2}>
          <SectionTitle
            theme={"light"}
            btn_text={"Why NetSuite ?"}
            title={"Building the Future of Business with Technology"}
            desc="NetSuite’s cloud ERP system for the food and beverage industry is the leading solution of choice for inventory and order management, ecommerce, financials and CRM. With our many customers throughout the food and beverage industry, NetSuite’s Food ERP Software has experience supporting businesses like yours"
          />
          <ChallengesSection
            image="/assets/Team/thmb-why-netsuite-foodbeverage.avif"
            challenges={challenges}
            listBackground="#ffffff"
            textColor="#000000"
            titleColor="#1F2F28"
            marginTop="0px"
          />
        </div>

       

        <FeatureCard
          sidebarTitle="Solutions to Fit Your Unique Food and Beverage Needs"
          title={featureDetails[selectedFeature].title}
          description={featureDetails[selectedFeature].description}
          items={features}
          selectedItem={selectedFeature}
          onFeatureClick={handleFeatureClick}
        />
         <div>
          <AssociationsSection
            title="Leading Associations that Trust NetSuite"
            associations={associationsData}
          />
        </div>
        <div className={indsutirestyles.customer_stories}>
          <h2 className={indsutirestyles.heading}>
            NetSuite Food <span className={indsutirestyles.highlight}>and</span> Beverage Customer{" "}
            <span className={indsutirestyles.highlight}>Stories</span>
          </h2>

          <div className={indsutirestyles.card_container}>
            {stories.map((story, index) => (
              <IndustriesCard
                key={index}
                logo={story.logo}
                title={story.title}
                description={story.description}
                link={story.link}
                dark={story.dark}
                className={indsutirestyles.industries_card}
                backgroundColor="#1F2F28"
                textColor="#FFFFFF"
              />
            ))}
          </div>
        </div>

        <Quote />

        <ExploreFurtherSection />
      </div>
    </div>
  );
};

export default Agribuisness;