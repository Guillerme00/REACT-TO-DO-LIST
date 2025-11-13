import { Provider } from 'react-redux'
import Sidebar from './containers/sidebar'
import TodoList from './containers/TodoList'
import GlobalReset, { Container } from './Styles/GlobalReset'
import store from './store'
function App() {
  return (
    <Provider store={store}>
      <GlobalReset />
      <Container>
        <Sidebar />
        <TodoList />
      </Container>
    </Provider>
  )
}

export default App
