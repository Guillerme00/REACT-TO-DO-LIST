import { Form, Option, Options } from './styles'
import {
  Input,
  MainContainer,
  SaveButton,
  Title
} from '../../Styles/GlobalReset'
import { useState, Dispatch, FormEvent } from 'react'
import { useDispatch } from 'react-redux'
import * as enums from '../../utils/enums/Task'
import { register } from '../../store/reducers/Tasks'
import { useNavigate } from 'react-router-dom'

const Forms = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [priority, setPriority] = useState(enums.Priority.NORMAL)

  const taskRegister = (event: FormEvent) => {
    event.preventDefault()
    dispatch(
      register({
        title,
        priority,
        description,
        status: enums.Status.PENDING
      })
    )
    navigate('/')
  }

  return (
    <MainContainer>
      <Title>New Task</Title>
      <Form onSubmit={taskRegister}>
        <Input
          value={title}
          onChange={(event) => setTitle(event.target.value)}
          type="text"
          placeholder="Title"
        />
        <Input
          value={description}
          onChange={({ target }) => setDescription(target.value)}
          as="textarea"
          placeholder="Description"
        />
        <Options>
          <p>Priority</p>
          {Object.values(enums.Priority).map((priority) => (
            <Option key={priority}>
              <Input
                value={priority}
                name="priority"
                type="radio"
                onChange={({ target }) =>
                  setPriority(target.value as enums.Priority)
                }
                id={priority}
                defaultChecked={priority === enums.Priority.NORMAL}
              />
              <label htmlFor={priority}>{priority}</label>
            </Option>
          ))}
        </Options>
        <SaveButton type="submit">Register</SaveButton>
      </Form>
    </MainContainer>
  )
}

export default Forms
