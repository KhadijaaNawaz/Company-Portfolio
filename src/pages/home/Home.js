import React, { useState } from "react";
import homestyles from "./home.module.css";
import Services from "../../components/services/Services";
import SectionTitle from "../../components/section-title/SectionTitle";
import Accordion from "../../components/accordion/Accordion";
import Experience from "../../components/experience/Experience";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import HeroSection from "../../components/hero/Hero";
import Bgimage from "../../components/image/Image";

const Home = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };
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

  const svgIcon = (
    <path d="m48.9000015 36.5c-1.5999985-2.7999992-1.7999992-6.2000008 0-8.8999996.9000015-1.2999992 1.2999992-2.7999992 1.2999992-4.3999996 0-4.6000004-3.9000015-8.3000002-8.7999992-8.3000002-.7000008 0-1.4000015.1000004-2.0999985.1999998-3.2999992.6999998-6.7000008-.3000002-9.3999996-2.3000002-1.7000007-1.1999998-3.7999992-1.8999996-6.1000003-1.8000002-4.5.1999998-8.1999998 3.8000002-8.6999998 8.2000008-.1999999 2.1000003.3000001 4.2000007 1.3000001 5.7999992 1.3999996 2.2999992 1 5.2999992-.8000002 7.2999992-1.6000004 2-2.5 4.5999985-2.0999994 7.5.6000004 4 3.7999992 7.2999992 7.8999996 8 1.7999992.2999992 3.6000004 0 5.1000004-.5999985 1.2000008-.5 2.7000008-.2000008 3.5.9000015 2.2000008 3.2999992 6.2000008 5.2999992 10.6000023 4.7000008 4.900001 1.0000016 2.5 2.0999997 7.0000023z" />
  );

  const image = "/assets/Hero_Section/generic-1.jpg";

  return (
    <div className={homestyles.home_page}>
      <div className="home_wrapper"></div>
      <HeroSection />

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

      <section className={homestyles.why_us_wrapper}>
        <div className={homestyles.why_us_container}>
          <div className={homestyles.left}>
            <SectionTitle
              theme={"light"}
              btn_text={"Who We Are"}
              title={"Empowering Businesses Through Innovation"}
              desc={
                "We are a leading IT solutions provider specializing in enterprise-grade ERP systems and cutting-edge CMIS platforms. Our mission is to revolutionize your operations with technology-driven solutions tailored to your unique needs."
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
            <Accordion />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
