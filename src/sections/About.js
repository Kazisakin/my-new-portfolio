import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [typedText, setTypedText] = useState("");
  const fullText = "I'm a Full-Stack Web Developer & Software Engineer.";
  const [index, setIndex] = useState(0);

  // Typewriter Effect
  useEffect(() => {
    if (index < fullText.length) {
      setTimeout(() => {
        setTypedText((prev) => prev + fullText[index]);
        setIndex(index + 1);
      }, 100);
    }
  }, [index]);

  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className="glitch" data-text="About Me">
        About Me
      </h2>
      <p className="typewriter">{typedText}</p>
      <div className="about-content">
        <p className="fade-in">
          🚀 Passionate about building **scalable web solutions** that push the boundaries of creativity and efficiency.
        </p>
        <p className="fade-in">
          💡 Expertise in **JavaScript, React, Next.js, Node.js, and MongoDB** with a strong foundation in performance optimization.
        </p>
        <p className="fade-in">
          🌎 Bridging the gap between **design & development**, creating experiences that leave an impact.
        </p>
        <p className="fade-in">
          🛠️ Open-source contributor, mentor, and lifelong learner with a love for automation and AI.
        </p>
        <p className="fade-in">
          🎨 Enjoys working on futuristic UI/UX experiences with **animations, 3D, and motion graphics**.
        </p>
      </div>

      <style jsx>{`
        .about-container {
          text-align: center;
          padding: 3rem;
          max-width: 900px;
          margin: auto;
          border-radius: 16px;
          background: rgba(10, 10, 10, 0.9);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
          position: relative;
          overflow: hidden;
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
        }
        h2.glitch {
          font-size: 3rem;
          position: relative;
          color: white;
          font-weight: 900;
          text-transform: uppercase;
        }
        h2.glitch:before,
        h2.glitch:after {
          content: attr(data-text);
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.7;
        }
        h2.glitch:before {
          color: #ff004f;
          transform: translate(-3px, -3px);
        }
        h2.glitch:after {
          color: #00eaff;
          transform: translate(3px, 3px);
        }
        .typewriter {
          font-size: 1.5rem;
          color: #64ffda;
          font-family: "Courier New", monospace;
          overflow: hidden;
          white-space: nowrap;
          width: 100%;
          margin: 20px 0;
          border-right: 2px solid #64ffda;
          animation: blink 0.75s infinite;
        }
        @keyframes blink {
          50% {
            border-color: transparent;
          }
        }
        .about-content {
          max-height: 350px;
          overflow-y: auto;
          padding: 1.5rem;
          margin-top: 1rem;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.05);
          backdrop-filter: blur(10px);
          text-align: left;
          color: #ccd6f6;
          font-size: 1.2rem;
        }
        .about-content p {
          margin-bottom: 1rem;
          line-height: 1.6;
          transition: all 0.3s ease-in-out;
        }
        .about-content p:hover {
          color: #64ffda;
          transform: scale(1.02);
        }
        .fade-in {
          opacity: 0;
          animation: fadeInText 1s ease-in forwards;
        }
        @keyframes fadeInText {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </motion.div>
  );
};

export default About;
