// pages/_app.js

import { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../src/styles/Theme";
import GlobalStyles from "../src/styles/GlobalStyles";
import "../App.css"; // Import legacy CSS if needed

function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(null);

  useEffect(() => {
    // Retrieve the saved theme (defaults to dark)
    const savedTheme = localStorage.getItem("theme") || "dark";
    setIsDarkMode(savedTheme === "light" ? false : true);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newMode = !prev;
      localStorage.setItem("theme", newMode ? "dark" : "light");
      return newMode;
    });
  };

  if (isDarkMode === null) return null;

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      {/* Pass toggleTheme as needed to your pages/components */}
      <Component {...pageProps} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default MyApp;
