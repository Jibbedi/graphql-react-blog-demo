import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  
  html, body {
    height: 100vh;
    width: 100vw;
    font-family: 'Open Sans', sans-serif;
  }
`;

export default GlobalStyles;
