import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faClock } from "@fortawesome/free-solid-svg-icons";
import Card from "../card/Card";
import SectionTitle from "../section-title/SectionTitle";
import services from "./services.json";
import styles from "./services.module.css";

const Services = () => {
  // Function to truncate text after 50 words
  const truncateText = (text, limit) => 
    text.length > limit ? `${text.substring(0, limit)}...` : text;

  return (
    <div className={styles.services_wrapper}>
      <div className={styles.services_content}>
        {/* Section Title */}
        <SectionTitle
          theme="dark"
          btn_text="Our Services"
          title="We Can Help You With"
          desc="Explore our range of professional services tailored to your needs."
        />

        <Swiper
          spaceBetween={10}
          loop={true}
          navigation={{
            prevEl: ".prev_button",
            nextEl: ".next_button",
          }}
          modules={[Navigation]}
          breakpoints={{
            1200: { slidesPerView: 4 },
            1050: { slidesPerView: 3 },
            788: { slidesPerView: 2 },
            0: { slidesPerView: 1 },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
             <Card
                eventData={{
                  title: service.title,
                  description: truncateText(service.description, 50),
                  imageUrl: service.imageUrl,
                }}
              />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Navigation Buttons */}
        <div className={styles.slider_navigation}>
          <div className={`prev_button ${styles.nav_circle}`}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div className={`next_button ${styles.nav_circle}`}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>

        {/* Bottom Text */}
        <div className={styles.slider_bottom}>
          <p>
            <FontAwesomeIcon
              icon={faClock}
              style={{ marginRight: "10px", fontSize: "20px" }}
            />
            24/7 Support – Always Here to Assist with Your IT and Software Needs, Anytime, Anywhere.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
