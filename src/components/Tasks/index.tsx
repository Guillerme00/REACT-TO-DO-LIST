import { ChangeEvent, useEffect, useState } from 'react'
import * as S from './styles'
import { useDispatch } from 'react-redux'
import { remove, edit, changeStatus } from '../../store/reducers/Tasks'
import ClassTask from '../../models/Task'
import { SaveButton } from '../../Styles/GlobalReset'
import { Buttons } from '../../Styles/GlobalReset'

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

  function changeStatusTask(event: ChangeEvent<HTMLInputElement>) {
    dispatch(
      changeStatus({
        id,
        finished: event.target.checked
      })
    )
  }

  return (
    <S.Card>
      <label htmlFor={title}>
        <input type="checkbox" id={title} onChange={changeStatusTask} />
        <S.Tittle>
          {beeingEdited && <em>Editing: </em>}
          {title}
        </S.Tittle>
      </label>
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
            <SaveButton
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
            </SaveButton>
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
            <Buttons onClick={() => setBeeingEdited(true)}>Edit</Buttons>
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
