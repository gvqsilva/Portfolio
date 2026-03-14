import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import GlobalStyle from './styles/GlobalStyle';
import Skills from './components/Skills';
import ProjectDetail from './pages/ProjectDetail';

const navItems = [
  { id: 'inicio', label: '00' },
  { id: 'sobre', label: '01' },
  { id: 'skill', label: '02' },
  { id: 'projeto', label: '03' },
  { id: 'contato', label: '04' },
];

const Page = styled.main`
  display: flex;
  flex-direction: column;
  gap: 0;
  padding: 0 0 3rem;
`;

const Section = styled.div`
  width: 100%;
  min-height: 92vh;
  display: flex;
  align-items: center;
`;

const FlowSection = styled.div`
  width: 100%;
`;

const LeftGlow = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 240px;
  height: 160px;
  z-index: 1;
  pointer-events: none;
  filter: blur(2px);
  opacity: 0.75;
  background:
    linear-gradient(90deg, transparent 0 10%, rgba(0, 223, 154, 0.95) 10% 62%, transparent 62% 100%) 0 8px/100% 14px no-repeat,
    linear-gradient(90deg, transparent 0 18%, rgba(0, 180, 255, 0.75) 18% 72%, transparent 72% 100%) 0 34px/100% 12px no-repeat,
    linear-gradient(90deg, transparent 0 4%, rgba(0, 223, 154, 0.7) 4% 56%, transparent 56% 100%) 0 56px/100% 10px no-repeat,
    linear-gradient(90deg, transparent 0 28%, rgba(255, 179, 0, 0.55) 28% 88%, transparent 88% 100%) 0 78px/100% 12px no-repeat;

  @media (max-width: 900px) {
    width: 170px;
    height: 110px;
  }
`;

const RightRail = styled.div`
  position: fixed;
  right: 1.6rem;
  top: 50%;
  transform: translateY(-50%);
  z-index: 10;
  display: grid;
  gap: 0.65rem;
  align-items: center;
  text-align: right;
  color: rgba(255, 255, 255, 0.8);
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.95rem;

  button {
    border: none;
    background: transparent;
    color: rgba(255, 255, 255, 0.72);
    font: inherit;
    cursor: pointer;
    justify-self: end;
    transition: color 0.2s ease, transform 0.2s ease;
  }

  button:hover,
  button.active {
    color: var(--accent);
    transform: translateX(-4px);
  }

  .line {
    width: 2px;
    height: 56px;
    background: rgba(255, 255, 255, 0.5);
    justify-self: end;
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

const ScrollHint = styled.button`
  position: fixed;
  right: 1.55rem;
  bottom: 2rem;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  color: rgba(255, 255, 255, 0.65);
  font-size: 0.9rem;
  letter-spacing: 0.06em;
  font-family: 'IBM Plex Mono', monospace;
  z-index: 10;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: color 0.2s ease, transform 0.2s ease;

  &:hover {
    color: var(--accent);
    transform: rotate(180deg) translateY(-4px);
  }

  @media (max-width: 900px) {
    display: none;
  }
`;

function App() {
  const [activeSection, setActiveSection] = useState('inicio');
  const [isAtBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const updateNavigationState = () => {
      let nextActive = 'inicio';
      const checkpoint = window.innerHeight * 0.35;

      navItems.forEach((item) => {
        const element = document.getElementById(item.id);
        if (!element) {
          return;
        }

        const rect = element.getBoundingClientRect();
        if (rect.top <= checkpoint) {
          nextActive = item.id;
        }
      });

      const pageBottom = window.scrollY + window.innerHeight;
      const documentBottom = document.documentElement.scrollHeight;

      setActiveSection(nextActive);
      setIsAtBottom(pageBottom >= documentBottom - 24);
    };

    updateNavigationState();
    window.addEventListener('scroll', updateNavigationState, { passive: true });
    window.addEventListener('resize', updateNavigationState);

    return () => {
      window.removeEventListener('scroll', updateNavigationState);
      window.removeEventListener('resize', updateNavigationState);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleEdgeScroll = () => {
    if (isAtBottom) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  const HomePage = (
    <>
      <GlobalStyle />
      <LeftGlow />
      <RightRail>
        {navItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className={activeSection === item.id ? 'active' : ''}
            onClick={() => scrollToSection(item.id)}
          >
            {item.label}
          </button>
        ))}
        <span className="line" />
      </RightRail>
      <ScrollHint type="button" onClick={handleEdgeScroll}>
        {isAtBottom ? 'scroll up' : 'scroll down'}
      </ScrollHint>
      <Header />
      <Page>
        <Section><Hero /></Section>
        <Section><About /></Section>
        <Section><Skills /></Section>
        <FlowSection><Projects /></FlowSection>
        <Section><Contact /></Section>
      </Page>
      <Footer />
    </>
  );

  return (
    <Routes>
      <Route path="/" element={HomePage} />
      <Route path="/projeto/:slug" element={<><GlobalStyle /><ProjectDetail /></>} />
    </Routes>
  );
}

export default App;