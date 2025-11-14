import { useSelector } from 'react-redux'

import Task from '../../components/Tasks'
import * as S from './styles'
import { RootReducer } from '../../store'

const TodoList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  return (
    <S.Container>
      <p>2 tasks marked as: &quot;Category&ldquo; and &quot;Terms&ldquo;</p>
      <ul>
        {itens.map((t) => (
          <li key={t.title}>
            <Task
              title={t.title}
              description={t.description}
              priority={t.priority}
              status={t.status}
              id={t.id}
            />
          </li>
        ))}
      </ul>
    </S.Container>
  )
}

export default TodoList
