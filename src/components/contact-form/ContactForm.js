import React, { useState } from 'react';
import styles from './contactform.module.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    additionalInfo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);
  };

  return (
    <div className={styles.form_container}>
      <form onSubmit={handleSubmit}>
        
        {/* Name and Email Fields (Row 1) */}
        <div className={styles.form_group}>
          <div>
            <label className={styles.form_label}>Your Name *</label>
            <input
              className={styles.form_input}
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label className={styles.form_label}>Email Address</label>
            <input
              className={styles.form_input}
              type="email"
              name="email"
              placeholder="Enter your email address"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Phone and Company Fields (Row 2) */}
        <div className={styles.form_group}>
          <div>
            <label className={styles.form_label}>Phone Number</label>
            <input
              className={styles.form_input}
              type="tel"
              name="phone"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <label className={styles.form_label}>Company Name</label>
            <input
              className={styles.form_input}
              type="text"
              name="company"
              placeholder="Enter your company name"
              value={formData.company}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Additional Information */}
        <div className={styles.form_group}>
          <label className={styles.form_label}>Additional Information</label>
          <textarea
            className={styles.form_textarea}
            name="additionalInfo"
            placeholder="Enter Additional Information or Questions"
            value={formData.additionalInfo}
            onChange={handleChange}
          ></textarea>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
