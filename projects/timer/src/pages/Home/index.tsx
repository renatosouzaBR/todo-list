import { useContext } from 'react'
import { HandPalm, Play } from 'phosphor-react'
import { FormProvider, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { FormCycle } from './components/FormCycle'
import { Countdown } from './components/Countdown'

import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { CycleContext } from '../../contexts/CycleContext'

const formSchema = zod.object({
  projectName: zod.string().min(1, 'Você precisa informa o nome da task'),
  minutesAmount: zod
    .number()
    .min(1, 'O ciclo mínimo é de 5 minutos')
    .max(60, 'O ciclo máximo é de 60 minutos'),
})

type FormTypes = zod.infer<typeof formSchema>

export function Home() {
  const { activeCycle, createNewTask, interruptCycle } =
    useContext(CycleContext)

  const formCycle = useForm<FormTypes>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      projectName: '',
      minutesAmount: 0,
    },
  })
  const { handleSubmit, watch, reset } = formCycle

  const task = watch('projectName')
  const isSubmitDisabled = !task

  function handleCreateNewTask(data: FormTypes) {
    createNewTask(data)
    reset()
  }

  return (
    <HomeContainer>
      <form action="submit" onSubmit={handleSubmit(handleCreateNewTask)}>
        <FormProvider {...formCycle}>
          <FormCycle />
        </FormProvider>

        <Countdown />

        {activeCycle ? (
          <StopCountdownButton type="button" onClick={interruptCycle}>
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
