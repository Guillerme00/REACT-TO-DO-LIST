import RegisterButton from '../../components/RegisterButton'
import Sidebar from '../../containers/sidebar'
import TodoList from '../../containers/TodoList'

const Home = () => {
  return (
    <>
      <Sidebar ShowFilter />
      <TodoList />
      <RegisterButton />
    </>
  )
}

export default Home
