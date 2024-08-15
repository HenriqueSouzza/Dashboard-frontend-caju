import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: 0;
    padding-inline: 0;
    padding-block: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
  }

  dialog {
    position: relative;
  }

  input:focus {
    outline: none;
  }
`;
