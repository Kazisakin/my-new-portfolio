// Education.js
import React from 'react';
import './Education.css';

function Education() {
  return (
    <div className="education-page container">
      <h1>Education</h1>
      
      <div className="education-item">
        <h2>B.Sc. in Computer Science</h2>
        <p>University of New Brunswick, Fredericton, NB</p>
        <span className="date-range">January 2023 - Present</span>
      </div>
      
      {/* If you have more education entries, add them here. */}
    </div>
  );
}

export default Education;
