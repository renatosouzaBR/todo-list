import { ThemeProvider } from 'styled-components'

import { DefaultTheme } from './styles/DefaultTheme'
import { GlobalStyle } from './styles/GlobalStyle'

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}>
      <GlobalStyle />

      <h1>Coffee Delivery</h1>
    </ThemeProvider>
  )
}
