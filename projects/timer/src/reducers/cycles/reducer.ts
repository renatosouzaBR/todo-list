import { produce } from 'immer'

import { ACTIONS_TYPES } from './actions'

export interface Cycle {
  id: string
  projectName: string
  minutesAmount: number
  startDate: Date
  interrupetDate?: Date
  finishedDate?: Date
}

interface CycleState {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cycleReducers(state: CycleState, action: any) {
  switch (action.type) {
    case ACTIONS_TYPES.CREATE_NEW_TASK:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })
    case ACTIONS_TYPES.MARK_CURRENT_CYCLE_AS_FINISHED: {
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      )

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.cycles[currentCycleIndex].finishedDate = new Date()
      })
    }
    case ACTIONS_TYPES.INTERRUPT_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex(
        (cycle) => cycle.id === state.activeCycleId,
      )

      if (currentCycleIndex < 0) {
        return state
      }

      return produce(state, (draft) => {
        draft.cycles[currentCycleIndex].interrupetDate = new Date()
        draft.activeCycleId = null
      })
    }
    default:
      return state
  }
}
