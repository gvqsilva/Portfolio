import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Sora:wght@400;500;600;700;800&family=IBM+Plex+Mono:wght@400;500&display=swap');

  :root {
    --bg: #0e0e0e;
    --bg-soft: #151515;
    --surface: rgba(22, 22, 22, 0.85);
    --surface-2: rgba(30, 30, 30, 0.9);
    --surface-border: rgba(0, 223, 154, 0.3);
    --text: #f8f8f8;
    --muted: #bfbfbf;
    --accent: #00df9a;
    --accent-2: #00ffcc;
    --shadow-lg: 0 20px 50px rgba(0, 0, 0, 0.45);
    --shadow-sm: 0 8px 20px rgba(0, 0, 0, 0.35);
    --radius-lg: 24px;
    --radius-md: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Sora', sans-serif;
    background:
      radial-gradient(circle at 14% 8%, rgba(0, 223, 154, 0.2), transparent 34%),
      radial-gradient(circle at 78% 18%, rgba(0, 223, 154, 0.14), transparent 42%),
      linear-gradient(130deg, #0c0c0c 0%, #111111 52%, #171717 100%);
    color: var(--text);
    line-height: 1.5;
    min-height: 100vh;
    overflow-x: hidden;
  }

  body::before {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    background-image: linear-gradient(to right, rgba(255, 255, 255, 0.022) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255, 255, 255, 0.022) 1px, transparent 1px);
    background-size: 32px 32px;
    mask-image: radial-gradient(circle at center, black, transparent 82%);
    z-index: -1;
  }

  body::after {
    content: '';
    position: fixed;
    inset: 0;
    pointer-events: none;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0.15), transparent 25%);
    z-index: -1;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: var(--text);
    font-weight: 700;
    line-height: 1.12;
  }

  p {
    color: var(--muted);
    font-weight: 400;
  }

  section {
    width: min(1140px, 92vw);
    margin: 0 auto;
  }

  ::selection {
    background: var(--accent);
    color: #0c0c0c;
  }
`;

export default GlobalStyle;
