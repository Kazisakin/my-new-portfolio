import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { Link as ScrollLink } from "react-scroll";
import Sidebar from "./Sidebar";

const NavBarContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  backdrop-filter: blur(10px);
  background: rgba(10, 25, 47, 0.9);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  z-index: 1000;
  
  @media (max-width: 768px) {
    padding: 0 1.5rem;
  }
`;

const Logo = styled(motion.div)`
  font-size: 1.8rem;
  color: var(--color-accent);
  font-weight: bold;
  cursor: pointer;
`;

const Menu = styled.ul`
  list-style: none;
  display: flex;
  gap: 2rem;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MenuItem = styled(motion.li)`
  font-size: 1rem;
  cursor: pointer;
  color: var(--color-text);
  
  &:hover {
    color: var(--color-accent);
  }
`;

const MobileMenuButton = styled(motion.div)`
  display: none;
  cursor: pointer;
  
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

const Dot = styled(motion.span)`
  width: 6px;
  height: 6px;
  background-color: var(--color-text);
  border-radius: 50%;
`;

const navVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => setSidebarOpen((prev) => !prev);

  return (
    <>
      <NavBarContainer variants={navVariants} initial="hidden" animate="visible">
        <Logo whileHover={{ scale: 1.1 }}>MyPortfolio</Logo>
        <Menu>
          {["About", "Projects", "Blog", "Contact"].map((item) => (
            <MenuItem key={item} whileHover={{ scale: 1.05 }}>
              <ScrollLink
                to={item.toLowerCase()}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                {item}
              </ScrollLink>
            </MenuItem>
          ))}
        </Menu>
        <MobileMenuButton onClick={toggleSidebar} whileHover={{ scale: 1.1 }}>
          {[...Array(3)].map((_, i) => (
            <Dot key={i} />
          ))}
        </MobileMenuButton>
      </NavBarContainer>
      <AnimatePresence>
        {sidebarOpen && <Sidebar isOpen={sidebarOpen} toggleSidebar={toggleSidebar} />}
      </AnimatePresence>
    </>
  );
}
