import { ThemeProvider } from 'styled-components'

import { Home } from './pages/Home'
import { DefaultTheme } from './styles/DefaultTheme'
import { GlobalStyle } from './styles/GlobalStyle'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />

      <Home />
    </ThemeProvider>
  )
}
