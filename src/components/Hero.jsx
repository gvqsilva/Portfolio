import React from 'react';
import styled, { keyframes } from 'styled-components';
import Notebook from '/notebook.png'; // ajuste o caminho se necessário

const HeroContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5rem 10%;
  min-height: 100vh;
  background-color: #0d0d0d;
  color: #fff;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    gap: 2rem;
  }
`;

const TextArea = styled.div`
  flex: 1;
`;

const Hello = styled.p`
  color: #00df9a;
  font-weight: bold;
  margin-bottom: 0.5rem;
  font-size: 1.1rem;
`;

const Title = styled.h1`
  font-size: 4rem;
  margin: 0;
  font-weight: 700;
`;

const SubTitle = styled.h2`
  font-size: 1.6rem;
  font-weight: 400;
  color: #ccc;
  margin-top: 1rem;
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 2rem;
  padding: 0.75rem 2rem;
  border: 2px solid #00df9a;
  color: #00df9a;
  text-decoration: none;
  font-weight: 600;
  transition: 0.3s ease;

  &:hover {
    background-color: #00df9a;
    color: #000;
  }
`;

const ImageArea = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  position: relative;
`;

const moveImage = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-15px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Circle = styled.div`
  background-color: #00df9a;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 0;

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
  }
`;

const Image = styled.img`
  max-width: 90%; /* Aumentado o tamanho da imagem */
  height: auto;
  z-index: 1;
  animation: ${moveImage} 2s ease-in-out infinite; /* Animação de movimento */
`;

function Hero() {
  return (
    <HeroContainer>
      <TextArea>
        <Hello>HELLO WORLD 👋🏽</Hello>
        <Title>Eu sou Gabriel,</Title>
        <SubTitle>Desenvolvedor Full-Stack.</SubTitle>
      </TextArea>

      <ImageArea>
        <Circle>
          <Image src={Notebook} alt="notebook com tecnologia" />
        </Circle>
      </ImageArea>
    </HeroContainer>
  );
}

export default Hero;
