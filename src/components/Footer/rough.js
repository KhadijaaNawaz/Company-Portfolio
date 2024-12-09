import React from "react";
import "./Footer.css";
import logo from '../../assets/logo.png';
import appStoreIcon from '../../assets/icon-4.png';
import googlePlayIcon from '../../assets/icon-5.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <footer className="footer">
           
            <div className="footer_widget">
                <div className="footer_header">
                    <div className="footer_header_container">
                        {}
                        <div className="footer_logo">
                            <img src={logo} alt="JobAway Footer Logo" />
                        </div>

                        {}
                        <div className="footer_contact">
                            <div className="footer_contact_item">
                                <div className="footer_contact_icon">
                                    <FontAwesomeIcon icon={faPhone} />
                                </div>
                                <div className="footer_contact_info">
                                    <span className="footer_contact_label">CALL US</span>
                                    <a href="tel:+8001234567" className="footer_contact_value">800 123 4567</a>
                                </div>
                            </div>
                            <div className="footer_contact_item">
                                <div className="footer_contact_icon">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </div>
                                <div className="footer_contact_info">
                                    <span className="footer_contact_label">SEND E_MAIL</span>
                                    <a href="mailto:you@domain.com" className="footer_contact_value">you@domain.com</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {}
                <div className="footer_container">
                    <div className="footer_row">
                        {}
                        <div className="footer_column footer_column_one">
                            <div className="footer_widget footer_widget_info">
                                <h4 className="footer_widget_title">Porto</h4>
                                <p>Since 2018, JobAway has been connecting hospitality workers to thousands of businesses, private events, and universities.</p>
                                <div className="footer_download_btn">
                                    <a href="about.html" className="footer_download_btn_apple">
                                        <img src={appStoreIcon} alt="App Store" />
                                        <span>Download on App Store</span>
                                    </a>
                                    <a href="about.html" className="footer_download_btn_google">
                                        <img src={googlePlayIcon} alt="Google Play" />
                                        <span>Get it on Google Play</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {}
                        <div className="footer_column">
                            <div className="footer_widget footer_widget_links">
                                <h4 className="footer_widget_title">For Workers</h4>
                                <ul className="footer_links_list">
                                    <li><a href="index.html">Find Work</a></li>
                                    <li><a href="index.html">Jobs in Dubai</a></li>
                                    <li><a href="index.html">Jobs in Virginia</a></li>
                                    <li><a href="index.html">Jobs in California</a></li>
                                    <li><a href="index.html">Jobs in Alaska</a></li>
                                </ul>
                            </div>
                        </div>

                        {}
                        <div className="footer_column">
                            <div className="footer_widget footer_widget_links">
                                <h4 className="footer_widget_title">For Business</h4>
                                <ul className="footer_links_list">
                                    <li><a href="index.html">Merchandising</a></li>
                                    <li><a href="index.html">Hospitality Staff</a></li>
                                    <li><a href="index.html">General Labour</a></li>
                                    <li><a href="index.html">Car Drivers</a></li>
                                    <li><a href="index.html">Bus Driver</a></li>
                                </ul>
                            </div>
                        </div>

                        {}
                        <div className="footer_column">
                            <div className="footer_widget footer_widget_links">
                                <h4 className="footer_widget_title">Company</h4>
                                <ul className="footer_links_list">
                                    <li><a href="about.html">About Us</a></li>
                                    <li><a href="index.html">Career</a></li>
                                    <li><a href="index.html">Partners</a></li>
                                    <li><a href="blog.html">Blog</a></li>
                                    <li><a href="index.html">Clients</a></li>
                                </ul>
                            </div>
                        </div>

                        {}
                        <div className="footer_column">
                            <div className="footer_widget footer_widget_links">
                                <h4 className="footer_widget_title">Help & Support</h4>
                                <ul className="footer_links_list">
                                    <li><a href="contact.html">Contact Us</a></li>
                                    <li><a href="faq.html">General FAQ</a></li>
                                    <li><a href="index.html">Support Center</a></li>
                                    <li><a href="index.html">Privacy Policy</a></li>
                                    <li><a href="index.html">Terms & Conditions</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
            <div className="footer_bottom">
                <div className="footer_container">
                    <div className="footer_bottom_inner footer_flex footer_align_center footer_justify_between">
                        {}
                        <div className="footer_copyright">
                            <p>Copyright © 2024 <a href="index.html">JobAway</a> All rights reserved.</p>
                        </div>

                        {}
                        <ul className="footer_social_links">
                            <li><h5>Follow Us On:</h5></li>
                            <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a></li>
                            <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} /></a></li>
                            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} /></a></li>
                            <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;