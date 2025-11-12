import Sidebar from './containers/sidebar'
import TodoList from './containers/TodoList'
import GlobalReset, { Container } from './Styles/GlobalReset'
function App() {
  return (
    <>
      <GlobalReset />
      <Container>
        <Sidebar />
        <TodoList />
      </Container>
    </>
  )
}

export default App
