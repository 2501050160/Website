import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [typedText, setTypedText] = useState('');
  const roles = ["IoT Developer", "Full-Stack Engineer", "ASME Chairperson"];
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentRole = roles[currentRoleIndex];
    
    if (!isDeleting && typedText.length < currentRole.length) {
      timeout = setTimeout(() => {
        setTypedText(currentRole.substring(0, typedText.length + 1));
      }, 100);
    } else if (!isDeleting && typedText.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && typedText.length > 0) {
      timeout = setTimeout(() => {
        setTypedText(currentRole.substring(0, typedText.length - 1));
      }, 50);
    } else if (isDeleting && typedText.length === 0) {
      setIsDeleting(false);
      setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [typedText, isDeleting, currentRoleIndex, roles]);

  return (
    <section className="home" id="home">
      <div className="home-background">
        <div className="animated-bg"></div>
        <div className="particles">
          {[...Array(50)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 4}s`
            }}></div>
          ))}
        </div>
      </div>
      
      <div className="home-container">
        <div className="home-content">
          <div className="home-text">
            <div className="greeting-wrapper">
              <span className="home-greeting">Hello, I'm</span>
            </div>
            <h1 className="home-name">
              <span className="name-first">DASARI</span>
              <span className="name-last">SAI PRAVEEN</span>
            </h1>
            <h2 className="home-title">
              <span className="title-prefix">I'm a </span>
              <span className="typed-text">{typedText}</span>
              <span className="cursor">|</span>
            </h2>
            <p className="home-description">
              Innovative IoT Developer and Full-Stack Engineer with extensive experience in building 
              real-time systems and embedded solutions. Developed <strong>63 IoT projects</strong> including 
              34 major implementations and 29 mini-projects. As Chairperson of ASME, guided 53 student projects.
            </p>
            
            <div className="home-stats">
              <div className="stat-box">
                <div className="stat-number" data-target="63">0</div>
                <div className="stat-label">IoT Projects</div>
              </div>
              <div className="stat-box">
                <div className="stat-number" data-target="34">0</div>
                <div className="stat-label">Major Projects</div>
              </div>
              <div className="stat-box">
                <div className="stat-number" data-target="53">0</div>
                <div className="stat-label">Projects Guided</div>
              </div>
            </div>

            <div className="home-buttons">
              <Link to="/projects" className="btn btn-primary">
                <span>View My Work</span>
                <i className="fas fa-arrow-right"></i>
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                <span>Get In Touch</span>
                <i className="fas fa-envelope"></i>
              </Link>
            </div>
            
            <div className="home-social">
              <a 
                href="https://github.com/2501050160" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
                aria-label="GitHub"
              >
                <i className="fab fa-github"></i>
              </a>
              <a 
                href="https://linkedin.com/in/sai-praveen-dasari" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-icon"
                aria-label="LinkedIn"
              >
                <i className="fab fa-linkedin"></i>
              </a>
              <a 
                href="mailto:saipraveendasari51@gmail.com" 
                className="social-icon"
                aria-label="Email"
              >
                <i className="fas fa-envelope"></i>
              </a>
              <a 
                href="tel:9494189664" 
                className="social-icon"
                aria-label="Phone"
              >
                <i className="fas fa-phone"></i>
              </a>
            </div>
          </div>
          
          <div className="home-image">
            <div className="image-wrapper">
              <div className="floating-shapes">
                <div className="shape shape-1"></div>
                <div className="shape shape-2"></div>
                <div className="shape shape-3"></div>
                <div className="shape shape-4"></div>
              </div>
              <div className="profile-card">
                <div className="profile-image">
                  <i className="fas fa-user-circle"></i>
                </div>
                <div className="profile-info">
                  <div className="info-item">
                    <i className="fas fa-map-marker-alt"></i>
                    <span>Visakhapatnam, AP</span>
                  </div>
                  <div className="info-item">
                    <i className="fas fa-briefcase"></i>
                    <span>Available for Opportunities</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="scroll-indicator">
          <div className="mouse">
            <div className="wheel"></div>
          </div>
          <div className="scroll-text">Scroll Down</div>
        </div>
      </div>
    </section>
  );
};

export default Home;
