export const NOTISTACk_PUSH = 'NOTISTACk_PUSH'
export const NOTISTACk_REMOVE = 'NOTISTACk_REMOVE'
export const NOTISTACk_REMOVE_FIRST = 'NOTISTACk_REMOVE_FIRST'

export const notistackPush = (payload: Notistack): { type: typeof NOTISTACk_PUSH; payload: Notistack } => ({
  type: NOTISTACk_PUSH,
  payload,
})

export const notistackRemove = (payload: string): { type: typeof NOTISTACk_REMOVE; payload: string } => ({
  type: NOTISTACk_REMOVE,
  payload,
})

export const notistackRemoveFirst = (): { type: typeof NOTISTACk_REMOVE_FIRST } => ({
  type: NOTISTACk_REMOVE_FIRST
})
