// pages/_app.js
import { ThemeProvider } from "styled-components";
import GlobalStyles from "../src/styles/GlobalStyles";
import { darkTheme, lightTheme } from "../src/styles/Theme";
import { useState, useEffect } from "react";

function MyApp({ Component, pageProps }) {
  const [isDarkMode, setIsDarkMode] = useState(null);

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem("theme");
      setIsDarkMode(savedTheme === "light" ? false : true);
    } catch (error) {
      console.error("Theme error:", error);
      setIsDarkMode(true);
    }
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
      <Component {...pageProps} toggleTheme={toggleTheme} />
    </ThemeProvider>
  );
}

export default MyApp;
