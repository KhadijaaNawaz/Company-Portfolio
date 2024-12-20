import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./hero.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const HeroSection = () => {
  const slides = [
    {
      id: 1,
      backgroundImage: "url('../../../public/assets/bg.png')",
      subtitle: "Empower Your Business",
      title: "Choosing the Perfect ERP Made Simple",
      description: "Discover how our ERP solutions can transform your business operations and streamline success.",
    },
    {
      id: 2,
      backgroundImage: "url('../../../public/assets/bg.png')",
      subtitle: "Transform Industries",
      title: "What’s Your Business Priority Today?",
      description: "Whether it's enhancing productivity, optimizing workflows, or managing content, we’ve got the solutions to make it happen.",
    },
    {
      id: 3,
      backgroundImage: "url('../../../public/assets/bg.png')",
      subtitle: "Innovate the Future",
      title: "Your Daily Tech Checklist, Simplified",
      description: "From ERP to CMIS, we deliver tools designed to meet your evolving business needs, every step of the way.",
    },
  ];

  return (
    <section className={styles.hero_section}>
      <Swiper
        modules={[Navigation]}
        spaceBetween={50}
        loop= {true}
        slidesPerView={1}
        navigation={{
          nextEl: `.${styles.next_button}`,
          prevEl: `.${styles.prev_button}`,
        }}
        centeredSlides={true}
        autoplay={{
            delay: 1000,
            disableOnInteraction: false,
          }}
          effect="fade"
          fadeEffect={{
            crossFade: true, // Smooth transition between slides
          }}
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className={styles.slide}
            //   style={{ backgroundImage: slide.backgroundImage }}
            >
              <div className={styles.slide_content}>
                <h3>{slide.subtitle}</h3>
                <h2>{slide.title}</h2>
                <p>{slide.description}</p>
                <button className={styles.get_started_button}>
                  Get Started
                  <span className={styles.arrow}>
                    <FontAwesomeIcon icon={faArrowRight} />
                  </span>
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className={styles.prev_button}><FontAwesomeIcon icon={faChevronLeft} /></div>
        <div className={styles.next_button}><FontAwesomeIcon icon={faChevronRight} /></div>
      </Swiper>
    </section>
  );
};

export default HeroSection;
