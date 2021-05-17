import { USERS_ADD_ONE, USERS_DELETE_CHECKED, USERS_SET_CHECKED } from './actions'
import { usersActions } from './actions.interfaces'

const defaultState: {
   users: User[],
   checkedUsers: number,
 } = {
  users: [],
  checkedUsers: 0,
}

export function usersReducers(state = defaultState, action: usersActions) {
  switch (action.type) {
    case USERS_ADD_ONE:
      return { ...state, users: [...state.users, action.payload] }
    case USERS_SET_CHECKED:
      return {
        ...state,
        users: [
          ...state.users.map((user) => {
            if (user.id === action.payload.id) {
              return { ...user, checked: !user.checked }
            }
            return user
          }),
        ],
        checkedUsers: !action.payload.checked ? state.checkedUsers + 1 : state.checkedUsers - 1,
      }
    case USERS_DELETE_CHECKED:
      return { ...state, users: state.users.filter((user) => !user.checked), checkedUsers: 0 }
  }
  return state
}


