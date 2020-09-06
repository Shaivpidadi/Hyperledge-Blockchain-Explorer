import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Interface', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'Interface', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    background-color: #f3f5f8;
    min-height: 100%;
    min-width: 100%;
    padding: 40px 80px;
  }

  p,
  label {
    font-family: Interface, Georgia, Times, 'Times New Roman', serif;
    line-height: 1.5em;
  }

  .Polaris-Layout {
    margin: 2rem 2rem 2rem 0rem;
    padding-bottom: 2rem;
  }

  .Polaris-Heading {
    font-size: 3rem;
  }
`;

export default GlobalStyle;
