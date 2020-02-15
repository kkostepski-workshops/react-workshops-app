import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto+Condensed&display=swap');

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto Condensed', sans-serif;
    background-color: ${props => props.theme.backgroundColor};
    color: ${props => props.theme.fontColor};
  }
`;

export default GlobalStyle;
