import { combineReducers, createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'
import { composeWithDevTools } from 'redux-devtools-extension'

import { usersReducers } from './users/reducers'
import { notistackReducers } from './notistack/reducer'
import { rootWatcher } from './sagas'

const sagaMiddleware = createSagaMiddleware()

const rootReducer = combineReducers({
  users: usersReducers,
  notistack: notistackReducers,
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(rootWatcher)
