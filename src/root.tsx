import { css, ThemeProvider, createGlobalStyle } from 'styled-components/macro'
import { App } from './app'
import { theme } from './resources/theme'
import 'normalize.css'

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <App />
  </ThemeProvider>
)
const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  html {
    font-size: 62.5%;
  }
  body {
    font-family: 'DM Sans', sans-serif;
    height: 100vh;
  }
  [data-js="app"]{
    width: 100%;
    height: 100%;
    display: flex;
  }
`
export { Root }
