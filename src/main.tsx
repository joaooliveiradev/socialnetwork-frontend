import { StrictMode } from 'react'
import ReactDOM from 'react-dom'
import { Root } from './root'
import { BrowserRouter } from 'react-router-dom'
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <Root />
    </BrowserRouter>
  </StrictMode>,
  document.querySelector('[data-js="app"]'),
)
