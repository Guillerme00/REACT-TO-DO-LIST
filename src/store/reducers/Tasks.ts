import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as emuns from '../../utils/enums/Task'

type TaskState = {
  itens: Task[]
}

const initialState: TaskState = {
  itens: [
    {
      id: 1,
      description: 'Description1',
      priority: emuns.Priority.IMPORTANT,
      status: emuns.Status.COMPLETED,
      title: 'Title1'
    },
    {
      id: 2,
      description: 'Description2',
      priority: emuns.Priority.NORMAL,
      status: emuns.Status.INPROGRESS,
      title: 'Title2'
    },
    {
      id: 3,
      description: 'Description3',
      priority: emuns.Priority.URGENT,
      status: emuns.Status.PENDING,
      title: 'Title3'
    }
  ]
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
    }
  }
})

export const { remove, edit } = TaskSlice.actions
export default TaskSlice.reducer
