import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  TextField,
} from '@material-ui/core'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { RowButtonPadding, Row } from './styles'
import { usersAddOne, usersSetChecked, usersDeleteChecked, usersGetOne } from '../store/users/actions'
import User from '../components/user'
import Notifier from '../store/notistack/notifier'

const Component = () => {
  const dispatch: AppDispatch = useDispatch()
  const users = useSelector((state: RootState) => state.users.users)
  const checkedUsers = useSelector((state: RootState) => state.users.checkedUsers)

  const setUserChecked = (payload: { id: string; checked: boolean }) => {
    dispatch(usersSetChecked(payload))
  }

  const deleteCheckedUsers = () => {
    dispatch(usersDeleteChecked())
  }

  const getOneUser = () => {
    dispatch(usersGetOne(1))
  }

  const getOneUserWithError = () => {
    dispatch(usersGetOne(1.123123))
  }

  // Add Dialog
  const [isAddDialog, setIsAddDialog] = useState(false)
  const [inputValue, setInputValue] = useState('')
  const addUser = () => {
    if (inputValue === '') return
    const user: User = {
      name: inputValue,
      id: Date.now().toString(),
      checked: false,
    }

    setInputValue('')
    dispatch(usersAddOne(user))
  }

  const openAddFormDialog = () => {
    setIsAddDialog(true)
  }

  const closeAddFormDialog = () => {
    setIsAddDialog(false)
  }

  const addDialogTextField = (e: any) => {
    setInputValue(e.target.value)
  }

  const okAddDialogBtn = () => {
    closeAddFormDialog()
    addUser()
  }

  const addDialogEnterPressed = (e: any) => {
    if (e.key !== 'Enter') return
    closeAddFormDialog()
    addUser()
  }
  // Add Dialog end

  // Delete Dialog
  const [isDeleteDialog, setIsDeleteDialog] = useState(false)

  const openDeleteFormDialog = () => {
    if (checkedUsers === 0) return
    setIsDeleteDialog(true)
  }

  const closeDeleteFormDialog = () => {
    setIsDeleteDialog(false)
  }

  const okDeleteFormDialog = () => {
    closeDeleteFormDialog()
    deleteCheckedUsers()
  }
  // Delete Dialog end

  return (
    <>
      <Notifier/>
      <Row>
        <RowButtonPadding>
          <Button variant='contained' color='primary' onClick={openAddFormDialog}>
            Добавить
          </Button>
          <Button variant='contained' color='secondary' onClick={openDeleteFormDialog} disabled={checkedUsers === 0}>
            Удалить
          </Button>
          <Button variant='contained' onClick={getOneUser}>Graphql работающий</Button>
          <Button variant='contained' onClick={getOneUserWithError}>Graphql с ошибкой</Button>
        </RowButtonPadding>
      </Row>

      <Dialog open={isAddDialog} onEscapeKeyDown={closeAddFormDialog}>
        <DialogTitle>Добавить в список</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            fullWidth
            onChange={addDialogTextField}
            onKeyPress={addDialogEnterPressed}
          />
        </DialogContent>
        <DialogActions>
          <Button variant='contained' onClick={closeAddFormDialog}>
            Отмена
          </Button>
          <Button variant='contained' color='primary' onClick={okAddDialogBtn}>
            OK
          </Button>
        </DialogActions>
      </Dialog>

      <Dialog open={isDeleteDialog} onEscapeKeyDown={closeDeleteFormDialog}>
        <DialogTitle>Удалить из списка {checkedUsers} пользователя?</DialogTitle>
        <DialogActions>
          <Button variant='contained' onClick={closeDeleteFormDialog}>
            Отмена
          </Button>
          <Button variant='contained' color='primary' onClick={okDeleteFormDialog}>
            OK
          </Button>
        </DialogActions>
      </Dialog>

      <div>
        {users.map((user) => (
          <User
            key={user.id}
            name={user.name}
            checked={user.checked}
            checkboxHandler={() => {
              setUserChecked({ id: user.id, checked: user.checked })
            }}
          />
        ))}
      </div>
    </>
  )
}

export default Component
