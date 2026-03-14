import React from 'react';
import styled from 'styled-components';
import Tela from '/tela.png';

const HeroContainer = styled.section`
  display: grid;
  grid-template-columns: 0.95fr 1.05fr;
  gap: 2.1rem;
  align-items: center;
  padding: 5.1rem 0 2rem;
  min-height: 100vh;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    min-height: auto;
    padding-top: 3.9rem;
    gap: 1.4rem;
  }
`;

const TextArea = styled.div`
  padding: 0.4rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  position: relative;
  z-index: 3;
`;

const Label = styled.p`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  width: fit-content;
  color: var(--accent);
  font-family: 'IBM Plex Mono', monospace;
  font-weight: 500;
  margin-bottom: 0.9rem;
  letter-spacing: 0.09em;
  font-size: 0.72rem;
  text-transform: uppercase;
  border: 1px solid rgba(0, 223, 154, 0.35);
  border-radius: 999px;
  padding: 0.34rem 0.68rem;
  background: rgba(0, 223, 154, 0.08);

  span {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: var(--accent);
    box-shadow: 0 0 10px var(--accent);
  }
`;

const Title = styled.h1`
  font-size: clamp(2.5rem, 5.4vw, 4.35rem);
  font-weight: 800;
  margin: 0;
  line-height: 0.94;
  letter-spacing: -0.03em;

  span {
    display: block;
  }

  strong {
    color: var(--accent);
  }

  b {
    display: inline-flex;
    align-items: center;
    width: fit-content;
    color: rgba(219, 232, 255, 0.95);
    font-size: 0.24em;
    margin-top: 0.9em;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 999px;
    padding: 0.46rem 0.72rem;
    background: rgba(255, 255, 255, 0.03);
  }

  @media (max-width: 900px) {
    font-size: clamp(2rem, 11vw, 3rem);
    line-height: 0.98;

    b {
      margin-top: 0.7em;
    }
  }
`;

const SubTitle = styled.p`
  font-size: clamp(0.98rem, 1.55vw, 1.08rem);
  font-weight: 400;
  color: var(--muted);
  margin-top: 0.95rem;
  max-width: 44ch;
  line-height: 1.62;

  @media (max-width: 900px) {
    margin-top: 0.8rem;
    max-width: 100%;
    font-size: 0.95rem;
    line-height: 1.58;
  }
`;

const Meta = styled.div`
  margin-top: 0.2rem;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 0.52rem;

  @media (max-width: 900px) {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;

const MetaItem = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.14);
  border-radius: 12px;
  padding: 0.58rem;
  background: rgba(0, 0, 0, 0.18);

  h3 {
    font-size: 0.62rem;
    font-family: 'IBM Plex Mono', monospace;
    color: var(--accent);
    margin-bottom: 0.3rem;
    text-transform: uppercase;
    letter-spacing: 0.05em;
  }

  p {
    font-size: 0.74rem;
    color: var(--text);
    line-height: 1.45;
  }
`;

const ImageArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 500px;
  padding: 0;

  @media (max-width: 900px) {
    min-height: 380px;
  }
`;

const Image = styled.img`
  max-width: min(920px, 128%);
  height: auto;
  display: block;
  filter: drop-shadow(0 18px 34px rgba(0, 0, 0, 0.42));

  @media (max-width: 900px) {
    max-width: min(820px, 118%);
  }
`;

function Hero() {
  return (
    <HeroContainer id="inicio">
      <TextArea>
        <div>
          <Label><span />Disponivel para novos desafios</Label>
          <Title>
            <span>Gabriel</span>
            <strong>Vasquez</strong>
            <b>Software Engineer | Full Stack</b>
          </Title>
          <SubTitle>
            Desenvolvo aplicações web, integrando frontend, backend, dados e cloud, com foco em performance e soluções funcionais.Aplico na prática conceitos de desenvolvimento e tecnologia em projetos reais.
          </SubTitle>

          <Meta>
            <MetaItem>
              <h3>Foco tecnico</h3>
              <p>Cloud, Front-end e Data Science</p>
            </MetaItem>
            <MetaItem>
              <h3>Entrega</h3>
              <p>Aplicacoes web, dashboards e sistemas internos</p>
            </MetaItem>
            <MetaItem>
              <h3>Disponibilidade</h3>
              <p>Aberto para oportunidades e novos desafios</p>
            </MetaItem>
          </Meta>
        </div>
      </TextArea>

      <ImageArea>
        <Image src={Tela} alt="tela com tecnologia" />
      </ImageArea>
    </HeroContainer>
  );
}

export default Hero;
