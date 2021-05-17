import { NOTISTACk_PUSH, NOTISTACk_REMOVE, NOTISTACk_REMOVE_FIRST } from './actions'
import { usersActions } from './actions.interfaces'

const defaultState: { notifications: Notistack[] } = {
  notifications: []
}

export const notistackReducers = (state = defaultState, action: usersActions) => {
  switch (action.type) {
    case NOTISTACk_PUSH:
      return { ...state, notifications: [...state.notifications, action.payload] }
    case NOTISTACk_REMOVE:
      return { ...state, notifications: [...state.notifications.filter((note) => note.key !== action.payload)] }
    case NOTISTACk_REMOVE_FIRST:
      // @ts-ignore
      return { ...state, notifications: [...state.notifications.filter((note, index) => index !== 0)] }
  }
  return state
}
