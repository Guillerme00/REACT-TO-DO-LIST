import { useDispatch, useSelector } from 'react-redux'
import FilterCard from '../../components/FilterCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { ChangeInput } from '../../store/reducers/Filter'
import * as enums from '../../utils/enums/Task'
import { Input } from '../../Styles/GlobalReset'

const Sidebar = () => {
  const Dispatch = useDispatch()
  const { input } = useSelector((state: RootReducer) => state.filter)
  return (
    <S.Aside>
      <div>
        <Input
          type="text"
          placeholder="Seach"
          value={input}
          onChange={(event) => Dispatch(ChangeInput(event.target.value))}
        />
        <S.Filters>
          <FilterCard
            value={enums.Status.COMPLETED}
            choise="status"
            text="Completed"
          />
          <FilterCard
            value={enums.Priority.URGENT}
            choise="priority"
            text="Urgent"
          />
          <FilterCard
            value={enums.Status.INPROGRESS}
            choise="status"
            text="In Progress"
          />
          <FilterCard
            value={enums.Priority.IMPORTANT}
            choise="priority"
            text="Important"
          />
          <FilterCard
            value={enums.Status.PENDING}
            choise="status"
            text="Pending"
          />

          <FilterCard
            value={enums.Priority.NORMAL}
            choise="priority"
            text="Common"
          />

          <FilterCard choise="all" text="All" />
        </S.Filters>
      </div>
    </S.Aside>
  )
}

export default Sidebar
