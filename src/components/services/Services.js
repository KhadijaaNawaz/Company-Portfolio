import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight, faClock } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import styles from "./services.module.css";
import services from "./services.json";
import SectionTitle from "../section-title/SectionTitle";

const Services = () => {
  // Function to truncate text after 50 words
  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return text.substring(0, limit) + "...";
    }
    return text;
  };

  return (
    <div className={styles.services_wrapper}>
      <div className={styles.services_content}>
        <SectionTitle
          theme={"dark"}
          btn_text={"Our Services"}
          title={"We Can Help You With"}
          desc={"Explore our range of professional services tailored to your needs."}
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
            // When the screen width is greater than or equal to 768px, display 2 slides
            1100: {
              slidesPerView: 4,
            },
            768: {
              slidesPerView: 3,
            },
            488: {
              slidesPerView: 2,
            },
            
            0: {
              slidesPerView: 1,
            },
          }}
        >
          {services.map((service) => (
            <SwiperSlide key={service.id}>
              <div className={styles.card}>
                <h3>{service.title}</h3>
                <p>{truncateText(service.description, 250)}</p>
                {/* Learn More Button */}
                <Link className={styles.learn_more_button} to={"/services"}>
                  View details
                </Link>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className={styles.slider_navigation}>
          <div className={`next_button ${styles.nav_circle}`}>
            <FontAwesomeIcon icon={faChevronLeft} />
          </div>
          <div className={`prev_button ${styles.nav_circle}`}>
            <FontAwesomeIcon icon={faChevronRight} />
          </div>
        </div>
        <div className={styles.slider_bottom}>
          <p>
            <FontAwesomeIcon icon={faClock} style={{ marginRight: '10px', fontSize: '20px' }} />
            24/7 Availability - Round-the-clock support for all your accounting needs, anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
