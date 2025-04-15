import React from 'react';
import styled from 'styled-components';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 5rem 2rem;
  background-color: #121212;
  text-align: center;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.7);
  animation: fadeIn 1.5s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #00df9a;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
`;

const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #ccc;
  font-size: 1.2rem;
  text-decoration: none;
  transition: color 0.3s, transform 0.3s;

  &:hover {
    color: #00df9a;
    transform: scale(1.05);
  }
`;

function Contact() {
  return (
    <ContactSection id='contato'>
      <Heading>Onde me encontrar</Heading>
      <SocialLinks>
        <SocialLink
          href="https://www.linkedin.com/in/gabriel-vasquez-queiroz-da-silva-634b47277/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={24} />
          Linkedin
        </SocialLink>

        <SocialLink
          href="https://github.com/gvqsilva"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={24} />
          GitHub
        </SocialLink>
      </SocialLinks>
    </ContactSection>
  );
}

export default Contact;
