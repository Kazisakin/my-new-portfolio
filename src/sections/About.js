import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  const fullText = "I'm a Full-Stack Web Developer & Software Engineer.";
  const [typedText, setTypedText] = useState("");
  const [index, setIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  // Typewriter Effect - Looping with automatic new line handling
  useEffect(() => {
    let typingSpeed = isDeleting ? 50 : 100; // Faster deleting

    if (!isDeleting && index === fullText.length) {
      setTimeout(() => setIsDeleting(true), 1000); // Pause before deleting
    } else if (isDeleting && index === 0) {
      setIsDeleting(false);
    }

    const timeout = setTimeout(() => {
      setTypedText(fullText.substring(0, index));
      setIndex((prevIndex) => (isDeleting ? prevIndex - 1 : prevIndex + 1));
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting]);

  return (
    <motion.div
      className="about-container"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Glitch Effect Title */}
      <h2 className="glitch" data-text="About Me">
        About Me
      </h2>

      {/* Typewriter Effect */}
      <h2 className="typewriter">
        {typedText}
        {showCursor && <span className="cursor">|</span>}
      </h2>

      {/* About Content Section */}
      <div className="about-content">
        <p className="fade-in">
          🚀 Passionate about building <strong>scalable web solutions</strong> that push the boundaries of creativity and efficiency.
        </p>
        <p className="fade-in">
          💡 Expertise in <strong>JavaScript, React, Next.js, Node.js, and MongoDB</strong> with a strong foundation in performance optimization.
        </p>
        <p className="fade-in">
          🌎 Bridging the gap between <strong>design & development</strong>, creating experiences that leave an impact.
        </p>
        <p className="fade-in">
          🛠️ Open-source contributor, mentor, and lifelong learner with a love for automation and AI.
        </p>
        <p className="fade-in">
          🎨 Enjoys working on futuristic <strong>UI/UX experiences with animations, 3D, and motion graphics.</strong>
        </p>
      </div>

      {/* Styles */}
      <style jsx>{`
        /* About Container */
        .about-container {
          text-align: center;
          padding: 4rem 2rem;
          max-width: 850px;
          margin: auto;
          border-radius: 16px;
          background: rgba(10, 10, 10, 0.95);
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.1);
          overflow: hidden;
        }

        /* Glitch Effect Title */
        h2.glitch {
          font-size: 2.8rem;
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

        /* Typewriter Effect */
        .typewriter {
          font-size: 2rem;
          color: #64ffda;
          font-family: "Courier New", monospace;
          display: block;
          text-align: center;
          word-wrap: break-word;
          white-space: normal;
          overflow: hidden;
          width: 100%;
          padding: 10px;
        }

        /* Blinking Cursor */
        .cursor {
          display: inline-block;
          font-size: 2rem;
          color: #64ffda;
          animation: blink 0.75s infinite;
        }

        @keyframes blink {
          50% {
            opacity: 0;
          }
        }

        /* About Content Section */
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

        /* Fade-in effect */
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

        /* RESPONSIVE DESIGN */

        /* Tablet (Medium Screens) */
        @media (max-width: 1024px) {
          .about-container {
            padding: 3rem 1.5rem;
          }
          h2.glitch {
            font-size: 2.5rem;
          }
          .typewriter {
            font-size: 1.8rem;
          }
          .cursor {
            font-size: 1.8rem;
          }
          .about-content {
            font-size: 1.1rem;
          }
        }

        /* Mobile (Small Screens) */
        @media (max-width: 768px) {
          .about-container {
            padding: 2.5rem 1.2rem;
            max-width: 90%;
          }
          h2.glitch {
            font-size: 2rem;
          }
          .typewriter {
            font-size: 1.5rem;
          }
          .cursor {
            font-size: 1.5rem;
          }
          .about-content {
            max-height: none;
            font-size: 1rem;
            padding: 1rem;
          }
        }

        /* Extra Small Devices */
        @media (max-width: 480px) {
          .about-container {
            padding: 2rem 1rem;
            max-width: 95%;
          }
          h2.glitch {
            font-size: 1.8rem;
          }
          .typewriter {
            font-size: 1.2rem;
          }
          .cursor {
            font-size: 1.2rem;
          }
          .about-content {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </motion.div>
  );
};

export default About;
