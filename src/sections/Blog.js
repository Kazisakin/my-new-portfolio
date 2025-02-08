// src/sections/Blog.js
import React from "react";

const Blog = () => {
  return (
    <div className="blog container">
      <h2>Latest Articles</h2>
      <p className="blog-description">
        Learn and Read all about Digital and Technology from tech-trusted guides
      </p>
      <div className="blog-filters">
        <button className="filter-button">All</button>
        <button className="filter-button">Design</button>
        <button className="filter-button">Tech</button>
        <button className="filter-button">Ai</button>
        <button className="filter-button">Most Liked</button>
      </div>
      <div className="blog-grid">
        {/* Blog Article 1 */}
        <article className="blog-card">
          <div className="blog-image-wrapper">
            <img
              src="/images/Untitled-1-01.png"
              alt="Blog Article 1"
              className="blog-image"
            />
          </div>
          <div className="blog-info">
            <span className="blog-date">11/1/2024</span>
            <h3>Data Analytics: Key to Decisions and Business Growth</h3>
            <p>
              Data is the new currency of the digital age. Data insights hold
              the key to unlocking new business opportunities and enhancing
              operational efficiency.
            </p>
            <div className="social-info">
              <span>10K</span>
              <button className="read-btn">Read Article →</button>
            </div>
          </div>
        </article>

        {/* Blog Article 2 */}
        <article className="blog-card">
          <div className="blog-image-wrapper">
            <img
              src="/assets/images/blog2.jpg"
              alt="Blog Article 2"
              className="blog-image"
            />
          </div>
          <div className="blog-info">
            <span className="blog-date">11/1/2024</span>
            <h3>The Rise of Personalization in Technology</h3>
            <p>
              Technology adapts to our individual needs and preferences.
              Explore how artificial intelligence enables this transformation.
            </p>
            <div className="social-info">
              <span>10K</span>
              <button className="read-btn">Read Article →</button>
            </div>
          </div>
        </article>

        {/* Blog Article 3 */}
        <article className="blog-card">
          <div className="blog-image-wrapper">
            <img
              src="/assets/images/blog3.jpg"
              alt="Blog Article 3"
              className="blog-image"
            />
          </div>
          <div className="blog-info">
            <span className="blog-date">11/1/2024</span>
            <h3>Turning Data into Insights</h3>
            <p>
              Learn how to collect, clean, and organize data, and then use
              advanced analytics techniques to extract valuable insights.
            </p>
            <div className="social-info">
              <span>10K</span>
              <button className="read-btn">Read Article →</button>
            </div>
          </div>
        </article>
      </div>

      <style jsx>{`
        .blog {
          text-align: center;
          padding: 4rem 0;
          background-color: #fafafa; /* Light background for minimal design */
        }

        .blog h2 {
          font-family: "Roboto", sans-serif;
          color: #333; /* Dark text for the title */
          font-size: 2.5rem;
          margin-bottom: 1rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 1px;
        }

        .blog-description {
          font-size: 1.2rem;
          margin-bottom: 2rem;
          color: #666; /* Subtle gray text */
          max-width: 800px;
          margin: 0 auto;
        }

        .blog-filters {
          display: flex;
          justify-content: center;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .filter-button {
          background: #f0f0f0;
          border: 1px solid #ccc;
          padding: 0.5rem 1rem;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .filter-button:hover {
          background: #0070f3;
          color: #fff;
          border-color: #0070f3;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-top: 2rem;
        }

        @media (max-width: 768px) {
          .blog-grid {
            grid-template-columns: 1fr; /* Single column for mobile */
          }
        }

        .blog-card {
          background: #fff;
          box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          cursor: pointer;
          border: 1px solid #f0f0f0;
        }

        .blog-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
        }

        .blog-image-wrapper {
          position: relative;
          width: 100%;
          height: 200px;
          overflow: hidden;
          border-radius: 8px;
          margin-bottom: 1rem;
        }

        .blog-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .blog-card:hover .blog-image {
          transform: scale(1.05); /* Subtle zoom effect */
        }

        .blog-info {
          padding: 1.5rem;
          text-align: left;
          color: #333; /* Dark text for content */
        }

        .blog-date {
          font-size: 0.9rem;
          color: #aaa; /* Light gray for the date */
        }

        .blog-info h3 {
          font-family: "Roboto", sans-serif;
          font-size: 1.4rem;
          margin: 1rem 0;
          color: #333;
          font-weight: 700;
        }

        .blog-info p {
          font-size: 1rem;
          color: #555; /* Slightly lighter gray */
          line-height: 1.6;
          margin-bottom: 1rem;
        }

        .social-info {
          margin-top: 1.5rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .social-info span {
          font-size: 1.1rem;
          font-weight: bold;
          color: #0070f3; /* Accent color for like count */
        }

        .read-btn {
          background: #0070f3;
          color: white;
          border: none;
          padding: 0.6rem 1.2rem;
          border-radius: 30px;
          font-size: 1rem;
          cursor: pointer;
          transition: background 0.3s ease;
        }

        .read-btn:hover {
          background: #005bb5;
        }
      `}</style>
    </div>
  );
};

export default Blog;
