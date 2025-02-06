// src/App.js
import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles, { darkTheme, lightTheme } from "./styles/GlobalStyles"; // Ensure GlobalStyles.js is in src/
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Experience from "./sections/Experience";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import styled from "styled-components";
import "./App.css";

const Container = styled.div`
  display: flex;
  height: 100vh;
  overflow: hidden;

  @media (max-width: 768px) {
    flex-direction: column;
    height: auto;
  }
`;

const LeftPanel = styled.div`
  width: 350px;
  background: ${({ theme }) => theme.leftBg};
  padding: 2rem;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  overflow-y: auto;

  @media (max-width: 768px) {
    position: relative;
    width: 100%;
  }
`;

const RightPanel = styled.div`
  margin-left: 350px;
  width: calc(100% - 350px);
  overflow-y: auto;
  scroll-behavior: smooth;
  background: ${({ theme }) => theme.background};
  padding: 2rem;

  @media (max-width: 768px) {
    margin-left: 0;
    width: 100%;
  }
`;

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Container>
        <LeftPanel>
          <About />
          <div style={{ marginTop: "2rem", textAlign: "center" }}>
            <button
              onClick={toggleTheme}
              style={{
                padding: "0.5rem 1rem",
                background: "transparent",
                border: `2px solid ${isDarkMode ? darkTheme.accent : lightTheme.accent}`,
                color: isDarkMode ? darkTheme.accent : lightTheme.accent,
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Toggle Theme
            </button>
          </div>
        </LeftPanel>
        <RightPanel>
          <Navbar />
          <section id="experience">
            <Experience />
          </section>
          <section id="projects">
            <Projects />
          </section>
          <section id="skills">
            <Skills />
          </section>
        </RightPanel>
      </Container>
    </ThemeProvider>
  );
}

export default App;
