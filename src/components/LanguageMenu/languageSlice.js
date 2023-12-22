import { createSlice } from '@reduxjs/toolkit'

const languageSlice = createSlice({
  name: 'language',
  initialState: {
    id: 'vn',
    language: 'Tiếng Việt'
  },
  reducers: {
    setLanguage(state, action) {
      state.id = action.payload.id
      state.language = action.payload.language
    }
  }
})

export { languageSlice }
export const { setLanguage } = languageSlice.actions
export default languageSlice.reducer
