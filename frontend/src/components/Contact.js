import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = useState({ type: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: '', message: '' });

    try {
      const response = await axios.post('/api/contact/', formData);
      setStatus({
        type: 'success',
        message: 'Thank you! Your message has been sent successfully.'
      });
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again later.'
      });
      console.error('Error sending message:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="section contact" id="contact">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">I'd love to hear from you. Send me a message!</p>
      
      <div className="contact-container">
        <div className="contact-info">
          <div className="info-item">
            <div className="info-icon">
              <i className="fas fa-envelope"></i>
            </div>
            <div className="info-content">
              <h3>Email</h3>
              <p>saipraveendasari51@gmail.com</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <i className="fas fa-phone"></i>
            </div>
            <div className="info-content">
              <h3>Phone</h3>
              <p>+91 9494189664</p>
            </div>
          </div>
          
          <div className="info-item">
            <div className="info-icon">
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <div className="info-content">
              <h3>Location</h3>
              <p>Visakhapatnam, Andhra Pradesh, India</p>
            </div>
          </div>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          {status.message && (
            <div className={`status-message ${status.type}`}>
              {status.message}
            </div>
          )}
          
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="Your Name"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your.email@example.com"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              placeholder="Message Subject"
            />
          </div>
          
          <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="6"
              placeholder="Your Message"
            ></textarea>
          </div>
          
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

