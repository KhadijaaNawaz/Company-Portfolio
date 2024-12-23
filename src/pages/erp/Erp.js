import React, { useState } from "react";
import Hero from "../../components/service-hero/ServiceHero";
import Grid from "../../components/reverse-grid/ReverseGrid";
import ExploreFurtherSection from "../../components/explore/Explore";
import FeatureCard from "../../components/services-list/SectionList";

import featureDetailsData from "../../data/erpFeatureDetails.json";

const Erp = () => {
  const breadcrumbs = [
    { text: "HOME", isActive: false },
    { text: "ERP", isActive: true },
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

      <div id="exploreSection">
        <ExploreFurtherSection />
      </div>
    </div>
  );
};

export default Erp;