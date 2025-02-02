import React from 'react';
import './Projects.css';

function Projects() {
  return (
    <div className="projects-page container">
      <h1>Projects</h1>
      <div className="project-item">
        <h2>WordPress Secure Voting Plugin</h2>
        <p>Bangladesh Student Society, UNB | October 2024</p>
        <ul>
          <li>Developed secure, cost-effective online voting system...</li>
          <li>Used token-based authentication, rate-limiting, password hashing...</li>
          <li>Multi-factor auth for 100+ concurrent votes, advanced oversight features...</li>
        </ul>
      </div>

      <div className="project-item">
        <h2>Invoice Management System</h2>
        <p>ROBOFLIGHT | September 2024</p>
        <ul>
          <li>JavaFX + MySQL for 200+ student invoices, discount logic, tax calculation...</li>
          <li>Role-based access (ADMIN/USER), real-time searching by student name...</li>
          <li>Reduced manual billing effort, improved data integrity with iText PDF generation...</li>
        </ul>
      </div>

      <div className="project-item">
        <h2>Employee Performance Data Analysis</h2>
        <p>Personal Project | January 2025</p>
        <ul>
          <li>Simulated & analyzed performance data (11+ KPIs) for 20-agent teams in Java...</li>
          <li>Automated data cleaning in Python, integrated with Tableau dashboards...</li>
          <li>Actionable insights for 15+ KPI metrics, real-time workforce analysis...</li>
        </ul>
      </div>
    </div>
  );
}

export default Projects;
