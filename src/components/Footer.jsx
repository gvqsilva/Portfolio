import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  width: min(1140px, 92vw);
  margin: 1rem auto 2rem;
  padding: 1.1rem;
  border: 1px solid rgba(0, 223, 154, 0.25);
  border-radius: 14px;
  background: rgba(0, 0, 0, 0.25);
  text-align: center;
  color: #8f8f8f;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.8rem;
  letter-spacing: 0.04em;
`;

function Footer() {
  return <FooterContainer>© 2026 Gabriel Vasquez. Portfolio pessoal.</FooterContainer>;
}

export default Footer;