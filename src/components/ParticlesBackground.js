import React from 'react';
import Particles from "react-tsparticles";
import { useTheme } from "styled-components";

const ParticlesBackground = () => {
  const theme = useTheme();

  return (
    <Particles
      options={{
        fullScreen: { enable: true },
        // Use the theme's background color instead of a hardcoded value
        background: { color: { value: theme.body } },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            resize: true,
          },
          modes: { repulse: { distance: 100, duration: 0.4 } },
        },
        particles: {
          // Use the theme's link color for particles and their connections
          color: { value: theme.link },
          links: { enable: true, color: theme.link, distance: 150 },
          collisions: { enable: true },
          move: {
            enable: true,
            speed: 1,
            outModes: { default: "bounce" },
          },
          number: { density: { enable: true, area: 800 }, value: 50 },
          opacity: { value: 0.5 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 5 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
