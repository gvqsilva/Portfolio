import React from 'react';
import styled from 'styled-components';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaNodeJs, FaGitAlt, FaPython, FaJava } from 'react-icons/fa';
import { SiAutodeskmaya } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";
import { TbSql } from "react-icons/tb";
import CplusImg from '/cplus.png';

const SkillsSection = styled.section`
  padding: 5rem 2rem;
  background-color: #121212; /* cinza escuro mais moderno */
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  color: #00df9a;
  margin-bottom: 2rem;
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr); /* 6 colunas em telas grandes */
  gap: 1rem;
  justify-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr); /* 3 colunas responsivo */
  }

  @media (max-width: 600px) {
    grid-template-columns: repeat(2, 1fr); /* tablets/menores */
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr); /* celulares */
  }
`;

const SkillCard = styled.div`
  background-color: #1a1a1a;
  width: 120px;
  height: 120px;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.5);
  transition: transform 0.3s;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ccc;
  text-align: center;

  &:hover {
    transform: translateY(-6px);
    color: #00df9a;
  }

  svg {
    font-size: 2rem;
    margin-bottom: 0.4rem;
  }

  img {
    width: 40px; /* Ajuste o tamanho da imagem conforme necessário */
    height: 40px;
    margin-bottom: 0.4rem;
  }
`;

function Skills() {
  return (
    <SkillsSection id='skill'>
      <Heading>Minhas Tecnologias</Heading>
      <SkillsGrid>
        <SkillCard><FaReact />React</SkillCard>
        <SkillCard><FaJs />JavaScript</SkillCard>
        <SkillCard><FaHtml5 />HTML5</SkillCard>
        <SkillCard><FaCss3Alt />CSS3</SkillCard>
        <SkillCard><FaNodeJs />Node.js</SkillCard>
        <SkillCard><FaGitAlt />Git</SkillCard>
        <SkillCard><FaPython />Python</SkillCard>
        <SkillCard><SiAutodeskmaya />Autodesk Maya</SkillCard>
        <SkillCard><VscAzure />Microsoft Azure</SkillCard>
        <SkillCard><img src={CplusImg} alt="C++" />C++</SkillCard>
        <SkillCard><FaJava />Java</SkillCard>
        <SkillCard><TbSql />SQL</SkillCard>
      </SkillsGrid>
    </SkillsSection>
  );
}

export default Skills;
