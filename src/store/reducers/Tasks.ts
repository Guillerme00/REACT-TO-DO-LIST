import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import Task from '../../models/Task'
import * as emuns from '../../utils/enums/Task'

export const TaskSlice = createSlice({
  name: 'Task',
  initialState: [
    new Task(
      'Study',
      emuns.Priority.IMPORTANT,
      emuns.Status.COMPLETED,
      'STUDY FOR TEST',
      1
    ),
    new Task(
      'Clean my room',
      emuns.Priority.NORMAL,
      emuns.Status.INPROGRESS,
      'YOU MUST TO CLEAN YOUR ROOM',
      2
    ),
    new Task(
      'Buy a new PC',
      emuns.Priority.URGENT,
      emuns.Status.PENDING,
      'I NEED A NEW PC',
      3
    )
  ],
  reducers: {
    remove: (state, action: PayloadAction<number>) => {
      state.filter((tarefa) => tarefa.id !== action.payload)
    }
  }
})

export const { remove } = TaskSlice.actions
export default TaskSlice.reducer
