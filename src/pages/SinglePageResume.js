// src/pages/SinglePageResume.js
import React from 'react';
import About from '../sections/About';
import Education from '../sections/Education';
import Experience from '../sections/Experience';
import Projects from '../sections/Projects';
import Contact from '../sections/Contact';
import './SinglePageResume.css';

function SinglePageResume() {
  return (
    <div className="single-page-container">
      {/* HERO or "Home" Section */}
      <section id="home" className="section hero-section">
        <div className="hero-content">
          <h1>Hi, I'm <span className="highlight">Kazi Mostofa Sakin</span></h1>
          <p>Welcome to my single-page interactive resume. Scroll or use the nav to explore.</p>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about-section">
        <About />
      </section>

      {/* EDUCATION */}
      <section id="education" className="section education-section">
        <Education />
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section experience-section">
        <Experience />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section projects-section">
        <Projects />
      </section>

      {/* CONTACT */}
      <section id="contact" className="section contact-section">
        <Contact />
      </section>
    </div>
  );
}

export default SinglePageResume;
