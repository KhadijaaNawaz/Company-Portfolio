import React, { useState } from "react";
import homestyles from "./home.module.css";
import Services from "../../components/services/Services";
import SectionTitle from "../../components/section-title/SectionTitle";
import Accordion from "../../components/accordion/Accordion";
import Experience from "../../components/experience/Experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import HeroSection from "../../components/hero/Hero";
import accordionData from '../../data/accordionData';  

import Bgimage from "../../components/image/Image";
import HeroBottom from "../../components/hero-bottom/HeroBottom";

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };


  return (
    <div className={homestyles.home_page}>
      <div className="home_wrapper"></div>
      <HeroSection />

      <HeroBottom />

      <section className={homestyles.why_us_wrapper}>
        <div className={homestyles.why_us_container}>
          <div className={homestyles.left}>
            <SectionTitle
              theme={"light"}
              btn_text={"Who We Are"}
              title={"Building the Future of Business with Technology"}
              desc={
                "At CWIZTECH, we are more than just an IT solutions provider—we are your trusted partner in innovation. Specializing in software development, we deliver technologies that empower businesses to achieve their goals. Our expertise spans across industries, offering robust solutions like ERP to streamline operations and CMIS to revolutionize content management. With a commitment to excellence, we bridge the gap between technology and business, helping organizations of all sizes unlock their full potential. At our core, we value innovation, collaboration, and delivering results that matter."
              }
            />
             <Experience/>
            <button className={`${homestyles.contact_btn}`}>
              Learn More
              <span className={homestyles.arrow}>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </button>
            
          </div>
          <div className={homestyles.right}>
             {/* <Bgimage backgroundSvg={svgIcon} foregroundImage={image} /> */}
          </div>
        </div>
      </section>

      <Services />

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
    </div>
  );
};

export default Home;
