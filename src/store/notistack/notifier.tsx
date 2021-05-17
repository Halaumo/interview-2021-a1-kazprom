import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSnackbar } from 'notistack'

import { notistackRemove } from './actions'

const Notifier = () => {
  const dispatch = useDispatch()
  const notifications = useSelector((store: RootState) => store.notistack.notifications)
  const { enqueueSnackbar, closeSnackbar } = useSnackbar()

  useEffect(() => {
    for (const { message, key, variant } of notifications) {
      enqueueSnackbar(message, {
        key,
        autoHideDuration: 1500,
        variant,
        // @ts-ignore
        onClose: (e, onExitedKey) => {
          closeSnackbar(onExitedKey)
        },
      })
      dispatch(notistackRemove(key))
    }
  }, [notifications, enqueueSnackbar, closeSnackbar, dispatch])

  return null
}

export default Notifier
