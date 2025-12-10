import React, { useState, useEffect } from 'react';
import './Projects.css';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const keyProjects = [
    {
      id: 1,
      title: 'Smart DriveMate - IoT Vehicle Tracking & Security System',
      description: 'Directly applicable to pet tracking solutions. Real-time GPS tracking with interactive map interface, geo-fencing system with instant breach notifications, speed limit alerts, remote control, and theft prevention.',
      technologies: ['React.js', 'Django', 'ESP32', 'GPS NEO-6M', 'GSM SIM800L', 'MQTT', 'WebSocket'],
      category: 'iot',
      features: [
        'Real-time GPS Tracking: Live location monitoring with interactive map interface',
        'Geo-fencing System: Virtual boundaries with instant breach notifications',
        'Speed Limit Alerts: Real-time notifications when exceeding preset limits',
        'Remote Control: Web-based engine lock/unlock system',
        'Theft Prevention: Motion detection with automatic emergency alerts',
        'Mobile/Web Dashboard: Cross-platform monitoring interface'
      ],
      highlighted: true
    },
    {
      id: 2,
      title: 'Real-Time Attendance & Student Management System',
      description: 'Demonstrates full-stack capabilities with real-time tracking system, facial recognition integration, automated notifications, and comprehensive analytics.',
      technologies: ['React.js', 'Django', 'PostgreSQL', 'REST APIs', 'Facial Recognition'],
      category: 'fullstack',
      features: [
        'Real-time tracking system with facial recognition integration',
        'Automated notifications via SMS/Email to stakeholders',
        'Comprehensive dashboard with analytics and reporting',
        'Role-based access control for different user types',
        'Mobile-responsive design for on-the-go access'
      ],
      highlighted: true
    },
    {
      id: 3,
      title: 'Transport Management System with Route Optimization',
      description: 'Shows mapping and optimization skills with Google Maps API integration, dynamic route optimization, and live traffic data integration.',
      technologies: ['React.js', 'Google Maps API', 'Django', 'WebSocket', 'Leaflet.js'],
      category: 'fullstack',
      features: [
        'Google Maps API integration for real-time tracking',
        'Dynamic route optimization reducing delivery time by 30%',
        'Live traffic data integration for accurate ETAs',
        'Driver performance analytics and monitoring',
        'Fuel consumption tracking and reporting'
      ],
      highlighted: true
    }
  ];

  const projectCategories = {
    major: [
      'Smart Home Automation v4.0',
      'Industrial Monitoring System',
      'Precision Agriculture System',
      'Smart City Solutions Suite',
      'Healthcare Monitoring Devices',
      'Environmental Monitoring Network'
    ],
    mini: [
      'Automated Lighting Control',
      'Weather Station Network',
      'Smart Irrigation Controllers',
      'Home Security Modules',
      'Energy Monitoring Systems'
    ],
    web: [
      'E-commerce Platform',
      'Inventory Management System',
      'Hospital Management Portal',
      'Learning Management System',
      'Social Media Dashboard'
    ]
  };

  const categories = [
    { id: 'all', label: 'All Projects', icon: 'fas fa-th' },
    { id: 'iot', label: 'IoT Projects', icon: 'fas fa-microchip' },
    { id: 'fullstack', label: 'Full-Stack', icon: 'fas fa-layer-group' },
    { id: 'web', label: 'Web Development', icon: 'fas fa-globe' }
  ];

  const filteredProjects = activeCategory === 'all' 
    ? keyProjects 
    : keyProjects.filter(p => p.category === activeCategory);

  return (
    <section className="section projects" id="projects">
      <div className="section-header">
        <h2 className="section-title">Project Portfolio</h2>
        <p className="section-subtitle">Showcasing 63 IoT projects, 8 web applications, and 2 full-stack solutions</p>
      </div>

      {/* Portfolio Statistics */}
      <div className="portfolio-stats">
        <div className="portfolio-stat-card">
          <div className="stat-icon-wrapper">
            <i className="fas fa-project-diagram"></i>
          </div>
          <div className="stat-content">
            <div className="stat-number">63</div>
            <div className="stat-text">Total IoT Projects</div>
          </div>
        </div>
        <div className="portfolio-stat-card">
          <div className="stat-icon-wrapper">
            <i className="fas fa-star"></i>
          </div>
          <div className="stat-content">
            <div className="stat-number">34</div>
            <div className="stat-text">Major IoT Projects</div>
          </div>
        </div>
        <div className="portfolio-stat-card">
          <div className="stat-icon-wrapper">
            <i className="fas fa-lightbulb"></i>
          </div>
          <div className="stat-content">
            <div className="stat-number">29</div>
            <div className="stat-text">Mini Projects</div>
          </div>
        </div>
        <div className="portfolio-stat-card">
          <div className="stat-icon-wrapper">
            <i className="fas fa-code"></i>
          </div>
          <div className="stat-content">
            <div className="stat-number">10</div>
            <div className="stat-text">Web & Full-Stack</div>
          </div>
        </div>
      </div>

      {/* Category Filter */}
      <div className="project-filters">
        {categories.map(category => (
          <button
            key={category.id}
            className={`filter-btn ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => setActiveCategory(category.id)}
          >
            <i className={category.icon}></i>
            <span>{category.label}</span>
          </button>
        ))}
      </div>

      {/* Key Projects */}
      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className={`project-card ${project.highlighted ? 'featured' : ''}`}
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="project-header">
              {project.highlighted && (
                <div className="featured-badge">
                  <i className="fas fa-star"></i>
                  <span>Featured</span>
                </div>
              )}
              <div className="project-icon">
                <i className={project.category === 'iot' ? 'fas fa-microchip' : 'fas fa-layer-group'}></i>
              </div>
            </div>
            <div className="project-content">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              
              <div className="project-features">
                <h4>Key Features:</h4>
                <ul>
                  {project.features.map((feature, idx) => (
                    <li key={idx}>
                      <i className="fas fa-check-circle"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="project-technologies">
                <h4>Technologies:</h4>
                <div className="tech-tags">
                  {project.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
            <div className="project-footer">
              <button className="project-btn">
                <span>View Details</span>
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Project Categories Breakdown */}
      <div className="project-categories">
        <div className="category-section">
          <h3 className="category-title">
            <i className="fas fa-microchip"></i>
            IoT & Automation (63 Projects)
          </h3>
          <div className="category-content">
            <div className="category-item">
              <h4>Major Projects (34):</h4>
              <div className="project-list">
                {projectCategories.major.map((project, idx) => (
                  <span key={idx} className="project-name">{project}</span>
                ))}
              </div>
            </div>
            <div className="category-item">
              <h4>Mini Projects (29):</h4>
              <div className="project-list">
                {projectCategories.mini.map((project, idx) => (
                  <span key={idx} className="project-name">{project}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="category-section">
          <h3 className="category-title">
            <i className="fas fa-globe"></i>
            Web & Full-Stack (10 Projects)
          </h3>
          <div className="category-content">
            <div className="category-item">
              <h4>Web Development (8):</h4>
              <div className="project-list">
                {projectCategories.web.map((project, idx) => (
                  <span key={idx} className="project-name">{project}</span>
                ))}
              </div>
            </div>
            <div className="category-item">
              <h4>Full-Stack Apps (2):</h4>
              <div className="project-list">
                <span className="project-name">Real-Time Attendance System</span>
                <span className="project-name">Transport Management System</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
