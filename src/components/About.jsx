import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 5rem 2rem;
  position: relative;
  overflow: hidden;
  text-align: center;
  background: linear-gradient(135deg, rgba(0, 223, 154, 0.15), rgba(44, 44, 44, 0.85));
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:before {
    content: '';
    position: absolute;
    top: -20%;
    left: -20%;
    width: 140%;
    height: 140%;
    background: radial-gradient(circle at 30% 30%, rgba(0, 223, 154, 0.3), transparent 70%);
    animation: pulse 8s infinite ease-in-out;
    z-index: 0;
  }

  @keyframes pulse {
    0%, 100% {
      transform: scale(1);
      opacity: 0.5;
    }
    50% {
      transform: scale(1.2);
      opacity: 0.2;
    }
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem;
  }
`;

const Heading = styled.h2`
  font-size: 3rem;
  margin-bottom: 2rem;
  color: #fff;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-weight: 600;
  background: linear-gradient(90deg, #00df9a, #00ffcc);
  -webkit-background-clip: text;
  color: transparent;
  opacity: 0;
  animation: fadeIn 1.5s ease-out forwards;

  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 2.2rem;
  }
`;

const Text = styled.p`
  max-width: 700px;
  margin: 0 auto;
  color: #ddd;
  font-size: 1.2rem;
  line-height: 1.8;
  font-weight: 400;
  opacity: 0;
  animation: fadeInText 1.8s ease-out forwards;
  animation-delay: 0.5s;

  @keyframes fadeInText {
    0% {
      opacity: 0;
      transform: translateY(20px);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

function About() {
  return (
      <AboutSection id="sobre">
        <Heading>Sobre Mim</Heading>
        <Text>
        Estudante de Engenharia de Software na FIAP com base sólida em Python, React, Node.js, JavaScript (full-stack), C++ e cloud (Microsoft Azure), atualmente expandindo seus conhecimentos em Java, SQL e Autodesk Maya. Experiência prática em projetos variados, incluindo colaboração com a Mahindra Racing e desenvolvimento de soluções web, IoT e inovadoras. Habilidades comprovadas em resolução de problemas, integração de tecnologias, criação de dashboards, trabalho em equipe e gestão de projetos. Busca sua primeira experiência profissional focada em Back-end e desafios significativos, demonstrando proatividade no aprendizado e desejo de contribuir para equipes inovadoras e focadas em qualidade.
        </Text>
      </AboutSection>
  );
}

export default About;
