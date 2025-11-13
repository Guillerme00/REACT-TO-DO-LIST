import Task from '../../components/Tasks'
import * as S from './styles'

const Tasks = [
  {
    title: 'Estudar React',
    priority: 'Important',
    status: 'Pending',
    description: 'Ver aulas'
  },
  {
    title: 'Clear my room',
    priority: 'Important',
    status: 'Finished',
    description: 'GOOO CLEAR'
  },
  {
    title: 'Exersice',
    priority: 'Important',
    status: 'Pending',
    description: 'Exersice'
  }
]

const TodoList = () => (
  <S.Container>
    <p>2 tasks marked as: &quot;Category&ldquo; and &quot;Terms&ldquo;</p>
    <ul>
      {Tasks.map((t) => (
        <li key={t.title}>
          <Task
            title={t.title}
            description={t.description}
            priority={t.priority}
            status={t.status}
          />
        </li>
      ))}
    </ul>
  </S.Container>
)

export default TodoList
