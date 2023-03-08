import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Router } from './Router'
import { GlobalStyles } from './styles/GlobalStyles'
import { defaultTheme } from './styles/themes/DefaultTheme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  )
}
