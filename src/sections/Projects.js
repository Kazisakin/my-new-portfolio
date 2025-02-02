import React, { useState } from "react";
// Make sure these packages are installed:
import { LazyLoadImage } from "react-lazy-load-image-component";
import { motion } from "framer-motion";
import "react-lazy-load-image-component/src/effects/blur.css";

const projects = [
  {
    title: "WordPress Secure Voting Plugin",
    meta: "Bangladesh Student Society, University of New Brunswick | GitHub | October 2024",
    description:
      "Developed a secure, cost-effective online voting system for UNB BSS with PHP, MySQL, and SMTP email. Enabled seamless voting for 90+ users with token-based authentication, rate-limiting, and password hashing.",
    details: [
      "Devised one-time link authentication via email to prevent unauthorized access, with rate-limiting controls allowing two consecutive requests and a 30-minute cooldown for each retry.",
      "Initiated features within an analytical framework enabling oversight of 100+ concurrent votes incorporating multifactor authentication to ensure secure access for the voting committee."
    ],
    techStack: ["PHP", "MySQL", "SMTP"],
    image: "/images/wordpress-voting-plugin.jpg", // Replace with your actual image
    github: "https://github.com/yourname/wordpress-secure-voting-plugin",
    demo: "https://voting-plugin-demo.com"
  },
  {
    title: "Invoice Management System",
    meta: "ROBOFLIGHT | Fredericton, New Brunswick | GitHub | September 2024",
    description:
      "Built a JavaFX and MySQL-integrated application to generate invoices for over 200 students, featuring discount logic, tax calculation, and unique invoice numbering.",
    details: [
      "Implemented role-based access (ADMIN/USER) with secure login, automating administrative tasks such as course assignment, invoice updates, and real-time searching by student name.",
      "Utilized JDBC (HikariCP) and iText PDF generation to produce secure, professional invoices, reducing manual billing effort by enhancing data integrity.",
      "Streamlined system scalability and performance through data modeling and query optimization."
    ],
    techStack: ["JavaFX", "MySQL", "JDBC", "iText"],
    image: "/images/invoice-management-system.jpg", // Replace with your actual image
    github: "https://github.com/yourname/invoice-management-system",
    demo: "https://invoice-system-demo.com"
  },
  {
    title: "Employee Performance Data Analysis and Visualization",
    meta: "Personal Project | January 2025",
    description:
      "Simulated and analyzed performance data using Java, focusing on 11+ KPIs for 20-agent teams including Call Handle Time, Sales Performance, and CSAT.",
    details: [
      "Automated data cleaning, aggregation, and formatting with a Python script, integrating processed data into Tableau for real-time visualization.",
      "Built Tableau dashboards to track over 15 KPIs and provide actionable workforce insights for a team of 20+ agents."
    ],
    techStack: ["Java", "Python", "Tableau"],
    image: "/images/employee-performance-analysis.jpg", // Replace with your actual image
    github: "https://github.com/yourname/employee-performance-data-analysis",
    demo: "https://performance-analysis-demo.com"
  }
];

export default function Projects() {
  const [expanded, setExpanded] = useState(null);

  const toggleExpand = (index) => {
    setExpanded(expanded === index ? null : index);
  };

  const cardVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    hover: { scale: 1.03, transition: { duration: 0.3 } }
  };

  return (
    <section id="projects" style={{ minHeight: "100vh", padding: "2rem" }}>
      <h2 style={{ marginBottom: "1rem", color: "#e6f1ff" }}>Projects</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "2rem",
          marginTop: "2rem"
        }}
      >
        {projects.map((proj, idx) => (
          <motion.div
            key={idx}
            variants={cardVariants}
            initial="initial"
            animate="animate"
            whileHover="hover"
            onClick={() => toggleExpand(idx)}
            style={{
              background: "#112240",
              padding: "1.5rem",
              borderRadius: "8px",
              cursor: "pointer",
              display: "flex",
              flexDirection: "column",
              gap: "0.8rem"
            }}
          >
            <LazyLoadImage
              alt={proj.title}
              effect="blur"
              src={proj.image}
              style={{
                borderRadius: "8px",
                width: "100%",
                height: "200px",
                objectFit: "cover"
              }}
            />
            <div>
              <h3 style={{ color: "#e6f1ff", marginBottom: "0.5rem" }}>
                {proj.title}
              </h3>
              <p style={{ color: "#8892b0", fontSize: "0.9rem" }}>
                {proj.meta}
              </p>
            </div>
            <p style={{ color: "#8892b0", margin: "0.5rem 0" }}>
              {proj.description}
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {proj.techStack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    background: "rgba(100, 255, 218, 0.2)",
                    color: "#64ffda",
                    padding: "0.3rem 0.6rem",
                    borderRadius: "4px",
                    fontSize: "0.8rem"
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
            {expanded === idx && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.5 }}
                style={{ overflow: "hidden", marginTop: "1rem" }}
              >
                <ul
                  style={{
                    color: "#8892b0",
                    fontSize: "0.9rem",
                    paddingLeft: "1rem"
                  }}
                >
                  {proj.details.map((point, index) => (
                    <li key={index} style={{ marginBottom: "0.5rem" }}>
                      {point}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
            <div
              style={{
                display: "flex",
                gap: "0.5rem",
                marginTop: "1rem"
              }}
            >
              <a
                href={proj.github}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#64ffda",
                  border: "1px solid #64ffda",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "4px",
                  textDecoration: "none",
                  fontSize: "0.9rem"
                }}
                onClick={(e) => e.stopPropagation()}
              >
                GitHub
              </a>
              <a
                href={proj.demo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  color: "#64ffda",
                  border: "1px solid #64ffda",
                  padding: "0.4rem 0.8rem",
                  borderRadius: "4px",
                  textDecoration: "none",
                  fontSize: "0.9rem"
                }}
                onClick={(e) => e.stopPropagation()}
              >
                Live Demo
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
