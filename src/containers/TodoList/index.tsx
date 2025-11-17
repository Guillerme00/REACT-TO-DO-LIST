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
    if (input !== undefined) {
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

  const ShowFilterResult = (quantity: number) => {
    let msn = ''
    if (choise === 'all') {
      msn = `${quantity} task(s) founds like: All`
    } else {
      msn = `${quantity} task(s) found like: ${`${choise} = ${value}`} ${
        input !== undefined && input.length > 0 ? `and "${input}"` : ''
      }`
    }

    return msn
  }

  const msn = ShowFilterResult(Task.length)

  return (
    <S.Container>
      <S.Result>{msn}</S.Result>
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
