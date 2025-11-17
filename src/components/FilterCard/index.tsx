import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { ChangeFilter } from '../../store/reducers/Filter'
import * as enums from '../../utils/enums/Task'
import { RootReducer } from '../../store'

export type Props = {
  text?: string
  choise: 'priority' | 'status' | 'all'
  value?: enums.Priority | enums.Status
}

const FilterCard = ({ text, choise, value }: Props) => {
  const Dispatch = useDispatch()
  const filter = useSelector((state: RootReducer) => state.filter)

  const VerifyActive = () => {
    const SameChoise = filter.choise === choise
    const SameValue = filter.value === value
    return SameChoise && SameValue
  }

  const Filter = () => {
    Dispatch(
      ChangeFilter({
        choise,
        value
      })
    )
  }

  const tasks = useSelector((state: RootReducer) => state.tasks)
  const ActiveCard = VerifyActive()

  const CountTasks = () => {
    if (choise === 'all') return tasks.itens.length
    if (choise === 'priority') {
      return tasks.itens.filter((item) => item.priority === value).length
    }
    if (choise === 'status') {
      return tasks.itens.filter((item) => item.status === value).length
    }
  }

  const Counter = CountTasks()

  return (
    <S.Card $Active={ActiveCard} onClick={Filter}>
      <S.Contador>{Counter}</S.Contador>
      <S.Label>{text}</S.Label>
    </S.Card>
  )
}

export default FilterCard
