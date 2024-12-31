import React, { useState } from "react";
import Hero from "../../components/service-hero/ServiceHero";
import Grid from "../../components/reverse-grid/ReverseGrid";
import ExploreFurtherSection from "../../components/explore/Explore";
import FeatureCard from "../../components/services-list/SectionList";
import Quote from "../../components/testimonial-section/TestimonialSection";
import ChallengesSection from "../../components/challenges-section/ChallengesSection";
import featureDetailsData from "../../data/erpFeatureDetails.json";

const Erp = () => {
  const breadcrumbs = [
    { text: "HOME", isActive: false },
    { text: "CRM", isActive: true },
  ];

  const features = [
    "Accounting Software",
    "Financial Management",
    "Global Business Management",
    "Enterprise Performance Management",
    "Inventory Management",
    "Order Management",
    "Supply Chain Management",
    "Warehouse Management",
    "Procurement",
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
    {
      title: "Meeting Expectations:",
      description: "Deliver promised order accuracy, on-time delivery and cost savings.",
    },
    {
      title: "Balancing Supply and Demand:",
      description: "Manage supply chains in the face of rapid change, rising costs and shifting buyer behavior.",
    },
    {
      title: "Inventory Insights:",
      description: "Plan and balance inventory to meet demand.",
    },
  ];

  const [featureDetails] = useState(featureDetailsData);
  const [selectedFeature, setSelectedFeature] = useState("Accounting Software");

  const handleFeatureClick = (feature) => {
    setSelectedFeature(feature);
  };

  return (
    <div>
      <div id="heroSection">
        <Hero
          buttonText="WHAT WE DO"
          title="Enterprise Resource Planning"
          breadcrumbs={breadcrumbs}
        />
      </div>

      <Grid jsonFileName="erpOverview" />

      {}
      <FeatureCard
        sidebarTitle="NetSuite ERP Features"
        sidebarDescription="NetSuite ERP delivers wide-ranging benefits by automating business processes, improving operational awareness, and giving organizations greater control over their resources."
        title={featureDetails[selectedFeature].title}
        description={featureDetails[selectedFeature].description}
        image={featureDetails[selectedFeature].image}
        items={features}
        selectedItem={selectedFeature}
        onFeatureClick={handleFeatureClick}
      />
       <ChallengesSection
        title="Challenges NetSuite ERP Solves"
        image="/assets/erp/thmb-l2-challenges.avif"
        challenges={challenges}
      />
      <Quote />
     
      <div id="exploreSection">
        <ExploreFurtherSection />
      </div>
    </div>
  );
};

export default Erp;