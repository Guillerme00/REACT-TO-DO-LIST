import { useSelector } from 'react-redux'

import Task from '../../components/Tasks'
import * as S from './styles'
import { RootReducer } from '../../store'

const TodoList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { input } = useSelector((state: RootReducer) => state.filter)

  const TaskFilter = () => {
    return itens.filter(
      (item) => item.title.toLowerCase().search(input.toLowerCase()) >= 0
    )
  }

  return (
    <S.Container>
      <p>2 tasks marked as: &quot;Category&ldquo; and &quot;{input}&ldquo;</p>
      <ul>
        {TaskFilter().map((t) => (
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
