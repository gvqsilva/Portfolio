import React from 'react';
import styled from 'styled-components';

const AboutSection = styled.section`
  padding: 2rem 0;

  @media (max-width: 768px) {
    padding: 1rem 0;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 2rem;
  align-items: center;

  @media (max-width: 920px) {
    grid-template-columns: 1fr;
  }
`;

const Left = styled.div`
  padding: 0.4rem 0;
`;

const Right = styled.div`
  display: grid;
  gap: 1.1rem;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: -18%;
    top: 10%;
    width: 180px;
    height: 360px;
    border-radius: 10px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.08), rgba(0, 0, 0, 0.2));
    border: 1px solid rgba(255, 255, 255, 0.08);
    filter: blur(0.5px);
    opacity: 0.55;
    pointer-events: none;
  }

  @media (max-width: 920px) {
    &::before {
      display: none;
    }
  }
`;

const Tag = styled.p`
  display: inline-flex;
  width: fit-content;
  border-radius: 999px;
  border: 1px solid rgba(0, 223, 154, 0.4);
  padding: 0.3rem 0.65rem;
  color: var(--accent);
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.75rem;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-bottom: 0.9rem;
`;

const Heading = styled.h2`
  font-size: clamp(2.8rem, 6vw, 4.6rem);
  line-height: 0.97;
  margin-bottom: 0.8rem;
  color: var(--text);

  span {
    color: #e5ebf5;
  }
`;

const Text = styled.p`
  font-size: 1.02rem;
  line-height: 1.72;
  color: #dde2ed;
  max-width: 58ch;

  strong {
    color: #f5f5f5;
    font-weight: 500;
  }

  & + & {
    margin-top: 0.9rem;
  }

  @media (max-width: 768px) {
    font-size: 0.96rem;
  }
`;

const Feature = styled.div`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  padding: 1rem 1.1rem;

  h3 {
    color: rgba(255, 255, 255, 0.95);
    font-size: 0.92rem;
    margin-bottom: 0.45rem;
    text-transform: uppercase;
    font-family: 'IBM Plex Mono', monospace;
    letter-spacing: 0.04em;
  }

  p {
    font-size: 0.96rem;
    line-height: 1.7;
  }
`;

function About() {
  return (
<<<<<<< HEAD
    <AboutSection id="sobre">
      <Grid>
        <Left>
          <Tag>Sobre</Tag>
          <Heading>
            Hello World,
            <span> sou o Gabriel</span>
          </Heading>
          <Text>
            Sou estudante de Engenharia de Software na FIAP, iniciando minha carreira na área de tecnologia. Tenho conhecimentos em diversas linguagens e frameworks de programação.
          </Text>
          <Text>
            Durante minha formação, participei de projetos como uma plataforma interativa em parceria com a Mahindra Racing para divulgar a Fórmula E, competição da FIA, além do Gym Flow, um aplicativo para monitoramento de treinos e suplementação, e iniciativas de automação com o grupo Dasa.
          </Text>
          <Text>
            Busco continuar evoluindo tecnicamente, explorando novas tecnologias e participando de projetos que envolvam desenvolvimento de software, dados, cloud e inovação.
          </Text>
        </Left>
=======
      <AboutSection id="sobre">
        <Heading>Sobre Mim</Heading>
        <Text>
        Sou estudante de Engenharia de Software na FIAP e estou iniciando minha carreira na área de tecnologia. Tenho experiência com Python, React, Node.js, JavaScript, C++, Java, TypeScript, Oracle SQL, Azure, Postman, Docker e conceitos de Data Science. Ao longo da formação, desenvolvi projetos que ampliaram minha visão prática do desenvolvimento, com destaque para a parceria com a Mahindra Racing, onde criei uma plataforma interativa para aproximar o público da Fórmula E, aplicando UX, front-end e integração de dados. Também participei de iniciativas na Dasa voltadas à automação de processos internos e desenvolvi um aplicativo pessoal em React Native para monitoramento de treinos e suplementação. Esses desafios fortaleceram minhas habilidades técnicas, meu raciocínio analítico e minha capacidade de criar soluções completas. Estou em busca da minha primeira oportunidade profissional e motivado a contribuir com equipes que valorizam inovação, aprendizado contínuo e tecnologia de impacto.
>>>>>>> bc79ff98d60d4c241935dc406623c9591701dc53

        <Right>
          <Feature>
            <h3>Como eu trabalho</h3>
            <p>Trabalho com organização e foco na solução de problemas, desenvolvendo código simples e eficiente. Valorizo aprendizado contínuo e boas práticas no desenvolvimento.</p>
          </Feature>
          <Feature>
            <h3>Especialidade</h3>
            <p>Desenvolvimento web e integração de APIs, com foco em soluções eficientes. Interesse em cloud, dados e cybersecurity.</p>
          </Feature>
          <Feature>
            <h3>Objetivo profissional</h3>
            <p>Evoluir como desenvolvedor, ampliando meus conhecimentos em software, cloud e dados. Busco participar de projetos desafiadores e criar soluções com impacto real.</p>
          </Feature>
        </Right>
      </Grid>
    </AboutSection>
  );
}

export default About;
