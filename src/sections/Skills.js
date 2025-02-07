// src/sections/Skills.js
import React from "react";
import { FaReact, FaNodeJs, FaDatabase, FaHtml5, FaCss3Alt, FaJsSquare } from "react-icons/fa";

const Skills = () => {
  return (
    <div className="skills container">
      <h2>Skills</h2>
      <div className="icons">
        <FaReact size={48} title="React" />
        <FaNodeJs size={48} title="Node.js" />
        <FaDatabase size={48} title="Databases" />
        <FaHtml5 size={48} title="HTML5" />
        <FaCss3Alt size={48} title="CSS3" />
        <FaJsSquare size={48} title="JavaScript" />
      </div>
      <style jsx>{`
        .icons {
          display: flex;
          gap: 1rem;
          flex-wrap: wrap;
          justify-content: center;
          margin-top: 1rem;
        }
      `}</style>
    </div>
  );
};

export default Skills;
