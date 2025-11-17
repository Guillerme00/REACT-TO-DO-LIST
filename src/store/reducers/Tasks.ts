import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as enums from '../../utils/enums/Task'

type TaskState = {
  itens: Task[]
}

const initialState: TaskState = {
  itens: []
}

export const TaskSlice = createSlice({
  name: 'Task',
  initialState,
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    edit: (state, action: PayloadAction<Task>) => {
      const TaskIndex = state.itens.findIndex((t) => t.id === action.payload.id)

      if (TaskIndex >= 0) {
        state.itens[TaskIndex] = action.payload
      }
    },
    register: (state, action: PayloadAction<Omit<Task, 'id'>>) => {
      const exist = state.itens.find(
        (task) =>
          task.title.toLowerCase() === action.payload.title.toLowerCase()
      )
      if (exist) {
        alert('This task already exists')
      } else {
        const LastTask = state.itens[state.itens.length - 1]

        const NewTask = {
          ...action.payload,
          id: LastTask ? LastTask.id + 1 : 1
        }
        state.itens.push(NewTask)
      }
    },
    changeStatus: (
      state,
      action: PayloadAction<{ id: number; finished: boolean }>
    ) => {
      const TaskIndex = state.itens.findIndex((t) => t.id === action.payload.id)
      if (TaskIndex >= 0) {
        state.itens[TaskIndex].status = action.payload.finished
          ? enums.Status.COMPLETED
          : enums.Status.PENDING
      }
    }
  }
})

export const { remove, edit, register, changeStatus } = TaskSlice.actions
export default TaskSlice.reducer
