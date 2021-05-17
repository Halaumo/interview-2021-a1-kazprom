import { put, call, takeLeading, all } from 'redux-saga/effects'

import { USERS_GET_ONE, usersAddOne } from './actions'
import { notistackPush } from '../notistack/actions'

const apiGetOneUser = (id: number) =>
  fetch('https://graphqlzero.almansi.me/api', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify({
      query: `query ($id: ID!) {
        user(id: $id) {
          id
          name
        }
      }`,
      variables: { id },
    }),
  })

export function* usersGetOneWorker(action: any) {
  try {
    const data: Response = yield call(apiGetOneUser, action.payload)
    const json: { data: { user: { id: string; name: string } } } = yield call(() =>
      Promise.resolve(data.json())
    )
    const parsed = json.data.user
    const user: User = {
      id: parsed.id + Date.now().toString(),
      name: `${parsed.name} ${Math.floor(Math.random() * 1000)}`,
      checked: false,
    }
    yield all([
      put(usersAddOne(user)),
      put(notistackPush({ key: `${user.id} ${Date.now.toString()}`, variant: 'success', message: `User ${user.name} added` })),
    ])
  } catch (e) {
    yield put(notistackPush({ key: Date.now.toString(), variant: 'error', message: `Error ${e}` }))
  }
}

export function* usersWatcher() {
  yield takeLeading(USERS_GET_ONE, usersGetOneWorker)
}
