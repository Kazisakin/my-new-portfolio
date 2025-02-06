// src/sections/Projects.js
import React from "react";
import styled from "styled-components";

const ProjectsContainer = styled.div`
  color: ${({ theme }) => theme.text};
  padding: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 1rem;
  text-align: center;
`;

const ProjectItem = styled.div`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background: ${({ theme }) => theme.cardBackground};
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0,0,0,0.1);
`;

const ProjectTitle = styled.h3`
  font-size: 1.3rem;
  margin-bottom: 0.3rem;
`;

const ProjectMeta = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const ProjectDescription = styled.p`
  font-size: 1rem;
  margin-bottom: 0.5rem;
`;

const BulletList = styled.ul`
  list-style: disc;
  margin-left: 1.5rem;
  font-size: 0.9rem;
  line-height: 1.5;
`;

export default function Projects() {
  return (
    <ProjectsContainer>
      <SectionTitle>Projects</SectionTitle>
      
      <ProjectItem>
        <ProjectTitle>WordPress Secure Voting Plugin</ProjectTitle>
        <ProjectMeta>
          Bangladesh Student Society, University of New Brunswick | GitHub | October 2024
        </ProjectMeta>
        <ProjectDescription>
          Developed a secure, cost-effective online voting system using PHP, MySQL, and SMTP email.
        </ProjectDescription>
        <BulletList>
          <li>Enabled seamless voting for 90+ users with token‑based authentication and rate‑limiting.</li>
          <li>Implemented one‑time email authentication with a 30‑minute cooldown.</li>
          <li>Integrated multifactor authentication for secure committee access.</li>
        </BulletList>
      </ProjectItem>
      
      <ProjectItem>
        <ProjectTitle>Invoice Management System</ProjectTitle>
        <ProjectMeta>
          ROBOFLIGHT, Fredericton, New Brunswick | GitHub | September 2024
        </ProjectMeta>
        <ProjectDescription>
          Built a JavaFX and MySQL‑integrated application to generate invoices for over 200 students.
        </ProjectDescription>
        <BulletList>
          <li>Implemented role‑based access (ADMIN/USER) with secure login.</li>
          <li>Automated course assignment, invoice updates, and real‑time student searches.</li>
          <li>Utilized JDBC and iText PDF generation for professional invoice production.</li>
        </BulletList>
      </ProjectItem>
      
      <ProjectItem>
        <ProjectTitle>Employee Performance Data Analysis and Visualization</ProjectTitle>
        <ProjectMeta>
          Personal Project | January 2025
        </ProjectMeta>
        <ProjectDescription>
          Analyzed performance data focusing on 11+ KPIs for 20‑agent teams.
        </ProjectDescription>
        <BulletList>
          <li>Automated data cleaning and aggregation using Python scripts.</li>
          <li>Integrated processed data into Tableau for real‑time visualization.</li>
          <li>Developed dashboards tracking over 15 KPIs for actionable insights.</li>
        </BulletList>
      </ProjectItem>
    </ProjectsContainer>
  );
}
