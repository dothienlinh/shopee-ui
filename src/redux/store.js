import { configureStore } from '@reduxjs/toolkit'
import languageReducer from '../components/LanguageMenu/languageSlice'

const store = configureStore({
  reducer: {
    language: languageReducer
  }
})

export default store
