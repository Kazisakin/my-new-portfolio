// src/components/Navbar.js
import React from "react";
import styled from "styled-components";
import { Link as ScrollLink } from "react-scroll";

const NavContainer = styled.nav`
  position: sticky;
  top: 0;
  z-index: 10;
  background: ${({ theme }) => theme.navBg || "transparent"};
  padding: 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.borderColor || "#444"};
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  justify-content: center;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
`;

const NavItem = styled.li`
  font-size: 1rem;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.accent};
  }
`;

export default function Navbar() {
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <ScrollLink to="experience" smooth={true} duration={500} offset={-50}>
            Experience
          </ScrollLink>
        </NavItem>
        <NavItem>
          <ScrollLink to="projects" smooth={true} duration={500} offset={-50}>
            Projects
          </ScrollLink>
        </NavItem>
        <NavItem>
          <ScrollLink to="skills" smooth={true} duration={500} offset={-50}>
            Skills
          </ScrollLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
}
