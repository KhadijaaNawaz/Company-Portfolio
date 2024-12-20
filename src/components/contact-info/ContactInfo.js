import React from "react";
import styles from "./contactinfo.module.css"; 

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhoneAlt, faEnvelope, faMapMarkerAlt, faClock } from "@fortawesome/free-solid-svg-icons"; 

const ContactInfo = () => {
  return (
    <div className={styles.contact_container}>
      <div className={styles.contact_grid}>
        {}
        <div className={styles.contact_image}>
          <img
            src="/assets/Team/generic-15.jpg" 
            alt="Office Space"
          />
        </div>

        {}
        <div className={styles.contact_info}>
          {}
          <div className={styles.contact_item}>
            <div className={styles.contact_icon}><FontAwesomeIcon icon={faMapMarkerAlt} /></div> {}
            <div>
              <h3>Office Address</h3>
              <p>123 Financial Avenue, Suite 456, Cityville, State, 12345</p>
              <a href="/" className={styles.link}>Get Directions</a>
            </div>
          </div>

          {}
          <div className={styles.contact_item}>
            <div className={styles.contact_icon}><FontAwesomeIcon icon={faEnvelope} /></div> {}
            <div>
              <h3>E-mail</h3>
              <p>
                General Inquiries:{" "}
                <a href="mailto:info@youraccountingfirm.com" className={styles.link}>
                  info@youraccountingfirm.com
                </a>
              </p>
              <p>
                Client Support:{" "}
                <a href="mailto:support@youraccountingfirm.com" className={styles.link}>
                  support@youraccountingfirm.com
                </a>
              </p>
            </div>
          </div>

          {}
          <div className={styles.contact_item}>
            <div className={styles.contact_icon}><FontAwesomeIcon icon={faPhoneAlt} /></div> {}
            <div>
              <h3>Phone</h3>
              <p>Main Office: <a href="tel:8001234567" className={styles.link}>800 123 4567</a></p>
              <p>Sales: <a href="tel:8001234567" className={styles.link}>800 123 4567</a></p>
              <p>Client Support: <a href="tel:8001234567" className={styles.link}>800 123 4567</a></p>
            </div>
          </div>

          {}
          <div className={styles.contact_item}>
            <div className={styles.contact_icon}><FontAwesomeIcon icon={faClock} /></div> {}
            <div>
              <h3>Business Hours</h3>
              <p>Monday to Friday: 9:00 AM - 6:00 PM</p>
              <p>Saturday: 10:00 AM - 2:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>

      {}
      <div className={styles.contact_footer}>
        <FontAwesomeIcon icon={faClock} /> 24/7 Availability - Round-the-clock support for all your accounting needs, anytime.
      </div>
    </div>
  );
};

export default ContactInfo;