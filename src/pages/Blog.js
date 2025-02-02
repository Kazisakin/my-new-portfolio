import React from 'react';
import './PageStyles.css';

function Blog() {
  return (
    <div className="container page">
      <h1>My Blog</h1>
      <article className="blog-post">
        <h2>Latest Trends in Web Dev</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
      </article>
      <article className="blog-post">
        <h2>Why React Rocks</h2>
        <p>React makes it painless to create interactive UIs by managing state...</p>
      </article>
      <article className="blog-post">
        <h2>Boosting Performance with Code Splitting</h2>
        <p>Code splitting helps reduce bundle size and improves page load times...</p>
      </article>
    </div>
  );
}

export default Blog;
