import React, { useState } from "react";
import { FaBars, FaTimes, FaHome, FaUserAlt, FaBriefcase, FaCogs, FaProjectDiagram, FaBlog, FaEnvelope } from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="sidebar-toggle" onClick={toggleSidebar}>
        {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <Link href="#section-0" onClick={toggleSidebar}>
          <FaHome /> <span>Home</span>
        </Link>
        <Link href="#section-1" onClick={toggleSidebar}>
          <FaUserAlt /> <span>About</span>
        </Link>
        <Link href="#section-2" onClick={toggleSidebar}>
          <FaBriefcase /> <span>Experience</span>
        </Link>
        <Link href="#section-3" onClick={toggleSidebar}>
          <FaCogs /> <span>Skills</span>
        </Link>
        <Link href="#section-4" onClick={toggleSidebar}>
          <FaProjectDiagram /> <span>Projects</span>
        </Link>
        <Link href="#section-5" onClick={toggleSidebar}>
          <FaBlog /> <span>Blog</span>
        </Link>
        <Link href="#section-6" onClick={toggleSidebar}>
          <FaEnvelope /> <span>Contact</span>
        </Link>
      </div>
      <style jsx>{`
        .sidebar-toggle {
          position: fixed;
          top: 1rem;
          right: 1rem;
          z-index: 1100;
          color: #fff;
          cursor: pointer;
          display: none;
        }
        .sidebar {
          position: fixed;
          top: 0;
          right: -250px;
          width: 250px;
          height: 100vh;
          background: rgba(51, 51, 51, 0.95);
          padding: 2rem 1rem;
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          transition: right 0.3s ease;
          z-index: 1050;
        }
        .sidebar.open {
          right: 0;
        }
        .sidebar a {
          color: #fff;
          text-decoration: none;
          font-size: 1rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        @media (max-width: 768px) {
          .sidebar-toggle {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default Sidebar;