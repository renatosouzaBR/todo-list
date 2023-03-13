import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'

import { CycleContext } from '../../../../contexts/CycleContext'
import { FormContainer, MinutesAmountInput, ProjectNameInput } from './styles'

export function FormCycle() {
  const { activeCycle } = useContext(CycleContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="projectName">Vou trabalhar em</label>
      <ProjectNameInput
        id="projectName"
        placeholder="Dê um nome para o seu projeto"
        list="tasks-suggestions"
        disabled={!!activeCycle}
        {...register('projectName')}
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
        min={1}
        max={60}
        disabled={!!activeCycle}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
