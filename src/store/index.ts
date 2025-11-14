import { configureStore } from '@reduxjs/toolkit'
import TaskReducer from './reducers/Tasks'
import FilteReducer from './reducers/Filter'
const store = configureStore({
  reducer: {
    tasks: TaskReducer,
    filter: FilteReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
export default store
