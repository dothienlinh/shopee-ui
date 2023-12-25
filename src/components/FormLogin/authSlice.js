import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    id: 0,
    username: '',
    email: '',
    firstName: '',
    lastName: '',
    gender: '',
    image: '',
    token: ''
  },
  reducers: {
    addAuth(state, action) {
      state.id = action.payload.id
      state.username = action.payload.username
      state.email = action.payload.email
      state.firstName = action.payload.firstName
      state.lastName = action.payload.lastName
      state.gender = action.payload.gender
      state.image = action.payload.image
      state.token = action.payload.token
    }
  }
})

export const { addAuth } = authSlice.actions
export default authSlice.reducer
