import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaComment, FaPaperPlane } from "react-icons/fa";
import './Contact.css';
import Particles from "../../Particle";
import PageHeader from '../../../pageHeaderContent/PageHeader';
import Social from './Social';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <>
    <Particles />
      <PageHeader title="Contact" icon={<FaEnvelope />} />
      <div className="contact-container">
        <div className="contact-card">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="input-group">
              <FaUser className="input-icon" />
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="input-group">
              <FaEnvelope className="input-icon" />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="input-group">
              <FaComment className="input-icon" />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              <FaPaperPlane /> Send
            </button>
          </form>
        </div>
      </div>
      <Social/>
    </>
  );
}

export default Contact;