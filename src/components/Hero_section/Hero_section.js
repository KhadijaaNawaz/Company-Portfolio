// import React, { useState, useEffect, useCallback } from "react";
// import "./Hero_section.css";
// import slide1New from "assets/Hero_Section/generic-1.jpg";
// import slide2New from "assets/Hero_Section/slide-2.jpg";
// import CustomIcon from "assets/icons/icon-shape-1.svg";
// import CustomIcon2 from "assets/icons/icon-7.svg";
// import CustomIcon3 from "assets/icons/icon-7-white.svg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {
//   faChevronRight,
//   faChevronLeft,
//   faArrowRight,
// } from "@fortawesome/free-solid-svg-icons";

// const Hero_section = () => {
//   const [activeIndex, setActiveIndex] = useState(0);
//   const slides = [slide1New, slide2New];

//   const nextSlide = useCallback(() => {
//     setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
//   }, [slides.length]);

//   const prevSlide = useCallback(() => {
//     setActiveIndex(
//       (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
//     );
//   }, [slides.length]);

//   useEffect(() => {
//     const interval = setInterval(nextSlide, 100000);
//     return () => clearInterval(interval);
//   }, [nextSlide]);

//   return (
//     <div className="custom-carousel-wrapper">
//       <div className="custom-carousel">
//         <div className="custom-carousel-stage">
//           <div
//             className={`custom-carousel-item ${activeIndex === 0 ? "active" : ""
//               }`}
//           >
//             <div className="custom-carousel-content">
//               <div className="container custom-bg-primary">
//                 <div className="custom-row-center custom-mh-750 position-relative">
//                   <div className="custom-col-left">
//                     <h4 className="custom-h4 custom-appear-animation d-inline-flex align-items-center">
//                       <span>
//                         <img
//                           src={CustomIcon2}
//                           alt="Custom Icon"
//                           width="50"
//                           height="50"
//                           className="custom-icon-img"
//                         />
//                       </span>
//                       Streamline Your Finances
//                     </h4>
//                     <h1 className="custom-h1 custom-appear-animation">
//                       Trusted Financial Guidance for Your Business Success.
//                     </h1>
//                     <p className="custom-paragraph custom-appear-animation fs-2">
//                       Your Partner in Achieving Financial Stability and Growth.
//                     </p>
//                     <a href="#start" className="custom-btn">
//                       <strong className="custom-text">Get Started</strong>
//                       <span className="custom-icon">
//                         <i className="fa-solid fa-arrow-right"></i>
//                       </span>
//                     </a>
//                   </div>
//                   <div className="custom-col-right">
//                     <div className="custom-img-wrapper position-relative">
//                       <img
//                         className="img-fluid custom-carousel-img"
//                         src={slide1New}
//                         loading="lazy"
//                         alt="carousel-slide-1"
//                       />
//                       <div className="custom-stamp-1 slide">
//                         <div className="rotate-animation">
//                           <svg
//                             viewBox="0 0 300 300"
//                             xmlns="http://www.w3.org/2000/svg"
//                             xmlnsXlink="http://www.w3.org/1999/xlink"
//                             className="custom-svg"
//                           >
//                             <path
//                               id="curvedText1"
//                               fill="none"
//                               stroke="none"
//                               d="M 150,44 A 110,110 0 1,1 149.9,44"
//                             />
//                             <text className="curved-text">
//                               <textPath xlinkHref="#curvedText1">
//                                 GLOBAL ACCOUNTING COMPANY - TAX ADVISOR - NEW YORK BASED -
//                               </textPath>
//                             </text>
//                           </svg>
//                         </div>
//                         <div className="pct">
//                           <img
//                             src={CustomIcon}
//                             alt="Custom Icon"
//                             className="custom-icon-svg"
//                             width="50"
//                             height="50"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div
//             className={`custom-carousel-item ${activeIndex === 1 ? "active" : ""
//               }`}
//           >
//             <div className="custom-carousel-content custom-dark-overlay">
//               <div
//                 className="background-image-wrapper custom-bg-slide custom-el-2"
//                 style={{
//                   backgroundImage: `url(${slide2New})`,
//                   backgroundSize: "cover",
//                   backgroundPosition: "center",
//                 }}
//               />
//               <div className="container text-color-light custom-text-color-light">
//                 <div className="custom-row-hero custom-justify-center custom-align-center custom-mh-750 py-5">
//                   <div className="col-lg-6 text-center">
//                     <div className="">
//                       <img
//                         src={CustomIcon}
//                         alt="Custom Icon"
//                         className="custom-icon-svg-2 "
//                         width="100"
//                         height="100"
//                       />
//                     </div>
//                     <h4 className="custom-h4">
//                       <img
//                         width={20}
//                         height={20}
//                         src={CustomIcon3}
//                         alt=""
//                         className=" custom-icon-img"
//                       />
//                       Outstanding Outcomes
//                     </h4>
//                     <h2 className="custom-h1">
//                       We Transform Financial Strategies into Tangible Success
//                     </h2>
//                     <a href="#start" className="custom-btn">
//                       <strong className="custom-text">Get Started</strong>
//                       <span className="custom-icon">
//                         <i className="fa-solid fa-arrow-right"></i>
//                       </span>
//                     </a>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="custom-carousel-nav">
//           <button
//             className="custom-prev-btn"
//             onClick={prevSlide}
//             aria-label="Previous Slide"
//           >
//             <FontAwesomeIcon icon={faChevronLeft} />
//           </button>
//           <button
//             className="custom-next-btn"
//             onClick={nextSlide}
//             aria-label="Next Slide"
//           >
//             <FontAwesomeIcon icon={faChevronRight} />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero_section;
