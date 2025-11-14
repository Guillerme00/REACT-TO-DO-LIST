import { useSelector } from 'react-redux'

import Task from '../../components/Tasks'
import * as S from './styles'
import { RootReducer } from '../../store'

const TodoList = () => {
  const { itens } = useSelector((state: RootReducer) => state.tasks)
  const { input, choise, value } = useSelector(
    (state: RootReducer) => state.filter
  )

  const TaskFilter = () => {
    let FilteredTasks = itens
    if (input) {
      FilteredTasks = FilteredTasks.filter(
        (item) => item.title.toLowerCase().search(input.toLowerCase()) >= 0
      )
    }

    if (choise === 'priority') {
      FilteredTasks = FilteredTasks.filter((item) => item.priority === value)
    } else if (choise === 'status') {
      FilteredTasks = FilteredTasks.filter((item) => item.status === value)
    }

    return FilteredTasks
  }

  return (
    <S.Container>
      <p>2 tasks marked as: &quot;Category&ldquo; and &quot;{input}&ldquo;</p>
      <ul>
        <li>{input}</li>
        <li>{choise}</li>
        <li>{value}</li>
      </ul>
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
