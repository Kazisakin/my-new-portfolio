import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

// Styled Components
const AboutContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3rem;
  padding: 4rem 2rem;
  min-height: 100vh; /* Ensure section takes full screen height */
  background: var(--color-bg);
  scroll-margin-top: 80px; /* Adjust for fixed navbar */

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 2rem;
  }
`;

const Content = styled(motion.div)`
  max-width: 600px;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: var(--color-accent);
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: var(--color-text);
  line-height: 1.6;
  margin-bottom: 1.5rem;
`;

const SkillsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
`;

const SkillChip = styled(motion.span)`
  background: rgba(100, 255, 218, 0.1);
  color: var(--color-accent);
  padding: 0.5rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: rgba(100, 255, 218, 0.4);
  }
`;

const ProfileImage = styled(motion.div)`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  overflow: hidden;
  border: 3px solid var(--color-accent);
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

// Animations
const fadeInVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

// About Component
export default function About() {
  return (
    <AboutContainer id="about">
      <Content variants={fadeInVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
        <Title>About Me</Title>
        <Description>
          Hi, I'm a passionate developer who loves building elegant and efficient software solutions.
          I specialize in frontend and backend technologies, constantly learning and improving my skills.
        </Description>
        <SkillsWrapper>
          {["React", "Node.js", "JavaScript", "TypeScript", "GraphQL", "Docker"].map((skill) => (
            <SkillChip key={skill}>{skill}</SkillChip>
          ))}
        </SkillsWrapper>
      </Content>
      <ProfileImage variants={fadeInVariants} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }}>
        <img src="/images/profile-placeholder.jpg" alt="Profile" />
      </ProfileImage>
    </AboutContainer>
  );
}
