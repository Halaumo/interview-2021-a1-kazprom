import { notistackPush, notistackRemove, notistackRemoveFirst } from './actions'

export type usersActions = ReturnType<typeof notistackPush> | ReturnType<typeof notistackRemove> | ReturnType<typeof notistackRemoveFirst>
