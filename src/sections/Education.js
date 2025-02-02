// src/sections/Education.js
import React from 'react';
import { motion } from 'framer-motion';

function Education() {
  return (
    <motion.div
      className="section-content"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2>Education</h2>
      <div className="education-item">
        <h3>B.Sc. in Computer Science</h3>
        <p>University of New Brunswick, Fredericton, NB</p>
        <span className="date-range">January 2023 - Present</span>
      </div>
    </motion.div>
  );
}

export default Education;
