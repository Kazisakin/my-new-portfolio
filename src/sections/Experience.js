import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Section container with a gradient background
const ExperienceSection = styled.section`
  min-height: 100vh;
  background: linear-gradient(135deg, #0a192f, #112240);
  padding: 6rem 2rem;
  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

// Timeline container for organizing experience cards
const TimelineContainer = styled.div`
  position: relative;
  max-width: 800px;
  margin: 0 auto;
  padding-left: 40px;
  &:before {
    content: "";
    position: absolute;
    left: 20px;
    top: 0;
    bottom: 0;
    width: 2px;
    background: rgba(100, 255, 218, 0.2);
  }
`;

// Each timeline item container
const TimelineItem = styled.div`
  position: relative;
  margin-bottom: 2rem;
`;

// Animated dot for the timeline
const Dot = styled(motion.div)`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: #64ffda;
  position: absolute;
  left: 12px;
  top: 1.2rem;
`;

// Experience card with hover and animation effects
const ExperienceCard = styled(motion.div)`
  background: rgba(10, 25, 47, 0.8);
  padding: 2rem;
  border-radius: 12px;
  border: 1px solid rgba(100, 255, 218, 0.1);
  box-shadow: 0 8px 16px rgba(2, 12, 27, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 24px rgba(2, 12, 27, 0.4);
  }

  h3 {
    color: #64ffda;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
  }

  h4 {
    color: #ccd6f6;
    font-size: 1.2rem;
    margin-bottom: 1rem;
    font-weight: 500;
  }

  p {
    color: #8892b0;
    line-height: 1.6;
    font-size: 1rem;
  }
`;

// Section title with animation
const SectionTitle = styled(motion.h2)`
  color: #64ffda;
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

export default function Experience() {
  const experiences = [
    {
      company: "Tech Corp",
      role: "Front-End Developer",
      date: "2023 - Present",
      responsibilities:
        "Implemented new features in React, improved performance, and collaborated with design teams.",
    },
    {
      company: "Dev Solutions",
      role: "Full-Stack Developer",
      date: "2021 - 2023",
      responsibilities:
        "Built REST APIs with Node.js/Express, integrated databases, and contributed to front-end tasks.",
    },
  ];

  // Animation variants for the dot (scale up on hover)
  const dotVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.5, transition: { duration: 0.3 } },
  };

  // Card animation variants
  const cardVariants = {
    initial: { opacity: 0, y: 40 },
    animate: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: i * 0.2 },
    }),
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
  };

  return (
    <ExperienceSection id="experience">
      <SectionTitle
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Experience
      </SectionTitle>
      <TimelineContainer>
        {experiences.map((exp, index) => (
          <TimelineItem key={index}>
            <Dot
              variants={dotVariants}
              initial="initial"
              whileHover="hover"
            />
            <ExperienceCard
              custom={index}
              variants={cardVariants}
              initial="initial"
              whileInView="animate"
              whileHover="whileHover"
              whileTap="whileTap"
              transition={{ type: "spring", stiffness: 100 }}
              viewport={{ once: true }}
            >
              <h3>{exp.company}</h3>
              <h4>
                {exp.role} | {exp.date}
              </h4>
              <p>{exp.responsibilities}</p>
            </ExperienceCard>
          </TimelineItem>
        ))}
      </TimelineContainer>
    </ExperienceSection>
  );
}
