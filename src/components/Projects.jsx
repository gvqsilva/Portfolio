import React, { useEffect, useRef, useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import {
  FaGithub,
  FaGlobe,
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

const ProjectsSection = styled.section`
  padding: 0;
`;

const IntroCard = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  min-height: 60vh;
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  padding: 2rem 0;
`;

const IntroTitle = styled.h2`
  font-size: clamp(2.9rem, 6vw, 5rem);
  line-height: 0.96;
  max-width: 12ch;
  margin: 0 auto;
`;

const IntroText = styled.p`
  margin: 1.4rem auto 0;
  max-width: 34ch;
  font-size: clamp(1rem, 2vw, 1.22rem);
  line-height: 1.55;

  strong {
    color: #f0ab3d;
    font-weight: 600;
  }
`;

const IntroLink = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  margin-top: 2rem;
  font-size: 1.1rem;
  font-weight: 700;
  color: #b134d6;
  transition: transform 0.25s ease, color 0.25s ease;
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: inherit;

  &:hover {
    transform: translateX(4px);
    color: var(--accent);
  }
`;

const ProjectsGrid = styled.div`
  min-height: calc(100vh * 3.6);
  position: relative;
`;

const StickyFrame = styled.div`
  position: sticky;
  top: 14vh;
  min-height: 68vh;
  display: flex;
  align-items: center;
`;

const CardLink = styled.a`
  text-decoration: none;
  display: block;
  width: 100%;
`;

const slideForward = keyframes`
  from {
    opacity: 0;
    transform: translate3d(20px, 6px, 0) scale(0.994);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
`;

const slideBackward = keyframes`
  from {
    opacity: 0;
    transform: translate3d(-20px, 6px, 0) scale(0.994);
  }
  to {
    opacity: 1;
    transform: translate3d(0, 0, 0) scale(1);
  }
`;

const FadeSwap = styled.div`
  width: 100%;
  animation: ${({ $direction }) => ($direction >= 0 ? slideForward : slideBackward)} 0.6s cubic-bezier(0.23, 1, 0.32, 1);
  will-change: transform, opacity;
`;

const IntroInner = styled.div`
  width: min(920px, 92vw);
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 1rem;
  align-items: center;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  border-bottom: 1px solid rgba(255, 255, 255, 0.12);
  padding: 0.85rem 0;
  transition: transform 0.25s ease;

  &:hover {
    transform: translateY(-2px);
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr !important;
    gap: 0;
    padding: 0;
    border: 1px solid rgba(255, 255, 255, 0.12);
    background: rgba(0, 0, 0, 0.18);
    border-radius: 0;
    overflow: hidden;
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 320px;
  object-fit: cover;
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.12);

  @media (max-width: 900px) {
    height: 240px;
    border-radius: 0;
    border: none;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
  }

  @media (max-width: 520px) {
    height: 160px;
  }
`;

const CardContent = styled.div`
  display: grid;
  gap: 0.55rem;

  @media (max-width: 900px) {
    gap: 0;
  }
`;

const ProjectTitle = styled.h3`
  font-size: clamp(1.35rem, 2.6vw, 2rem);
  line-height: 1.02;
  color: var(--text);
  max-width: 14ch;

  @media (max-width: 900px) {
    max-width: none;
    padding: 0.55rem 0.75rem 0.5rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    font-size: 2rem;
    line-height: 1;
  }

  @media (max-width: 520px) {
    font-size: 2.2rem;
  }
`;

const ProjectDesc = styled.p`
  color: #e5ebf5;
  font-size: 0.95rem;
  line-height: 1.6;
  max-width: 52ch;

  @media (max-width: 900px) {
    max-width: none;
    padding: 0.5rem 0.75rem 0.85rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    min-height: 74px;
  }
`;

const TechList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.45rem;
  margin-top: 0.2rem;

  @media (max-width: 900px) {
    margin-top: 0;
    padding: 0.5rem 0.75rem 0.75rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.7);
    gap: 0.5rem;

    &::before {
      content: 'tecnologia';
      width: 100%;
      color: var(--text);
      font-size: 1.02rem;
      line-height: 1;
      margin-bottom: 0.25rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      font-family: 'IBM Plex Mono', monospace;
    }
  }

  @media (max-width: 520px) {
    &::before {
      font-size: 0.98rem;
    }
  }
`;

const TechTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;
  padding: 0.28rem 0.56rem;
  border-radius: 999px;
  border: 1px solid rgba(0, 223, 154, 0.35);
  background: rgba(0, 223, 154, 0.08);
  color: var(--text);
  font-size: 0.72rem;
  font-family: 'IBM Plex Mono', monospace;
  letter-spacing: 0.02em;

  svg {
    color: var(--accent);
    font-size: 0.9rem;
    flex-shrink: 0;
  }

  @media (max-width: 900px) {
    border: 1px solid rgba(0, 223, 154, 0.35);
    background: rgba(0, 223, 154, 0.08);
    color: var(--text);
    padding: 0.35rem 0.8rem;
    min-height: 26px;

    svg {
      display: inline;
    }
  }
`;

const Action = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  padding-top: 0.6rem;
  border-top: 1px solid rgba(0, 223, 154, 0.2);
`;

const ActionText = styled.p`
  color: var(--text);
  font-size: 1.1rem;
  font-weight: 700;
  font-family: 'IBM Plex Mono', monospace;
`;

const IconWrap = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid rgba(0, 223, 154, 0.3);
  display: grid;
  place-items: center;
  color: var(--accent);
  font-size: 1rem;
`;

const Dots = styled.div`
  margin-top: 1.4rem;
  display: flex;
  justify-content: center;
  gap: 0.55rem;

  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.22);
  }

  span.active {
    background: var(--accent);
  }
`;

const Counter = styled.p`
  margin-top: 0.8rem;
  text-align: center;
  font-family: 'IBM Plex Mono', monospace;
  color: rgba(255, 255, 255, 0.72);
  letter-spacing: 0.06em;
  font-size: 0.9rem;
`;

const ProgressBar = styled.div`
  margin: 0.9rem auto 0;
  width: min(360px, 80vw);
  height: 4px;
  border-radius: 999px;
  background: rgba(255, 255, 255, 0.14);
  overflow: hidden;

  span {
    display: block;
    height: 100%;
    background: linear-gradient(90deg, var(--accent), var(--accent-2));
    transition: width 0.25s ease;
  }
`;

const CardActions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
  margin-top: auto;
  padding-top: 0.6rem;
  border-top: 1px solid rgba(0, 223, 154, 0.2);

  @media (max-width: 900px) {
    margin-top: 0;
    padding: 0.5rem 0.75rem 0.8rem;
    border-top: none;
    flex-wrap: wrap;
    gap: 0.55rem;

    &::before {
      content: 'botoes de acesso';
      width: 100%;
      color: var(--text);
      font-size: 1.02rem;
      line-height: 1;
      margin-bottom: 0.3rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      font-family: 'IBM Plex Mono', monospace;
    }
  }

  @media (max-width: 520px) {
    &::before {
      font-size: 0.98rem;
    }
  }
`;

const DetailsButton = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.6rem 1rem;
  border-radius: 10px;
  border: 1px solid rgba(0, 223, 154, 0.35);
  background: rgba(0, 223, 154, 0.08);
  color: var(--accent);
  font-size: 0.8rem;
  font-weight: 600;
  font-family: 'IBM Plex Mono', monospace;
  cursor: pointer;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: rgba(0, 223, 154, 0.16);
    border-color: rgba(0, 223, 154, 0.7);
    transform: translateY(-2px);
  }

  @media (max-width: 900px) {
    border-radius: 999px;
    min-height: 44px;
    padding: 0.62rem 1.2rem;
    border: 1px solid rgba(0, 223, 154, 0.35);
    background: rgba(0, 223, 154, 0.08);
    color: var(--accent);
  }
`;

const OpenButton = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.6rem 1rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  background: rgba(255, 255, 255, 0.04);
  color: var(--text);
  font-size: 0.8rem;
  font-weight: 600;
  font-family: 'IBM Plex Mono', monospace;
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, transform 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.4);
    transform: translateY(-2px);
  }

  @media (max-width: 900px) {
    border-radius: 999px;
    min-height: 44px;
    padding: 0.62rem 1.2rem;
    border: 1px solid rgba(255, 255, 255, 0.15);
    background: rgba(255, 255, 255, 0.04);
    color: var(--text);
  }
`;

function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const navigate = useNavigate();
  const trackRef = useRef(null);
  const activeIndexRef = useRef(0);

  useEffect(() => {
    const updateFromScroll = () => {
      const track = trackRef.current;
      if (!track) {
        return;
      }

      const rect = track.getBoundingClientRect();
      const scrollable = Math.max(rect.height - window.innerHeight, 1);
      const progress = Math.min(Math.max((-rect.top) / scrollable, 0), 1);
      const nextIndex = Math.min(
        carouselItems.length - 1,
        Math.floor(progress * carouselItems.length)
      );
      if (nextIndex !== activeIndexRef.current) {
        setDirection(nextIndex > activeIndexRef.current ? 1 : -1);
        activeIndexRef.current = nextIndex;
        setActiveIndex(nextIndex);
      }
    };

    updateFromScroll();
    window.addEventListener('scroll', updateFromScroll, { passive: true });
    window.addEventListener('resize', updateFromScroll);

    return () => {
      window.removeEventListener('scroll', updateFromScroll);
      window.removeEventListener('resize', updateFromScroll);
    };
  }, []);

  const activeItem = carouselItems[activeIndex];

  const scrollToSlide = (targetIndex) => {
    const track = trackRef.current;
    if (!track) {
      return;
    }

    const rect = track.getBoundingClientRect();
    const trackTop = window.scrollY + rect.top;
    const scrollable = Math.max(track.offsetHeight - window.innerHeight, 1);
    const targetProgress = targetIndex / (carouselItems.length - 1);
    const targetY = trackTop + scrollable * targetProgress;

    window.scrollTo({ top: targetY, behavior: 'smooth' });
  };

  return (
    <ProjectsSection id="projeto">
      <ProjectsGrid id="projeto-carousel" ref={trackRef}>
        <StickyFrame>
          <FadeSwap key={activeIndex} $direction={direction}>
            {activeItem.kind === 'intro' ? (
              <IntroCard>
                <IntroInner>
                  <IntroTitle>{activeItem.title}</IntroTitle>
                  <IntroText>{activeItem.desc}</IntroText>
                  <IntroLink type="button" onClick={() => scrollToSlide(1)}>
                    {activeItem.ctaLabel}
                    <span>&rsaquo;</span>
                  </IntroLink>
                </IntroInner>
              </IntroCard>
            ) : (
              <Card style={{ gridTemplateColumns: activeIndex % 2 === 1 ? '0.95fr 1.05fr' : '1.05fr 0.95fr' }}>
                <ProjectImage src={activeItem.image} alt={activeItem.title} />
                <CardContent>
                  <ProjectTitle>{activeItem.title}</ProjectTitle>
                  <ProjectDesc>{activeItem.desc}</ProjectDesc>
                  {Array.isArray(activeItem.tech) && activeItem.tech.length > 0 && (
                    <TechList>
                      {activeItem.tech.map((item) => (
                        <TechTag key={`${activeItem.title}-${item}`}>
                          {techIcons[item] ? React.createElement(techIcons[item]) : null}
                          <span>{item}</span>
                        </TechTag>
                      ))}
                    </TechList>
                  )}
                  <CardActions>
                    <DetailsButton type="button" onClick={() => navigate(`/projeto/${activeItem.slug}`)}>
                      Ver detalhes
                    </DetailsButton>
                    <OpenButton href={activeItem.href} target="_blank" rel="noopener noreferrer">
                      {activeItem.type === 'github' ? <FaGithub /> : <FaGlobe />}
                      {activeItem.type === 'github' ? 'GitHub' : 'Ver site'}
                    </OpenButton>
                  </CardActions>
                </CardContent>
              </Card>
            )}
          </FadeSwap>
        </StickyFrame>
      </ProjectsGrid>
      <Counter>{String(activeIndex + 1).padStart(2, '0')} / {String(carouselItems.length).padStart(2, '0')}</Counter>
      <ProgressBar>
        <span style={{ width: `${((activeIndex + 1) / carouselItems.length) * 100}%` }} />
      </ProgressBar>
      <Dots>
        {carouselItems.map((item, index) => (
          <span key={`${item.kind}-${item.title}`} className={index === activeIndex ? 'active' : ''} />
        ))}
      </Dots>

    </ProjectsSection>
  );
}

export default Projects;
