import { usersAddOne, usersSetChecked, usersDeleteChecked, usersGetOne } from './actions'

export type usersActions =
  | ReturnType<typeof usersAddOne>
  | ReturnType<typeof usersSetChecked>
  | ReturnType<typeof usersDeleteChecked>
  | ReturnType<typeof usersGetOne>