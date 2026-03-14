import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import {
  FaGithub,
  FaGlobe,
  FaArrowLeft,
  FaPython,
  FaReact,
  FaCss3Alt,
  FaJs,
  FaHtml5,
  FaMicrochip,
  FaCloud,
  FaCode,
} from 'react-icons/fa';
import { SiPostman, SiNetlify, SiDocker, SiTypescript, SiFirebase, SiTailwindcss } from 'react-icons/si';
import { carouselItems } from '../data/projects';
import GlobalStyle from '../styles/GlobalStyle';

const techIcons = {
  ESP32: FaMicrochip,
  FIWARE: FaCloud,
  Azure: FaCloud,
  Python: FaPython,
  'C++': FaCode,
  Docker: SiDocker,
  Postman: SiPostman,
  React: FaReact,
  'React Native': FaReact,
  TypeScript: SiTypescript,
  Firebase: SiFirebase,
  JavaScript: FaJs,
  CSS: FaCss3Alt,
  HTML: FaHtml5,
  Tailwind: SiTailwindcss,
  Netlify: SiNetlify,
};

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(24px); }
  to   { opacity: 1; transform: translateY(0); }
`;

const Wrap = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

const Hero = styled.div`
  position: relative;
  width: 100%;
  height: clamp(260px, 40vh, 480px);
  overflow: hidden;
`;

const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
`;

const HeroOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(10,10,10,0.88) 100%);
`;

const BackBtn = styled.button`
  position: absolute;
  top: 1.4rem;
  left: 1.6rem;
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.55rem 1rem;
  border-radius: 999px;
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(0, 0, 0, 0.48);
  color: var(--text);
  font-size: 0.82rem;
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(8px);
  transition: background 0.2s, border-color 0.2s, color 0.2s;
  z-index: 2;

  &:hover {
    background: rgba(0, 223, 154, 0.18);
    border-color: rgba(0, 223, 154, 0.6);
    color: var(--accent);
  }
`;

const HeroTitle = styled.h1`
  position: absolute;
  bottom: 1.8rem;
  left: 50%;
  transform: translateX(-50%);
  width: min(860px, 90vw);
  font-size: clamp(1.9rem, 5vw, 3.2rem);
  line-height: 1.05;
  color: var(--text);
  text-align: left;
`;

const Content = styled.main`
  flex: 1;
  width: min(860px, 92vw);
  margin: 0 auto;
  padding: 2.8rem 0 4rem;
  display: grid;
  gap: 2.2rem;
  animation: ${fadeIn} 0.5s cubic-bezier(0.23, 1, 0.32, 1);
`;

const Label = styled.p`
  display: inline-flex;
  align-items: center;
  width: fit-content;
  color: var(--accent);
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.72rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  border: 1px solid rgba(0, 223, 154, 0.3);
  border-radius: 999px;
  padding: 0.3rem 0.65rem;
  background: rgba(0, 223, 154, 0.07);
`;

const Desc = styled.p`
  font-size: 1.08rem;
  line-height: 1.78;
  color: #d4dae8;
  max-width: 68ch;
`;

const SectionTitle = styled.h2`
  font-size: 1rem;
  font-family: 'IBM Plex Mono', monospace;
  color: var(--accent);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.9rem;
`;

const DetailsList = styled.ul`
  list-style: none;
  display: grid;
  gap: 0.7rem;
`;

const DetailsItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 0.75rem;
  font-size: 0.98rem;
  line-height: 1.65;
  color: #c6ccd8;
  padding: 0.8rem 1rem;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.025);
  border: 1px solid rgba(255, 255, 255, 0.07);

  &::before {
    content: '';
    flex-shrink: 0;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 10px rgba(0, 223, 154, 0.55);
    margin-top: 0.48rem;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
`;

const TechTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.38rem 0.72rem;
  border-radius: 999px;
  border: 1px solid rgba(0, 223, 154, 0.32);
  background: rgba(0, 223, 154, 0.07);
  color: var(--text);
  font-size: 0.78rem;
  font-family: 'IBM Plex Mono', monospace;

  svg {
    color: var(--accent);
    font-size: 0.9rem;
  }
`;

const Footer = styled.footer`
  display: flex;
  gap: 0.8rem;
  flex-wrap: wrap;
`;

const LinkBtn = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.75rem 1.4rem;
  border-radius: 12px;
  border: 1px solid rgba(0, 223, 154, 0.3);
  background: rgba(0, 223, 154, 0.08);
  color: var(--accent);
  font-size: 0.88rem;
  font-weight: 600;
  font-family: 'IBM Plex Mono', monospace;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: rgba(0, 223, 154, 0.18);
    border-color: rgba(0, 223, 154, 0.65);
    transform: translateY(-2px);
  }
`;

function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = carouselItems.find((p) => p.slug === slug);

  if (!project) {
    return (
      <>
        <GlobalStyle />
        <Wrap style={{ alignItems: 'center', justifyContent: 'center' }}>
          <p style={{ color: 'var(--muted)', fontFamily: 'IBM Plex Mono' }}>Projeto não encontrado.</p>
          <button type="button" onClick={() => navigate('/')} style={{ marginTop: '1rem', color: 'var(--accent)', background: 'none', border: 'none', cursor: 'pointer', fontFamily: 'IBM Plex Mono' }}>
            ← Voltar
          </button>
        </Wrap>
      </>
    );
  }

  return (
    <>
      <GlobalStyle />
      <Wrap>
        <Hero>
          <HeroImg src={project.image} alt={project.title} />
          <HeroOverlay />
          <BackBtn type="button" onClick={() => navigate(-1)}>
            <FaArrowLeft /> Voltar
          </BackBtn>
          <HeroTitle>{project.title}</HeroTitle>
        </Hero>

        <Content>
          <Label>Detalhes do Projeto</Label>

          <Desc>{project.detailDesc || project.desc}</Desc>

          {Array.isArray(project.details) && project.details.length > 0 && (
            <div>
              <SectionTitle>O que foi desenvolvido</SectionTitle>
              <DetailsList>
                {project.details.map((d) => (
                  <DetailsItem key={d}>{d}</DetailsItem>
                ))}
              </DetailsList>
            </div>
          )}

          {Array.isArray(project.tech) && project.tech.length > 0 && (
            <div>
              <SectionTitle>Tecnologias utilizadas</SectionTitle>
              <TechList>
                {project.tech.map((item) => (
                  <TechTag key={item}>
                    {techIcons[item] ? React.createElement(techIcons[item]) : null}
                    <span>{item}</span>
                  </TechTag>
                ))}
              </TechList>
            </div>
          )}

          <Footer>
            <LinkBtn href={project.href} target="_blank" rel="noopener noreferrer">
              {project.type === 'github' ? <FaGithub /> : <FaGlobe />}
              {project.type === 'github' ? 'Ver no GitHub' : 'Abrir site'}
            </LinkBtn>
          </Footer>
        </Content>
      </Wrap>
    </>
  );
}

export default ProjectDetail;
