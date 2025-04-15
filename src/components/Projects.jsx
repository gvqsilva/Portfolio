import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaGlobe } from 'react-icons/fa';

const ProjectsSection = styled.section`
  padding: 6rem 2rem;
  text-align: center;
  background: #0d0d0d;
  border-radius: 12px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.6);
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 3rem;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  background: linear-gradient(90deg, #00df9a, #00ffcc);
  -webkit-background-clip: text;
  color: transparent;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 3rem;
  margin-top: 2rem;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const CardLink = styled.a`
  text-decoration: none;
  position: relative;
  display: block;
  border-radius: 12px;
  overflow: hidden;
`;

const Card = styled.div`
  background-color: #2a2a2a;
  padding: 0;
  border-radius: 12px;
  transition: transform 0.3s, box-shadow 0.3s;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  position: relative;
  z-index: 1;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.3);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`;

const CardContent = styled.div`
  padding: 2rem;
`;

const ProjectTitle = styled.h3`
  font-size: 1.8rem;
  color: #00df9a;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ProjectDesc = styled.p`
  color: #ccc;
  font-size: 1rem;
  line-height: 1.6;
`;

const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(13, 13, 13, 0.85);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
  z-index: 2;

  ${CardLink}:hover & {
    opacity: 1;
  }
`;

const GithubIcon = styled(FaGithub)`
  color: #00df9a;
  font-size: 3rem;
  transition: transform 0.3s ease;

  ${CardLink}:hover & {
    transform: scale(1.2);
  }
`;

const WebIcon = styled(FaGlobe)`
  color: #00df9a;
  font-size: 3rem;
  transition: transform 0.3s ease;

  ${CardLink}:hover & {
    transform: scale(1.2);
  }
`;

function Projects() {
  return (
    <ProjectsSection id="projeto">
      <Heading>Conheça alguns dos meus projetos:</Heading>
      <ProjectsGrid>
        <CardLink href="https://github.com/gvqsilva/CP5-Edge" target="_blank" rel="noopener noreferrer">
          <Card>
            <ProjectImage src="./public/projeto1.png" alt="Vinhedos" />
            <CardContent>
              <ProjectTitle>Monitoramento Global de Vinhedos</ProjectTitle>
              <ProjectDesc>Sistema com ESP32 e sensores que envia dados ao FIWARE. Dashboard em Python permite visualização e análise com controle via Postman.</ProjectDesc>
            </CardContent>
            <Overlay><GithubIcon /></Overlay>
          </Card>
        </CardLink>

        <CardLink href="https://github.com/gvqsilva/GS-Python" target="_blank" rel="noopener noreferrer">
          <Card>
            <ProjectImage src="./public/projeto2.png" alt="Qualidade da Água" />
            <CardContent>
              <ProjectTitle>Monitoramento da Qualidade da Água</ProjectTitle>
              <ProjectDesc>Projeto criado para o Desafio de Inovação Azul 2024. Analisa dados de poluição oceânica com visualizações acessíveis.</ProjectDesc>
            </CardContent>
            <Overlay><GithubIcon /></Overlay>
          </Card>
        </CardLink>

        <CardLink href="https://g4racing.netlify.app/" target="_blank" rel="noopener noreferrer">
          <Card>
            <ProjectImage src="./public/projeto3.png" alt="G4 Racing" />
            <CardContent>
              <ProjectTitle>G4 Racing - Portal Automotivo</ProjectTitle>
              <ProjectDesc>Plataforma completa sobre automobilismo com categorias, notícias, equipes e pilotos. Interface moderna, intuitiva e responsiva.</ProjectDesc>
            </CardContent>
            <Overlay><WebIcon /></Overlay>
          </Card>
        </CardLink>
      </ProjectsGrid>
    </ProjectsSection>
  );
}

export default Projects;
