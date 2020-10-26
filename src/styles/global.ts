import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: gainsboro;
    height: 100vh;

    font-family: 'VT323';
  }
`;
