import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  login: false
}

export const isLogin = createSlice({
  name: 'login',
  initialState,
  reducers: {
    setLogin(state) {
      state.login = !state.login
    }
  }
})

export const { setLogin } = isLogin.actions
export default isLogin.reducer
