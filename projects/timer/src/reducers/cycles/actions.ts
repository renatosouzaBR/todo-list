import { Cycle } from './reducer'

export enum ACTIONS_TYPES {
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
  CREATE_NEW_TASK = 'CREATE_NEW_TASK',
  INTERRUPT_CYCLE = 'INTERRUPT_CYCLE',
}

export function createNewTaskAction(newCycle: Cycle) {
  return {
    type: ACTIONS_TYPES.CREATE_NEW_TASK,
    payload: {
      newCycle,
    },
  }
}

export function markCurrentCycleAsFinishedAction() {
  return {
    type: ACTIONS_TYPES.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}

export function interruptCycleAction() {
  return {
    type: ACTIONS_TYPES.INTERRUPT_CYCLE,
  }
}
