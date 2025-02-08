// src/sections/Projects.js
import React from 'react';

const projectsData = [
  {
    title: 'E-Commerce Platform',
    description:
      'A scalable platform with real-time inventory management, secure payments, and a focus on performance and UX.',
    image: '/images/ecommerce.png',
    link: '#',
  },
  {
    title: 'Social Network',
    description:
      'A modern application featuring real-time chat, interactive feeds, and robust user profiles.',
    image: '/images/socialnetwork.png',
    link: '#',
  },
  {
    title: 'AI Chatbot',
    description:
      'A GPT-powered chatbot that integrates NLP capabilities, conversation history, and context-aware responses.',
    image: '/images/aichatbot.png',
    link: '#',
  },
  {
    title: 'Project Management Tool',
    description:
      'An all-in-one solution with kanban boards, Gantt charts, and collaborative features for teams.',
    image: '/images/projectmanagement.png',
    link: '#',
  },
  {
    title: 'Personal Blog Platform',
    description:
      'A sleek blog engine with SEO-friendly architecture, markdown support, and custom theming.',
    image: '/images/blogplatform.png',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description:
      'A personal portfolio built with modern web technologies, featuring smooth animations and a responsive layout.',
    image: '/images/portfolio.png',
    link: '#',
  },
];

const Projects = () => {
  return (
    <section className="projects-section">
      <h2 className="projects-title">Projects</h2>
      <p className="projects-description">
        Explore a selection of real-world projects that emphasize creativity, technical proficiency, and strong UX:
      </p>

      <div className="projects-container">
        {projectsData.map((project, idx) => (
          <div className="project-card" key={idx}>
            <div className="project-image-wrapper">
              <img
                src={project.image}
                alt={project.title}
                className="project-image"
              />
            </div>
            <h3 className="project-card-title">{project.title}</h3>
            <p className="project-card-description">{project.description}</p>
            <a
              href={project.link}
              className="project-card-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        ))}
      </div>

      <style jsx>{`
        .projects-section {
          padding: 4rem 2rem;
          background-color: #121212;
          color: #fff;
          text-align: center;
        }

        .projects-title {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: bold;
          text-transform: uppercase;
        }

        .projects-description {
          max-width: 700px;
          margin: 0 auto 2rem auto;
          font-size: 1.2rem;
          line-height: 1.6;
          color: #bbb;
        }

        /* Flexible Responsive Grid */
        .projects-container {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 1.5rem;
          justify-content: center;
          align-items: stretch;
        }

        /* Project Card */
        .project-card {
          background: #1e1e1e;
          border-radius: 12px;
          padding: 1.5rem;
          text-align: left;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          box-shadow: 0 4px 15px rgba(255, 255, 255, 0.05);
          cursor: pointer;
        }

        .project-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 10px 25px rgba(255, 255, 255, 0.1);
        }

        /* Image Styling */
        .project-image-wrapper {
          width: 100%;
          height: 180px;
          overflow: hidden;
          border-radius: 8px;
          margin-bottom: 1rem;
        }

        .project-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .project-card:hover .project-image {
          transform: scale(1.05);
        }

        /* Text Content */
        .project-card-title {
          font-size: 1.4rem;
          margin-bottom: 0.5rem;
          font-weight: bold;
          color: #fff;
        }

        .project-card-description {
          font-size: 1rem;
          color: #aaa;
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .project-card-link {
          text-align: center;
          background: #0070f3;
          color: white;
          padding: 0.7rem 1.2rem;
          border-radius: 6px;
          text-decoration: none;
          display: inline-block;
          font-weight: bold;
          transition: background 0.3s ease;
        }

        .project-card-link:hover {
          background: #005bb5;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .projects-container {
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          }
        }

        @media (max-width: 768px) {
          .projects-section {
            padding: 2.5rem 1.5rem;
          }

          .projects-title {
            font-size: 2rem;
          }

          .projects-description {
            font-size: 1rem;
          }

          .projects-container {
            grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
            gap: 1rem;
          }
        }

        @media (max-width: 480px) {
          .projects-title {
            font-size: 1.8rem;
          }

          .projects-description {
            font-size: 0.9rem;
          }

          .projects-container {
            grid-template-columns: 1fr;
          }

          .project-card {
            width: 100%;
          }

          .project-card-title {
            font-size: 1.2rem;
          }

          .project-card-description {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Projects;
