// src/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background: ${({ theme }) => theme.background};
    color: ${({ theme }) => theme.text};
    line-height: 1.6;
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
    cursor: pointer;
  }
`;

export default GlobalStyles;

export const darkTheme = {
  background: "#0a192f",
  cardBackground: "#112240",
  text: "#8892b0",
  accent: "#64ffda",
  leftBg: "#0a192f",
  navBg: "rgba(10, 25, 47, 0.95)",
  borderColor: "#233554"
};

export const lightTheme = {
  background: "#f4f4f4",
  cardBackground: "#ffffff",
  text: "#333333",
  accent: "#007acc",
  leftBg: "#ffffff",
  navBg: "rgba(244, 244, 244, 0.95)",
  borderColor: "#ccc"
};
