import { Provider } from 'react-redux'
import { RouterProvider } from 'react-router-dom'
import { routes } from './routes'

import GlobalReset, { Container } from './Styles/GlobalReset'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <GlobalReset />
      <Container>
        <RouterProvider router={routes} />
      </Container>
    </Provider>
  )
}

export default App
