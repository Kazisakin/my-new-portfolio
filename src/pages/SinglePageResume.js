// src/pages/SinglePageResume.js
import React from 'react';
import { motion } from 'framer-motion';
import './SinglePageResume.css';

function SinglePageResume() {
  return (
    <div className="single-page-container">

      {/* HERO SECTION */}
      <section id="home" className="section hero-section">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Hello, I'm <span className="highlight">Kazi Mostofa Sakin</span></h1>
          <p>Welcome to my interactive CV. Scroll down or use the menu to explore my background.</p>
        </motion.div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section about-section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>About Me</h2>
          <p>
            Hi, I'm Kazi Mostofa Sakin, a dedicated developer and creative mind 
            based in Fredericton, New Brunswick. I'm pursuing a B.Sc. in Computer Science 
            at the University of New Brunswick (since January 2023).
          </p>
        </motion.div>
      </section>

      {/* EDUCATION SECTION */}
      <section id="education" className="section education-section">
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
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="section experience-section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>Work Experience</h2>
          {/* 1. In-Bound CSR */}
          <div className="work-item">
            <h3>In-Bound Customer Service Representative</h3>
            <p>IO Solutions | May 2023 – Present</p>
            <ul>
              <li>Handled 30+ daily interactions, delivering technical solutions and personalized service.</li>
              <li>Expert support for 50+ products, addressing complex inquiries and driving daily sales.</li>
              <li>Coordinated multiple service providers (Fido, Rogers, Shaw), reducing downtime by 4 hours on avg.</li>
              <li>Consistently top in sales, earning performance awards twice in a row.</li>
            </ul>
          </div>

          {/* 2. Web/Creative Content Designer */}
          <div className="work-item">
            <h3>Web & Creative Content Designer</h3>
            <p>ROBOFLIGHT | Dec 2023 – Sep 2024</p>
            <ul>
              <li>Built a fully functional, visually optimized website, increasing traffic by 200%.</li>
              <li>Conducted SEO optimizations, designing brand assets (logos, banners).</li>
              <li>Streamlined production of 25+ marketing assets with reusable components.</li>
            </ul>
          </div>

          {/* 3. Security Officer */}
          <div className="work-item">
            <h3>Security Officer</h3>
            <p>Securitas | Apr 2023 – Present</p>
            <ul>
              <li>Managed access control, incident response at high-profile sites using Siemens' SiPass system.</li>
              <li>Enforced security protocols, maintained logs, and ensured a safe environment.</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section skills-section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>Skills</h2>
          <ul className="skills-list">
            <li><strong>Programming Languages:</strong> Java, Python, C++, JavaScript, R, PHP</li>
            <li><strong>Web Dev:</strong> HTML, CSS, Bootstrap, JavaScript, Django, MERN Stack, REST APIs</li>
            <li><strong>Databases:</strong> PostgreSQL, MySQL, MongoDB, Redis</li>
            <li><strong>Data/ML:</strong> Pandas, NumPy, Matplotlib, TensorFlow, Power BI, Tableau</li>
            <li><strong>DevOps & Tools:</strong> Docker, Jenkins, Nginx, GitHub, Apache POI, Firebase, Spring Boot</li>
            <li><strong>Design Tools:</strong> Figma, Adobe Creative Suite, WordPress, AutoCAD, Microsoft 365</li>
          </ul>
        </motion.div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section projects-section">
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
              <li>Developed secure, cost-effective online voting with PHP, MySQL, SMTP email.</li>
              <li>One-time link authentication, rate-limiting, & password hashing to prevent unauthorized access.</li>
              <li>Multi-factor authentication for 100+ concurrent votes with robust oversight features.</li>
            </ul>
          </div>

          <div className="project-item">
            <h3>Invoice Management System</h3>
            <p>ROBOFLIGHT | Sep 2024</p>
            <ul>
              <li>JavaFX & MySQL system for 200+ student invoices, with discount & tax logic, unique invoice IDs.</li>
              <li>Role-based access (ADMIN/USER), iText PDF generation, data integrity improvements.</li>
            </ul>
          </div>

          <div className="project-item">
            <h3>Employee Performance Data Analysis</h3>
            <p>Personal Project | Jan 2025</p>
            <ul>
              <li>Simulated & analyzed performance data (11+ KPIs) for 20-agent teams in Java.</li>
              <li>Automated data cleaning in Python, visualized metrics in Tableau dashboards.</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* CERTIFICATIONS / AWARDS SECTION */}
      <section id="awards" className="section awards-section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>Certifications & Awards</h2>
          <ul>
            <li><strong>R Programming Boot Camp (2022)</strong> – Data cleaning, survey preprocessing, advanced stats.</li>
            <li><strong>Talent Hunt 2020 - Graphic Design</strong> – First place, showcasing creative design skills.</li>
            <li><strong>Advanced WordPress Development (2018)</strong> – Comprehensive skills in theme customization.</li>
          </ul>
        </motion.div>
      </section>

      {/* CO-CURRICULAR */}
      <section id="activities" className="section activities-section">
        <motion.div
          className="section-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <h2>Co-Curricular Activities</h2>

          <div className="activity-item">
            <h3>Webmaster</h3>
            <p>Bangladesh Student Society, UNB | Sep 2023 – Oct 2024</p>
            <ul>
              <li>Launched first WordPress site, introduced online voting, streamlined event registrations.</li>
              <li>Maintained CMS content & brand identity across social media platforms.</li>
            </ul>
          </div>

          <div className="activity-item">
            <h3>Organizing Lead</h3>
            <p>Adamjee Cantonment College IT Club | Jul 2020 – Dec 2022</p>
            <ul>
              <li>Organized workshops & seminars, boosting attendance by 200+ students.</li>
              <li>Revamped club website for better UX, created social media posts & videos.</li>
            </ul>
          </div>
        </motion.div>
      </section>

      {/* CONTACT / HOBBIES SECTION */}
      <section id="contact" className="section contact-section">
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
      </section>

    </div>
  );
}

export default SinglePageResume;
