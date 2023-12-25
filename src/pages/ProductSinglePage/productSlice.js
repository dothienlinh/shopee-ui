import { createSlice } from '@reduxjs/toolkit'

export const productSlice = createSlice({
  name: 'product',
  initialState: {
    id: 0,
    title: '',
    description: '',
    price: 0,
    discountPercentage: 0,
    rating: 0,
    stock: 0,
    brand: '',
    category: '',
    thumbnail: '',
    images: []
  },
  reducers: {
    setProduct(state, action) {
      state.id = action.payload.id
      state.title = action.payload.title
      state.description = action.payload.description
      state.price = action.payload.price
      state.discountPercentage = action.payload.discountPercentage
      state.rating = action.payload.rating
      state.stock = action.payload.stock
      state.brand = action.payload.brand
      state.category = action.payload.category
      state.thumbnail = action.payload.thumbnail
      state.images = action.payload.images
    }
  }
})

export const { setProduct } = productSlice.actions
export default productSlice.reducer
