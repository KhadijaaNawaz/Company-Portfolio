import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useLocation, Link } from "react-router-dom";
import { faPhone, faBars, faChevronDown } from "@fortawesome/free-solid-svg-icons";

import styles from "./header.module.css";

const Header = () => {
  const [dropdown_open, setDropdown_open] = useState(false);
  const [products_dropdown_open, setProducts_dropdown_open] = useState(false);
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

  const isActive = (path) => location.pathname === path ? styles.active : "";

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

            <div className={`${styles.header_col_nav} ${menu_open ? styles.open : ""}`}>
              <nav className={styles.header_nav}>
                <ul className={styles.header_nav_list}>
                  {}
                  <li>
                    <Link
                      to="/"
                      className={`${styles.header_nav_link} ${isActive("/")}`}
                    >
                      Home
                    </Link>
                  </li>

                  {}
                  <li className={styles.dropdown} onClick={toggleDropdown}>
                    <div className={styles.header_dropdown_nav}>
                      <Link
                        to="/services"
                        className={`${styles.header_nav_link} ${isActive("/services")}`}
                      >
                        Services
                      </Link>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <ul className={styles.header_dropdown_menu}>
                      <li>
                        <Link
                          to="/services"
                          className={`${styles.header_dropdown_item} ${isActive("/services")}`}
                        >
                          Overview
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/accounting"
                          className={`${styles.header_dropdown_item} ${isActive("/accounting")}`}
                        >
                          Accounting
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/tax-planning"
                          className={`${styles.header_dropdown_item} ${isActive("/tax-planning")}`}
                        >
                          Tax Planning
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/business-advisory"
                          className={`${styles.header_dropdown_item} ${isActive("/business-advisory")}`}
                        >
                          Business Advisory
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/payroll"
                          className={`${styles.header_dropdown_item} ${isActive("/payroll")}`}
                        >
                          Payroll Management
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {}
                  <li className={styles.dropdown} onClick={toggleProductsDropdown}>
                    <div className={styles.header_dropdown_nav}>
                      <Link
                        to="/products"
                        className={`${styles.header_nav_link} ${isActive("/products")}`}
                      >
                        Products
                      </Link>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <ul className={styles.header_dropdown_menu}>
                      <li>
                        <Link
                          to="/erp"
                          className={`${styles.header_dropdown_item} ${isActive("/erp")}`}
                        >
                          ERP
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/crm"
                          className={`${styles.header_dropdown_item} ${isActive("/crm")}`}
                        >
                          CRM
                        </Link>
                      </li>
                    </ul>
                  </li>

                  {}
                  <li>
                    <Link
                      to="/industries"
                      className={`${styles.header_nav_link} ${isActive("/industries")}`}
                    >
                      Industries
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/solutions"
                      className={`${styles.header_nav_link} ${isActive("/solutions")}`}
                    >
                      Solutions
                    </Link>
                  </li>

                  <li>
                    <Link
                      to="/recourses"
                      className={`${styles.header_nav_link} ${isActive("/recourses")}`}
                    >
                      Resource Centers
                    </Link>
                  </li>

                  {}
                  <li className={styles.dropdown} onClick={toggleDropdown}>
                    <div className={styles.header_dropdown_nav}>
                      <Link
                        to="/about"
                        className={`${styles.header_nav_link} ${isActive("/about")}`}
                      >
                        Company
                      </Link>
                      <FontAwesomeIcon icon={faChevronDown} />
                    </div>
                    <ul className={styles.header_dropdown_menu}>
                      <li>
                        <Link
                          to="/about"
                          className={`${styles.header_dropdown_item} ${isActive("/about")}`}
                        >
                          About Us
                        </Link>
                      </li>
                      <li>
                        <a
                          href="/contact"
                          className={`${styles.header_dropdown_item} ${isActive("/contact")}`}
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </li>
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