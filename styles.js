import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    margin: 0;
    font-family: system-ui;
    color: #151515;
    background-image: url('./bg.svg');
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    overflow-x: hidden;
  }
`;
