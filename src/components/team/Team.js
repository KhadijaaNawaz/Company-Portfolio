import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import ProfileCard from "../../components/team-member/TeamMember.js";
import styles from "./team.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";

const Team = ({ jsonFileName }) => {
  const [teamData, setTeamData] = useState([]);

  useEffect(() => {
    const loadTeamData = async () => {
      try {
        const data = await import(`../../data/${jsonFileName}`);
        setTeamData(data.default); // 'default' because the imported JSON is treated as a module
      } catch (error) {
        console.error("Error loading team data:", error);
      }
    };

    loadTeamData();
  }, [jsonFileName]);

  return (
    <div className={styles.team_wrapper}>
      <h2 className={styles.highlighted_heading}>
        Meet The Professionals Full Of
        <span className={styles.highlight}>Expertise</span> and
        <span className={styles.highlight}>Dedication</span>
      </h2>
      <div className={styles.team_content}>
        <Swiper
          spaceBetween={10}
          loop={true}
          navigation={{
            prevEl: ".prev_button",
            nextEl: ".next_button",
          }}
          modules={[Navigation]}
          breakpoints={{
            1200: { slidesPerView: 5 },
            1050: { slidesPerView: 4 },
            788: { slidesPerView: 3 },
            488: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
        >
          {teamData.map((member) => (
            <SwiperSlide key={member.id}>
              <ProfileCard
                key={member.id}
                name={member.name}
                title={member.title}
                image={member.image}
                socialLinks={member.socialLinks}
              />
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
          <div className={styles.hiring_button}>WE'RE HIRING</div>
          <p className={styles.professional_text}>
            Join our team of dedicated professionals -{" "}
            <a href="#apply" className={styles.apply_link}>
              Apply Now!
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Team;
