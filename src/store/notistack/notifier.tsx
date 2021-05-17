import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useSnackbar } from 'notistack'

// import { notistackRemoveFirst } from './actions'
import { notistackRemove } from './actions'

// v1 not worked

// const Notifier = () => {
//   const dispatch = useDispatch()
//   const notifications = useSelector((store: RootState) => store.notistack.notifications)
//   const { enqueueSnackbar } = useSnackbar()

//   useEffect(() => {
//     for (const { message, key } of notifications) {
//       enqueueSnackbar(message, {
//         key,
//         autoHideDuration: 1000,
//         // @ts-ignore
//         onExited: (e, onExitedKey) => {
//           dispatch(notistackRemove(onExitedKey as string))
//         },
//       })
//     }
//   }, [notifications])

//   return null
// }

// v1 end

// v2 not worked

// const Notifier = () => {
//   const dispatch = useDispatch()
//   const notifications = useSelector((store: RootState) => store.notistack.notifications)
//   const { enqueueSnackbar } = useSnackbar()

//   useEffect(() => {
//       if (notifications.length === 0) return
//       const { message, key } = notifications[0]!;
//       enqueueSnackbar(message, {
//         key,
//         autoHideDuration: 3000,
//       })
//       dispatch(notistackRemoveFirst())
//   }, [notifications])

//   return null
// }

// v2 end

// v3 not worked

// const Notifier = () => {
//   const dispatch = useDispatch()
//   const notifications = useSelector((store: RootState) => store.notistack.notifications)
//   const { enqueueSnackbar } = useSnackbar()

//   useEffect(() => {
//     for (const { message, key } of notifications) {
//       enqueueSnackbar(message, {
//         key,
//         autoHideDuration: 2000,
//         // persist: true,
//       })
//       dispatch(notistackRemove(key))
//     }
//   }, [notifications])

//   return null
// }

// v3 end

// v4 not worked

// let displayed: string[] = []

// const Notifier = () => {
//   const dispatch = useDispatch()
//   const notifications = useSelector((store: RootState) => store.notistack.notifications)
//   const { enqueueSnackbar} = useSnackbar()

//   const storeDisplayed = (key: string) => {
//     displayed = [...displayed, key]
//   }

//   const removeDisplayed = (thisKey: string) => {
//     displayed = [...displayed.filter((key) => key !== thisKey)];
//   };

//   useEffect(() => {
//     for (const { message, key } of notifications) {
//       // do nothing if snackbar is already displayed
//       if (displayed.includes(key)) return

//       // display snackbar using notistack
//       enqueueSnackbar(message, {
//         key,
//         autoHideDuration: 2000,
//         // @ts-ignore
//         onExited: (e, onExitedKey) => {
//           dispatch(notistackRemove(onExitedKey as string))
//           removeDisplayed(onExitedKey as string)
//         },
//       })

//       // keep track of snackbars that we've displayed
//       storeDisplayed(key)
//     }
//   }, [notifications, enqueueSnackbar, dispatch])

//   return null
// }

// v4 end

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
