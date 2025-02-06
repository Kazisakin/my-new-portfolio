// src/sections/Skills.js
import React from "react";
import styled from "styled-components";

const SkillsContainer = styled.div`
  color: ${({ theme }) => theme.text};
  padding: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.8rem;
  color: ${({ theme }) => theme.accent};
  margin-bottom: 1rem;
  text-align: center;
`;

const CategoryTitle = styled.h3`
  font-size: 1.2rem;
  margin: 1rem 0 0.5rem;
  color: ${({ theme }) => theme.accent};
`;

const SkillList = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const SkillItem = styled.li`
  background: ${({ theme }) => theme.cardBackground};
  padding: 0.4rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
`;

export default function Skills() {
  return (
    <SkillsContainer>
      <SectionTitle>Skills</SectionTitle>
      
      <CategoryTitle>Programming Languages</CategoryTitle>
      <SkillList>
        <SkillItem>Java</SkillItem>
        <SkillItem>Python</SkillItem>
        <SkillItem>C++</SkillItem>
        <SkillItem>JavaScript</SkillItem>
        <SkillItem>R</SkillItem>
        <SkillItem>PHP</SkillItem>
      </SkillList>
      
      <CategoryTitle>Web Development</CategoryTitle>
      <SkillList>
        <SkillItem>HTML</SkillItem>
        <SkillItem>CSS</SkillItem>
        <SkillItem>Bootstrap</SkillItem>
        <SkillItem>React.js</SkillItem>
        <SkillItem>Django</SkillItem>
        <SkillItem>MERN Stack</SkillItem>
        <SkillItem>REST APIs</SkillItem>
      </SkillList>
      
      <CategoryTitle>Databases</CategoryTitle>
      <SkillList>
        <SkillItem>PostgreSQL</SkillItem>
        <SkillItem>MySQL</SkillItem>
        <SkillItem>MongoDB</SkillItem>
        <SkillItem>Redis</SkillItem>
      </SkillList>
      
      <CategoryTitle>Data Analysis & Machine Learning</CategoryTitle>
      <SkillList>
        <SkillItem>Pandas</SkillItem>
        <SkillItem>NumPy</SkillItem>
        <SkillItem>Matplotlib</SkillItem>
        <SkillItem>TensorFlow</SkillItem>
        <SkillItem>Power BI</SkillItem>
        <SkillItem>Tableau</SkillItem>
        <SkillItem>Lucidchart</SkillItem>
      </SkillList>
      
      <CategoryTitle>DevOps & Tools</CategoryTitle>
      <SkillList>
        <SkillItem>Docker</SkillItem>
        <SkillItem>Jenkins</SkillItem>
        <SkillItem>Nginx</SkillItem>
        <SkillItem>GitHub</SkillItem>
        <SkillItem>Apache POI</SkillItem>
        <SkillItem>Firebase</SkillItem>
        <SkillItem>Spring Boot</SkillItem>
      </SkillList>
      
      <CategoryTitle>Design & Documentation</CategoryTitle>
      <SkillList>
        <SkillItem>Figma</SkillItem>
        <SkillItem>Adobe Creative Suite</SkillItem>
        <SkillItem>WordPress</SkillItem>
        <SkillItem>AutoCAD</SkillItem>
        <SkillItem>Microsoft 365</SkillItem>
      </SkillList>
    </SkillsContainer>
  );
}
