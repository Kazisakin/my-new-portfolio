import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import GlobalStyles, { darkTheme, lightTheme } from "./styles/GlobalStyles";
import Navbar from "./components/Navbar";
import About from "./sections/About";
import Exprience from "./sections/Experience"
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";
import Hero from "./sections/Hero";
import Contact from "./sections/Contact";
import Blog from "./sections/Blog";
// Import other components as needed

export default function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Toggle the theme (this could be bound to a button in your Navbar, for example)
  const toggleTheme = () => setIsDarkMode((prev) => !prev);

  return (
    <ThemeProvider theme={isDarkMode ? darkTheme : lightTheme}>
      <GlobalStyles />
      <Navbar toggleTheme={toggleTheme} />
      <main>
        <About />
        <Exprience />
        <Projects />
        <Skills />
        <Blog/>        
        <Contact/>
        <Hero/>
        {/* Other sections/components */}
      </main>
    </ThemeProvider>
  );
}
