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

  /* Customize website's scrollbar like Mac OS
Not supports in Firefox and IE */

/* total width */
::-webkit-scrollbar {
    background-color:#fff;
    width:16px
}

/* background of the scrollbar except button */
::-webkit-scrollbar-track {
    background-color:#fff !important;
}
::-webkit-scrollbar-track:hover {
    background-color:#f4f4f4 !important;
}

/* scrollbar itself */
::-webkit-scrollbar-thumb {
    background-color:#babac0 !important;
    border-radius:16px !important;
    border:5px solid #fff !important;
}
::-webkit-scrollbar-thumb:hover {
    background-color:#a0a0a5 !important;
    border:4px solid #f4f4f4 !important;
}

/* set button(top and bottom of the scrollbar) */
::-webkit-scrollbar-button {
  display:none !important
}
`;

export default GlobalStyle;
