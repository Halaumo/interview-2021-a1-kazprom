// import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { Router } from 'react-router-dom'
import { createBrowserHistory } from 'history'
import './styles/normalize.css'
import { Provider } from 'react-redux'
import { store } from './store/redux'
import { SnackbarProvider } from 'notistack'

const history = createBrowserHistory()

ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <SnackbarProvider maxSnack={3}>
          <App />
        </SnackbarProvider>
      </Router>
    </Provider>,
  document.getElementById('root')
)
