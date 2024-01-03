import { createSlice } from '@reduxjs/toolkit'

let cart
const local = JSON.parse(localStorage.getItem('cart'))

if (localStorage.getItem('cart')) {
  cart = [...local]

  cart.map((item) => {
    return {
      ...item,
      discountedPrice: item.total - (item.total * item.discountPercentage) / 100
    }
  })
} else {
  cart = []
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartList: cart
  },
  reducers: {
    setCart(state, action) {
      state.cartList = [...action.payload]
    },
    addCart(state, action) {
      state.cartList.unshift(action.payload)
      localStorage.setItem('cart', JSON.stringify(state.cartList))
    },
    deleteCart(state, action) {
      state.cartList.splice(action.payload.index, action.payload.amount)
      localStorage.setItem('cart', JSON.stringify(state.cartList))
    },
    addQuantity(state, action) {
      state.cartList[action.payload.index].quantity += action.payload.value
      localStorage.setItem('cart', JSON.stringify(state.cartList))
    },
    reduceQuantity(state, action) {
      state.cartList[action.payload.index].quantity -= action.payload.value
      localStorage.setItem('cart', JSON.stringify(state.cartList))
    },
    changeTotal(state, action) {
      const price = state.cartList[action.payload.index].price

      const quantity = state.cartList[action.payload.index].quantity

      state.cartList[action.payload.index].total = price * quantity
      localStorage.setItem('cart', JSON.stringify(state.cartList))
    },
    discountedPrice(state, action) {
      const total = state.cartList[action.payload.index].total
      const discountPercentage =
        state.cartList[action.payload.index].discountPercentage

      state.cartList[action.payload.index].discountedPrice =
        total - (total * discountPercentage) / 100

      localStorage.setItem('cart', JSON.stringify(state.cartList))
    },
    deleteMultipleProducts(state, action) {
      state.cartList.forEach((element, index) => {
        action.payload.forEach((item) => {
          if (element.id === item) {
            state.cartList.splice(index, 1)
          }
        })
      })
      localStorage.setItem('cart', JSON.stringify(state.cartList))
    }
  }
})

export const {
  addCart,
  setCart,
  deleteCart,
  addQuantity,
  reduceQuantity,
  changeTotal,
  discountedPrice,
  deleteMultipleProducts
} = cartSlice.actions
export default cartSlice.reducer
