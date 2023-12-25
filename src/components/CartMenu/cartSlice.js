import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartList: []
  },
  reducers: {
    setCart(state, action) {
      state.cartList = [...action.payload]
    },
    addCart(state, action) {
      state.cartList.push(action.payload)
    },
    deleteCart(state, action) {
      state.cartList.splice(action.payload, 1)
    },
    addQuantity(state, action) {
      state.cartList[action.payload.index].quantity += action.payload.value
    },
    reduceQuantity(state, action) {
      state.cartList[action.payload.index].quantity -= action.payload.value
    }
  }
})

export const { addCart, setCart, deleteCart, addQuantity, reduceQuantity } =
  cartSlice.actions
export default cartSlice.reducer
