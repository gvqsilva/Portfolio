import React, { useState } from 'react';
import styled from 'styled-components';
import { FiMenu, FiX, FiGithub, FiLinkedin } from 'react-icons/fi';

const Nav = styled.nav`
  position: fixed;
  left: 3rem;
  top: 3rem;
  z-index: 45;
  width: auto;
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;

  @media (max-width: 900px) {
    left: 1rem;
    top: 1.35rem;
  }
`;

const Logo = styled.h1`
  display: flex;
  align-items: center;
  gap: 0.55rem;
  font-size: 2rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  cursor: pointer;
  font-family: 'IBM Plex Mono', monospace;
  color: var(--text);

  span {
    width: 1.1rem;
    height: 1.1rem;
    border: 2px solid var(--text);
    display: inline-block;
    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      background: var(--text);
    }

    &::before {
      width: 0.42rem;
      height: 2px;
      top: 0.27rem;
      left: 0.2rem;
    }

    &::after {
      width: 2px;
      height: 0.42rem;
      top: 0.45rem;
      right: 0.2rem;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
    display: inline-flex;
    align-items: center;
    gap: 0.55rem;
  }

  &:hover {
    color: var(--accent);
    transition: color 0.3s ease;
  }

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Menu = styled.ul`
  display: none;
  gap: 0.45rem;
  list-style: none;
  align-items: center;
  font-size: 0.88rem;
  color: var(--muted);
  background: rgba(0, 0, 0, 0.22);
  border: 1px solid rgba(0, 223, 154, 0.2);
  border-radius: 999px;
  padding: 0.35rem;

  li {
    transition: all 0.25s ease;
    position: relative;
    cursor: pointer;
    border-radius: 999px;
    padding: 0.5rem 0.85rem;

    &:hover {
      background: rgba(0, 223, 154, 0.15);
      color: var(--accent);
    }
  }

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: rgba(12, 12, 12, 0.98);
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: min(320px, 86vw);
    border-radius: 0;
    border: none;
    padding: 5rem 1rem 1rem;
    gap: 0.5rem;
    z-index: 999;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.25s ease;
    border-left: 1px solid var(--surface-border);

    li {
      width: 100%;
      text-align: center;
      padding: 0.75rem 1rem;
      border: 1px solid rgba(0, 223, 154, 0.2);
      background: rgba(255, 255, 255, 0.03);
    }
  }
`;

const MenuIcon = styled.div`
  display: none;
  font-size: 1.9rem;
  color: var(--text);
  cursor: pointer;
  z-index: 1001;

  @media (max-width: 900px) {
    display: block;
  }
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 0.7rem;
  align-items: center;

  a {
    width: 36px;
    height: 36px;
    border-radius: 50%;
    border: 1px solid rgba(0, 223, 154, 0.3);
    background: rgba(255, 255, 255, 0.03);
    display: grid;
    place-items: center;
    color: var(--muted);
    font-size: 1.05rem;
    transition: transform 0.25s ease, border-color 0.25s ease;

    &:hover {
      transform: translateY(-2px);
      color: var(--accent);
      border-color: var(--accent);
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    margin-top: 0.9rem;
  }
`;

const DesktopIcons = styled(SocialIcons)`
  display: none;
`;

const MobileIcons = styled(SocialIcons)`
  display: none;

  @media (max-width: 768px) {
    display: flex;
  }
`;

function Header() {
  const [open, setOpen] = useState(false);

  const scrollTo = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setOpen(false);
    }
  };

  return (
    <Nav>
      <Logo><a href="#inicio"><span />gvqsilva</a></Logo>

      <MenuIcon onClick={() => setOpen(!open)}>
        {open ? <FiX /> : <FiMenu />}
      </MenuIcon>

      <Menu open={open}>
        <li onClick={() => scrollTo('sobre')}>Sobre</li>
        <li onClick={() => scrollTo('skill')}>Tecnologias</li>
        <li onClick={() => scrollTo('projeto')}>Projetos</li>
        <li onClick={() => scrollTo('contato')}>Contato</li>

        <MobileIcons>
          <a href="https://github.com/gvqsilva" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
          <a href="https://linkedin.com/in/gabriel-vasquez-queiroz-da-silva-634b47277/" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
        </MobileIcons>
      </Menu>

      <DesktopIcons>
        <a href="https://github.com/gvqsilva" target="_blank" rel="noopener noreferrer"><FiGithub /></a>
        <a href="https://linkedin.com/in/gabriel-vasquez-queiroz-da-silva-634b47277/" target="_blank" rel="noopener noreferrer"><FiLinkedin /></a>
      </DesktopIcons>
    </Nav>
  );
}

export default Header;
