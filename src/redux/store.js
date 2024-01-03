import { configureStore } from '@reduxjs/toolkit'
import languageReducer from '../components/LanguageMenu/languageSlice'
import authReducer from '../components/FormLogin/authSlice'
import productReducer from '../pages/ProductSinglePage/productSlice'
import cartReducer from '../components/CartMenu/cartSlice'

const store = configureStore({
  reducer: {
    language: languageReducer,
    auth: authReducer,
    product: productReducer,
    cart: cartReducer
  }
})

export default store
