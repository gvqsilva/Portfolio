import React from 'react';
import styled from 'styled-components';
import { FaExternalLinkAlt } from 'react-icons/fa';

const ContactSection = styled.section`
  padding: 2.4rem 0 3.2rem;
`;

const Wrapper = styled.div`
  display: grid;
  gap: 1.45rem;
`;

const Heading = styled.h2`
  font-size: clamp(2.05rem, 4.5vw, 3.25rem);
  line-height: 0.95;
  letter-spacing: -0.015em;
  text-transform: uppercase;
  color: rgba(226, 235, 248, 0.9);
`;

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: rgba(157, 175, 204, 0.55);
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: clamp(1rem, 3.2vw, 2.3rem);
  align-items: start;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
    gap: 1.2rem;
  }
`;

const Group = styled.div`
  display: grid;
  grid-template-columns: 128px 1fr;
  align-items: start;
  gap: 0.9rem;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 0.45rem;
  }
`;

const GroupTitle = styled.h3`
  font-family: 'IBM Plex Mono', monospace;
  font-size: 1rem;
  letter-spacing: 0.02em;
  text-transform: uppercase;
  color: rgba(188, 201, 225, 0.9);
  line-height: 1.4;
`;

const GroupContent = styled.div`
  display: grid;
  gap: 0.55rem;
`;

const LinkItem = styled.a`
  width: fit-content;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  color: rgba(220, 231, 249, 0.92);
  font-size: clamp(1.05rem, 1.9vw, 1.42rem);
  letter-spacing: 0.01em;
  transition: color 0.2s ease, transform 0.2s ease;

  svg {
    font-size: 0.7em;
    opacity: 0.85;
  }

  &:hover {
    color: var(--accent);
    transform: translateX(4px);
  }
`;

const SubText = styled.p`
  max-width: 58ch;
  margin-top: 0.35rem;
  font-size: 0.93rem;
  color: rgba(184, 197, 219, 0.88);
  line-height: 1.65;

  @media (max-width: 820px) {
    margin-top: 0.1rem;
  }
`;

function Contact() {
  return (
    <ContactSection id='contato'>
      <Wrapper>
        <Heading>Contato</Heading>
        <Divider />

        <Grid>
          <SubText>
            Aberto para novas oportunidades e colaborações em projetos de desenvolvimento web, cloud e dados.
          </SubText>

          <Group>
            <GroupTitle>Redes sociais</GroupTitle>
            <GroupContent>
              <LinkItem
                href="https://www.linkedin.com/in/gabriel-vasquez-queiroz-da-silva-634b47277/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt />
                LinkedIn
              </LinkItem>
              <LinkItem
                href="https://github.com/gvqsilva"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaExternalLinkAlt />
                GitHub
              </LinkItem>
            </GroupContent>
          </Group>
        </Grid>
      </Wrapper>
    </ContactSection>
  );
}

export default Contact;
