import React from "react";
import contactstyles from "./contact.module.css";
import Hero from "../../components/service-hero/ServiceHero.js";
import homestyles from "../home/home.module.css";
import SectionTitle from "../../components/section-title/SectionTitle";
import ContactInfo from "../../components/contact-info/ContactInfo";
import ClientRating from "../../components/client-rating/ClientRating.js";
import Experience from "../../components/experience/Experience";
import GoogleMap from "../../components/map/Map.js";
import ContactForm from "../../components/contact-form/ContactForm.js";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  const breadcrumbs = [
    { text: "HOME", isActive: false },
    { text: "CONTACT US", isActive: true },
  ];

  return (
    <div className={contactstyles.contact_page}>
      <Hero
        buttonText="WHAT WE DO"
        title="Contact Us"
        breadcrumbs={breadcrumbs}
      />
      <section className={homestyles.why_us_wrapper}>
        <div className={homestyles.why_us_container}>
          <div className={homestyles.left}>
            <SectionTitle
              theme={"light"}
              btn_text={"Let's Get Started"}
              title={"Reach out to us using the options below:"}
            />
          </div>
          <div className={homestyles.right}>
            <p className={contactstyles.contact_desc}>
              Whether you have a question about our services, need advice on tax
              planning, or want to schedule a consultation, our team of
              experienced professionals is ready to assist you
            </p>
          </div>
        </div>
      </section>
      <ContactInfo />
      <GoogleMap />

      {/* Contact Form Section */}
      <section className={homestyles.why_us_wrapper}>
        <div className={homestyles.why_us_container}>
          <div className={contactstyles.left_form}>
            <SectionTitle
              theme={"light"}
              btn_text={"Contact Form"}
              title={"Get in Touch with Our Team"}
            />
            <ContactForm />

            <button className={`${homestyles.contact_btn} `}>
              Contact Us
              <span className={homestyles.arrow}>
                <FontAwesomeIcon icon={faArrowRight} />
              </span>
            </button>
          </div>
          <div className={contactstyles.right_form}>
            <Experience />
            <ClientRating />
            <div className={contactstyles.quick_Reply}>Quick Reply</div>
            <p>Usually in 24 hours in working days.</p>
        
            <a href="#process" className={contactstyles.button}>
              <span className={contactstyles.icon}>⚙️</span> Learn About Our
              Process
              <span>→</span>
            </a>

            <a href="#projects" className={contactstyles.button}>
              <span className={contactstyles.icon}>📂</span> View Our Projects
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Contact;
