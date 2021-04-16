import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  :root {
    --background: #121214;
    --background-secondary: #202024;
    --blue: #0050e6;
    --green: #0da318;
    --gray-hard: #3c3c44;
    --orange: #febd2e;
    --orange-hard: #e49c01;
    --text-secondary: #a0a0ab;
    --white: #fcfdff;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font-family: 'Josefin Sans', sans-serif;
    font-weight: 400;
    color: var(--white);
  }

  button {
    cursor: pointer;
  }
`;
