import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import styles from "./header.module.css";

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
        <header class={styles.header}>
            <div className={styles.header_body}>
                <div className={styles.header_container}>
                    <div className={styles.header_wrapper}>
                        <div className={styles.header_col_logo}>
                            <div className={styles.header_logo}>
                                <a href="#">
                                    <img
                                        alt="Company Logo"
                                        width={131}
                                        height={27}
                                        src="assets/logo.png"
                                        className={styles.header_logo_img}
                                    />
                                </a>
                            </div>
                        </div>

                        <div className={`${styles.header_col_nav} ${menu_open ? styles.open : ""}`}>
                            <nav className={styles.header_nav}>
                                <div className={styles.header_logo}>
                                    <a href="#">
                                        <img
                                            alt="Company Logo"
                                            width={131}
                                            height={27}
                                            src="assets/logo.png"
                                            className={styles.header_logo_img}
                                        />
                                    </a>
                                </div>
                                <ul className={styles.header_nav_list}>
                                    <li>
                                        <a href="#" className={`${styles.header_nav_link} ${styles.active}`}>Home</a>
                                    </li>
                                    <li className={`${styles.dropdown} ${dropdown_open ? styles.open : ''}`} onClick={toggleDropdown}>
                                        <div className={styles.header_dropdown_nav}>
                                            <a href="#" className={styles.header_nav_link}>Services</a>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div>
                                        <ul className={styles.header_dropdown_menu}>
                                            <li><a href="#" className={styles.header_dropdown_item}>Overview</a></li>
                                            <li><a href="#" className={styles.header_dropdown_item}>Accounting</a></li>
                                            <li><a href="#" className={styles.header_dropdown_item}>Tax Planning</a></li>
                                            <li><a href="#" className={styles.header_dropdown_item}>Business Advisory</a></li>
                                            <li><a href="#" className={styles.header_dropdown_item}>Payroll Management</a></li>
                                            <li><a href="#" className={styles.header_dropdown_item}>Global Accounting</a></li>
                                            <li><a href="#" className={styles.header_dropdown_item}>Admin Services</a></li>
                                        </ul>
                                    </li>
                                    <li><a className={styles.header_nav_link} href="#">About</a></li>
                                    <li><a className={styles.header_nav_link} href="#">Process</a></li>
                                    <li><a className={styles.header_nav_link} href="#">Projects</a></li>
                                    <li><a className={styles.header_nav_link} href="#">News</a></li>
                                    <li><a className={styles.header_nav_link} href="#">Contact</a></li>
                                </ul>
                            </nav>
                        </div>

                        <div className={styles.header_col_contact}>
                            <a href="tel:1234567890" className={`${styles.phone_link} ${styles.header_nav_link}`}>
                                <FontAwesomeIcon icon={faPhone} className={styles.phone_icon} />
                                <p>800 123 4567</p>
                            </a>

                            <a href="#" className={styles.btn_quote}>
                                Get Free Quote <i className={styles.arrow_icon}>→</i>
                            </a>

                            <div className={styles.header_menu_toggle} onClick={toggleMenu}>
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
