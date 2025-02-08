// src/context/ThemeContext.js

import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "../src/styles/Theme";
import GlobalStyles from "../src/styles/GlobalStyles";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    setIsDarkMode(savedTheme === "light" ? false : true);
  }, []);

  const toggleTheme = () => {
    setIsDarkMode((prev) => {
      const newThemeState = !prev;
      localStorage.setItem("theme", newThemeState ? "dark" : "light");
      return newThemeState;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};
