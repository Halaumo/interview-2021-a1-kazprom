import HomePage from './pages/index'
interface route {
  basepath: string
  Component: () => JSX.Element
}

export const routes: route[] = [
  { basepath: '/', Component: HomePage }
]
