import { useDispatch, useSelector } from 'react-redux'
import * as S from './styles'
import { ChangeFilter } from '../../store/reducers/Filter'
import * as enums from '../../utils/enums/Task'
import { RootReducer } from '../../store'

export type Props = {
  Conter: number
  text?: string
  choise: 'priority' | 'status' | 'all'
  value?: enums.Priority | enums.Status
}

const FilterCard = ({ Conter, text, choise, value }: Props) => {
  const Dispatch = useDispatch()
  const { filter } = useSelector((state: RootReducer) => state)

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

  const ActiveCard = VerifyActive()

  return (
    <S.Card Active={ActiveCard} onClick={Filter}>
      <S.Contador>{Conter}</S.Contador>
      <S.Label>{text}</S.Label>
    </S.Card>
  )
}

export default FilterCard
