import { useEffect, useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { remove, edit } from '../../store/reducers/Tasks'
import ClassTask from '../../models/Task'

type Props = ClassTask

const Task = ({
  description: OriginalDescription,
  title,
  priority,
  status,
  id
}: Props) => {
  const dispatch = useDispatch()
  const [beeingEdited, setBeeingEdited] = useState(false)
  const [description, setDescription] = useState('')

  useEffect(() => {
    if (OriginalDescription.length > 0) {
      setDescription(OriginalDescription)
    }
  }, [OriginalDescription])

  function CancelEdition() {
    setDescription(OriginalDescription)
    setBeeingEdited(false)
  }

  return (
    <S.Card>
      <S.Tittle>{title}</S.Tittle>
      <S.Tag $Priority={priority}>{priority}</S.Tag>
      <S.Tag $Status={status}>{status}</S.Tag>
      <S.Description
        disabled={!beeingEdited}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
      />

      <S.ActionBar>
        {beeingEdited ? (
          <>
            <S.SaveButton
              onClick={() => {
                dispatch(
                  edit({
                    description,
                    title,
                    priority,
                    status,
                    id
                  })
                )
                setBeeingEdited(false)
              }}
            >
              Save
            </S.SaveButton>
            <S.CancelButton
              onClick={() => {
                CancelEdition()
              }}
            >
              Cancel
            </S.CancelButton>
          </>
        ) : (
          <>
            <S.Buttons onClick={() => setBeeingEdited(true)}>Edit</S.Buttons>
            <S.CancelButton onClick={() => dispatch(remove(id))}>
              Remove
            </S.CancelButton>
          </>
        )}
      </S.ActionBar>
    </S.Card>
  )
}

export default Task
