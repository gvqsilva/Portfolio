import React, { useState } from 'react';
import styled from 'styled-components';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaPython, FaJava, FaNetworkWired, FaLaptopCode, FaGoogle, FaCode } from 'react-icons/fa';
import { SiTypescript, SiPandas, SiNumpy, SiDocker, SiPostman, SiOracle, SiTailwindcss, SiFigma, SiFirebase } from "react-icons/si";
import { FiChevronDown, FiChevronRight } from 'react-icons/fi';
import { VscAzure } from "react-icons/vsc";
import { TbChartDots } from "react-icons/tb";
import CplusImg from '/cplus.png';

// Ajuste estes valores para controlar tamanho e visibilidade da seção de Skills.
const skillsView = {
  showSection: true,
  showIntro: true,
  showCategories: true,
  compactMode: true,
};

const skillsByCategory = [
  {
    title: 'Front-end',
    items: [
      { name: 'React', icon: <FaReact /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'HTML', icon: <FaHtml5 /> },
      { name: 'CSS', icon: <FaCss3Alt /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss /> },
    ],
  },
  {
    title: 'Back-end',
    items: [
      { name: 'Node.js', icon: <FaNodeJs /> },
      { name: 'Python', icon: <FaPython /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'Firebase', icon: <SiFirebase /> },
    ],
  },
  {
    title: 'Banco de Dados',
    items: [
      { name: 'Oracle SQL', icon: <SiOracle /> },
    ],
  },
  {
    title: 'Data Science',
    items: [
      { name: 'Pandas', icon: <SiPandas /> },
      { name: 'NumPy', icon: <SiNumpy /> },
      { name: 'Matplotlib', icon: <TbChartDots /> },
    ],
  },
  {
    title: 'Cloud / DevOps',
    items: [
      { name: 'Microsoft Azure', icon: <VscAzure /> },
      { name: 'Docker', icon: <SiDocker /> },
      { name: 'Arquitetura de Redes', icon: <FaNetworkWired /> },
    ],
  },
  {
    title: 'Ferramentas',
    items: [
      { name: 'Git', icon: <FaGitAlt /> },
      { name: 'Postman', icon: <SiPostman /> },
      { name: 'Figma', icon: <SiFigma /> },
      { name: 'VS Code', icon: <FaLaptopCode /> },
      { name: 'IntelliJ IDEA', icon: <FaJava /> },
      { name: 'PyCharm', icon: <FaPython /> },
      { name: 'Google Colab', icon: <FaGoogle /> },
      { name: 'Cisco Packet Tracer', icon: <FaNetworkWired /> },
    ],
  },
  {
    title: 'Linguagens',
    items: [
      { name: 'Python', icon: <FaPython /> },
      { name: 'JavaScript', icon: <FaJs /> },
      { name: 'TypeScript', icon: <SiTypescript /> },
      { name: 'Java', icon: <FaJava /> },
      { name: 'C#', icon: <FaCode /> },
      { name: 'C++', icon: <img src={CplusImg} alt="C++" /> },
    ],
  },
];

const SkillsSection = styled.section`
  display: grid;
  gap: ${({ $compact }) => ($compact ? '0.9rem' : '1.4rem')};
  padding: ${({ $compact }) => ($compact ? '0.35rem 0' : '1rem 0')};
`;

const Intro = styled.div`
  text-align: center;
`;

const Label = styled.p`
  color: var(--accent);
  font-family: 'IBM Plex Mono', monospace;
  font-size: 1rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 0.75rem;
`;

const Heading = styled.h2`
  font-size: ${({ $compact }) => ($compact ? 'clamp(2.4rem, 5.6vw, 3.5rem)' : 'clamp(3.1rem, 6.6vw, 4.8rem)')};
  line-height: 0.98;
  color: var(--text);
`;

const IntroText = styled.p`
  margin: 1rem auto 0;
  max-width: ${({ $compact }) => ($compact ? '46ch' : '58ch')};
  font-size: ${({ $compact }) => ($compact ? '1.05rem' : '1.2rem')};
  line-height: 1.65;
`;

const Categories = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ $compact }) => ($compact ? '0.8rem' : '1.1rem')};
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const CategoryBlock = styled.div`
  padding: ${({ $compact }) => ($compact ? '0.8rem' : '1.1rem')};
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: ${({ $compact }) => ($compact ? '12px' : '18px')};
  background: rgba(255, 255, 255, 0.018);
  box-shadow: var(--shadow-sm);
  height: fit-content;
`;

const CategoryTitle = styled.h3`
  text-align: left;
  color: var(--accent);
  font-size: ${({ $compact }) => ($compact ? '0.88rem' : '1rem')};
  margin-bottom: 0;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  font-family: 'IBM Plex Mono', monospace;
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${({ $compact }) => ($compact ? '0.8rem' : '1.1rem')};
`;

const CategoryToggle = styled.button`
  border: 1px solid rgba(255, 255, 255, 0.22);
  background: rgba(255, 255, 255, 0.04);
  color: var(--muted);
  width: 28px;
  height: 28px;
  border-radius: 8px;
  display: grid;
  place-items: center;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    color: var(--accent);
    border-color: rgba(0, 223, 154, 0.7);
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: ${({ $compact }) => ($compact ? '0.6rem' : '0.8rem')};

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 420px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const SkillCard = styled.div`
  width: 100%;
  min-height: ${({ $compact }) => ($compact ? '76px' : '110px')};
  padding: ${({ $compact }) => ($compact ? '0.7rem 0.6rem' : '1rem 0.85rem')};
  border-radius: ${({ $compact }) => ($compact ? '8px' : '10px')};
  border: 1px solid rgba(255, 255, 255, 0.14);
  background: rgba(0, 0, 0, 0.18);
  transition: transform 0.25s, border-color 0.25s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: var(--muted);
  text-align: center;
  box-shadow: var(--shadow-lg);

  &:hover {
    transform: translateY(-4px);
    color: var(--accent);
    border-color: rgba(0, 223, 154, 0.8);
  }

  svg {
    font-size: ${({ $compact }) => ($compact ? '1.35rem' : '1.9rem')};
    margin-bottom: ${({ $compact }) => ($compact ? '0.3rem' : '0.45rem')};
  }

  img {
    width: ${({ $compact }) => ($compact ? '28px' : '38px')};
    height: ${({ $compact }) => ($compact ? '28px' : '38px')};
    margin-bottom: ${({ $compact }) => ($compact ? '0.3rem' : '0.45rem')};
  }

  span {
    font-size: ${({ $compact }) => ($compact ? '0.76rem' : '0.9rem')};
  }
`;

function Skills() {
  const [collapsedCategories, setCollapsedCategories] = useState(
    () => Object.fromEntries(skillsByCategory.map((c) => [c.title, true]))
  );

  const toggleCategory = (title) => {
    setCollapsedCategories((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  if (!skillsView.showSection) {
    return null;
  }

  return (
    <SkillsSection id='skill' $compact={skillsView.compactMode}>
      {skillsView.showIntro && (
        <Intro>
          <Label>Tecnologias</Label>
          <Heading $compact={skillsView.compactMode}>Stack organizada por especialidade</Heading>
          <IntroText $compact={skillsView.compactMode}>
            Ferramentas e linguagens que utilizo na construção de projetos web, aplicações full-stack e integrações.
          </IntroText>
        </Intro>
      )}

      {skillsView.showCategories && (
        <Categories $compact={skillsView.compactMode}>
          {skillsByCategory.map((category) => (
            <CategoryBlock key={category.title} $compact={skillsView.compactMode}>
              <CategoryHeader $compact={skillsView.compactMode}>
                <CategoryTitle $compact={skillsView.compactMode}>{category.title}</CategoryTitle>
                <CategoryToggle
                  type="button"
                  onClick={() => toggleCategory(category.title)}
                  aria-label={collapsedCategories[category.title] ? `Mostrar ${category.title}` : `Esconder ${category.title}`}
                >
                  {collapsedCategories[category.title] ? <FiChevronRight /> : <FiChevronDown />}
                </CategoryToggle>
              </CategoryHeader>

              {!collapsedCategories[category.title] && (
                <SkillsGrid $compact={skillsView.compactMode}>
                  {category.items.map((skill) => (
                    <SkillCard key={skill.name} $compact={skillsView.compactMode}>
                      {skill.icon}
                      <span>{skill.name}</span>
                    </SkillCard>
                  ))}
                </SkillsGrid>
              )}
            </CategoryBlock>
          ))}
        </Categories>
      )}
    </SkillsSection>
  );
}

export default Skills;
