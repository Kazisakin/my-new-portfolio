// Skills.js
import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <div className="skills-page container">
      <h1>Skills</h1>
      <div className="skills-grid">
        <div className="skill-card">
          <h3>Programming Languages</h3>
          <p>Java, Python, C++, JavaScript, R, PHP</p>
        </div>
        <div className="skill-card">
          <h3>Web Development</h3>
          <p>HTML, CSS, Bootstrap, JavaScript, Django, MERN Stack, REST APIs</p>
        </div>
        <div className="skill-card">
          <h3>Databases</h3>
          <p>PostgreSQL, MySQL, MongoDB, Redis</p>
        </div>
        <div className="skill-card">
          <h3>Data Analysis & ML</h3>
          <p>Pandas, NumPy, Matplotlib, TensorFlow, Power BI, Tableau, Lucidchart</p>
        </div>
        <div className="skill-card">
          <h3>DevOps & Tools</h3>
          <p>Docker, Jenkins, Nginx, GitHub, Apache POI, Firebase, Spring Boot</p>
        </div>
        <div className="skill-card">
          <h3>Design & Docs</h3>
          <p>Figma, Adobe Creative Suite, WordPress, AutoCAD, Microsoft 365</p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
