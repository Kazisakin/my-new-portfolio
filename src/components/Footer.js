// src/components/Footer.js

import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        padding: "1rem",
        textAlign: "center",
        background: "#333",
        color: "#fff"
      }}
    >
      <p>&copy; {new Date().getFullYear()} My Portfolio</p>
    </footer>
  );
};

export default Footer;
