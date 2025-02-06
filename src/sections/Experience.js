// src/sections/Experience.js
import React from "react";
import styled from "styled-components";

const ExperienceContainer = styled.div`
  color: ${({ theme }) => theme.text};
  padding: 1rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.accent};
  margin: 1.5rem 0 1rem;
  text-align: center;
`;

const ExperienceSection = styled.div`
  margin-bottom: 2rem;
`;

const ExperienceItem = styled.div`
  margin-bottom: 1.5rem;
`;

const Position = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 0.2rem;
`;

const Company = styled.p`
  font-size: 1rem;
  font-weight: bold;
  margin-bottom: 0.2rem;
`;

const Duration = styled.p`
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
`;

const DescriptionList = styled.ul`
  list-style: disc;
  margin-left: 1.5rem;
  font-size: 0.9rem;
  line-height: 1.5;
`;

export default function Experience() {
  return (
    <ExperienceContainer>
      {/* Work Experience */}
      <SectionTitle>Work Experience</SectionTitle>
      <ExperienceSection>
        <ExperienceItem>
          <Position>In-Bound Customer Service Representative</Position>
          <Company>IO Solutions, Fredericton, New Brunswick</Company>
          <Duration>May 2023 – Present</Duration>
          <DescriptionList>
            <li>Handled 30+ daily interactions, delivering technical solutions and personalized support.</li>
            <li>Provided expert support for 50+ products and resolved complex inquiries.</li>
            <li>Troubleshot applications, resolved network issues, and assisted with Wi‑Fi/TV setups.</li>
            <li>Coordinated with Fido, Rogers, Cityfone, and Shaw to reduce downtime by 4 hours.</li>
            <li>Achieved top sales records and earned consecutive performance awards.</li>
          </DescriptionList>
        </ExperienceItem>
        <ExperienceItem>
          <Position>Web and Creative Content Designer</Position>
          <Company>ROBOFLIGHT, Fredericton, New Brunswick</Company>
          <Duration>December 2023 – September 2024</Duration>
          <DescriptionList>
            <li>Created and implemented a fully functional, visually optimized website, increasing online traffic by 200%.</li>
            <li>Conducted keyword research and enhanced content using advanced SEO strategies.</li>
            <li>Designed logos, banners, and digital assets to establish a cohesive brand identity.</li>
            <li>Developed reusable component libraries for course materials, streamlining production of 25+ marketing assets.</li>
          </DescriptionList>
        </ExperienceItem>
        <ExperienceItem>
          <Position>Security Officer</Position>
          <Company>Securitas, Fredericton, New Brunswick</Company>
          <Duration>April 2023 – Present</Duration>
          <DescriptionList>
            <li>Managed access control, surveillance, and incident response using Siemens' SiPass system.</li>
            <li>Conducted routine inspections and logged incidents to ensure operational continuity.</li>
            <li>Enforced security protocols and coordinated with visitors and staff to mitigate risks.</li>
          </DescriptionList>
        </ExperienceItem>
      </ExperienceSection>

      {/* School Experience */}
      <SectionTitle>School Experience</SectionTitle>
      <ExperienceSection>
        <ExperienceItem>
          <Position>Introduction to Computer Programming II (in Java)</Position>
          <Company>University of New Brunswick, Fredericton</Company>
          <Duration>May 2024 – September 2024</Duration>
          <DescriptionList>
            <li>Enhanced Java fundamentals including OOP, generics, and exception handling.</li>
            <li>Developed interactive GUIs using JavaFX with an event‑driven MVC architecture.</li>
            <li>Improved debugging and version control skills using IntelliJ.</li>
          </DescriptionList>
        </ExperienceItem>
      </ExperienceSection>

      {/* Certifications & Awards */}
      <SectionTitle>Certifications & Awards</SectionTitle>
      <ExperienceSection>
        <ExperienceItem>
          <Position>R Programming Boot Camp</Position>
          <Company>Bangladesh University of Professional Economics Club</Company>
          <Duration>2022</Duration>
          <DescriptionList>
            <li>Gained proficiency in R for data cleaning, statistical analysis, and visualization.</li>
          </DescriptionList>
        </ExperienceItem>
        <ExperienceItem>
          <Position>Talent Hunt - Graphic Design</Position>
          <Company>Adamjee Cantonment College</Company>
          <Duration>2020</Duration>
          <DescriptionList>
            <li>Secured first place in Graphic Design, demonstrating exceptional creativity.</li>
          </DescriptionList>
        </ExperienceItem>
        <ExperienceItem>
          <Position>Advanced WordPress Development</Position>
          <Company>SoftTech-IT</Company>
          <Duration>2018</Duration>
          <DescriptionList>
            <li>Acquired comprehensive skills in web development, including HTML, CSS, JavaScript, PHP, and theme customization.</li>
          </DescriptionList>
        </ExperienceItem>
      </ExperienceSection>

      {/* Co‑Curricular Activities */}
      <SectionTitle>Co‑Curricular Activities</SectionTitle>
      <ExperienceSection>
        <ExperienceItem>
          <Position>Webmaster</Position>
          <Company>Bangladesh Student Society, UNB</Company>
          <Duration>September 2023 – October 2024</Duration>
          <DescriptionList>
            <li>Launched the first WordPress website, improving digital presence and accessibility.</li>
            <li>Streamlined event and member registration processes.</li>
            <li>Managed CMS content and enhanced social media engagement.</li>
          </DescriptionList>
        </ExperienceItem>
        <ExperienceItem>
          <Position>Organizing Lead</Position>
          <Company>Adamjee Cantonment College IT Club</Company>
          <Duration>July 2020 – December 2022</Duration>
          <DescriptionList>
            <li>Organized workshops and seminars, fostering collaborative learning.</li>
            <li>Produced promotional materials boosting event attendance by 200+ students.</li>
            <li>Led a website overhaul to enhance functionality and user experience.</li>
          </DescriptionList>
        </ExperienceItem>
      </ExperienceSection>

      {/* Hobbies */}
      <SectionTitle>Hobbies</SectionTitle>
      <ExperienceSection>
        <ExperienceItem>
          <DescriptionList>
            <li>PC Building</li>
            <li>Cooking</li>
            <li>Travelling</li>
          </DescriptionList>
        </ExperienceItem>
      </ExperienceSection>
    </ExperienceContainer>
  );
}
