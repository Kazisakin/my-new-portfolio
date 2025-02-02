import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";

const SidebarContainer = styled(motion.aside)`
  position: fixed;
  top: 70px;
  right: 0;
  width: 250px;
  height: calc(100vh - 70px);
  background: rgba(10, 25, 47, 0.95);
  backdrop-filter: blur(10px);
  padding: 2rem;
  z-index: 999;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  
  @media (max-width: 480px) {
    width: 100%;
    padding: 1.5rem;
  }
`;

const SidebarLink = styled(motion.div)`
  color: var(--color-text);
  cursor: pointer;
  font-size: 1.2rem;
  
  &:hover {
    color: var(--color-accent);
  }
  
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

const sidebarVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
  exit: {
    x: "100%",
    transition: { type: "spring", stiffness: 300, damping: 30 },
  },
};

export default function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <SidebarContainer
      variants={sidebarVariants}
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      exit="exit"
    >
      {["About", "Projects", "Blog", "Contact"].map((item) => (
        <SidebarLink key={item} onClick={toggleSidebar}>
          <ScrollLink
            to={item.toLowerCase()}
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
          >
            {item}
          </ScrollLink>
        </SidebarLink>
      ))}
    </SidebarContainer>
  );
}
