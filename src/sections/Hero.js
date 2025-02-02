import React from "react";
import styled from "styled-components";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// Styled Components
const FooterContainer = styled.footer`
  background: #0a192f;
  color: #8892b0;
  text-align: center;
  padding: 1.5rem;
  font-size: 0.9rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  border-top: 1px solid rgba(136, 146, 176, 0.2);
  
  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 15px;

  a {
    color: #8892b0;
    font-size: 1.2rem;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #64ffda;
    }
  }
`;

// Footer Component
export default function Footer() {
  return (
    <FooterContainer>
      <SocialLinks>
        <a href="https://github.com/" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
        <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
      </SocialLinks>
      <p>&copy; {new Date().getFullYear()} MyPortfolio. All rights reserved.</p>
    </FooterContainer>
  );
}
