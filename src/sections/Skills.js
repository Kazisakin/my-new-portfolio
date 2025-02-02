import React from "react";
import styled from "styled-components";
import { DiJavascript1, DiJava, DiPhp, DiPython, DiReact } from "react-icons/di";
import { SiDjango, SiMysql, SiMongodb, SiFirebase, SiDocker, SiGithub, SiFigma } from "react-icons/si";
import { motion } from "framer-motion";

// Styled Components
const SkillsContainer = styled.section`
  padding: 4rem 2rem;
  text-align: center;
  background-color: var(--color-bg);
  overflow: hidden;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: var(--color-white);
  margin-bottom: 2rem;
`;

// Marquee Wrapper (Smooth Scrolling)
const MarqueeWrapper = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const MarqueeContent = styled(motion.div)`
  display: flex;
  gap: 1.2rem;
  width: fit-content;
  cursor: grab;
  user-select: none;
`;

const SkillCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  padding: 0.7rem;
  border-radius: 8px;
  min-width: 80px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0px 4px 12px rgba(100, 255, 218, 0.3);
  }

  svg {
    font-size: 1.3rem;
    color: var(--color-accent);
  }

  span {
    font-size: 0.8rem;
    color: var(--color-text);
    margin-top: 0.3rem;
  }
`;

// Skills Data
const skills = [
  { name: "JavaScript", icon: <DiJavascript1 /> },
  { name: "Java", icon: <DiJava /> },
  { name: "Python", icon: <DiPython /> },
  { name: "PHP", icon: <DiPhp /> },
  { name: "React", icon: <DiReact /> },
  { name: "Django", icon: <SiDjango /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Firebase", icon: <SiFirebase /> },
  { name: "Docker", icon: <SiDocker /> },
  { name: "GitHub", icon: <SiGithub /> },
  { name: "Figma", icon: <SiFigma /> },
];

export default function Skills() {
  return (
    <SkillsContainer>
      <Title>Skills</Title>
      <MarqueeWrapper>
        <MarqueeContent
          drag="x"
          dragConstraints={{ left: -400, right: 0 }}
          animate={{ x: [0, -400] }}
          transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {skills.map((skill, index) => (
            <SkillCard key={index}>
              {skill.icon}
              <span>{skill.name}</span>
            </SkillCard>
          ))}
          {/* Duplicate for seamless loop */}
          {skills.map((skill, index) => (
            <SkillCard key={`dup-${index}`}>
              {skill.icon}
              <span>{skill.name}</span>
            </SkillCard>
          ))}
        </MarqueeContent>
      </MarqueeWrapper>
    </SkillsContainer>
  );
}
