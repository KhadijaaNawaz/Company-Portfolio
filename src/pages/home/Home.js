import React, { useState } from 'react'
import homestyles from './home.module.css'
import Services from '../../components/services/Services';
import SectionTitle from '../../components/section-title/SectionTitle';
import Accordion from '../../components/accordion/Accordion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import HeroSection from '../../components/hero/Hero';

const Home = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
      setOpenIndex(index === openIndex ? null : index);
    };
    const data = [
        {
          icon: '/assets/global.png', 
          title: 'Global Accounting',
          description: 'Expert accounting solutions for businesses worldwide.',
        },
        {
          icon: '/assets/tax.png', 
          title: 'Tax Consulting',
          description: 'Optimize your taxes with expert consulting planning.',
        },
        {
          icon: '/assets/admin.png', 
          title: 'Admin Services',
          description: 'Streamline your operations with our administrative services.',
        },
      ];
  return (
      <div className={homestyles.home_page}>
         <div className='home_wrapper'>

         </div>
        <HeroSection />

        <section className={homestyles.section_wrapper}>
            <div className={homestyles.container}>
            {data.map((item, index) => (
                <div key={index} className={homestyles.column}>
                <img src={item.icon} alt={item.title} className={homestyles.icon} />
                <div className={homestyles.text_content}>
                    <h3 className={homestyles.title}>{item.title}</h3>
                    <p className={homestyles.description}>{item.description}</p>
                </div>
                </div>
            ))}
            </div>
        </section>

        <section className={homestyles.why_us_wrapper}>
            <div className={homestyles.why_us_container}>
                <div className={homestyles.left}>
                    <SectionTitle 
                        theme={'light'}
                        btn_text={"Who We Are"}
                        title={'Empowering Businesses Through Innovation'}
                        desc={"We are a leading IT solutions provider specializing in enterprise-grade ERP systems and cutting-edge CMIS platforms. Our mission is to revolutionize your operations with technology-driven solutions tailored to your unique needs."}
                    />
                    <button className={`${homestyles.contact_btn}`}>
                        Learn More
                        <span className={homestyles.arrow}>
                           <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                    </button>
                </div>
                <div className={homestyles.right}>
                    <img src='' alt='' />
                </div>
            </div>
        </section>

        <Services />

        <section className={homestyles.why_us_wrapper}>
            <div className={homestyles.why_us_container}>
                <div className={homestyles.left}>
                    <SectionTitle 
                        theme={'light'}
                        btn_text={"Let's Work Together"}
                        title={'Why Choose Us?'}
                        desc ={"Whether you're a small business owner, an individual seeking tax advice, or a multinational corporation, we're here to support you. Contact us today to schedule a consultation and discover how we can help you achieve financial peace of mind."}
                    />
                    <button className={`${homestyles.contact_btn}`}>
                        Contact Us 
                        <span className={homestyles.arrow}>
                           <FontAwesomeIcon icon={faArrowRight} />
                        </span>
                    </button>
                </div>
                <div className={homestyles.right}>
                    <Accordion />
                </div>
            </div>
        </section>
      </div>
  
  )
}

export default Home