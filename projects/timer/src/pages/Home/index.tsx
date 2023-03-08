import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  Separator,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <FormContainer>
        <label htmlFor="projectName">Vou trabalhar em</label>
        <input id="projectName" placeholder="Dê um nome para o seu projeto" />

        <label htmlFor="minutesAmount">durante</label>
        <input type="number" id="minutesAmount" placeholder="00" />

        <span>minutos.</span>
      </FormContainer>

      <CountdownContainer>
        <span>0</span>
        <span>0</span>
        <Separator>:</Separator>
        <span>0</span>
        <span>0</span>
      </CountdownContainer>

      <button type="submit">Começar</button>
    </HomeContainer>
  )
}
