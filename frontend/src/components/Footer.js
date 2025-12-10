import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-text">
            <p>&copy; {currentYear} DASARI SAI PRAVEEN. All rights reserved.</p>
          </div>
          <div className="footer-social">
            <a href="https://github.com/2501050160" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="GitHub">
              <i className="fab fa-github"></i>
            </a>
            <a href="https://linkedin.com/in/sai-praveen-dasari" target="_blank" rel="noopener noreferrer" className="footer-icon" aria-label="LinkedIn">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="mailto:saipraveendasari51@gmail.com" className="footer-icon" aria-label="Email">
              <i className="fas fa-envelope"></i>
            </a>
            <a href="tel:9494189664" className="footer-icon" aria-label="Phone">
              <i className="fas fa-phone"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

