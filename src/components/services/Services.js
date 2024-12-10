import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

import styles from "./services.module.css";
import services from './services.json'
import SectionTitle from "../section-title/SectionTitle";

const Services = () => {
    const navigate = useNavigate();

    // Function to truncate text after 50 words
    const truncateText = (text, limit) => {
        if (text.length > limit) {
          return text.substring(0, limit) + '...';
        }
        return text;
      };
  
  return (
    <div className={styles.services_wrapper}>
        <div className={styles.services_content}>
    
            <SectionTitle 
               theme={'dark'}
               btn_text={'Our Services'}
               title={'We Can Help You With'}
               desc ={' Explore our range of professional services tailored to your needs.'}
            />

            <Swiper
                spaceBetween={10}
                slidesPerView={4}
                loop={true} 
                navigation={{
                prevEl: ".prev_button",
                nextEl: ".next_button",
                }}
                modules={[Navigation]}
            >
                {services.map((service) => (
                    <SwiperSlide key={service.id}>
                        <div className={styles.card}>
                            <h3>{service.title}</h3>
                            <p>{truncateText(service.description, 300)}</p>
                            {/* Learn More Button */}
                            <Link
                                className={styles.learn_more_button}
                                to={'/services'}
                            >
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
        </div>
    </div>
  );
};

export default Services;
