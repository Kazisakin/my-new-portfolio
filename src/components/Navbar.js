// src/components/Navbar.js
import Link from "next/link";
import React from "react";

const Navbar = ({ activeSection = null }) => {
  return (
    <>
      <nav className="navbar">
        <Link href="#section-0" className={`nav-link ${activeSection === 0 ? "active" : ""}`}>
          Home
        </Link>
        <Link href="#section-1" className={`nav-link ${activeSection === 1 ? "active" : ""}`}>
          About
        </Link>
        <Link href="#section-2" className={`nav-link ${activeSection === 2 ? "active" : ""}`}>
          Experience
        </Link>
        <Link href="#section-3" className={`nav-link ${activeSection === 3 ? "active" : ""}`}>
          Skills
        </Link>
        <Link href="#section-4" className={`nav-link ${activeSection === 4 ? "active" : ""}`}>
          Projects
        </Link>
        <Link href="#section-5" className={`nav-link ${activeSection === 5 ? "active" : ""}`}>
          Blog
        </Link>
        <Link href="#section-6" className={`nav-link ${activeSection === 6 ? "active" : ""}`}>
          Contact
        </Link>
      </nav>
      <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          background: rgba(255, 255, 255, 0.95);
          padding: 1rem 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 2rem;
          z-index: 1000;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          flex-wrap: wrap;
        }
        .nav-link {
          color: #333;
          text-decoration: none;
          font-size: 1rem;
          font-weight: 500;
          position: relative;
          padding: 0.25rem 0;
          transition: all 0.3s ease;
        }
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -3px;
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg, #6a11cb, #2575fc);
          transition: width 0.3s ease;
        }
        .nav-link:hover::after,
        .nav-link:focus::after {
          width: 100%;
        }
        .nav-link:hover {
          color: #6a11cb;
        }
        .nav-link.active {
          color: #6a11cb;
          font-weight: 600;
          transform: translateY(-2px);
        }
        .nav-link.active::after {
          width: 100%;
          background: linear-gradient(90deg, #6a11cb, #2575fc);
        }
        @media (max-width: 768px) {
          .navbar {
            gap: 1rem;
            padding: 0.75rem 1rem;
          }
          .nav-link {
            font-size: 0.9rem;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;