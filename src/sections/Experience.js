// src/sections/SkillsAndExperience.js
import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
} from "react-icons/fa";

const SkillsAndExperience = () => {
  const skills = [
    { icon: <FaReact size={24} />, label: "React" },
    { icon: <FaNodeJs size={24} />, label: "Node.js" },
    { icon: <FaDatabase size={24} />, label: "Databases" },
    { icon: <FaHtml5 size={24} />, label: "HTML5" },
    { icon: <FaCss3Alt size={24} />, label: "CSS3" },
    { icon: <FaJsSquare size={24} />, label: "JavaScript" },
  ];

  const experience = [
    {
      role: "Senior Software Engineer",
      company: "Innovative Solutions",
      years: "2021 - Present",
      details:
        "Leading a cross-functional team of 8 in designing and building cloud-native services. Focused on microservices architecture, DevOps best practices, and modern CI/CD pipelines.",
    },
    {
      role: "Full-Stack Developer",
      company: "WebSolutions",
      years: "2019 - 2021",
      details:
        "Developed dynamic e-commerce platforms and internal management dashboards. Collaborated closely with designers and stakeholders to deliver robust, scalable features.",
    },
    {
      role: "Front-End Developer",
      company: "DevSpark",
      years: "2017 - 2019",
      details:
        "Implemented highly interactive user interfaces using React and Redux. Optimized page load times and improved accessibility for a broad range of client web projects.",
    },
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect – Associate",
      issuer: "Amazon Web Services (AWS)",
      date: "2021",
    },
    {
      name: "Microsoft Certified: Azure Developer Associate",
      issuer: "Microsoft",
      date: "2022",
    },
    {
      name: "Certified ScrumMaster (CSM)",
      issuer: "Scrum Alliance",
      date: "2021",
    },
    {
      name: "Google Cloud Professional Cloud Developer",
      issuer: "Google Cloud",
      date: "2023",
    },
  ];

  return (
    <section className="skills-experience-section">
      <div className="slides-container">
        {/* -- Skills Slide -- */}
        <div className="slide skills-slide">
          <h2 className="slide-title">Skills</h2>
          <div className="skills-wrapper">
            {skills.map((skill, idx) => (
              <div className="skill-item" key={idx}>
                <div className="skill-icon">{skill.icon}</div>
                <span>{skill.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* -- Experience Slide -- */}
        <div className="slide experience-slide">
          <h2 className="slide-title">Experience</h2>
          <div className="experience-wrapper">
            {experience.map((exp, idx) => (
              <div className="experience-item" key={idx}>
                <h3>{exp.role}</h3>
                <p>
                  <strong>{exp.company}</strong> <em>({exp.years})</em>
                </p>
                <p className="exp-details">{exp.details}</p>
              </div>
            ))}
          </div>
        </div>

        {/* -- Certifications Slide -- */}
        <div className="slide cert-slide">
          <h2 className="slide-title">Certifications</h2>
          <div className="certifications-wrapper">
            {certifications.map((cert, idx) => (
              <div className="cert-item" key={idx}>
                <h3>{cert.name}</h3>
                <p>
                  <strong>{cert.issuer}</strong> <em>({cert.date})</em>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Inline styles for demonstration—move these into a .css or styled-components file */}
      <style jsx>{`
        /************************************************
         * Container
         ************************************************/
        .skills-experience-section {
          position: relative;
          width: 100vw;
          height: 100vh; /* Adjust as necessary */
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          padding: 0;
          margin: 0;
        }

        /* Horizontally scrolling container for the 3 "slides" */
        .slides-container {
          display: flex;
          flex-wrap: nowrap;
          overflow-x: auto;
          width: 100%;
          height: 100%;
          scroll-behavior: smooth;
          scrollbar-width: none; /* Firefox */
        }
        .slides-container::-webkit-scrollbar {
          display: none; /* Chrome, Safari */
        }

        /************************************************
         * Slides
         ************************************************/
        .slide {
          flex: 0 0 100%;
          box-sizing: border-box;
          scroll-snap-align: center;
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 2rem;
          position: relative;
        }

        .slide-title {
          text-transform: uppercase;
          letter-spacing: 2px;
          margin-bottom: 1.5rem;
          font-size: 2rem;
          color: #fff;
          text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
        }

        /************************************************
         * Background Gradients
         ************************************************/
        .skills-slide {
          background: linear-gradient(135deg, #00c9ff 0%, #92fe9d 100%);
        }
        .experience-slide {
          background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
        }
        .cert-slide {
          background: linear-gradient(135deg, #c3ec52 0%, #0ba29d 100%);
        }

        /************************************************
         * Skills
         ************************************************/
        .skills-wrapper {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          max-width: 800px;
        }

        .skill-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
          background: rgba(255, 255, 255, 0.8);
          padding: 0.7rem 1rem;
          border-radius: 4px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .skill-item:hover {
          transform: translateY(-3px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
        }

        .skill-icon :global(svg) {
          color: #444;
        }

        /************************************************
         * Experience
         ************************************************/
        .experience-wrapper {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 700px;
          background: rgba(255, 255, 255, 0.15);
          padding: 1.5rem;
          border-radius: 8px;
          color: #fff;
        }

        .experience-item h3 {
          margin-bottom: 0.3rem;
          font-weight: 600;
          font-size: 1.3rem;
        }

        .experience-item p {
          margin: 0.2rem 0;
        }

        .exp-details {
          font-size: 1rem;
          line-height: 1.4;
        }

        /************************************************
         * Certifications
         ************************************************/
        .certifications-wrapper {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          max-width: 700px;
          background: rgba(255, 255, 255, 0.15);
          padding: 1.5rem;
          border-radius: 8px;
          color: #fff;
        }

        .cert-item h3 {
          margin-bottom: 0.3rem;
          font-weight: 600;
        }

        .cert-item p {
          margin: 0.2rem 0;
          font-size: 0.95rem;
        }

        /************************************************
         * Media Queries (Responsive)
         ************************************************/
        @media (max-width: 1100px) {
          /* Reduce the max-width so content doesn't overflow on medium screens */
          .skills-wrapper,
          .experience-wrapper,
          .certifications-wrapper {
            max-width: 90%;
          }
        }

        @media (max-width: 768px) {
          /* Smaller tablets and phones */
          .slide {
            padding: 1rem;
          }
          .slide-title {
            margin-bottom: 1rem;
            font-size: 1.6rem;
          }
          .skills-wrapper,
          .experience-wrapper,
          .certifications-wrapper {
            max-width: 100%;
            padding: 1rem;
          }
          .experience-wrapper,
          .certifications-wrapper {
            gap: 1rem;
          }
          .skill-item {
            flex: 1 1 auto; /* allow items to wrap nicely */
          }
          .experience-item h3 {
            font-size: 1.2rem;
          }
          .exp-details {
            font-size: 0.95rem;
          }
          .cert-item h3 {
            font-size: 1.1rem;
          }
        }

        @media (max-width: 480px) {
          /* Very small mobile screens */
          .slide {
            padding: 0.5rem;
          }
          .slide-title {
            font-size: 1.4rem;
            margin-bottom: 0.8rem;
          }
          .experience-item h3 {
            font-size: 1.1rem;
          }
          .exp-details,
          .cert-item p {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsAndExperience;
