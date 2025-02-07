// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  :root {
    --body-bg: ${({ theme }) => theme?.body || "#0a192f"};
    --text-color: ${({ theme }) => theme?.text || "#ccd6f6"};
    --accent-color: ${({ theme }) => theme?.accent || "#64ffda"};
    --text-secondary: ${({ theme }) => theme?.textSecondary || "#8892b0"};
    --button-text: ${({ theme }) => theme?.buttonText || "#0a192f"};
    --transition-speed: 0.3s;
  }

  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: "Inter", sans-serif;
    background-color: var(--body-bg);
    color: var(--text-color);
    line-height: 1.6;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    transition: background var(--transition-speed) ease-in-out, color var(--transition-speed) ease-in-out;
    cursor: url('/assets/images/cursor.png'), auto;
  }

  nav, footer {
    padding: 1.5rem 2rem;
  }

  h1, h2, h3, h4, h5, h6 {
    color: var(--accent-color);
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  h1 { font-size: 3rem; }
  h2 { font-size: 2.5rem; }
  @media (max-width: 768px) {
    h1 { font-size: 2.5rem; }
    h2 { font-size: 2rem; }
  }

  p {
    margin-bottom: 1rem;
    color: var(--text-secondary);
    font-size: 1.1rem;
    line-height: 1.8;
  }
  @media (max-width: 768px) {
    p { font-size: 1rem; }
  }

  a {
    color: var(--accent-color);
    text-decoration: none;
    transition: color var(--transition-speed) ease-in-out;
  }
  a:hover, a:focus { color: #52d1b2; }

  button {
    background-color: var(--accent-color);
    color: var(--button-text);
    border: none;
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
    border-radius: 5px;
    transition: background-color var(--transition-speed) ease-in-out, transform 0.2s ease-in-out;
  }
  button:hover { background-color: #52d1b2; transform: scale(1.05); }
  button:active { transform: scale(0.98); }

  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  ::-webkit-scrollbar-track {
    background: #1a1a1a;
    border-radius: 4px;
  }
  ::-webkit-scrollbar-thumb {
    background-color: var(--accent-color);
    border-radius: 4px;
  }

  .container {
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

export default GlobalStyles;
