import React, { useState, useEffect, useRef } from 'react';
import './About.css';

const About = () => {
  const [visibleStats, setVisibleStats] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleStats(true);
            animateCounters();
          }
        });
      },
      { threshold: 0.3 }
    );

    if (statsRef.current) {
      observer.observe(statsRef.current);
    }

    return () => {
      if (statsRef.current) {
        observer.unobserve(statsRef.current);
      }
    };
  }, []);

  const animateCounters = () => {
    const counters = document.querySelectorAll('.counter');
    counters.forEach((counter) => {
      const target = parseInt(counter.getAttribute('data-target'));
      const duration = 2000;
      const increment = target / (duration / 16);
      let current = 0;

      const updateCounter = () => {
        current += increment;
        if (current < target) {
          counter.textContent = Math.floor(current) + '+';
          requestAnimationFrame(updateCounter);
        } else {
          counter.textContent = target + '+';
        }
      };

      updateCounter();
    });
  };

  const skills = {
    iot: ['Arduino', 'Raspberry Pi', 'ESP32/8266', 'GPS/GSM Modules', 'Sensors', 'MQTT', 'WebSocket', 'LoRaWAN', 'PCB Design', 'Circuit Analysis'],
    web: ['React.js', 'JavaScript', 'HTML5/CSS3', 'Django', 'Python', 'REST APIs', 'PostgreSQL', 'MySQL', 'MongoDB', 'Google Maps API', 'Leaflet.js'],
    tools: ['Git', 'GitHub', 'Docker', 'AutoCAD', 'CATIA', 'ANSYS', 'Agile Development', 'Scrum', 'AWS EC2', 'Heroku']
  };

  const education = [
    {
      degree: 'Bachelor of Technology in Mechanical Engineering',
      institution: 'Vignan Institute of Information Technology, Visakhapatnam',
      period: 'Sep 2022 – Apr 2025',
      grade: 'CGPA: 7.82/10'
    },
    {
      degree: 'Diploma in Mechanical Engineering',
      institution: 'Government Polytechnic, Visakhapatnam',
      period: 'Jun 2019 – Apr 2022',
      grade: 'Percentage: 77%'
    }
  ];

  const leadership = {
    role: 'Chairperson - American Society of Mechanical Engineers (ASME) Student Chapter',
    members: 150,
    projectsGuided: 53,
    workshops: 15,
    achievements: [
      'Leading 150+ member student organization focused on technical innovation',
      'Guided 53 student projects (29 major + 24 mini projects) to successful completion',
      'Organized 15+ technical workshops on IoT, embedded systems, and web development',
      'Conducted project review sessions and provided technical mentorship',
      'Facilitated industry connections and guest lecture sessions'
    ]
  };

  const internship = {
    company: 'IGIAT (Indo-German Institute of Advanced Technology)',
    period: '2019 (4 Months)',
    achievements: [
      'Advanced training in AutoCAD, CATIA, and ANSYS',
      'Completed 8 mechanical design projects',
      'Performed Finite Element Analysis on automotive components',
      'Created detailed engineering documentation',
      'Gained practical experience in design-to-production workflow'
    ]
  };

  return (
    <section className="section about" id="about">
      <div className="section-header">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know more about my journey and expertise</p>
      </div>

      {/* Professional Summary */}
      <div className="about-summary">
        <div className="summary-card">
          <div className="summary-icon">
            <i className="fas fa-user-tie"></i>
          </div>
          <div className="summary-content">
            <h3>Professional Summary</h3>
            <p>
              Innovative IoT Developer and Full-Stack Engineer with extensive experience in building 
              real-time systems and embedded solutions. Developed <strong>63 IoT projects</strong> including 
              34 major implementations and 29 mini-projects. As Chairperson of ASME, guided 53 student projects. 
              Expertise in React, Django, microcontroller programming, and real-time tracking systems. 
              Passionate about leveraging technology to solve real-world problems and eager to contribute 
              to innovative technology solutions.
            </p>
          </div>
        </div>
      </div>

      {/* Statistics */}
      <div className="stats-section" ref={statsRef}>
        <div className="stats-grid">
          <div className={`stat-card ${visibleStats ? 'animate' : ''}`}>
            <div className="stat-icon">
              <i className="fas fa-project-diagram"></i>
            </div>
            <div className="counter" data-target="63">0</div>
            <div className="stat-label">Total IoT Projects</div>
          </div>
          <div className={`stat-card ${visibleStats ? 'animate' : ''}`}>
            <div className="stat-icon">
              <i className="fas fa-star"></i>
            </div>
            <div className="counter" data-target="34">0</div>
            <div className="stat-label">Major IoT Projects</div>
          </div>
          <div className={`stat-card ${visibleStats ? 'animate' : ''}`}>
            <div className="stat-icon">
              <i className="fas fa-lightbulb"></i>
            </div>
            <div className="counter" data-target="29">0</div>
            <div className="stat-label">Mini Projects</div>
          </div>
          <div className={`stat-card ${visibleStats ? 'animate' : ''}`}>
            <div className="stat-icon">
              <i className="fas fa-users"></i>
            </div>
            <div className="counter" data-target="53">0</div>
            <div className="stat-label">Projects Guided</div>
          </div>
          <div className={`stat-card ${visibleStats ? 'animate' : ''}`}>
            <div className="stat-icon">
              <i className="fas fa-code"></i>
            </div>
            <div className="counter" data-target="8">0</div>
            <div className="stat-label">Web Development</div>
          </div>
          <div className={`stat-card ${visibleStats ? 'animate' : ''}`}>
            <div className="stat-icon">
              <i className="fas fa-layer-group"></i>
            </div>
            <div className="counter" data-target="2">0</div>
            <div className="stat-label">Full-Stack Apps</div>
          </div>
        </div>
      </div>

      {/* Technical Skills */}
      <div className="skills-section">
        <h3 className="subsection-title">Technical Skills</h3>
        <div className="skills-container">
          <div className="skill-category">
            <div className="category-header">
              <i className="fas fa-microchip"></i>
              <h4>IoT & Embedded</h4>
            </div>
            <div className="skills-grid">
              {skills.iot.map((skill, index) => (
                <div key={index} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <i className="fas fa-check-circle"></i>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <div className="category-header">
              <i className="fas fa-globe"></i>
              <h4>Web Development</h4>
            </div>
            <div className="skills-grid">
              {skills.web.map((skill, index) => (
                <div key={index} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <i className="fas fa-check-circle"></i>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="skill-category">
            <div className="category-header">
              <i className="fas fa-tools"></i>
              <h4>Tools & Methods</h4>
            </div>
            <div className="skills-grid">
              {skills.tools.map((skill, index) => (
                <div key={index} className="skill-item" style={{ animationDelay: `${index * 0.1}s` }}>
                  <i className="fas fa-check-circle"></i>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Education */}
      <div className="education-section">
        <h3 className="subsection-title">Education</h3>
        <div className="timeline">
          {education.map((edu, index) => (
            <div key={index} className="timeline-item">
              <div className="timeline-marker">
                <i className="fas fa-graduation-cap"></i>
              </div>
              <div className="timeline-content">
                  <h4>{edu.degree}</h4>
                  <p className="institution">{edu.institution}</p>
                  <p className="period">{edu.period}</p>
                  <p className="grade">{edu.grade}</p>
                </div>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership */}
      <div className="leadership-section">
        <h3 className="subsection-title">Leadership & Mentorship</h3>
        <div className="leadership-card">
          <div className="leadership-header">
            <div className="leadership-icon">
              <i className="fas fa-user-tie"></i>
            </div>
            <div className="leadership-title">
              <h4>{leadership.role}</h4>
            </div>
          </div>
          <div className="leadership-stats">
            <div className="leadership-stat">
              <div className="leadership-number">{leadership.members}+</div>
              <div className="leadership-label">ASME Members Led</div>
            </div>
            <div className="leadership-stat">
              <div className="leadership-number">{leadership.projectsGuided}</div>
              <div className="leadership-label">Projects Guided</div>
            </div>
            <div className="leadership-stat">
              <div className="leadership-number">{leadership.workshops}+</div>
              <div className="leadership-label">Workshops Organized</div>
            </div>
          </div>
          <ul className="leadership-achievements">
            {leadership.achievements.map((achievement, index) => (
              <li key={index}>
                <i className="fas fa-check"></i>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Internship */}
      <div className="internship-section">
        <h3 className="subsection-title">Internship Experience</h3>
        <div className="internship-card">
          <div className="internship-header">
            <h4>Industrial Training Program</h4>
            <span className="internship-period">{internship.period}</span>
          </div>
          <p className="internship-company">{internship.company}</p>
          <ul className="internship-achievements">
            {internship.achievements.map((achievement, index) => (
              <li key={index}>
                <i className="fas fa-check-circle"></i>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
