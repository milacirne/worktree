'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`

  * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
  text-decoration: none;
  font-family: 'Roboto', sans-serif;

  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: #101419; // alterar com a variável
  }
`

export default GlobalStyle
