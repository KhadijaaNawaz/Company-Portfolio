import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import "./Header.css";
import logo from "../assets/logo.png";


const Header = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);


    const toggleDropdown = () => {
        setDropdownOpen(!dropdownOpen);
    };


    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header id="header">
            <div className="header-body">
                <div className="container">
                    <div className="row">
                        {/* Logo */}
                        <div className="col-logo">
                            <div className="header-logo">
                                <a href="demo-accounting-1.html">
                                    <img
                                        alt="Company Logo"
                                        width={131}
                                        height={27}
                                        src={logo}
                                        className="img-fluid"
                                    />
                                </a>
                            </div>
                        </div>

                        {/* Navigation */}
                        <div className={`col-nav ${menuOpen ? "open" : ""}`}>
                            <nav className="header-nav">
                                <div className="header-logo">
                                    <a href="demo-accounting-1.html">
                                        <img
                                            alt="Company Logo"
                                            width={131}
                                            height={27}
                                            src={logo}
                                            className="img-fluid"
                                        />
                                    </a>
                                </div>
                                <ul className="nav-list">
                                    <li>
                                        <a href="demo-accounting-1.html" className="nav-link active">Home</a>
                                    </li>
                                    <li className={`dropdown ${dropdownOpen ? 'open' : ''}`} onClick={toggleDropdown}>
                                        <div className="dropdown-nav-link">
                                            <a href="demo-accounting-1-services.html" className="nav-link">Services</a>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div>
                                        <ul className="dropdown-menu">
                                            <li><a href="demo-accounting-1-services.html" className="dropdown-item">Overview</a></li>
                                            <li><a href="demo-accounting-1-services-details.html" className="dropdown-item">Accounting</a></li>
                                            <li><a href="demo-accounting-1-services-details.html" className="dropdown-item">Tax Planning</a></li>
                                            <li><a href="demo-accounting-1-services-details.html" className="dropdown-item">Business Advisory</a></li>
                                            <li><a href="demo-accounting-1-services-details.html" className="dropdown-item">Payroll Management</a></li>
                                            <li><a href="demo-accounting-1-services-details.html" className="dropdown-item">Global Accounting</a></li>
                                            <li><a href="demo-accounting-1-services-details.html" className="dropdown-item">Admin Services</a></li>
                                        </ul>
                                    </li>
                                    <li><a className="nav-link" href="demo-accounting-1-about.html">About</a></li>
                                    <li><a className="nav-link" href="demo-accounting-1-process.html">Process</a></li>
                                    <li><a className="nav-link" href="demo-accounting-1-projects.html">Projects</a></li>
                                    <li><a className="nav-link" href="demo-accounting-1-news.html">News</a></li>
                                    <li><a className="nav-link" href="demo-accounting-1-contact.html">Contact</a></li>
                                </ul>
                            </nav>
                        </div>

                        {/* Contact & Button */}
                        <div className="col-contact">
                            <a href="tel:1234567890" className="phone-link nav-link">
                                <FontAwesomeIcon icon={faPhone} className="phone-icon" />
                                <p>800 123 4567</p>
                            </a>

                            <a href="demo-accounting-1-contact.html" className="btn-quote">
                                Get Free Quote <i className="arrow-icon">→</i>
                            </a>

                            {/* Mobile Menu Toggle */}
                            <div className="col-menu-toggle" onClick={toggleMenu}>
                                <FontAwesomeIcon icon={faBars} />
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
