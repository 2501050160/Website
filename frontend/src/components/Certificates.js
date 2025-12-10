import React, { useState } from 'react';
import './Certificates.css';

const Certificates = () => {
  const [hoveredCert, setHoveredCert] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    setMousePosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseEnter = (certId) => {
    setHoveredCert(certId);
  };

  const handleMouseLeave = () => {
    setHoveredCert(null);
  };

  const firstPrizeAwards = [
    { id: 1, title: 'Best Paper Award', event: 'Stepcone 2k25', image: '/images/certificates/stepcone.jpg' },
    { id: 2, title: 'First Prize, Paper Presentation', event: 'ASTHRA 3.0', image: '/images/certificates/asthra.jpg' },
    { id: 3, title: 'First Prize, Paper Presentation', event: 'UTKARSH 2k25', image: '/images/certificates/utkarsh.jpg' },
    { id: 4, title: 'First Prize, Paper Presentation', event: 'Saarang 2K25', image: '/images/certificates/saarang.jpg' },
    { id: 5, title: 'First Prize, Web Development', event: 'Tech Fest 2024', image: '/images/certificates/techfest.jpg' }
  ];

  const secondPrizeAwards = [
    { id: 6, title: 'Second Prize, Paper Presentation', event: 'Synergy 2k25', image: '/images/certificates/synergy.jpg' },
    { id: 7, title: 'Second Prize, React Development', event: 'Frontend Fest', image: '/images/certificates/frontend.jpg' },
    { id: 8, title: 'Second Prize, Django Project', event: 'Backend Battle', image: '/images/certificates/backend.jpg' },
    { id: 9, title: 'Second Prize, IoT Implementation', event: 'Innovation Challenge', image: '/images/certificates/iot.jpg' }
  ];

  const thirdPrizeAwards = [
    { id: 10, title: 'Third Prize, Poster Presentation', event: 'Saarang 2K25', image: '/images/certificates/poster.jpg' },
    { id: 11, title: 'Third Prize, Software Testing', event: 'Quality Quest', image: '/images/certificates/testing.jpg' },
    { id: 12, title: 'Third Prize, Real-time Systems', event: 'Live Coding', image: '/images/certificates/coding.jpg' }
  ];

  const certifications = [
    { id: 13, title: 'Full-Stack Java Development', image: '/images/certificates/java.jpg' },
    { id: 14, title: 'Advanced Python & Django', image: '/images/certificates/python.jpg' },
    { id: 15, title: 'React Development Specialization', image: '/images/certificates/react.jpg' },
    { id: 16, title: 'IoT Systems Integration', image: '/images/certificates/iot-cert.jpg' },
    { id: 17, title: 'Google Maps API Integration', image: '/images/certificates/maps.jpg' },
    { id: 18, title: 'Database Design & Management', image: '/images/certificates/database.jpg' },
    { id: 19, title: 'Web Security Fundamentals', image: '/images/certificates/security.jpg' },
    { id: 20, title: '3D Printing & Prototyping', image: '/images/certificates/3d.jpg' },
    { id: 21, title: 'Cloud Computing Basics', image: '/images/certificates/cloud.jpg' }
  ];

  const renderCertCard = (cert, prize = null) => (
    <div
      key={cert.id}
      className="cert-card"
      onMouseEnter={() => handleMouseEnter(cert.id)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
    >
      <div className="cert-icon">
        {prize === 'first' && <i className="fas fa-trophy gold"></i>}
        {prize === 'second' && <i className="fas fa-trophy silver"></i>}
        {prize === 'third' && <i className="fas fa-trophy bronze"></i>}
        {!prize && <i className="fas fa-certificate"></i>}
      </div>
      <div className="cert-content">
        <h4 className="cert-title">{cert.title}</h4>
        {cert.event && <p className="cert-event">{cert.event}</p>}
      </div>
      <div className="cert-hover-indicator">
        <i className="fas fa-eye"></i>
        <span>Hover to view</span>
      </div>
    </div>
  );

  return (
    <section className="section certificates" id="certificates">
      <div className="section-header">
        <h2 className="section-title">Achievements & Certifications</h2>
        <p className="section-subtitle">Awards, recognitions, and professional certifications</p>
      </div>

      <div className="certificates-container" onMouseMove={handleMouseMove}>
        {/* First Prize Awards */}
        <div className="awards-section">
          <div className="awards-header">
            <div className="awards-icon gold">
              <i className="fas fa-trophy"></i>
            </div>
            <h3 className="awards-title">First Prize Awards (12)</h3>
          </div>
          <div className="cert-grid">
            {firstPrizeAwards.map(cert => renderCertCard(cert, 'first'))}
          </div>
        </div>

        {/* Second Prize Awards */}
        <div className="awards-section">
          <div className="awards-header">
            <div className="awards-icon silver">
              <i className="fas fa-trophy"></i>
            </div>
            <h3 className="awards-title">Second Prize Awards (8)</h3>
          </div>
          <div className="cert-grid">
            {secondPrizeAwards.map(cert => renderCertCard(cert, 'second'))}
          </div>
        </div>

        {/* Third Prize Awards */}
        <div className="awards-section">
          <div className="awards-header">
            <div className="awards-icon bronze">
              <i className="fas fa-trophy"></i>
            </div>
            <h3 className="awards-title">Third Prize Awards (6)</h3>
          </div>
          <div className="cert-grid">
            {thirdPrizeAwards.map(cert => renderCertCard(cert, 'third'))}
          </div>
        </div>

        {/* Certifications */}
        <div className="awards-section">
          <div className="awards-header">
            <div className="awards-icon">
              <i className="fas fa-certificate"></i>
            </div>
            <h3 className="awards-title">Professional Certifications (9)</h3>
          </div>
          <div className="cert-grid">
            {certifications.map(cert => renderCertCard(cert))}
          </div>
        </div>

        {/* Hover Image Preview */}
        {hoveredCert && (
          <div
            className="cert-image-preview"
            style={{
              left: `${Math.min(mousePosition.x + 20, window.innerWidth - 450)}px`,
              top: `${Math.min(mousePosition.y + 20, window.innerHeight - 550)}px`,
            }}
          >
            <div className="preview-content">
              <div className="preview-header">
                <span className="preview-title">
                  {[...firstPrizeAwards, ...secondPrizeAwards, ...thirdPrizeAwards, ...certifications]
                    .find(c => c.id === hoveredCert)?.title || 'Certificate'}
                </span>
                <button 
                  className="preview-close"
                  onClick={handleMouseLeave}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
              <div className="preview-image">
                <img
                  src={[...firstPrizeAwards, ...secondPrizeAwards, ...thirdPrizeAwards, ...certifications]
                    .find(c => c.id === hoveredCert)?.image || '/images/placeholder-cert.jpg'}
                  alt="Certificate"
                  onError={(e) => {
                    e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iNDAwIiBoZWlnaHQ9IjMwMCIgZmlsbD0iIzIyMjIyMiIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjAiIGZpbGw9IiM2NjYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5DZXJ0aWZpY2F0ZSBJbWFnZTwvdGV4dD48L3N2Zz4=';
                  }}
                />
                <div className="preview-placeholder">
                  <i className="fas fa-image"></i>
                  <p>Certificate Image</p>
                  <small>Place your certificate images in /public/images/certificates/</small>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certificates;

