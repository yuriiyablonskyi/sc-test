import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ThemeProvider, createGlobalStyle } from 'styled-components'

const media = {
  tablet: '(max-width: 600px)'
}

const Global = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
  color:#2E3B7E;
  font-family: 'Nunito', sans-serif;
  font-weight: 500;
  font-size:19px;
  @media${(media) => media.tablet} {
    font-size:16px;
  }
}
`


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={media}>
      <Global />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)
