import { useDispatch, useSelector } from 'react-redux'
import FilterCard from '../../components/FilterCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { ChangeInput } from '../../store/reducers/Filter'

const Sidebar = () => {
  const Dispatch = useDispatch()
  const { input } = useSelector((state: RootReducer) => state.filter)
  return (
    <S.Aside>
      <div>
        <S.Input
          type="text"
          placeholder="Seach"
          value={input}
          onChange={(event) => Dispatch(ChangeInput(event.target.value))}
        />
        <S.Filters>
          <FilterCard Text="Pending" Conter={5} />
          <FilterCard Text="Finished" Conter={5} />
          <FilterCard Text="Urgent" Conter={5} />
          <FilterCard Text="Important" Conter={5} />
          <FilterCard Text="Common" Conter={5} />
          <FilterCard Text="All" Conter={25} />
        </S.Filters>
      </div>
    </S.Aside>
  )
}

export default Sidebar
