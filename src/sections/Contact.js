// src/sections/Contact.js
import React from 'react';
import { motion } from 'framer-motion';

function Contact() {
  return (
    <motion.div
      className="section-content"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <h2>Contact & Hobbies</h2>
      <p>Hobbies: PC Building, Cooking, Travelling</p>
      <p>
        <strong>Email:</strong> <a href="mailto:kazisakin@icloud.com">kazisakin@icloud.com</a><br/>
        <strong>Phone:</strong> (506) 282-1327
      </p>
    </motion.div>
  );
}

export default Contact;
