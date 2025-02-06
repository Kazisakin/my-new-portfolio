// src/sections/About.js
import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const AboutContainer = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.text};
`;

const ProfileImage = styled(motion.img)`
  width: 180px;
  height: 180px;
  border-radius: 50%;
  border: 4px solid ${({ theme }) => theme.accent};
  object-fit: cover;
  margin-bottom: 1rem;
`;

const Name = styled.h1`
  font-size: 1.8rem;
  margin-bottom: 0.5rem;
  color: ${({ theme }) => theme.accent};
`;

const ContactInfo = styled.p`
  font-size: 0.9rem;
  margin: 0.2rem 0;
`;

const Summary = styled.p`
  font-size: 0.95rem;
  margin-top: 1rem;
  line-height: 1.5;
`;

export default function About() {
  return (
    <AboutContainer>
      <ProfileImage 
        src="/images/profile-placeholder.jpg" 
        alt="Kazi Mostofa Sakin"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      />
      <Name>Kazi Mostofa Sakin</Name>
      <ContactInfo>Fredericton, New Brunswick</ContactInfo>
      <ContactInfo>(506)-282-1327</ContactInfo>
      <ContactInfo>kazisakin@icloud.com</ContactInfo>
      <Summary>
        Computer Science student at the University of New Brunswick with a passion for innovative technology,
        creative content design, and excellent customer service. Experienced in technical support, web design,
        and security operations.
      </Summary>
    </AboutContainer>
  );
}
