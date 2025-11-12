import FilterCard from '../../components/FilterCard'
import * as S from './styles'

const Sidebar = () => (
  <S.Aside>
    <div>
      <S.Input type="text" placeholder="Seach" />
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

export default Sidebar
