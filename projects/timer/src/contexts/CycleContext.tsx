import {
  createContext,
  ReactNode,
  useEffect,
  useReducer,
  useState,
} from 'react'

import { Cycle, cycleReducers } from '../reducers/cycles/reducer'
import {
  createNewTaskAction,
  interruptCycleAction,
  markCurrentCycleAsFinishedAction,
} from '../reducers/cycles/actions'
import { differenceInSeconds } from 'date-fns'

type FormTypes = {
  projectName: string
  minutesAmount: number
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
  const [cyclesState, dispatch] = useReducer(
    cycleReducers,
    {
      cycles: [],
      activeCycleId: null,
    },
    (initialState) => {
      const storagedCycles = localStorage.getItem('@timer:cycles-state:v1.0.0')

      if (storagedCycles) {
        return JSON.parse(storagedCycles)
      }

      return initialState
    },
  )

  const { cycles, activeCycleId } = cyclesState
  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })

  function markCurrentCycleAsFinished() {
    dispatch(markCurrentCycleAsFinishedAction())
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

    dispatch(createNewTaskAction(newCycle))
    setAmountSecondsPassed(0)
  }

  function interruptCycle() {
    dispatch(interruptCycleAction())
  }

  useEffect(() => {
    const cyclesStateJSON = JSON.stringify(cyclesState)
    localStorage.setItem('@timer:cycles-state:v1.0.0', cyclesStateJSON)
  }, [cyclesState])

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
