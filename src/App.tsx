import { Route, Switch, BrowserRouter } from 'react-router-dom'
import { routes } from './app-routes'

const App = () => {

  return (
    <>
      <Switch>
        {routes.map(({ basepath, Component }) => {
          return (
            <Route key={basepath} path={basepath}>
              <BrowserRouter basename={basepath}>
                <Component />
              </BrowserRouter>
            </Route>
          )
        })}
      </Switch>
    </>
  )
}

export default App;
