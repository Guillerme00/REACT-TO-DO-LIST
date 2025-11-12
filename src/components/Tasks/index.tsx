import * as S from './styles'

const Task = () => (
  <S.Card>
    <S.Tittle>Task Name</S.Tittle>
    <S.Tag>Important</S.Tag>
    <S.Tag>Pending</S.Tag>
    <S.Description />
    <S.ActionBar>
      <S.Buttons>Edit</S.Buttons>
      <S.Buttons>Remove</S.Buttons>
    </S.ActionBar>
  </S.Card>
)

export default Task
