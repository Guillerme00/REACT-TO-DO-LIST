import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import * as enums from '../../utils/enums/Task'
import { Filters } from '../../containers/sidebar/styles'

type FilterState = {
  input: string
  choise: 'priority' | 'status' | 'all'
  value?: enums.Priority | enums.Status
}

const initialState: FilterState = {
  input: '',
  choise: 'all'
}

const FilterSlice = createSlice({
  name: 'Filter',
  initialState,
  reducers: {
    ChangeInput: (state, action: PayloadAction<string>) => {
      state.input = action.payload
    }
  }
})

export const { ChangeInput } = FilterSlice.actions
export default FilterSlice.reducer
