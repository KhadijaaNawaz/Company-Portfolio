import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import aboutstyles from "./about.module.css";
import Hero from "../../components/service-hero/ServiceHero.js";
import homestyles from "../home/home.module.css";
import SectionTitle from "../../components/section-title/SectionTitle";
import Accordion from "../../components/accordion/Accordion.js";
import TeamSection from "../../components/team/Team.js";
import ExploreFurtherSection from "../../components/explore/Explore.js";
import accordionData from '../../data/accordionData';  
import aboutData from '../../data/aboutData'; 



const About = () => {
  const breadcrumbs = [
    { text: "HOME", isActive: false },
    { text: "ABOUT US", isActive: true },
  ];

  const data = [
    {
      icon: "/assets/global.png",
      title: "Global Accounting",
      description: "Expert accounting solutions for businesses worldwide.",
    },
    {
      icon: "/assets/tax.png",
      title: "Tax Consulting",
      description: "Optimize your taxes with expert consulting planning.",
    },
    {
      icon: "/assets/admin.png",
      title: "Admin Services",
      description:
        "Streamline your operations with our administrative services.",
    },
  ];


  return (
    <div className={aboutstyles.about_page}>
      <Hero
        buttonText="WHAT WE DO"
        title="About Us"
        breadcrumbs={breadcrumbs}
      />
      <section className={homestyles.why_us_wrapper}>
        <div className={homestyles.why_us_container}>
          <div className={homestyles.left}>
            <SectionTitle
              theme={"light"}
              btn_text={"Who We Are"}
              title={"Building Smarter Businesses with Modern Technology"}
              desc={
                <>
                  "CwizTech" empowers B2B and B2C businesses to achieve success through tailored solutions and innovative strategies. From startups to enterprises, we go beyond meeting requirements by offering ERP and CRM products and a wide range of services, including digital marketing, IT services, cloud computing, networking, cybersecurity services, software development, and more.

                  <br />
                  <br />
                  Our main focus on building brands, fostering growth, and delivering results makes us unique. We combine technology, creativity, and data-driven insights to provide holistic solutions that optimize operations, engage audiences, and drive measurable success.
                  <br />
                  <br />
                  With CwizTech as your partner, you’ll unlock new opportunities, enhance collaboration, and thrive in today’s dynamic market. Let’s work together to build a future of innovation and excellence.

                </>
              }
            />

            <button className={`${homestyles.contact_btn}`}>
              Learn More
              <span className={homestyles.arrow}>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </button>
          </div>
          <div className={homestyles.right}>
          <Accordion data={aboutData } />
          </div>
        </div>
      </section>
      <section className={homestyles.why_us_wrapper}>
        <div className={homestyles.why_us_container}>
          <div className={homestyles.left}>
          <Accordion data={accordionData} />
           
          </div>
          <div className={homestyles.right}>
          <SectionTitle
              theme={"light"}
              btn_text={"Let's Work Together"}
              title={"Why Choose Us?"}
              desc={
                "At CwizTech, we’re not just looking for short-term success. We aim to build sustainable growth for your business, ensuring that every strategy is designed for long-lasting impact. We maintain transparent communication throughout the process, making sure you always know how your business is progressing and the results of your investments."
              }
            />
            <button className={`${homestyles.contact_btn} `}>
              Contact Us
              <span className={homestyles.arrow}>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </button>
          </div>
        </div>
      </section>
      <TeamSection jsonFileName="team.json"/>
      
      <ExploreFurtherSection />
      
    </div>
  );
};

export default About;
