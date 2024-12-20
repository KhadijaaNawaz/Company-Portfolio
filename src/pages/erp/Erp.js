import React from "react";
import Hero from "../../components/service-hero/ServiceHero";
import Grid from "../../components/reverse-grid/ReverseGrid";
import ExploreFurtherSection from "../../components/explore/Explore";

const Erp = () => {
  const breadcrumbs = [
    { text: "HOME", isActive: false },
    { text: "ERP", isActive: true },
  ];

  return (
    <div>
      <div id="heroSection">
        <Hero
          buttonText="WHAT WE DO"
          title="Enterprise Resource Planning"
          breadcrumbs={breadcrumbs}
        />
      </div>

      {/* Dynamically pass the file name to Grid */}
      <Grid jsonFileName="erpOverview" />
      <div id="exploreSection">
        <ExploreFurtherSection />
      </div>
    </div>
  );
};

export default Erp;
