import { useState } from 'react'
import * as S from './styles'

type Props = {
  title: string
  priority: string
  status: string
  description: string
}

const Task = ({ title, priority, status, description }: Props) => {
  const [beeingEdited, setBeeingEdited] = useState(false)
  return (
    <S.Card>
      <S.Tittle>{title}</S.Tittle>
      <S.Tag>{priority}</S.Tag>
      <S.Tag>{status}</S.Tag>
      <S.Description value={description} />
      <S.ActionBar>
        {beeingEdited ? (
          <>
            <S.Buttons>Save</S.Buttons>
            <S.Buttons onClick={() => setBeeingEdited(false)}>Cancel</S.Buttons>
          </>
        ) : (
          <>
            <S.Buttons onClick={() => setBeeingEdited(true)}>Edit</S.Buttons>
            <S.Buttons>Remove</S.Buttons>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task
