import Task from '../../components/Tasks'
import * as S from './styles'

const TodoList = () => (
  <S.Container>
    <p>2 tasks marked as: &quot;Category&ldquo; and &quot;Terms&ldquo;</p>
    <ul>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
      <li>
        <Task />
      </li>
    </ul>
  </S.Container>
)

export default TodoList
