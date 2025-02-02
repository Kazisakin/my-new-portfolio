// src/sections/Experience.js
import React from 'react';
import { motion } from 'framer-motion';

function Experience() {
  return (
    <motion.div
      className="section-content"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2>Work Experience</h2>

      <div className="work-item">
        <h3>In-Bound Customer Service Rep</h3>
        <p>IO Solutions | May 2023 – Present</p>
        <ul>
          <li>Handled 30+ daily interactions, delivering technical solutions and driving sales.</li>
          <li>Coordinated multiple service providers, reducing downtime by 4 hours on average.</li>
          <li>Consistently achieved top sales performance awards.</li>
        </ul>
      </div>

      <div className="work-item">
        <h3>Web & Creative Content Designer</h3>
        <p>ROBOFLIGHT | Dec 2023 – Sep 2024</p>
        <ul>
          <li>Developed a functional, visually optimized website, boosting traffic by 200%.</li>
          <li>Conducted keyword research and SEO for better organic reach.</li>
          <li>Created reusable component libraries for 25+ marketing assets.</li>
        </ul>
      </div>

      <div className="work-item">
        <h3>Security Officer</h3>
        <p>Securitas | Apr 2023 – Present</p>
        <ul>
          <li>Managed access control at high-profile sites using Siemens' SiPass system.</li>
          <li>Maintained logs, enforced security protocols, ensuring a safe environment.</li>
        </ul>
      </div>
    </motion.div>
  );
}

export default Experience;
