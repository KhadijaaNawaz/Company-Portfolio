import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

import styles from "./footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_widget}>

        <div className={styles.footer_header}>
          <div className={styles.footer_header_container}>
            <div className={styles.footer_logo}>
              <img src="assets/logo.png" alt="Footer Logo" />
            </div>
            <div className={styles.footer_contact}>
      
              <div className={styles.footer_item}>
                <div className={styles.footer_icon}>
                  <FontAwesomeIcon icon={faPhone} />
                </div>
                <div className={styles.footer_info}>
                  <span className={styles.footer_label}>CALL US</span>
                  <a href="tel:+8001234567" className={styles.footer_value}>
                    800 123 4567
                  </a>
                </div>
              </div>
      
              <div className={styles.footer_item}>
                <div className={styles.footer_icon}>
                  <FontAwesomeIcon icon={faEnvelope} />
                </div>
                <div className={styles.footer_info}>
                  <span className={styles.footer_label}>SEND E-MAIL</span>
                  <a
                    href="mailto:you@domain.com"
                    className={styles.footer_value}
                  >
                    you@domain.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.footer_container}>
          <div className={styles.footer_row}>
            <div className={styles.footer_column1}>
              <div
                className={`${styles.footer_widget} ${styles.footer_widget_1} ${styles.footer_links_widget}`}
              >
                <div className={styles.footer_widget_title}>
                  <h4>Porto</h4>
                </div>
                <p>
                  Since 2018, JobAway has been connecting hospitality workers to
                  thousands of businesses, private events, and universities.
                </p>
                <div className={styles.footer_download_btn}>
                  <a href="#" className={styles.footer_apple_store}>
                    <img src="assets/icon-4.png" alt="App Store" />
                    <span>Download on App Store</span>
                  </a>
                  <a href="#" className={styles.footer_play_store}>
                    <img src="assets/icon-5.png" alt="Google Play" />
                    <span>Get it on Google Play</span>
                  </a>
                </div>
              </div>
            </div>

    
            <div className={styles.footer_column}>
              <div
                className={`${styles.footer_widget} ${styles.footer_links_widget}`}
              >
                <div className={styles.footer_widget_title}>
                  <h4>For Workers</h4>
                </div>
                <ul className={styles.footer_links_list}>
                  <li>
                    <a href="#">Find Work</a>
                  </li>
                  <li>
                    <a href="#">Jobs in Dubai</a>
                  </li>
                  <li>
                    <a href="#">Jobs in Virginia</a>
                  </li>
                  <li>
                    <a href="#">Jobs in California</a>
                  </li>
                  <li>
                    <a href="#">Jobs in Alaska</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className={styles.footer_column}>
              <div
                className={`${styles.footer_widget} ${styles.footer_links_widget}`}
              >
                <div className={styles.footer_widget_title}>
                  <h4>For Business</h4>
                </div>
                <ul className={styles.footer_links_list}>
                  <li>
                    <a href="#">Merchandising</a>
                  </li>
                  <li>
                    <a href="#">Hospitality Staff</a>
                  </li>
                  <li>
                    <a href="#">General Labour</a>
                  </li>
                  <li>
                    <a href="#">Car Drivers</a>
                  </li>
                  <li>
                    <a href="#">Bus Driver</a>
                  </li>
                </ul>
              </div>
            </div>

    
            <div className={styles.footer_column}>
              <div
                className={`${styles.footer_widget} ${styles.footer_links_widget}`}
              >
                <div className={styles.footer_widget_title}>
                  <h4>Company</h4>
                </div>
                <ul className={styles.footer_links_list}>
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Career</a>
                  </li>
                  <li>
                    <a href="#">Partners</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                  <li>
                    <a href="#">Clients</a>
                  </li>
                </ul>
              </div>
            </div>

    
            <div className={styles.footer_column}>
              <div
                className={`${styles.footer_widget} ${styles.footer_links_widget}`}
              >
                <div className={styles.footer_widget_title}>
                  <h4>Help & Support</h4>
                </div>
                <ul className={styles.footer_links_list}>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                  <li>
                    <a href="#">General FAQ</a>
                  </li>
                  <li>
                    <a href="#">Support Center</a>
                  </li>
                  <li>
                    <a href="#">Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#">Terms & Conditions</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.footer_bottom}>
        <div className={styles.footer_container}>
          <div
            className={`${styles.footer_bottom_inner} ${styles.footer_flex} ${styles.footer_align_center} ${styles.footer_justify_between}`}
          >
            <div className={styles.copyright}>
              <p>
                Copyright © 2024 <a href="#">JobAway</a>. All rights reserved.
              </p>
            </div>
            <ul className={styles.footer_social_links}>
              <li>
                <h5>Follow Us On:</h5>
              </li>
              <li>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faFacebook} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faLinkedin} />
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
