// src/sections/Blog.js
import React from "react";
import { FaRegNewspaper } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="blog container">
      <h2>Latest Articles</h2>
      <div className="blog-grid">
        <article className="blog-card">
          <div className="blog-icon">
            <FaRegNewspaper size={32} />
          </div>
          <h3>Optimizing Performance in React Applications</h3>
          <p>
            Explore modern techniques to optimize React performance using code splitting, lazy loading, and memoization.
          </p>
        </article>
        <article className="blog-card">
          <div className="blog-icon">
            <FaRegNewspaper size={32} />
          </div>
          <h3>Full-Stack Trends in 2025</h3>
          <p>
            Discover emerging trends in full-stack development, including microservices and serverless architectures.
          </p>
        </article>
        <article className="blog-card">
          <div className="blog-icon">
            <FaRegNewspaper size={32} />
          </div>
          <h3>Leveraging GraphQL for Efficient APIs</h3>
          <p>
            Learn how GraphQL streamlines data fetching and minimizes over-fetching in modern applications.
          </p>
        </article>
      </div>
      <style jsx>{`
        .blog {
          text-align: center;
        }
        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          margin-top: 2rem;
        }
        .blog-card {
          background: rgba(100, 255, 218, 0.1);
          border: 1px solid var(--accent-color);
          padding: 1.5rem;
          border-radius: 10px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s forwards;
        }
        .blog-card:hover {
          transform: translateY(0);
          box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
        }
        .blog-icon {
          margin-bottom: 1rem;
          color: var(--accent-color);
        }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default Blog;
