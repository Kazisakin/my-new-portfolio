import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

// Styled Components
const BlogSection = styled.section`
  min-height: 100vh;
  padding: 4rem 2rem;
  background: var(--color-bg);
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: var(--color-accent);
  margin-bottom: 2rem;
`;

const BlogGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  width: 100%;
  max-width: 900px;
`;

const BlogCard = styled.div`
  background: #112240;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: translateY(-5px);
  }
`;

const BlogImage = styled(LazyLoadImage)`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
`;

const BlogTitle = styled.h3`
  font-size: 1.2rem;
  color: var(--color-white);
  margin-bottom: 0.5rem;
`;

const BlogExcerpt = styled.p`
  font-size: 0.9rem;
  color: var(--color-text);
  margin-bottom: 0.5rem;
`;

const BlogDate = styled.small`
  color: var(--color-accent);
`;

const ReadMoreButton = styled.a`
  display: inline-block;
  margin-top: 0.5rem;
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  color: var(--color-accent);
  border: 1px solid var(--color-accent);
  border-radius: 5px;
  text-decoration: none;
  transition: background 0.3s ease-in-out;

  &:hover {
    background: var(--color-accent);
    color: var(--color-bg);
  }
`;

// Demo Blog Posts
const demoPosts = [
  {
    id: 1,
    title: "Building a Modern React Portfolio",
    excerpt: "Learn how to create a sleek developer portfolio using React and Styled Components.",
    date: "January 20, 2025",
    image: "/images/blog-placeholder.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Mastering CSS Grid & Flexbox",
    excerpt: "A complete guide to building responsive layouts with CSS Grid and Flexbox.",
    date: "February 10, 2025",
    image: "/images/blog-placeholder.jpg",
    link: "#",
  },
  {
    id: 3,
    title: "10 JavaScript Tricks Every Developer Should Know",
    excerpt: "Improve your JavaScript skills with these powerful tips and tricks.",
    date: "March 5, 2025",
    image: "/images/blog-placeholder.jpg",
    link: "#",
  },
];

// Blog Component
export default function Blog() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Simulating fetching posts from API
  useEffect(() => {
    setTimeout(() => {
      setPosts(demoPosts);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <BlogSection id="blog">
      <Title>Blog</Title>
      {loading && <p>Loading posts...</p>}
      <BlogGrid>
        {posts.map((post) => (
          <BlogCard key={post.id}>
            <BlogImage alt={post.title} src={post.image} effect="blur" />
            <BlogTitle>{post.title}</BlogTitle>
            <BlogExcerpt>{post.excerpt}</BlogExcerpt>
            <BlogDate>{post.date}</BlogDate>
            <ReadMoreButton href={post.link}>Read More</ReadMoreButton>
          </BlogCard>
        ))}
      </BlogGrid>
    </BlogSection>
  );
}
