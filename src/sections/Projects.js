// src/sections/Projects.js
import React from 'react';
import { motion } from 'framer-motion';

function Projects() {
  return (
    <motion.div
      className="section-content"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2>Projects</h2>

      <div className="project-item">
        <h3>WordPress Secure Voting Plugin</h3>
        <p>Bangladesh Student Society, UNB | Oct 2024</p>
        <ul>
          <li>Built a secure, cost-effective voting system with PHP, MySQL, SMTP email.</li>
          <li>One-time link authentication, rate-limiting, password hashing for security.</li>
        </ul>
      </div>

      <div className="project-item">
        <h3>Invoice Management System</h3>
        <p>ROBOFLIGHT | Sep 2024</p>
        <ul>
          <li>JavaFX & MySQL application for over 200 students, with discount/tax logic.</li>
          <li>Role-based access, automated admin tasks, iText PDF generation.</li>
        </ul>
      </div>

      <div className="project-item">
        <h3>Employee Performance Data Analysis</h3>
        <p>Personal Project | Jan 2025</p>
        <ul>
          <li>Simulated & analyzed performance data for 20-agent teams, multiple KPIs.</li>
          <li>Automated data cleaning in Python, visualized metrics in Tableau.</li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Projects;
