// src/sections/About.js
import React from 'react';
import { motion } from 'framer-motion'; // for animation

function About() {
  return (
    <motion.div
      className="section-content"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2>About Me</h2>
      <p>
        Hi, I'm Kazi Mostofa Sakin, a dedicated developer 
        based in Fredericton, NB. I'm currently pursuing a 
        B.Sc. in Computer Science at the University of New Brunswick.
      </p>
    </motion.div>
  );
}

export default About;
