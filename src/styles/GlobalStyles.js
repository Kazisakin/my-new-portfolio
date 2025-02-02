import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  /* CSS Reset */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Define CSS variables based on theme */
  :root {
    --color-bg: ${({ theme }) => theme.background};
    --color-card-bg: ${({ theme }) => theme.cardBackground};
    --color-text: ${({ theme }) => theme.text};
    --color-accent: ${({ theme }) => theme.accent};
    --color-white: ${({ theme }) => theme.white};
    --hover-effect: ${({ theme }) => theme.hover};
  }

  html {
    font-size: 16px;
    scroll-behavior: smooth;
  }

  /* Animated gradient background on the body */
  body {
    background: linear-gradient(45deg, var(--color-bg), var(--color-card-bg));
    background-size: 200% 200%;
    animation: gradientAnimation 10s ease infinite;
    color: var(--color-text);
    font-family: 'Roboto', sans-serif;
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  @keyframes gradientAnimation {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1, h2, h3, h4, h5 {
    margin: 0;
    color: var(--color-white);
  }

  /* Responsive Typography */
  @media (max-width: 1200px) {
    html {
      font-size: 15px;
    }
  }

  @media (max-width: 1024px) {
    html {
      font-size: 14px;
    }
  }

  @media (max-width: 768px) {
    html {
      font-size: 13px;
    }

    body {
      animation: none; /* Disable heavy animation on mobile for performance */
    }
  }

  @media (max-width: 480px) {
    html {
      font-size: 12px;
    }

    body {
      padding: 1rem;
    }
  }
`;

export default GlobalStyles;

/* Dark & Light Theme */
export const darkTheme = {
  background: "#0a192f",
  cardBackground: "#112240",
  text: "#8892b0",
  accent: "#64ffda",
  white: "#e6f1ff",
  hover: "rgba(100, 255, 218, 0.1)"
};

export const lightTheme = {
  background: "#f4f4f4",
  cardBackground: "#ffffff",
  text: "#333333",
  accent: "#64ffda",
  white: "#e6f1ff",
  hover: "rgba(100, 255, 218, 0.1)"
};
