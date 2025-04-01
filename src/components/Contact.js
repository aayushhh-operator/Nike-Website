import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="contact">
      <div className="container">
        <h1 className="section-title">Contact Us</h1>
        <p className="section-subtitle">
          Have questions about our products or need assistance? We're here to help!
        </p>
        
        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <h3>Visit Us</h3>
              <p>Nike World Headquarters<br />One Bowerman Drive<br />Beaverton, OR 97005</p>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <h3>Call Us</h3>
              <p>1-800-806-6453</p>
              <p>Mon-Fri: 7:00 AM - 7:00 PM PT</p>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <h3>Email Us</h3>
              <p>service@nike.com</p>
              <p>orders@nike.com</p>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div className="form-group">
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="Subject"
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <button type="submit" className="btn">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
