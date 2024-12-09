import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";
import "./Header.css";

const Header = () => {
    const [dropdown_open, setDropdown_open] = useState(false);
    const [menu_open, setMenu_open] = useState(false);
    const toggleDropdown = () => {
        setDropdown_open(!dropdown_open);
    };
    const toggleMenu = () => {
        setMenu_open(!menu_open);
    };

    return (
        <header id="header">
            <div className="header_body">
                <div className="header_container">
                    <div className="header_wrapper">
                        <div className="header_col_logo">
                            <div className="header_logo">
                                <a href="#">
                                    <img
                                        alt="Company Logo"
                                        width={131}
                                        height={27}
                                        src="assets/logo.png"
                                        className="header_logo_img"
                                    />
                                </a>
                            </div>
                        </div>

                        <div className={`header_col_nav ${menu_open ? "open" : ""}`}>
                            <nav className="header_nav">
                                <div className="header_logo">
                                    <a href="#">
                                        <img
                                            alt="Company Logo"
                                            width={131}
                                            height={27}
                                            src="assets/logo.png"
                                            className="header_logo"
                                        />
                                    </a>
                                </div>
                                <ul className="header_nav_list">
                                    <li>
                                        <a href="#" className="header_nav_link active">Home</a>
                                    </li>
                                    <li className={`dropdown ${dropdown_open ? 'open' : ''}`} onClick={toggleDropdown}>
                                        <div className="header_dropdown_nav">
                                            <a href="#" className="header_nav_link">Services</a>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div>
                                        <ul className="header_dropdown_menu">
                                            <li><a href="#" className="header_dropdown_item">Overview</a></li>
                                            <li><a href="#" className="header_dropdown_item">Accounting</a></li>
                                            <li><a href="#" className="header_dropdown_item">Tax Planning</a></li>
                                            <li><a href="#" className="header_dropdown_item">Business Advisory</a></li>
                                            <li><a href="#" className="header_dropdown_item">Payroll Management</a></li>
                                            <li><a href="#" className="header_dropdown_item">Global Accounting</a></li>
                                            <li><a href="#" className="header_dropdown_item">Admin Services</a></li>
                                        </ul>
                                    </li>
                                    <li><a className="header_nav_link" href="#">About</a></li>
                                    <li><a className="header_nav_link" href="#">Process</a></li>
                                    <li><a className="header_nav_link" href="#">Projects</a></li>
                                    <li><a className="header_nav_link" href="#">News</a></li>
                                    <li><a className="header_nav_link" href="#">Contact</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className="header_col_contact">
                            <a href="tel:1234567890" className="phone_link header_nav_link">
                                <FontAwesomeIcon icon={faPhone} className="phone_icon" />
                                <p>800 123 4567</p>
                            </a>

                            <a href="#" className="btn_quote">
                                Get Free Quote <i className="arrow_icon">→</i>
                            </a>

                            <div className="header_menu_toggle" onClick={toggleMenu}>
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
