import { useDispatch, useSelector } from 'react-redux'
import FilterCard from '../../components/FilterCard'
import * as S from './styles'
import { RootReducer } from '../../store'
import { ChangeInput } from '../../store/reducers/Filter'
import * as enums from '../../utils/enums/Task'
import { Buttons, Input } from '../../Styles/GlobalReset'
import { useNavigate } from 'react-router-dom'

type Props = {
  ShowFilter: boolean
}

const Sidebar = ({ ShowFilter }: Props) => {
  const Dispatch = useDispatch()
  const navigate = useNavigate()
  const { input } = useSelector((state: RootReducer) => state.filter)
  return (
    <S.Aside>
      <div>
        {ShowFilter ? (
          <>
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
          </>
        ) : (
          <Buttons onClick={() => navigate('/')} type="button">
            Return to homepage
          </Buttons>
        )}
      </div>
    </S.Aside>
  )
}

export default Sidebar
