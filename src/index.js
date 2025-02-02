// src/index.js
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { ThemeContextProvider } from "./context/ThemeContext";
import process from "process";

// Fix Webpack 5 missing process polyfill
window.process = process;

// Get the root container
const container = document.getElementById("root");
const root = createRoot(container);

// Render the app inside ThemeContextProvider
root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
