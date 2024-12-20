import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, Link } from "react-router-dom";
import {
  faPhone,
  faBars,
  faChevronDown,
} from "@fortawesome/free-solid-svg-icons";

import styles from "./header.module.css";

const Header = () => {
  const [dropdown_open, setDropdown_open] = useState(false);
  const [products_dropdown_open, setProducts_dropdown_open] = useState(false); // State for Products dropdown
  const [menu_open, setMenu_open] = useState(false);

  const toggleDropdown = () => {
    setDropdown_open(!dropdown_open);
  };

  const toggleProductsDropdown = () => {
    setProducts_dropdown_open(!products_dropdown_open);
  };

  const toggleMenu = () => {
    setMenu_open(!menu_open);
  };

  const location = useLocation();

  return (
    <header className={styles.header}>
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

            <div
              className={`${styles.header_col_nav} ${
                menu_open ? styles.open : ""
              }`}
            >
              <nav className={styles.header_nav}>
                <ul className={styles.header_nav_list}>
                  {/* Home */}
                  <li>
                    <Link
                      to="/"
                      className={`${styles.header_nav_link} ${
                        location.pathname === "/" ? styles.active : ""
                      }`}
                    >
                      Home
                    </Link>
                  </li>

                  <li
                    className={`${styles.dropdown} ${
                      dropdown_open ? styles.open : ""
                    }`}
                    onClick={toggleDropdown}
                  >
                    <div className={styles.header_dropdown_nav}>
                      <Link
                        to="/services"
                        className={`${styles.header_nav_link} ${
                          location.pathname === "/services" ? styles.active : ""
                        }`}
                      >
                        Services
                      </Link>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <ul className={styles.header_dropdown_menu}>
                      <li>
                        <Link
                          to="/services"
                          className={styles.header_dropdown_item}
                        >
                          Overview
                        </Link>
                      </li>
                      <li>
                        <Link to="/accounting" className={styles.header_dropdown_item}>
                          Accounting
                        </Link>
                      </li>
                      <li>
                        <Link to="/tax-planning" className={styles.header_dropdown_item}>
                          Tax Planning
                        </Link>
                      </li>
                      <li>
                        <Link to="/business-advisory" className={styles.header_dropdown_item}>
                          Business Advisory
                        </Link>
                      </li>
                      <li>
                        <Link to="/payroll" className={styles.header_dropdown_item}>
                          Payroll Management
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li
                    className={`${styles.dropdown} ${
                      products_dropdown_open ? styles.open : ""
                    }`}
                    onClick={toggleProductsDropdown}
                  >
                    <div className={styles.header_dropdown_nav}>
                      <Link
                        to="/products"
                        className={`${styles.header_nav_link} ${
                          location.pathname === "/products" ? styles.active : ""
                        }`}
                      >
                        Products
                      </Link>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <ul className={styles.header_dropdown_menu}>
                      <li>
                        <Link to="/products/erp" className={styles.header_dropdown_item}>
                          ERP
                        </Link>
                      </li>
                      <li>
                        <Link to="/products/crm" className={styles.header_dropdown_item}>
                          CRM
                        </Link>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <Link
                      to="/industries"
                      className={`${styles.header_nav_link} ${
                        location.pathname === "/process" ? styles.active : ""
                      }`}
                    >
                      Industries
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/solutions"
                      className={`${styles.header_nav_link} ${
                        location.pathname === "/projects" ? styles.active : ""
                      }`}
                    >
                      Solutions
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/recourses"
                      className={`${styles.header_nav_link} ${
                        location.pathname === "/projects" ? styles.active : ""
                      }`}
                    >
                      Resource Centers
                    </Link>
                  </li>

                  <li
                    className={`${styles.dropdown} ${
                      dropdown_open ? styles.open : ""
                    }`}
                    onClick={toggleDropdown}
                  >
                    <div className={styles.header_dropdown_nav}>
                      <Link
                        to="/company"
                        className={`${styles.header_nav_link} ${
                          location.pathname === "/services" ? styles.active : ""
                        }`}
                      >
                        Company
                      </Link>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <ul className={styles.header_dropdown_menu}>
                      <li>
                        <Link
                          to="/about"
                          className={styles.header_dropdown_item}
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <a href="/contact" className={styles.header_dropdown_item}>
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </nav>
            </div>

            <div className={styles.header_col_contact}>
              <a
                href="tel:1234567890"
                className={`${styles.phone_link} ${styles.header_nav_link}`}
              >
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
