import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem;
  background: rgba(10, 25, 47, 0.9);
  color: var(--color-text);
  font-size: 0.9rem;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <p>Built with ❤️ by Your Name</p>
      <p>© 2025 Your Name. All rights reserved.</p>
    </FooterContainer>
  );
}
