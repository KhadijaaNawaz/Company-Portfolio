import React from "react";
import aboutstyles from "./about.module.css";
import Hero from "../../components/service-hero/ServiceHero.js";
import homestyles from "../home/home.module.css";
import SectionTitle from "../../components/section-title/SectionTitle";
import Accordion from "../../components/accordion/Accordion.js";
import TeamSection from "../../components/team/Team.js";
import ClientRating from "../../components/client-rating/ClientRating.js";
import ExploreFurtherSection from "../../components/explore/Explore.js";
import accordionData from '../../data/accordionData';  
import aboutData from '../../data/aboutData'; 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

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
              title={"Your Trusted Financial Partners and Advisors"}
              desc={
                <>
                  "Where your financial peace of mind is our top priority. We
                  are a dedicated team of professionals who provide
                  comprehensive accounting and financial services tailored to
                  meet the unique needs of each of our clients.
                  <br />
                  <br />
                  Founded in 1994, Porto has grown into a respected leader in
                  the accounting industry. Our team consists of experienced
                  accountants, auditors, tax specialists, and financial advisors
                  who are passionate about helping our clients achieve their
                  financial goals."
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
      <section className={homestyles.section_wrapper}>
        <div className={homestyles.container}>
          {data.map((item, index) => (
            <div key={index} className={homestyles.column}>
              <img
                src={item.icon}
                alt={item.title}
                className={homestyles.icon}
              />
              <div className={homestyles.text_content}>
                <h3 className={homestyles.title}>{item.title}</h3>
                <p className={homestyles.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <ClientRating/>
      <section className={homestyles.why_us_wrapper}>
        <div className={homestyles.why_us_container}>
          <div className={homestyles.left}>
            <SectionTitle
              theme={"light"}
              btn_text={"Let's Work Together"}
              title={"Why Choose Us?"}
              desc={
                "Whether you're a small business owner, an individual seeking tax advice, or a multinational corporation, we're here to support you. Contact us today to schedule a consultation and discover how we can help you achieve financial peace of mind."
              }
            />
            <button className={`${homestyles.contact_btn} `}>
              Contact Us
              <span className={homestyles.arrow}>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </button>
          </div>
          <div className={homestyles.right}>
          <Accordion data={accordionData} />
          </div>
        </div>
      </section>
      <TeamSection />
      <ExploreFurtherSection />
      
    </div>
  );
};

export default About;
