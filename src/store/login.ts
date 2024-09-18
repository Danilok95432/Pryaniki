import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface LoginState {
  username: string,
  password: string,
  token: string
  status: boolean
}

const initialState: LoginState = {
  username: '',
  password: '',
  token: '',
  status: false
}

export const loginSlice = createSlice({
  name: 'login',
  initialState,
  reducers: {
    changeUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    changePassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },
    changeStatus: (state, action: PayloadAction<boolean>) => {
      state.status = action.payload
    },
    clearFields: (state) => {
      state.username = ''
      state.password = ''
    }
  },
})

export const { changeUsername, changePassword, setToken, changeStatus, clearFields } = loginSlice.actions

export default loginSlice.reducer
