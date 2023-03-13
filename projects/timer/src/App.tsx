import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import { Router } from './Router'
import { CycleProvider } from './contexts/CycleContext'
import { GlobalStyles } from './styles/GlobalStyles'
import { defaultTheme } from './styles/themes/DefaultTheme'

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <BrowserRouter>
        <CycleProvider>
          <Router />
        </CycleProvider>
      </BrowserRouter>

      <GlobalStyles />
    </ThemeProvider>
  )
}
