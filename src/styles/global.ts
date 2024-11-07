import { createGlobalStyle } from 'styled-components'
import { Theme } from '@/themes/theme'

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
    background-color: ${({theme}) => (theme as Theme).backgroundColor};
  }
`

export default GlobalStyle
