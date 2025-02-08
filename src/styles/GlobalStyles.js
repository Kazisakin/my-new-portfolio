// src/styles/GlobalStyles.js

import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* RESET & BOX-SIZING */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* GLOBAL STYLES */
  body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Inter", sans-serif;
    line-height: 1.6;
    transition: background 0.3s ease-in-out, color 0.3s ease-in-out;
  }

  html {
    scroll-behavior: smooth;
  }

  nav, footer {
    padding: 1.5rem 2rem;
  }

  section {
    padding: 6rem 2rem;
  }
  @media (max-width: 768px) {
    section { padding: 4rem 1rem; }
  }

  /* HEADINGS */
  h1, h2, h3, h4, h5, h6 {
    margin: 0;
    color: ${({ theme }) => theme.heading};
    font-weight: bold;
  }
  h1 { font-size: 3rem; }
  h2 { font-size: 2.5rem; }
  @media (max-width: 768px) {
    h1 { font-size: 2.5rem; }
    h2 { font-size: 2rem; }
  }

  /* PARAGRAPHS */
  p {
    margin: 0;
    margin-bottom: 1rem;
    color: ${({ theme }) => theme.paragraph};
    font-size: 1.1rem;
    line-height: 1.8;
  }
  @media (max-width: 768px) {
    p { font-size: 1rem; }
  }

  /* LINKS */
  a {
    color: ${({ theme }) => theme.link};
    text-decoration: none;
    transition: color 0.3s ease-in-out;
  }
  a:hover {
    color: ${({ theme }) => theme.linkHover};
  }

  /* BUTTONS */
  button {
    background-color: ${({ theme }) => theme.buttonBg};
    color: ${({ theme }) => theme.buttonText};
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color 0.3s ease-in-out, transform 0.2s ease-in-out;
  }
  button:hover {
    background-color: ${({ theme }) => theme.buttonHoverBg};
    transform: scale(1.05);
  }
  button:active {
    transform: scale(0.98);
  }

  /* CUSTOM SCROLLBAR (Optional) */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #1a1a1a;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: ${({ theme }) => theme.link};
    border-radius: 4px;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export default GlobalStyles;
