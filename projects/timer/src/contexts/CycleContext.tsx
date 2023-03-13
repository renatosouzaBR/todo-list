import { createContext, ReactNode, useState } from 'react'

type FormTypes = {
  projectName: string
  minutesAmount: number
}

interface Cycle {
  id: string
  projectName: string
  minutesAmount: number
  startDate: Date
  interrupetDate?: Date
  finishedDate?: Date
}

interface CycleContextProps {
  cycles: Cycle[]
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  amountSecondsPassed: number
  markCurrentCycleAsFinished: () => void
  changeAmountSecondsPassed: (seconds: number) => void
  createNewTask: (data: FormTypes) => void
  interruptCycle: () => void
}

export const CycleContext = createContext({} as CycleContextProps)

interface CycleProviderProps {
  children: ReactNode
}

export function CycleProvider({ children }: CycleProviderProps) {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  function markCurrentCycleAsFinished() {
    setCycles((state) =>
      state.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return {
            ...cycle,
            finishedDate: new Date(),
          }
        } else {
          return cycle
        }
      }),
    )
  }

  function changeAmountSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function createNewTask(data: FormTypes) {
    const id = String(new Date().getTime())
    const newCycle: Cycle = {
      id,
      projectName: data.projectName,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((state) => [...state, newCycle])
    setActiveCycleId(id)
    setAmountSecondsPassed(0)
  }

  function interruptCycle() {
    const updatedCycles = cycles.map((cycle) => {
      if (cycle.id === activeCycleId) {
        return {
          ...cycle,
          interrupetDate: new Date(),
        }
      } else {
        return cycle
      }
    })

    setCycles(updatedCycles)
    setActiveCycleId(null)
  }

  return (
    <CycleContext.Provider
      value={{
        cycles,
        activeCycle,
        activeCycleId,
        amountSecondsPassed,
        markCurrentCycleAsFinished,
        changeAmountSecondsPassed,
        createNewTask,
        interruptCycle,
      }}
    >
      {children}
    </CycleContext.Provider>
  )
}
