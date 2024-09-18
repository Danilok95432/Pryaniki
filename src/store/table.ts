import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface tableState {
  selectedRow: string,
  table: Array<Object>
}

const initialState: tableState = {
  selectedRow: '',
  table: []
}

export const tableSlice = createSlice({
  name: 'table',
  initialState,
  reducers: {
    setSelectedRow: (state, action: PayloadAction<string>) => {
      state.selectedRow = action.payload
    },
    setTable: (state, action: PayloadAction<any>) => {
      state.table = action.payload
    }
  },
})

export const { setSelectedRow, setTable } = tableSlice.actions

export default tableSlice.reducer
