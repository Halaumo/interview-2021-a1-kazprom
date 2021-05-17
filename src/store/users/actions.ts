export const USERS_ADD_ONE = 'USERS_ADD_ONE'
export const USERS_SET_CHECKED = 'USERS_SET_CHECKED'
export const USERS_DELETE_CHECKED = 'USERS_DELETE_CHECKED'


export const usersAddOne = (payload: User): { type: typeof USERS_ADD_ONE; payload: User } => ({
  type: USERS_ADD_ONE,
  payload,
})

export const usersSetChecked = (
  payload: { id: string, checked: boolean }
): { type: typeof USERS_SET_CHECKED; payload: { id: string, checked: boolean } } => ({ type: USERS_SET_CHECKED, payload })

export const usersDeleteChecked = (): { type: typeof USERS_DELETE_CHECKED } => ({
  type: USERS_DELETE_CHECKED,
})

// For Saga
export const USERS_GET_ONE = 'USERS_GET_ONE'
export const usersGetOne = (payload: number): { type: typeof USERS_GET_ONE, payload: number } => ({ type: USERS_GET_ONE, payload })
// For Saga emd

