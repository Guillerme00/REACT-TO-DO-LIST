import { useState } from 'react'
import * as S from './styles'
import * as enums from '../../utils/enums/Task'

type Props = {
  title: string
  priority: enums.Priority
  status: enums.Status
  description: string
}

const Task = ({ title, priority, status, description }: Props) => {
  const [beeingEdited, setBeeingEdited] = useState(false)
  return (
    <S.Card>
      <S.Tittle>{title}</S.Tittle>
      <S.Tag $Priority={priority}>{priority}</S.Tag>
      <S.Tag $Status={status}>{status}</S.Tag>
      <S.Description disabled readOnly defaultValue={description} />
      <S.ActionBar>
        {beeingEdited ? (
          <>
            <S.SaveButton>Save</S.SaveButton>
            <S.CancelButton onClick={() => setBeeingEdited(false)}>
              Cancel
            </S.CancelButton>
          </>
        ) : (
          <>
            <S.Buttons onClick={() => setBeeingEdited(true)}>Edit</S.Buttons>
            <S.CancelButton>Remove</S.CancelButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task
