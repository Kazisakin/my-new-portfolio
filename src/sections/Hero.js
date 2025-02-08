// src/sections/Hero.js
import React from "react";

const Hero = ({ toggleTheme }) => {
  return (
    <div className="hero">
      <h1>Hello, I'm Alex Developer</h1>
      <p>
        I craft scalable full-stack applications and innovative software solutions.
      </p>     
      <style jsx>{`
        .hero {
          text-align: center;
          animation: slideIn 1s ease-out forwards;
        }
        h1 {
          font-size: 3rem;
          margin-bottom: 1rem;
        }
        p {
          font-size: 1.25rem;
          margin-bottom: 2rem;
        }
        @keyframes slideIn {
          from { transform: translateY(-20px); opacity: 0; }
          to { transform: translateY(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
};

export default Hero;
