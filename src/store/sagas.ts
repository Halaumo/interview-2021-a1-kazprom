import { all } from 'redux-saga/effects'

import { usersWatcher } from './users/saga'

export function* rootWatcher() {
  yield all([usersWatcher()])
}