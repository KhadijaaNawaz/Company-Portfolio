import React from "react";
import "./Footer.css";
import logo from '../../assets/logo.png';
import AppStore from '../../assets/icon-4.png';
import GooglePlay from '../../assets/icon-5.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <>
            <footer className="main-footer">
                <div className="widget-section custom-widget-section">
                    <div className="footer-header">
                        <div className="container">
                            {}
                            <div className="footer-logo">
                                <img src={logo} alt="Footer Logo" />
                            </div>
                            {}
                            <div className="footer-contact">
                                {}
                                <div className="footer-item">
                                    <div className="icon">
                                    <FontAwesomeIcon icon={faPhone} />
                                    </div>
                                    <div className="info">
                                        <span className="label">CALL US</span>
                                        <a href="tel:+8001234567" className="value">800 123 4567</a>
                                    </div>
                                </div>
                                {}
                                <div className="footer-item">
                                    <div className="icon">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                    </div>
                                    <div className="info">
                                        <span className="label">SEND E-MAIL</span>
                                        <a href="mailto:you@domain.com" className="value">you@domain.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="custom-container">
                        <div className="custom-row">
                            <div className="footer-column1">
                                <div className="footer-widget logo-widget custom-mr-30">
                                    <figure className="footer-widget links-widget">
                                        <div className="widget-title">
                                            <h4>Porto</h4>
                                        </div>
                                    </figure>
                                    <p>
                                        Since 2018, JobAway has been connecting hospitality workers
                                        to thousands of businesses, private events, and
                                        universities.
                                    </p>
                                    <div className="download-btn">
                                        <a href="about.html" className="apple-store">
                                            <img src={AppStore} alt="" />
                                            <span>Download on App Store</span>
                                        </a>
                                        <a href="about.html" className="play-store">
                                            <img src={GooglePlay} alt="" />
                                            <span>Get it on Google Play</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h4>For Workers</h4>
                                    </div>
                                    <ul className="links-list">
                                        <li>
                                            <a href="index.html">Find Work</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Jobs in Dubai</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Jobs in Virginia</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Jobs in California</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Jobs in Alaska</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h4>For Business</h4>
                                    </div>
                                    <ul className="links-list">
                                        <li>
                                            <a href="index.html">Merchandising</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Hospitality Staff</a>
                                        </li>
                                        <li>
                                            <a href="index.html">General Labour</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Car Drivers</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Bus Driver</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h4>Company</h4>
                                    </div>
                                    <ul className="links-list">
                                        <li>
                                            <a href="about.html">About Us</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Career</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Partners</a>
                                        </li>
                                        <li>
                                            <a href="blog.html">Blog</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Clients</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="footer-column">
                                <div className="footer-widget links-widget">
                                    <div className="widget-title">
                                        <h4>Help & Support</h4>
                                    </div>
                                    <ul className="links-list">
                                        <li>
                                            <a href="contact.html">Contact Us</a>
                                        </li>
                                        <li>
                                            <a href="faq.html">General FAQ</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Support Center</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Privacy Policy</a>
                                        </li>
                                        <li>
                                            <a href="index.html">Terms & Conditions</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="custom-container">
                        <div className="bottom-inner custom-flex custom-align-center custom-justify-between">
                            <div className="copyright">
                                <p>
                                    Copyright © 2024 <a href="index.html">JobAway</a> All rights
                                    reserved.
                                </p>
                            </div>

                            <ul className="social-links">
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
        </>
    );
};

export default Footer;