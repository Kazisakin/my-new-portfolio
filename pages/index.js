// pages/index.js
import Head from "next/head";
import { useEffect, useRef, useState } from "react";
import Navbar from "../src/components/Navbar";
import Sidebar from "../src/components/Sidebar";
import ParticlesBackground from "../src/components/ParticlesBackground";
import Hero from "../src/sections/Hero";
import About from "../src/sections/About";
import Experience from "../src/sections/Experience";
import Skills from "../src/sections/Skills";
import Projects from "../src/sections/Projects";
import Blog from "../src/sections/Blog";
import Contact from "../src/sections/Contact";

export default function Home({ toggleTheme }) {
  const scrollContainerRef = useRef(null);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Variables for mouse drag momentum
    let isMouseDown = false;
    let startX = 0;
    let scrollLeftStart = 0;
    let lastMouseX = 0;
    let lastTime = 0;
    let velocity = 0;
    let momentumId;

    // Mouse event handlers for desktop dragging
    const onMouseDown = (e) => {
      isMouseDown = true;
      container.classList.add("dragging");
      startX = e.pageX - container.offsetLeft;
      scrollLeftStart = container.scrollLeft;
      lastMouseX = e.pageX;
      lastTime = Date.now();
      velocity = 0;
      if (momentumId) {
        cancelAnimationFrame(momentumId);
      }
    };

    const onMouseMove = (e) => {
      if (!isMouseDown) return;
      e.preventDefault();
      const x = e.pageX - container.offsetLeft;
      const walk = (x - startX) * 3; // Adjust the multiplier for scroll speed
      container.scrollLeft = scrollLeftStart - walk;
      
      // Compute velocity (pixels per ms)
      const currentTime = Date.now();
      const dt = currentTime - lastTime;
      if (dt > 0) {
        const dx = e.pageX - lastMouseX;
        velocity = dx / dt;
        lastMouseX = e.pageX;
        lastTime = currentTime;
      }
    };

    const onMouseUp = () => {
      isMouseDown = false;
      container.classList.remove("dragging");
      // Start momentum scrolling with the current velocity
      momentumScroll(velocity);
    };

    const onMouseLeave = () => {
      if (isMouseDown) {
        isMouseDown = false;
        container.classList.remove("dragging");
        momentumScroll(velocity);
      }
    };

    // Apply momentum scrolling after mouse release
    const momentumScroll = (initialVelocity) => {
      let v = initialVelocity;
      const decay = 0.95; // Deceleration factor per frame
      const frame = () => {
        if (Math.abs(v) < 0.1) return; // Stop when velocity is low
        container.scrollLeft -= v * 20; // Multiply v for desired momentum effect
        v *= decay;
        momentumId = requestAnimationFrame(frame);
      };
      frame();
    };

    // Touch event handlers for mobile
    let isTouching = false;
    let touchStartX = 0;
    let touchScrollLeft = 0;
    const onTouchStart = (e) => {
      isTouching = true;
      touchStartX = e.touches[0].pageX - container.offsetLeft;
      touchScrollLeft = container.scrollLeft;
    };

    const onTouchMove = (e) => {
      if (!isTouching) return;
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - touchStartX) * 3;
      container.scrollLeft = touchScrollLeft - walk;
    };

    const onTouchEnd = () => {
      isTouching = false;
    };

    // Wheel event: Convert vertical scroll to horizontal scrolling
    const onWheel = (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    };

    // Active section update based on scroll position
    const onScroll = () => {
      const index = Math.round(container.scrollLeft / container.clientWidth);
      setActiveSection(index);
    };

    // Attach event listeners
    container.addEventListener("mousedown", onMouseDown);
    container.addEventListener("mousemove", onMouseMove);
    container.addEventListener("mouseup", onMouseUp);
    container.addEventListener("mouseleave", onMouseLeave);
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchmove", onTouchMove, { passive: false });
    container.addEventListener("touchend", onTouchEnd);
    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("scroll", onScroll);

    // Cleanup
    return () => {
      container.removeEventListener("mousedown", onMouseDown);
      container.removeEventListener("mousemove", onMouseMove);
      container.removeEventListener("mouseup", onMouseUp);
      container.removeEventListener("mouseleave", onMouseLeave);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchmove", onTouchMove);
      container.removeEventListener("touchend", onTouchEnd);
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <>
      <Head>
        <title>My Full-Stack Developer Portfolio</title>
        <meta
          name="description"
          content="Portfolio of a Full-Stack Developer and Software Engineer"
        />
      </Head>

      {/* Particle Background */}
      <ParticlesBackground />

      {/* Fixed Navigation and Sidebar */}
      <Navbar activeSection={activeSection} />
      <Sidebar />

      {/* Horizontal Scroll Container */}
      <div className="horizontal-scroll-container" ref={scrollContainerRef}>
        <section id="section-0" className="section">
          <Hero toggleTheme={toggleTheme} />
        </section>
        <section id="section-1" className="section">
          <About />
        </section>
        <section id="section-2" className="section">
          <Experience />
        </section>
        <section id="section-3" className="section">
          <Skills />
        </section>
        <section id="section-4" className="section">
          <Projects />
        </section>
        <section id="section-5" className="section">
          <Blog />
        </section>
        <section id="section-6" className="section">
          <Contact />
        </section>
      </div>

      <style jsx>{`
        .horizontal-scroll-container {
          display: flex;
          flex-direction: row;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          height: 100vh;
          width: 100vw;
          position: relative;
          z-index: 1;
          cursor: grab;
          /* Enable smooth scrolling behavior */
          scroll-behavior: smooth;
        }
        .horizontal-scroll-container.dragging {
          cursor: grabbing;
        }
        .section {
          flex: none;
          width: 100vw;
          height: 100vh;
          scroll-snap-align: start;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 2rem;
          /* Optional fade-in animation for visual appeal */
          opacity: 0;
          animation: fadeIn 1s forwards;
        }
        /* Stagger animation delays for each section */
        #section-0 { animation-delay: 0.2s; }
        #section-1 { animation-delay: 0.4s; }
        #section-2 { animation-delay: 0.6s; }
        #section-3 { animation-delay: 0.8s; }
        #section-4 { animation-delay: 1s; }
        #section-5 { animation-delay: 1.2s; }
        #section-6 { animation-delay: 1.4s; }
        @keyframes fadeIn {
          to {
            opacity: 1;
          }
        }
      `}</style>
    </>
  );
}
