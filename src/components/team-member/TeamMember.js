import React from "react";
import styles from "./teammember.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

const TeamMember = ({ name, title, image, socialLinks }) => {
  const iconMapping = {
    facebook: faFacebook,
    instagram: faInstagram,
    linkedin: faLinkedin,
    twitter: faTwitter,
  };

  return (
    <div className={styles.team_our_team}>
      <div className={styles.team_picture}>
        <img src={image} alt={name} />
      </div>
      <div className={styles.team_team_content}>
        <h3 className={styles.team_name}>{name}</h3>
        <h4 className={styles.team_title}>{title}</h4>
      </div>
      <ul className={styles.team_social}>
        {socialLinks.map((link, index) => (
          <li key={index}>
            <a href={link.url} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={iconMapping[link.platform]} />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TeamMember;
