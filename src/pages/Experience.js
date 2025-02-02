// Experience.js
import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <div className="experience-page container">
      <h1>Work Experience</h1>

      {/* Job 1 */}
      <div className="job-item">
        <h2>In-Bound Customer Service Representative</h2>
        <p>IO Solutions, Fredericton, NB | May 2023 – Present</p>
        <ul>
          <li>Handle daily 30+ interactions, delivering technical solutions...</li>
          <li>Expert support for 50+ products...</li>
          <li>Coordinated communication between multiple providers...</li>
          <li>Consistently achieved highest sales records...</li>
        </ul>
      </div>

      {/* Job 2 */}
      <div className="job-item">
        <h2>Web and Creative Content Designer</h2>
        <p>ROBOFLIGHT, Fredericton, NB | Dec 2023 – Sep 2024</p>
        <ul>
          <li>Created & implemented a fully functional website...</li>
          <li>Conducted keyword research, improved SEO...</li>
          <li>Designed logos, banners, digital assets...</li>
        </ul>
      </div>

      {/* Job 3 */}
      <div className="job-item">
        <h2>Security Officer</h2>
        <p>Securitas, Fredericton, NB | Apr 2023 – Present</p>
        <ul>
          <li>Managed access control, surveillance, incident response...</li>
          <li>Maintained detailed logs, ensuring efficient reporting...</li>
          <li>Conducted inspections, enforced security protocols...</li>
        </ul>
      </div>
    </div>
  );
}

export default Experience;
