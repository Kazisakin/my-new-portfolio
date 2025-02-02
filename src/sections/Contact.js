import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaPaperPlane } from "react-icons/fa";

// Styled Components
const ContactSection = styled.section`
  min-height: 100vh;
  background: var(--color-bg);
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const Heading = styled(motion.h2)`
  color: var(--color-white);
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const Description = styled.p`
  color: var(--color-text);
  font-size: 1rem;
  margin-bottom: 2rem;
  max-width: 600px;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  gap: 1.5rem;
`;

const ContactForm = styled(motion.form)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const InputField = styled.input`
  padding: 0.8rem;
  border: 1px solid rgba(136, 146, 176, 0.5);
  border-radius: 5px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-white);
  outline: none;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: var(--color-accent);
  }
`;

const TextArea = styled.textarea`
  padding: 0.8rem;
  border: 1px solid rgba(136, 146, 176, 0.5);
  border-radius: 5px;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.05);
  color: var(--color-white);
  outline: none;
  resize: none;
  height: 120px;
  transition: border-color 0.3s ease-in-out;

  &:focus {
    border-color: var(--color-accent);
  }
`;

const SubmitButton = styled(motion.button)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  background: var(--color-accent);
  color: var(--color-bg);
  border: none;
  padding: 0.8rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: rgba(100, 255, 218, 0.8);
  }
`;

const ContactLinks = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  margin-top: 2rem;
`;

const ContactButton = styled(motion.a)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
  color: var(--color-accent);
  border: 2px solid var(--color-accent);
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 500;
  background: rgba(100, 255, 218, 0.1);
  transition: all 0.3s ease-in-out;

  &:hover {
    background: var(--color-accent);
    color: var(--color-bg);
    transform: translateY(-3px);
  }

  &:active {
    transform: scale(0.95);
  }

  svg {
    font-size: 1.2rem;
  }
`;

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, staggerChildren: 0.2 } },
};

const buttonVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

// Contact Component
export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!"); // Replace with actual form handling logic
  };

  return (
    <ContactSection id="contact">
      <Heading initial="hidden" whileInView="visible" viewport={{ once: true }} variants={containerVariants}>
        Let's Connect!
      </Heading>
      <Description>Feel free to reach out for collaborations or just a friendly chat! 🚀</Description>
      
      <ContactContainer>
        <ContactForm onSubmit={handleSubmit} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
          <InputField type="text" name="name" placeholder="Your Name" required value={formData.name} onChange={handleChange} />
          <InputField type="email" name="email" placeholder="Your Email" required value={formData.email} onChange={handleChange} />
          <TextArea name="message" placeholder="Your Message" required value={formData.message} onChange={handleChange} />
          <SubmitButton type="submit" variants={buttonVariants}>
            <FaPaperPlane /> Send Message
          </SubmitButton>
        </ContactForm>
      </ContactContainer>

      <ContactLinks variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
        <ContactButton href="mailto:your.email@example.com" variants={buttonVariants}>
          <FaEnvelope /> Email Me
        </ContactButton>
        <ContactButton href="https://github.com/yourname" target="_blank" rel="noopener noreferrer" variants={buttonVariants}>
          <FaGithub /> GitHub
        </ContactButton>
        <ContactButton href="https://www.linkedin.com/in/yourname" target="_blank" rel="noopener noreferrer" variants={buttonVariants}>
          <FaLinkedin /> LinkedIn
        </ContactButton>
        <ContactButton href="https://twitter.com/yourname" target="_blank" rel="noopener noreferrer" variants={buttonVariants}>
          <FaTwitter /> Twitter
        </ContactButton>
      </ContactLinks>
    </ContactSection>
  );
}
