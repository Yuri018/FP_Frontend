// импортируем функцию createGlobalStyles из пакет styled-components
import { Interface } from 'readline';
import { createGlobalStyle } from 'styled-components';
import '../fonts/Montserrat/stylesheet.css';
import '../fonts/TrueGothicCyr/stylesheet.css';

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    font-family: 'Montserrat';
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
  }

  #root {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;    
  }

  ul, ol, li, h1, h2, h3, h4, h5, h6, p {
    margin: 0;
    padding: 0;
  }

  ul, ol, li {
    list-style: none;
  } 
`;

export default GlobalStyles;