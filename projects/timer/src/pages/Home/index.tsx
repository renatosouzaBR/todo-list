import { Play } from 'phosphor-react'

import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  ProjectNameInput,
  Separator,
  StartCountdownButton,
} from './styles'

export function Home() {
  return (
    <HomeContainer>
      <form action="">
        <FormContainer>
          <label htmlFor="projectName">Vou trabalhar em</label>
          <ProjectNameInput
            id="projectName"
            placeholder="Dê um nome para o seu projeto"
            list="tasks-suggestions"
          />

          <datalist id="tasks-suggestions">
            <option value="Banana">Banana</option>
            <option value="Maça">Maça</option>
            <option value="Abacaxi">Abacaxi</option>
            <option value="Uva">Uva</option>
          </datalist>

          <label htmlFor="minutesAmount">durante</label>
          <MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
          />

          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>0</span>
          <span>0</span>
          <Separator>:</Separator>
          <span>0</span>
          <span>0</span>
        </CountdownContainer>

        <StartCountdownButton disabled type="submit">
          <Play size={24} />
          Começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
